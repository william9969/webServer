import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Agregar Cliente', url: '/addcliente', icon: 'mail' },
   // { title: 'Editar Cliente', url: '/editarcliente', icon: 'paper-plane' },
    { title: 'Listar Cliente', url: '/listcliente', icon: 'heart' },
    { title: 'Buscar Cliente', url: '/searcliente', icon: 'archive' },
    { title: 'Listar Producto Bodega', url: '', icon: 'trash' },
    { title: 'Listar Producto Categoria', url: '', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
