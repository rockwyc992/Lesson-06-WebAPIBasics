(function(window) {
    'use strict';

    function Controller(model, view) {
        this.model = model;
        this.view = view;
        this.task = null;
    }

    Controller.prototype.start = function() {
    }

    // Export to window
    window.Alarm = window.Alarm || {};
    window.Alarm.Controller = Controller;
})(window);

