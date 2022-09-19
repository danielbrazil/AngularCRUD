import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() depart: any;
  departmentId = 0;
  departmentName = "";

  ngOnInit(): void {

    this.departmentId = this.depart.departmentId;
    this.departmentName = this.depart.departmentName;
  }

  addDepartment() {
    var dept = {
      "departmentId": this.departmentId,
      "departmentName": this.departmentName
    };
    this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var dept = {
      departmentId: this.departmentId,
      departmentName: this.departmentName
    };
    this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }
}