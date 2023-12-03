import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//RUTA DEL LOGIN
import { LoginComponent } from './login/login.component';

//IMPORTACION PARA OCUPAR EL NGMODEL EN FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';
import { PanelAgremiadoComponent } from './agremiado/panel-agremiado/panel-agremiado.component';
import { NavbarComponent } from './administrador/navbar/navbar.component';
import { AddAgremiadoComponent } from './administrador/rutas/add-agremiado/add-agremiado.component';
import { VerAgremiadosComponent } from './administrador/rutas/ver-agremiados/ver-agremiados.component';
import { VerSolicitudesComponent } from './administrador/rutas/ver-solicitudes/ver-solicitudes.component';
import { FormatosComponent } from './opciones/formatos/formatos.component';
import { ConvocatoriasComponent } from './opciones/convocatorias/convocatorias.component';
import { ConveniosComponent } from './opciones/convenios/convenios.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PanelAgremiadoComponent,
    NavbarComponent,
    AddAgremiadoComponent,
    VerAgremiadosComponent,
    VerSolicitudesComponent,
    FormatosComponent,
    ConvocatoriasComponent,
    ConveniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
