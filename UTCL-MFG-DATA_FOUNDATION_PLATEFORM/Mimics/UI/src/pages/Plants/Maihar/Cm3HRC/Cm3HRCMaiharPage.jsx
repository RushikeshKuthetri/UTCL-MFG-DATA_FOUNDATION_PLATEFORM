import "./Cm3HRCMaiharPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  cm3hrcmaiharNodesType,
  cm3hrcmaiharnodes,
} from "../../../../reactflow";

export const Cm3HRCMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cm3hrcmaiharnodes}
        nodeType={cm3hrcmaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-3",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
