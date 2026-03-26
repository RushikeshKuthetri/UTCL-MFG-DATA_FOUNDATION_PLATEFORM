import "./RollerPress2HirmiL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RollerPress2HirmiL2Nodes,
  RollerPress2HirmiL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RollerPress2HirmiL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPress2HirmiL2Nodes}
        nodeType={RollerPress2HirmiL2NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Raw Mill-2", //94
          section: "Roller Press-2",
          line: "2",
          extraTagDetails: [
            {
              Section: "PreHeater", // 29 occurrences
              Tags: [
                "PH_442AB18_SV",
                "PH_442AB20_SV",
                "PH_432FN3II_B",
                "PH_432DG2",
                "PH_422FN2_SPSPM",
                "PH_422LD2_ZT",
                "PH_422LD2_SPSPM",
                "PH_392BE1_M01",
                "PH_392BE1_M01II_B",
                "PH_392BE1_M02",
                "PH_392BE1_M02II_B",
                "PH_392BE1_M03",
                "PH_392BE1_M04",
                "PH_392FN5",
                "PH_392FN6",
                "PH_392FN7",
                "PH_392FN8",
                "PH_392FN9",
                "PH_392FNA",
                "PH_392FNB",
                "PH_392FNC",
                "PH_392FND",
                "PH_392FNE",
                "PH_392FNF",
                "PH_392FNG",
                "PH_392FNH",
                "PH_392FNJ",
                "PH_392FNK",
                "PH_392FNL",
                "PH_392FNM",
                "PH_392RA1",
                "PH_392RA2",
                "PH_392RA3",
                "PH_392RA4",
                "PH_412BF1_PT",
                "PH_422CV3",
                "PH_422FN2",
                "PH_422FN2_SI",
                "PH_432FM1_PT",
                "PH_432FN4II_B1",
                "PH_432RA3_II",
                "PH_432RA3II_B",
                "PH_432SG4",
                "PH_432SG4_SG5PT",
                "PH_442FN1_PT02",
              ],
            },
            {
              Section: "Kiln", // 7 occurrences
              Tags: [
                "KL_482BV1",
                "KL_482BV2",
                "KL_482BV3",
                "KL_482BV4",
                "KL_482BV5",
                "KL_482FP1",
                "KL_482FP2",
              ],
            },
            {
              Section: "Raw Mill", // 4 occurrences
              Tags: [
                "RM1_312BC2II_B",
                "RM1_312RBC1II_B",
                "RM1_312RE1",
                "RM1_322RE1",
              ],
            },
            {
              Section: "Coal Mill", // 1 occurrence
              Tags: ["PH_422FN2_SPSPA"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
