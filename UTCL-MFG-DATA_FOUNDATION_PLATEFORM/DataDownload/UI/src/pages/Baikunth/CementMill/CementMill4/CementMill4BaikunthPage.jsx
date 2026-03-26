import "./CementMill4BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill4BaikunthNodes,
  CementMill4BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const CementMill4BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill4BaikunthNodes}
        nodeType={CementMill4BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Cement Mill",
          section: "CementMill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["PG_TPH5"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
