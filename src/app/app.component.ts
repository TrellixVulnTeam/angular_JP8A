import { Component, OnInit, OnDestroy } from '@angular/core';
var video = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello World!";

  getMin(a:any, b:any) {
    if (a < b)
      return a;
    return b
  }
}
