import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject,catchError,of, takeUntil } from "rxjs";

export interface dashboardData{
    Plant_Code:string,
    Mill:string,
    date:string
}
@Injectable({
    providedIn: 'root'
})



export class DashboardModel {

    token:any
    constructor(private http:HttpClient){}

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