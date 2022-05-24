const appearStart = 380;
const appearLength = 100;
let $header;

$(() => {
    $header = $('#scroll-header');

    document.addEventListener('scroll', () => {
        s = window.scrollY;
        $header.css('top', s+'px');
        if (s < appearStart) { // Hidden
            m = -1;
        } else if (s <= appearStart + appearLength) { // Appearing
            m = -1 + ((s - appearStart) / appearLength);
        } else { // Shown
            m = 0;
        }
        $header.css('margin-top', ($header.height()+1)*m + "px");
    }, {passive: true}); // passive to avoid lag
});