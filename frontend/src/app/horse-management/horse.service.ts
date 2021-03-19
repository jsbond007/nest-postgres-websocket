import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HorseModel } from './horse.model';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class HorseService {
    httpOptions: any;
    constructor(private http: HttpClient,private socket: Socket) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'multipart/form-data',
            })
        };
    }


    // sendChat(message){
    //     this.socket.emit('chat', message);
    //   }
    
    //   receiveChat(){
    //     return this.socket.fromEvent('chat');
    //   }
    
      getRate(){
        return this.socket.fromEvent('users');
      }


    getAllHorse(): Observable<HorseModel> {
        return this.http.get<HorseModel>(environment.baseURL + 'horses')
            .pipe(map((body) => body));
    }

    getHorseById(id): Observable<HorseModel> {
        return this.http.get<HorseModel>(environment.baseURL + 'horses/'+ id)
            .pipe(map((body) => body));
    }

    createHorse(payload): Observable<HorseModel> {
        return this.http.post<HorseModel>(environment.baseURL + 'horses',payload)
            .pipe(map((body) => body));
    }

    updateHorse(payload): Observable<HorseModel> {
        return this.http.put<HorseModel>(environment.baseURL + 'horses/'+payload.id, payload)
            .pipe(map((body) => body));
    }

    deleteHorse(id): Observable<HorseModel> {
        return this.http.delete<HorseModel>(environment.baseURL + 'horses/' + id)
            .pipe(map((body) => body));
    }
}