import "./RawMill4Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rawMill4BaikunthNodes,
  rawMill4BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const RawMill4Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill4BaikunthNodes}
        nodeType={rawMill4BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["R1_CIRF_RPM", "R1_CIRF_KW"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
