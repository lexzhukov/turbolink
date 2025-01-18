import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { MagicTitleComponent } from '../../components/magic-title.component';

@Component({
  imports: [RouterLink, ButtonModule, MagicTitleComponent],
  selector: 'tbl-home-page',
  template: `
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="flex flex-col items-center gap-4">
        <tbl-magic-title size="large">Turbolink</tbl-magic-title>
        <a pButton routerLink="/register">Start for free</a>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
