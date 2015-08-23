Polymer({

    is: 'router-util',

    router: function() {

        var sections = [];

        appState.navigation.sections.forEach(
            function(item) {
                sections.push(item.path);
            }
        );

        var context = this;

        setSection = function(section) {

            var currentIndex = sections.indexOf(section);
            var title = appState.navigation.sections[currentIndex].pageTitle;
            var componentName = appState.navigation.sections[currentIndex].component;

            context.$$('.section-content').innerHTML = '<' + componentName + '></' + componentName +'>';
            document.title = title;
            appState.navigation.currentPath = section;

        };

        resolveRoute = function() {

            var section = document.location.hash.split('/')[1];

            if(section && sections.indexOf(section) != -1) {
                setSection(section);
            } else if (!section) {
                setSection('homepage')
            } else {
                setSection('error')
            }

        };

        window.onpopstate = function() {
            resolveRoute();
        };

        window.onhashchange = function() {
            resolveRoute();
        };

        resolveRoute();

    },

    attached: function() {
        this.router();
    }

});