import { Component, ViewEncapsulation } from '@angular/core';
import { TabBase } from '../tabs/tab-base';
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  standalone: false,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent extends TabBase{

  public override iconName = 'timeline';

  constructor(router: Router, tabRegistry: TabRegistryService) {
    super('Experience', 'work_outline', router, tabRegistry);
      this.url = this.router.url;
  }
}
