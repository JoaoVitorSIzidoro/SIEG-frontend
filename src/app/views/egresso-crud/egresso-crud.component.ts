import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egresso-crud',
  templateUrl: './egresso-crud.component.html',
  styleUrls: ['./egresso-crud.component.css']
})
export class EgressoCrudComponent {


  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  navigateToEgressoCreate(): void {
    this.router.navigate(['/egressos/create'])
  }
  

}
