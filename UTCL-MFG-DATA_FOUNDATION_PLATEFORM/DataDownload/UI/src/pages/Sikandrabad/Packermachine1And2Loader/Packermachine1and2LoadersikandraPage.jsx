import "./Packermachine1and2LoadersikandraPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Packermachine1and2LoadersikandraNodes,
  Packermachine1and2LoadersikandraNodesType,
} from "../../../reactflow";

export const Packermachine1and2LoadersikandraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packermachine1and2LoadersikandraNodes}
        nodeType={Packermachine1and2LoadersikandraNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
