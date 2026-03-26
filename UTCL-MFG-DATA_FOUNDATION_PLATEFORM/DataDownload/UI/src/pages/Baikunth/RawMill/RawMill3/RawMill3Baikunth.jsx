import "./RawMill3Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rawMill3BaikunthNodes,
  rawMill3BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const RawMill3Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill3BaikunthNodes}
        nodeType={rawMill3BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};
