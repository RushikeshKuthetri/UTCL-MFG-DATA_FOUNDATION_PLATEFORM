import {
  RollerPressOverviewNodes,
  RollerPressOverviewNodesType,
} from "../../../../reactflow";
import "./RollerPressOverviewPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressOverviewPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressOverviewNodes}
        nodeType={RollerPressOverviewNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill-2",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["362SC2"],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["362SC2"],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "392BE1_II",
                "392BE1_BTE1",
                "392BE1_BTE2",
                "392BE1_II",
                "362CN1_PT",
                "362CN2_PT",
                "362VS1_TT1",
                "362VS1_TT2",
                "362LD3_ZT",
                "362LQ4_PT1",
                "362SG1_ZT",
                "362VS1_PT1",
                "362VS1_PT2",
                "362VS1_PT3",
                "362SR1_ITA",
                "362SR1_TT1",
                "362SR1_TT2",
                "362SR1_PT2",
                "362BI1_WI",
                "362DU3_TT",
                "362DU3_PT",
                "RP_TOTAL_FEED",
                "362BE1_A",
                "362BC1",
                "362MD1_M02",
                "362SC2",
                "362FN2",
                "362RA2",
                "362MS1",
                "362BE1",
                "362RA1",
                "362MD2",
                "332WF5",
                "332BC2",
                "332WF1",
                "332BC3",
                "362RA3",
                "362RA4",
                "392FN1",
                "392FN2",
                "392FN3",
                "392FN4",
                "392FN5",
                "392FN6",
                "392SM1",
                "V23HPR14_LVL",
                "V23HPR12_LVL",
                "V23HPR13_LVL",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
