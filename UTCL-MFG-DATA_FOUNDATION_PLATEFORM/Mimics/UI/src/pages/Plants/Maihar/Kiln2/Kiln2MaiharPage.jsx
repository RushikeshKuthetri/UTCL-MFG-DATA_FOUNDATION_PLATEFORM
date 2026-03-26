import { Kiln2MaiharNodesType, Kiln2MaiharNodes } from "../../../../reactflow";
import "./Kiln2MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Kiln2MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln2MaiharNodes}
        nodeType={Kiln2MaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "442CN5_PT2",
                "481DQ2",
                "451DQ1",
                "462KH1_TT1",
                "442CN56_PT2",
                "462PU1_UP_LS",
                "462PU1",
                "442CN5_TT3",
                "442CN5_TT4",
                "442CN5_TT5",
                "442KR1_IR1_TT1",
                "KILN2 RPM",
                "KILN2 FILLING",
                "462LQ6",
                "462SD1",
                "452DQ1",
                "482BL1",
                "482BV1",
                "482BL2",
                "482BV2",
                "482FN2",
                "482BV3",
                "431FM1",
                "427FN2",
                "442FN1_XT03",
                "442FN1_XT04",
                "462KH1_TT2",
                "462MD1",
                "481DQ2_PH_LVL",
                "481DQ2_TPH",
                "441DG1_Y04_ZT",
                "441DG1_SA",
                "441AM1_CO",
                "441AM1_O2",
                "481BU1_FCV_ZT",
                "481BU1_FM",
                "451DQ2_PH_LVL",
                "461AM1_CO",
                "451DQ2_TPH",
                "452BI1_WI",
                "441DG1_Y03_ZT",
                "481BL1_PT2",
                "426BH1_DPT1",
                "441DG1_Y02_ZT",
                "441DG1_Y01_ZT",
                "481BU1 LVL",
                "_431BE1_M2_II",
                "451DQ2",
                "481BL1",
                "451DQ1_PID",
                "462GS_SYS1",
                "462GS_SYS2",
                "432DG1"                              
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
