import { Component, Listen } from '@stencil/core';
import { _t } from '../../i18n/i18n';


@Component({
  tag: 'snt-app',
  styleUrl: 'app.scss'
})
export class App {
  destinations: [string, string, boolean][] = [
    ['grocery', 'cart', true],
    ['job', 'briefcase', true],
    ['park', 'leaf', true],
    ['retail', 'basket', true],
    ['restaurant', 'pizza', true],
    ['school', 'school', true]
  ];
  modes: [string, string, boolean][] = [
    ['pedestrian', 'walk', true],
    ['bicycle', 'bicycle', true],
    ['bus', 'bus', true],
    ['vehicle', 'car', true]
  ];

  @Listen('sntToggleChange')
  togglechangeHandler(e: CustomEvent) {
    let items = (e.detail.type === 'mode') ? this.modes : this.destinations;
    for (let item of items) {
      if (item[0] === e.detail.value) {
        item[2] = e.detail.checked;
        break;
      }
    }
    this.updateMapStyle();
  }

  updateMapStyle() {
    // TODO: Update the map style.
  }

  getDestinationToggles() {
    return this.destinations.map(([mode, icon]) =>
      <snt-toggle slot="destinations" type="destination"
        label={_t(`snt.app.destinations.${mode}`)}
        icon={icon} value={mode}>
      </snt-toggle>);
  }

  getModeToggles() {
    return this.modes.map(([mode, icon]) =>
      <snt-toggle slot="modes" type="mode"
        label={_t(`snt.app.modes.${mode}`)}
        icon={icon} value={mode}>
      </snt-toggle>);
  }

  render() {
    return (
      <gl-app label={_t('snt.app.title')} menuLabel={_t('snt.app.options')}>
        <gl-fullscreen slot="end-buttons"></gl-fullscreen>
        <gl-map
            longitude={-88.228878} latitude={40.110319} zoom={12} maxzoom={22}>
          <gl-style url="/snt/public/style.json" id="app"></gl-style>
          <gl-style url="https://maps.cuuats.org/basemaps/basic/style.json"
            basemap={true} enabled={true}></gl-style>
        </gl-map>
        <snt-toggles slot="menu">
          {this.getModeToggles()}
          {this.getDestinationToggles()}
        </snt-toggles>
      </gl-app>
    );
  }
}
