import {
  Cooler1NathdwaraNodes,
  Cooler1NathdwaraNodesType,
} from "../../../reactflow";
import "./Cooler1Nathdwara.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Cooler1Nathdwara = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cooler1NathdwaraNodes}
        nodeType={Cooler1NathdwaraNodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport", //line 1
              Tags: ["C1_491DB1_IZ1", "C1_491DB2_IZ1"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["L41BH1-DP1"],
            },
            {
              Section: "Crusher", //line 1
              Tags: ["_2111X1TZ1_"],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "C1_471CISPZ2",
                "C1_471CISPZ3",
                "C1_4712U2_EZ1",
                "C1_4712U2_IZ1",
              ],
            },
            {
              Section: "Kiln", //line 2
              Tags: ["K1_461KL1TZE"],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "C1_1R1LAVGPRS",
                "C1_471EP1_TZ1A",
                "C1_491DB1_IZ1",
                "C1_491DB2_IZ1",
                "C1_491CV4_IZ1",
                "C1_471HC1_IZ1",
                "C1_471GQ1TZ1",
                "K1_461KL1TZE",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
