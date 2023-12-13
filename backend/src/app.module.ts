import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverPersistence } from './gateways/persistences/driver.persistence';
import { DriverController } from './gateways/controllers/formulaOneController/driver.controller';
import { HttpModule } from '@nestjs/axios';
import { DriverUseCase } from './domains/usecase/driver.usecase';
import { FormulaOneService } from './gateways/clients/formulaOneApi/formulaOne.service';
import { Driver } from './domains/models/driver.model';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DriverController],
  providers: [
    AppService,
    DriverUseCase,
    Driver,
    FormulaOneService,
    {
      provide: 'DriverContrat',
      useClass: DriverPersistence,
    },
  ],
})
export class AppModule {}
