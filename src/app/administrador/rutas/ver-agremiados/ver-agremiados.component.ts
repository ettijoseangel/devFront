import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminActivitiesService } from 'src/app/services/admin-activities.service';
declare var $: any;

@Component({
  selector: 'app-ver-agremiados',
  templateUrl: './ver-agremiados.component.html',
  styleUrls: ['./ver-agremiados.component.css']
})
export class VerAgremiadosComponent implements OnInit, OnDestroy {

  constructor(
    private adminS: AdminActivitiesService,
    private router: Router
  ) { }

  agremiados: any[] = [];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      responsive: true,
      destroy: true,
      // dom: 'Bfrtip',
      //  buttons: [
      //  'copy', 'csv', 'print', // Agrega los botones necesarios
      // ],
    };
    this.obtenerAgremiados();
  }

  ngOnDestroy(): void {
    if ($.fn.dataTable.isDataTable('#datatableAgremiados')) {
      $('#datatableAgremiados').DataTable().destroy();
    }
  }

  obtenerAgremiados() {
    this.adminS.getAgremiados().subscribe(
      (data: any) => {
        console.log(data);
        this.agremiados = data;
        $('#datatableAgremiados').DataTable().destroy();
        setTimeout(() => {
          $('#datatableAgremiados').DataTable(this.dtOptions);
        }, 0);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  // ir_a_editar_trabajo(id: number) {
  //   this.router.navigateByUrl(`/editar-trabajo/${id}`);
  // }

  // eliminar_trabajo(id: number) {
  //   Swal.fire({
  //     title: '¿Estás seguro?',
  //     text: "Al realizar esta acción, se desactivará el trabajo.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Aceptar',
  //     cancelButtonText: 'Cancelar'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.soliService.desactivar_trabajo(id).subscribe(
  //         (data: any) => {
  //           if (data && data.message === 'Trabajo desactivado correctamente') {
  //             Swal.fire({
  //               icon: 'success',
  //               title: 'Trabajo desactivado correctamente!',
  //             });
  //             this.getTrabajos();
  //           } else {
  //             Swal.fire({
  //               icon: 'error',
  //               title: 'Ocurrió un problema al desactivar el trabajo!',
  //             });
  //           }
  //         },
  //         (error: any) => {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Ocurrió un problema al desactivar el trabajo!',
  //           });
  //         }
  //       );
  //     }
  //   });
  // }

  goToDashboardAdministrador() {
    this.router.navigate(['/dashboard_administrador']);
  }


}
