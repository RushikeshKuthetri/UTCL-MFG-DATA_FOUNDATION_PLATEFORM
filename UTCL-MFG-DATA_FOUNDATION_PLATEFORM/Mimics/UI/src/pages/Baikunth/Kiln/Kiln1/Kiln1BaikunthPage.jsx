import "./Kiln1BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  kiln1BaikunthNodes,
  kiln1BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const Kiln1BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kiln1BaikunthNodes}
        nodeType={kiln1BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "PreHeater",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "K1_SNTZONE_T",
                "K1_KCOAL_FLOW",
                "K1_KLN_SPD",
                "K1_CEXF_RPM",
                "K1_CEXF_KW",
                "K1_CAFTDIL_T",
                "K1_KDPACBH",
                "K1_KRAF_RPM",
                "K1_CRAF_RPM",
                "K1_KEXF_RPM",
                "K1_KEXF_KW",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
