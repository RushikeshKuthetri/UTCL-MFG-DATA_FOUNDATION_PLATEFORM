import "./CoalMill4Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill4BaikunthNodes } from "../../../../reactflow/Baikunth/CoalMill4/coalMill4BaikunthNodes";
import { coalMill4BaikunthNodesType } from "../../../../reactflow/Baikunth/CoalMill4/coalMill4BaikunthNodesType";
import { ReactFlowProvider } from "reactflow";

export const CoalMill4Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill4BaikunthNodes}
        nodeType={coalMill4BaikunthNodesType}
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
