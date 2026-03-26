import {
  RawMill2AndhraNodes,
  RawMill2AndhraNodesType,
} from "../../../../reactflow";
import "./RawMill2AndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2AndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2AndhraNodes}
        nodeType={RawMill2AndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill-2",
          section: "Raw Mill-2 Grinding",
          line: "3",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "PH_423BF1_PT1",
                "PH_423BF1_PT2",
                "PH_423BF1_PT3",
                "PH_423BF1_TT1",
                "PH_423BF1_TT4",
                "PH_423SD2_RUN",
                "PH_423SD2_PH",
                "PH_423FN1_M01_RUN",
                "PH_423FN1_M01_PH",
                "PH_393SB1_LT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
