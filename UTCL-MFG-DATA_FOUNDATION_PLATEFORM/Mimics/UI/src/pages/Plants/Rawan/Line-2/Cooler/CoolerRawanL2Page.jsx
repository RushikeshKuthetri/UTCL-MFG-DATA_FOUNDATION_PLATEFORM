import "./CoolerRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoolerRawanL2Nodes,
  CoolerRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerRawanL2Nodes}
        nodeType={CoolerRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Cooler",
          section: "Cooler",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: [
                "472LD4/TE1",
                "462K01/TTA",
                "462K01/PTP",
                "472FN1/FT01",
                "472FN2/FT01",
                "472FN3/FT01",
                "472FN4/FT01",
                "472FN5/PT01",
                "472FN5/FT01",
                "472FN6/FT01",
                "472FN7/FT01",
                "472FN8/FT01",
                "472FN9/FT01",
                "472FNA/FT01",
                "472FNB/FT01",
                "472FNC/FT01",
                "472FND/FT01",
                "422BH1/PTP",
              ],
            },
            {
              Section: "WHRS",
              Tags: ["WHRS/MW", "472SD6/DPTD"],
            },
            {
              Section: "Clinker Transport",
              Tags: [
                "512PC1/TE1",
                "492PC1/TTP",
                "492PC1/TTP1",
                "492PC1/XA1",
                "492SB1/LTP",
                "492SB2/LTP",
                "492DG1/M01",
                "492PC2/M01",
                "512PC2/M01",
                "512PC3/M01",

              ],
            },
            {
              Section: "PreHeater",
              Tags: ["422SK1/NOX","442CP1/M01",
                    "442CP2/M01",
                    "442CP3/M01",
                    "442CP4/M01",
                    "442CP5/M01",
                    "442AD1/442AD1",
                    "442AD2/442AD2",
                    "442AD2/442AD3",
                    "442AD4/442AD4",
                    "442AD5/442AD5",
                    ],
            },
            {
              Section: "Raw Mill-2",
              Tags: ["442CP5/AIR_PRESSURE"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
