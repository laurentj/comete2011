
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
        var elemRecords = this._records.documentElement;
        if (idx >= 0 && idx < elemRecords.childElementCount) {
            var element = elemRecords.children[idx];
            elemRecords.removeChild(element);
        }
    },

    modifyData: function (idx, newDescription, newAmount) {
        var elemRecords = this._records.documentElement;
        if (idx >= 0 && idx < elemRecords.childElementCount) {
            var element = elemRecords.children[idx];
            element.setAttribute('description', newDescription);
            element.setAttribute('amount', newAmount);
        }
    }
}
