import { EgressoService } from './../egresso.service';
import { Component, OnInit } from '@angular/core';
import { Egresso } from '../egresso.model';

@Component({
  selector: 'app-egresso-read',
  templateUrl: './egresso-read.component.html',
  styleUrls: ['./egresso-read.component.css']
})
export class EgressoReadComponent implements OnInit{

  egressos: Egresso[] = []

  constructor(private egressoService: EgressoService) {}

  ngOnInit(): void {
    this.egressoService.read().subscribe(egressos => {
      this.egressos = egressos
      console.log(egressos)
    })
  }

}
