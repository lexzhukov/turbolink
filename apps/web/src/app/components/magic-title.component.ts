import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

import { cn } from '../utils/cn';

const magicTitleVariants = cva(
  'animate-gradient-x bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-center font-extrabold leading-tight text-transparent inline-block',
  {
    variants: {
      size: {
        small: 'text-2xl',
        medium: 'text-4xl',
        large: 'text-6xl',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

type MagicTitleVariants = VariantProps<typeof magicTitleVariants>;

@Component({
  selector: 'tbl-magic-title',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '_computedClass()',
  },
})
export class MagicTitleComponent {
  public readonly size = input<MagicTitleVariants['size']>();
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    cn(magicTitleVariants({ size: this.size() }), this.userClass()),
  );
}
