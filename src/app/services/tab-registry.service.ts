import { Injectable } from "@angular/core";
import { TabBase } from "../tabs/tab-base";
import { TabInfo } from '../tabs/TabInfo';
import { Router } from '@angular/router';

@Injectable({
	providedIn: "root",
})
export class TabRegistryService {

    tabInfos: TabInfo[] = [];
    onTabChanged?: (t: TabInfo[]) => void;
        
    // private readonly onTabActivated = new LiteEvent<TabInfo>();
    // public get TabActivated() { return this.onTabActivated.expose(); }
	constructor(private router: Router) {

    }

	public activate(tab: TabBase) {
        tab.tabName = 'Tabs.' + tab.tabName;
        console.log(tab.tabName);
        let matchingTab = this.tabInfos.find(t => t.name === tab.tabName);
        if (!matchingTab) {
            matchingTab = new TabInfo(tab.tabName, tab.url, tab.iconName);
            this.tabInfos.push(matchingTab)
        }
        this.updateTabs(matchingTab);
    }

    public close(tab: TabInfo) {
        console.log('About to clsoe: ' + tab.name);
        console.log(this.tabInfos.length);
        if (this.tabInfos.length > 1) { // do not remove last tab
            const match = this.tabInfos.find(t => t.name === tab.name);
            if (match) {
                const switchTabs = match.active;
                const index = this.tabInfos.indexOf(match);
                this.tabInfos.splice(index, 1);

                if (switchTabs) {
                    const nextTabIndex = Math.min(index, this.tabInfos.length - 1);
                    console.log('Next tab index ' + nextTabIndex);
                    this.select(this.tabInfos[nextTabIndex]);
                } else {
                    this.updateTabs();
                }
            }
        }
    }

    public select(tab: TabInfo) {
        console.log('Selecting');
        console.log(tab);
        this.router.navigateByUrl(tab.url);
        this.updateTabs(tab);
    }

    public subscribe (onTabChange: (tabs: TabInfo[]) => void) {
        console.log('subscribing');
        this.onTabChanged = onTabChange;
    }

    private updateTabs(activeTab: TabInfo | null = null) {
        const nextActive = activeTab ?? this.tabInfos.find(t => t.active === true);
        console.log('updating');
        this.tabInfos.forEach(ti => ti.active = false);
        if (nextActive) {
            nextActive.active = true;
        }

        if (this.onTabChanged) {
            this.onTabChanged(this.tabInfos);
        }
    }
}
