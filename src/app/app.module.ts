import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';

@NgModule({
      imports: [
            BrowserModule,
            FormsModule
      ],
      declarations: [
            AppComponent,
            MyComponent,
            ChildComponent
      ],
      providers: [

      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
