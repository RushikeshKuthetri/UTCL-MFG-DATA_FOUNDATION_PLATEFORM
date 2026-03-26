import "./CoalMill1Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill1BaikunthNodes } from "../../../../reactflow/Baikunth/CoalMill1/coalMill1BaikunthNodes";
import { coalMill1BaikunthNodesType } from "../../../../reactflow/Baikunth/CoalMill1/coalMill1BaikunthNodesType";
import { ReactFlowProvider } from "reactflow";

export const CoalMill1Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill1BaikunthNodes}
        nodeType={coalMill1BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
