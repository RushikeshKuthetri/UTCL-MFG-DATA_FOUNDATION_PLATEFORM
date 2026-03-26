import {
  ClinkerTransportKukurdihNodes,
  ClinkerTransportKukurdihNodesType,
} from "../../../../reactflow";
import "./ClinkerTransportKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportKukurdihNodes}
        nodeType={ClinkerTransportKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler",
              Tags: [
                "CL_491FN1_RUN",
                "CL_491FN1_PH",
                "CL_491SI1_LS",
                "CL_491SI1_LT1",
                "CL_491SI2_LS",
                "CL_491SI2_LT1",
                "Cl_491RA2_RUN",
                "CL_491FN2_RUN",
                "CL_491FN2_PH",
                "CL_491DB1_TT1",
                "CL_491DB1_RUN",
                "CL_491DB1_PH",
                "CL_491DB1_Curr",
                "CL_491DB2_RUN",
                "CL_491DB2_PH",
                "CL_491DB1_PCSL",
                "CL_491DB1_PCSR",
                "CL_491DB2_PCSL",
                "CL_491DB2_PCSR",
                "CL_491DB2_Curr",
                "CL_491BF2_PT1",
                "CL_491BF2_DPT",
                "CL_491BF1_DPT",
                "CL_491BF1_PT1",
                "CL_491RA1_RUN",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: ["KM_L41BC1_RUN", "KM_L41BC1_PH"],
            },
            {
              Section: "Raw Mill-2",
              Tags: ["RM2_361WF2_RUN", "RM2_361WF2_PH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
