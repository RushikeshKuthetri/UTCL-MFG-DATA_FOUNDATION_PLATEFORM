import "./CementMill1BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill1BaikunthNodes,
  CementMill1BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const CementMill1BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1BaikunthNodes}
        nodeType={CementMill1BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Cement Mill",
          section: "CementMill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
