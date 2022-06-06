$(() => {
    let $parallax = $('.parallax')
    for (const i of $parallax) {
        $i = $(i)
        console.log(i.offsetTop)
        if ($i.css('--offset').includes('auto')) {
            $i.css('--offset', i.offsetTop + 'px')
        }
    }

    document.addEventListener('scroll', () => {
        $(document.documentElement).css('--page-scroll', window.scrollY + 'px')
    }, {passive:true})
})