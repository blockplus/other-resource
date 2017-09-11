import { sandboxOf } from 'angular-playground';
import { TitleComponent } from './title.component';

const context = {
  text: 'Hello there!',
  color: '#FF0000'
};

export default sandboxOf(TitleComponent)
  .add('with default text', {
    template: `<app-title></app-title>`,
    context
  })
  .add('with custom text', {
    template: `<app-title [text]="text"></app-title>`,
    context
  })
  .add('with custom text and custom color', {
    template: `<app-title [text]="text" [color]="color"></app-title>`,
    context
  });
