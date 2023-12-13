import { Inject, Injectable } from '@nestjs/common';
import { DriverContract } from '../contracts/driver.contract';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';

@Injectable()
export class DriverUseCase {
  constructor(
    @Inject('DriverContrat')
    private readonly driverContract: DriverContract,
  ) {}

  getDrivers(year: string): Observable<Driver[]> {
    let result;
    if (year != null) {
      result = this.driverContract.getDriversByYear(year);
    }
    return result;
  }
}
