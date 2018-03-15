import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from './app.routing';

@NgModule({
  imports: [
    NativeScriptModule, 
    NativeScriptFormsModule, 
    NativeScriptHttpModule,
    NativeScriptRouterModule, 
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, ...navigatableComponents],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
