import {
  RawMill1AndhraNodes,
  RawMill1AndhraNodesType,
} from "../../../../reactflow";
import "./RawMill1AndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1AndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1AndhraNodes}
        nodeType={RawMill1AndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill",
          section: "Raw Mill-1 Grinding",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill-2",
              Tags: ["RM2_363FN8_RUN", "RM2_363FN8_PH"],
            },
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
              ],
            },
            ],
        }}
      />
    </ReactFlowProvider>
  );
};
