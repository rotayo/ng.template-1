import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutControllerService } from '../services/layout-controller.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected layoutService = inject(LayoutControllerService);
  title = 'ng.template-1';
}
