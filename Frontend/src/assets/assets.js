import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header from './header.png'
import search_icon from './search_icon.png'
import drinks_menu from './drinks_menu.png'
import chinese_menu from './chinese_menu.png'
import fastfood_menu from './fastfood_menu.png'
import south_indian_menu from './south_indian_menu.png'
import indian_sweet from './indian_sweet.png'


import north_indian_food4 from './north_indian_food4.png'
import rice_food5 from './rice_food5.png'
import panner_food2 from './panner_food2.png'
import dessert_food3 from './dessert_food3.png'
// import food1 from './food1.png'
import curated_food_2 from './curated_food_2.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'


import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import email from './email.png'
import password from './password.png'
import person from './person.png'


export const assets = {
    person,
    password,
    email,
    logo,
    basket_icon,
    header,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    
    
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    drinks_menu,
    chinese_menu,
    fastfood_menu,
    south_indian_menu,
    indian_sweet,
    north_indian_food4,
    rice_food5,
    panner_food2,
    dessert_food3,
    // food1,
curated_food_2
   
}
export const menu_list = [
    {
        menu_name: "Drinks",
        menu_image: drinks_menu
    },
    {
        menu_name: "Chinese",
        menu_image: chinese_menu
    },
    {
        menu_name: "Desserts",
        menu_image: indian_sweet
    },
    {
        menu_name: "Fastfood",
        menu_image: fastfood_menu
    },
    {
        menu_name: "South Indian",
        menu_image: south_indian_menu
    },
        {menu_name: "North Indian",
        menu_image: north_indian_food4
    }]

    export const food_list = [
        {
            _id: "1",
            name: "paneer",
            image: panner_food2,
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "North Indian"
        },
        {
            _id: "2",
            name: "Rashgulla",
            image: indian_sweet,
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Desserts"},
            {
                _id: "3",
                name: "Dosa",
                image: south_indian_menu,
                price: 240,
                description: "Food provides essential nutrients for overall health and well-being",
                category: "South Indian"
            },
            {
                _id: "4",
                name: "Burger",
                image: fastfood_menu,
                price: 100,
                description: "Food provides essential nutrients for overall health and well-being",
                category: "Fastfood"
            },
            {
                _id: "5",
                name: "Noddles",
                image: chinese_menu,
                price: 120,
                description: "Food provides essential nutrients for overall health and well-being",
                category: "Chinese"
            },
            {
                _id: "7",
                name: "custard",
                image: curated_food_2,
                price: 150,
                description: "Food provides essential nutrients for overall health and well-being",
                category: "Desserts"
            },
        ]


