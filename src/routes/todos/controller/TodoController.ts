import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { todo } from "./todos";
  import { UsersService, UserCreationParams } from "./usersService";
  
  @Route("todos")
  export class UsersController extends Controller {
    @Get("{userId}")
    public  getUser(
      @Path() userId: number,
      @Query() task?: string
    ): Promise<todo> {
      return new todoService().get(userId, task);
    }
  
    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public createUser(
      @Body() requestBody: UserCreationParams
    ): void {
      this.setStatus(201); // set return status 201
      new UsersService().create(requestBody);
      return;
    }
  }