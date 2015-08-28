/**
 * Popup iframe similar to OSX lookup
 * @param  {Object} options Specify plugin options
 * @return {Object}         this.
 */
jQuery.fn.quicklook = function(options){
    var settings = $.extend({
        action: 'click',
        autofit: true,
        height: 500,
        width: 500,
        bg_color: '#fff'
    }, options);
    var open = false;

    var $container  = jQuery('#quicklook_container');

    if(!$container.length){
        $container = jQuery('<div id="quicklook_container"><span class="close">x</span></div>');
        $container.append('<iframe id="quicklook_iframe" src=""/>');
        jQuery('body').append($container);

        jQuery('#quicklook_iframe').css({
            height: settings.height,
            width: settings.width,
            top: -settings.height
        });
        $container.css({
            height: 0,
            width: 0,
            'background-color': settings.bg_color
        });
    }

    var $close = jQuery('#quicklook_container .close');

    $close.on('click', function(e){
        if(open)
            showPop(e); // Will close as it is open.
    });

    var showPop = function(e){
        if(open){
            open = false;
            jQuery('#quicklook_iframe').css({
                transform: 'scale(0.0)',
                top: -settings.height
            });
            $close.hide();
            return $container.css({
                height: 0,
                width: 0
            });
        }
        var url = jQuery(e.target).attr('href');
        var x   = e.pageX;
        var y   = jQuery(window).height() - e.pageY;

        if(settings.height - y < 0){
            // Get down!
            $container.css({
                left: x,
                top: e.pageY
            });
        } else {
            $container.css({
                left: x,
                bottom: y
            });
        }

        var loaded = function(){
            jQuery('#quicklook_iframe').css({
                transform   : 'scale(1.0)',
                top         : 0
            });

            $container.css({
                height  : settings.height,
                width   : settings.width,
            });

            $container.show();
            $close.show();
            open = true;
        };

        jQuery('#quicklook_iframe').on('load', loaded);

        jQuery('#quicklook_iframe').attr('src', url);

    };

    return this.each(function(){
        if(settings.action === 'click'){
            jQuery(this).on('click', function(e){
                showPop(e);
                return false;
            });
        }else if(settings.action === 'hoer'){
            jQuery(this).on('hover', function(e){
                showPop(e);
            });
        }
    });
};
