import "./ClinkerTransportRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  ClinkerTransportRawanL2Nodes,
  ClinkerTransportRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const ClinkerTransportRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportRawanL2Nodes}
        nodeType={ClinkerTransportRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Clinker Transport",
          section: "Clinker Transport",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "512RA7/M01",
                "512BCB/HP3_LEVEL",
                "492BF2/DPTP",
                "512BF5/DPTP",
                "512BF6/DPTP",
                "5121RA8/IA",
                "512BF7/DPTP",
                "512BF9A/DPTP",
                "512BFD/DPTP",
                "512BCB/TOTALISER_COUNTER",
                "512BC2/TOTALISER_COUNTER",
                "512BC1/TOTALISER_COUNTER",
                "492FN2/SA",
                "492FN1/VIB",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
