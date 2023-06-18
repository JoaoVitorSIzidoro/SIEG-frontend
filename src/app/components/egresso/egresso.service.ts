import { Injectable } from '@angular/core';
import { Egresso } from './egresso.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgressoService {

  baseUrl = "http://localhost:3001/Egresso"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(egresso: Egresso): Observable<Egresso> {
    return this.http.post<Egresso>(this.baseUrl, egresso)
  }

  read(): Observable<Egresso[]> {
    return this.http.get<Egresso[]>(this.baseUrl)
  }
}
