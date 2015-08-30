Polymer({

    is: 'common-layout',

    properties: {

        type: {
            type: String,
            value: 'wide'
        },
        styles: {
            type: String,
            computed: 'getStyles(type)'
        }

    },

    getStyles: function (type) {

        switch (type) {

            case 'wide':
                return 'wide-' + type;
                break;

            case 'tablet':
                return 'tablet-' + type;
                break;

            case 'mobile':
                return 'mobile-' + type;
                break;

            default:
                return 'wide-' + type;

        }

    }

});