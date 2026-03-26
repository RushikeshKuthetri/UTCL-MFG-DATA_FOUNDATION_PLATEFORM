// import React from 'react'
// import { useSelector } from 'react-redux';
// import { PopUp } from '../PopUp/PopUp';
// import { Graph, TrendFilterCard } from '../../../pages';
 
// export const Trends = () => {
//     const { showPopup, filterData } = useSelector((state) => state);
//     return (
//         <div >
//             {!showPopup.showPopUp && (
//                 <PopUp
//                     heading="Trends"
//                     dispatchType="HIDE_POPUP"
//                     children={
//                         <div
//                             style={{
//                                 display: showPopup.minimise ? "none" : "block",
//                             }}>
//                             {/* <FilterCard4 */}
//                             <TrendFilterCard    // changed to TrendFilterCard for the layout and ui change wrt to plotly development by TRIDAI on 30-01-2026
//                                 showingInTrend={false}
//                                 data={{
//                                     label: showPopup.label,
//                                     plant: filterData.plant,
//                                     section: filterData.section,
//                                     tagname: filterData.selectedTagnames,
//                                     // interval: "1m",    
//                                     interval: "auto",      // TRIDAI (05-02) Chnaged to set auto as by default interval selection
//                                 }}
//                             />
//                             {/* To avoid overflow in TrendFilterCard added style here */}
//                             <div style={{ overflowY: "auto", height: "85vh", paddingBottom: "20px" }}>
//                                 <Graph />
//                             </div>
//                         </div>
//                     }
//                 />
//             )}

//         </div>
//     )
// }
 
 
 
import React from 'react'
import { useSelector } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { Graph, TrendFilterCard } from '../../../pages';

export const Trends = () => {
    const { showPopup, filterData } = useSelector((state) => state);
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-max">

                {/* <FilterCard4 */}
                <div className="shrink-0 overflow-visible">
                    <TrendFilterCard    // changed to TrendFilterCard for the layout and ui change wrt to plotly development by TRIDAI on 30-01-2026
                        showingInTrend={false}
                        data={{
                            label: showPopup.label,
                            plant: filterData.plant,
                            section: filterData.section,
                            tagname: filterData.selectedTagnames,
                            // interval: "1m",    
                            interval: "auto",      // TRIDAI (05-02) Chnaged to set auto as by default interval selection
                        }}
                    />
                </div>
                {/* To avoid overflow in TrendFilterCard added style here */}
                <div className="overflow-y-auto h-[85vh]">
                    <Graph />
                </div>
            </div>
        </div>
    )
}

