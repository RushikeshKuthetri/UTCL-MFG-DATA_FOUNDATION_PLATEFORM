import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  kiln2KMAndFiringBasantnagarL2Nodes,
  kiln2KMAndFiringBasantnagarL2NodesType,
} from "../../../../../reactflow";
import "./Kiln2CoalMillAndFiringBasantNagarL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Kiln2CoalMillAndFiringBasantNagarL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kiln2KMAndFiringBasantnagarL2Nodes}
        nodeType={kiln2KMAndFiringBasantnagarL2NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Kiln-2 Coal Mill & Firing",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};
