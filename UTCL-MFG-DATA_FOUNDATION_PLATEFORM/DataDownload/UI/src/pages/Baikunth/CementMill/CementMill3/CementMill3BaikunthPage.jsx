import "./CementMill3BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill3BaikunthNodes,
  CementMill3BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const CementMill3BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3BaikunthNodes}
        nodeType={CementMill3BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Cement Mill-3",
          section: "CementMill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["CM2_FASH_SFF_REF"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
