import {
  ClinkerTransportMaiharL4Nodes,
  ClinkerTransportMaiharL4NodesType,
} from "../../../../../reactflow";
import "./ClinkerTransportMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportMaiharL4Nodes}
        nodeType={ClinkerTransportMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cooler",
          section: "Clinker Transport",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: ["66CL8"],
            },
            {
              Section: "Cement Mill-1",
              Tags: [
                "CMH_514SG1_EOLS",
                "CMH_514SG1_ECLS",
                "CMH_514SG3_EOLS",
                "CMH_514SG3_ECLS",
                "CMH_514DG1_EOLS",
                "CMH_514DG1_ECLS",
                "CMH_514DG1_PH",
                "CMH_514DG2_PH",
                "CMH_514DG3_PH",
                "CMH_514SG2_EOLS",
                "CMH_514SG2_ECLS",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
