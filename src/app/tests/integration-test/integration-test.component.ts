import { Component } from '@angular/core';

@Component({
  selector: 'app-integration-test',
  templateUrl: './integration-test.component.html',
  styleUrls: ['./integration-test.component.css']
})
export class IntegrationTestComponent {
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  loadData() {
    throw new Error('Method not implemented.');
  }

}
