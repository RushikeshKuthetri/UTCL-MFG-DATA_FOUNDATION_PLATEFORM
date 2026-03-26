import { Component,ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CementMillModel} from '../system-anlysis/systemAnlysis.model';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { tagModel } from './tag.model';
import { Subject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  RecommendationsListUrlType={
    'getDisturbanceDataDateRange': environment.baseUrl+ 'getDisturbanceDataDateRange',
    'exportDisturbanceDataDateRange':environment.baseUrl+'exportDisturbanceDataDateRange',
    'getFilterParameters':environment.baseUrl+'getFilterParameters',
    // 'addLog':environment.baseUrl+'addLog'
  }
  AlertUrl={
    "addLog":`${environment.baseUrlApi}addLog`
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

  disturbanceDataSource: any=[];
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

  constructor(private cementMillModel:CementMillModel,private http:HttpClient,private tagModel:tagModel,private _route:Router){}


  public downloadAlertData(){
    
    let payload={
      "Plant_Code": this.payload.Plant_Code, 
      "Mill": this.payload.Mill,
      "tagId":this.payload.tagId==="All"? "" :this.payload.tagId,
      "startDate": this.payload.startDate,
      "endDate": this.payload.endDate
    }
    // console.log("In ALert",payload);
    
    this.cementMillModel.postCall(this.RecommendationsListUrlType.exportDisturbanceDataDateRange,payload,this.cancelRequest$).subscribe(
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
    const data = this.disturbanceDataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.alertSortedData = data;
      return;
    }

    this.alertSortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'desc';
      switch (sort.active) {
        case 'Tag_Id':
          return this.compare(a.Tag_Id, b.Tag_Id, isAsc);
        case 'Tag_Generic_Description':
          return this.compare(a.Tag_Generic_Description, b.Tag_Generic_Description, isAsc);
        case 'Spot_Value':
          return this.compare(a.Spot_Value, b.Spot_Value, isAsc);
        case 'Trigger_Time':
          return this.compare(a.Trigger_Time, b.Trigger_Time, isAsc);
       
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
    this.cementMillModel.postCall(this.RecommendationsListUrlType.getDisturbanceDataDateRange, payload,this.cancelRequest$).subscribe(
      (result:any)=>{
        if(result.result[0].result=='No Record Found'){
          // console.log("Alert if");
          
          this.alertparameterDropDownData=[]
          this.showNoData=true;
          this.flags.showLoader=false;
          this.disturbanceDataSource=[];
          this.getParameter()
        }
        else{
          this.showNoData=false;
          this.flags.showLoader=false;
          let parsedAlertsData=this.tagModel.parseAlertData(result);
          this.disturbanceDataSource=parsedAlertsData.recommendationDataSource;
          this.keysList=parsedAlertsData.keysList;
          this.displayedColumn=parsedAlertsData.displayedColumn;
          this.dataSource = parsedAlertsData.dataSource;
          this.dataSource.paginator = this.paginator;
          this.filterDataSource= this.cementMillModel.parseFilterData(this.payload);

          // console.log(this.alertDataSource);
          
          
        }
        
      },
      (error:any)=>{
        this.disturbanceDataSource=[];
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
  //   let payload={
  //     "Plant_Code": "RC", 

  //   "Mill": "U4KILN",   

  //   "ParameterType":0
  //   }
      
  //   this.cementMillModel.postCall(this.RecommendationsListUrlType.getFilterParameters,payload).subscribe((res:any)=>{
  //     this.alertparameterDropDownData=res["result"];
  //     console.log(this.alertparameterDropDownData);
      

  //  })
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

    // console.log(payload)
    

    this.cementMillModel.postCall(this.AlertUrl.addLog,payload,this.cancelRequest$).subscribe({
      next:(res:any)=>{
        // console.log(res);
        
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
