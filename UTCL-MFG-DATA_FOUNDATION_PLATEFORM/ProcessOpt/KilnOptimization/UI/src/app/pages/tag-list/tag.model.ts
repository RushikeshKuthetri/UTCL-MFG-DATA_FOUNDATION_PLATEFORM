import { MatTableDataSource } from "@angular/material/table";

export class tagModel{
    parseAlertData(result:any){
      let recommendationDataSource=result.result;
      recommendationDataSource.map((item:any)=>{
        // console.log(moment(item.Trigger_Time).format("YYYY-MM-DD HH:mm"));
        
          // item.deviationpercent=item.deviationpercent.toFixed(2);
          // item.deviationvalue=item.deviationvalue?.toFixed(2);
          item.Trigger_Time= new Date(item.Trigger_Time).toUTCString().split('GMT')[0]
      })
      recommendationDataSource.sort((val1:any,val2:any)=>{
        const date1=new Date(val1.Trigger_Time)
        const date2=new Date(val2.Trigger_Time)
  
        if(date1>date2) return -1;
        if(date1<date2) return 1;
  
        return 0
      })
      let keysList=['Tag_Id','Tag_Generic_Description','Spot_Value','Trigger_Time',]
      let displayedColumn=['Tag Id','Parameter Name','Spot Value','TimeStamp']
      let dataSource = new MatTableDataSource(recommendationDataSource);
      return {'recommendationDataSource':recommendationDataSource,'keysList':keysList,'displayedColumn':displayedColumn,'dataSource':dataSource }
    }  
  }