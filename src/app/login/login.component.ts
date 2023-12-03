import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginS: LoginService,
    private authS: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      NUE: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    const { NUE, password } = this.loginForm.value;

    if (!NUE || !password) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor ingrese su NUE y contraseña',
        showConfirmButton: true
      });
    } else {
      this.loginS.login(NUE, password).subscribe(
        (response: any) => {
          const token = response.token;
          const user = response.Usuario;

          this.authS.setToken(token);
          this.authS.setUser(user);
          this.authS.setLoggedInFlag(true);

          if (user.id_rol === 1) {
            this.router.navigate(['/dashboard_administrador']);
            Swal.fire({
              icon: 'success',
              title: 'Hola!',
              text: 'Bienvenido usuario Administrador',
              showConfirmButton: true
            });
          } else if (user.id_rol === 2) {
            this.router.navigate(['/dashboard_agremiado']);
            Swal.fire({
              icon: 'success',
              title: 'Hola!',
              text: 'Bienvenido usuario Agremiado',
              showConfirmButton: true
            });
          } else {
            console.log('Rol no reconocido');
            Swal.fire({
              icon: 'error',
              title: '¡Error!',
              text: 'Credenciales inválidas',
              showConfirmButton: true
            });
          }
        },
        (error) => {
          console.error('Credenciales incorrectas', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Credenciales incorrectas',
            showConfirmButton: true
          });
        }
      );
    }
  }


  NUETocado() {
    return this.loginForm.get('NUE')?.touched || this.loginForm.get('NUE')?.dirty;
  }

  NUEValido() {
    return this.loginForm.get('NUE')?.valid;
  }

  passwordTocado() {
    return this.loginForm.get('password')?.touched || this.loginForm.get('password')?.dirty;
  }

  passwordValido() {
    return this.loginForm.get('password')?.valid;
  }

  goToFormatos(){
    this.router.navigate(['/formatos']);
  }

  goToConvocatorias(){
    this.router.navigate(['/convocatorias']);
  }

  goToConvenios(){
    this.router.navigate(['/convenios']);
  }



}
