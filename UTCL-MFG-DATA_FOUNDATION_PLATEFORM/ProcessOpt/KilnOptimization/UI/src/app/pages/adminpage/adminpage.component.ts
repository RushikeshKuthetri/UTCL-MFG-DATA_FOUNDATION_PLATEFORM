import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DashboardModel } from '../dashboard/dashboard.model';
import { ToasterService } from 'src/app/services/toaster.service';
import { Subject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss'],
})
export class AdminpageComponent implements OnInit {
  AdminUrlType = {
    getCloseLoopMasterData: environment.baseUrl + 'getCloseLoopMasterData',
    updateCloseLoopMasterData:environment.baseUrl + 'updateCloseLoopMasterData'
    // 'addLog':environment.baseUrl+'addLog'
  };
  dashboardLink: any = {
    "addLog":`${environment.baseUrlApi}addLog`
  };
  sidebarExpanded = true;
  tableRecord: any = [];
  resultArray:any=[]
  btnDisable:boolean=true
  submitButtonsDisabled: { [plant: string]: { [mill: string]: boolean } } = {};
  noCloseLoopData:boolean=true;
  noRecordfound:boolean=true;
  submitData: any = [];
  jsonKiln:any
  urlLink: any;
  dataNotFound:boolean=false
  private cancelRequest$:Subject<void>=new Subject<void>();
  private routeChangeSubscription:Subscription=new Subscription

  constructor(private http:HttpClient,private dashboardModel:DashboardModel,private toaster: ToasterService,private _route:Router){}



  ngOnInit(): void {
    this.urlLink = window.location.href;

    this.routeChangeSubscription=this._route.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.cancelRequest$.next();
      }
    })
    // this.getTableData();
    this.jsonKiln=JSON.parse(localStorage.getItem("filtersState") || '{}')
    if(Object.keys(this.jsonKiln).length!==0){
      this.getTableData();
      this.addLog();
      this.noCloseLoopData=true
    }else{
      this.noCloseLoopData=false
    }

  }
  showSuccessMessage() {
    this.toaster.addSuccessToast();
  }
  public getTableData() {
    let payload={
      "Plant_Code":this.jsonKiln.Plant_Code,
      "Mill":this.jsonKiln.Mill
    }
    this.dashboardModel.postCall(this.AdminUrlType.getCloseLoopMasterData,payload,this.cancelRequest$).subscribe(
      (result:any)=>{
        if (result.error === false) {
          this.noRecordfound = false;
          this.tableRecord = result.result;
          console.log(this.tableRecord);
          for (const record of this.tableRecord) {
            for (const result of record.result) {
              if (result.plant && result.mill) {
                if (!this.submitButtonsDisabled[result.plant]) {
                  this.submitButtonsDisabled[result.plant] = {};
                }
                if (!this.submitButtonsDisabled[result.plant][result.mill]) {
                  this.submitButtonsDisabled[result.plant][result.mill] =
                    true;
                }
              }else{
                this.noRecordfound=true;
                this.noCloseLoopData = false;
              }
            }
          }
        }else{
          this.dataNotFound=true
          this.noRecordfound=true;
          this.noCloseLoopData = false;
        }
      },
      (error:any)=>{
        console.log(error);
        this.noRecordfound=true;
        this.noCloseLoopData=false
      }
    )    
  }
  addLog() {

    let payLoadData={
      "Plant":this.jsonKiln.Plant_Code,
      "Mill":this.jsonKiln.Mill
    }
    let email=localStorage.getItem("userEmail") 
    let ip=localStorage.getItem("Ip Address")
    let plantName=localStorage.getItem("kilnPlant")
    let payload = {
      userId: email,
      ip: ip,
      module: 'opt',
      plant: plantName,
      url: this.urlLink,
      options: JSON.stringify(payLoadData),
      plant_or_section: 'Kiln',
    };
    this.dashboardModel.postCall(this.dashboardLink.addLog,payload,this.cancelRequest$).subscribe({
      next:(res:any)=>{
        console.log(res);

      }
    })
  }
  handleSubmitKiln(){
    let paylaod = this.submitData;
    this.dashboardModel.postCall(this.AdminUrlType.updateCloseLoopMasterData,paylaod,this.cancelRequest$).subscribe(
      (result:any)=>{
        this.getTableData()
        this.showSuccessMessage()
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  handleFlagChange($event: any,data:any,item:any) {
    console.log($event.value,data,item);
    this.btnDisable=false
    this.submitData = item;
    // item[0].action=true
    this.submitButtonsDisabled[data.plant][data.mill] = false;
  }

  ngOnDestroy(){
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if(this.routeChangeSubscription){
      this.routeChangeSubscription.unsubscribe();
    }
  }
}
