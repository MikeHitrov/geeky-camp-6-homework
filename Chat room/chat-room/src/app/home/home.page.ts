import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "Заглавие 1";


  constructor() {}

  onClick() {
    alert("Здр");
  }

}
