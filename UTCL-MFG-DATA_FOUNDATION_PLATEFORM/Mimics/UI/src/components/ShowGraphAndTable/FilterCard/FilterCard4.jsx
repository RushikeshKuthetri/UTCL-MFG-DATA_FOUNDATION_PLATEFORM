// import { useState } from "react";
// import moment from "moment";
// import Highlighter from "react-highlight-words";
// import { useSelector, useDispatch } from "react-redux";
// import Select from "react-select";
// import { getPlants, minsIntervalOptions } from "../../../utils";
// import { getTagnameBasedOnPlantAndSection } from "../../../utils/SelectionBoxOptions/getTagname";
// import { getSectionBasedOnPlant } from "../../../utils/SelectionBoxOptions/sectionOption";

// import axios from "axios";
// import { BASE_URL } from "../../../base";
// import { Alert } from "../../Alert/Alert";
// import { ClipLoader } from "react-spinners";
// import { useRef } from "react";
// import { useEffect } from "react";
// import "./FilterCard.css";
// import "react-datepicker/dist/react-datepicker.css";

// import DatePicker from "react-datepicker";
// import { getTagUID } from "../../../utils/getTagUID";

// import { FilterLabel } from "../Filter Input/FilterLabel";
// import { InputValidationText } from "../Filter Input/InputValidationText";
// import { endTimePayload } from "../../../data/payload/endTimePayload";
// import { getLinesBasedOnPlant } from "../../../utils/SelectionBoxOptions/linesOption";

// export const FilterCard4 = ({ showingInTrend, data }) => {
//   const selectedPlant = useRef();
//   const selectedLine = useRef();
//   const selectedSection = useRef();
//   const selectedTag = useRef();
//   const { filterData, authProvider, userStatus, showPopup } = useSelector(
//     (state) => state
//   );

//   const [sectionDropDisable, setSectionDropDisable] = useState(true);
//   const [inputArr, setInputArr] = useState([]);
//   const dispatch = useDispatch();
//   const [plantSelected, setPlantSelected] = useState([]);
//   const [sectionSelected, setSectionSelected] = useState("");
//   const [lineSelected, setLineSelected] = useState(null);
//   const [tagSelected, setTagSelected] = useState([]);
//   const [allTagSelected, setAllTagSelected] = useState(false);
//   const [intervalSelected, setIntervalSelected] = useState("");
//   const [endDate, setEndDate] = useState(showingInTrend ? new Date() : null);
//   const [startDate, setStartDate] = useState(
//     showingInTrend ? new Date(endTimePayload(endDate, data.plant[0])) : null
//   );
//   const [validationErrorMsg1, setValidationErrorMsg1] = useState({
//     plant: "",
//     tag: "",
//     startDate: "",
//     endDate: "",
//     interval: "",
//   });
//   const tagOptions = showingInTrend
//     ? [
//         { label: "Select All", value: "all" },
//         getTagnameBasedOnPlantAndSection(
//           authProvider.plantBasedTagnames,
//           [data.plant],
//           sectionSelected?.label
//         ),
//       ].flat()
//     : plantSelected.length <= 1
//     ? [
//         { label: "Select All", value: "all" },
//         getTagnameBasedOnPlantAndSection(
//           authProvider.plantBasedTagnames,
//           [plantSelected.map((obj) => obj?.label)],
//           lineSelected?.value,
//           sectionSelected?.label
//         ),
//       ].flat()
//     : [
//         getTagnameBasedOnPlantAndSection(
//           authProvider.plantBasedTagnames,
//           [plantSelected.map((obj) => obj?.label)],
//           lineSelected?.value,
//           sectionSelected?.label
//         ),
//       ].flat();

//   const fetchDataHandler = async () => {
//     try {
//       dispatch({ type: "LOADING_TRUE" });
//       const endDate =
//         moment(filterData.startDate).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
//       const startDate =
//         moment(filterData.endDate).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
//       dispatch({
//         type: "ADD_SELECTED_TAGNAMES",
//         payload: tagSelected.map((obj) => obj?.value),
//       });
//       dispatch({
//         type: "ADD_PLANT",
//         payload: [plantSelected[0].label],
//       });
//       dispatch({ type: "SHOW_POPUP" });
//       const response = await axios.post(
//         // `${BASE_URL}trendadx`,
//         `${BASE_URL}trendadx`,
//         // "http://localhost:8080/api/trendadx",
//         {
//           plant: plantSelected[0].label,
//           tagName: [...tagSelected.map((obj) => obj?.value)],
//           endDate,
//           startDate,
//           interval: `${intervalSelected?.value}`,
//           userId: authProvider.email,
//         },
//         {
//           headers: {
//             authorization: `Bearer ${authProvider.token}`,
//           },
//         }
//       );
//       dispatch({ type: "LOADING_FALSE" });
//       dispatch({ type: "POPUP_DATA", payload: response.data });
//       dispatch({ type: "SHOW_GRAPH" });
//     } catch (error) {
//       console.error(error);
//       dispatch({
//         type: "ERROR",
//         payload: error.response.data?.message,
//       });
//     }
//   };

//   function formatOptionLabel({ label }, { inputValue }) {
//     let labelvalue = typeof label === "object" ? label[0] : label;
//     return (
//       <Highlighter
//         highlightClassName="highlighter"
//         highlightStyle={{ backgroundColor: "yellow" }}
//         searchWords={[inputValue]}
//         textToHighlight={labelvalue}
//       />
//     );
//   }

//   function updateSectionData(event) {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });

//     if (
//       (event.length > 1 && allTagSelected === true) ||
//       event.length < plantSelected.length
//     ) {
//       setTagSelected([]);
//       setAllTagSelected(false);
//     }
//     if (event.length > 0) {
//       setPlantSelected(event);
//       setSectionDropDisable(false);
//       getSelectionSelection(event);
//     } else if (event.length === 0) {
//       setPlantSelected([]);
//       setSectionSelected([]);
//       setTagSelected([]);
//       setStartDate(null);
//       setEndDate(null);
//       setIntervalSelected("");
//       setSectionDropDisable(true);
//     }
//   }
//   function getSelectionSelection(event) {
//     return getSectionBasedOnPlant(
//       authProvider.plantBasedSection,
//       event.map((obj) => obj?.label)
//     );
//   }
//   function updateLineValue(e) {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     if (e === null || e === "") {
//       setSectionSelected("");
//       setTagSelected([]);
//     } else {
//       setLineSelected(e);
//       setSectionSelected("");
//       setTagSelected([]);
//     }
//   }
//   function updateTagValue(e) {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     if (e === null || e === "") {
//       setTagSelected([]);
//     } else {
//       setSectionSelected(e);

//       if (e.label !== sectionSelected.label) {
//         setTagSelected([]);
//       }
//     }
//   }
//   function updatetagData(selected) {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     setValidationErrorMsg1({ ...validationErrorMsg1, tag: "" });
//     selected.find((obj) =>
//       obj.value === "all"
//         ? setTagSelected(tagOptions.slice(1))
//         : setTagSelected(selected)
//     );
//     selected.find((obj) =>
//       obj.value === "all" && sectionSelected === ""
//         ? setAllTagSelected(true)
//         : setAllTagSelected(false)
//     );
//     if (selected.length === 0) {
//       setTagSelected([]);
//     }
//   }
//   const searchKey = useRef("");

//   const handleinputChangetags = (inputValue) => {
//     searchKey.current = inputValue.toLowerCase();
//     setInputArr(searchKey.current.split(" "));
//     let inpArr = inputValue.replaceAll(" ", "").split(",");
//     inpArr = inpArr.filter((val) => val !== "");
//     let res = [];
//     tagOptions.map((val) => {
//       inpArr.map((v1) => {
//         if (
//           val.label.replaceAll(" ", "").replaceAll(",", "").split("_:")[0] ===
//             v1 ||
//           val.value.split("_:")[0] === v1
//         ) {
//           res.push(val);
//         }
//       });
//     });

//     let tempArr = [...tagSelected, ...res];
//     let unique = [];

//     unique = [
//       ...new Map(tempArr.map((item) => [item["value"], item])).values(),
//     ];
//     setTagSelected(unique);
//   };

//   const filterOption = (candidate) => {
//     return (
//       candidate.data.__isNew__ ||
//       inputArr.every((item) => candidate.label.toLowerCase().includes(item))
//     );
//   };
//   function updateLineValueNew() {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     setTagSelected([]);
//     setSectionSelected("");
//     setLineSelected(null);
//   }
//   function updateTagValueNew() {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     setTagSelected([]);
//     setSectionSelected("");
//   }
//   function updatePlantValueNew() {
//     dispatch({
//       type: "FILTER_ERROR",
//       payload: "",
//     });
//     setPlantSelected([]);
//     setLineSelected(null);
//     setTagSelected([]);
//     setSectionSelected("");
//     setStartDate(null);
//     setEndDate(null);
//     setIntervalSelected("");
//     setSectionDropDisable(true);
//     dispatch({
//       type: "ADD_START_DATE",
//       payload: "",
//     });
//     dispatch({ type: "ADD_END_DATE", payload: "" });
//   }
//   // Trends Initial Data
//   useEffect(() => {
//     if (showingInTrend) {
//       const tagWithUID = getTagUID(authProvider.plantBasedTagnames, data);
//       setPlantSelected([{ label: data.plant[0], value: data.plant[0] }]);
//       // setSectionSelected({ label: data.section, value: data.section });
//       let uniqueTags = [
//         ...new Map(tagWithUID.map((item) => [item["value"], item])).values(),
//       ];
//       setTagSelected(uniqueTags);
//       setIntervalSelected({
//         label: `${data.interval}min`,
//         value: `${data.interval}m`,
//       });
//     } else {
//       dispatch({
//         type: "ADD_START_DATE",
//         // payload: moment(new Date()).format("YYYY-MM-DDTHH:mm"),
//         payload: startDate,
//       });
//       dispatch({
//         type: "ADD_END_DATE",
//         payload: endDate,
//       });
//     }
//   }, [showPopup.minimise]);

//   // Yellow search feature in tags input field
//   const formatOptionLabelForTags = ({ label }) => {
//     let labelvalue = typeof label === "object" ? label[0] : label;
//     return (
//       <Highlighter
//         highlightClassName="highlighter"
//         highlightStyle={{ backgroundColor: "yellow" }}
//         searchWords={inputArr}
//         textToHighlight={labelvalue}
//       />
//     );
//   };
//   return (
//     <div
//       className={
//         showingInTrend ? "searchSection mt-2" : "mycard searchSection mt-2"
//       }
//       style={{ borderRadius: "0px" }}
//     >
//       <div className="outer">
//         <div
//           className={`colcustom-13 pl-2 pr-2 multiTagSelection position-relative`}
//         >
//           <FilterLabel filtername="Plant " mandatory={true} />
//           <Select
//             className={
//               validationErrorMsg1.plant
//                 ? "error-input basic-single"
//                 : "basic-single"
//             }
//             ref={selectedPlant}
//             classNamePrefix="select"
//             value={plantSelected}
//             onChange={updateSectionData}
//             formatOptionLabel={formatOptionLabel}
//             isClearable={false}
//             isSearchable={true}
//             isMulti={true}
//             options={
//               showingInTrend
//                 ? getPlants(data.plant)
//                 : getPlants(authProvider?.plants)
//             }
//           />
//           {validationErrorMsg1.plant && (
//             <InputValidationText
//               validationMessage={validationErrorMsg1.plant}
//             />
//           )}
//           <div className="cutomremoveindi">
//             {plantSelected.length === 0 || (
//               <button onClick={updatePlantValueNew} className="p-2 btn">
//                 <i className="fa-sharp fa-solid fa-xmark"></i>
//               </button>
//             )}
//           </div>
//         </div>

//         {!showingInTrend && (
//           <div className={`colcustom-9 pl-2 pr-2`}>
//             <FilterLabel filtername="Line" mandatory={false} />
//             <Select
//               className="basic-single"
//               classNamePrefix="select"
//               ref={selectedLine}
//               value={lineSelected}
//               onChange={updateLineValue}
//               isClearable={false}
//               isSearchable={true}
//               options={getLinesBasedOnPlant(
//                 authProvider.plantBasedLines,
//                 plantSelected.map((obj) => obj?.label)
//               )}
//               isDisabled={!showingInTrend && sectionDropDisable}
//             />
//             <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//               {lineSelected === null || (
//                 <button onClick={updateLineValueNew} className="p-2 btn">
//                   <i className="fa-sharp fa-solid fa-xmark"></i>
//                 </button>
//               )}
//             </div>
//           </div>
//         )}

//         <div
//           className={`${
//             showingInTrend ? `colcustom-13` : `colcustom-11`
//           } pl-2 pr-2`}
//         >
//           <FilterLabel filtername="Section Name" mandatory={false} />
//           <Select
//             className="basic-single"
//             classNamePrefix="select"
//             ref={selectedSection}
//             value={sectionSelected}
//             onChange={updateTagValue}
//             formatOptionLabel={formatOptionLabel}
//             isClearable={false}
//             isSearchable={true}
//             options={
//               showingInTrend
//                 ? getSectionBasedOnPlant(
//                     authProvider.plantBasedSection,
//                     data.plant,
//                     lineSelected?.value
//                   )
//                 : getSectionBasedOnPlant(
//                     authProvider.plantBasedSection,
//                     plantSelected.map((obj) => obj?.label),
//                     lineSelected?.value
//                   )
//             }
//             isDisabled={!showingInTrend && sectionDropDisable}
//           />
//           <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//             {sectionSelected.length === 0 || (
//               <button onClick={updateTagValueNew} className="p-2 btn">
//                 <i className="fa-sharp fa-solid fa-xmark"></i>
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="colcustom-26 pl-2 pr-2 multiTagSelection position-relative">
//           <FilterLabel filtername="Tags " mandatory={true} />
//           <Select
//             className={
//               validationErrorMsg1.tag
//                 ? "error-input basic-single"
//                 : "basic-single"
//             }
//             classNamePrefix="select"
//             ref={selectedTag}
//             value={tagSelected}
//             onChange={updatetagData}
//             onInputChange={handleinputChangetags}
//             onBlur={true}
//             formatOptionLabel={formatOptionLabelForTags}
//             blurInputOnSelect={true}
//             isClearable={false}
//             isSearchable={true}
//             options={tagOptions}
//             filterOption={filterOption}
//             isDisabled={!showingInTrend && sectionDropDisable}
//             isMulti
//           />
//           {validationErrorMsg1.tag && (
//             <InputValidationText validationMessage={validationErrorMsg1.tag} />
//           )}
//           {tagSelected.length !== 0 && (
//             <small className="text-dark position-absolute ml-2">
//               {tagSelected.length === 1
//                 ? `${tagSelected.length} tag is`
//                 : `${tagSelected.length} tags are`}{" "}
//               selected
//             </small>
//           )}
//           <div className="colcustom-2 pl-2 pr-2 cutomremove">
//             {tagSelected.length === 0 || (
//               <button
//                 onClick={() => {
//                   setTagSelected([]);
//                 }}
//                 className="p-2 btn"
//               >
//                 <i className="fa-sharp fa-solid fa-xmark"></i>
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="colcustom-13 pl-2 pr-2 customDate">
//           <FilterLabel filtername="Start Date " mandatory={true} />
//           <DatePicker
//             selected={startDate}
//             className={
//               validationErrorMsg1.startDate
//                 ? "error-input form-control"
//                 : "form-control"
//             }
//             placeholderText="Click to select a date"
//             onChange={(date) => {
//               if (date > new Date())
//                 setValidationErrorMsg1({
//                   ...validationErrorMsg1,
//                   startDate: "Please select a valid start date",
//                 });
//               else {
//                 setStartDate(date);
//                 dispatch({
//                   type: "FILTER_ERROR",
//                   payload: "",
//                 });
//                 setValidationErrorMsg1({
//                   ...validationErrorMsg1,
//                   startDate: "",
//                 });
//                 dispatch({
//                   type: "ADD_START_DATE",
//                   payload: moment(date).format("YYYY-MM-DDTHH:mm"),
//                 });
//               }
//             }}
//             showTimeSelect
//             dateFormat="d/MM/yyyy h:mm aa"
//             timeIntervals={1}
//             calendarClassName="rasta-stripes"
//             readOnly={!showingInTrend && sectionDropDisable}
//           />
//           {validationErrorMsg1.startDate && (
//             <InputValidationText
//               validationMessage={validationErrorMsg1.startDate}
//             />
//           )}
//         </div>

//         <div className="colcustom-13 pl-2 pr-2">
//           <FilterLabel filtername="End Date " mandatory={true} />
//           <DatePicker
//             selected={endDate}
//             placeholderText="Click to select a date"
//             className={
//               validationErrorMsg1.endDate
//                 ? "error-input form-control"
//                 : "form-control"
//             }
//             onChange={(date) => {
//               dispatch({
//                 type: "FILTER_ERROR",
//                 payload: "",
//               });
//               if (date >= startDate && date <= new Date()) {
//                 setValidationErrorMsg1({
//                   ...validationErrorMsg1,
//                   endDate: "",
//                 });
//                 setEndDate(date);
//                 dispatch({
//                   type: "ADD_END_DATE",
//                   payload: moment(date).format("YYYY-MM-DDTHH:mm"),
//                 });
//               } else {
//                 setValidationErrorMsg1({
//                   ...validationErrorMsg1,
//                   endDate: "Please select a valid end date",
//                 });
//               }
//             }}
//             showTimeSelect
//             dateFormat="d/MM/yyyy h:mm aa"
//             timeIntervals={1}
//             calendarClassName="rasta-stripes"
//             readOnly={!showingInTrend && sectionDropDisable}
//           />
//           {validationErrorMsg1.endDate && (
//             <InputValidationText
//               validationMessage={validationErrorMsg1.endDate}
//             />
//           )}
//         </div>

//         <div
//           className={`${
//             showingInTrend ? `colcustom-13` : `colcustom-9`
//           } pl-2 pr-2 position-relative`}
//         >
//           <FilterLabel filtername="Interval " mandatory={true} />
//           <Select
//             className={
//               validationErrorMsg1.interval
//                 ? "error-input basic-single"
//                 : "basic-single"
//             }
//             classNamePrefix="Select"
//             value={intervalSelected}
//             onChange={(selected) => {
//               setValidationErrorMsg1({
//                 ...validationErrorMsg1,
//                 interval: "",
//               });
//               dispatch({ type: "ERROR_FALSE" });
//               setIntervalSelected(selected);
//             }}
//             formatOptionLabel={formatOptionLabel}
//             isClearable={true}
//             isSearchable={true}
//             options={minsIntervalOptions()}
//             isDisabled={!showingInTrend && sectionDropDisable}
//           />
//           {validationErrorMsg1.interval && (
//             <InputValidationText
//               validationMessage={validationErrorMsg1.interval}
//             />
//           )}
//         </div>

        // <div
        //   className={`${
        //     showingInTrend ? `colcustom-9` : `colcustom-5`
        //   } pl-2 pr-2 text-right`}
        // >
        //   {showingInTrend && (
        //     <button
        //       onClick={() => fetchDataHandler()}
        //       className="btn btnfrst"
        //       disabled={userStatus.loading}
        //     >
        //       {userStatus.loading ? <ClipLoader size={16} /> : "Go"}
        //     </button>
        //   )}
        // </div>
//       </div>

//       <small className="text-black-50">* fields are mandatory to fill</small>

//       {filterData.filterError && <Alert errMsg={filterData.filterError} />}
//     </div>
//   );
// };

import { useState } from "react";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { getPlants, minsIntervalOptions } from "../../../utils";
import { getTagnameBasedOnPlantAndSection } from "../../../utils/SelectionBoxOptions/getTagname";
import { getSectionBasedOnPlant } from "../../../utils/SelectionBoxOptions/sectionOption";
import { FiDownload } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import axios from "axios";
import { BASE_URL, DOWNLOAD_HANDLER_URL } from "../../../base";
import { Alert } from "../../Alert/Alert";
import { ClipLoader } from "react-spinners";
import { useRef } from "react";
import { useEffect } from "react";
import "./FilterCard.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { getTagUID } from "../../../utils/getTagUID";

import { FilterLabel } from "../FilterInput/FilterLabel";
import { InputValidationText } from "../FilterInput/InputValidationText";
import { endTimePayload } from "../../../data/payload/endTimePayload";
import { getLinesBasedOnPlant } from "../../../utils/SelectionBoxOptions/linesOption";
import {
  endDateValidation,
  intervalValidation,
  plantValidation,
  startDateValidation,
  tagValidation,
} from "../../../utils/filterValidation/filterValidation";
import {getSectionTagDetailsAPIx} from "../../../utils/apicalls/authapi"
import { getHoTagDetails } from "../../../utils/apicalls/centralisedDashboard";

export const FilterCard4 = ({ showingInTrend, data }) => {
  const selectedPlant = useRef();
  const selectedLine = useRef();
  const selectedSection = useRef();
  const selectedTag = useRef();
  const { filterData, authProvider, userStatus, showPopup, tagNames } = useSelector(
    (state) => state
  );

  const [sectionDropDisable, setSectionDropDisable] = useState(true);
  const [inputArr, setInputArr] = useState([]);
  const dispatch = useDispatch();
  const [plantSelected, setPlantSelected] = useState([]);
  const [sectionSelected, setSectionSelected] = useState("");
  const [tagsData, setTagsData] = useState([]);

  const [isChartLoading, setIsChartLoading] = useState(false);
  const [lineSelected, setLineSelected] = useState(null);
  const [tagSelected, setTagSelected] = useState([]);
  const [allTagSelected, setAllTagSelected] = useState(false);
  const [intervalSelected, setIntervalSelected] = useState("");
  const [endDate, setEndDate] = useState(showingInTrend ? new Date() : null);
  const [startDate, setStartDate] = useState(
    showingInTrend ? new Date(endTimePayload(endDate, data.plant[0])) : null
  );
  const [validationErrorMsg1, setValidationErrorMsg1] = useState({
    plant: "",
    tag: "",
    startDate: "",
    endDate: "",
    interval: "",
  });
  const [isFilterChanged, setIsFilterChanged] = useState(false)

  const additionalTagNames =
    authProvider &&
    authProvider.extraTagDetails &&
    authProvider.extraTagDetails.length
      ? authProvider.extraTagDetails
      : [];
  const hoTagNames = authProvider &&
    authProvider.hoTagDetails &&
    authProvider.hoTagDetails.length
      ? authProvider.hoTagDetails
      : [];

  // const [tagOptions, setTagOptions] = useState([]);
  // const getTagnameBasedOnPlantAndSectionx = ()=>{
  //   console.log("inside getTagnameBasedOnPlantAndSectionx --");

  //   console.log("tagsData --", tagsData);
  //   console.log("plantSelected --", plantSelected);
  //   console.log("lineSelected --", lineSelected);
  //   console.log("sectionSelected --", sectionSelected);
  
  //   // Check if 'Tag Names' exists and has data
  //   if (!tagsData["Tag Names"] || tagsData["Tag Names"].length == 0) {
  //     console.log("No Tag Names found or empty.");
  //     return [];
  //   }
  
  //   return tagsData["Tag Names"]
  //     .filter(
  //       (tag) =>
  //         tag.Plant === plantSelected[0].value && // Match Plant
  //         tag.Line === lineSelected.value &&     // Match Line
  //         tag.Section === sectionSelected.value  // Match Section
  //     )
  //     .map((tag) => ({
  //       // label: tag["TagUID"], // Set label as TagUID
  //       label: `${tag["TagUID"]}_:${tag.description}`, // Set label as TagUID
  //       value: tag["TagName"], // Set value as TagName
  //     }));


  // }


  // const updateTagOptions = (tagsDatares, section) => {
  // const updateTagOptions = () => {
  //   console.log("inside -- updateTagOptions")
  //   const options = showingInTrend
  //     ? [
  //         { label: "Select All", value: "all" },
  //         // ...getTagnameBasedOnPlantAndSection(
  //         //   authProvider.plantBasedTagnames,
  //         //   [data.plant],
  //         //   sectionSelected?.label
  //         // ),
  //         // getTagnameBasedOnPlantAndSectionx(tagsDatares,section)
  //         getTagnameBasedOnPlantAndSectionx()
  //       ].flat()
  //     : plantSelected.length <= 1
  //     ? [
  //         { label: "Select All", value: "all" },
  //         // Uncomment if needed
  //         // ...getTagnameBasedOnPlantAndSection(
  //         //   authProvider.plantBasedTagnames,
  //         //   [plantSelected.map((obj) => obj?.label)],
  //         //   lineSelected?.value,
  //         //   sectionSelected?.label
  //         // ),
  //         // getTagnameBasedOnPlantAndSectionx(tagsDatares,section)
  //         getTagnameBasedOnPlantAndSectionx()
  //       ].flat()
  //     : [
  //         // Uncomment if needed
  //         // ...getTagnameBasedOnPlantAndSection(
  //         //   authProvider.plantBasedTagnames,
  //         //   [plantSelected.map((obj) => obj?.label)],
  //         //   lineSelected?.value,
  //         //   sectionSelected?.label
  //         // ),
  //         // getTagnameBasedOnPlantAndSectionx(tagsDatares,section)
  //         getTagnameBasedOnPlantAndSectionx()
  //       ].flat();

  //   setTagOptions(options);
  // };

  const getTagnameBasedOnPlantAndSectionx = () => {
  // const getTagnameBasedOnPlantAndSectionx = (tagsData, sectionSelected) => {
    // console.log("inside getTagnameBasedOnPlantAndSectionx --");
  
    // console.log("tagsData --", tagsData);
    // console.log("plantSelected --", plantSelected);
    // console.log("lineSelected --", lineSelected);
    // console.log("sectionSelected --", sectionSelected);
  
    let allTags = [...tagsData, ...additionalTagNames, ...hoTagNames];
    // Check if 'Tag Names' exists and has data
    if (!allTags || allTags.length === 0) {
      // console.log("No Tag Names found or empty.");
      return [];
    }
  
    return lineSelected && sectionSelected
      ? [...tagsData, ...additionalTagNames, ...hoTagNames]
          .filter((tag) =>
            plantSelected.some(
              (plant) =>
                tag.Plant === plant.value && // Match Plant
                // tag.Line === lineSelected.value && // Match Line
                (showingInTrend || tag.Line === lineSelected.value) && // Conditionally match Line
                tag.Section === sectionSelected.value // Match Section
            )
          )
          .map((tag) => ({
            // label: tag["TagUID"], // Set label as TagUID
            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
            value: tag["TagUID"], // Set value as TagName
          }))
      : lineSelected && !sectionSelected
      ? [...tagsData, ...additionalTagNames, ...hoTagNames]
          .filter((tag) =>
            plantSelected.some(
              (plant) =>
                tag.Plant === plant.value && // Match Plant
                (showingInTrend || tag.Line === lineSelected.value) // Conditionally match Line
            )
          )
          .map((tag) => ({
            // label: tag["TagUID"], // Set label as TagUID
            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
            value: tag["TagUID"], // Set value as TagName
          }))
      : !lineSelected && sectionSelected
      ? [...tagsData, ...additionalTagNames, ...hoTagNames]
          .filter((tag) =>
            plantSelected.some(
              (plant) =>
                tag.Plant === plant.value && // Match Plant
                tag.Section === sectionSelected.value // Match Section
            )
          )
          .map((tag) => ({
            // label: tag["TagUID"], // Set label as TagUID
            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
            value: tag["TagUID"], // Set value as TagName
          }))
      : !lineSelected && !sectionSelected
      ? [...tagsData, ...additionalTagNames]
          .filter((tag) =>
            plantSelected.some(
              (plant) => tag.Plant === plant.value // Match Plant
            )
          )
          .map((tag) => ({
            // label: tag["TagUID"], // Set label as TagUID
            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
            value: tag["TagUID"], // Set value as TagName
          }))
      : [];
  };

  let tagOptions = showingInTrend
    ? [
        { label: "Select All", value: "all" },
        // getTagnameBasedOnPlantAndSection(
        //   authProvider.plantBasedTagnames,
        //   [data.plant],
        //   sectionSelected?.label
        // ),
        getTagnameBasedOnPlantAndSectionx()
      ].flat()
    : plantSelected.length <= 1
    ? [
        { label: "Select All", value: "all" },
        // getTagnameBasedOnPlantAndSection(
        //   authProvider.plantBasedTagnames,
        //   [plantSelected.map((obj) => obj?.label)],
        //   lineSelected?.value,
        //   sectionSelected?.label
        // ),
        getTagnameBasedOnPlantAndSectionx()
        
      ].flat()
    : [
        // getTagnameBasedOnPlantAndSection(
        //   authProvider.plantBasedTagnames,
        //   [plantSelected.map((obj) => obj?.label)],
        //   lineSelected?.value,
        //   sectionSelected?.label
        // ),
        getTagnameBasedOnPlantAndSectionx()
      ].flat();


      /// go button click functionality//
      const fetchDataHandler = async () => {
        try {
          dispatch({ type: "FILTER_ERROR", payload: "" });
          dispatch({ type: "LOADING_TRUE" });
          setIsChartLoading(true);
          // console.log("downloadHandler tagSelected assetIds --",tagSelected);
    
      let assetIds = [];
      let allTags = [...tagsData, ...additionalTagNames, ...hoTagNames];
      // console.log({allTags, tagSelected})
      if(allTags && allTags?.length>0){
        assetIds = tagSelected.map((tag) => {
          // const matchedTag = tagsData.find((data) => data.TagUID === tag.label);
          const matchedTag = allTags.find(
            (item) => item.TagUID == tag.value || item.TagName == tag.value
          );
          if (matchedTag) {
            return {
              assetId: matchedTag.assetId,
              propertyId: matchedTag.propertyId,
              TagUID: matchedTag.TagUID,
              description:matchedTag.description,
              UnitOfMeasurement:matchedTag.UnitOfMeasurement,
              TagName: matchedTag.TagName
            };
          }
          return null; // If no match is found, you can return null or handle it as needed.
        }).filter((item) => item !== null); // Remove null values if no match is found.
      }
         let payload = {
              "userId": authProvider.email,
              "assetIds":assetIds,
              "tagNames":allTagSelected === true
                ? []
                : tagSelected.map((obj) => obj.value),
              "uids": tagSelected.map((obj) => obj.label),
              "startDate": moment(startDate).toISOString(),
              "endDate": moment(endDate).toISOString(),
              "interval": `${intervalSelected?.value}`,
              "plants": filterData.plant,
              "isMobile": false,
              "IsTrendChart": true,
             // "uids": tagData.length ? [tagData[0].TagUID] : [],
               "IsManual": true
            }
            if (window.location.href.includes("ho/millsrunningstatus")) {
              const tagDetail = await getHoTagDetails({tagName: data.tagname[0]})
              if (tagDetail?.length) {
                const findItem = tagDetail.find(item => item[`Generic Code`] === filterData.plant[0])
                if (findItem) {
                  payload.assetIds = [{
                    "assetId": findItem?.assetId,
                    "propertyId": findItem?.propertyId,
                    "TagUID": findItem[`TPH UID`],
                    "description": findItem?.Description || "",
                    "UnitOfMeasurement": "",
                    "TagName": data.tagname
                  }]
                  payload.tagNames = [findItem[`TPH UID`]]
                  payload.uids = [`${findItem[`TPH UID`]}:`]
                }
              }
            }
            let finaldata = [];
            let MinMaxdata = [];
                  const fetchData = async (payload) => {
                    try {
                      const response = await axios.post(
                        DOWNLOAD_HANDLER_URL,
                        payload,
                        {
                          responseType: 'json', // Assume API returns JSON
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      );
                  
                      // console.log("payload Data in fecth:",payload);
                      // console.log("Response Data:", response.data);
                      //dispatch({ type: "LOADING_FALSE" });
                      // Check if response data is empty
                      // if (!response.data || response.data.length === 0) {
                      //   dispatch({ type: "LOADING_FALSE" });
                      //   dispatch({
                      //     type: "ERROR",
                      //     payload: "Data not found!!",
                      //   });
                      //   return []; // Stop further execution
                      // }

                      // Check if response data exists
                      setIsChartLoading(false);
                      let flattenedData = [];

if (!response.data) {
        // console.log(" if (!response.data) { --")
        if(localStorage.getItem("trendIntervalID")){
          // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
          // clearInterval(localStorage.getItem("trendIntervalID"))
          dispatch({ type: "LOADING_FALSE" });
          return [];
        }

          dispatch({ type: "LOADING_FALSE" });
          dispatch({ type: "ERROR", payload: "Data not found!!" });
          return [];
        }

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          flattenedData =response.data
        // console.log("if (Array.isArray(response.data)) { --")

          if (response.data.length == 0) {
        // console.log("if (response.data.length === 0) { --")

        if(localStorage.getItem("trendIntervalID")){
          // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
          // clearInterval(localStorage.getItem("trendIntervalID"))
          return [];
        }

           // dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR", payload: "Data not found!!" });
            return [];
          }
        } 
        // If response.data is an object, check allResults property
        else if (typeof response.data == "object" && response.data.allResults) {
          flattenedData =response.data.allResults
        // console.log(" else if (typeof response.data == object && response.data.allResults) { --")

          if (!Array.isArray(response.data.allResults) || response.data.allResults.length == 0) {
        // console.log(" if (!Array.isArray(response.data.allResults) || response.data.allResults.length == 0) { --")


        if(localStorage.getItem("trendIntervalID")){
          // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
          // clearInterval(localStorage.getItem("trendIntervalID"))
          return [];
        }

            //dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR", payload: "Data not found!!" });
            return [];
          }
        } 
        //
        MinMaxdata =  response.data.minMax?response.data.minMax:[]
        
        // Append new data to finaldata
        finaldata = [...finaldata, ...flattenedData];
        // finaldata = [...flattenedData];
        // console.log("finaldata --",finaldata)
    
        // console.log("Updated Final Data:", finaldata);
    
        return finaldata;
      } catch (error) {
        console.error("Error fetching data:", error);

        if(localStorage.getItem("trendIntervalID")){
          console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
          // clearInterval(localStorage.getItem("trendIntervalID"))
          return [];
        }
        dispatch({ type: "LOADING_FALSE" });
        dispatch({
          type: "ERROR",
          payload: error.response?.data?.message
            ? error.response.data.message
            : "Data not found!!",
        });
        return []; // Stop further execution
      }
    };
    
    // ----------------- Previous  interval logic ---------

    // ----------------- Previous  interval logic ---------

    // const startFetchingAtIntervals = async (initialPayload) => {
    //   dispatch({ type: "LOADING_TRUE" });
    //   if(localStorage.getItem("trendIntervalID")){
    //     // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
    //     clearInterval(localStorage.getItem("trendIntervalID"))
    //   }


    //   let currentPayload = { ...initialPayload };
    
    //   // Fetch initial data
    //   const initialData = await fetchData(currentPayload);

    //   // -- previous -----
      
    //   // if (initialData.length === 0) {
    //     //   return;
    //     // }
        
    //     // If initial data exists, dispatch it immediately
    //     if (initialData.length > 0) {
    //       // console.log("Dispatching first batch of data");
    //     // Format and dispatch the first data set
    //     // const formattedData = await getFormattedData(payload.assetIds, initialData);
    //     const formattedData = await getFormattedData(payload.assetIds, initialData, MinMaxdata);
    //     dispatch({ type: "LOADING_FALSE" });
    //     dispatch({ type: "POPUP_DATA", payload: formattedData });
    //   } else {
    //     dispatch({ type: "LOADING_FALSE" });
    //     return; // Stop if no initial data
    //   }

    //   console.log({ isFilterChanged });
    //   // if filter is changed then don't start the interval
    //   if(!isFilterChanged) {
    //   // Start periodic fetching
    //   const intervalMs = parseInterval(currentPayload.interval);
    //   // console.log(`Fetching every ${intervalMs / 1000} seconds`);
      
    //   intervalId = setInterval(async () => {
    //     try {
    //       // console.log("setInterval(async () => { intervaID --",intervalId)
          
    //       localStorage.setItem("trendIntervalID", intervalId);
    //       if(localStorage.getItem("trendIntervalID")){
    //         // console.log("localStorage.getItem(trendIntervalID) trendsAPI setInterval(async () => { --",localStorage.getItem("trendIntervalID"))
    //         // clearInterval(localStorage.getItem("trendIntervalID"))
    //       }


    //                     // Shift time window for new fetch
    //                     // const start = new Date(currentPayload.endDate);
    //                     // const end = new Date(start.getTime() + intervalMs);
                  
    //                     // currentPayload.startDate = start.toISOString().slice(0, 16);
    //                     // currentPayload.endDate = end.toISOString().slice(0, 16);


    //                     // ---- above prev date logic -------
                        
    //                     // console.log("Previous startDate:", currentPayload.startDate);
    //                     // console.log("Previous endDate:", currentPayload.endDate);
                  
    //                     // Manually adjust time in string format
    //                     // const newStartDate = shiftTimeString(currentPayload.endDate, intervalMs);
    //                     // const newEndDate = shiftTimeString(newStartDate, intervalMs);

    //                     const { updatedStartDate, updatedEndDate } =
    //                       getUpdatedTimestamps(
    //                         currentPayload.startDate,
    //                         currentPayload.endDate,
    //                         60000
    //                       );

                  
    //                     // Update payload
    //                     // currentPayload.startDate = newStartDate;
    //                     // currentPayload.endDate = newEndDate;
                  
    //                     // console.log("Updated startDate:", newStartDate);
    //                     // console.log("Updated endDate:", newEndDate);
                  
    //                     currentPayload.startDate = updatedStartDate;
    //                     currentPayload.endDate = updatedEndDate;
                  
    //                     // console.log("Updated startDate:", updatedStartDate);
    //                     // console.log("Updated endDate:", updatedEndDate);

    //                     // console.log("Fetching data with updated time range:", currentPayload);
                  
    //                     const newData = await fetchData(currentPayload);
                  
    //                     if (newData.length === 0) {
    //                       clearInterval(intervalId); // Stop interval if no new data
    //                       dispatch({ type: "LOADING_FALSE" });
    //                       return;
    //                     }

    //                     // // Format and dispatch data
    //                     // const formattedData = finaldata.length ? await getFormattedData(payload.assetIds, finaldata) : [];
                  
    //                     // Append new data and dispatch it
    //                     // finaldata = [...finaldata, ...newData];
    //                     finaldata = [ ...newData];
    //                     // const formattedData = await getFormattedData(payload.assetIds, finaldata);
    //                     const formattedData = await getFormattedData(payload.assetIds, finaldata, MinMaxdata);
    //                     // console.log("Updated formattedData:", formattedData);

                  
    //                     dispatch({ type: "LOADING_FALSE" });
    //                     // dispatch({ type: "POPUP_DATA", payload: {...formattedData} });
    //                     dispatch({ type: "POPUP_DATA", payload: {...formattedData},intervalId:intervalId});

    //                     // console.log("Updated intervalId:", intervalId);
    //                     //  save in local storage.
    //                     localStorage.setItem("trendIntervalID", intervalId);



                  
    //                   } catch (error) {
    //                     console.error("Error fetching interval data:", error);
    //                     clearInterval(intervalId); // Stop interval in case of error
    //                   }
    //                 }, intervalMs);
    //               }
    //               };    


    //               // -------------------- new logic above --------------


    //                   // Convert interval string (e.g., "1m") into milliseconds
    //               const parseInterval = (interval) => {
    //                 const unit = interval.slice(-1);
    //                 const value = parseInt(interval.slice(0, -1), 10);
                    
    //                 if (unit === "m") return value * 60 * 1000; // Convert minutes to milliseconds
    //                 if (unit === "s") return value * 1000; // Convert seconds to milliseconds
    //                 return value; // Default to raw milliseconds
    //               };

    //                   // Start fetching process
    //                   // console.log("startFetchingAtIntervals(payload); call")
    //               startFetchingAtIntervals(payload);

                  // const initialData = await fetchData(payload);
                  // const formattedData = await getFormattedData(
                  //   payload.assetIds,
                  //   initialData,
                  //   MinMaxdata
                  // );

                  // dispatch({ type: "LOADING_FALSE" });
                  // dispatch({ type: "POPUP_DATA", payload: formattedData });

                //   } catch (error) {
                //   console.log('Error in trendChartApi: ', error)
                //   console.error(error);
                //   dispatch({ type: "LOADING_FALSE" });
                //   dispatch({
                //     type: "ERROR",
                //     payload: error.response.data.message
                //       ? error.response.data.message
                //       : "Data not found!!",
                //   });
                // }

                const getUpdatedTimestamps = (previousStartDate, previousEndDate, shiftMs = 60000) => {
                  if (!previousEndDate || !previousStartDate) {
                    // console.error("Invalid previousEndDate:", previousEndDate);
                    return { updatedStartDate: null, updatedEndDate: null };
                  }
                
                  const endDateObj = new Date(previousEndDate);
                  const startDateObj = new Date(previousStartDate);
                  
                  if (isNaN(endDateObj.getTime()) || isNaN(startDateObj.getTime())) {
                    // console.error("Invalid Date object:", previousEndDate);
                    return { updatedStartDate: null, updatedEndDate: null };
                  }
                
                  // Updated startDate should be the previous endDate
                  startDateObj.setTime(startDateObj.getTime() + shiftMs);
                  const updatedStartDate = startDateObj.toISOString();
                
                  // Add shiftMs (1 minute)
                  endDateObj.setTime(endDateObj.getTime() + shiftMs);
                  const updatedEndDate = endDateObj.toISOString();
                
                  return { updatedStartDate, updatedEndDate };
                };
                
                const getFormattedData = async (data, responseData, MinMaxdata) => {
                  try {
                    // Extract unique timestamps and sort them
                    // const uniqueTimestamps = [...new Set(responseData.map(item => item.timestamp))].sort((a, b) => new Date(a) - new Date(b));
                    const uniqueTimestamps = [...new Set(responseData.map(item =>
                      { 
                        let timestamp = new Date(item.timestamp);
                        timestamp.setUTCHours(timestamp.getUTCHours() - 5);
                        timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
                        return timestamp.toLocaleString('en-IN', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true         // Ensures the time is in 12-hour format with AM/PM
                        });
                      
                      }
                      
                      ))].sort((a, b) => new Date(a) - new Date(b));
                    // console.log(uniqueTimestamps)
                    let timeValueArr = []
                 
                    for (const tag of data) {
                      // console.log('----ttt------', tag)
                      let obj = {
                        name: tag.TagName,
                        "showInLegend": true,
                        "zIndex": 1
                      };
                      // for(const item of responseData) {
                      // const tagWiseData = responseData.filter(i=>i.tagUID == tag.TagUID)
                      const filteredData = responseData.filter(item => item.tagUID == tag.TagUID)
                        .map(item => {
                          let timestamp = new Date(item.timestamp);
                          timestamp.setUTCHours(timestamp.getUTCHours() - 5);
                          timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
                          let arr = [
                            // item.timestamp,
                            timestamp.toLocaleString('en-IN', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true         // Ensures the time is in 12-hour format with AM/PM
                            }),
                            item.averageValue == "NaN" ? null : item.averageValue
                          ]
                          return arr
                          // {
                          //   tagUID: item.tagUID,
                          //   timestamp: item.timestamp,
                          //   tagName: item.tagName
                          // };
                        });
                      // console.log('---fff-----', filteredData)
                      obj.data = filteredData
                      timeValueArr.push(obj)
                    }
                    let finalOutput = {
                      seriesData: timeValueArr,
                      uniqueDataDateTime: uniqueTimestamps,
                      // minMax: []
                      minMax: MinMaxdata
                    }
                    return finalOutput
                  } catch (error) {
                    console.log('----errorr----', error)
                  }
                }

                const initialData = await fetchData(payload);
                const formattedData = await getFormattedData(
                  payload.assetIds,
                  initialData,
                  MinMaxdata
                );

                dispatch({ type: "LOADING_FALSE" });
                dispatch({ type: "POPUP_DATA", payload: formattedData });


            // const formattedData = finaldata.length ? await getFormattedData(payload.assetIds, finaldata, MinMaxdata) : []
            //     dispatch({ type: "LOADING_FALSE" });
            //     dispatch({
            //       type: "POPUP_DATA",
            //       payload: formattedData//[]//response.data
            //     });
              } catch (error) {
                console.log('Error in filter trendChartApi: ', error)
                console.error(error);
                dispatch({ type: "LOADING_FALSE" });
                dispatch({
                  type: "ERROR",
                  payload: error.response.data.message
                    ? error.response.data.message
                    : "Data not found!!",
                });
              }

          };

  const downloadHandler = async () => {
    dispatch({ type: "START_LOADER" });
    dispatch({ type: "LOADING_TRUE" });
    try {
      dispatch({
        type: "FILTER_ERROR",
        payload: "",
      });
      // setTagsData()

      // if(showingInTrend){
      //   console.log("showingInTrend plantSelected -",plantSelected)
      //   console.log("showingInTrend sectionSelected -",sectionSelected)
      //   console.log("showingInTrend tagSelected -",tagSelected)

      //   let payload = plantSelected.map(plant => ({
      //     "Plant": plant.value,
      //     "Line": null,
      //     "Section": sectionSelected.value
      //   }));

      //   console.log("Payload:", payload);
      //   const tagsDatares = await getSectionTagDetailsAPIx(payload)
      //   console.log(" showingInTrend tagsDatares --",tagsDatares)
      //   // await getTagnameBasedOnPlantAndSectionx(tagsData)
      //   setTagsData(tagsDatares)


      // }
      

      // getting assetIDs and propIds for selected tags
      // console.log("downloadHandler redux tagNames  --",tagNames)
      // console.log("downloadHandler tagSelected assetIds --",tagSelected)
      // console.log("downloadHandler tagsData Tag Names assetIds --",tagsData)
      let assetIds =[]
      // if(!showingInTrend){
        assetIds = tagSelected.map((tag) => {
          // const matchedTag = tagsData.find((data) => data.TagUID === tag.label);
          const matchedTag = [...tagsData, ...additionalTagNames, ...hoTagNames].find(
            (data) => data.TagUID == tag.value || data.TagName == tag.value
          );
          if (matchedTag) {
            return {
              assetId: matchedTag.assetId,
              propertyId: matchedTag.propertyId,
              TagUID: matchedTag.TagUID,
              description:matchedTag.description,
              UnitOfMeasurement:matchedTag.UnitOfMeasurement,
              TagName: matchedTag.TagName
  
            };
          }
          return null; // If no match is found, you can return null or handle it as needed.
        }).filter((item) => item !== null); // Remove null values if no match is found.
  
        // console.log("assetIds assetIds --",assetIds)
      // }else{
      //           console.log("showingInTrend plantSelected -",plantSelected)
      //   console.log("showingInTrend sectionSelected -",sectionSelected)
      //   console.log("showingInTrend tagSelected -",tagSelected)

      //   let payload = plantSelected.map(plant => ({
      //     "Plant": plant.value,
      //     "Line": null,
      //     "Section": sectionSelected.value
      //   }));

      //   console.log("Payload:", payload);
      //   const tagsDatares = await getSectionTagDetailsAPIx(payload)
      //   console.log(" showingInTrend tagsDatares --",tagsDatares)

      //   // const tagSelected = { value: "12345" }; // Example selected tag

      //   // const tagsDatares = {
      //   //   "Tag Names": [
      //   //     { TagUID: "ABC12345XYZ", name: "Tag 1" },
      //   //     { TagUID: "DEF67890", name: "Tag 2" },
      //   //     { TagUID: "GHI12345LMN", name: "Tag 3" },
      //   //     { TagUID: "JKL99999", name: "Tag 4" },
      //   //   ],
      //   // };

      //   // Extract the objects where TagUID contains tagSelected.value
      //   const extractedTags = tagsDatares["Tag Names"].filter(tagObj =>
      //     tagObj.TagName.includes(tagSelected.value)
      //   );

      //   console.log("showingInTrend extractedTags",extractedTags);
      // }



      const plantMsg = plantValidation(plantSelected);
      const tagMsg = tagValidation(tagSelected);
      const startDateMsg = startDateValidation(startDate);
      const endDateMsg = endDateValidation(endDate);
      const intervalMsg = intervalValidation(intervalSelected);
      setValidationErrorMsg1({
        plant: plantMsg,
        tag: tagMsg,
        startDate: startDateMsg,
        endDate: endDateMsg,
        interval: intervalMsg,
      });
      if (
        !plantMsg &&
        !tagMsg &&
        !startDateMsg &&
        !endDateMsg &&
        !intervalMsg
      ) {
        // dispatch({ type: "START_LOADER" });
        // console.log("startDate --",startDate)
        // console.log("endDate --",endDate)

        const response = await axios.post(
          // `${BASE_URL}dataExport`,
          `${BASE_URL}dataExportNew`,
          {
            userId: authProvider.email,
            assetIds: assetIds,
            tagNames:
              allTagSelected === true
                ? []
                : tagSelected.map((obj) => obj.value),
            uids: tagSelected.map((obj) => obj.label),

            // startDate: moment(startDate).format("YYYY-MM-DDTHH:mm"),
            // endDate: moment(endDate).format("YYYY-MM-DDTHH:mm"),
            startDate: moment(startDate).toISOString(),
            endDate: moment(endDate).toISOString(),
            interval: `${intervalSelected?.value}`,
            plants: plantSelected.map((obj) => obj?.label),
            isMobile,
          },
          {
            headers: {
              authorization: `Bearer ${authProvider.token}`,
            },
          }
        );
        // console.log("response --",response)
        // here write interval code for 5 secs interval, if response.data.requestID exist, call a Api within the interval with requestID in payload and once we get response.data.link, clear the interval

        if (response.data.requestId) {
          const requestId = response.data.requestId;
          const timestamp = response.data.timestamp;
        
          const intervalId = setInterval(async () => {
            try {
              const statusResponse = await axios.post(
                `${BASE_URL}dataExport/status`, // Assuming this is the API to check status
                { 
                  requestId: requestId, 
                  timestamp:timestamp,
                 },
                {
                  headers: {
                    authorization: `Bearer ${authProvider.token}`,
                  },
                }
              );
        
              // console.log("Status Response --", statusResponse);
        
              if (statusResponse.data.error) {
                // alert(statusResponse.data.message || "An error occurred while processing your request.");
                dispatch({ type: "STOP_LOADER" });
                dispatch({ type: "LOADING_FALSE" });
                clearInterval(intervalId); // Stop polling if an error occurs
              } else if (statusResponse.data.link) {
                window.open(statusResponse.data.link, "_blank");
                clearInterval(intervalId); // Stop polling once the link is received
                dispatch({ type: "STOP_LOADER" });
                dispatch({ type: "LOADING_FALSE" });
              }
            } catch (error) {
              console.error("Error while polling:", error);
              dispatch({ type: "STOP_LOADER" });
              dispatch({ type: "LOADING_FALSE" });
              dispatch({
                type: "FILTER_ERROR",
                payload: error.response.data.message,
              });

              clearInterval(intervalId); // Stop polling if an error occurs
            }
          }, 5000); // Poll every 5 seconds
        }

        if (response.data.link) {
          window.open(response.data.link, "_blank");
          dispatch({ type: "STOP_LOADER" });
          dispatch({ type: "LOADING_FALSE" });
        }
        if (response.data.message) {
          alert(response.data.message);
          dispatch({ type: "STOP_LOADER" });
          dispatch({ type: "LOADING_FALSE" });
        }
      }
    } catch (error) {
      // console.error(error.response.data);
      console.error("error download hanlder --",error);
      dispatch({ type: "LOADING_FALSE" });
      dispatch({ type: "STOP_LOADER" });
      dispatch({
        type: "FILTER_ERROR",
        payload: error.response.data.message,
      });
    }
  };


  function formatOptionLabel({ label }, { inputValue }) {
    let labelvalue = typeof label === "object" ? label[0] : label;
    return (
      <Highlighter
        highlightClassName="highlighter"
        highlightStyle={{ backgroundColor: "yellow" }}
        searchWords={[inputValue]}
        textToHighlight={labelvalue}
      />
    );
  }

  async function updateSectionData(event) {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    // console.log({event, sectionSelected})
    if (
      (typeof sectionSelected == "string" && sectionSelected) ||
      (typeof sectionSelected == "object" &&
        Object.keys(sectionSelected).length)
    ) {
      // console.log("in if(sectionSelected)");
      let payload = [];
      if (event.length > 0) {
        payload = event.map((plant) => ({
          Plant: plant.value,
          Line: lineSelected.value,
          Section: sectionSelected.value,
        }));

        // console.log("Payload:", payload);
      }

      // console.log("payload --", payload);
      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      // console.log("tagsDatares --", tagsDatares);
      // await getTagnameBasedOnPlantAndSectionx(tagsData)
      setTagsData([...tagsDatares]);
      // setPlantSelected(plantSelected)
      // await getTagnameBasedOnPlantAndSectionx()
      // updateTagOptions(tagsDatares,sectionSelected)
      // updateTagOptions()

      tagOptions = showingInTrend
        ? [
            { label: "Select All", value: "all" },
            // getTagnameBasedOnPlantAndSection(
            //   authProvider.plantBasedTagnames,
            //   [data.plant],
            //   sectionSelected?.label
            // ),
            getTagnameBasedOnPlantAndSectionx(),
          ].flat()
        : plantSelected.length <= 1
        ? [
            { label: "Select All", value: "all" },
            // getTagnameBasedOnPlantAndSection(
            //   authProvider.plantBasedTagnames,
            //   [plantSelected.map((obj) => obj?.label)],
            //   lineSelected?.value,
            //   sectionSelected?.label
            // ),
            getTagnameBasedOnPlantAndSectionx(),
          ].flat()
        : [
            // getTagnameBasedOnPlantAndSection(
            //   authProvider.plantBasedTagnames,
            //   [plantSelected.map((obj) => obj?.label)],
            //   lineSelected?.value,
            //   sectionSelected?.label
            // ),
            getTagnameBasedOnPlantAndSectionx(),
          ].flat();

      // console.log({ tagOptions });
    }

    // console.log({allTagSelected, plantSelected})
    if (
      (event.length > 1 && allTagSelected === true) ||
      event.length < plantSelected.length
    ) {
      // console.log("inside (event.length > 1 && allTagSelected === true) || event.length < plantSelected.length")
      setTagSelected([]);
      setAllTagSelected(false);
    }
    if (event.length > 0) {
      // console.log("inside if event.length > 0")
      setPlantSelected(event);
      setSectionDropDisable(false);
      getSelectionSelection(event);
    } else if (event.length === 0) {
      // console.log("inside else if (event.length === 0)")
      setPlantSelected([]);
      setSectionSelected("");
      setTagSelected([]);
      setStartDate(null);
      setEndDate(null);
      setIntervalSelected("");
      setSectionDropDisable(true);
      setLineSelected(null)
    }

    if (event.length) {
      let payload = [];
      payload = event.map((plant) => ({
        Plant: plant.value,
        Line: null,
        Section: null
      }));

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      // console.log("tagsDatares --", tagsDatares);
      // await getTagnameBasedOnPlantAndSectionx(tagsData)
      setTagsData([...tagsDatares]);
    }
  }
  function getSelectionSelection(event) {
    return getSectionBasedOnPlant(
      authProvider.plantBasedSection,
      event.map((obj) => obj?.label)
    );
  }
  function updateLineValue(e) {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    if (e === null || e === "") {
      setSectionSelected("");
      setTagSelected([]);
    } else {
      setLineSelected(e);
      setSectionSelected("");
      setTagSelected([]);
    }

    if (e.length) {
      if (plantSelected.length) {
        let payload = [];

        payload = payload = plantSelected.map((plant) => ({
          Plant: plant.value,
          Line: showingInTrend ? null : e.value,
        }));
      }
    }
  }
  async function updateTagValue(e) {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    console.log({e})
    if (e === null || e === "") {
      setTagSelected([]);

      let payload = plantSelected.map((plant) => {
        return {
          Plant: plant.value,
          Line: null,
          Section: null,
        };
      });

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      // console.log("tagsDatares --",tagsDatares)
      // await getTagnameBasedOnPlantAndSectionx(tagsData)
      setTagsData([...tagsDatares]);
    } else {

      // console.log("e--",e)
      setSectionSelected(e);
      // call tags API with Section details
      // setTagSelected 
      // console.log("plantSelected --",plantSelected)
      // console.log("lineSelected --",lineSelected)
      // console.log("sectionSelected --",sectionSelected)

      
      // const userId = "hbhandure-v@adityabirla.com"
    //   [
    //     {
    //         "Plant": "KCW",
    //         "Line": "1",
    //         "Section": "CM1 Control Sheet"
    //     }
    // ]
    // if(plantSelected.length>0){

    // }
    //   const payload = [{
    //     "Plant": `${plantSelected[0].value}`,
    //     "Line": `${lineSelected.value}`,
    //     "Section": `${e.value}`
    //   }]

    let payload = []
    if (plantSelected.length > 0) {
      payload = plantSelected.map((plant) => {
        if (
          !showingInTrend &&
          lineSelected &&
          lineSelected.value &&
          e &&
          e.value
        ) {
          return {
            Plant: plant.value,
            Line: showingInTrend ? null : lineSelected.value,
            Section: e.value,
          };
        } else if (
          (showingInTrend ||
            !lineSelected ||
            (lineSelected && !lineSelected.value)) &&
          e &&
          e.value
        ) {
          return {
            Plant: plant.value,
            Section: e.value,
            Line: null
          };
        } else if (!e) {
          return {
            Plant: plant.value,
            Line: showingInTrend ? null : lineSelected.value,
            Section: null,
          };
        }
      });
    }

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch)
      // console.log("tagsDatares --",tagsDatares)
      // await getTagnameBasedOnPlantAndSectionx(tagsData)
      setTagsData([...tagsDatares])

      // updateTagOptions(tagsDatares, e)
      // updateTagOptions()

      if (e.label !== sectionSelected.label) {
        setTagSelected([]);
      }
    }
  }
  function updatetagData(selected) {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setValidationErrorMsg1({ ...validationErrorMsg1, tag: "" });
    selected.find((obj) =>
      obj.value === "all"
        ? setTagSelected(tagOptions.slice(1))
        : setTagSelected(selected)
    );
    selected.find((obj) =>
      obj.value === "all" && sectionSelected === ""
        ? setAllTagSelected(true)
        : setAllTagSelected(false)
    );
    if (selected.length === 0) {
      setTagSelected([]);
    }
  }
  const searchKey = useRef("");

  const handleinputChangetags = (inputValue) => {
    searchKey.current = inputValue.toLowerCase();
    setInputArr(searchKey.current.split(" "));
    let inpArr = inputValue.replaceAll(" ", "").split(",");
    inpArr = inpArr.filter((val) => val !== "");
    let res = [];
    tagOptions.map((val) => {
      inpArr.map((v1) => {
        if (
          val.label.replaceAll(" ", "").replaceAll(",", "").split("_:")[0] ===
            v1 ||
          val.value.split("_:")[0] === v1
        ) {
          res.push(val);
        }
      });
    });

    let tempArr = [...tagSelected, ...res];
    let unique = [];

    unique = [
      ...new Map(tempArr.map((item) => [item["value"], item])).values(),
    ];
    setTagSelected(unique);
  };
  const filterOption = (candidate) => {
    return (
      candidate.data.__isNew__ ||
      inputArr.every((item) => candidate.label.toLowerCase().includes(item))
    );
  };
  function updateLineValueNew() {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setTagSelected([]);
    setSectionSelected("");
    setLineSelected(null);
  }
  async function updateTagValueNew() {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setTagSelected([]);
    setSectionSelected("");

    let payload = plantSelected.map((plant) => {
        return {
          Plant: plant.value,
          Line: null,
          Section: null,
        };
      });

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      // console.log("tagsDatares --",tagsDatares)
      // await getTagnameBasedOnPlantAndSectionx(tagsData)
      setTagsData([...tagsDatares]);
  }
  function updatePlantValueNew() {
    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setTagsData([])
    setPlantSelected([]);
    setLineSelected(null);
    setTagSelected([]);
    setSectionSelected("");
    setStartDate(null);
    setEndDate(null);
    setIntervalSelected("");
    setSectionDropDisable(true);
    dispatch({
      type: "ADD_START_DATE",
      payload: "",
    });
    dispatch({ type: "ADD_END_DATE", payload: "" });
  }

  const fetchTagsBasedSection = async () => {
    if(showingInTrend){
      let payload = []
      if (filterData?.plant.length > 0 && filterData?.section) {
        payload ={
          "Plant": filterData?.plant[0],
          "Line": showingInTrend?null:lineSelected.value,
          "Section": filterData?.section?filterData.section:null,
        }
        const tagsDatares = await getSectionTagDetailsAPIx([payload], dispatch)
        setTagsData([...tagsDatares]);

        // if (filterData.section !== sectionSelected.label) {
        //   setTagSelected([]);
        // }
      }
    }
  }
  // Trends Initial Data
  useEffect(() => {
    if (showingInTrend) {
      // console.log("useEffect data --",data)
      // console.log("useEffect showingInTrend --",showingInTrend)
      const tagWithUID = getTagUID(authProvider.plantBasedTagnames, data);
      setPlantSelected([{ label: data.plant[0], value: data.plant[0] }]);
      // setSectionSelected({ label: filterData.section, value: filterData.section });
      let uniqueTags = [
        ...new Map(tagWithUID.map((item) => [item["value"], item])).values(),
      ];
      setTagSelected(uniqueTags);
      setIntervalSelected({
        label: `${data.interval}min`,
        value: `${data.interval}m`,
      });
       fetchTagsBasedSection();  
      
    } else {
      dispatch({
        type: "ADD_START_DATE",
        // payload: moment(new Date()).format("YYYY-MM-DDTHH:mm"),
        payload: startDate,
      });
      dispatch({
        type: "ADD_END_DATE",
        payload: endDate,
      });
    }
  }, [showPopup.minimise]);

  // Yellow search feature in tags input field
  const formatOptionLabelForTags = ({ label }) => {
    let labelvalue = typeof label === "object" ? label[0] : label;
    return (
      <Highlighter
        highlightClassName="highlighter"
        highlightStyle={{ backgroundColor: "yellow" }}
        searchWords={inputArr}
        textToHighlight={labelvalue}
      />
    );
  };
  return (
    <div
      className={
        showingInTrend ? "searchSection mt-2" : "mycard searchSection mt-2"
      }
      style={{ borderRadius: "0px" }}
    >
      <div className="outer">
        <div
          className={`colcustom-13 pl-2 pr-2 multiTagSelection position-relative`}
        >
          <FilterLabel filtername="Plant " mandatory={true} />
          <Select
            className={
              validationErrorMsg1.plant
                ? "error-input basic-single"
                : "basic-single"
            }
            ref={selectedPlant}
            classNamePrefix="select"
            value={plantSelected}
            onChange={updateSectionData}
            formatOptionLabel={formatOptionLabel}
            isClearable={false}
            isSearchable={true}
            isMulti={true}
            options={
              showingInTrend
                ? getPlants(data.plant)
                : getPlants(authProvider?.plants)
            }
          />
          {validationErrorMsg1.plant && (
            <InputValidationText
              validationMessage={validationErrorMsg1.plant}
            />
          )}
          <div className="cutomremoveindi">
            {plantSelected.length === 0 || (
              <button onClick={updatePlantValueNew} className="p-2 btn">
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        {!showingInTrend && (
          <div className={`colcustom-9 pl-2 pr-2`}>
          {/* <div
          className={`${
            showingInTrend ? `colcustom-13` : `colcustom-11`
          } pl-2 pr-2`}
        > */}
            <FilterLabel filtername="Line" mandatory={false} />
            <Select
              className="basic-single"
              classNamePrefix="select"
              ref={selectedLine}
              value={lineSelected}
              onChange={updateLineValue}
              isClearable={false}
              isSearchable={true}
              options={getLinesBasedOnPlant(
                authProvider.plantBasedLines,
                plantSelected.map((obj) => obj?.label)
              )}
              isDisabled={!showingInTrend && sectionDropDisable}
            />
            <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
              {lineSelected === null || (
                <button onClick={updateLineValueNew} className="p-2 btn">
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>
         )} 

        <div
          className={`${
            showingInTrend ? `colcustom-13` : `colcustom-11`
          } pl-2 pr-2`}
        >
          <FilterLabel filtername="Section Name" mandatory={false} />
          <Select
            className="basic-single"
            classNamePrefix="select"
            ref={selectedSection}
            value={sectionSelected}
            onChange={updateTagValue}
            formatOptionLabel={formatOptionLabel}
            isClearable={false}
            isSearchable={true}
            options={
              showingInTrend
                ? getSectionBasedOnPlant(
                    authProvider.plantBasedSection,
                    //data.plant,
                    plantSelected.map((obj) => obj?.label),
                    lineSelected?.value
                  )
                : getSectionBasedOnPlant(
                    authProvider.plantBasedSection,
                    plantSelected.map((obj) => obj?.label),
                    lineSelected?.value
                  )
            }
            isDisabled={!showingInTrend && sectionDropDisable}
          />
          <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
            {sectionSelected.length === 0 || (
              <button onClick={updateTagValueNew} className="p-2 btn">
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        <div className="colcustom-26 pl-2 pr-2 multiTagSelection position-relative">
          {/* {console.log("tagOptions --",tagOptions)} */}
          <FilterLabel filtername="Tags " mandatory={true} />
          <Select
            className={
              validationErrorMsg1.tag
                ? "error-input basic-single"
                : "basic-single"
            }
            classNamePrefix="select"
            ref={selectedTag}
            value={tagSelected}
            onChange={updatetagData}
            onInputChange={handleinputChangetags}
            onBlur={true}
            formatOptionLabel={formatOptionLabelForTags}
            blurInputOnSelect={true}
            isClearable={false}
            isSearchable={true}
            options={tagOptions}
            filterOption={filterOption}
            isDisabled={!showingInTrend && sectionDropDisable}
            isMulti
          />
          {validationErrorMsg1.tag && (
            <InputValidationText validationMessage={validationErrorMsg1.tag} />
          )}
          {tagSelected.length !== 0 && (
            <small className="text-dark position-absolute ml-2">
              {tagSelected.length === 1
                ? `${tagSelected.length} tag is`
                : `${tagSelected.length} tags are`}{" "}
              selected
            </small>
          )}
          <div className="colcustom-2 pl-2 pr-2 cutomremove">
            {tagSelected.length === 0 || (
              <button
                onClick={() => {
                  setTagSelected([]);
                }}
                className="p-2 btn"
              >
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        <div className="colcustom-13 pl-2 pr-2 customDate">
          <FilterLabel filtername="Start Date " mandatory={true} />
          <DatePicker
            selected={startDate}
            className={
              validationErrorMsg1.startDate
                ? "error-input form-control"
                : "form-control"
            }
            placeholderText="Click to select a date"
            onChange={(date) => {
              if (date > new Date())
                setValidationErrorMsg1({
                  ...validationErrorMsg1,
                  startDate: "Please select a valid start date",
                });
              else {
                setStartDate(date);
                dispatch({
                  type: "FILTER_ERROR",
                  payload: "",
                });
                setValidationErrorMsg1({
                  ...validationErrorMsg1,
                  startDate: "",
                });
                dispatch({
                  type: "ADD_START_DATE",
                  payload: moment(date).format("YYYY-MM-DDTHH:mm"),
                });
                setIsFilterChanged(true);
              }
            }}
            showTimeSelect
            dateFormat="d/MM/yyyy h:mm aa"
            timeIntervals={1}
            calendarClassName="rasta-stripes"
            readOnly={!showingInTrend && sectionDropDisable}
          />
          {validationErrorMsg1.startDate && (
            <InputValidationText
              validationMessage={validationErrorMsg1.startDate}
            />
          )}
        </div>

        <div className="colcustom-13 pl-2 pr-2">
          <FilterLabel filtername="End Date " mandatory={true} />
          <DatePicker
            selected={endDate}
            placeholderText="Click to select a date"
            className={
              validationErrorMsg1.endDate
                ? "error-input form-control"
                : "form-control"
            }
            onChange={(date) => {
              dispatch({
                type: "FILTER_ERROR",
                payload: "",
              });
              if (date >= startDate && date <= new Date()) {
                setValidationErrorMsg1({
                  ...validationErrorMsg1,
                  endDate: "",
                });
                setEndDate(date);
                dispatch({
                  type: "ADD_END_DATE",
                  payload: moment(date).format("YYYY-MM-DDTHH:mm"),
                });
                setIsFilterChanged(true);
              } else {
                setValidationErrorMsg1({
                  ...validationErrorMsg1,
                  endDate: "Please select a valid end date",
                });
              }
            }}
            showTimeSelect
            dateFormat="d/MM/yyyy h:mm aa"
            timeIntervals={1}
            calendarClassName="rasta-stripes"
            readOnly={!showingInTrend && sectionDropDisable}
          />
          {validationErrorMsg1.endDate && (
            <InputValidationText
              validationMessage={validationErrorMsg1.endDate}
            />
          )}
        </div>

        <div
          className={`${
            showingInTrend ? `colcustom-13` : `colcustom-9`
          } pl-2 pr-2 position-relative`}
        >
          <FilterLabel filtername="Interval " mandatory={true} />
          <Select
            className={
              validationErrorMsg1.interval
                ? "error-input basic-single"
                : "basic-single"
            }
            classNamePrefix="Select"
            value={intervalSelected}
            onChange={(selected) => {
              setValidationErrorMsg1({
                ...validationErrorMsg1,
                interval: "",
              });
              dispatch({ type: "ERROR_FALSE" });
              setIntervalSelected(selected);
              setIsFilterChanged(true);
            }}
            formatOptionLabel={formatOptionLabel}
            isClearable={true}
            isSearchable={true}
            options={minsIntervalOptions()}
            isDisabled={!showingInTrend && sectionDropDisable}
          />
          {validationErrorMsg1.interval && (
            <InputValidationText
              validationMessage={validationErrorMsg1.interval}
            />
          )}
        </div>
        <div
          className={`${
            showingInTrend ? `colcustom-9` : `colcustom-5`
          } pl-2 pr-2 text-right`}
        >
          <button
            onClick={() => downloadHandler()}
            className="btn btnfrst mr-1"
            disabled={userStatus.loading}
          >
            {userStatus.loading ? <ClipLoader size={16} /> : <FiDownload />}
          </button>
          {showingInTrend && (
           
            <button
              onClick={() => fetchDataHandler()}
              className="btn btnfrst"
              disabled={userStatus.loading}
            >
              {userStatus.loading ||isChartLoading ? <ClipLoader size={16} /> : "Go"}
            </button>
          )}
        </div>
    
      </div>

      <small className="text-black-50">* fields are mandatory to fill</small>

      {filterData.filterError && <Alert errMsg={filterData.filterError} />}
    </div>
  );
};

export const getFormattedData = async (data, responseData) => {
  try {
    // Extract unique timestamps and sort them
    const uniqueTimestamps = [...new Set(responseData.map(item => item.timestamp))].sort((a, b) => new Date(a) - new Date(b));
    // console.log(uniqueTimestamps)
    let timeValueArr = []
 
    for (const tag of data) {
      // console.log('----ttt------', tag)
      let obj = {
        name: tag.TagName,
        "showInLegend": true,
        "zIndex": 1
      };
      // for(const item of responseData) {
      // const tagWiseData = responseData.filter(i=>i.tagUID == tag.TagUID)
      const filteredData = responseData.filter(item => item.tagUID == tag.TagUID)
        .map(item => {
          let arr = [
            item.timestamp,
            item.averageValue == "NaN" ? null : item.averageValue
          ]
          return arr
          // {
          //   tagUID: item.tagUID,
          //   timestamp: item.timestamp,
          //   tagName: item.tagName
          // };
        });
      // console.log('---fff-----', filteredData)
      obj.data = filteredData
      timeValueArr.push(obj)
    }
    let finalOutput = {
      seriesData: timeValueArr,
      uniqueDataDateTime: uniqueTimestamps,
      minMax: []
    }
    return finalOutput
  } catch (error) {
    console.log('----errorr----', error)
  }
}