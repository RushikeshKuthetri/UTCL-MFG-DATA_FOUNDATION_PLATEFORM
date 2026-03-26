import "./RawMill2GrindingRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMill2GrindingRawanL3Nodes,
  RawMill2GrindingRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill2GrindingRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2GrindingRawanL3Nodes}
        nodeType={RawMill2GrindingRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill-2",
          section: "",
          line:"3",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: ["PH_423CV1_RUN",
                    "PH_423CV1_PH",
                    "PH_423CV2_RUN",
                    "PH_423CV2_PH",
                    "PH_423CV3_RUN",
                    "PH_423CV3_PH",
                    "RM_393BF3_RUN",
                    "PH_423SD2_EOLS",
                    "PH_423SD2_ECLS",
                    "PH_423SD2_PH",
                    "RM_393RA7_RUN",
                    ],
            },{
              Section: "Raw Mill-1",
              Tags: ["RM1_313RE1_RUN","RM1_323RE1_RUN",],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
