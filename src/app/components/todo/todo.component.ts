import { Component, ElementRef, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',

  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  recupero = 'Recupero Task...';
  task!: string;
  caricamento = false;
  arrayTask!:Todo[]
  control = true;
  arrayCompl!:Todo[]

  constructor(private servizio:TodosService) {
    setTimeout(() => {
      this.arrayTask=[]
      this.arrayCompl=servizio.recuperaTask()
      this.arrayTask=this.arrayCompl.filter((tasks)=>{return tasks.completed==false})
      console.log(this.arrayTask)
      this.control = false;
    }, 2000);
  }

  ngOnInit(): void {}

  aggiungiTask(x: string) {
    this.caricamento = true;
    this.arrayTask.push({
      id:this.servizio.arrayTask.length+1,
      title:x,
      completed:false
    })
    console.log(this.arrayTask)
    this.servizio.aggiungiTaskS(x)
    this.caricamento = false;
    this.task=""
  }

  aggiungiCompl(id:number){setTimeout(() => {
    for(let i=0;i<this.arrayTask.length;i++){
      if(this.arrayTask[i].id == id){
        this.servizio.modificaTask(id-1)
        this.arrayTask.splice(i,1);
        console.log(i)
        console.log(this.arrayTask)
        console.log(this.servizio.arrayTask)
        return;
      }
    }
  }, 2000);
  }
}
