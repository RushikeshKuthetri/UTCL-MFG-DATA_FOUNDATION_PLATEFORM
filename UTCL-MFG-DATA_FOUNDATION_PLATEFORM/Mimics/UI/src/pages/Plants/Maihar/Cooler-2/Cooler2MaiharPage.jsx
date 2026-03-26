import {
  cooler2maiharNodes,
  cooler2maiharNodesType,
} from "../../../../reactflow";
import "./Cooler2MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Cooler2MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cooler2maiharNodes}
        nodeType={cooler2maiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: [
                "462KH1_TT1",
                "462KH1_PT1",
                "_42PT61",
                "_42FT60",
                "_42PT60",
                "_42CF01_AS",
                "42VS60",
                "_42CF02_AS",
                "_42CF03_AS",
                "_42CF04_AS",
                "_42CF05_AS",
                "_42CF06_AS",
                "_42CF07_AS",
                "_42FT59",
                "_42PT59",
                "42CF01",
                "42CF04",
                "42CF06",
                "K2DBC2",
                "K2CLRESPZ2",
                "K2CLRESPZ3",
                "K2CLRRF1",
                "K2CLRRF3",
                "42DC",
                "442MD140_M",
                "K2_Grease_Spray_System",
                "472EP1_PT1",
                "_42KV01",
                "_42KV02",
                "_42KV03",
                "K2CLRESPZ1_MA",
                "K2CLRESPZ2_MA",
                "K2CLRESPZ3_MA",
                "472EP1_PT2",
                "_41LV01_AIC",
                "461KH1_TT1",
                "C1ESPZ2",
                "41CF01",
                "41CF03",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
