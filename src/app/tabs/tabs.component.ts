import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TabInfo } from "./TabInfo";
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  standalone: false,
	selector: "app-tabs",
	templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

	tabs: TabInfo[] = [];

	constructor(private tabRegistry: TabRegistryService) {}

	ngOnInit(): void {
        this.tabRegistry.subscribe(t => this.getTabs(t));
        this.tabs.push(new TabInfo('Welcome', '/home', 'home'));
    }

    getTabs(tabs: TabInfo[]) {
        console.log(tabs);
        this.tabs = tabs;
    }

    closeTab(tab: TabInfo) {
        console.log('Closing ' + tab.name);
        this.tabRegistry.close(tab);
    }

    selectTab(tab: TabInfo) {
        this.tabRegistry.select(tab);
    }
}
