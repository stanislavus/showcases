import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
    title: 'Example/Button',
    argTypes: {
        label: { defaultValue: 'Button' },
    },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary Button',
};

Primary.parameters = {
    jest: ['Button.test.tsx'],
};

export const NewButton = Template.bind({});

NewButton.parameters = {
    jest: { disable: true },
};