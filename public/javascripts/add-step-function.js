const addStepBtn = document.getElementById('add-step-btn');

const stepFormDiv = document.getElementById('step-form-container')

addStepBtn.addEventListener('click', showAddStepForm)

function showAddStepForm() {
    if(mappingTableDiv.hidden){
        mappingTableDiv.removeAttribute('hidden');
    }
}