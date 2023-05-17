/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CurrencyService } from "../currency.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { Currency } from "./Currency";
import { DepositFindManyArgs } from "../../deposit/base/DepositFindManyArgs";
import { Deposit } from "../../deposit/base/Deposit";
import { DepositWhereUniqueInput } from "../../deposit/base/DepositWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CurrencyControllerBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CurrencyCreateInput): Promise<Currency> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        short: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @ApiNestedQuery(CurrencyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        short: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        short: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          short: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          short: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/deposits")
  @ApiNestedQuery(DepositFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "read",
    possession: "any",
  })
  async findManyDeposits(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Deposit[]> {
    const query = plainToClass(DepositFindManyArgs, request.query);
    const results = await this.service.findDeposits(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/deposits")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async connectDeposits(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: DepositWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deposits: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/deposits")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateDeposits(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: DepositWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deposits: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/deposits")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async disconnectDeposits(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: DepositWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deposits: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
