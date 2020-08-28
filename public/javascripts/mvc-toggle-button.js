const mvcBtn = document.getElementById('mvc-toggle-btn');
const mvcDiv = document.getElementById('mvc-model-container')

mvcBtn.addEventListener('click', showMvcDiagram);

function showMvcDiagram() {
    if(mvcDiv.hidden){
        mvcDiv.removeAttribute('hidden');
    } else {
        mvcDiv.hidden = 'true';
    }
}