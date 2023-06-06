import calabrese from './images/calabrese.png';
import banana from './images/banana.png';
import nuts from './images/nuts.png';
import tomato from './images/tomato.png';
import bean from './images/bean.png';
import hazelnut from './images/hazelnut.png';
import eggs from './images/eggs.png';
import rusk from './images/rusk.png';
import beanOrg from './images/beanOrganik.png';
import hazelnutBr from './images/hazelnutBrown.png';
import onion from './images/onion.png';
import cabbage from './images/cabbage.png';

const products = [
    {
        img: calabrese,
        tag: 'Vegetable',
        title:'Calabrese Broccoli',
        price: 13.00,
        oldprice: 20.00,
        id: 1
    },
    
    {
        img: banana,
        tag: 'Fresh',
        title:'Fresh Banana Fruites',
        price: 14.00,
        oldprice: 20.00,
        id: 2
    },

    {
        img: nuts,
        tag: 'Millets',
        title:'White Nuts',
        price: 15.00,
        oldprice: 20.00,
        id: 3
    },

    {
        img: tomato,
        tag: 'Vegetable',
        title:'Vegan Red Tomato',
        price: 13.00,
        oldprice: 20.00,
        id: 4
    },

    {
        img: bean,
        tag: 'Health',
        title:'Mung Bean',
        price: 11.00,
        oldprice: 20.00,
        id: 5
    },

    {
        img: hazelnut,
        tag: 'Nuts',
        title:'Brown Hazelnut',
        price: 12.00,
        oldprice: 20.00,
        id: 6
    },

    {
        img: eggs,
        tag: 'Fresh',
        title:'Eggs',
        price: 17.00,
        oldprice: 20.00,
        id: 7
    },

    {
        img: rusk,
        tag: 'Fresh',
        title:'Zelco Suji Elaichi Rusk',
        price: 13.00,
        oldprice: 20.00,
        id: 8
    },

    {
        img: beanOrg,
        tag: 'Vegetable',
        title:'Mung Bean',
        price: 11.00,
        oldprice: 20.00,
        id: 9,
        offer: true
    },

    {
        img: hazelnutBr,
        tag: 'Vegetable',
        title:'Brown Hazelnut',
        price: 12.00,
        oldprice: 20.00,
        id: 10,
        offer: true
    },

    {
        img: onion,
        tag: 'Vegetable',
        title:'Onion',
        price: 12.00,
        oldprice: 20.00,
        id: 11,
        offer: true
    },

    {
        img: cabbage,
        tag: 'Vegetable',
        title:'Cabbage',
        price: 12.00,
        oldprice: 20.00,
        id: 12,
        offer: true
    }
]

export {products};