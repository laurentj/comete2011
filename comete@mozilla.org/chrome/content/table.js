


function rempliFormulaire() {
    // récupération de la listbox
    var listbox = document.getElementById('comptes');
    // récupération de l'élement sélectionné
    var item    = listbox.selectedItem;
    
    //récupération des valeurs dans chaque colonne
    var desc    = item.children[0].getAttribute('value');
    var montant = item.children[1].getAttribute('value');

    // remplissage des textboxs
    document.getElementById('tbDescription').value = desc;
    document.getElementById('tbMontant').value = montant;
}

function modifierLigne() {
    // récupération de la listbox
    var listbox = document.getElementById('comptes');
    // récupération de l'élement sélectionné
    var item    = listbox.selectedItem;
    
    if (item == null) {
        window.alert('Select an item');
        return;
    }

    // récuperer les valeurs
    var desc = document.getElementById('tbDescription').value;
    var montant = document.getElementById('tbMontant').value;
    
    item.children[0].setAttribute('value', desc);
    item.children[1].setAttribute('value', montant);
}

function supprimerLigne() {
    // récupération de la listbox
    var listbox = document.getElementById('comptes');
    // récupération de l'élement sélectionné
    var item    = listbox.selectedItem;
    
    if (item == null) {
        window.alert('Select an item');
        return;
    }
    
    if (window.confirm("Are you sure to delete?")) {
        listbox.removeChild(item);
        // nettoyer le formulaire
        document.getElementById('tbDescription').value = '';
        document.getElementById('tbMontant').value = '';
    }

}












