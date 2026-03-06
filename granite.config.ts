import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'barocode',
  brand: {
    displayName: '바로코드',
    primaryColor: '#3182F6',
  },
  web: {
    host: '192.168.45.61',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'tsc -b && vite build',
    },
  },
  permissions: [
    {
      name: 'clipboard',
      access: 'write',
    },
  ],
  outdir: 'dist',
  webViewProps: {
    type: 'partner',
  },
  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
  },
});
