import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService{
    token:string|null;
    constructor(private route:Router){}
    login(email:string , password:string){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).
        then(
            response =>{
                auth.currentUser?.getIdToken().then(
                    token =>{
                        this.token = token;
                        this.route.navigate([''])
                    }
                )
            }
        )
        
    }
    getToken(){
        return this.token;
    }
    isAutenticado(){
        return this.token != null;
    }
    logout(){
        getAuth().signOut().then(
            ()=>{
                this.token = null;
                this.route.navigate(['/login']);
            }
        ).catch(error => console.log("error de logout" + error));    
    }       
}
