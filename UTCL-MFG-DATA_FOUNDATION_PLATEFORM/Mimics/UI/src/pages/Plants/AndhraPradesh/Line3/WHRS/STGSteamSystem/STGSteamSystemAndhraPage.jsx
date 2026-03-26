import { STGSteamSystemAndhraNodes, STGSteamSystemAndhraNodesType } from "../../../../../../reactflow";
import "./STGSteamSystemAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const STGSteamSystemAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={STGSteamSystemAndhraNodes}
        nodeType={STGSteamSystemAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "STG Steam System",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};
