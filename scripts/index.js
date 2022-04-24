'use strict';

var page_list = ['training', 'aikido', 'contact', 'gallery', 'resources'];

var page_html_content = {};

var preload_pages = () => {


    for (let page of page_list)
    {
        fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            page_html_content[page] = html;
        })
    }
};

var register_route_handler = () => {

    window.onhashchange = (event) => {

        display_page_from_window_hash();
    };
};

var display_page_from_window_hash = () => {

    var hash = window.location.hash.substring(1);

    if (!(hash in page_html_content))
    {
        throw "Got a route we can't direct to";
    }
    
    var element = document.getElementById('main_nav');
    element.innerHTML = page_html_content[hash]
};
