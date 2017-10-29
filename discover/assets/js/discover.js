function jmblogenerator(button, popup) {

    var buttonElement = button;
    var popupElement = popup;

    var initialClick = false;
    var randomRange = 6;

    var sitesList = [
        ['https://www.toutestpolitique.fr/', false],
        ['http://simonae.fr/', false],
        ['http://www.crepegeorgette.com', false],
        ['https://www.youtube.com/user/GingerForce01', false],
        ['https://www.youtube.com/channel/UCbIOqOXBjp4QYNL2CGRDXLg', false],
        ['https://lesvendredisintellos.com/', false],
        ['https://www.lesinternettes.com/', false],
        ['http://www.duchess-france.org/', false],
        ['http://payetashnek.tumblr.com/', false],
        ['https://www.etsy.com/fr/shop/TheFive15?ref=l2-shopheader-name', false],
        ['http://www.girlpower3.com/', false],
        ['https://antisexisme.net/', false],
        ['http://www.interelles.com/', false],
        ['https://www.youtube.com/channel/UCcP3HpPMKiQHsj7qDzu3q6g', false],
        ['https://www.youtube.com/channel/UCScUARAGiZQkPHpOHuS_drA', false],
        ['http://www.decadree.com/', false],
        ['https://www.buzzfeed.com/meufs/', false],
        ['https://www.youtube.com/c/KeyholesSnapshots', false],
        ['https://www.youtube.com/channel/UCdnLGVqAi5QIQ2SunCsEsDA', false],
        ['https://twitter.com/FeminiBooks', false],
        ['http://cheekmagazine.fr/', false],
        ['https://lesglorieuses.fr/', false],
        ['http://bafe.fr/', false],
        ['http://lesquestionscomposent.fr/', false],
        ['https://mrsroots.fr/', false],
        ['http://www.isabelle-alonso.com/gonflees-a-blog/', false],
        ['https://mwasicollectif.com/', false],
        ['https://joaogabriell.com/', false],
        ['https://wakeningprincess.wordpress.com/', false],
        ['https://badasseszine.wordpress.com/', false],
        ['http://www.barbieturix.com/', false],
        ['https://pr0z3.wordpress.com/', false],
        ['https://chroniquesdelie.wordpress.com/', false],
        ['https://miroslavazetkin.wordpress.com/', false],
        ['http://www.mhfreq.org/', false],
        ['https://excursusblog.wordpress.com/', false],
        ['https://emmaclit.com/', false]


    ];

    var sites = null;

    var init = function () {

        button.onclick = onButtonClick;

        // if ( !swfobject.hasFlashPlayerVersion("1") ) {
        // 	removeFlashWebsites();
        // }

        sites = sitesList.slice(0);

        if (supportsHtmlStorage() === true) {

            if (localStorage['sites-new'] !== undefined) {
                loadSites();
            }
        }
    };

    var removeFlashWebsites = function () {

        var i, site;
        var newList = [];

        for (i = 0; i < sitesList.length; i++) {

            site = sitesList[i];
            if (site[1] === false) {
                newList.push(site)
            }
        }

        sitesList = newList;
    };

    var selectWebsite = function () {

        var site, range, index;

        range = randomRange > sites.length ? sites.length : randomRange;
        index = Math.floor(Math.random() * range);

        site = sites[index];
        sites.splice(index, 1);

        return site;
    };

    var openSite = function (url) {
        window.open(url);
    };

    var onButtonClick = function () {

        _gaq.push(['_trackEvent', 'user', 'clicks', 'button']);

        if (initialClick === false) {
            document.getElementById('joint').innerHTML = 'Découvrir un autre projet ultra cool !';
            initialClick = true;
        }

        var url = selectWebsite()[0];
        openSite(url);

        if (sites.length == 0) {

            // If the browser doesn't support flash. Remove flash websites from the list.
            // if ( !swfobject.hasFlashPlayerVersion("1") ) {
            // 	removeFlashWebsites();
            // }

            sites = sitesList.slice(0);
        }

        storeSites();
    };

    var storeSites = function () {
        localStorage['sites-new'] = JSON.stringify(sites);
    }

    var loadSites = function () {
        sites = JSON.parse(localStorage['sites-new']);
    };

    init();
}