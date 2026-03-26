import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CementMillModel } from '../system-anlysis/systemAnlysis.model';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlertService } from 'src/app/services/alert.service';
import {Sort, MatSortModule} from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrls: ['./recommendations-list.component.scss'],
})
export class RecommendationsListComponent {
  RecommendationsListUrlType = {
    'getRecommedationDataDateRange': environment.baseUrl + 'getRecommedationDataDateRange',
    'exportRecommedationDataDateRange': environment.baseUrl + 'exportRecommedationDataDateRange',
    'getFilterParameters': environment.baseUrl + 'getFilterParameters',
    // 'addLog':environment.baseUrl+'addLog'
  }
  RecommendUrl={
    // 'addLog': 'https://i4.utclconnect.com/api/addLog'
    "addLog":`${environment.baseUrlApi}addLog`
    // "addLog":'https://0207pwadeh.execute-api.ap-south-1.amazonaws.com/uat/addLog'
  }

  showNoData: boolean = false;
  sidebarExpanded = true;
  flags = {
    showLoader: false
  }

  @ViewChild('paginator') paginator!: MatPaginator;
  // payload = {

  //   "Plant_Code": "VC01",

  //   "Mill": "U1CMML3",

  //   "Grade": "OPC53",

  //   "Model_No": 0,

  //   "startDate": "2023-03-29T18:30:00.000Z",

  //   "endDate": "2023-05-29T18:30:00.000Z",

  //   "tagId": "" 
  // }

  payload = {

    "Plant_Code": 'null',

    "Mill": 'null',

    "Grade": 'null',

    "Model_No": 0,

    "startDate": null,

    "endDate": null,

    "tagId":''
  }

  recommendationDataSource: any = [];
  filterDataSource!: { Plant_Code: any; Mill: any; Grade: any; dateTime: any; };
  dataSource: any;
  displayedColumn!: string[];
  keysList!: string[];
  parameterDropDownDatas: any;
  parameterDropDownData: any;
  newDate:any
  min:any
  max:any
  sortedData: any;
  selectedOption: string ='All'; 
  urlLink:any
  private cancelRequest$:Subject<void>=new Subject<void>();
  private routeChangeSubscription:Subscription=new Subscription
  constructor(private cementMillModel: CementMillModel,private alert:AlertService,private http:HttpClient,private _route:Router) {

  }

  public downloadRecommendationData() {

    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "tagId":this.payload.tagId==="All"? "" :this.payload.tagId,
      "startDate": moment(this.payload.startDate).format("YYYY-MM-DD HH:mm"),
      "endDate": moment(this.payload.endDate).format("YYYY-MM-DD HH:mm")
    }
    // console.log("In ALert", payload);

    this.cementMillModel.postCall(this.RecommendationsListUrlType.exportRecommedationDataDateRange, payload,this.cancelRequest$).subscribe(
      (result: any) => {
        window.open(result.result.url)

      },
      (error: any) => {
        // console.log(error);

      }
    )
  }



  

  ngOnInit() {

    this.urlLink=window.location.href

    this.routeChangeSubscription=this._route.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.cancelRequest$.next();
      }
    })
    // console.log(this.urlLink);
    

    // this.getRecommendationData();
    // console.log("recommand paylaod",this.payload);
  //   if(this.alert.getDate()){
  //     this.newDate=this.alert.getDate()
  //     let current:any=moment()
  //     let midnight=moment(this.newDate)
  //     this.min = midnight.startOf('day').toDate();
  // // min = this.current.format('MM/DD/YYYY, h:mm A');
  //     this.max = current.toDate()
  //     console.log(this.newDate);
  //     console.log(this.min,this.max);

  //     this.payload.startDate=this.min
  //     this.payload.endDate=this.max
  //   }
  
    
  }

  getRecommendationData() {
    // console.log("kjdhfkdhfodhvodhvo",this.payload);
    
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "tagId": this.payload.tagId==="All"? "" :this.payload.tagId,
      "startDate": moment(this.payload.startDate).format("YYYY-MM-DD HH:mm"),
      "endDate": moment(this.payload.endDate).format("YYYY-MM-DD HH:mm")
    }
    this.flags.showLoader = true;
    this.showNoData = false;
    this.cementMillModel.postCall(this.RecommendationsListUrlType.getRecommedationDataDateRange, payload,this.cancelRequest$).subscribe(
      (result: any) => {
        if (result.result[0].result == 'No Record Found') {
          this.parameterDropDownData = [];
          this.showNoData = true;
          this.flags.showLoader = false;
          this.recommendationDataSource = [];
          this.getParameter()
        }
        else {
          this.showNoData = false;
          this.flags.showLoader = false;
          this.recommendationDataSource = result.result;
          this.recommendationDataSource.map((item: any) => {
            // this.parameterDropDownData.push({ 'value': item.tag_id, 'viewValue': item.Display_Name })
            item.initialValue = item.initialValue.toFixed(2);
            item.recommendedValue = item.recommendedValue.toFixed(2);
            item.timestamp = new Date(item.timestamp).toUTCString().split('GMT')[0];

          })
          this.recommendationDataSource.sort((val1:any,val2:any)=>{
            const date1=new Date(val1.timestamp);
            const date2=new Date(val2.timestamp)

            if(date1>date2) return -1
            if(date1<date2) return 1

            return 0;
          })
          // console.log(this.recommendationDataSource);
          
          this.sortedData = this.recommendationDataSource.slice();
          // console.log(this.parameterDropDownData);

          // let jsonObj=this.parameterDropDownData.map(JSON.stringify);
          //  let uniqueSet=new Set(jsonObj)
          //  this.parameterDropDownDatas=Array.from(uniqueSet).map(JSON.parse)
          // console.log(this.parameterDropDownDatas);

          // console.log("this is paramter dropdown", this.parameterDropDownData);

          this.keysList = ['Display_Name', 'initialValue', 'recommendedValue', 'isAcknowledged', 'action_taken', 'is_snoozed', 'timestamp', 'comments']
          this.displayedColumn = ['Parameter Name', 'Initial Value', 'Recommended Value', ' Acknowledged', 'Action Taken', 'Snoozed', 'Date & Time', 'Comments']
          this.dataSource = new MatTableDataSource(this.recommendationDataSource);
          this.dataSource.paginator = this.paginator;
          this.filterDataSource = this.cementMillModel.parseFilterData(this.payload);

        }

      },
      (error: any) => {
        // console.log(error);
        this.recommendationDataSource = [];
        this.showNoData = true;
        this.flags.showLoader = false;

      }
    )
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    // console.log(a,b);
    
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortData(sort: Sort) {
    const data = this.recommendationDataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'desc';
      switch (sort.active) {
        case 'Display_Name':
          return this.compare(a.Display_Name, b.Display_Name, isAsc);
        case 'initialValue':
          return this.compare(a.initialValue, b.initialValue, isAsc);
        case 'recommendedValue':
          return this.compare(a.recommendedValue, b.recommendedValue, isAsc);
        case 'timestamp':
          return this.compare(a.timestamp, b.timestamp, isAsc);
        case 'isAcknowledged':
          return this.compare(a.isAcknowledged, b.isAcknowledged, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.sortedData);

  }

  getRecommandParamterDropDown(event: any) {
    this.payload.tagId= event.target.value;
    // console.log(this.payload.tagId);
    
    this.getRecommendationData();


  }
  getParameter() {
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "ParameterType": 1

    }
    this.cementMillModel.postCall(this.RecommendationsListUrlType.getFilterParameters,payload,this.cancelRequest$).subscribe((res:any)=>{
      // console.log(res["result"]);
      this.parameterDropDownData=res["result"]
      
    })
  }

  onChangeFilter(event: any) {
    // alert(event);
    // console.log(event);
    
    this.flags.showLoader = true;
    this.payload = {
      "Plant_Code": event.Plant_Code,
      "Mill": event.Mill,
      "Grade": event.Grade,
      "Model_No": 0,
      "startDate": event.dateRange[0] ? event.dateRange[0] : moment().toDate,
      "endDate": event.dateRange[1] ? event.dateRange[1] : moment().toDate,
      "tagId": ""
    }

    // console.log(this.payload);
    localStorage.setItem('filtersState',JSON.stringify(event))
    this.addLog(this.payload)
    this.getRecommendationData()
    this.getParameter()

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
    

    this.cementMillModel.postCall(this.RecommendUrl.addLog,payload,this.cancelRequest$).subscribe({
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
