$(() => {
    let theme = null;
    let c = decodeURIComponent(document.cookie).split(';');
    c.forEach((i) => {
        let s = i.split('=')
        if (s[0] === 'theme') {
            theme = s[1]
        }
    })
    $root = $(document.documentElement)
    if (theme === null) {
        theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    $root.attr('data-theme', theme)

    toggleDark = function() {
        let theme = $root.attr('data-theme') === 'light' ? 'dark' : 'light'
        $root.attr('data-theme', theme)
        document.cookie = `theme=${theme}; SameSite=Lax; path=/;`;
    }

    clearThemePreference = function() {
        document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
})
