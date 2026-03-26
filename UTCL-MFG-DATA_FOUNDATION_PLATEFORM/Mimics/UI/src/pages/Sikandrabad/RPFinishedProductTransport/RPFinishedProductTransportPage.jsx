import "./RPFinishedProductTransportPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rpFinishedProductTransportSikandrabadNodes,
  rpFinishedProductTransportSikandrabadNodesType,
} from "../../../reactflow";

export const RPFinishedProductTransportPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rpFinishedProductTransportSikandrabadNodes}
        nodeType={rpFinishedProductTransportSikandrabadNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Cement Mill",
          section: "Roller Press",
          line: "1",
          extraTagDetails: [
            {
              Section: "Packing Plant", //line 1
              Tags: ["641BE1_II", "642BE1_KW", "641HP1_WI", "642HP1_WI"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
