import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';
import { AuthGuardAdministrador } from './guards/authAdministrador.guard';
import { PanelAgremiadoComponent } from './agremiado/panel-agremiado/panel-agremiado.component';
import { AuthGuardAgremiado } from './guards/authAgremiado.guard';
import { AddAgremiadoComponent } from './administrador/rutas/add-agremiado/add-agremiado.component';
import { VerSolicitudesComponent } from './administrador/rutas/ver-solicitudes/ver-solicitudes.component';
import { VerAgremiadosComponent } from './administrador/rutas/ver-agremiados/ver-agremiados.component';
import { ConvocatoriasComponent } from './opciones/convocatorias/convocatorias.component';
import { FormatosComponent } from './opciones/formatos/formatos.component';
import { ConveniosComponent } from './opciones/convenios/convenios.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'formatos', component: FormatosComponent },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'convenios', component: ConveniosComponent },

  // RUTAS PARA EL USUARIO ADMINISTRADOR
  {path: 'dashboard_administrador', component: DashboardComponent, canActivate: [AuthGuardAdministrador]},
  {path: 'add-agremiado', component: AddAgremiadoComponent, canActivate: [AuthGuardAdministrador]},
  {path: 'ver-agremiados', component: VerAgremiadosComponent, canActivate: [AuthGuardAdministrador]},
  {path: 'ver-solicitudes', component: VerSolicitudesComponent, canActivate: [AuthGuardAdministrador]},


  // RUTAS PARA EL USUARIO AGREMIADO
  {path: 'dashboard_agremiado', component: PanelAgremiadoComponent, canActivate: [AuthGuardAgremiado]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
