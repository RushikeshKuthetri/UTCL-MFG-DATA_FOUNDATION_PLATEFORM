import "../../css/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "../../components/NotFound/NotFound";
import Loader from "react-js-loader";
export const KpiDashboard = () => {

  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  // let rooturl = "https://i4.utclconnect.com/";
  let rooturl = "https://utcmfgiiotlinxui001-testing.azurewebsites.net/";
  const { authProvider, userStatus } = useSelector((state) => state);
  let modules = authProvider.modules;
  let mimicAccess = authProvider?.modules?.includes("Mimics");
  const openurl = (url) => {
    window.open(rooturl + url);
  };
  // console.log(modules);
  return (
    <div className="row mx-0 new-dash align-items-center justify-content-around">
       {userStatus.loading && <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 cursor-pointer">
      {loader}
      </div>}
      <h3>KPI Dashboard</h3>
      {/* {mimicAccess && (
        <div
          className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 cursor-pointer"
          onClick={() => {
            openurl("blaine/");
            // window.open('https://utcmfgiiotlinxui001-opt.azurewebsites.net/');
          }}
        >
          <div className="card justify-content-center p-5">
            <p className="head">Blaine Prediction</p>
            <p className="mt-3 pt-3">Blaine Prediction</p>
            <div className="go-corner"></div>
          </div>
        </div>
      )} */}
     
      {/* {mimicAccess && (
        <div
          className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 cursor-pointer"
          onClick={() => {
            openurl("cement/");
          }}
        >
          <div className="card justify-content-center p-5">
            <p className="head">Cement OPT </p>

            <p className="mt-3 pt-3">Cement Optimization</p>
            <div className="go-corner"></div>
          </div>
        </div>
      )} */}
       {/* {mimicAccess && (
        <div
          className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 cursor-pointer"
          onClick={() => {
            openurl("klin/");
          }}
        >
          <div className="card justify-content-center p-5">
            <p className="head">Kiln OPT </p>

            <p className="mt-3 pt-3">Kiln Optimization</p>
            <div className="go-corner"></div>
          </div>
        </div>
      )} */}
      

      {modules && modules.length === 0 && !!!mimicAccess && (
        <NotFound
          heading="OOPs! No permission"
          message="You don't have permission to access the page. Please contact the admin."
        />
      )}
    </div>
  );
};
