import {
  CoolerESPAndhraNodes,
  CoolerESPAndhraNodesType,
} from "../../../../reactflow";
import "./CoolerESPAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerESPAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerESPAndhraNodes}
        nodeType={CoolerESPAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Cooler",
          section: "Cooler ESP",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill-2",
              Tags: [
              "RM2_363MD5_II_IIIT",
              "RM2_363MD5_II_IIT",
              "RM2_363MD5_II_IT",
              "RM2_363MD5_GB_TT1",
              "RM2_363MD5_GB_BT1",
              "RM2_363MD5_GB_XT1",
              "RM2_363MD5_GB_XT2",
              "RM2_363MD5_GB_XT3",
              "RM2_363MD5_GB_XT4",
              "RM2_363MD5_GB_XT5",
              "RM2_363MD5_GB_XT6",
              "RM2_363MD5_II",
              "RM2_363MD5_JI",
              "RM2_363MD4_GB_XT1",
              "RM2_363MD4_GB_XT2",
              "RM2_363MD4_GB_XT3",
              "RM2_363MD4_GB_XT4",
              "RM2_363MD4_GB_XT5",
              "RM2_363MD4_GB_XT6",
              "RM2_363MD4_II",
              "RM2_363MD4_JI",
              "RM2_363MD4_GB_BT1",
              "RM2_363MD4_II_IIIT",
              "RM2_363MD4_II_IIT",
              "RM2_363MD4_II_IT",
              "RM2_363LQ5_PT1",
              "RM2_363LQ5_TT1",
              "RM2_363MD5_WT1",
              "RM2_363MD5_BTE1",
              "RM2_363MD5_BTE2",
              "RM2_363MD5_XT1",
              "RM2_363MD5_XT2",
              "RM2_363MD4_XT1",
              "RM2_363MD4_XT2",
              "RM2_363MD4_WT1",
              "RM2_363MD4_BTE1",
              "RM2_363MD4_BTE2",
              "RM2_363MD5_WTE1",
              "RM2_363MD5_WTE2",
              "RM2_363MD5_WTE3",
              "RM2_363MD5_WTE4",
              "RM2_363MD5_WTE5",
              "RM2_363MD5_WTE6",
              "RM2_363MD4_WTE1",
              "RM2_363MD4_WTE2",
              "RM2_363MD4_WTE3",
              "RM2_363MD4_WTE4",
              "RM2_363MD4_WTE5",
              "RM2_363MD4_WTE6"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
