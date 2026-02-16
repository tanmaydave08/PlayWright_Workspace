// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config =({
  testDir: './e2e',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html', 
  /* Run tests in files in parallel */
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    viewport: { width: 1280, height: 720 },
    trace:'retain-on-failure',
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    
  },
});
module.exports = config;

