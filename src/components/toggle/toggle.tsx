import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'snt-toggle'
})
export class Toggle {
  @Prop() attribute: string;
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() type: 'mode' | 'destination' = 'destination';

  render() {
    return (
      <ion-item>
        { (this.icon) ?
          <ion-icon name={this.icon} slot="start"></ion-icon> : null }
        <ion-label>{this.label}</ion-label>
        <ion-toggle slot="end" value={this.attribute} checked
          color={(this.type == 'mode') ? 'primary' : 'secondary'}></ion-toggle>
      </ion-item>
    );
  }
}
