import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, of, takeUntil } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class gaugeGraph{

    token:any
    private cancelSubjectRequest$=new Subject<void>();
    constructor(private http:HttpClient){}

    public postCall(apiUrl:any,payload:any):Observable<any>{
        this.token=localStorage.getItem('accessToken')
        // console.log(this.token);
         const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          });
        const httpOptions = {
            headers: headers
        };
        return this.http.post(apiUrl,payload,httpOptions).pipe(
            takeUntil(this.cancelSubjectRequest$),
            catchError(error=>{
                console.log(error,'Error');
                return of(error)
            })
        )
        // return this.http.post(apiUrl,payload)
    }

    public cancelRequest():void{
        return this.cancelSubjectRequest$.next();
    }
}