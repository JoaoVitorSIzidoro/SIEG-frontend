import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IntegrationTestComponent } from './integration-test.component';

describe('IntegrationTestComponent', () => {
  let component: IntegrationTestComponent;
  let fixture: ComponentFixture<IntegrationTestComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [IntegrationTestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationTestComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se todas as requisições foram atendidas
  });

  it('should retrieve data from the backend', fakeAsync(() => {
    const mockData = {
      id: 1,
      name: "João",
      data_nascimento: "04/12/2000",
      entrada_ufu: "18/03/2015",
      saida_ufu: "18/03/2019",
      tempo_curso: "4 anos",
      tempo_formado: "4 anos",
      bolsas: "Não",
      estagios_area: "Algar",
      trabalha_area_atualmente: "Sim",
      quantos_empregos_area: "2",
      experiencia_profissional: "Estagio na Algar e dev Arcom",
      last_update: new Date
    };

    // Executa uma chamada HTTP simulada
    component.loadData();

    const req = httpMock.expectOne('/createEgresso'); // Espera uma chamada para a URL especificada
    expect(req.request.method).toBe('POST'); // Verifica o método HTTP

    req.flush(mockData); 

    tick(); // Avança no tempo para que as chamadas assíncronas sejam resolvidas

    expect(component.data).toEqual(mockData); // Verifica se os dados foram atribuídos corretamente
  }));
});
