import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { rmhLine1KothpoutliPopup3Payloads } from "../../../../../data/Kotputli/line-1/RawMillHandling/popupPayload/rmhLine1KothpoutliPopupPayloads";
import { BulkLoadingDhuleLine2Nodes, BulkLoadingDhuleLine2NodeTypes } from "../../../../../reactflow";
import "./BulkLoadingDhuleLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const BulkLoadingDhuleLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BulkLoadingDhuleLine2Nodes}
        nodeType={BulkLoadingDhuleLine2NodeTypes}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Packing Plant",
          section: "",
          line:"2",
        }}
      />
    </ReactFlowProvider>
  );
};
