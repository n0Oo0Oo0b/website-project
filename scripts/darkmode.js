$(() => {
    $root = $(document.documentElement)
    $root.attr('data-theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    toggleDark = function() {
        $root.attr('data-theme', $root.attr('data-theme') === 'light' ? 'dark' : 'light')
    }
})