import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  filteredStatus = '';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      started: new Date(2017, 1, 15),
      status: 'stable'
    },
    {
      instanceType: 'large',
      name: 'User Database',
      started: new Date(2017, 1, 17),
      status: 'stable'
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      started: new Date(2017, 1, 13),
      status: 'offline'
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      started: new Date(2017, 1, 14),
      status: 'stable'
    }
  ];

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      started: new Date(2017, 1, 18),
      status: 'stable'
    });
  }
}
