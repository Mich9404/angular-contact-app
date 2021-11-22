import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Contact App';

  msg:string = '';

  employees = [
    {'name': 'Misael', 'position': 'Manager', 'email': 'email@email.com'},
    {'name': 'Jose', 'position': 'Designer', 'email': 'email@email.com'},
    {'name': 'Camila', 'position': 'Programmer', 'email': 'email@email.com'}
  ];

  model:any = {};
  model2:any = {};

  hideUpdate:boolean = true;

  addEmployee():void {
    this.employees.push(this.model);
    this.msg = 'Campo agregado';
  }

  deleteEmployee(i: number):void {
    var answer = confirm('¿Seguro de eliminar el elemento?')
    if (answer) {
      this.employees.splice(i, 1);
    }
    this.msg = 'Campo eliminado';
  }

  myValue: any;
  editEmployee(i: number):void {
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
    this.hideUpdate = false;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.model2 = {}
      }
    }
    this.msg = 'Campo actualizado';
  }

  closeAlert():void {
    this.msg = '';
  }

}
