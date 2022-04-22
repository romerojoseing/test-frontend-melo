import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* ---------- Check function create emplopyee ---------- */
  it('Check function create employee', () => {
    const employee = {
      dni : '66666666',
      name : 'Jose',
      surname : 'Romero',
      email: 'jromero@gmail.com',
      age: 25,
      dateOfBirth: '10 de enero del 2020',
      department: 'Administración'
    }
    component.get(); 
    let employeesTemp = component.employees.length; 
    component.create(employee);
    expect(component.employees.length).toBeGreaterThan(employeesTemp);
  });

  /* ---------- Check function edit emplopyee ---------- */
  it('Check function edit employee', () => {
    const employee = {
      dni : '111111111',
      name : 'Jesus Nuevo',
      surname : 'Aguilar',
      email: 'jaguilar@gmail.com',
      age: 25,
      dateOfBirth: '10 de enero del 2020',
      department: 'Administración'
    }
    component.get(); 
    let employeesTemp = component.employees.length; 
    component.update(employee);
    expect(component.employees.length).toEqual(employeesTemp);
  });

  /* ---------- Check function delete emplopyee ---------- */
  it('Check function delete emplopyee', () => {
    let employeesTemp = component.employees.length;
    component.delete('111111111');
    expect(component.employees.length).toBeLessThan(employeesTemp);
  });
  
});
