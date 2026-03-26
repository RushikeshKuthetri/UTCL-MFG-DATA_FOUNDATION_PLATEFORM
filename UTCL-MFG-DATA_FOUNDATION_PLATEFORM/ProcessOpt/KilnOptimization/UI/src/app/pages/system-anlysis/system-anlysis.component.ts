import { Component, TemplateRef, ViewChild, HostListener } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from '../../../environments/environment';
import { CementMillModel } from './systemAnlysis.model';
import { ToasterService } from '../../services/toaster.service';
import { Router,NavigationStart } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { SocketService } from '../../services/socket.service';
import { local } from 'd3';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-system-anlysis',
  templateUrl: './system-anlysis.component.html',
  styleUrls: ['./system-anlysis.component.scss'],
})
export class SystemAnlysisComponent {
  CementUrlType = {
    getLatestFilteredData: environment.baseUrl + 'getLatestFilteredData',
    getRecommedationData: environment.baseUrl + 'getRecommedationData',
    updateActions: environment.baseUrl + 'updateActions',
    getDropDownFilter: environment.baseUrl + 'getDropDownFilter',
    getEquipmentFailureData: environment.baseUrl + 'getEquipmentFailureData',
    // 'addLog':environment.baseUrl+'addLog'
  };
  Cementurl = {
    "addLog":`${environment.baseUrlApi}addLog`
  };
  sidebarExpanded = true;
  modalRef?: BsModalRef;
  showloader: boolean = false;
  dataSource!: {
    Control_Tags_Data: [];
    Resultant_Tags_Data: [];
    filtersData: { Plant_Code: any; Mill: any; Grade: any; dateTime: any };
    timestamp: any;
    tag_details: [];
  };
  no_recommendation: number = 0;
  // no_equipment:number=0
  recommendationDataSource: any;
  equipmentDataSource: any;
  showEditIcon: Boolean = true;
  @ViewChild('recommedationtemplate') recommedationtemplate!: TemplateRef<any>;
  popupInterval!: any;
  dropdownData: any;
  plantData: any;
  filtersData!: {
    Plant_Code: string;
    Mill: string;
    Grade: string;
    dateTime: string;
  };
  recommendationDate: any = new Date();
  equipmentDate: any = new Date();
  payload!: {
    Plant_Code: any;
    Mill: any;
    Grade: any;
    Model_No: number;
    dateTime: any;
  };
  flags!: { showLoader: boolean };
  displayName: any;
  shutMillFlag: boolean = false;
  isCheckBoxAcknowledge: boolean = true;
  clickDate: any;
  setNewDate: any;
  urlLink: any;
  tagDetails: any = [];
  checkToken:boolean=false
  getKilnLatestData:boolean=false
  checkNotification:boolean=false
  private cancelRequest$:Subject<void>=new Subject<void>();
  private routeChangeSubscription:Subscription=new Subscription
  private intervalId: any;
  // count:number=1
  constructor(
    private modalService: BsModalService,
    private cementMillModel: CementMillModel,
    private toaster: ToasterService,
    private router: Router,
    private http: HttpClient,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.urlLink = window.location.href;
    this.checkNotification=false
    this.flags = {
      showLoader: false,
    };
    this.adLogin();
    // this.connectSocket();
    this.payload = {
      Plant_Code: 'null',
      Mill: 'null',
      Grade: 'null',
      Model_No: 0,
      dateTime: null,
    };
    // this.dataSource={Control_Tags_Data:[],Resultant_Tags_Data:[], filtersData:{
    //       Plant_Code: 'null',
    //       Mill: 'null',
    //       Grade:'null',
    //       dateTime:'null'
    //   }
    // }

    // this.popupInterval=setInterval(()=>{
    //   this.getRecommendationPopupData();
    //   this.openModal(this.recommedationtemplate);

    // },60000)
    this.no_recommendation = 0;
    this.routeChangeSubscription=this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.cancelRequest$.next();
      }
    })
    // this.no_equipment=0
  }

  onChangeFilter(value: any) {
    this.payload = value;
    // console.log(this.payload);
    this.no_recommendation = 0;
    // this.no_equipment=0
    this.displayName = value.displayName;
    this.checkNotification=false

    if (this.payload.dateTime && typeof this.payload.dateTime !== 'string') {
      this.payload.dateTime = moment(this.payload.dateTime).format('YYYY-MM-DD HH:mm:00');
    }
    // console.log(this.payload);
    localStorage.setItem('filtersState', JSON.stringify(this.payload));
  
    this.connectSocket();

    this.getLatestData();
    this.addLog(this.payload);
    this.openModal(this.recommedationtemplate);
    this.getRecommendationPopupData();
    this.getEquipmentFailureData();
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    this.sendMessageSocket();
    this.intervalId = setInterval(() => {
      this.sendMessageSocket();
    }, 60000)
    // this.sendRecommendationSocketData(this.recomendationSocketPayload());
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

    this.cementMillModel.postCall(this.Cementurl.addLog, payload,this.cancelRequest$).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }

  public recomendationSocketPayload() {
    var recSocPayload = {
      optType: 'cement',
      Mill: this.payload.Mill,
      Grade: this.payload.Grade,
      Plant_Code: this.payload.Plant_Code,
      Model_No: 0,
    };

    return recSocPayload;
  }

  public sendMessageSocket() {
    let plants = JSON.parse(JSON.stringify(localStorage.getItem('plants')));
    var updatedControlTags: any;
    var counter = 0;
    // console.log(plants);

    // plants=JSON.parse(plants);

    // let SelectedPlant=plants.map((item:any)=>{
    //   if(this.payload.Plant_Code==item.value)
    //   return item.viewValue
    // })

    // SelectedPlant= SelectedPlant.filter((item:any)=>{
    //   if(item !==null && item !==undefined)
    //   return item
    // })

    // console.log(SelectedPlant);

    let graphSocketPayload = {
      action: "kilnOpt",
      Plant_Code: this.payload.Plant_Code,
      Mill: this.payload.Mill,
    };

    var socket = this.socketService.send(JSON.stringify(graphSocketPayload));
    if (socket) {
      socket.addEventListener('message', (event: any) => {
        var eventData = JSON.parse(event.data);
        if (eventData && eventData.LatestData && eventData.LatestData.result) {
          if (eventData.LatestData.result.Shutdown_Flag == 1) {
            this.shutMillFlag = true;
            this.getKilnLatestData=true;
            let result = eventData.LatestData;
            this.payload.dateTime = result.result.date_time;
          } else {
            let result = eventData.LatestData;
            this.getKilnLatestData=true;
            this.dataSource =
              this.cementMillModel.parseLatestFilterData(result);
            // console.log(this.dataSource);
            this.tagDetails = this.dataSource.tag_details;
            if (this.tagDetails[0].Result === 'No Record Found') {
              this.tagDetails = [];
            } else {
              this.tagDetails = this.dataSource.tag_details.sort(
                (val1: any, val2: any) => {
                  const date1 = new Date(val1.Trigger_Time);
                  const date2 = new Date(val2.Trigger_Time);

                  if (date1 > date2) return -1;
                  if (date1 < date2) return 1;

                  return 0;
                }
              );
            }

            // this.getRecommendationPopupData();
            this.payload.dateTime = result.result.date_time;
          }
        }
      });
    }
  }

  onSelectDatetime(value: any) {
    this.filtersData.dateTime = value;
  }

  adLogin() {
    // console.log("login");
    let date = new Date();
    // console.log(date);
    let momdate = moment(date).format('YYYY-MM-DD HH:mm');
    // console.log(new Date(moment(date).format("YYYY-MM-DD 00:00")));
    // console.log(new Date(moment(date).format("YYYY-MM-DD HH:mm")));

    localStorage.setItem('loginDate', JSON.stringify(date));
    localStorage.setItem(
      'loginDataRange',
      JSON.stringify([
        new Date(moment(date).format('YYYY-MM-DD 00:00')),
        new Date(moment(date).format('YYYY-MM-DD HH:mm')),
      ])
    );

    // console.log(momdate);
    this.clickDate = momdate;

    var accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
    // var url = 'https://i4.utclconnect.com/uat/users/adLoginBasic';
    // var url = "https://i4.utclconnect.com/api/users/adLoginBasic";
    var url = `${environment.baseUrlApi}users/adLoginBasic`;
    const httpOptions = {
      headers: headers,
    };
    this.http.post(url, {}, httpOptions).subscribe(
      (result: any) => {
        localStorage.setItem('accessToken', result.data.token);
        localStorage.setItem('user', result.data.UserName);
        localStorage.setItem('userEmail', result.data.UserID);
        this.checkToken=true;

        var index = result.data.Modules.findIndex((item: any) => {
          return item.Module === 'OPT';
        });

        if (index != -1) {
          // this.router.navigate(['/home'])
          localStorage.setItem('hasOptAccess', 'true');
        } else {
          this.router.navigate(['/login']);
          localStorage.setItem('hasOptAccess', 'false');
        }
      },
      (error: any) => {
        this.router.navigate(['/login']);
      }
    );

    this.getIpAddress();
  }

  getIpAddress() {
    this.http.get('https://api.ipify.org/?format=json').subscribe(
      (res: any) => {
        // console.log(res.ip);
        localStorage.setItem('Ip Address', res.ip);
      },
      (error: any) => {
        console.log(error);
        localStorage.setItem('Ip Address', 'Ip not found');
      }
    );
  }

  public getLatestData() {
    let count = sessionStorage.getItem('submitCount');

    let data: any = JSON.parse(localStorage.getItem('State') || '{}');
    let data1 = JSON.parse(localStorage.getItem('filtersState') || '{}');

    this.setNewDate = data.dateTime;

    let payload = {
      Plant_Code: this.payload.Plant_Code,
      Mill: this.payload.Mill,
      dateTime: count
        ? moment.utc(this.payload.dateTime).format('YYYY-MM-DD HH:mm')
        : Object.keys(data).length
        ? data.dateTime
        : '',
    };
    
    this.flags.showLoader=true
    // console.log(this.payload)
    if (Object.keys(data).length) {
      this.setNewDate = data.dateTime;
      data.dateTime = '';
      localStorage.setItem('State', JSON.stringify(data));
    }

    this.cementMillModel
      .postCall(this.CementUrlType.getLatestFilteredData, payload,this.cancelRequest$)
      .subscribe(
        (result: any) => {
          // console.log(result.result.result==='No Record Found');
          if (result.result.result === 'No Record Found') {
            // console.log("hi");
            // console.log(payload);

            this.flags.showLoader = false;
            this.getKilnLatestData=false;
            // this.dataSource={Control_Tags_Data:[],Resultant_Tags_Data:[], filtersData:filtersData,timestamp:result.result.timestamp }
          } else {
            if (result.result.Shutdown_Flag == 1) {
              this.shutMillFlag = true;
              this.flags.showLoader=false
              this.getKilnLatestData=true
              let filtersData = {
                Plant_Code: result.result.plantCode,
                Mill: result.result.mill,
                Grade: result.result.grade,
                dateTime: result.result.timestamp,
              };
              // console.log(filtersData);

              this.dataSource = {
                Control_Tags_Data: [],
                Resultant_Tags_Data: [],
                filtersData: filtersData,
                timestamp: result.result.timestamp,
                tag_details: [],
              };
              // console.log(this.dataSource);
            } else {
              this.shutMillFlag = false;
              this.getKilnLatestData=true
              // console.log(result);
              this.dataSource =
                this.cementMillModel.parseLatestFilterData(result);
              // console.log(this.dataSource);
              this.tagDetails = this.dataSource.tag_details;

              if (this.tagDetails[0].Result === 'No Record Found') {
                // console.log("in if ");

                this.tagDetails = [];
                // console.log(this.tagDetails);
              } else {
                this.tagDetails = this.dataSource.tag_details.sort(
                  (val1: any, val2: any) => {
                    const date1 = new Date(val1.Trigger_Time);
                    const date2 = new Date(val2.Trigger_Time);

                    if (date1 > date2) return -1;
                    if (date1 < date2) return 1;

                    return 0;
                  }
                );
              }
              // console.log(this.tagDetails[0].Result);

              // this.getRecommendationPopupData();
              this.payload.dateTime = result.result.date_time;
              this.flags.showLoader = false;
            }
          }
        },
        (error: any) => {
          this.flags.showLoader=false;
          this.getKilnLatestData=false;
          this.showErrorMessage();
        }
      );
  }

  public bellClick(){
    this.checkNotification=true;
  }
  public closeRecomPop(){
    this.checkNotification=true
    this.no_recommendation=0
  }

  public showTextBox(item: any) {
    // this.showEditIcon= !this.showEditIcon;
    item.showTextBox = !item.showTextBox;
  }

  public checkBoxAck(event: any,data:any) {
    // console.log(event.target.checked,data);
    this.isCheckBoxAcknowledge = event.target.checked;
    data.isAcknowledged=this.isCheckBoxAcknowledge ? "Yes":"No"
  }

  public updateRecommendation() {
    let userEmail = localStorage.getItem('userEmail');

    // console.log(this.recommendationDataSource);
    let payloadArray=[]
    payloadArray=this.recommendationDataSource.map((update_data:any,index:any)=>{
      // console.log(update_data);
      let payload = {
        id: update_data.id,
        dateTime: update_data.timestamp,
        TagId: update_data.tag_id,
        Plant_Code: this.payload.Plant_Code,
        Mill: this.payload.Mill,
        acknowledgeBy: userEmail,
        acknowledgeDateTime: moment().format('YYYY-MM-DD HH:mm'),
        isAcknowledged: update_data.isAcknowledged,
        comments: update_data.userComment,
        isViewed: 'Yes',
        actionTaken: update_data.action_taken,
      };

      // console.log("update data",update_data,"update-payload",payload);
      
      return payload
      
    })

    this.cementMillModel
      .postCall(this.CementUrlType.updateActions, payloadArray,this.cancelRequest$)
      .subscribe(
        (result: any) => {
          this.getRecommendationPopupData();
          this.showSuccessUpdateMessage(result.result.result);
        },
        (error: any) => {
          this.showErrorMessage();
        }
      );

    this.modalRef?.hide();
  }

  public sendRecommendationSocketData(msg: any) {
    this.socketService.sendRecommendation(msg).subscribe(
      (result: any) => {
        if (
          result &&
          result.latestRecommendation &&
          result.latestRecommendation.result.length > 0
        ) {
          this.recommendationDataSource = result.latestRecommendation.result;
          this.no_recommendation = this.recommendationDataSource?.length;
          // this.recommendationDate=moment(result.result[0].timestamp).toISOString();
          if (this.modalService.getModalsCount() === 0) {
            this.openModal(this.recommedationtemplate);
          }

          // this.recommendationDate=moment(result.latestRecommendation.result[0].timestamp).subtract(330,'minutes').toDate().toString();
          this.recommendationDate = moment
            .utc(result.latestRecommendation.result[0].timestamp)
            .format('YYYY-MM-DD HH:mm');
          // console.log(this.recommendationDate);
        }
      },
      (error: any) => {}
    );
  }

  showSuccessMessage() {
    this.toaster.addSuccessToast();
  }
  showSuccessUpdateMessage(updateMsg:any){
    this.toaster.addUpdateSuccessToast(updateMsg)
  }

  showErrorMessage() {
    this.toaster.addErrorToast('Something Went Wrong, Please Try Again');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{
      class: 'recommendation-modal modal-xl'
    });

    // console.log(this.modalService.getModalsCount());
  }

  public connectSocket() {
    this.socketService.disconnect();
    this.socketService.connect();
    this.socketService.recommendationSocket();
  }

  public getRecommendationPopupData() {
    let count = sessionStorage.getItem('submitCount');
    let data: any = JSON.parse(localStorage.getItem('State') || '{}');
    let payload = {
      Plant_Code: this.payload.Plant_Code,
      Mill: this.payload.Mill,
      dateTime: count
        ? moment.utc(this.payload.dateTime).format('YYYY-MM-DD HH:mm')
        : Object.keys(data).length
        ? this.setNewDate
        : '',
    };
    this.cementMillModel
      .postCall(this.CementUrlType.getRecommedationData, payload,this.cancelRequest$)
      .subscribe(
        (result: any) => {
          if (result.result.result != 'No Record Found') {
            this.recommendationDataSource = result.result;
            this.no_recommendation =this.checkNotification? 0: this.recommendationDataSource?.length;
            // this.recommendationDate=moment(result.result[0].timestamp).toISOString();
            this.recommendationDate = moment
              .utc(result.result[0].timestamp)
              .format('ddd YYYY-MM-DD HH:mm');
            // console.log(this.recommendationDate);
          } else {
            this.recommendationDataSource = [];
          }

          this.recommendationDataSource.map((item: any) => {
            // console.log("skks",item,item.comments)
            item.userComment = item.comments;
            item.showTextBox = false;
          });
          // this.recommendationTime=this.recommendationDataSource[0].timestamp.slice()
          // this.dataSource= this.cementMillModel.parseLatestFilterData(result);

          // this.showloader=true;
        },
        (error: any) => {
          this.showErrorMessage();
        }
      );
  }

  public getEquipmentFailureData() {
    let count = sessionStorage.getItem('submitCount');
    let data: any = JSON.parse(localStorage.getItem('State') || '{}');
    // console.log("jnjnjds",data);
    // console.log(count);
    let payload = {
      Plant_Code: this.payload.Plant_Code,
      Mill: this.payload.Mill,
      dateTime: count
        ? moment.utc(this.payload.dateTime).format('YYYY-MM-DD HH:mm')
        : Object.keys(data).length
        ? this.setNewDate
        : '',
    };
    // console.log(payload);

    this.cementMillModel
      .postCall(this.CementUrlType.getEquipmentFailureData, payload,this.cancelRequest$)
      .subscribe(
        (result: any) => {
          // console.log(result);
          if (result.result.result != 'No Record Found') {
            // console.log(result.result);

            this.equipmentDataSource = result.result;
            // this.no_equipment=this.equipmentDataSource?.length;
            this.equipmentDate = moment(
              result.result[0].timestamp
            ).toISOString();
            this.equipmentDate = moment
              .utc(result.result[0].timestamp)
              .format('ddd YYYY-MM-DD HH:mm:ss');
            // console.log(this.equipmentDate);
          } else {
            this.equipmentDataSource = [];
          }

          this.equipmentDataSource.map((item: any) => {
            // console.log("skks",item)
            item.userComment = item.comments;
            item.showTextBox = false;
          });
        },
        (error: any) => {
          this.showErrorMessage();
        }
      );
  }

  ngOnDestroy() {
    this.modalRef?.hide();
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if(this.routeChangeSubscription){
      this.routeChangeSubscription.unsubscribe();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
