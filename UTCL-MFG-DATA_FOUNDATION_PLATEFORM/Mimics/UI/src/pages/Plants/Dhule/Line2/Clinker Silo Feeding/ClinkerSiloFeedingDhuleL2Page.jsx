import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ClinkerSiloFeedingDhuleL2Nodes, ClinkerSiloFeedingDhuleL2NodesType } from "../../../../../reactflow";
import "./ClinkerSiloFeedingDhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const ClinkerSiloFeedingDhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerSiloFeedingDhuleL2Nodes}
        nodeType={ClinkerSiloFeedingDhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Cement Mill-1",
          section: "",
          line:"2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["MH2_492SI1_LS1",
                  "MH2_492SI1_LS2",
                  "MH2_492SI1_LS3",
                  "MH2_512BC3_DE_MG",
                  "MH2_512BC3_NDE_MG",
                  "MH2_512BC3_VGTU",
                  "MH2_512BC4_NDE_MG",
                  ],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
