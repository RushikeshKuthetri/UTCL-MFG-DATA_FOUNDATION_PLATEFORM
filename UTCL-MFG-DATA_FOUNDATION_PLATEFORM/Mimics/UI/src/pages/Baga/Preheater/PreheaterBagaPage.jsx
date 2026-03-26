import { PreheaterBagaNodes, PreheaterBagaNodesType } from "../../../reactflow";
import "./PreheaterBagaPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreheaterBagaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterBagaNodes}
        nodeType={PreheaterBagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "Baga",
          sectionName: "PreHeater",
          section: "Preheater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler", //line 1
              Tags: ["Clinker_TPH"],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "Kiln_feed_rate",
                "461 MD1_SPEED",
                "461KS1_TT04",
                "461GA1_CO",
                "461KS1_TT02",
                "461KS1_TT03",
                "461KS3_TT04",
                "461KS3_TT01",
                "461KS1_TT01",
                "461KS3_TT02",
                "441FN4_MV_ST",
                "441FN3_MV_ST",
                "461KS3_TT03",
                "441FN1_MV_ST",
                "441FN2_MV_ST",
                "461KS2_TT03",
                "461KS2_TT01",
                "461KS2_TT02",
                "461KS2_TT04",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
