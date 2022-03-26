import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component'; 
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LoginComponent } from './personas/login/login.component';
import { LoginService } from './personas/login/login.service';
import { LoginGuard } from './personas/login/login.guard';

@NgModule({
  declarations: [ 
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [LoggingService, PersonasService,DataService,LoginService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

