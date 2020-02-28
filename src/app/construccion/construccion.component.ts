import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {
  MAILAPI = 'http://18.218.176.36/api/mensaje';
  //MAILAPI = 'http://localhost:3000/mensaje';//dev parameter

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  nombre = '';
  telefono = '';
  email = '';//dev parameter
  msg = '';

  httpPostFunction() {
    this.http.post(this.MAILAPI,
      {
        "nombre": this.nombre,
        "telefono": this.telefono,
        "msg":  this.msg,
        "email": this.email
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  enviarForma() {
    console.log(this.nombre + ' ' + this.email + ' ' + this.msg + ' ' + this.telefono);
    if (this.msg.length > 0 && this.email.length > 0 && this.nombre.length > 0 && this.telefono.length > 0) {
      this.httpPostFunction();
      alert('El mensaje ha sido enviado, gracias por utilizar nuestro servicio. ');
      this.msg = '';
      this.email = '';
      this.nombre = '';
      this.telefono = '';
    } else {
      alert('Por favor llene los campos.');
    }
  }

}
