// toc = table of contents
let headerName;
let $toc;

$(() => {
    $toc = $('#toc-list');
    
    let $headers = $('.article-heading');
    for (var i=0; i<$headers.length; i++) {
        headerName = $headers[i].textContent;
        
        // Pointer 80px above heading to compensate for sticky header
        $(`<div class="heading-pointer" id="${headerName}">`)
            .prependTo($headers[i]);
        
        // Add link to toc list
        $('<li class="toc-item">')
            .append($(`<a class="nav-link" href="#${headerName}">${headerName}</a>`))
            .appendTo($toc);
    }
});
