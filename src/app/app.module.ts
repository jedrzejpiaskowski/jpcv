import { BrowserModule } from "@angular/platform-browser";
import { NgModule, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "../app/material.module";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillProgressComponent } from "./skill-progress/skill-progress.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutMeComponent,
		SkillsComponent,
		ContactComponent,
		TabsComponent,
		ExperienceComponent,
		SkillProgressComponent,
		SettingsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
	],
	providers: [
		// This app relies on mutation-based state updates (see TabRegistryService),
		// so it stays on zone-based change detection rather than Angular's
		// zoneless default.
		provideZoneChangeDetection(),
		provideHttpClient(withFetch()),
		provideTranslateService({
			fallbackLang: "en",
			loader: provideTranslateHttpLoader({
				prefix: "./assets/i18n/",
				suffix: ".json",
			}),
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
