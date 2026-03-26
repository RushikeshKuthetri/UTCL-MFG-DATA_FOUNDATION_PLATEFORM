import {
  RawMillGrindingMaiharL4Nodes,
  RawMillGrindingMaiharL4NodesType,
} from "../../../../../reactflow";
import "./RawMillGrindingMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillGrindingMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillGrindingMaiharL4Nodes}
        nodeType={RawMillGrindingMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill-1",
          section: "",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill-6",
              Tags: ["RM_364MD1"],
            },
            {
              Section: "Cooler",
              Tags: ["RM_364WI1_FT1", "RM_364WI1_LT1"],
            },
            {
              Section: "PreHeater",
              Tags: [
                "PH_424FN1",
                "PH_424FN1_JI",
                "PH_424FN1_II",
                "PH_424BF1_TT1",
                "PH_424BF1_PT1",
                "PH_424BF1_DPT",
                "PH_424BF1_TT4",
                "PH_424BF1_PT2",
                "PH_424SD1_OLS",
                "PH_424SD1_CLS",
                "PH_424SD1_PH",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
