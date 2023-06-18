import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Egresso } from '../egresso.model';

const EXAMPLE_DATA: Egresso[] = [
  {
    "id": 1,
    "name": "João",
    "data_nascimento": "",
    "entrada_ufu": "",
    "saida_ufu": "",
    "tempo_curso": "",
    "tempo_formado": "",
    "bolsas": "",
    "estagios_area": "",
    "trabalha_area_atualmente": "",
    "quantos_empregos_area": "",
    "experiencia_profissional": "",
    "last_update": new Date
  },
  {
    "id": 2,
    "name": "Caio",
    "data_nascimento": "",
    "entrada_ufu": "",
    "saida_ufu": "",
    "tempo_curso": "",
    "tempo_formado": "",
    "bolsas": "",
    "estagios_area": "",
    "trabalha_area_atualmente": "",
    "quantos_empregos_area": "",
    "experiencia_profissional": "",
    "last_update": new Date
  }
];

/**
 * Data source for the EgressoRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EgressoRead2DataSource extends DataSource<Egresso> {
  data: Egresso[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Egresso[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Egresso[]): Egresso[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Egresso[]): Egresso[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
