import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './personas/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo= "Listado-Personas"
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDy6Eog51_U26e5BsRj3kwRiS7mcYflFCE",
      authDomain: "listado-personas-bb3ec.firebaseapp.com"
    })
  }
  isAutenticado(){
    return this.loginService.isAutenticado()
  }
  salir(){
    this.loginService.logout();
  }
 
}