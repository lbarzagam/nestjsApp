import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { UpdateUserDto } from "src/user/dto/update-user.dto";
import { merge, mergeMap } from "rxjs";



@Injectable()
export class TaskService
{
    private tasks=[];

    getTaskList()
    {
        return this.tasks;
    }

    getTask(id:number)
    {
        const taskFound = this.tasks.find(task=>{ task.id===id })
        if(!taskFound)
            throw new NotFoundException(`La tarea con id: ${id} no fue encontrada`);

        return taskFound;
    }

    createTask(task: CreateTaskDto)
    {
        this.tasks.push({
            ...task,
            id:this.tasks.length+1
        });
    }

    updateTask(taskDto: UpdateTaskDto, id: number)
    {
        const taskUpdate = this.getTask(id);
        /*this.tasks.push({
            ...task,
            id:this.tasks.length+1
        });*/
    }

}