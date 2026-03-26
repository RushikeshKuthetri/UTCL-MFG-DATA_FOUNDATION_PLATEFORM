import "./CementMill2BaikunthPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill2BaikunthNodes,
  CementMill2BaikunthNodesType,
} from "../../../../reactflow/Baikunth";
import { ReactFlowProvider } from "reactflow";

export const CementMill2BaikunthPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2BaikunthNodes}
        nodeType={CementMill2BaikunthNodesType}
        plantDetails={{
          plantCode: "BKCW",
          plantName: "baikunth",
          sectionName: "Cement Mill-2",
          section: "CementMill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["CM1_LNV_OL_TEMP"],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["CM2_FLY_ASH_SFF_3_TPH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
