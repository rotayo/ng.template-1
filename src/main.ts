import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/core/layout/app.config';
import { AppComponent } from './app/core/layout/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
