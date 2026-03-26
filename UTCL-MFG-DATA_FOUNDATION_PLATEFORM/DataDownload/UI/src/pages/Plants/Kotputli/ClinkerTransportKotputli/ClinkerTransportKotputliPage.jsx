import {
  ClinkerTransportKotputliNodes,
  ClinkerTransportKotputliNodesType,
} from "../../../../reactflow";
import "./ClinkerTransportKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportKotputliNodes}
        nodeType={ClinkerTransportKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cooler",
              Tags: [
                "CL_492SB1_LT",
                "CL_492FN2_RUN",
                "CL_492FN2_PH",
                "CL_492FN1_RUN",
                "CL_492FN1_PH",
                "Cl_492RA3_RUN",
                "CL_492RA1_RUN",
                "CL_492RA2_RUN",
                "CL_492DG1_OLS",
                "CL_492DG1_CLS",
                "CL_492DG1_PH",
                "CL_492CG1_OLS",
                "CL_492CG1_CLS",
                "CL_492CG1_PH",
                "CL_492BS1_OLS",
                "CL_492BS1_CLS",
                "CL_492BS1_PH",
                "CL_492SG1_OLS",
                "CL_492SG1_CLS",
                "CL_492SG1_PH",
                "CL_492BF2_DPT",
                "CL_492FN2_SI",
                "CL_492FN2_II",
                "CL_492DB1_II",
                "CL_492SG1_ZT",
                "CL_492BF1_DPT",
                "CL_492FN1_SI",
                "CL_492FN1_II",
                "CL_492FN1_WTE1",
                "CL_492FN1_WTE2",
                "CL_492BF2_PT1",
                "CL_492DB2_II",
                "CL_492BF1_PT1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
