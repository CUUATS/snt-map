import { Component } from '@stencil/core';


@Component({
  tag: 'snt-toggle-list'
})
export class ToggleList {

  render() {
    return (
      <ion-list>
        <snt-mode-toggle label="Pedestrian"></snt-mode-toggle>
        <snt-mode-toggle label="Bicycle"></snt-mode-toggle>
        <snt-mode-toggle label="Bus"></snt-mode-toggle>
        <snt-mode-toggle label="Vehicle"></snt-mode-toggle>
      </ion-list>
    );
  }
}
