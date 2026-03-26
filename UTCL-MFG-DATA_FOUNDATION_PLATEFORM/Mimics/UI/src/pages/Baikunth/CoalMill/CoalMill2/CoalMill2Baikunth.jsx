import "./CoalMill2Baikunth.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill2BaikunthNodes } from "../../../../reactflow/Baikunth/CoalMill2/coalMill2BaikunthNodes";
import { coalMill2BaikunthNodesType } from "../../../../reactflow/Baikunth/CoalMill2/coalMill2BaikunthNodesType";
import { ReactFlowProvider } from "reactflow";

export const CoalMill2Baikunth = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill2BaikunthNodes}
        nodeType={coalMill2BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 1
              Tags: ["COMPRS_PRESS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
