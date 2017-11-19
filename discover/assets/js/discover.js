function jmblogenerator(button, popup) {

    var buttonElement = button;
    var popupElement = popup;

    var initialClick = false;
    var randomRange = 6;

    var sitesList = [
        ['https://www.toutestpolitique.fr/', false],
        ['http://simonae.fr/', false],
        ['http://www.crepegeorgette.com', false],
        ['https://www.youtube.com/channel/UC-Gakb-CMSC2zrHJsJh1L4w', false],
        ['https://www.youtube.com/channel/UCtH4Cwe2r3XE0_thrZN8WeQ', false],
        ['http://lesstearsmoreink.blogspot.fr/?m=1', false],
        ['https://blog.courrierinternational.com/ma-decouverte-de-l-inde/', false],
        ['https://twitter.com/NKALIWORKS', false],
        ['https://www.youtube.com/channel/UCH3Hp3WAm0iGQBi_csusoUg', false],
        ['https://www.youtube.com/channel/UC449urQ5ZYrKt4C5pLCjl0w', false],
        ['https://www.youtube.com/channel/UCDe2Wq7XQMXmVyiqE9cI95g', false],
        ['https://www.youtube.com/user/GingerForce01', false],
        ['https://www.youtube.com/channel/UCbIOqOXBjp4QYNL2CGRDXLg', false],
        ['https://lesvendredisintellos.com/', false],
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
        ['https://emmaclit.com/', false],
        ['http://quoidemeuf.net/', false],
        ['http://uniqueensongenre.eklablog.fr/', false],
        ['https://www.facebook.com/leschroniqueslou/', false],
        ['https://www.youtube.com/playlist?list=PL397e9fZhTd6Jdi6OBv8oMviMY_lowAIm', false],
        ['http://legangmisandre.tumblr.com/', false],
        ['https://kuvshinov_ilya.artstation.com/', false],
        ['https://www.youtube.com/channel/UCjb_3mFB6X_ZADMPkuQHa8w', false],
        ['http://clhee.org/', false],
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
        ['https://auxmarchesdupalais.wordpress.com/', false],
        ['https://www.youtube.com/channel/UCVcg0ify3ghouZVCYJMpDSg', false],
        ['https://www.youtube.com/channel/UCYdoxYVgBPq3uxznw3B2bpg', false],
        ['https://www.youtube.com/channel/UC4grt4ctnaGKMpnxzP51tWA', false],
        ['http://roseaux.co/', false],
        ['http://dialna.fr', false],
        ['https://twitter.com/ComicWhales?s=09', false],
        ['https://www.youtube.com/user/bookwormsita', false],
        ['https://twitter.com/GSTQBijoux?s=09', false],
        ['https://www.youtube.com/channel/UC3vDaOJBY53NB7HNuIk4X2w', false],
        ['http://lefloconmignon.tictail.com/', false],
        ['https://www.facebook.com/QueerBracelets/', false],
        ['https://www.youtube.com/user/bookwormsita', false],
        ['https://motrices.tumblr.com', false],
        ['http://www.femmes-plurielles.be', false],
        ['https://twitter.com/AleeGribouillis', false],
        ['http://hairnah.com', false],
        ['https://www.youtube.com/channel/UCVf2py0nEmhiUH7pryhZdyg', false],
        ['https://dare-bylouise.com/', false],
        ['https://www.facebook.com/MeufPanam', false]
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