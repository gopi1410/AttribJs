(function($) {
    $.fn.getAttributes = function() {
        var attributes = {}; 
        
        if(!this.length)
            return this;
        
        $.each(this[0].attributes, function(index, attr) {
            attributes[attr.name] = attr.value;
        }); 
        
        return attributes;
    };
})(jQuery);