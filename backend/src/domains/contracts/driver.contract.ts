import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';

export interface DriverContract {
  getDriversByYear(year: string): Observable<Driver[]>;
}
