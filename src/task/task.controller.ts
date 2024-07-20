import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { UserValidatorPipe } from "src/user/user-validator/user-validator.pipe";
import { AuthGuard } from "src/user/guards/auth/auth.guard";
import { ApiTags } from "@nestjs/swagger";

@Controller('/task')
@ApiTags('Tasks')
export class TaskController
{
    constructor(private taskService:TaskService)
    { }

    /*@Get()
    getTaskList(@Query() limit:any)
    {
        console.log(limit);
        return this.taskService.getTaskList();    
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string)
    {
        return this.taskService.getTask(parseInt(id));
    }*/

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto)
    {
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() taskUpdate: UpdateTaskDto)
    {

    }

    @Get('/greet')
    @UseGuards(AuthGuard)
    greeting(@Query(UserValidatorPipe) query:{age:number, name:string})
    {
        return `Hello ${query.name}, your age is ${query.age} years olds`;
    }

}