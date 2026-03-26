import {
  RawMillGrindingKotputliNodes,
  RawMillGrindingKotputliNodesType,
} from "../../../../reactflow";
import "./RawMillGrindingKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillGrindingKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillGrindingKotputliNodes}
        nodeType={RawMillGrindingKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Crusher-1",
              Tags: ["CR_212BC2_RUN"],
            },
            {
              Section: "WHRS",
              Tags: ["W2_STG_MT_250_RUN"],
            },
            {
              Section: "Cement Mill",
              Tags: ["CM_573GA1_CLS"],
            },
            {
              Section: "PreHeater",
              Tags: [
                "PH_422FN1_II",
                "PH_422FN1_JI",
                "PH_422FN1_SI",
                "PH_422FN1_RUN",
                "PH_422FN1_PH",
                "PH_422BF1_PT1",
                "PH_422BF1_TT1",
                "PH_422BF1_DPT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
