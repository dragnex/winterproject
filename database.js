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
    var div = document.createElement('div');
    var header = document.createElement('h1');
    var info = document.createElement('p');
    header.innerHTML = name;
    info.innerHTML = type;
    div.appendChild(header);
    div.appendChild(info);
    body.appendChild(div);
}

function AddAllItemsToTheTable(SwitchList){
    SwitchList.forEach(element => {
        AddItemsToTable(element.name, element.type)
    });
}

window.onload = GetAllDataOnce;