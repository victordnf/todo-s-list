import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'todo_tb'})
export class Todo{
    
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 30, nullable: false})
    tarefa: string;

    @IsNotEmpty()
    @Column({nullable: true})
    feita: boolean;
}