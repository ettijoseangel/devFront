import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-solicitudes',
  templateUrl: './ver-solicitudes.component.html',
  styleUrls: ['./ver-solicitudes.component.css']
})
export class VerSolicitudesComponent implements OnInit {

  constructor(private router: Router){}

  solicitudes: any[] = [
    { NUE: '123', FECHA: '2023-01-01' },
    { NUE: '456', FECHA: '2023-02-01' },
    { NUE: '789', FECHA: '2023-03-01' },
  ];

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      responsive: true,
      destroy: true,
      // dom: 'Bfrtip',
      // buttons: [
      //   'copy', 'csv', 'print'
      // ],
    };
    this.inicializarDataTable();
  }

  private inicializarDataTable(): void {
    $(document).ready(() => {
      $('#datatableSolicitudes').DataTable(this.dtOptions);
    });
  }

  filtrarPorFechas(): void {
    // Implementa la lógica para filtrar por fechas
    // Puedes acceder a las fechas seleccionadas utilizando las variables correspondientes
  }

  goToDashboardAdministrador() {
    this.router.navigate(['/dashboard_administrador']);
  }

}
