import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./Home.scss";
import { Card, NotFound, FilterCard4, ScreenLoader } from "../../components";
import { plantDetails } from "../../data/plantDetails/plantDetails";
import { accesslogshistory } from "../../utils";

export const Home = () => {
  const { authProvider } = useSelector((state) => state);
  const dispatch = useDispatch();

  const plants = JSON.parse(localStorage.getItem("login"))?.plants || [];

  useEffect(() => {
    dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
    accesslogshistory({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <div>
        <div class="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 ml-1">
          <span>Data Download</span>
        </div>
        {authProvider.isLogin ? (
          <>
            {authProvider?.plants?.length > 0 ? (
              <>
                <FilterCard4 data={{ plant: [], section: "" }} />
                {/* <div className="row ml-0 mr-0 mt-2">
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
