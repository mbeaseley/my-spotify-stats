import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ButtonSize, ButtonState, ButtonStyle, CCButton } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() href: string;
  @Input() size: ButtonSize = 'medium';
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() state: ButtonState = 'default';
  @Input() description: string;
  @Input() target: string;

  @Output() clicked = new EventEmitter<any>();

  button: CCButton;

  constructor(private changeDefectorRef: ChangeDetectorRef) {}

  /**
   * Emit button is successful clicked
   */
  onClick(): void {
    this.clicked.emit(true);
  }

  /**
   * Create button
   * @returns CCButton
   */
  createButton(): CCButton {
    return <CCButton>{
      clicked: this.clicked,
      size: this.size,
      style: this.buttonStyle,
      state: this.state,
      href: this.href,
      description: this.description,
      target: this.target,
      displayClasses: [
        `cc-button--size-${this.size}`,
        `cc-button--style-${this.buttonStyle}`,
        `cc-button--${this.state}`,
      ]
        .filter((d) => !!d)
        .join(' '),
    };
  }

  /**
   * On changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.state || changes.buttonStyle) {
      this.button = this.createButton();
      this.changeDefectorRef.markForCheck();
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.button = this.createButton();
  }
}
