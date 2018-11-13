import { Component, Listen } from '@stencil/core';
import { _t } from '../../i18n/i18n';


@Component({
  tag: 'snt-app',
  styleUrl: 'app.scss'
})
export class App {
  style?: HTMLGlStyleElement;
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

  componentDidLoad() {
    this.updateMapStyle();
  }

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
    let sum : (string | string[])[] = ['+'];
    this.modes.forEach(([mode, _icon, enabled]) => {
      if (enabled) this.destinations.forEach(([_dest, _icon, enabled]) => {
          // if (enabled) sum.push(['get', `${mode}_${dest}`]);
          if (enabled) sum.push(['get', `${mode}`]);
      });
    });

    let json = {...this.style.json};
    for (let layer of json.layers) {
      if (layer.id === 'segment') {
        layer.paint['line-color'][2] = (sum.length < 2) ?
          ['literal', 0] : ['/', sum, sum.length - 1];
        this.style.json = json;
        return;
      }
    }
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
          <gl-style ref={(r: HTMLGlStyleElement) => this.style = r}
            url="/snt/public/style.json" id="app"></gl-style>
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
