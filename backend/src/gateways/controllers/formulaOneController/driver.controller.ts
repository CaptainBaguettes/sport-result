import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Driver } from 'src/domains/models/driver.model';
import { DriverUseCase } from 'src/domains/usecase/driver.usecase';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverUseCase: DriverUseCase) {}
  @Get()
  findAll(@Param() year): Observable<Driver[]> {
    return this.driverUseCase.getDrivers(year);
  }
}
