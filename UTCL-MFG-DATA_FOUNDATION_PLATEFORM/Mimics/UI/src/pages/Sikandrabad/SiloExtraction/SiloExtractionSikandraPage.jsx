import "./SiloExtractionSikandraPage.scss";
import { ReactFlowProvider } from "reactflow";
// import {
//   // useLatestData,
//   useLatestDataNew,
//   useSocketConnection,
// } from "../../../utils";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  SiloExtractionSikandraNodes,
  SiloExtractionSikandraNodesType,
} from "../../../reactflow";

export const SiloExtractionSikandraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={SiloExtractionSikandraNodes}
        nodeType={SiloExtractionSikandraNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: [
                "_611SB1_LI",
                "_612SB1_LI",
                "591FN9",
                "591DG1",
                "591DG1",
                "591DG1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
