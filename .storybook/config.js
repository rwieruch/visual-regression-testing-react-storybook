import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// pick all stories.js files within the src/ folder
const req = require.context('../src', true, /stories\.js$/);

addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
