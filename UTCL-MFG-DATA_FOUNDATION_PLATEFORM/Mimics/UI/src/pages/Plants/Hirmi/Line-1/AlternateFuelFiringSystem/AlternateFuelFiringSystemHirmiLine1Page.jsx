import "./AlternateFuelFiringSystemHirmiLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  AlternateFuelFiringSystemHirmiLine1Nodes,
  AlternateFuelFiringSystemHirmiLine1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const AlternateFuelFiringSystemHirmiLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AlternateFuelFiringSystemHirmiLine1Nodes}
        nodeType={AlternateFuelFiringSystemHirmiLine1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Calciner",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Preheater",
              Tags: ["AFR_AD01_TPH", "AFR_J1DB1BC1_W1", "J1DB1BC1_I1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
