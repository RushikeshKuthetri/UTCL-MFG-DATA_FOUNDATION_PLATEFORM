import { Kiln1MaiharNodesType, Kiln1MaiharNodes } from "../../../../reactflow";
import "./Kiln1MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Kiln1MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln1MaiharNodes}
        nodeType={Kiln1MaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: ["431FM1_TPH", "431BI01_WI"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
