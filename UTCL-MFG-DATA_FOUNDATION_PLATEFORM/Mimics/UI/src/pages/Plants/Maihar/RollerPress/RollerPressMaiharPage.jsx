import "./RollerPressMaiharPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rollerpressmaiharNodesType,
  rollerpressmaiharnodes,
} from "../../../../reactflow";

export const RollerPressMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rollerpressmaiharnodes}
        nodeType={rollerpressmaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill-2",
          section: "Roller Press",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "362MD1_BTE2",
                "362MD2_BTE1",
                "R_STA_SP_Press_LR",
                "R_STA_SP_Press_Corr_L",
                "R_STA_SP_Press_Corr_R",
                "362MD1_M02",
                "362MD2",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
