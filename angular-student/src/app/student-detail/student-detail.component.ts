import { Component } from '@angular/core';
import { student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  students: student[] = STUDENTS;
}
