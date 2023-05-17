import { Module } from "@nestjs/common";
import { DepositModuleBase } from "./base/deposit.module.base";
import { DepositService } from "./deposit.service";
import { DepositController } from "./deposit.controller";
import { DepositResolver } from "./deposit.resolver";

@Module({
  imports: [DepositModuleBase],
  controllers: [DepositController],
  providers: [DepositService, DepositResolver],
  exports: [DepositService],
})
export class DepositModule {}
