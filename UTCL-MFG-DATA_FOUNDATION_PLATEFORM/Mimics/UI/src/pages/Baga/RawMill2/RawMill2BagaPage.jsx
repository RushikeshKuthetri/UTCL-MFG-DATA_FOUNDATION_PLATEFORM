import { RawMill2BagaNodes, RawMill2BagaNodesType } from "../../../reactflow";
import "./RawMill2BagaPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2BagaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2BagaNodes}
        nodeType={RawMill2BagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "baga",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "422BH1_PT01",
                "422BH1_TT01",
                "422BH1_TT02",
                "422BH1_PT02",
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["321BC1_IT01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
