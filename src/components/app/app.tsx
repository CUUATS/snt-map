import { Component } from '@stencil/core';


@Component({
  tag: 'snt-app',
  styleUrl: 'app.scss'
})
export class App {

  render() {
    return (
      <gl-app label="Sustainable Neighborhoods">
        <gl-fullscreen slot="end-buttons"></gl-fullscreen>
        <gl-map
            longitude={-88.228878} latitude={40.110319} zoom={12} maxzoom={22}>
          <gl-style url="/snt/public/style.json" id="app"></gl-style>
          <gl-style url="https://maps.cuuats.org/basemaps/basic/style.json"
            basemap={true} name="Basic" enabled={true}></gl-style>
        </gl-map>
        <snt-toggle-list slot="menu"></snt-toggle-list>
      </gl-app>
    );
  }
}
