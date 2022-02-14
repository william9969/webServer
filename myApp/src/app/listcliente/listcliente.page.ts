import { Component, OnInit } from '@angular/core';
import { Persona } from '../class/request';
import { EsbserviceService } from '../services/esbservice.service';
@Component({
  selector: 'app-listcliente',
  templateUrl: './listcliente.page.html',
  styleUrls: ['./listcliente.page.scss'],
})
export class ListclientePage implements OnInit {

  private listClientes: Persona[];

  constructor( private ventas: EsbserviceService ) { }

  ngOnInit() {
    this.listarClientes();
    
  }
 async listarClientes () {
  await new Promise(resolve=>{this.ventas.listPerson().subscribe(async data=>{
    resolve(data);
    this.listClientes=data;
    },error=>{
      console.log(error);
    });
  });
 }
  async eliminarCliente(cedula:any){
    await new Promise(resolve=>{this.ventas.deletePerson(cedula).subscribe(async data=>{
      resolve(data);
      console.log(data)
      },error=>{
        console.log(error);
      });
    });
  }

}
