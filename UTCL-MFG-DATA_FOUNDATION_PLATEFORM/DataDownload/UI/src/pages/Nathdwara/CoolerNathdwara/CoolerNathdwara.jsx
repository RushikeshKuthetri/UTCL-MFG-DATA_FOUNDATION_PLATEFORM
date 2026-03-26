import {
  CoolerNathdwaraNodes,
  CoolerNathdwaraNodesType,
} from "../../../reactflow";
import "./CoolerNathdwara.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerNathdwara = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerNathdwaraNodes}
        nodeType={CoolerNathdwaraNodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cooler",
          section: "Cooler",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["C2492DP1A1", "C2492DP2A1"],
            },
            {
              Section: "WHRS", //line 2
              Tags: ["WHRS_MW"],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "C2472EP1N01T03",
                "C2472GQ1N01T01",
                "C2472GQ1N02T01",
                "C2472GQ1N03T01",
                "C2472GQ1N05T01",
                "C2472GQ1N06T01",
                "C2472GQ1N07T01",
                "C2472GQ1N08T01",
                "C2472GQ1N05T01A",
                "C2472GQ1N06T01A",
                "C2472GQ1N07T01A",
                "C2472GQ1N08T01A",
                "C2472WP1N01F01",
                "C2_472KH1N01P01",
                "C2472FN1N01P01",
                "WHRS_MW",
                "C2472FN1A_IZ1",
                "C2472WP1N01L01",
                "C2472FN1A_SZ1",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["C2472FN1A_IZ1", "C2472FN1A_SZ1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
