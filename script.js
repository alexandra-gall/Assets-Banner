document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');
    const moreInfoLink = document.querySelector('.more-info-link');

    function handleKeydown(e) {
        if (e.key === 'Escape' && banner) {
            closeBtn.click();
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            banner.classList.add('removing');

            document.removeEventListener('keydown', handleKeydown);

            setTimeout(() => {
                banner.remove();
                console.log('Banner removed from DOM');
            }, 400);
        });
    }

    document.addEventListener('keydown', handleKeydown);

    if (moreInfoLink) {
        moreInfoLink.addEventListener('click', function() {
            console.log('More information link clicked - redirecting to finom.co');
        });
    }

    if (banner) {
        banner.addEventListener('mouseenter', function() {
            console.log('Banner hovered');
        });
    }

    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = Math.round(performance.now());
            console.log(`Banner loaded in ${loadTime}ms`);
        });
    }

    console.log('Assets Banner initialized successfully');
});
