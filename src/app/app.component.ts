import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
  name = 'Angular tutorial with Arif shah';
  count = 0

  

  handleCounter(value:string)
  {
    if(value==='plus') 
      this.count=this.count+1
    else if(value==='minus' && this.count>0)
    
        this.count=this.count-1

    else
      this.count=0

  }



}
