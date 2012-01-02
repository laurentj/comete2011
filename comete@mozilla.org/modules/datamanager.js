var EXPORTED_SYMBOLS = [ 'myDatamanager' ];

Components.utils.import("resource://gre/modules/Services.jsm");

function dataManager(){
    var parser = Components
            .classes["@mozilla.org/xmlextras/domparser;1"]
            .createInstance(Components.interfaces
                                        .nsIDOMParser);
    //var parser =  new DOMParser();
    var myXml = '<records />';

    this._records = parser.parseFromString(myXml,"text/xml");

    // ce document contient des élements
    //  <record description="" amount="" />
}

dataManager.prototype = {

    addData: function (description, amount) {
        var element = this._records.createElement('record');
        element.setAttribute('description', description);
        element.setAttribute('amount', amount);
        this._records.documentElement.appendChild(element);
        this._refresh();
    },

    delData: function (idx) {
        var elemRecords = this._records.documentElement;
        if (idx >= 0 && idx < elemRecords.childElementCount) {
            var element = elemRecords.children[idx];
            elemRecords.removeChild(element);
            this._refresh();
        }
    },

    modifyData: function (idx, newDescription, newAmount) {
        var elemRecords = this._records.documentElement;
        if (idx >= 0 && idx < elemRecords.childElementCount) {
            var element = elemRecords.children[idx];
            element.setAttribute('description', newDescription);
            element.setAttribute('amount', newAmount);
            this._refresh();
        }
    },
    
    _refresh : function() {
        //var s = new XMLSerializer();
        //window.alert( s.serializeToString(this._records) );
        Services.obs.notifyObservers(null, "datamanager-change", "");
    }
}

var myDatamanager = new dataManager();
