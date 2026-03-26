import "./CemetMillMainBirlaWhiteKhariaPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  cementmillmainbwkhariaNodesType,
  cementmillmainbwkharianodes,
} from "../../../../reactflow";

export const CemetMillMainBirlaWhiteKhariaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementmillmainbwkharianodes}
        nodeType={cementmillmainbwkhariaNodesType}
        plantDetails={{
          plantCode: "BWK",
          plantName: "Birla White - Kharia",
          sectionName: "Cement Mill Main",
          section: "Cement Mill",
        }}
      />
    </ReactFlowProvider>
  );
};
