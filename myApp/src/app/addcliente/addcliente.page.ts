import { Component, OnInit } from '@angular/core';
import { Persona } from '../class/request';
import { EsbserviceService} from '../services/esbservice.service';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.page.html',
  styleUrls: ['./addcliente.page.scss'],
})
export class AddclientePage implements OnInit {
  private persona = new Persona();

  private cedula:string
  private nombres:string
  private direccion:string
  private correo: string
  private contrasenia: string
  private responseData: any
  constructor( private ventas: EsbserviceService) { }

  ngOnInit() {
  }

  async addPersona() {
    this.persona.cedula = this.cedula
    this.persona.nombres = this.nombres
    this.persona.direccion = this.direccion
    this.persona.correo = this.correo
    this.persona.contrasenia = this.contrasenia
    await new Promise(resolve=>{this.ventas.addPerson(this.persona).subscribe(async data=>{
      resolve(data);
      this.responseData=data;
      console.log(this.responseData);
    },error=>{
      console.log(error);
    });
  });
  console.log(this.responseData)
    
  }

}

