import { CementMill1MalkapurLine1Nodes, CementMill1MalkapurLine1NodesType } from "../../../../../reactflow";
import "./CementMill1MalkapurLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill1MalkapurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1MalkapurLine1Nodes}
        nodeType={CementMill1MalkapurLine1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "Cement Mill 1",
          section: "Cement Mill 1",
          // line: "1",
          // extraTagDetails: [
          //   {
          //     Section: "Cement Mill-3", //line 1
          //     Tags: ["65KW03", "65KW02", "65KW01"],
          //   },
          //   {
          //     Section: "Cement Mill-2",
          //     Tags: ["61FARB1"],
          //   },
          // ],
        }}
      />
    </ReactFlowProvider>
  );
};
