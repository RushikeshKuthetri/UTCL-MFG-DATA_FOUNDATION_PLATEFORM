import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { coalMill2Nodes, coalMill2Nodetype } from "../../../reactflow";
import "./CoalMill2.scss";

export const CoalMill2 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill2Nodes}
        nodeType={coalMill2Nodetype}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: ["A2482CRS1_WL"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "HYDTANK_TEMP",
                "A2_L42RM1N05P01",
                "A2L42RM1N06V01",
                "A2L42RM1N06V02",
                "A2L42WP1A01F01",
                "A2L42RM1N03T01",
                "A2L42SR1_SZ1",
                "A2L42SR1_IZ1",
                "A2_L42RM1N02P01",
                "A2_L42RM1N01T01",
                "A2_L42RM1N04P01",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
