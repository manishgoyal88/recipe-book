import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  featureSelected: string;

  onFeatureSelect(event: string) {
    this.featureSelected = event;
  }

}
