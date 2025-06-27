import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CoreModule, hookNavigator, RouterModule } from '@c8y/ngx-components';
import { HomeComponent } from '../app/home.component';
import { ROUTES } from '../content/routes';
import { ContentModule } from '../content/content.module';

const routes = [
  ...ROUTES,
  {
    path: '',
    component: HomeComponent
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 32]
      })
    ),
    importProvidersFrom(CoreModule.forRoot()),
    hookNavigator({ label: 'Welcome', path: '/', icon: 'home', priority: 10000 }),
    importProvidersFrom(ContentModule)
  ]
};
