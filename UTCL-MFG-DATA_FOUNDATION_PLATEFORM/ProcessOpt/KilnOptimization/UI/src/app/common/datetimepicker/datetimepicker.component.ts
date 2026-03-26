import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import { LogLevel } from '@azure/msal-browser';
import * as moment from 'moment';
import 'moment-timezone';


@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
 
})
export class DatetimepickerComponent{
   @Output() dateTime= new EventEmitter<string>();
   @Output() dateTimes= new EventEmitter<string>();
   @Output() dateTimeRange= new EventEmitter<string>();
   @Input() type!:String
   @Input() date_time:any=null;
   @Input() date_times:any
   maxDate=new Date();
   @Input() selectedRange:any;

  dateDisable!:boolean

   
   constructor(){}

   getTime(timestamp:any){
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = new Date();
    return time.setHours(hours, minutes, seconds);
   }

   ngOnChanges(changes: SimpleChanges){
    // console.log(this.selectedRange);
    // console.log(changes,this.date_time);
    if(this.date_time !=undefined && typeof this.date_time == 'string'){
      this.date_time=moment(this.date_time?.slice(0,16)).toDate();
    }
    if(this.date_times !=undefined && typeof this.date_times == 'string'){
      this.date_times=moment(this.date_times?.slice(0,16)).toDate();
    }
    
    
    
    if(this.selectedRange !=undefined){
      // console.log("date time",this.selectedRange);
        // this.selectedRange=[moment(this.selectedRange[0]).toDate(),moment(this.selectedRange[1]).toDate()]
    }
    
    
   }

   ngOnInit(){

    // console.log(this.selectedRange)
    // this.date_time= moment().toDate();
   }

   
   public onselectDateTime(event:any){
    this.dateDisable=true;
    // console.log(event)
    this.dateTime.emit(event.value)
    
   }

   public onselectDateTimeRange(event:any){
    // console.log(event);
    
    this.selectedRange=event
    this.dateTimeRange.emit(event.value)
    
   }

   public onselectDateTimes(event:any){
    this.dateDisable=true;
    this.dateTimes.emit(event.value)
   }
   


}
