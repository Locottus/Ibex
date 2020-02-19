import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {
 //MAILAPI = 'http://18.218.67.86:4000/api/sendMail';
 MAILAPI = 'http://localhost:4000/api/sendMail';//dev parameter

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  nombre = '';
  fromEmail = '';
  telefono = '';
  toEmail = 'herlich@gmail.com';//dev parameter
  //toEmail = 'j@lemusl.com';
  msg = '';
  subject = 'Mensaje de Pagina Web';

  httpPostFunction() {
    this.http.post(this.MAILAPI,
      {
        "from": "noreplay@ibexcm.com",
        "msg": 'nombre de quien envia el mensaje: ' + this.nombre +
          ' email de quien envia el mensaje: ' + this.fromEmail +
          ' telefono de quien envia el mensaje: ' + this.telefono +
          ' mensaje: ' + this.msg,
        "to": this.toEmail,
        "subject": "Mensaje desde pagina web"
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
    console.log(this.nombre + ' ' + this.fromEmail + ' ' + this.msg + ' ' + this.subject + ' ' + this.telefono);
    if (this.msg.length > 0 && this.fromEmail.length > 0 && this.nombre.length > 0 && this.telefono.length > 0) {
      this.httpPostFunction();
      alert('El mensaje ha sido enviado.');
      this.msg = '';
      this.fromEmail = '';
      this.nombre = '';
      this.telefono = '';
    } else {
      alert('Por favor llene los campos.');
    }
  }

}
