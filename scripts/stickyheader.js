const appearStart = 430;
const appearLength = 100;
let $header, $sidebar;

$(() => {
    $header = $('#scroll-header');
    $sidebar = $('#sidebar');

    document.addEventListener('scroll', () => {
        let s = window.scrollY;
        let m;
        $header.css('top', s +'px');

        if (s <= appearStart) { // Hidden
            m = -1;
            $sidebar.css('top', '20px')
        } else if (s <= appearStart + appearLength) { // Appearing
            m = -1 + ((s - appearStart) / appearLength);
        } else { // Shown
            m = 0;
        }
        $header.css('margin-top', ($header.height())*m + "px");
        $sidebar.css('margin-top', ($header.height())*(m+1) + "px");
        if (s > appearStart) {
            $sidebar.css('top', s - appearStart + 20 + "px")
        }
    }, {passive: true}); // passive to avoid lag
});