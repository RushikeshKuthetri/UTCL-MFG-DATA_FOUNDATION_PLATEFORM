import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { MatLegacyDialogRef } from '@angular/material/legacy-dialog';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private subject!: any;
  private recommandationSubject! :any;
  subscription!: Subscription;

  constructor() {
    // this.connect()
  }

  public recommendationSocket() {
    this.recommandationSubject = webSocket({
      url:environment.recommendationSocketUrl,
      // url: "wss://i4.utclconnect.com/uat/opt/blaine",
      // url:"ws://172.16.2.240:8080/uat/opt/blaine",
      openObserver: {
        next: () => {
            console.log('connection ok');
        }
      },
      closeObserver: {
        next: () => {
           this.connect();
        }
      }
    });
  }

  public connect() {
    const token =localStorage.getItem('accessToken')
    if(token){
       this.subject= new WebSocket(environment.recommendationSocketUrl, [token]);
    }
  }

  public send(msg: string) {
    if(this.subject.readyState===WebSocket.OPEN){
      this.subject.send(msg);
    } else{
      setTimeout(()=>{
        this.send(msg)
      },1000)
    }
    return this.subject 
  }

  public sendRecommendation(msg: string) {
    // if(this.subject==undefined){
    //   this.connect();
    // }
    this.recommandationSubject?.next(msg);
    return this.recommandationSubject
  }

  public disconnect() {
    if (this.subject && typeof this.subject.close === 'function') {
      this.subject.close();
      this.subject = null;
    }
  }
}
