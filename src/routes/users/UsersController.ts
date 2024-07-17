import { Controller, Get, Query, Route, Tags } from '@tsoa/runtime';

import { UserAttributes } from '../../interfaces/db-models/UserAttributes';

import UserModel from '../../database/models/UserModel';

@Route('v1/users')
@Tags('Users')
export class UsersController extends Controller {
  @Get('currentuser')
  public async getCurrentUser(
    @Query() id: number,
  ): Promise<UserAttributes | null> {
    const user = await UserModel.findOne({ where: { id: id } });
    return user;
  }
}

export default UsersController;
