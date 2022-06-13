$(() => {
    let $repeats = $('[repeat]')
    for (const i of $repeats) {
        $i = $(i)
        count = $i.attr('repeat')
        $i.removeAttr('repeat')
        $i.css('--id', count-1)
        for (var j=0; j<count-1; j++) {
            $e = $i.clone().css('--id', j)
            $i.after($e)
        }
    }

    let $parallax = $('.parallax')
    for (let i=0; i<$parallax.length; i++) {
        $i = $($parallax[i])
        console.log($i)
        if ($i.css('--offset').includes('auto')) {
            $i.css('--offset', ($i.parent()[0].getBoundingClientRect().top - 50) + 'px')
        }
        $i.css('z-index', i)
    }

    document.addEventListener('scroll', () => {
        $(document.documentElement).css('--page-scroll', window.scrollY + 'px')
    }, {passive:true})
})
