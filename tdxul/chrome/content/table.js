


function ajouterLigne() {
    // récuperer les valeurs
    var desc = document.getElementById('tbDescription').value;
    var montant = document.getElementById('tbMontant').value;
    
    // créer les elements à integrer dans la listbox
    var labDesc = document.createElement('label');
    var labMontant = document.createElement('label');
    
    labDesc.setAttribute('value', desc );
    labMontant.setAttribute('value', montant );
    
    var item = document.createElement('listitem');
    item.appendChild(labDesc);
    item.appendChild(labMontant);
    
    
    // insérer les nouveaux elements dans la listbox
}
