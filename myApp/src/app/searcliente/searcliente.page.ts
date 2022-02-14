import { Component, OnInit } from '@angular/core';
import { EsbserviceService } from '../services/esbservice.service';
@Component({
  selector: 'app-searcliente',
  templateUrl: './searcliente.page.html',
  styleUrls: ['./searcliente.page.scss'],
})
export class SearclientePage implements OnInit {

  private id: any
  private cedulaBuscar:string
  private nombres:string
  private direccion:string
  private correo: string
  private contrasenia: string
  private responseData: any

  constructor(private ventas: EsbserviceService) { }

  ngOnInit() {
  }
  async searchPersona() {
      await new Promise(resolve=>{this.ventas.editPerson(this.cedulaBuscar).subscribe(async data=>{
        resolve(data);
        this.responseData= data;
        this.nombres= data.nombres;
        this.direccion = data.direccion;
        this.correo = data.correo
        this.contrasenia = data.contrasenia
      },error=>{
        console.log(error);
        this.cedulaBuscar = "No existe el cliente"
      });
    });
    console.log(this.responseData)
  }

}
