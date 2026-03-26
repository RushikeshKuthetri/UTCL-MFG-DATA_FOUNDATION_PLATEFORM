import "./RawMill1GrindingRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import { RawMill1GrindingRawanL3Nodes, RawMill1GrindingRawanL3NodesType } from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill1GrindingRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1GrindingRawanL3Nodes}
        nodeType={RawMill1GrindingRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill-1",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "RM_393BF1_RUN", 
                "RM_393RA3_RUN", 
                "RM_393RA3_PH"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
