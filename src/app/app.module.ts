import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompletatiComponent } from './components/completati/completati.component';

const routes: Route[] = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
