import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab6Page {
  constructor() {}
}
