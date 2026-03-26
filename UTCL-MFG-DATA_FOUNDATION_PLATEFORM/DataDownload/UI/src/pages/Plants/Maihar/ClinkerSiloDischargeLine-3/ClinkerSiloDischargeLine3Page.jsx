import {
  ClinkerSiloDischargeLine3Nodes,
  ClinkerSiloDischargeLine3NodesType,
} from "../../../../reactflow";
import "./ClinkerSiloDischargeLine3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerSiloDischargeLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerSiloDischargeLine3Nodes}
        nodeType={ClinkerSiloDischargeLine3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 3
              Tags: [
                "430BC10",
                "430PC5",
                "52RS1",
                "52RS2",
                "IT6025",
                "LT6001",
                "LT6002",
                "LT6003",
                "PZ20",
                "PZ21",
                "430DV2",
                "430DV3",
                "430DV5",
                "430DV6",
                "430DV7",
                "430DV8",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
