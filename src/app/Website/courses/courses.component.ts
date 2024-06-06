import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
interface Data{
  id: number;
        firstName: string;
        lastName: string;
        age: number;
        company: string;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  data: Data[] =[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
      this.data = this.dataService.data;
  }
}
