const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const resetKnop = document.querySelector('[name=reset').value;
  
  const items =  JSON.parse(localStorage.getItem('items')) || []; //ITEMS is al weggeschreven onder localstorge.
  //Hier zoek je de naam op van het object.

//elke keer als je submit gebeurt dit
function addItem(e){
    e.preventDefault();
   // stop de refresh
   //haal de value van de ingegeven test en steek deze in een const
   const text = this.querySelector('[name=item]').value;
   //console.log(text);
   //maak een item aan waar de tekst inzit samen met de checkbox value
    const item = {
        text,
        done:false
    }
    // steek de value van text in de array items;
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
    
}


function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, index)=>{
        return`
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
            <label for="item${index}">${plate.text}</label>
        </li>
        `;
    }).join('');
   



}


function toggleDone(e){
   if(!e.target.matches('input')) return;
   const el = e.target;
    const index= el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items, itemsList);
}




  addItems.addEventListener('submit',addItem);
itemsList. addEventListener('click',toggleDone);



// call Populate list again, adners start je met leeg scherm en na het typpen pas populaten
populateList(items, itemsList);