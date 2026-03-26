import { Cementmill2Nodes, Cementmill2NodesType } from "../../../reactflow";
import "./Cementmill2.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
export const Cementmill2 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cementmill2Nodes}
        nodeType={Cementmill2NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "541FB1WZ1",
                "541FM1WZ1",
                "591SB1_LZ1",
                "591SB3_LZ1",
                "N2591SB5N01L01",
                "N2593SB6N01L01", //line 1
                "591SB2_LZ1",
                "591SB4_LZ1",
                "561SR1_MAN",
                "5612U8PZ1",
                "511DP2IZ1",
                "541BL-PZ1",
                "K21AC1IZ1",
                "K21AC2IZ1",
                "541FM2-FZ1",
                "561SR1TZ2",
                "561SR1SZ1",
                "561BM1TZ3_NEW",
                "561MD3IZ1",
                "531WF2SZ1",
                "561VM2FZ1",
                "531LU1SZ1",
                "561FM1FZ1",
                "591MD1IZ1",
                "561SR1_TZ1",
                "561SR1IZ1",
                "561BH1-DP1",
                "561WP2-SZ1",
                "561BM1-TZ8",
                "531LU1-AO",
                "531LU1-FZ1",
                "511DP4IZ2",
              ],
            },
            {
              Section: "Cement Mill",
              Tags: ["N2591SB5N01L01", "N2593SB6N01L01"], //line 2
            },
            {
              Section: "Cement Mill-3",
              Tags: ["N2591SB5N01L01", "N2593SB6N01L01"], //line 1
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
