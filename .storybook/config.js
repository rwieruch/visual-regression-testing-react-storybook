import { configure } from '@storybook/react';

// pick all stories.js files within the src/ folder
const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);