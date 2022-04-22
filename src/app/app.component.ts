/* ---------- Modules ---------- */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* ---------- Interface ---------- */
import { Employee } from "src/app/interface/employee.interface";

/* ---------- Employees Data ---------- */
import { Employees } from 'src/assets/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  employees: Employee[] = [];

  editEmployee: Boolean = false;

  formEmployee: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    /* ---------- Init Form Create ---------- */
    this.formEmployee = this.fb.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      age: [0, Validators.required],
      dateOfBirth: ['', Validators.required],
      department: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.get();
  }

  /* ---------- Get Employees ---------- */
  get(){
    this.employees = Employees;
  }

  /* ---------- Create Employee ---------- */
  create(employee: Employee){
    this.employees.push(employee);
    this.formEmployee.reset();
  }

  /* ---------- Load employee in form to edit ---------- */
  edit(employee: Employee){
    this.editEmployee = true;
    this.formEmployee = this.fb.group({
      dni: [employee.dni, Validators.required],
      name: [employee.name, Validators.required],
      surname: [employee.surname, Validators.required],
      email: [employee.email, Validators.required],
      age: [employee.age, Validators.required],
      dateOfBirth: [employee.dateOfBirth, Validators.required],
      department: [employee.department, Validators.required],
    })
  }

  /* ---------- Update Employee ---------- */
  update(employee: Employee){
    this.employees = this.employees.map(x => x.dni === employee.dni
      ? { 
          ...x, 
          dni: employee.dni, 
          name: employee.name,
          surname: employee.surname, 
          email: employee.email, 
          age: employee.age, 
          dateOfBirth: employee.dateOfBirth, 
          department: employee.department, 
      }
      : x
    );
    this.cancel();
  }

  /* ---------- Delete Employee ---------- */
  delete(dni: string){
    this.employees = this.employees.filter(x => x.dni != dni);  
  }

  /* ---------- Cancel edit Employee ---------- */
  cancel(){
    this.editEmployee = false;
    this.formEmployee.reset();
  }
}
