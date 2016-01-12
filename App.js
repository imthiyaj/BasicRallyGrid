Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
    	this._loadData();
    },

	_loadData: function() {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
    	    model: 'User Story',
    	    context: {
    	    	project: null,
    	        projectScopeUp: false,
    	        projectScopeDown: false},
    	    autoLoad: true,
    	    listeners: {
    	        load: function(myStore, data, success) {
    	        	this._loadGrid(myStore);
    	        },
    	        scope:this
    	    },
    	    fetch: ['FormattedID','Name', 'Owner', 'ScheduleState', 'Project']
		});
	},
	
	_loadGrid: function(myStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
        	store: myStore,
        	columnCfgs:['FormattedID','Name','Owner','ScheduleState','Project']
        });
        this.add(myGrid);
	}
});
