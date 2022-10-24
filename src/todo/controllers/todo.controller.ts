import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { TodoService } from "../services/todo.service";


@Controller('/todo')
export class TodoController{
    constructor(private readonly todoService: TodoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Todo[]>{
        return this.todoService.findAll()
    };
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Todo>{
        return this.todoService.findById(id)
    };

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() todo: Todo): Promise<Todo>{
        return this.todoService.create(todo)
    }
}