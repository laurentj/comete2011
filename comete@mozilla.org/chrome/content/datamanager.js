
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

    addData: function (description, amount) {
        var element = this._records.createElement('record');
        element.setAttribute('description', description);
        element.setAttribute('amount', amount);
        this._records.documentElement.appendChild(element);
    },

    delData: function (idx) {

    },

    modifyData: function (idx, newDescription, newAmount) {

    }
}
