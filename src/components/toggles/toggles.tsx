import { Component } from '@stencil/core';


@Component({
  tag: 'snt-toggles'
})
export class Toggles {

  render() {
    return (
      <ion-list>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Modes of Transportation</ion-label>
          </ion-item-divider>
          <slot name="modes" />
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Destination Types</ion-label>
          </ion-item-divider>
          <slot name="destinations" />
        </ion-item-group>
      </ion-list>
    );
  }
}
