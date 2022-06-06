$(() => {
    document.addEventListener('scroll', () => {
        $(document.documentElement).css('--page-scroll', window.scrollY + 'px')
    }, {passive:true})
})