import "./RawMill2Rajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  rawmill2RajshreeNodes,
  rawmill2RajshreeNodesType,
} from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill2RajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawmill2RajshreeNodes}
        nodeType={rawmill2RajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Raw Mill-2",
          section: "Raw Mill-2",
          line: "4",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "RM_BF_AIR_RCVR_PTP",
                "RM1_K94BI1_WIA",
                "RM1_K94BF1_DPTP",
                "RM1_364BE1_M01_BTE1",
                "RM1_364BE1_M01_BTE2",
                "RM1_364BE1_M01_WTE1",
                "RM1_364BE1_M01_WTE2",
                "RM1_364BE1_M01_WTE3",
                "RM1_364BE1_M01_WTE4",
                "RM1_364BE1_M01_WTE5",
                "RM1_364BE1_M01_WTE6",
                "RM1_364BE1_M02_BTE1",
                "RM1_364BE1_M02_BTE2",
                "RM1_364BE1_M02_WTE1",
                "RM1_364BE1_M02_WTE2",
                "RM1_364BE1_M02_WTE3",
                "RM1_364BE1_M02_WTE4",
                "RM1_364BE1_M02_WTE5",
                "RM1_364BE1_M02_WTE6",
                "RM1_364MD1_BTE1",
                "RM1_364MD1_BTE2",
                "RM1_364MD1_TEA1",
                "RM1_364MD1_TEA2",
                "RM1_364MD1_TEA3",
                "RM1_364MD1_WTE1",
                "RM1_364MD1_WTE2",
                "RM1_364MD1_WTE3",
                "RM1_364MD1_WTE4",
                "RM1_364MD1_WTE5",
                "RM1_364MD1_WTE6",
                "RM1_GB_BRG_FR",
                "RM1_364SR1_BTE1",
                "RM1_364SR1_BTE2",
                "RM1_364SR1_BTE5",
                "RM1_364SR1_BTE6",
                "RM1_364SR1_BTE7",
                "RM1_364SR1_WTE1",
                "RM1_364SR1_WTE2",
                "RM1_364SR1_WTE3",
                "RM1_364SR1_XTA1",
                "RM1_364SR1_XTA2",
                "RM1_364LQA_TEA1",
                "RM1_364LQA_TEA2",
                "RM1_364LQA_TEA3",
                "RM1_364LQA_TEA4",
                "RM1_364LQA_TEA5",
                "RM1_364LQA_TEA6",
                "RM1_364MD2_BTE1",
                "RM1_364MD2_BTE2",
                "RM1_364MD2_TEA1",
                "RM1_364MD2_TEA2",
                "RM1_364MD2_TEA3",
                "RM1_364MD2_WTE1",
                "RM1_364MD2_WTE2",
                "RM1_364MD2_WTE3",
                "RM1_364MD2_WTE4",
                "RM1_364MD2_WTE5",
                "RM1_364MD2_WTE6",
                "RM1_GB_BRG_MR",
                "RM1_364FN1_BTE3",
                "RM1_364FN1_BTE4",
                "RM1_364FN1_BTE1",
                "RM1_364FN1_BTE2",
                "RM1_364FN1_WTE1",
                "RM1_364FN1_WTE2",
                "RM1_364FN1_WTE3",
                "RM1_364FN1_WTE4",
                "RM1_364FN1_WTE5",
                "RM1_364FN1_WTE6",
                "RM1_364FN1_XTA3",
                "RM1_364FN1_XTA2",
                "RM1_364FN1_XTA4",
                "RM1_364FN1_XTA1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
