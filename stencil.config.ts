import { sass } from '@stencil/sass';

export const config = {
  namespace: 'snt',
  copy: [
    {
      src: 'public'
    }
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/snt',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  globalScript: 'src/global/snt.ts',
  globalStyle: 'src/global/snt.css'
};
