import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServicesService } from 'src/app/services.service';
import { environment } from '../../../environments/environment';
import { DashboardModel, dashboardData } from './dashboard.model';
import { AlertService } from 'src/app/services/alert.service';
import { NavigationStart, Route, Router } from '@angular/router';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  modalRef?: BsModalRef;
  modalRef1?: BsModalRef;
  modalRef2?: BsModalRef;
  sidebarExpanded = true;
  data: any = [];
  data2: any = [];
  throughput: any;
  chart: any = {};
  chart1: any = {};
  chart2: any = {};
  datapie: any = [];
  datamonth: any = [];
  dataActualThroughPut: any = [];
  max = new Date();
  payload!: { Plant_Code: any; Mill: any; Grade: any; Model_No: number; dateTime: any };
  recommendationDate: any = new Date();
  cardData: any;
  throughputValues = {
    "minValue": 0,
    "maxValue": 0,
    "avgValue": ''
  }
  minValue!: number
  maxValue!: number
  avgValue!: number
  sum: any
  linechart: boolean = true
  barcharflag: boolean = true
  pieChartflag: boolean = true
  cardflag: boolean = true
  visibleCard: boolean = true
  visibleThroughput: boolean = true;
  visibleWeekCount: boolean = true;
  visibleAvg: boolean = true
  allError: any
  urlLink: any
  private cancelRequest$: Subject<void> = new Subject<void>();
  private routeChangeSubscription: Subscription = new Subscription
  // allApiFail:boolean=false


  flags!: { showLoader: boolean; };
  public normalOptions = {
    group: {
      name: 'task'
    }
  }

  form = new FormGroup({
    datefield: new FormControl(),
  });

  dashboardUrls: any = {
    'getDashboardCardData': environment.baseUrl + 'getDashboardCardData',
    'getKilnThroughputData': environment.baseUrl + 'getKilnThroughputData',
    'getThroughputDataAvg': environment.baseUrl + 'getThroughputDataAvg',
    'getDashboardWeeklyCounts': environment.baseUrl + 'getDashboardWeeklyCounts',
    // 'addLog':environment.baseUrl+'addLog'
  }
  dashboardLink: any = {
    // 'addLog': 'https://i4.utclconnect.com/api/addLog'
    "addLog": `${environment.baseUrlApi}addLog`
    // "addLog":'https://0207pwadeh.execute-api.ap-south-1.amazonaws.com/uat/addLog'
  }
  constructor(
    private _apiData: ServicesService,
    private alert: AlertService,
    private modalService: BsModalService,
    private dashboardModel: DashboardModel,
    private _route: Router,
    private http: HttpClient
  ) { }


  // allErrors(){
  //   this.allApiFail= this.linechart && this.barcharflag && this.pieChartflag && this.cardflag
  // }


  getCardDate() {
    this.visibleCard = true
    // console.log(this.payload);
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "date": moment(this.payload.dateTime).format('YYYY-MM-DD')
      // "date":this.payload.dateTime.split(" ")[0]
    }

    this.dashboardModel.postCall(this.dashboardUrls.getDashboardCardData, payload, this.cancelRequest$).subscribe(
      (result: any) => {
        console.log("Line 109 get cards", result)
        if (!result || !result.result) {  // ← ADD THIS
          this.cardflag = true;
          this.visibleCard = false;
          this.flags.showLoader = false;
          return;
        }
        if (result && result.result && result.result.length > 0) {
          this.cardflag = false
          this.visibleCard = false

          this.cardData['Total_Alerts'] = result.result[3].Total_Alerts;
          this.cardData['Total_Recommendation'] = result.result[0].Total_Recommendation;
          this.cardData['Total_Recommendation_isAcknowledged_NO'] = result.result[1].Total_Recommendation_isAcknowledged_NO;
          this.cardData['Total_Recommendation_isAcknowledged_YES'] = result.result[2].Total_Recommendation_isAcknowledged_YES;
          // console.log(this.cardData);

          // this.cardData['Total_Alerts']=result.result[3].Total_Alerts;
        }


      },
      (error: any) => {
        // console.log(error);
        this.cardflag = true
        // this.visibleCard=false
        this.flags.showLoader = false

      }
    )
  }

  getThroughputData() {
    this.visibleThroughput = true
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "date": moment(this.payload.dateTime).format('YYYY-MM-DD')
    }
    // console.log(payload);

    this.data = []
    this.data2 = []


    this.dashboardModel.postCall(this.dashboardUrls.getKilnThroughputData, payload, this.cancelRequest$).subscribe(
      (result: any) => {
        console.log('line 157 getThroughputData',result)
        if (!result || !result.result) {  // ← ADD THIS
          this.linechart = true;
          this.flags.showLoader = false;
          this.visibleThroughput = false;
          return;
        }
        // console.log('Api data', result);
        if (result.result[0].result === 'No Record Found') {
          // console.log("hi");

          this.linechart = true
          this.flags.showLoader = false;
          this.visibleThroughput = false
        } else {
          this.linechart = false
          this.visibleThroughput = false
          let values = result.result.map((item: any) => {
            return item.Calc_Throughput;

          })
          // console.log(values);
          this.throughputValues.minValue = Math.min(...values)
          this.throughputValues.maxValue = Math.max(...values)
          // console.log(this.minValue, this.maxValue);
          const sum = values.reduce((acc: any, value: any) => acc + value, 0)
          this.throughputValues.avgValue = (sum / values.length).toFixed(2);

          // console.log(sum,averageValue);
          result.result.map((item: any, index: any) => {

            this.throughput = item.Calc_Throughput;
            const inputDate = item.date_time?.split('T')[0];
            const input = item.date_time?.split('T')[1].slice(0, 5);
            // console.log(input);

            // const formatDate=this.formatDate(inputDate)
            this.data.push(this.throughput);
            this.data2.push(`${inputDate} ${input}`);
          })

          this.flags.showLoader = false;


          this.chart = new Chart({
            chart: {
              type: 'line',
              zooming: {
                type: 'x',
              },
              backgroundColor: '#3c4c66',
              // width: 1300,
              height: 520,
              // scrollablePlotArea:{
              //   minWidth:768,
              //   scrollPositionX:-1
              // }
            },

            title: {
              text: 'Daily Throughput Trend',
              style: {
                color: '#FFF'
              }
            },

            credits: {
              enabled: false,
            },
            xAxis: {
              // type: "category",
              categories: this.data2,
              gridLineWidth: 1,
              // lineColor: 'green',
              tickWidth: 1,
              gridLineColor: 'black',
              gridLineDashStyle: 'ShortDash',
              tickInterval: 6, // Set the interval between ticks
              tickPixelInterval: 100,
              labels: {
                rotation: -45,
                style: {
                  color: '#fff'
                }
              },
            },
            yAxis: {
              title: {
                text: 'Throughput (TPH)',
                style: {
                  fontSize: '15px',
                  color: '#FFF'
                },
              },
              labels: {
                style: {
                  color: '#fff'
                }
              },
              gridLineColor: 'black',
              gridLineDashStyle: 'ShortDash',
              tickWidth: 1,
              tickPixelInterval: 100,
            },
            plotOptions: {
              series: {
                // color: 'blue',
                point: {
                  events: {
                    click: (event) => {
                      this.onDataPointClick(event);
                    }
                  }
                },
                label: {
                  connectorAllowed: true,
                },
              },
              line: {
                lineWidth: 3,
              },
            },
            legend: {
              itemStyle: {
                color: '#FFF'
              }
            },
            series: [
              {
                name: 'Actual ThroughPut',
                data: this.data,
                marker: {
                  enabled: true,
                  symbol: 'circle',
                  radius: 5,
                },
                color: '#1f91e6',
              } as any,
            ],
            responsive: {
              rules: [
                {
                  condition: {
                    maxWidth: 768,
                  },
                  chartOptions: {
                    legend: {
                      align: 'center',
                    },
                    // scrollbar: {
                    //   enabled: true,
                    // },
                  },
                },
                // {
                //   condition: {
                //     minWidth: 769,
                //   },
                //   chartOptions: {
                //     scrollbar: {
                //       enabled: false,
                //     },
                //   },
                // },
              ],
            },
          });
        }
      },
      (error: any) => {
        // console.log(error);
        this.linechart = true
        this.flags.showLoader = false
        this.visibleThroughput = false
      }
    )
  }

  onDataPointClick(event: any) {
    // console.log(event.point.category);

    let filtersState = {

      "Plant_Code": this.payload.Plant_Code,

      "Mill": this.payload.Mill,

      "dateTime": event.point.category,
      "dateRange": [moment(this.payload.dateTime).format('YYYY-MM-DD 00:00'), moment(this.payload.dateTime).format('YYYY-MM-DD 23:59')]

    }
    // console.log(filtersState);

    localStorage.setItem("filterdateRange", JSON.stringify(filtersState.dateRange))

    localStorage.setItem('filtersState', JSON.stringify(filtersState));
    localStorage.setItem('State', JSON.stringify(filtersState));

    this._route.navigate(['/home']);



    // console.log(event);

  }

  onClickCard(route: any) {
    // console.log("dashboard",this.payload.dateTime);
    // this.alert.sendDate(this.payload.dateTime)

    this._route.navigate([route])
  }

  getAverageData() {
    this.visibleAvg = true;
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "date": moment(this.payload.dateTime).format('YYYY-MM-DD')
    }
    let monthOrder = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.datamonth = []
    this.dataActualThroughPut = []

    this.dashboardModel.postCall(this.dashboardUrls.getThroughputDataAvg, payload, this.cancelRequest$).subscribe(
      (result: any) => {
        console.log('line 395 getAverageData ',result)
        if (!result || !result.result) {  // ← ADD THIS
          this.barcharflag = true;
          this.flags.showLoader = false;
          this.visibleAvg = false;
          return;
        }
        if (result.result[0].result === 'No Record Found') {
          this.barcharflag = true
          this.flags.showLoader = false;
          this.visibleAvg = false
        } else {
          this.barcharflag = false;
          this.visibleAvg = false
          result.result = result.result.sort((a: any, b: any) => monthOrder.indexOf(a.Month) - monthOrder.indexOf(b.Month));
          // console.log(result.result);

          result.result.map((item: any, index: any) => {
            const month = item.Month;
            this.datamonth.push(month);
            this.dataActualThroughPut.push(item.AverageCalcThroughput);
          })
          // this.flags.showLoader=false
          this.getBarChart();
        }
      },
      (error: any) => {
        console.log(error);
        this.barcharflag = true
        this.flags.showLoader = false
        this.visibleAvg = false
      })
  }

  getWeeklyData() {
    this.visibleWeekCount = true
    let payload = {
      "Plant_Code": this.payload.Plant_Code,
      "Mill": this.payload.Mill,
      "date": moment(this.payload.dateTime).format('YYYY-MM-DD')
      // "date":this.payload.dateTime.split(" ")[0]
    }
    // console.log(payload);

    this.datapie = []

    this.dashboardModel.postCall(this.dashboardUrls.getDashboardWeeklyCounts, payload, this.cancelRequest$).subscribe(
      (result: any) => {
        console.log("Line 442  getWeeklyData()",result)
        if (!result || !result.result) {  // ← ADD THIS
          this.pieChartflag = true;
          this.flags.showLoader = false;
          this.visibleWeekCount = false;
          return;
        }
        if (result.result[0].result === 'No Record Found') {
          this.pieChartflag = true;
          this.flags.showLoader = false
          this.visibleWeekCount = false
        } else {
          this.pieChartflag = false
          this.visibleWeekCount = false
          result.result.map((item: any, index: any) => {
            const obj = {
              name: moment(item.StartDate).toDate().toDateString() + '-' + moment(item.EndDate).toDate().toDateString(),
              y: item.AlertCount,
            };
            this.datapie.push(obj);
          })
          // this.flags.showLoader=false
          // console.log(this.datapie);

          this.getPieChart();
        }
        // result.result.map((item:any,index:any)=>{
        //   if(index==0){
        //     item.AlertCount=10
        //   }
        //   if(index==1){
        //     item.AlertCount=20
        //   }
        //   if(index==2){
        //     item.AlertCount=30
        //   }
        //   if(index==3){
        //     item.AlertCount=40
        //   }
        // })


      },
      (error: any) => {
        this.pieChartflag = true
        this.flags.showLoader = false
        this.visibleWeekCount = false
      })
  }

  onChangeFilter(value: any) {
    this.linechart = true;
  this.barcharflag = true;
  this.pieChartflag = true;
  this.cardflag = true;
  this.visibleCard = true;
  this.visibleThroughput = true;
  this.visibleWeekCount = true;
  this.visibleAvg = true;
    this.flags = {
      'showLoader': true
    }
    // console.log("dashboard value",value);





    this.payload = value;
    let current = moment()
    let midnight = moment().startOf('day')
    let min = midnight.toDate();
    // min = this.current.format('MM/DD/YYYY, h:mm A');
    let max = current.toDate()
    // console.log("****", moment(this.payload.dateTime).format('YYYY-MM-DD HH:mm'), moment(max).format('YYYY-MM-DD HH:mm'));

    let filtersState = {

      "Plant_Code": this.payload.Plant_Code,

      "Mill": this.payload.Mill,

      "dateTime": this.payload.dateTime,
      // "dateRange":['2023-10-10 00:00', '2023-10-10 23:59']
      "dateRange": [moment(this.payload.dateTime).format('YYYY-MM-DD 00:00'), moment(this.payload.dateTime).format('YYYY-MM-DD 23:59')]

    }
    // console.log("kkkkkkkk",filtersState);

    localStorage.setItem('filtersState', JSON.stringify(filtersState));
    // this.payload.dateTime=moment().format('YYYY-MM-DD');

    // console.log("Hello", this.payload);
    // if(this.payload.dateTime){
    //   this.payload.dateTime=this.payload.dateTime.split(" ")[0]
    // }else{
    //   this.payload.dateTime=moment().format('YYYY-MM-DD');
    // }
    // console.log(this.payload);


    this.getCardDate();
    this.addLog(this.payload)
    this.getThroughputData();
    this.getAverageData();
    this.getWeeklyData();
  }
  addLog(data: any) {

    let option = {
      "Plant": data.Plant_Code,
      "Mill": data.Mill
    }
    let email = localStorage.getItem("userEmail")
    let ip = localStorage.getItem("Ip Address")
    let plantName = localStorage.getItem("kilnPlant")
    let payload = {
      "userId": email,
      "ip": ip,
      "module": "opt",
      "plant": plantName,
      "url": this.urlLink,
      "options": JSON.stringify(option),
      "plant_or_section": "Kiln"
    }

    // console.log(payload)
    // console.log(this.dashboardLink.addLog);



    this.dashboardModel.postCall(this.dashboardLink.addLog, payload, this.cancelRequest$).subscribe({
      next: (res: any) => {
        console.log(res);

      }
    })

  }



  ngOnInit(): void {
     this.cancelRequest$ = new Subject<void>();
    this.flags = {
      'showLoader': false
    }

    this.cardData = {
      'Total_Alerts': 0
    }

    this.linechart = true;
  this.barcharflag = true;
  this.pieChartflag = true;
  this.cardflag = true;
  this.visibleCard = true;
  this.visibleThroughput = true;
  this.visibleWeekCount = true;
  this.visibleAvg = true;

    this.urlLink = window.location.href;
    // console.log(this.payload);
    this.routeChangeSubscription = this._route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.cancelRequest$.next();
      }
    })

  

    // let throughput:any
    // this.toggleLegendVisibility();
    // window.addEventListener('resize', () => {
    //   this.toggleLegendVisibility();
    // });
    // this.createChart();


    this.form.patchValue({
      datefield: this.max,
    });
    // console.log(this.form);
  }



  getPieChart() {

    // console.log(this.datapie);
    // this.datapie=[]


    this.chart1 = new Chart({
      chart: {
        type: 'pie',
        width: 620,
        backgroundColor: '#3c4c66',
      },
      title: {
        text: '',
        style: {
          color: '#FFF'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Alerts',
          type: 'pie',
          data: this.datapie,
        },
      ],
      legend: {
        // enabled:this.isScreenSmall(),
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        itemStyle: {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#FFF'
        },
      },
    });

    // console.log(this.chart);
  }

  formatDate(data: any) {
    const formattedDate = new Date(data).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      timeZone: 'UTC',
      // timeZoneName: 'short'
    });
    return formattedDate;
  }

  getBarChart() {
    // console.log("Bar");
    // console.log("Hello");

    this.chart2 = new Chart({
      chart: {
        type: 'column',
        // width:650,
        backgroundColor: '#3c4c66',
      },
      title: {
        text: '',
        style: {
          color: '#FFF'
        }
      },
      xAxis: {
        categories: this.datamonth,
        labels: {
          style: {
            color: '#FFF'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Throughput Range',
          style: {
            fontSize: '15px',
            color: '#FFF'
          },
        },
        labels: {
          style: {
            color: '#fff'
          }
        },
        gridLineColor: 'black',
        gridLineDashStyle: 'ShortDash',
      },
      series: [
        {
          type: 'column',
          name: 'Actual Throughput',
          data: this.dataActualThroughPut,
          color: '#1f91e6',
        },
      ],
      legend: {
        itemStyle: {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#FFF'
        },
      },
    });
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }
  openModalAlert(template: any) {
    this.modalRef1 = this.modalService.show(template);
  }
  openModalRawData(template: any) {
    this.modalRef2 = this.modalService.show(template);
  }

  ngOnDestroy() {
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if (this.routeChangeSubscription) {
      this.routeChangeSubscription.unsubscribe();
    }
  }
}
