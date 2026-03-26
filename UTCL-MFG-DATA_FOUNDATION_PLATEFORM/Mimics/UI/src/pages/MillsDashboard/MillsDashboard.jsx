import { useParams } from "react-router-dom";
import { MillsDashboardComponent, ScreenLoader } from "../../components";
// import { useLiveDataAvailable } from "../../utils/custom hooks/useLiveDataAvailable";
import { useSelector } from "react-redux";
import {  getSpecificPlant } from "../../utils";
import { getSectionofSpecificPlant } from "../../utils/milldashboard/getSectionofSpecificPlant";


export const MillsDashboard = () => {
  const { name } = useParams();
  const { userStatus } = useSelector((state) => state);

  let accPlants = JSON.parse(localStorage.getItem("login")).plants;
  const searchedPlant = getSpecificPlant(name);
  var plantSection = getSectionofSpecificPlant(searchedPlant, accPlants);
  // const { id } = searchedPlant;
  // useLiveDataAvailable(id);

  // Get the live data of thr plant
  // const { id } = searchedPlant;
  // // Send Access history
  // useEffect(() => {
  //   accesslogshistory({ plant: id });
  // }, [id]);
  
  return (
    <div >
      {userStatus.loading ? (
        <ScreenLoader />
        // <div className="loader-bg">
        //   <span className="loader"> </span>
        // </div>
      ) : (
        <MillsDashboardComponent
          plantSection={plantSection}
          searchedPlant={searchedPlant}
        />
      )}
    </div>
  );
};
