const ulToAddTo = document.getElementById('listToAddTo');
const newLi = document.createElement('li');
newLi.textContent = 'New Item';
ulToAddTo.appendChild(newLi);

const ulToRemoveFrom = document.getElementById('listToRemoveFrom');
const firstLi = ulToRemoveFrom.querySelector('li');
if (firstLi) {
    ulToRemoveFrom.removeChild(firstLi);
}
