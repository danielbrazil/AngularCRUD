import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  employeeID = 0;
  employeeName = "";
  department = "";
  doj = "";
  // PhotoFileName = "";
  // PhotoFilePath = "";
  DepartmentList: any = [];


  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;

      this.employeeID = this.emp.employeeID;
      this.employeeName = this.emp.employeeName;
      this.department = this.emp.department;
      this.doj = this.emp.doj;
      // this.PhotoFileName = this.emp.PhotoFileName;
      // this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      "employeeID": this.employeeID,
      "employeeName": this.employeeName,
      "department": this.department,
      "emailId": "nothing",
      "doj": this.doj//,
      // PhotoFileName: this.PhotoFileName
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      "employeeID": this.employeeID,
      "employeeName": this.employeeName,
      "department": this.department,
      "emailId": "nothing",
      "doj": this.doj//,
      //PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }


  // uploadPhoto(event: any) {
  //   var file = event.target.files[0];
  //   const formData: FormData = new FormData();
  //   formData.append('file', file, file.name);

  //   // this.service.uploadPhoto(formData).subscribe((data: any) => {
  //   //   this.PhotoFileName = data.toString();
  //   //   this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
  //   // })
  // }
}