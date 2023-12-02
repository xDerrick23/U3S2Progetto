import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',

  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  control=true;
  arrayDone!:Todo[]
  arrayCompl!:Todo[]

  constructor(private servizio:TodosService) {
    setTimeout(()=>{
      this.arrayDone=[]
      this.arrayCompl=servizio.recuperaTask()
      this.arrayDone=this.arrayCompl.filter((tasks)=>{return tasks.completed==true})
      this.control=false;
      console.log(this.arrayDone)
    },2000);
  }

  ngOnInit(): void {
  }

}
