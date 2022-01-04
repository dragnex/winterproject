function GetAllDataOnce() {
    db.collection('switches').get().then((querySnapshot)=>{
        var switches = [];
        querySnapshot.forEach(doc => {
            switches.push(doc.data());
        });
        AddAllItemsToTheTable(switches);
    })
}

function GetAllDataRealtime() {
    db.collection('switches').onSnapshot((querySnapshot)=>{
        var switches = [];
        querySnapshot.forEach(doc => {
            switches.push(doc.data());
        });
        AddAllItemsToTheTable(switches);
    })
}

function AddItemsToTable(name, type){
    var body = document.getElementById('list');
    var col = document.createElement('col');
    col.classList.add("col");
    var card = document.createElement('div');
    card.classList.add("card");
    card.classList.add("h-100");
    var cardbody = document.createElement('div');
    cardbody.classList.add("card-body");
    var title = document.createElement('h5');
    title.classList.add("card-title");
    var info = document.createElement('p');
    info.classList.add("card-text");
    title.innerHTML = name;
    info.innerHTML = type;
    cardbody.appendChild(title);
    cardbody.appendChild(info);
    card.appendChild(cardbody)
    col.appendChild(card);
    body.appendChild(col);
}

function AddAllItemsToTheTable(SwitchList){
    SwitchList.forEach(element => {
        AddItemsToTable(element.name, element.type)
    });
}

window.onload = GetAllDataOnce;