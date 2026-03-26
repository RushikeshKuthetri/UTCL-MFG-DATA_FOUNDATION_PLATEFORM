import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill1Nodes, coalMill1Nodetype } from "../../../reactflow";
import "./CoalMill1.scss";

export const CoalMill1 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill1Nodes}
        nodeType={coalMill1Nodetype}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler", //line 1
              Tags: [
                "C1_AFWF1_SZ1",
                "C1_L41FN1_SP",
                "C1_L41FN1_IZ1",
                "C1_AFWF1_AO",
                "C1_AFWF1_FZ1",
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "C1_L91FB1WZ1",
                "C1_L91FB2WZ1",
                "C1_AFWF1_AO",
                "C1_AFWF1_SZ1",
                "C1_AFWF1_FZ1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
