import { RawMill2Nodes, RawMill2NodesType } from "../../../reactflow";
import "./RawMill2.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2 = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2Nodes}
        nodeType={RawMill2NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Raw Mill-1",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "PreHeater", //line 1
              Tags: [
                "K2422FN2N01IZ1_HW",
                "K2422BH1N04P01",
                "K2422FN2N01SZ1_HW",
                "K2432BE2N02IZ1",
                "K2392BE1N01T01",
                "K2392BE1N01T02",
                "K2422FN1N13V01",
                "K2422FN1N13V02",
                "K2422FN1N01IZ2",
              ],
            },
            {
              Section: "Raw Mill-2", //line 1
              Tags: [
                "R2362LUFN01P01",
                "R2362LUFGN31T01",
                "R2362M04RPM",
                "R2362RM1V06V01",
                "R2E522S1N02IZ1",
                "R2362THRUSTTZ2",
                "R2422BH1_N03T01",
                "R2362THRUSTTZ1",
                "R2362ROL3_ZZ1",
                "R2362ROL1_ZZ1",
                "R2362ROL2_ZZ1",
                "R2362LU1THICKNESS1",
                "R2362LU1THICKNESS2",
                "R2362FN1N13V01",
                "R2362FN1N13V02",
                "R2362SR1V01",
                "R2362RM1N01V02",
                "R2362FN2N01P01",
                "R2362FN1M01S01",
                "R2362SR1_SZ1",
                "R2312BC1A1",
                "R2312BC2A1",
                "R2362RM1IZ1",
                "R2362SR1_IZ1",
              ],
            },
            {
              Section: "PreHeater", //line 2
              Tags: [
                "K2422FN2N01IZ1_HW",
                "K2422BH1N04P01",
                "K2422FN2N01SZ1_HW",
                "K2392BE1N01T01",
                "K2392BE1N01T02",
                "K2422FN1N13V01",
                "K2422FN1N13V02",
              ],
            },
            {
              Section: "Kiln", //line 2
              Tags: ["K23A2FB1N01WGH"],
            },
            {
              Section: "Raw Mill-2", //line 2
              Tags: [
                "R2362FN1M01J01_PID_SP:Mv",
                "R2362FN1M01J01_PID_SP:WSP",
                "R2362RM1N013T01_PID",
                "R2362RM1N013T01_PID:MV.Value",
                "R2362RM1N013T01_PID:IO.WSP.VALUE",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["K23A2FB1N01WGH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
