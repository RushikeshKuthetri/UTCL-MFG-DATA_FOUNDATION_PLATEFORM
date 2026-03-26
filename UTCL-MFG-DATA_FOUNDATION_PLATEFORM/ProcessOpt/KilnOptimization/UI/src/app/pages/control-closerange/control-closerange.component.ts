import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CementMillModel } from '../system-anlysis/systemAnlysis.model';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AlertService } from 'src/app/services/alert.service';
import { Sort, MatSortModule } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'src/app/services/toaster.service';
import { Subject, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-control-closerange',
  templateUrl: './control-closerange.component.html',
  styleUrls: ['./control-closerange.component.scss'],
})
export class ControlCloserangeComponent {
  ControlRangeUrlType = {
    getKilnControlParameterRangeMasterData:
      environment.baseUrl + 'getKilnControlParameterRangeMasterData',
    // 'addLog':environment.baseUrl+'addLog'
    updateKilnControlParameterMasterData:
      environment.baseUrl + 'updateKilnControlParameterMasterData',
    // 'getFilterParameters': environment.baseUrl + 'getFilterParameters'
  };
  EquipmentUrl = {
    "addLog":`${environment.baseUrlApi}addLog`,
  };

  showNoData: boolean = false;
  sidebarExpanded = true;
  flags = {
    showLoader: false,
  };

  @ViewChild('paginator') paginator!: MatPaginator;
  payload = {
    Plant_Code: 'null',

    Mill: 'null',

    Grade: 'null',

    Model_No: 0,

    startDate: null,

    endDate: null,

    tagId: '',
  };

  equipmentDataSource: any = [];
  filterDataSource!: { Plant_Code: any; Mill: any; Grade: any; dateTime: any };
  dataSource: any;
  displayedColumn!: string[];
  keysList!: string[];
  parameterDropDownDatas: any;
  parameterDropDownData: any;
  newDate: any;
  min: any;
  max: any;
  sortedData: any;
  selectedOption: string = 'All';
  urlLink: any;
  iotData: any;
  noCloseLoopData: boolean = false;
  noRecordfound: boolean = true;
  jsonKiln: any;
  dataNotFound: boolean = false;
  tableHeader:string[]=['Sr No','Plant Name','Generic Description','Step Size Min','Step Size Max','Operation Min','Operation Max','Failure Min','Failure Max','Action']
  private cancelRequest$:Subject<void>=new Subject<void>();
  private routeChangeSubscription:Subscription=new Subscription

  constructor(
    private cementMillModel: CementMillModel,
    private alert: AlertService,
    private http: HttpClient,
    private toaster: ToasterService,
    private _route:Router
  ) {}

  ngOnInit(): void {
    this.urlLink = window.location.href;
    // this.jsonKiln=JSON.parse(localStorage.getItem("filtersState") || '{}')
    // if(Object.keys(this.jsonKiln).length!==0){
    //   this.showIOTData()
    //   // this.addLog();
    // this.noCloseLoopData=true
    // }else{
    //   this.noCloseLoopData=false
    // }
    this.noCloseLoopData = false;
    this.routeChangeSubscription=this._route.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.cancelRequest$.next();
      }
    })
  }
  showSuccessUpdateMessage(updateMsg:any){
    this.toaster.addUpdateSuccessToast(updateMsg)
  }
  showErrorMessage() {
    this.toaster.addErrorToast('Something Went Wrong, Please Try Again');
  }

  showIOTData() {
    let payload = {
      Plant_Code: this.payload.Plant_Code,
      Kiln: this.payload.Mill,
    };
    this.cementMillModel
      .postCall(
        this.ControlRangeUrlType.getKilnControlParameterRangeMasterData,
        payload,
        this.cancelRequest$
      )
      .subscribe(
        (result: any) => {
          if (result.error === false) {
            this.noRecordfound = false;
            this.iotData = result.result.map((item: any) => ({
              ...item,
              editMode: false,
              valid: false,
            }));
          } else {
            this.dataNotFound = true;
            this.noRecordfound = true;
            this.noCloseLoopData = false;
            this.iotData = [];
          }
        },
        (error: any) => {
          console.log(error);
          this.noRecordfound = true;
          this.noCloseLoopData = false;
          this.iotData = [];
        }
      );
  }

  onChangeFilter(event: any) {
    // alert(event.dateRange);
    // console.log(event.dateRange);

    this.flags.showLoader = true;
    this.payload = {
      Plant_Code: event.Plant_Code,
      Mill: event.Mill,
      Grade: event.Grade,
      Model_No: 0,
      startDate: event.dateRange[0] ? event.dateRange[0] : moment().toDate,
      endDate: event.dateRange[1] ? event.dateRange[1] : moment().toDate,
      tagId: '',
    };
    // console.log(event);

    // console.log(this.payload);
    localStorage.setItem('filtersState', JSON.stringify(event));

    this.addLog(this.payload)
    this.showIOTData();
    this.noCloseLoopData = true;
    // this.getParameter()
  }
  saveChanges(item: any) {
    const payload = { ...item };
    delete payload.editMode;
    delete payload.valid;
    delete payload.errorStepMinMessage
    delete payload.errorStepMaxMessage
    delete payload.errorOpMinMessage
    delete payload.errorOpMaxMessage
    delete payload.errorFminMessage
    delete payload.errorFmaxMessage
     

    let editPayload = [{
      Plant_Code: payload.Plant_SAP_Code,
      Kiln: payload.Kiln_No,
      tag_id: payload.IoT_Tag_Id,
      step_min: payload.Step_Size_Min,
      step_max: payload.Step_Size_Max,
      op_min: payload.Operating_Min,
      op_max: payload.Operating_Max,
      f_min: payload.Failure_Min,
      f_max: payload.Failure_Max,
    }];
    this.cementMillModel
      .postCall(
        this.ControlRangeUrlType.updateKilnControlParameterMasterData,
        editPayload,
        this.cancelRequest$
      )
      .subscribe((result:any) => {
        console.log(result);
        
        this.showSuccessUpdateMessage(result.result[0].result)
        this.showIOTData()
      },
    (error:any)=>{
      this.showErrorMessage()
    });

    // Now you can send the payload to the API
    // console.log('Sending payload to API:', payload);

    item.editMode = false;
  }

  validateMinValue(item: any) {
    item.Step_Size_Min = Number(item.Step_Size_Min);

    if (
      item.Step_Size_Min >= item.Step_Size_Max 
    ) {
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Step_Size_Min should be less than Step_Size_Max and greater than or equal to Step_Size_Min_Allow'
      );
      item.errorStepMinMessage=`Step Size Min should be < ${item.Step_Size_Max}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Step_Size_Min < item.Step_Size_Min_Allow
    ) {
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Step_Size_Min should be less than Step_Size_Max and greater than or equal to Step_Size_Min_Allow'
      );
      item.errorStepMinMessage=`Step Size Min should be >= ${item.Step_Size_Min_Allow}`
      item.valid = false;
      return item.valid;
    }
    item.errorStepMinMessage=''
    item.valid = true;
    return item.valid;
  }

  validateMaxValue(item: any) {
    item.Step_Size_Max = Number(item.Step_Size_Max);

    if (
      item.Step_Size_Max > item.Step_Size_Max_Allow
    ) {
      console.log(
        'Step_Size_Max should be less than or equal to Step_Size_Max_Allow and greater than Step_Size_Min'
      );
      item.errorStepMaxMessage=`Step Size Max should be <= ${item.Step_Size_Max_Allow}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Step_Size_Max <= item.Step_Size_Min
    ) {
      console.log(
        'Step_Size_Max should be less than or equal to Step_Size_Max_Allow and greater than Step_Size_Min'
      );
      item.errorStepMaxMessage=`Step Size Max should be > ${item.Step_Size_Min}`
      item.valid = false;
      return item.valid;
    }
    item.errorStepMaxMessage=''
    item.valid = true;
    return item.valid;
  }

  validateOptMinValue(item: any) {
    item.Operating_Min = Number(item.Operating_Min);

    if (
      item.Operating_Min >= item.Operating_Max
    ) {
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Operating_Min should be less than Operating_Max and greater than or equal to Operating_Min_Allow'
      );
      item.errorOpMinMessage=`Operating Min should be < ${item.Operating_Max}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Operating_Min < item.Operating_Min_Allow
    ) {
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Operating_Min should be less than Operating_Max and greater than or equal to Operating_Min_Allow'
      );
      item.errorOpMinMessage=`Operating Min should be >= ${item.Operating_Min_Allow}`
      item.valid = false;
      return item.valid;
    }
    item.errorOpMinMessage=''
    item.valid = true;
    return item.valid;
  }

  validateOptMaxValue(item: any) {
    item.Operating_Max = Number(item.Operating_Max);

    if (
      item.Operating_Max > item.Operating_Max_Allow
    ) {
      console.log(
        'Operating_Max should be less than or equal to Operating_Max_Allow and greater than Operating_Min'
      );
      item.errorOpMaxMessage=`Operating Max should be <= ${item.Operating_Max_Allow}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Operating_Max <= item.Operating_Min
    ) {
      console.log(
        'Operating_Max should be less than or equal to Operating_Max_Allow and greater than Operating_Min'
      );
      item.errorOpMaxMessage=`Operating Max should be > ${item.Operating_Min}`
      item.valid = false;
      return item.valid;
    }
    item.errorOpMaxMessage=''
    item.valid = true;
    return item.valid;
  }

  validateFailMinValue(item: any) {
    item.Failure_Min = Number(item.Failure_Min);

    if (
      item.Failure_Min >= item.Failure_Max
    ) {
      console.log("hi");
      
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Failure_Min should be less than Failure_Max and greater than or equal to Failure_Min_Allow'
      );
      item.errorFminMessage=`Failure Min should be <  ${item.Failure_Max}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Failure_Min < item.Failure_Min_Allow
    ) {
      console.log("hi 2");
      
      // Display an error message or handle the validation error accordingly for Step_Size_Min
      console.log(
        'Failure_Min should be less than Failure_Max and greater than or equal to Failure_Min_Allow'
      );
      item.errorFminMessage=`Failure Min should be >=  ${item.Failure_Min_Allow}`
      item.valid = false;
      return item.valid;
    }
    item.errorFminMessage=''
    item.valid = true;
    return item.valid;
  }

  validateFailMaxValue(item: any) {
    item.Failure_Max = Number(item.Failure_Max);

    if (
      item.Failure_Max > item.Failure_Max_Allow
    ) {
      console.log(
        'Failure_Max should be less than or equal to Failure_Max_Allow and greater than Failure_Min'
      );
      item.errorFmaxMessage=`Failure Max should be <= to ${item.Failure_Max_Allow}`
      item.valid = false;
      return item.valid;
    }
    if (
      item.Failure_Max <= item.Failure_Min
    ) {
      console.log(
        'Failure_Max should be less than or equal to Failure_Max_Allow and greater than Failure_Min'
      );
      item.errorFmaxMessage=`Failure Max should be > to ${item.Failure_Min}`
      item.valid = false;
      return item.valid;
    }
    item.errorFmaxMessage=''
    item.valid = true;
    return item.valid;
  }

  toggleEditMode(item: any) {
    item.editMode = !item.editMode;
  }

  cancelEdit(item: any) {
    item.editMode = false;
    item.errorStepMinMessage=''
    item.errorStepMaxMessage=''
    item.errorOpMinMessage=''
    item.errorOpMaxMessage=''
    item.errorFminMessage=''
    item.errorFmaxMessage=''
    this.showIOTData();
    // this.iotData=this.iotData
  }

  addLog(data: any) {
    let option = {
      Plant: data.Plant_Code,
      Mill: data.Mill,
    };
    let email = localStorage.getItem('userEmail');
    let ip = localStorage.getItem('Ip Address');
    let plantName = localStorage.getItem('kilnPlant');
    let payload = {
      userId: email,
      ip: ip,
      module: 'opt',
      plant: plantName,
      url: this.urlLink,
      options: JSON.stringify(option),
      plant_or_section: 'Kiln',
    };

    // console.log(payload)

    this.cementMillModel.postCall(this.EquipmentUrl.addLog, payload,this.cancelRequest$).subscribe({
      next: (res: any) => {
        // console.log(res);
      },
    });
  }

  ngOnDestroy(){
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if(this.routeChangeSubscription){
      this.routeChangeSubscription.unsubscribe();
    }
  }
}
