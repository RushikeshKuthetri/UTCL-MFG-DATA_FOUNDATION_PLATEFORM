import "./CoalMill3Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill3BaikunthNodes } from "../../../../reactflow/Baikunth/CoalMill3/coalMill3BaikunthNodes";
import { coalMill3BaikunthNodesType } from "../../../../reactflow/Baikunth/CoalMill3/coalMill3BaikunthNodesType";
import { ReactFlowProvider } from "reactflow";

export const CoalMill3Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill3BaikunthNodes}
        nodeType={coalMill3BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Coal Mill",
          section: "Coal Mill-2",
        }}
      />
    </ReactFlowProvider>
  );
};
