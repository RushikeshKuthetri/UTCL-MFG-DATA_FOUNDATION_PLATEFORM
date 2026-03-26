import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Kiln2PyroprocessBasantNagarL2Nodes,
  Kiln2PyroprocessBasantNagarL2NodesType,
} from "../../../../../reactflow";
import "./Kiln2PyroProcessBasantNagarL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Kiln2PyroProcessBasantNagarL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln2PyroprocessBasantNagarL2Nodes}
        nodeType={Kiln2PyroprocessBasantNagarL2NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Kiln-2 PyroProcess",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};
