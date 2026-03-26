import "./RawMill2Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rawMill2BaikunthNodes,
  rawMill2BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const RawMill2Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill2BaikunthNodes}
        nodeType={rawMill2BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
