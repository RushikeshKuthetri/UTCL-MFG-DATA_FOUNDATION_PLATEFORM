import { BlackContainer, TextContainerWithWrapWord } from "../../../index";

export const AwarpurCBAMines = () => {
  return (
    <div className="AwarpurCBAMines w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <table>
          <tr>
            <th>Sr No</th>
            <th>Name of element</th>
            <th>Curent Value</th>
            <th>Rolling(30 mins)</th>
            <th>
              <div>Shift A</div>
              <div>06:00-14:00</div>
            </th>
            <th>
              <div>Shift B</div>
              <div>14:00-22:00</div>
            </th>
            <th>
              <div>Shift C</div>
              <div>22:00-06:00</div>
            </th>
          </tr>
          <tr>
            <td className="text-white">1</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Tons",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Tons:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Tons:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Tons_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Tons_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Tons_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">2</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Tph",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Tph:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Tph:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Tph_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Tph_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Tph_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">3</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Kgpm",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Kgpm:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Kgpm:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Kgpm_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Kgpm_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Kgpm_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">4</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "CaO",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_CaO:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_CaO:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_CaO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_CaO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_CaO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">5</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "SiO2",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_SiO2:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_SiO2:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_SiO2_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_SiO2_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_SiO2_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">6</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Al2O3",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Al2O3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Al2O3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Al2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Al2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Al2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">7</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Fe2O3",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Fe2O3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Fe2O3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Fe2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Fe2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Fe2O3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">8</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "K2O",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_K2O:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_K2O:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_K2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_K2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_K2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">9</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "Na2O",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_Na2O:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_Na2O:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_Na2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_Na2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_Na2O_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">10</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "LSF",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_LSF:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_LSF:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_LSF_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_LSF_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_LSF_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">11</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "MgO",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_MgO:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_MgO:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_MgO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_MgO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_MgO_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">12</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "SO3",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_SO3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_SO3:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_SO3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_SO3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_SO3_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">13</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "SM",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_SM:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_SM:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_SM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_SM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_SM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="text-white">14</td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-2",
                  label: "IM",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CurrentProduct.Dry basis_IM:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "Rolling.Analysis1.Dry basis_IM:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftA_IM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftB_IM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "ShiftC_IM_DB:F",
                  useClass: "greenTxt mx-auto text",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="stone2"></div>
        <div className="stone2"></div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="d-flex ml-5">
          <div className="stone1"></div>
          <div className="stone1"></div>
        </div>
        <div className="d-flex">
          <div className="stone1"></div>
          <div className="stone1"></div>
          <div className="stone1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-4 roller-jcb"></div>
      <div className="position-absolute single-text-5">
        <i className="fa-solid fa-hotel"></i>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <i class="fa-solid fa-tower-cell"></i>
        <i className="fa-solid fa-tower-cell mt-2 ml-2"></i>
        <i className="fa-solid fa-tower-cell mt-3 ml-2"></i>
        <i className="fa-solid fa-tower-cell mt-4 ml-2"></i>
      </div>
      <div className="pipeHr position-absolute pipe-1"></div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-white mr-2 position-absolute single-text-7",
          label: "Conveyor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white mr-2 position-absolute single-text-8",
          label: "Crusher",
        }}
      />
    </div>
  );
};
