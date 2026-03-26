import { Cementmill1Nodes, Cementmill1NodesType } from "../../../reactflow";
import "./Cementmill1.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
export const Cementmill1 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cementmill1Nodes}
        nodeType={Cementmill1NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["551HP2-LZ1", "551HP1-LZ1", "562LU3PZ1", "562CM22U6_AP_B"],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["N2591SB5N01L01", "N2593SB6N01L01"],
            },
            {
              Section: "Cement Mill", //line 2
              Tags: ["N2591SB5N01L01", "N2593SB6N01L01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
