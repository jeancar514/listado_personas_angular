import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {
  private personas:BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([
  ]); 
  personas$ = this.personas.asObservable()
  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService, private dataService:DataService){}
  setPersona(personas:Persona[]){
    this.personas.next(personas);
  }
  agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre);
    /* if (this.personas.value === null) {
      this.personas.next([]);
    } */
    this.personas.next([...this.personas.value,persona]);
    this.dataService.guardarPersona(this.personas.value).subscribe();;
    console.log(this.dataService.guardarPersona(this.personas.value));
    console.log(this.personas);
  }
  encontrarPersona(index:number):Persona{
    return this.personas.value[index];
  }
  modificarPersona(index:number, persona:Persona){
    let persona1:Persona = this.personas.value[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index,persona).subscribe()
  }
  eliminarPersona(index:number){
    if(index != null){
      this.personas.value.splice(index,1);
      this.dataService.eliminarPersona(index).subscribe();
      // se vuelve a agregar el arreglo
      this.modificarPersonas();
    }
  }
  modificarPersonas(){
    if (this.personas !== null ) {
      this.dataService.guardarPersona(this.personas.value) 
    }
  };
}
