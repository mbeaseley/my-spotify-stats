import { EventEmitter } from '@angular/core';

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonStyle = 'primary' | 'secondary' | 'text-link';

export type ButtonState = 'default' | 'disabled';

export interface CCButton {
  href: string;
  size: ButtonSize;
  clicked: EventEmitter<any>;
  style: ButtonStyle;
  state: ButtonState;
  displayClasses: string;
  description: string;
  target: string;
}
