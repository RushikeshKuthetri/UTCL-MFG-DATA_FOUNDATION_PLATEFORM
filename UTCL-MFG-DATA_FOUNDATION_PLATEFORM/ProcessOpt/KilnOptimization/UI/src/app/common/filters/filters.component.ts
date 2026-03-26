import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filtersModel } from './filtersModel.model';
import { environment } from 'src/environments/environment';
import { SocketService } from '../../services/socket.service';
import { ToasterService } from '../../services/toaster.service';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';
import { local } from 'd3';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  filtersUrlType = {
    getDropDownFilter: environment.baseUrl + 'getDropDownFilter',
    getBlaineRangeList: environment.baseUrl + 'getBlaineRangeList',
    updateBlaineRangeList: environment.baseUrl + 'updateBlaineRangeList',
    getLatestFilteredData: environment.baseUrl + 'getLatestFilteredData',
  };

  @Input() filtersData: any;
  @Input() type: any;
  @Output() filterData = new EventEmitter<any>();
  @Input() filtersDate: any;
  @Input() showRange: any = false;
  dropDownData!: {
    plantData: { value: string; viewValue: string }[];
    millsData: { value: string; viewValue: string }[];
  };
  payload!: {
    Plant_Code: any;
    Mill: any;
    Grade: any;
    Model_No: number;
    dateTime: any;
  };
  dropdownData: any;
  plantData: any;
  // dropDownData: any;
  allDropDownData: any;
  millsData!: { value: any; viewValue: any }[];
  gradeData: any;
  rangeData!: any;
  selectedBlaineRange: any;
  showBlaineRange: boolean = false;
  filterDate: any;
  activeRoute: any;
  displayName: any;
  dataSource: any;
  flags: any;
  pointData: any;
  current:any=moment()
  midnight=moment().startOf('day')
  min:any = this.midnight.toDate();
  // min = this.current.format('MM/DD/YYYY, h:mm A');
  max: any = this.current.toDate()
  isFill!:boolean
  count:any="0"
  loginDate:any
  newDate:any
  loginDateRange:any
  kilndropdown:any
  kilnPlantName:any
  // min: any = moment().subtract(0, 'day').toDate();

  constructor(
    private filtersModel: filtersModel,
    private socketService: SocketService,
    private toaster: ToasterService,
    private activeroute: ActivatedRoute,
    private alert: AlertService,
    private router:Router
  ) {}

  ngOnInit() {
    // console.log(this.payload);

    // if(homeUrl.includes("/home")){
    //     localStorage.removeItem("dropDownData");      
    // }
    window.addEventListener('beforeunload',()=>{
      console.log("refresh");
      localStorage.removeItem("dropDownData");
      this.getDropDownData()
    })
    
    this.getLatestData();
    // console.log(moment(this.max).format("YYYY-MM-DD HH:mm"));
    this.loginDate=JSON.parse(localStorage.getItem("loginDate") || '{}')
    // console.log(moment(this.loginDate).format("YYYY-MM-DD HH:mm"));

    // console.log(this.newDate);
    // console.log(this.pointData);
    // if(this.pointData){
    //   console.log("in pontdata");

    //   this.filtersData.Plant_Code=this.pointData.Plant_Code
    //   this.filtersData.Mill=this.pointData.Mill,
    //   this.filtersData.dateTime=this.pointData.date
    //   console.log(this.filtersData);
    // }

    // console.log(this.filtersData);
    this.payload = {
      Plant_Code: 'null',
      Mill: 'null',
      Grade: 'null',
      Model_No: 0,
      dateTime: null,
    };
    this.filtersData = {
      Plant_Code: 'null',
      Mill: 'null',
      Grade: 'null',
      Model_No: 0,
      dateTime: moment(this.loginDate).format("YYYY-MM-DD"),
      dateRange:[this.min, this.loginDate]
    };
    // console.log(this.filtersData);
    
    
    // this.filtersData.dateRange=[this.min,this.max]
    // console.log("daterange",this.filtersData.dateRange);
    
    this.filterDate = this.filtersDate?.toString();

    this.kilndropdown=JSON.parse(localStorage.getItem("dropDownData") || '[]')

    if(this.kilndropdown.length===0){
      console.log("if dropdown")
      this.getDropDownData()
    }
    // this.getRangesData();
    // this.getBlaineRangeList();
    // let filtersState = localStorage.getItem('filtersState');
    // if(filtersState){
    //   this.filtersData=JSON.parse(filtersState)
    // }

    

    const check=sessionStorage.getItem('submitCount')
    // console.log(typeof check);
    

    if(check){
      // console.log("inside filter if");
      
      sessionStorage.removeItem('submitCount')
    }

    // this.router.events
    // .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    // .subscribe(event => {
    //   if (
    //     event.id === 1 &&
    //     event.url === event.urlAfterRedirects
    //   ) {
    //       // Your code here for when the page is refreshd
    //       console.log("refresh");
          
    //   }
    // })
  }

  public getRangesData() {
    this.rangeData = this.filtersModel.getRangesData();
  }

  // ngAfterViewInit(){
  //   this.pointData=this.alert.getData()
  //   if(this.filtersData){
  //     console.log("hi");
  //     this.filtersData.dateRange = [
  //       this.filtersData.startDate,
  //       this.filtersData.endDate,
  //     ];

  //     }
  //   }

  //     console.log("this is filterdata",this.filtersData);

  //     this.filtersData.dateRange=[this.filtersData.startDate,this.filtersData.endDate];
  //   }
  // }
  ngOnChanges() {
    // console.log("ng on chnages",this.filtersData);

    if (this.filtersData) {
      this.filtersData.dateRange = [
        this.filtersData.startDate,
        this.filtersData.endDate,
      ];
    }

    // console.log(this.pointData);
    // if(this.payload){
    //   this.filtersData.Plant_Code=this.payload.Plant_Code,
    //   this.filtersData.Mill=this.payload.Mill,
    //   this.filtersData.dateTime=this.payload.dateTime
    //   console.log("this is on changes",this.filtersData);

    // }

    // this.payload.Mill=this.pointData?.Mill
    // this.payload.dateTime=this.pointData?.date
    // console.log(this.payload);
  }

  ngAfterViewInit(){
    console.log("apiiii");
    
    this.kilndropdown=JSON.parse(localStorage.getItem("dropDownData") || '[]')

    if(this.kilndropdown.length!==0){
      this.getDropDownData()
    }
  }

  showSuccessMessage() {
    this.toaster.addSuccessToast();
  }

  public getLatestData() {
    // console.log(this.payload);
    // this.payload.Plant_Code=this.payload.Plant_Code.value;
    // console.log("first api")
    if (this.payload) {
      let payload = {
        Plant_Code: this.payload.Plant_Code,
        Mill: this.payload.Mill,
        dateTime: this.payload.dateTime,
      };
      // console.log(this.payload);
      
      this.filtersModel
        .postCall(this.filtersUrlType.getLatestFilteredData, payload)
        .subscribe(
          (result: any) => {
            // console.log(result);
            this.dataSource = this.filtersModel.parseLatestFilterData(result);
            // console.log(this.dataSource);

            // this.getRecommendationPopupData();
            this.payload.dateTime = result.result.date_time;
            this.flags.showLoader = false;
          },
          (error: any) => {
            this.showErrorMessage();
          }
        );
    }
  }

  showErrorMessage() {
    this.toaster.addErrorToast('Something Went Wrong, Please Try Again');
  }

  public updateBlaineRange() {
    // console.log(this.selectedBlaineRange);

    let payload = {
      Plant_Code: this.filtersData.Plant_Code,
      Mill: this.filtersData.Mill,
      Grade: this.filtersData.Grade,
      Min: this.selectedBlaineRange.BLAIN_MIN,
      Max: this.selectedBlaineRange.BLAIN_MAX,
      Active: true,
    };
    this.filtersModel
      .postCall(this.filtersUrlType.updateBlaineRangeList, payload)
      .subscribe(
        (result: any) => {
          // console.log(result);
          this.getBlaineRangeList();
          this.showSuccessMessage();
        },
        (error: any) => {
          this.showErrorMessage();
        }
      );
  }

  public getBlaineRangeList() {
    this.activeroute.url.subscribe((event: any) => {
      this.activeRoute = event[0].path;
    });
    let payload = {
      Plant_Code: this.filtersData.Plant_Code,
      Mill: this.filtersData.Mill,
      Grade: this.filtersData.Grade,
    };

    this.filtersModel
      .postCall(this.filtersUrlType.getBlaineRangeList, this.filtersData)
      .subscribe(
        (result: any) => {
          // console.log(result);
          if (result && result.status == 'Success') {
            this.rangeData = result.result;
            if (this.activeRoute == 'home') {
              this.showRange = true;
            } else {
              this.showRange = false;
            }
          } else {
            this.rangeData = [];
            this.showRange = false;
          }
        },
        (error: any) => {
          // console.log(error);
        }
      );
  }

  public getDropDownData() {
    let payload = {};

    let logdate =JSON.parse(localStorage.getItem('loginDate') || '{}') ;


    // console.log(moment(logdate).format("YYYY-MM-DD HH:mm"));
    
    // console.log(this.newDate);

    this.kilndropdown=JSON.parse(localStorage.getItem("dropDownData") || '[]')

    if(this.kilndropdown.length===0){
      console.log("if case");
      
      this.filtersModel
      .postCall(this.filtersUrlType.getDropDownFilter, payload)
      .subscribe(
        (result: any) => {
          if (result && result.status == 'Success') {
            this.allDropDownData = result.result;
            // if(this.allPlantsData){
              localStorage.setItem("dropDownData",JSON.stringify(this.allDropDownData))
            var modifiedFiltersData = this.filtersModel.getPlantData(
              this.allDropDownData
            );

            let filterState = JSON.parse(
              localStorage.getItem('filtersState') || '{}'
            );
            let loginDataRange=JSON.parse(localStorage.getItem('loginDataRange') || '{}')
            // let clickdateRange=JSON.parse(localStorage.getItem("filterdateRange") || '{}') 
            // console.log(loginDataRange);
            

            // console.log(filterState, 'okmfomborgbmogibmo');

            this.plantData = modifiedFiltersData.plantData;
            //  this.loginDate=filterState.dateTime 
            // loginDataRange=filterState.dateRange

            // console.log(this.plantData);

            if (filterState.Plant_Code) {

              // console.log("if");
              
              this.filtersData.Plant_Code = filterState.Plant_Code;

              this.getMillsBasesPlant();

              if(filterState.dateRange){
                this.filtersData = {
                  Plant_Code: filterState.Plant_Code,
                  Mill: filterState.Mill,
                  Grade: 'null',
                  Model_No: 0,
                  dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
                  dateRange:  Object.keys(loginDataRange).length? [moment(loginDataRange[0]).toDate(),moment(loginDataRange[1]).toDate()]:[moment(filterState.dateRange[0]).toDate(),moment(filterState.dateRange[1]).toDate()]
                };
              }else{
                this.filtersData = {
                  Plant_Code: filterState.Plant_Code,
                  Mill: filterState.Mill,
                  Grade: 'null',
                  Model_No: 0,
                  dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
                  // dateRange:[moment(filterState.dateRange[0]).toDate(),moment(filterState.dateRange[1]).toDate()]
                };
              }
              

              // console.log(moment(this.loginDate).format("YYYY-MM-DD HH:mm"));
              
              
              // console.log(this.filtersData);
              
              this.onSubmit();
            } else {
              // console.log(moment(this.max).format("YYYY-MM-DD HH:mm"));
              
              this.filtersData = {
                Plant_Code: 'null',

                Mill: 'null',

                Grade: 'null',

                Model_No: 0,

                dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
                dateRange:[this.min, new Date(this.loginDate)]
              };
              // console.log(this.filtersData);
              // console.log(new Date(this.loginDate));
              
              
            }
            this.plantData = modifiedFiltersData.plantData;
            // console.log(this.plantData);
            localStorage.setItem('plants', JSON.stringify(this.plantData));
            // }
            // this.millsData=modifiedFiltersData.millsData;
            // this.gradeData=modifiedFiltersData.gradeData;
          } else {
          }

          // this.toaster.addSuccessToast();
        },
        (error: any) => {
          // this.toaster.addErrorToast('Something Went Wrong, Please Try Again');
        }
      );
    }else{
      console.log("else case");
      
      var modifiedFiltersData = this.filtersModel.getPlantData(
        this.kilndropdown
      );

      let filterState = JSON.parse(
        localStorage.getItem('filtersState') || '{}'
      );
      let loginDataRange=JSON.parse(localStorage.getItem('loginDataRange') || '{}')
      // let clickdateRange=JSON.parse(localStorage.getItem("filterdateRange") || '{}') 
      // console.log(loginDataRange);
      

      // console.log(filterState, 'okmfomborgbmogibmo');

      this.plantData = modifiedFiltersData.plantData;
      //  this.loginDate=filterState.dateTime 
      // loginDataRange=filterState.dateRange

      // console.log(this.plantData);

      if (filterState.Plant_Code) {

        // console.log("if");
        
        this.filtersData.Plant_Code = filterState.Plant_Code;

        this.getMillsBasesPlant();

        if(filterState.dateRange){
          this.filtersData = {
            Plant_Code: filterState.Plant_Code,
            Mill: filterState.Mill,
            Grade: 'null',
            Model_No: 0,
            dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
            dateRange:  Object.keys(loginDataRange).length? [moment(loginDataRange[0]).toDate(),moment(loginDataRange[1]).toDate()]:[moment(filterState.dateRange[0]).toDate(),moment(filterState.dateRange[1]).toDate()]
          };
        }else{
          this.filtersData = {
            Plant_Code: filterState.Plant_Code,
            Mill: filterState.Mill,
            Grade: 'null',
            Model_No: 0,
            dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
            // dateRange:[moment(filterState.dateRange[0]).toDate(),moment(filterState.dateRange[1]).toDate()]
          };
        }
        

        // console.log(moment(this.loginDate).format("YYYY-MM-DD HH:mm"));
        
        
        // console.log(this.filtersData);
        
        this.onSubmit();
      } else {
        // console.log(moment(this.max).format("YYYY-MM-DD HH:mm"));
        
        this.filtersData = {
          Plant_Code: 'null',

          Mill: 'null',

          Grade: 'null',

          Model_No: 0,

          dateTime: moment(this.loginDate).format("YYYY-MM-DD HH:mm"),
          dateRange:[this.min, new Date(this.loginDate)]
        };
        // console.log(this.filtersData);
        // console.log(new Date(this.loginDate));
        
        
      }
      this.plantData = modifiedFiltersData.plantData;
      // console.log(this.plantData);
      localStorage.setItem('plants', JSON.stringify(this.plantData));
    }
    
    
    
  }

  public getMillsBasesPlant() {
    this.millsData = [];
    this.gradeData = [];
    this.filtersData.Mill = null;
    this.plantData.forEach((item: any) => {
      if (item.value == this.filtersData.Plant_Code) {
        this.displayName = item.display;
      }
    });

    

    // this.filtersData.Grade=null;
    //   this.filtersData = {
    //     Mill: 'null',
    //     Grade: 'null'
    // }
    this.millsData = this.filtersModel.getMillsBasesPlant(
      this.filtersData.Plant_Code,
      this.allDropDownData ? this.allDropDownData : this.kilndropdown
    );
    // this.gradeData = this.filtersModel.getGradeBasesPlantMills(this.filtersData.Plant_Code, this.filtersData.Mill, this.allDropDownData)
  }

  public getPlantname(plant_code:any){
    console.log("hi",plant_code);
    this.plantData.forEach((item:any)=>{
      if(item.value===plant_code){
        console.log(item.viewValue,"dldhfldhsldsjvlshv");
        this.kilnPlantName=item.viewValue
        localStorage.setItem("kilnPlant",this.kilnPlantName)
        
      }
    })
    
  }

  public getGradeBasesPlantMills() {
    this.gradeData = [];
    this.gradeData = this.filtersModel.getGradeBasesPlantMills(
      this.filtersData.Plant_Code,
      this.filtersData.Mill,
      this.allDropDownData
    );
  }

  onSelectDatetime(value: any) {
    // console.log(value,"*^*^*^^");
    let newdate=moment(value).format('YYYY-MM-DD')
    
    this.filtersData.dateTime = newdate;
    // this.filtersData.dateRange = [moment(newdate).toDate(), this.max];
  }

  onSelectDateRange(value: any) {
    console.log("select range",value);
    
    // let filterState = JSON.parse(
    //   localStorage.getItem('filterState') || '{}'
    // );
    // if(filterState){
    //   filterState.dateRange=value


    // }
    this.loginDateRange=value
    // console.log(this.loginDateRange);
    
    localStorage.setItem("loginDataRange",JSON.stringify(this.loginDateRange))
    this.filtersData.dateRange = value
  }
  onSelectDatetimes(value:any){
    // console.log(value);
    this.newDate=moment(value).format("YYYY-MM-DD HH:mm")
    // console.log(this.newDate);
    this.loginDate=this.newDate
    // console.log(this.loginDate);
    localStorage.setItem('loginDate',JSON.stringify(new Date(this.newDate)))
    // console.log(this.newDate);
    
    localStorage.setItem("loginDataRange",JSON.stringify([new Date(moment(this.newDate).format("YYYY-MM-DD 00:00")),new Date(moment(this.newDate).format("YYYY-MM-DD HH:mm"))]))
    
    this.filtersData.dateTime = this.newDate;
    this.filtersData.dateRange=[moment(this.newDate).format("YYYY-MM-DD 00:00"),moment(this.newDate).format("YYYY-MM-DD 23:59")]
    // console.log(this.filtersData);
    
  }

  public onSubmit() {
    this.filtersData.Model_No = 0;
    this.filtersData.displayName = this.displayName;
    this.filterData.emit(this.filtersData);
    sessionStorage.setItem('submitCount','1')

    // this.filtersData.dateRange=[this.min,this.max]
    // console.log("THis is filter data",this.filtersData);

    // this.getBlaineRangeList()
  }
}

// function ngAfterViewInit() {
//   throw new Error('Function not implemented.');
// }
