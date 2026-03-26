import "./RawMill2HopperBuildingRawanLine3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMill2HopperBuildingRawanL3Nodes,
  RawMill2HopperBuildingRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill2HopperBuildingRawanLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2HopperBuildingRawanL3Nodes}
        nodeType={RawMill2HopperBuildingRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill-2",
          section: "",
          line:"3",
          extraTagDetails: [
            {
              Section: "Raw Mill-1",
              Tags: ["RM1_333HP5_LS",
                    "RM1_333HP6_LS",
                    "RM1_333HP7_LS",
                    "RM1_333HP8_LS",
                    "RM1_313FN3_RUN",
                    "RM1_313FN3_PH",
                    "RM1_313BF3_RUN",
                    "RM1_323BF3_RUN",
                    "RM1_323FN3_RUN",
                    "RM1_323FN3_PH",
                    "RM1_323BF4_RUN",
                    "RM1_323FN4_RUN",
                    "RM1_323FN4_PH",
                    "RM1_313BC4_PH",
                    "RM1_323BC4_PH",
                    "RM1_323BC5_PH",
                    "RM1_323BC6_PH",
                    "RM1_313RA3_RUN",
                    "RM1_323RA3_RUN",
                    "RM1_323RA4_RUN",
                    ],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
