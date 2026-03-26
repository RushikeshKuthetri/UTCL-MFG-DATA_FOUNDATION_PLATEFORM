import Select from "react-select";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { getPlants } from "../../../utils";

function formatOptionLabel({ label }, { inputValue }) {
  return (
    <Highlighter
      highlightClassName="highlighter"
      highlightStyle={{ backgroundColor: "yellow" }}
      searchWords={[inputValue]}
      textToHighlight={label}
    />
  );
}

export const FilterSelect = () => {
  const dispatch = useDispatch();
  const { filterData, authProvider } = useSelector(
    (state) => state
  );
  return (
    <div className="colcustom-13 pl-2 pr-2">
      <label className="mb-2">
        Plant <span className="text-danger">*</span>
      </label>
      <Select
        className=
        // {
          //   validationErrorMsg ? "error-input basic-single" :
          "basic-single"
        // }
        classNamePrefix="select"
        value={filterData.plant.map(({label,value}) =>  {return {label,value}})}
        onChange={(selected) => {
          //   setValidationErrorMsg("");
          dispatch({ type: "ERROR_FALSE" });
        }}
        formatOptionLabel={formatOptionLabel}
        isClearable={true}
        isSearchable={true}
        // defaultValue={getPlants(["NDCW"])[0]}
        options={getPlants(authProvider?.plants)}
      />
    </div>
  );
};
