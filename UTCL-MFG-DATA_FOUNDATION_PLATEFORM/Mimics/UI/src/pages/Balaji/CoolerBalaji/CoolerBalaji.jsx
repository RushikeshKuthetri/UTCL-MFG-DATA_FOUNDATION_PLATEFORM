import { CoolerBalajiNodes, CoolerBalajiNodesType } from "../../../reactflow";
import "./CoolerBalaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerBalaji = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerBalajiNodes}
        nodeType={CoolerBalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport",
              Tags: [
                "491SB1_LT01",
                "471WI1_FT01",
                "491DB2_IT01",
                "491DB1_IT01"
              ]
            },
            {
              Section: "Kiln",
              Tags: [
                "461KL1_TT04",
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
