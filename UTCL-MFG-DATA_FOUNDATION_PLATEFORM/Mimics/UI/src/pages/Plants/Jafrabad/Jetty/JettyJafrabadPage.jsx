import "./JettyJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  JettyJafrabadNodes,
  JettyJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const JettyJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={JettyJafrabadNodes}
        nodeType={JettyJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "General",
          section: "General",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater", //line 1
              Tags: ["CEMS_ROOM_TEMP"],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["KILN_MAIN_DRIVE_ROOM_TEMP"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["462WI130_N01F02"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["NJ1074_FI"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
