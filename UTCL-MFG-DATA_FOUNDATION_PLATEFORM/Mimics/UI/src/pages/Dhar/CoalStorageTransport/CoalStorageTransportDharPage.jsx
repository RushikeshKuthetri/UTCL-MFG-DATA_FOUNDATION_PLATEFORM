import "./CoalStorageTransportDharPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  coalStorageTransportDharNodes,
  coalStorageTransportDharNodesType,
} from "../../../reactflow";

export const CoalStorageTransportDharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalStorageTransportDharNodes}
        nodeType={coalStorageTransportDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "New Fine Coal Storage Transport",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};
