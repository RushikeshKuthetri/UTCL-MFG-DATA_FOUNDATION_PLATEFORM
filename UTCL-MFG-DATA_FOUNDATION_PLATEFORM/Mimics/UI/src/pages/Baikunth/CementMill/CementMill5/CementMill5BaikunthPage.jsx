import "./CementMill5BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill5BaikunthNodes,
  CementMill5BaikunthNodesType,
} from "../../../../reactflow";
import { ReactFlowProvider } from "reactflow";

export const CementMill5BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill5BaikunthNodes}
        nodeType={CementMill5BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Cement Mill-2",
          section: "CementMill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["PG_TPH6"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
