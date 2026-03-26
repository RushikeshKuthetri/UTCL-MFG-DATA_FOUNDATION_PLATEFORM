import "./RawMill1RawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMill1RawanL2Nodes,
  RawMill1RawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill1RawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1RawanL2Nodes}
        nodeType={RawMill1RawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill-2",
              Tags: [
                "312BC2/IA",
                "332HP1/WIA",
                "332WF3/FRA",
                "312RE1/TG_II_MASTER",
                "312RE1/TG_II_SLAVE",
                "312RE1/II1",
                "312RE1/II2",
                "312RE1/REC_DISTANCE",
              ],
            },
            {
              Section: "PreHeater",
              Tags: ["442LD4/ZTA", "442FN1_M01/PTP1"],
            },{
              Section: "Clinker Transport",
              Tags: ["442LD4/ZTA", "442FN1_M01/PTP1","CM_531WF2"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
