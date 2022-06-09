$(() => {
    let $toc = $('#page-nav > ul');
    let $headers = $('article section');
    for (var i=0; i<$headers.length; i++) {
        $i = $($headers[i]);
        heading = $i.find('h2')[0].innerText;
        id = $i[0].id;
        $toc.append($(`<li><a href="#${id}">${heading}</a></li>`));
    }
});
