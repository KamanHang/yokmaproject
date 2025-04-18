import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import {MyPreset}  from '../assets/themes/mytheme'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: false || 'none'
        }
      }
  }),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
