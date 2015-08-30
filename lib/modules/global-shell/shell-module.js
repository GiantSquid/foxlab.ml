Polymer({

    is: 'shell-module',

    properties: {

        menuItems: {
            type: Array,
            value: appState.navigation.mainMenu
        }

    }
});