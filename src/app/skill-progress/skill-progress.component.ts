import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent {

  @Input() skillName = '';

  // Templates pass this as a static attribute (skillLevel='60'), so coerce the
  // string to a number rather than requiring a binding at every call site.
  @Input({ transform: numberAttribute }) skillLevel = 0;
}
