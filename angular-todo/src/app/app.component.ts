import { Component } from '@angular/core';
export interface TodoList{
    id:number;
    task:string;
    completed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList : TodoList [] = [];
  newTask:string = '';

  addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodoItem: TodoList = {
        id : Date.now(),
        task: this.newTask,
        completed: false
      }

      this.todoList.push(newTodoItem);
      console.log(this.todoList)
      this.newTask = '';
    }
  }

  toggleCompleted(index:number):void{
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  deleteTask(id:number):void{
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
}



