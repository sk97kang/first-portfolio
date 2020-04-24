const fsForm = document.querySelector(".js-fsForm");
const fsName = fsForm.querySelector("#fsName");
const fsAdd = fsForm.querySelector("#fsAdd");
const fsSubmitBtn = fsForm.querySelector("#fsSubmitBtn");
const fsList = document.querySelector(".js-fsList");

const FS_LS = "favoriteSite";
let fsListArr = [];
let newId = 0;

function handleClick(event) {
    event.preventDefault();
    const btn = event.target;
    const li = btn.parentNode;
    if (confirm(`${li.name}을 삭제하시겠습니까?`)){
        fsList.removeChild(li);
        const cleanFsListArr = fsListArr.filter(fs => {
            return fs.id !== parseInt(li.id);
        })
        fsListArr = cleanFsListArr;
        saveFsList();
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentFsName = fsName.value
    const currentFsAdd = fsAdd.value
    paintFsList(currentFsName,currentFsAdd);
}

function saveFsList() {
    localStorage.setItem(FS_LS, JSON.stringify(fsListArr));
}

function paintFsList(name, address){
    const a = document.createElement('a');
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', handleClick);
    delBtn.title = "삭제";
    a.innerText = name;
    a.href = address;
    a.target = "_blank"
    newId++;
    li.id = newId;
    li.appendChild(a);
    li.appendChild(delBtn);
    fsList.appendChild(li);
    const fsListArrObj = { id : newId, name : name, address : address};
    fsListArr.push(fsListArrObj);
    saveFsList();
}

function loadFsList() {
    const loadedFdList = JSON.parse(localStorage.getItem(FS_LS));
    if(loadedFdList !== null){
        loadedFdList.map(fs => {
            paintFsList(fs.name, fs.address);
        });
    }
}

function init(){
    loadFsList();
    fsForm.addEventListener('submit', handleSubmit);
}

init();