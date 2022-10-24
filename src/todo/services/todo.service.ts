import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "../entities/todo.entity";

@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    )   { }

    async findAll(): Promise<Todo[]>{
        return await this.todoRepository.find()
    }

    async findById(id: number): Promise<Todo>{
        let procurarTodo = await this.todoRepository.findOne({
            where:{
                id
            }    
        });

        if (!procurarTodo)
            throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND)
        
        return procurarTodo;
    }

    async create(todo:Todo): Promise<Todo>{
        return await this.todoRepository.save(todo)
    }
}