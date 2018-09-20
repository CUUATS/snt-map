import { TestWindow } from '@stencil/core/testing';
import { App } from './app';

describe('snt-app', () => {
  it('should build', () => {
    expect(new App()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSntAppElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [App],
        html: '<app-root></app-root>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
