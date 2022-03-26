import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  personas: Persona[]=[]
  constructor(private personasService: PersonasService,
              private router:Router, private dataService:DataService) {}
  personas$ = this.personasService.personas$;
  ngOnInit(): void {
    this.dataService.cargarPersona().subscribe(
      (personas:Persona[]) => {
        this.personas = personas;
        this.personasService.setPersona(personas);
      }
    );   
  }
  agregar(){
    this.router.navigate(['personas/agregar'])
  }
}
