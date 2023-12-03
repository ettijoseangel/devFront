import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agremiado',
  templateUrl: './add-agremiado.component.html',
  styleUrls: ['./add-agremiado.component.css']
})
export class AddAgremiadoComponent {

  agregarAgremiadoForm: FormGroup;
  cuotaOpciones: string[] = ['Sí', 'No'];
  generoOpciones: string[] = ['Hombre', 'Mujer', 'Prefiero no decirlo'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.agregarAgremiadoForm = this.formBuilder.group({
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      nombre: ['', Validators.required],
      nup: ['', Validators.required],
      nue: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      rfc: ['', Validators.required],
      nss: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      cuotaPagada: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  agregarAgremiado(): void {
    if (this.agregarAgremiadoForm.valid) {
      console.log('Agremiado agregado:', this.agregarAgremiadoForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  goToDashboardAdministrador() {
    this.router.navigate(['/dashboard_administrador']);
  }

  campoTocado(campo: string) {
    return this.agregarAgremiadoForm.get(campo)?.touched || this.agregarAgremiadoForm.get(campo)?.dirty;
  }

  campoValido(campo: string) {
    return this.agregarAgremiadoForm.get(campo)?.valid;
  }


}
