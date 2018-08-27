(function($){

    let $doc            = $(document);

    let openClass       = 'open';
    let activeClass     = 'active';
    let focusClass      = 'focus';


    /**
     * [toggleMainNav description]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */

    let $mainNav            = $('#main-nav');
    let $mainView           = $('.app-main-container');

    function toggleMainNav(e) {
        e.preventDefault();
        $mainNav.toggleClass(openClass);
        $mainView.toggleClass(openClass);

        var clickAway = function (e) {
            if ($mainNav[0] !== e.target
            &&  !$.contains($mainNav[0], e.target)
            ) {
                $mainNav.removeClass(openClass);
                $mainView.removeClass(openClass);
                $(document.body).off('click', clickAway);
            }
        };

        $(document.body).on('click', clickAway);
    }


    /**
     * [syntaxHighlight description]
     * @return {[type]} [description]
     */

    function syntaxHighlight() {
        let $this   = $(this);
        let lang    = $this.prop('lang');
        let code    = $this.html();

        code = code
            .replace(/<br>/g, 'BRBRBR')
            .replace(/\&nbsp;/g, ' ')
            .replace(/\&lt;/g, '<')
            .replace(/\&gt;/g, '>')
            ;

        var html = Prism.highlight(code, Prism.languages[lang]);

        html = html
            .replace(/BRBRBR/g, '<br>')
            ;

        $this.html(html);
    }


    /**
     * Toggles active state on main nav items
     * @param  {event} e event object
     */

    function toggleMainNavItems(e) {
        e.preventDefault(); // stop the site from navigating away from demo
        $('.app-nav-link a').removeClass(activeClass);
        $(this).toggleClass(activeClass);
    }


    /**
     * Triggers focus event on input groups
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    function triggerInputGroup(e) {
        let targetTag = e.target.tagName.toLowerCase();

        if (targetTag !== 'input'
        ||  targetTag !== 'select'
        ||  targetTag !== 'button'
        ) {
            $(this).siblings('input, select').trigger('focus');
        }
    }


    /**
     * [toggleFocus description]
     * @return {[type]} [description]
     */
    function toggleFocus(e) {

        let $this = $(this);

        let parent = $this.parent();

        if (parent.hasClass('input-group')) {
            parent.hasClass(focusClass)
                ? parent.removeClass(focusClass)
                : parent.addClass(focusClass)
                ;
            ;
        }
    }


    // HIGHLIGHT CODE SAMPLES
    $('pre code').each(syntaxHighlight);

    // DEFINE EVENT HANDLERS FOR PAGE
    $doc.on('click', '#main-nav-toggle', toggleMainNav);
    $doc.on('click', '.app-nav-link a', toggleMainNavItems);

    // trigger focus when clicking on non-form elements in .input-groups
    $doc.on('click', '.input-group *', triggerInputGroup);

    $doc.on('focus', 'input, textarea', toggleFocus);
    $doc.on('blur', 'input, textarea', toggleFocus);

})(jQuery);
