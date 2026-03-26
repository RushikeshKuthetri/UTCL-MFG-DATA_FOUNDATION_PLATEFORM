import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  RollerPressChilamkurL1Nodes,
  RollerPressChilamkurL1NodeTypes,
} from "../../../../../reactflow";
import "./RollerPressChilamkurL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RollerPressChilamkurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressChilamkurL1Nodes}
        nodeType={RollerPressChilamkurL1NodeTypes}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilamkur",
          sectionName: "Roller Press",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};
