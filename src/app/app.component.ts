import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KnoxposervService } from './knoxposerv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	response:any;
  constructor(private srv:KnoxposervService,private http:HttpClient ){
	  
  }
  
  ngOnInit(){ 
	  this.response=this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Pune,IN&cnt=7&units=metric&APPID=6f7e35952f2a99348614689a745d2836');
    this.response.subscribe((response)=>this.response=response);	
  }
  
}
