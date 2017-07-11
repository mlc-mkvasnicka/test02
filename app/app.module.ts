import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMainComponent } from './app-main';

@NgModule({
	declarations: [
		AppMainComponent
	],
	imports: [BrowserModule],
	bootstrap: [AppMainComponent]
})
export class AppModule {
	static forRoot(): ModuleWithProviders {
		return {ngModule: AppModule, providers: []};
	}
}
