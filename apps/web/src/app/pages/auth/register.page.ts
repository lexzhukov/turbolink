import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { MagicTitleComponent } from '../../components/magic-title.component';

@Component({
  imports: [MagicTitleComponent],
  selector: 'tbl-register-page',
  template: `
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <tbl-magic-title>Register</tbl-magic-title>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage {}
