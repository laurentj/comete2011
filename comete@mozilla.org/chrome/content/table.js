
Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://comete/datamanager.js");

function initApp() {

    var listbox = document.getElementById('comptes');
    listbox.builder.datasource = myDatamanager._records;
    
    Services.obs.addObserver(listboxObserver, "datamanager-change", false);
}

window.addEventListener('load', initApp, false);

var listboxObserver = {
    observe : function (subject , topic, data) {
        var listbox = document.getElementById('comptes');
        listbox.builder.rebuild();
    }
}





function rempliFormulaire() {
    // récupération de la listbox
    var listbox = document.getElementById('comptes');
    // récupération de l'élement sélectionné
    var item    = listbox.selectedItem;
    
    //récupération des valeurs dans chaque colonne
    var desc    = item.children[0].getAttribute('value');
    var montant = item.children[1].getAttribute('value');

    // remplissage des textboxs
    var form = document.getElementById('rform');
    form.description = desc;
    form.montant = montant;
    //document.getElementById('tbDescription').value = desc;
    //document.getElementById('tbMontant').value = montant;
}














