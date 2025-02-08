import { AdvancedType } from 'easy-email-core';
export const defaultMenus = [
    {
        label: 'Content',
        active: true,
        blocks: [
            {
                type: AdvancedType.TEXT
            },
            {
                type: AdvancedType.IMAGE,
                payload: { attributes: { src: `/static/image-placeholder.svg` } }
            },
            {
                type: AdvancedType.BUTTON
            },
            {
                type: AdvancedType.SOCIAL
            },
            {
                type: AdvancedType.DIVIDER
            },
            {
                type: AdvancedType.SPACER
            },
            {
                type: AdvancedType.WRAPPER
            }
        ]
    },
    {
        label: 'Layout',
        active: true,
        displayType: 'column',
        blocks: [
            {
                title: '2 columns',
                payload: [['50%', '50%']]
            },
            {
                title: '3 columns',
                payload: [['33.33%', '33.33%', '33.33%']]
            },
            {
                title: '4 columns',
                payload: [['25%', '25%', '25%', '25%']]
            }
        ]
    }
];
