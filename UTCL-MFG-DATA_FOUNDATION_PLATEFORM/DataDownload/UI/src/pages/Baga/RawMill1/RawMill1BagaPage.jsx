import { RawMill1BagaNodes, RawMill1BagaNodesType } from "../../../reactflow";
import "./RawMill1BagaPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1BagaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1BagaNodes}
        nodeType={RawMill1BagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "baga",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "421BH1_PT02",
                "421BH1_TT02",
                "421BH1_PT01",
                "421BH1_PT03",
                "421BH1_TT01",
              ],
            },
            {
              Section: "Raw Mill-2", //line 1
              Tags: [
                "391FN5_M",
                "391FNF_M",
                "312BC2_IT01",
                "361FN2_IT01",
                "361FN2_JT01",
                "311BC1_IT01",
                "211BC2_IT01",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
