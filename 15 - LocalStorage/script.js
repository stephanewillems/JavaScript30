const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e){
   e.preventDefault();
   const text = (this.querySelector('[name=item')).value;
  const item = {
      text,
      done:false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
//addItem functie stop de relead en haalt de tekst van de input met selector 'name=item'.
// Daarna maken we een object aan waarin we de data steken. Het done-item in het object
// is om aan te geven dat het niet gechecked is.
//'this' is het form element


function populateList(plates = [], platesList){

platesList.innerHTML = plates.map((plate, i)=>{
    return `
    <li>
        <input type="checkbox" data-index=${i} id="items${i}" ${plate.done ? 'checked' : ''}/>
        <label for =items${i}>${plate.text}</label>
    </li>
            `;
}).join('');


}



addItems.addEventListener('submit', addItem); 
//luisteren naar submit want eventlisteren zit op form

populateList(items, itemsList)