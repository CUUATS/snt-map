import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'snt-mode-toggle'
})
export class ModeToggle {
  @Prop() label: string;

  render() {
    return (
      <ion-item>
        <ion-label>{this.label}</ion-label>
        <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>
      </ion-item>
    );
  }
}
