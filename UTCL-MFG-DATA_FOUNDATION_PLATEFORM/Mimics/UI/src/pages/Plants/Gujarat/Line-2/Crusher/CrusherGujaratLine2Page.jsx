import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CrusherGujaratL2Nodes,
  CrusherGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CrusherGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CrusherGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherGujaratL2Nodes}
        nodeType={CrusherGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Crusher",
          section: "Crusher",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill-2", //line 2
              Tags: [
                "DATA_CR2_RM2_3",
                "A1A01_I1",
                "A1J02_W1_TODAY",
                "A1J02_W1_SHIFT",
                "A1J02_W1",
                "A1L1",
                "DATA_CR2_RM2_8",
                "A1J02_W1_YESTERDAY",
                "DATA_CR2_RM2_1",
                "DATA_CRSHR_RM2_03",
                "A5J02_SRG_TODAY",
                "A5J02_W1_SHIFT",
                "A5J02_SRG_TPH",
                "DATA_CRSHR_RM2_04",
                "DATA_CR2_RM2_15",
                "A5J02_W1_YESTERDAY",
                "A1A01_S1",
                "A1J02_I1",
                "A1J02_W1_TOT",
                "A1J05_BW_TPH",
                "A1M03_J2",
                "A1M03_L1",
                "A1M03T9_1",
                "A1M03T9_2",
                "A5J02_L2",
                "A5J02_W1_TOT",
                "A5J03_I1",
                "A5J03A_I1",
                "A5J04_I1",
                "A5J05_BW_TPH",
                "A5J05I2_CURRENT",
                "A5M03T9_1",
                "A5M03T9_2",
                "A5M03T9_3",
                "A5M03T9_4",
                "COMP_AIR_PS_TH11",
                "DATA_CRSHR_RM2_01",
                "DATA_CRSHR_RM2_02",
                "DATA_CRSHR_RM2_05",          
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
