import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';
import { Driver } from 'src/domains/models/driver.model';

@Injectable()
export class FormulaOneService {
  private url = 'http://ergast.com/api/f1/';

  constructor(private readonly httpService: HttpService) {}

  getDriversByYear(year: string): Observable<Driver[]> {
    const apiUrl = `${this.url}${year}/drivers.json`;

    return this.httpService.get<Driver[]>(apiUrl).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Error in API call:', error);
        throw error;
      }),
    );
  }
}
