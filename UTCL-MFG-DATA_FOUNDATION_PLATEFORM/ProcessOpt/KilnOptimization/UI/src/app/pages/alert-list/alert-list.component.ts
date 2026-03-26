import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CementMillModel} from '../system-anlysis/systemAnlysis.model';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import {alertModel} from './alert.model'
import { Sort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent {
  RecommendationsListUrlType={
    'getRecommedationDataDateRange': environment.baseUrl+ 'getAlertDataDateRange',
    'exportAlertDataDateRange':environment.baseUrl+'exportAlertDataDateRange',
    'getFilterParameters':environment.baseUrl+'getFilterParameters',
    // 'addLog':environment.baseUrl+'addLog'
  }
  AlertUrl={
    // 'addLog': 'https://i4.utclconnect.com/api/addLog'
    "addLog":`${environment.baseUrlApi}addLog`
    // "addLog":'https://0207pwadeh.execute-api.ap-south-1.amazonaws.com/uat/addLog'
  }

  showNoData:boolean=false;
  sidebarExpanded = true;
  flags={
    showLoader:false
  }
  @ViewChild('paginator') paginator!: MatPaginator;
  payload = {
    "Plant_Code": 'null',
    "Mill":'null',
    "Grade": 'null',
    "Model_No": 0,
    "startDate": null,
    "endDate":null,
    "tagId": "" 
  }

  alertDataSource: any=[];
  filterDataSource!: { Plant_Code: any; Mill: any; Grade: any; dateTime: any; };
  dataSource: any;
  displayedColumn!: string[];
  keysList!: string[];
  alertparameterDropDownData: any;
  alertSortedData:any
  selectedOption: string='All'; 
  urlLink:any
  private cancelRequest$:Subject<void>=new Subject<void>();
  private routeChangeSubscription:Subscription=new Subscription

  constructor(private cementMillModel:CementMillModel, private alertModel:alertModel,private http:HttpClient,private _route:Router){

  }

  public downloadAlertData(){
    
    let payload={
      "Plant_Code": this.payload.Plant_Code, 
      "Mill": this.payload.Mill,
      "tagId":this.payload.tagId==="All"? "" :this.payload.tagId,
      "startDate": this.payload.startDate,
      "endDate": this.payload.endDate
    }
    // console.log("In ALert",payload);
    
    this.cementMillModel.postCall(this.RecommendationsListUrlType.exportAlertDataDateRange,payload,this.cancelRequest$).subscribe(
      (result:any)=>{
        window.open(result.result.url)
        
      },
      (error:any)=>{
        // console.log(error);
        
      }
    )
  
  }

  ngOnInit(){
    
    // this.getAlertsData();
    this.urlLink=window.location.href
    this.routeChangeSubscription=this._route.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.cancelRequest$.next();
      }
    })
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    // console.log(a,b);
    
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortData(sort: Sort) {
    const data = this.alertDataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.alertSortedData = data;
      return;
    }

    this.alertSortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'desc';
      switch (sort.active) {
        case 'Display_Name':
          return this.compare(a.Display_Name, b.Display_Name, isAsc);
        case 'deviationpercent':
          return this.compare(a.deviationpercent, b.deviationpercent, isAsc);
        case 'deviationvalue':
          return this.compare(a.deviationvalue, b.deviationvalue, isAsc);
        case 'timestamp':
          return this.compare(a.timestamp, b.timestamp, isAsc);
       
        default:
          return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.alertSortedData);
    this.dataSource.paginator = this.paginator;

  }



  getAlertParamterDropDown(event:any){
    this.payload.tagId=event.target.value;
    // console.log(this.payload.tagId);
    
    this.getAlertsData()
  }

  getAlertsData(){

    // console.log(this.payload);
    
    let payload={
      "Plant_Code": this.payload.Plant_Code, 
      "Mill": this.payload.Mill,
      "tagId": this.payload.tagId==="All"? "" :this.payload.tagId,
      "startDate": moment(this.payload.startDate).format("YYYY-MM-DD HH:mm"),
      "endDate": moment(this.payload.endDate).format("YYYY-MM-DD HH:mm")
    }
    // console.log(payload);
    
    this.flags.showLoader=true;
    this.showNoData=false;
    this.cementMillModel.postCall(this.RecommendationsListUrlType.getRecommedationDataDateRange, payload,this.cancelRequest$).subscribe(
      (result:any)=>{
        if(result.result[0].result=='No Record Found'){
          // console.log("Alert if");
          
          this.alertparameterDropDownData=[]
          this.showNoData=true;
          this.flags.showLoader=false;
          this.alertDataSource=[];
          this.getParameter()
        }
        else{
          this.showNoData=false;
          this.flags.showLoader=false;
          let parsedAlertsData=this.alertModel.parseAlertData(result);
          this.alertDataSource=parsedAlertsData.recommendationDataSource;
          this.keysList=parsedAlertsData.keysList;
          this.displayedColumn=parsedAlertsData.displayedColumn;
          this.dataSource = parsedAlertsData.dataSource;
          this.dataSource.paginator = this.paginator;
          this.filterDataSource= this.cementMillModel.parseFilterData(this.payload);

          // console.log(this.alertDataSource);
          
          
        }
        
      },
      (error:any)=>{
        this.alertDataSource=[];
        this.showNoData=true;
        this.flags.showLoader=false;
        
      }
    )
    
    
    // this.cementMillModel.postCall(this.RecommendationsListUrlType.getFilterParameters,payload).subscribe((res:any)=>{
    //    this.alertparameterDropDownData=res["result"];
    //    console.log(this.alertparameterDropDownData);
       

    // })
  }

  getParameter(){
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "ParameterType": 0

    }
      
    this.cementMillModel.postCall(this.RecommendationsListUrlType.getFilterParameters,payload,this.cancelRequest$).subscribe((res:any)=>{
      this.alertparameterDropDownData=res["result"];
      // console.log(this.alertparameterDropDownData);
      

   })
  }

  onChangeFilter(event:any){
    // console.log(event.dateRange);
    
    this.payload = {
      "Plant_Code": event.Plant_Code,
      "Mill":event.Mill,
      "Grade": event.Grade,
      "Model_No": 0,
      "startDate": event.dateRange[0]?event.dateRange[0]: moment().toDate,
      "endDate": event.dateRange[1]?event.dateRange[1]: moment().toDate,
      "tagId": "" 
    }
    localStorage.setItem('filtersState',JSON.stringify(event))
    this.addLog(this.payload)
    this.getAlertsData()
    this.getParameter()
    // this.flags.showLoader=false;
  }

  addLog(data:any){
    let option={
      "Plant":data.Plant_Code,
      "Mill":data.Mill
    }
    let email=localStorage.getItem("userEmail") 
    let ip=localStorage.getItem("Ip Address")
    let plantName=localStorage.getItem("kilnPlant")
    let payload={
      "userId":email,
      "ip":ip,
      "module":"opt",
      "plant":plantName,
      "url":this.urlLink,
      "options":JSON.stringify(option),
      "plant_or_section":"Kiln"
    }

    console.log(payload)
    

    this.cementMillModel.postCall(this.AlertUrl.addLog,payload,this.cancelRequest$).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      }
    })
  }

  ngOnDestroy(){
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if(this.routeChangeSubscription){
      this.routeChangeSubscription.unsubscribe();
    }
  }
}
