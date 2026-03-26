import { CementMill3Nodes, CementMill3NodesType } from "../../../reactflow";
import "./CementMill3.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill3 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3Nodes}
        nodeType={CementMill3NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "N3534WF1SZ1",
                "N3MILLFDSP",
                "N3564SR1IZ1",
                "N3564CM4FOL",
                "N3564CM4TZ3",
                "N3564CM4TZ2",
                "N3564SR1IZ1",
                "N3564MD1JZ1",
                "N3564CM4TZ4",
                "N3564MD2_IZ1",
                "N3594MD1_IZ1",
                "N2563FM1A01F01",
                "N2563BM1N05T01",
                "N2563BM1N02T01",
                "N2563WF1N01SZ1",
                "N2593BE1A1",
                "N2563BE1A1",
              ],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: [
                "N2563WP1M01Z01",
                "N2563WP2M01Z01",
                "N2563TV2M01Z01",
                "N2563FN7A1",
                "N2563SR1IZ1",
                "N2563FN5_IZ1",
                "N2563WP3PZ1",
                "N2563WP1N01P01",
                "N2563BF2AIRPR",
                "N2563WP3PRS",
                "N2563BH1_PZ3",
                "N2563SR1N01P01",
                "N2563BM1N02T01",
                "N2563BM1N05T01",
                "N2563SR1N31T01",
                "N2563FN4N01_T01",
                "N2563FN5N11T01",
                "N2563BF2N01T01",
                "N2563FN5N12T01",
                "N2563EP1N01T01",
                "N2563LU1N01T01",
                "N2563LU1N02T01",
                "N2563LU1N03T01",
                "N2563LU1N04T01",
                "N2563LU1N05T01",
                "N2563LU1N06T01",
                "N2563LU4N02T01",
                "N2563LU4N03T01",
                "N2563LU4N04T01",
                "N2563LU4N05T01",
                "N2563LU4N06T01",
                "N2563LU4N01T01",
                "N2563BH1_TE02",
                "N2563BH1_TE01",
                "N2563SR1TZ1",
                "N2563SR1TZ2",
                "N2563FN4KW",
                "N2563WP1FZ1",
                "N2K22HP1N01L01",
                "N2512HP1N01L01",
                "N2K22HP2N01L01",
                "N2563FN4N13V01",
                "N2563FN4N14V01",
                "N2563GB1VZ1",
                "N2563BF2N01P01",
                "N2563BH1_PZ1",
                "N2563BH1_PZ9",
                "N2563BH1_PZ2",
                "N2563BH1_DP",
                "N2563FN7SZ1",
                "N2563SR1SZ1",
                "N2563FN5_SZ1",
                "N2563FN5_SP",
                "N2563FN7_SP",
                "N2563FM1A01F01",
                "N2563LU7N01T01",
                "N2563LU7N03T01",
                "N2563LU7N02T01",
                "N2563BM1N03T01",
                "N2563BM1N01T01",
              ],
            },
            {
              Section: "Cement Mill-4", //line 1
              Tags: [
                "N3564MD2_IZ1",
                "N3564SR1IZ1",
                "N3564CM4TZ3",
                "N3564CM4TZ4",
                "N3564MD1JZ1",
                "N3594MD1_IZ1",
                "N3534WF1SZ1",
                "N3564CM4FOL",
                "N3564CM4TZ2",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
