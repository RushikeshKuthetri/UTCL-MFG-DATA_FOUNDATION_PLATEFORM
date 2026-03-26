import {
  RawMill2HopperBuildingAndhraNodes,
  RawMill2HopperBuildingAndhraNodesType,
} from "../../../../reactflow";
import "./RawMill2HopperBuildingAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2HopperBuildingAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2HopperBuildingAndhraNodes}
        nodeType={RawMill2HopperBuildingAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill-2",
          section: "Raw Mill 2 Hopper Building",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "RM1_313FN4_RUN",
                "RM1_313FN4_PH",
                "RM1_323FN5_RUN",
                "RM1_323FN5_PH",
                "RM1_323FN6_RUN",
                "RM1_323FN6_PH",
                "RM1_313BC4_PH",
                "RM1_313BC4_RUN",
                "RM1_323BC6_PH",
                "RM1_323BC6_RUN",
                "RM1_323BC7_PH",
                "RM1_323BC7_RUN",
                "RM1_323BC8_PH",
                "RM1_323BC8_RUN",
                "RM1_313RA4_RUN",
                "RM1_323RA5_RUN",
                "RM1_323RA6_RUN",
                "RM1_313BF4_DPT",
                "RM1_313BF4_PT",
                "RM1_323BF5_DPT",
                "RM1_323BF5_PT1",
                "RM1_323BF6_DPT",
                "RM1_323BF6_PT1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
