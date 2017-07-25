import { Component } from '@angular/core';
import {Http} from '@angular/http';  // For making the rest calls
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  spaceScreens: any;

constructor (private http:Http){
this.getConfiguration()
.subscribe(
            (res) => {
                this.spaceScreens = res;
                console.log("after reading");
                console.log(this.spaceScreens);              
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error));
}
getConfiguration = (): Observable<Response> => 
{
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get('./datafiles.json').map(res => res.json().screenshots);
}
likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

deleteMe(i) {
  this.spaceScreens.splice(i, 1);
  console.log(i);
}
}

