import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClient, provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient() , provideRouter(routes)  ,   provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};
