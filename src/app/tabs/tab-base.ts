import { Directive } from "@angular/core";
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

// Angular requires an explicit decorator on base classes that participate in
// dependency injection.
@Directive()
export abstract class TabBase {
	public tabName: string;
    public url: string;
	public iconName: string;
    
    constructor(tabName: string, iconName: string, public router: Router, public tabRegistry: TabRegistryService) {
        this.iconName = iconName;
        this.url = router.url;
        console.log(this.url);
        this.tabName = tabName;
        this.tabRegistry.activate(this);
    }
}
