import { DriverContract } from 'src/domains/contracts/driver.contract';
import { FormulaOneService } from '../clients/formulaOneApi/formulaOne.service';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Driver } from 'src/domains/models/driver.model';

@Injectable()
export class DriverPersistence implements DriverContract {
  constructor(private readonly formulaOneService: FormulaOneService) {}

  getDriversByYear(year: string): Observable<Driver[]> {
    return this.formulaOneService.getDriversByYear(year);
  }
}
