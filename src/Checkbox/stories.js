import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Viewport } from '@storybook/addon-viewport';
import Checkbox from './';

class CheckboxStateful extends React.Component {
  state = {
    value: this.props.value,
  };

  onCheckboxChange = value => {
    this.setState({ value });

    this.props.onCheckboxChange(value);
  };

  render() {
    return (
      <Checkbox
        value={this.state.value}
        onCheckboxChange={this.onCheckboxChange}
      >
        {this.props.children}
      </Checkbox>
    );
  }
}

storiesOf('Checkbox', module)
  .add('with medium', () => {
    const value = true;
    const children = text('label', 'My Checkbox Label');
    const onCheckboxChange = action('toggle');

    return (
      <Viewport name="medium">
        <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
          {children}
        </CheckboxStateful>
      </Viewport>
    );
  })
  .add('with iphone6 Plus', () => {
    const value = true;
    const children = text('label', 'My Checkbox Label');
    const onCheckboxChange = action('toggle');

    return (
      <Viewport name="iphone6p">
        <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
          {children}
        </CheckboxStateful>
      </Viewport>
    );
  })
  .add('with checked', () => {
    const value = true;
    const children = text('label', 'My Checkbox Label');
    const onCheckboxChange = action('toggle');

    return (
      <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
        {children}
      </CheckboxStateful>
    );
  })
  .add('with unchecked', () => {
    const value = false;
    const children = text('label', 'My Checkbox Label');
    const onCheckboxChange = action('toggle');

    return (
      <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
        {children}
      </CheckboxStateful>
    );
  });
