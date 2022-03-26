import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput:string;
  apellidoInput:string;  
  index:number|null;
 

  constructor(private personaService:PersonasService,
              private router: Router,
              private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.index = (isNaN(id)) ? null :id; 
    console.log(this.index);
    console.log(id);
    if( this.index !== null){
      let persona:Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
 
  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if( this.index !== null){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }


  eliminarPersona(){
    if(this.index !== null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(["personas"]);
  }
}
