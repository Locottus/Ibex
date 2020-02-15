import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  nombre = '';
  fromEmail = '';
  toEmail = 'herlich@gmail.com';
  msg = '';
  subject = 'Mensaje de Pagina Web';

  httpPostFunction() {
    this.http.post("http://18.218.67.86:4000/api/sendMail",
        {
          "from": "noreplay@ibexcm.com",
          "msg": 'nombre de quien envia el mensaje: ' + this.nombre +
           ' email de quien envia el mensaje: ' + this.fromEmail +
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
    console.log(this.nombre + ' ' + this.fromEmail + ' ' + this.msg + ' ' + this.subject);
    if (this.msg.length > 0 && this.fromEmail.length > 0 && this.nombre.length > 0){
      this.httpPostFunction();
      alert('El mensaje ha sido enviado.');
      this.msg = '';
      this.fromEmail = '';
      this.nombre = '';
    } else {
      alert('Por favor llene los campos.');
    }
  }


}
