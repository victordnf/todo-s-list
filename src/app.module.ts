import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todolist',
      entities: [Todo],
      synchronize: true
    }),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
