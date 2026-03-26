import "./LimestoneTransportCircuitRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  LimestoneTransportCircuitRawanL2Nodes,
  LimestoneTransportCircuitRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const LimestoneTransportCircuitRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={LimestoneTransportCircuitRawanL2Nodes}
        nodeType={LimestoneTransportCircuitRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Crusher",
              Tags: ["222BF1/M01",
                    "211BFG/M01",
                    "222BF2/M01",
                    "222BF3/M01",
                    "222BF4/M01",
                    "222AF1/M01",
                    "222BC1/222BC1/M01",
                    "222BC2/M01",
                    "222BC3/M01",
                    "222BC3A/M01",
                    "222BC5/M01",
                    "222BC4/M01",
                    "222BC7/M01",
                    "222BC6/M01",
                    "221BCG/M01",
                    "221BCF/M01",
                    "222BRU/M01",
                    "212BW1/FRA",
                    "222MS1/M01",
                    "211DG1/M01",
                    "222DG1/M01",
                    "222RA1/M01",
                    "222RA2/M01",
                    "211RAG/M01",
                    "222RA3/M01",
                    "222RA4/M01",
                    "222FN1/M01",
                    "222FN2/M01",
                    "211FNG/M01",
                    "222FN3/M01",
                    "222FN4/M01",
                    "222BC1WP/M01",
                    "222ST1/M01",
                    "222BC6/IA",
                    "222DG1/ZTA",
                    ],
            },
            {
              Section: "Raw Mill-2",
              Tags: [
                "221BCF/IA",
                "221BCG/TPH",
                "221BCG/IA",
                "222BC3A/SA",
                "222BC3A/IA",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
