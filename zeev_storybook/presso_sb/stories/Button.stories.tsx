//basic imports
import React from 'react';
import {Meta,Story} from '@storybook/react';

//import of our button that we created
import {Button,Props} from '../src/Button';
import {action} from '@storybook/addon-actions';

//declartion of storybook data
const meta:Meta = {
    title: 'Button', //required
    component: Button, //the component that will be created
    //(2)
    argTypes:{
        onClick: {action: 'clicked'}, //new action, default behavior
        children: {
            defaultValue: 'Defualt Text',
        }
    }
}

export default meta;

//create template (2)
const Template:Story<Props> = (args)=><Button {...args}/>

////////////////////////////// the button now can be exported

//export const Default = ()=><Button variant='primary'>CLICK ME</Button> 
//create clone from line 25...
export const Default = Template.bind({});
//multiple buttons
//export const Secondary = ()=><Button variant='secondary'>I am secondary button</Button>;
export const Secondary = Template.bind({});

//sending args


Secondary.args = {
    variant: 'secondary',
    children: ' i am secondary button',
    onClick: action('Secondary click'), //phase2(after showing the addons) add import
}