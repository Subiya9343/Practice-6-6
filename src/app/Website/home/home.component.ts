import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router, private route:ActivatedRoute){}
  loadCourses(){
    this.router.navigate(['/Courses'], {relativeTo:this.route})
  }
}
