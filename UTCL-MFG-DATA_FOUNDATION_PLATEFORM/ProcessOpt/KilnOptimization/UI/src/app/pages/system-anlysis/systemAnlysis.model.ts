import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LogLevel } from "@azure/msal-browser";
import * as moment from "moment";
import { Observable, Subject,catchError,of, takeUntil } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class CementMillModel {
    token:any
    constructor(private http:HttpClient){}
    public parseLatestFilterData(result:any){
        // console.log(result);
        if(result.result.result=="No Record Found"){
            // console.log("In If");
            
            var Control_Tags_Data=[];
            var Resultant_Tags_Data= [];
            var filtersData = {
                Plant_Code: 'null',
                Mill: 'null',
                Grade: 'null',
                dateTime: null
            }
            var tag_details=[]
            
        }
        else{
            Control_Tags_Data=result.result.Control_Tags_Data;
            Resultant_Tags_Data= result.result.Resultant_Tags_Data;
            filtersData={
                Plant_Code: result.result.plantCode,
                Mill: result.result.mill,
                Grade:result.result.grade,
                dateTime:result.result.timestamp
            };
            tag_details=result.result.disturbanceRecords;
        }
        
        
        return {Control_Tags_Data:Control_Tags_Data,Resultant_Tags_Data:Resultant_Tags_Data, filtersData:filtersData,timestamp:result.result.timestamp,tag_details:tag_details }
    }

    public parseFilterData(result:any){
        const filtersData={
            Plant_Code:  result.plantCode,
            Mill: result.mill,
            Grade:result.grade,
            dateTime:result.timestamp
        }

        return filtersData
    }

    /** @method which @returns Observable @description used for api call  */
    public postCall(apiUrl:string, payload:any,cancel$:Subject<void>):Observable<any>{
        this.token=localStorage.getItem('accessToken')
        // console.log(this.token);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          });
        const httpOptions = {
            headers: headers
        };
        // return this.http.post(apiUrl,payload)
        return this.http.post(apiUrl,payload,httpOptions).pipe(
            takeUntil(cancel$),
            catchError(error =>{
                console.error('Error',error);
                return of(null)
            })
        )
    }
}

