import { Component, OnInit} from '@angular/core';
import { EgressoService } from '../egresso.service';
import { Router } from '@angular/router';
import { Egresso } from '../egresso.model';

@Component({
  selector: 'app-egresso-create',
  templateUrl: './egresso-create.component.html',
  styleUrls: ['./egresso-create.component.css']
})
export class EgressoCreateComponent implements OnInit{

  egresso: Egresso = {
    name: '',
	  data_nascimento: '',  
	  entrada_ufu: '' , 
	  saida_ufu: '' , 
	  tempo_curso: ''  ,
	  tempo_formado: ''  ,
	  bolsas: ''  ,
	  estagios_area: ''  ,
	  trabalha_area_atualmente: '',
	  quantos_empregos_area: ''  ,
	  experiencia_profissional: ''  ,
	  last_update: new Date
  }

  constructor(private egressoService: EgressoService,
    private router: Router) {}

  ngOnInit(): void {
  }

  createEgresso(): void {
    this.egressoService.create(this.egresso).subscribe(() => {
      this.egressoService.showMessage('Produto criado!')
      this.router.navigate(['/egressos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/egressos'])
  }
}
