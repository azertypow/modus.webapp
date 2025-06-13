declare global {
    interface Window {
        _paq: any[];
    }
}

export function initMatomo() {
    if (typeof window !== 'undefined') {
        console.log('init matomo')
        const _paq = (window as any)._paq = (window as any)._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u="//matomo.modus-ge.ch/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    }
}

