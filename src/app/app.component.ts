import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	standalone: false,
})
export class AppComponent {
	title = "jpcv";

	constructor(
		private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private translate: TranslateService
	) {
        this.matIconRegistry.addSvgIcon("linked-in", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/linkedin.svg"));
        this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/github.svg"));
        this.matIconRegistry.addSvgIcon('email', this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/email.svg"));
        // The fallback language is configured via provideTranslateService().
        this.translate.use('en');
    }

    toggleLanguage() {
        // `currentLang` is a signal as of ngx-translate v18.
        if (this.translate.currentLang() === 'en') {
            this.translate.use('pl');
        } else if (this.translate.currentLang() === 'pl') {
            this.translate.use('en');
        }
    }
}
