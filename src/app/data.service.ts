import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Persona } from './persona.model';
import { LoginService } from './personas/login/login.service';

@Injectable()
export class DataService{
    constructor(private httpClient:HttpClient, private loginService: LoginService){
    } 
    cargarPersona():Observable<Persona[]>{
        const token = this.loginService.getToken()
        return this.httpClient.get<Persona[]>('https://listado-personas-bb3ec-default-rtdb.firebaseio.com/datos.json?auth='+ token)
            .pipe(tap((resp) => console.log("Resultado Persona Agregada: " + resp.values)),
            catchError((error) =>{
                return throwError(() => console.log(error))
            }));
    }
    guardarPersona(persona:Persona[]):Observable<Persona[]>{
        const token = this.loginService.getToken()
        return this.httpClient.put<Persona[]>('https://listado-personas-bb3ec-default-rtdb.firebaseio.com/datos.json?auth='+ token, persona)
            .pipe(tap((resp) => console.log("Resultado Persona Agregada: " + resp.values)),
            catchError((error) =>{
                return throwError(() => console.log(error))
            }));
    }
    modificarPersona(index:number,persona:Persona):Observable<Persona>{
        const token = this.loginService.getToken()
        return this.httpClient.put<Persona>('https://listado-personas-bb3ec-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth='+ token, persona)
        .pipe(tap((resp) => console.log("Resultado Persona Agregada: " + resp)),
            catchError((error) =>{
                return throwError(() => console.log(error))
            }));   
    }
    eliminarPersona(index:number):Observable<Persona>{
        const token = this.loginService.getToken()
        return this.httpClient.delete<Persona>('https://listado-personas-bb3ec-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth='+ token)
        .pipe(tap((resp) => console.log("Resultado Persona Agregada: " + resp)),
            catchError((error) =>{
                return throwError(() => console.log(error))
            })); 
    }
};