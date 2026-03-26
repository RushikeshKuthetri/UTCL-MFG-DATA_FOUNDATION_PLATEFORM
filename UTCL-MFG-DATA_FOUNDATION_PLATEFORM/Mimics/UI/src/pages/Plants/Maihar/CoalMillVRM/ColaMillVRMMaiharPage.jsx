import "./ColaMillVRMMaiharPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  coalmillvrmmaiharNodesType,
  coalmillvrmmaiharnodes,
} from "../../../../reactflow";

export const ColaMillVRMMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalmillvrmmaiharnodes}
        nodeType={coalmillvrmmaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Coal Mill-1",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "51RT20",
                "51RT16",
                "51RT19",
                "481BI1_WI",
                "51RT17",
                "51RT18",
              ],
            },
            {
              Section: "Kiln", //line 2
              Tags: [
                "53RT22",
                "482BI1_WI",
                "SFBN_LVL",
                "53RT21",
                "53RT19",
                "53RT20",
                "53RT27",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
