import "./RawMill1Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rawMill1BaikunthNodes,
  rawMill1BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const RawMill1Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill1BaikunthNodes}
        nodeType={rawMill1BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
