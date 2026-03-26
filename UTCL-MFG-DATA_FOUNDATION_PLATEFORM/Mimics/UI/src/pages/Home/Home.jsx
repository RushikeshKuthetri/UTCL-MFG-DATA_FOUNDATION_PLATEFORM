import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./Home.scss";
import { Card, NotFound, FilterCard4, ScreenLoader } from "../../components";
import { plantDetails } from "../../data/plantDetails/plantDetails";
import { accesslogshistory } from "../../utils";
import { fetchTagsCountAPI } from "../../utils/apicalls/fetchTagCount";

export const Home = () => {
  const { authProvider } = useSelector((state) => state);
  const dispatch = useDispatch();

  const plants = JSON.parse(localStorage.getItem("login"))?.plants || [];
  const tagAndLineCount = authProvider.tagAndLineCount
  useEffect(() => {
    dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
    accesslogshistory({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Added BY TRDIAI to show the plants based North Suoth east west region (24-03-3026)
  const REGION_PRIORITY = ["HO", "North", "Central", "East", "Vidharbha", "West", "South", "Other Plants"];

  const groupedPlants = plantDetails
    .filter((plant) => plants?.includes(plant.id)) // ✅ filter first
    .reduce((acc, plant) => {
      const region = plant.region || "Other Plants";
      if (!acc[region]) acc[region] = [];
      acc[region].push(plant);
      return acc;
    }, {});

  useEffect(() => {
    const getTagCounts = async () => {
      try {
        const response = await fetchTagsCountAPI(plants);
        dispatch({
          type: "TAG_AND_LINE_COUNT",
          payload: response?.data || {},
        });
      } catch (err) {
        console.error(err);
      }
    };
    if (plants?.length) {
      getTagCounts();
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <div>
        <div class="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 ml-1">
          <span>Plants</span>
        </div>

        {authProvider.isLogin ? (
          <>
            {authProvider?.plants?.length > 0 ? (
              <>
                {/* <FilterCard4 data={{ plant: [], section: "" }} /> */}
                {/* <div className="flex flex-wrap ml-0 mr-0 mt-[2px] bg-[var(--bg-main-container)] w-full">
                  {plantDetails
                    .sort((a, b) => {
                      const lowerA = a.name.toLowerCase();
                      const lowerB = b.name.toLowerCase();
                      if (lowerA < lowerB) {
                        return -1;
                      }
                      if (lowerA > lowerB) {
                        return 1;
                      }
                      return 0;
                    })
                    .filter((tag) => plants.includes(tag.id))
                    .map((tag) => {
                      return (
                        <Card
                          key={tag.id}
                          data={tag}
                          plantId={tag.id}
                          view="View All Sections"
                        />
                      );
                    })}
                </div> */}

                {/* Added BY TRDIAI to show the plants based North South West East region (24-03-3026) */}
                {REGION_PRIORITY.map((region) => {
                  const regionPlants = groupedPlants[region];
                  if (!regionPlants) return null;
                  return (
                    <div key={region} className="mb-4">
                      {/* Region Heading */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="text-[17px] font-medium text-[var(--text-color)] whitespace-nowrap">
                          {region}
                        </span>
                        <div className="flex-1 h-px bg-gray-300" />
                      </div>

                      {/* 🔁 YOUR SAME CODE (just replace plantDetails → regionPlants) */}
                      <div className="flex flex-wrap ml-0 mr-0 mt-[2px] bg-[var(--bg-main-container)] w-full">
                        {regionPlants
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .filter((tag) => plants?.includes(tag.id))
                          .map((tag) => (
                            <Card
                              key={tag.id}
                              data={tag}
                              plantId={tag.id}
                              view="View All Sections"
                              stats={tagAndLineCount[tag.id]}
                            />
                          ))}
                      </div>

                    </div>
                  )
                })}

              </>
            ) : (
              <NotFound
                heading="OOPs! No permission"
                message="You don't have permission to access the page. Please contact the admin."
              />
            )}
          </>
        ) : (
          <ScreenLoader />
        )}
      </div>
    </div>
  );
};
