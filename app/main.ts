// initializes our platform
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootAppModule } from './root/app.module';

const myPlatform = platformBrowserDynamic();

// bootstrap the root module
myPlatform.bootstrapModule(RootAppModule)
    .then();