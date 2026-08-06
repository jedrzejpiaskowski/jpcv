import { Injectable, inject, signal } from "@angular/core";
import { TabBase } from "../tabs/tab-base";
import { TabInfo } from '../tabs/TabInfo';
import { Router } from '@angular/router';

@Injectable({
	providedIn: "root",
})
export class TabRegistryService {

	private readonly router = inject(Router);

	// Tabs are held in a signal rather than pushed to subscribers through a
	// callback. `activate()` runs from a routed component's constructor, which
	// is part of the router's activation — by then the tab bar has already been
	// checked for that cycle, and a plain property write gives Angular no
	// reason to check it again. A signal write always schedules one.
	private readonly _tabs = signal<TabInfo[]>([]);

	/** Currently open tabs, in display order. */
	readonly tabs = this._tabs.asReadonly();

	public activate(tab: TabBase) {
		tab.tabName = 'Tabs.' + tab.tabName;
		const current = this._tabs();

		let matchingTab = current.find(t => t.name === tab.tabName);
		if (!matchingTab) {
			matchingTab = new TabInfo(tab.tabName, tab.url, tab.iconName);
			this._tabs.set([...current, matchingTab]);
		}

		this.setActive(matchingTab);
	}

	public close(tab: TabInfo) {
		const current = this._tabs();
		if (current.length <= 1) {
			return; // do not remove the last tab
		}

		const match = current.find(t => t.name === tab.name);
		if (!match) {
			return;
		}

		const wasActive = match.active;
		const index = current.indexOf(match);
		const remaining = current.filter(t => t !== match);
		this._tabs.set(remaining);

		if (wasActive) {
			this.select(remaining[Math.min(index, remaining.length - 1)]);
		} else {
			this.setActive();
		}
	}

	public select(tab: TabInfo) {
		this.router.navigateByUrl(tab.url);
		this.setActive(tab);
	}

	private setActive(activeTab: TabInfo | null = null) {
		const tabs = this._tabs();
		const nextActive = activeTab ?? tabs.find(t => t.active);

		tabs.forEach(ti => ti.active = false);
		if (nextActive) {
			nextActive.active = true;
		}

		// Publish a new array reference so readers see the updated flags.
		this._tabs.set([...tabs]);
	}
}
