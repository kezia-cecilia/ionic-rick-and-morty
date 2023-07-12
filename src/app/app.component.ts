import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'information' },
    { title: 'Contato', url: '/contato', icon: 'chatbox' },
    { title: 'Políticas do App', url: '/politicas', icon: 'alert' },
  ];
  constructor() { }
}
