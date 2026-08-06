import { Component, OnInit } from "@angular/core";
import { TabBase } from "../tabs/tab-base";
import { Router } from "@angular/router";
import { TabRegistryService } from "../services/tab-registry.service";

@Component({
  standalone: false,
	selector: "app-about-me",
	templateUrl: "./about-me.component.html",
	styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent extends TabBase implements OnInit {
	public override iconName = "mood";
	public hobbies: Hobby[] = [];

	constructor(
		router: Router,
		tabRegistry: TabRegistryService
	) {
		super('AboutMe', 'mood', router, tabRegistry);
	}

	ngOnInit(): void {
		this.hobbies.push(new Hobby("Racket sports", 'Sports!', "sports_tennis"));
		this.hobbies.push(new Hobby("Movies", "Movies!", "movie"));
		this.hobbies.push(new Hobby("Video games", 'Video games!', "videogame_asset"));
	}
}

export class Hobby {
	constructor(public tooltip: string, public description: string, public icon: string) {}
}
