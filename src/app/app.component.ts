import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-Binding';
  firstName = "Devindi";
  imagepath="assets/Cambio-Logo.jpg";
  defaultVal = "Surrender"

  passValueToComponent(e: Event) {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  }

  changeValue(e:Event){
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  }
  
}
