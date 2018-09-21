import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'snt-toggle'
})
export class Toggle {
  @Prop() value: string;
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() type: 'mode' | 'destination' = 'destination';

  @Event() sntToggleChange: EventEmitter;

  changeHandler(e: CustomEvent) {
    this.sntToggleChange.emit({
      checked: e.detail.checked,
      type: this.type,
      value: this.value
    });
  }

  render() {
    return (
      <ion-item>
        { (this.icon) ?
          <ion-icon name={this.icon} slot="start"></ion-icon> : null }
        <ion-label>{this.label}</ion-label>
        <ion-toggle slot="end" value={this.value} checked
          color={(this.type == 'mode') ? 'primary' : 'secondary'}
          onIonChange={(e) => this.changeHandler(e)}></ion-toggle>
      </ion-item>
    );
  }
}
