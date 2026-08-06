import { Component } from '@angular/core';
import { TabBase } from '../tabs/tab-base';
import { Router } from '@angular/router';
import { TabRegistryService } from '../services/tab-registry.service';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends TabBase {
  public override iconName = 'alternate_email';

  constructor(router: Router, tabRegistry: TabRegistryService) {
    super('Contact', 'alternate_email', router, tabRegistry);
   }
}
