


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














