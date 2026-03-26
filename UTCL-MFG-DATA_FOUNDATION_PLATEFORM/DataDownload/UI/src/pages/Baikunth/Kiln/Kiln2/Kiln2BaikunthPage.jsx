import "./Kiln2BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  kiln2BaikunthNodes,
  kiln2BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const Kiln2BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kiln2BaikunthNodes}
        nodeType={kiln2BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "PreHeater",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: [
                "K2_KCOAL_FLOW",
                "K2_KLN_SPD",
                "K2_IL_NOX",
                "K2_SNTZONE_T",
                "K2_KEXF_RPM",
                "K2_KEXF_CUR",
                "K2_CEXF_RPM",
                "K2_CEXF_CUR",
                "K2_KBFPHF_DFT",
                "K2_KBFPHF_T",
                "K2_NMFCOL_T",
                "K2_NMFCILTOP_PRS",
                "K2_CBH_DP",
                "K2_CAFTDIL_T",
                "K2_CBEFPHF_DFT",
                "K2_CBEFPHF_T",
                "K2_KAFTDIL_T",
                "K2_KDPACBH",
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: ["K1_KCY3_DFT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
