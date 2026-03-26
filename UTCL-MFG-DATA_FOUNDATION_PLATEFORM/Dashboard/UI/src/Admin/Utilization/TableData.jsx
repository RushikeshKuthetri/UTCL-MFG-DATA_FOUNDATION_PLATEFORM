import React, { useEffect, useState } from 'react'
import "./ModuleUtilize.scss";
import { getTableData } from '../../utils/chartMethods';
const TableData = (props) => {

    const [tableData,setTableData]=useState([])

    useEffect(()=>{
        console.log("table data useeffect");
        console.log(props);
        if(props.stateprop.plant==='' || props.stateprop.submit===false){
            // setLineChart({});
            setTableData([])
            // setPieChart({});
            // setBarChart({});
        }else{
            if(props.stateprop.key==="Table"){
                console.log("else");
                callGrapgh()
            }
        }
    },[props])

    const callGrapgh=async()=>{
        let payload={}
        console.log(props.stateprop , "table data");
        let tableData=await getTableData();
        setTableData(tableData)
        
    }
    // console.log(tableData);
  return (
    <>
    {tableData.length===0 ?

    <div className='mt-3'>
<div>
            <p className="mt-3 flex flex-col items-center justify-center h-40 rounded-lg">
              <div class="text-3xl mb-3 zoom-animation">🔍</div>
 
              {/* <!-- Title --> */}
              <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                No Data Found
              </h2>
            </p>
          </div>
    </div>
         :
         <div className='tableData-fixed'>
        <table className='table table-hover'>
            <thead>
                <tr className='table-dataRow-fixed'>
                    <th className='tableData-heading'>Id</th>
                    <th className='tableData-heading'>Name</th>
                    <th className='tableData-heading'>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row,index)=>(
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.lname}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
         }
    
    </>
  )
}

export default TableData