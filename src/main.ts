// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    // HttpClient zur Verfügung stellen:
    provideHttpClient(),

    // Routing bereitstellen (falls benötigt):
    // provideRouter(routes, { ...Optionen }),
    // oder: provideRouter(routes, withComponentInputBinding()), etc.
  ]
})
.catch(err => console.error(err));
