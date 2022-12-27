//basic imports
import React, { Component } from 'react';
import {Meta, Story} from '@storybook/react'

//import of our button that we will create :)
import {Button,Props} from "../src/Button";
import {action} from "@storybook/addon-actions";

//declaration of storybook data
const meta:Meta = {
    title: 'Button',
    component:Button,
    argTypes:{
        onclick:{action:'clicked'},
        children:{
            defaultValue: 'I am a button',
        }
    }
}

export default meta;

// export const Defualt= ()=><Button variant='primary'>Kill Leon</Button>
// export const Secondary = ()=><Button variant='secondary'>i am another button</Button>

const Template:Story<Props> = (args)=><Button {...args}/>

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
    variant : 'secondary',
    children: 'i am another button',
    onClick: action('Kill Leon'),
}