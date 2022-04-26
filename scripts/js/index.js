'use strict';

var page_list = ['home', 'training', 'aikido', 'contact', 'gallery', 'resources'];

var register_route_handler = () => {

    window.onhashchange = (event) => {

        display_page_from_window_hash();
    };
};

var display_page_from_window_hash = () => {

    var hash = window.location.hash.substring(1);
    var element = document.getElementById('main_nav');

    if(hash === '')
    {
        return 'Root URL'
    }

    /* This whitelisting is vitally important for websec */
    if (!page_list.includes(hash))
    {
        console.log(hash)
        throw "Got a route we can't direct to";
    }

    fetch(`pages/${hash}.html`)
    .then(response => response.text())
    .then(html => {
        element.innerHTML = html;
    })
};

var close_burger = () => {

    document.getElementById("burger_checkbox").checked = false;
};
