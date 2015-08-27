/**
 * Popup iframe similar to OSX lookup
 * @param  {Object} options Specify plugin options
 * @return {Object}         this.
 */
jQuery.fn.ipop = function(options){
    var settings = $.extend({
        action: 'click',
        autofit: true,
        height: 500,
        width: 500,
        bg_color: '#fff'
    }, options);

    var container = jQuery('#ipop_container');
    if(!container.length){
        container = jQuery('<div id="ipop_container"/>');
        jQuery('body').append(container);
        container.css({
            height: 0,
            width: 0,
            'background-color': settings.bg_color
        });

    }

    var showPop = function(){
        container.css({
            height: settings.height,
            width: settings.width
        });
        container.show();
    };

    return this.each(function(){
        if(settings.action === 'click'){
            jQuery(this).on('click', function(e){
                showPop();
                return false;
            });
        }else if(settings.action === 'hoer'){
            jQuery(this).on('hover', function(e){
                showPop();
            });
        }
    });
};
