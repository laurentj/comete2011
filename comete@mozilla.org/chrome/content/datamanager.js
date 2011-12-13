
function dataManager(){
    var parser = Components
            .classes["@mozilla.org/xmlextras/domparser;1"]
            .createInstance(Components.interfaces
                                        .nsIDOMParser);
    var myXml = '<records />';

    this._records = parser.parseFromString(myXml,"text/xml");

    // ce document contient des élements
    //  <record description="" amount="" />
}

dataManager.prototype = {

    addElement: function (description, amount) {

    },

    delElement: function (idx) {

    },

    modifyElement: function (idx, newDescription, newAmount) {

    }
}
