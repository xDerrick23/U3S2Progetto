import { Injectable } from '@angular/core';
import { takeLast } from 'rxjs';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  arrayTask!:Todo[]
  constructor() {
    this.arrayTask=[]}

  aggiungiTaskS(x:string){
    this.arrayTask.push({
      id:this.arrayTask.length+1,
      title:x,
      completed:false
    })
  }

    modificaTask(index:number){{
      this.arrayTask[index].completed=true;
    }
  }
  recuperaTask(){
    return this.arrayTask;
  }

}





