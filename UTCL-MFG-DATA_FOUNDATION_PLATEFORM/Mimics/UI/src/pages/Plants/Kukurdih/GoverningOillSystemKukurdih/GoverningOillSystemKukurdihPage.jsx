import {
  GoverningOillSystemKukurdihNodes,
  GoverningOillSystemKukurdihNodesType,
} from "../../../../reactflow";
import "./GoverningOillSystemKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const GoverningOillSystemKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={GoverningOillSystemKukurdihNodes}
        nodeType={GoverningOillSystemKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "WHRS",
          section: "WHRS",
          line: "1",
          extraTagDetails: [
            {
              Section: "Crusher",
              Tags: [
                "CR_211BF2_DPT", "CR_211BF3_DPT", "CR_211BF4_DPT", "CR_211BF6_DPT", "CR_211BF7_DPT", 
                "CR_211BF9_DPT", "CR_211BF5_DPT", "CR_211BC2_NDE_MG", "CR_211BC2_DE_MG", "CR_211BC2_VGT", 
                "CR_211BC1_NDE_MG", "CR_211BC1_DE_MG", "CR_211BC5_NDE_MG", "CR_211BC5_DE_MG", "CR_211BC4_NDE_MG", 
                "CR_211BC4_DE_MG", "CR_211BC3_VGT", "CR_211BC3_DE_MG", "CR_211BC3_NDE_MG", "CR_211ST1_PH", 
                "CR_211WP1_ZS1", "CR_211WP1_ZS2", "CR_211WP1_ZS3", "CR_211WP1_DPS"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
