import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from "@angular/material/stepper";
import { MatChipsModule } from "@angular/material/chips";
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslatePipe } from '@ngx-translate/core';

// ngx-translate v18 removed `TranslateModule`; the pipe is standalone now, so
// it is re-exported here to keep it available to every declared component.
const SHARED = [
  MatSliderModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatMenuModule,
  MatStepperModule,
  MatChipsModule,
  TranslatePipe,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule,
    ...SHARED,
  ],
  exports: SHARED,
})
export class MaterialModule { }
