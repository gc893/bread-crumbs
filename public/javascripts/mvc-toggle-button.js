const mvcBtn = document.getElementById('mvc-toggle-btn');
const mappingTableBtn = document.getElementById('routes-toggle-btn');

const mvcDiv = document.getElementById('mvc-model-container');
const mappingTableDiv = document.getElementById('routes-table-container');

mvcBtn.addEventListener('click', showMvcDiagram);
mappingTableBtn.addEventListener('click', showRoutesTable);

function showMvcDiagram() {
    if(mvcDiv.hidden){
        mvcDiv.removeAttribute('hidden');
    } else {
        mvcDiv.hidden = 'true';
    }
}

function showRoutesTable() {
    if(mappingTableDiv.hidden){
        mappingTableDiv.removeAttribute('hidden');
    } else {
        mappingTableDiv.hidden = 'true';
    }
}