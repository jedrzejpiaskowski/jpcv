import { Component, ViewEncapsulation, inject } from "@angular/core";
import { TabInfo } from "./TabInfo";
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  standalone: false,
	selector: "app-tabs",
	templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TabsComponent {

	private readonly tabRegistry = inject(TabRegistryService);

	/** Reads straight from the registry signal, so the bar re-renders on any change. */
	readonly tabs = this.tabRegistry.tabs;

    closeTab(tab: TabInfo) {
        this.tabRegistry.close(tab);
    }

    selectTab(tab: TabInfo) {
        this.tabRegistry.select(tab);
    }
}
