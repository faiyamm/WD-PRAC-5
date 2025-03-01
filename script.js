document.addEventListener('DOMContentLoaded', () => {
    // all the code will be here 
    const itemInput = document.getElementById('txtItem');
    const addItemBtn = document.getElementById('purchaseBtn');
    const shoppingList = document.getElementById('shoppingList');
    
    // array to store (default) items
    let items = [
        {name:"Milk", purchase:false},
        {name:"Bread", purchase:false},
        {name:"Butter", purchase:false}
    ]; 

    function renderList(){
        // clear the list before rendering
        shoppingList.innerHTML = '';
    
        // update list display
        items.forEach((item, index) => {
            const li = document.createElement("li");
            // completed class if item is purchased
            if(item.purchase) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <span>${item.name}</span>
                <button onclick="checkItem(${index})">${item.purchase ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle-check"></i>'}</button>
                <button onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
                <button onclick="editItem(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
            `;
            shoppingList.appendChild(li);
        });
    }

    // function to edit item
    window.editItem=(editIndex) => {
        let editItem = prompt('Edit Item', items[editIndex].name);
        if(editItem === null || editItem === '') {
            alert('Input cannot be empty or just whitespace.');
            return;
        }
        items[editIndex].name = editItem.trim();
        renderList();
    }

    // function to check item
    window.checkItem=(checkIndex) => {
        items[checkIndex].purchase = !items[checkIndex].purchase;
        renderList();
    }

    // function to delete item
    window.deleteItem=(deleteIndex) => {
        items.splice(deleteIndex,1); // remove from the array
        renderList(); // update the list
        console.log(items);
    }

    // add item event
    addItemBtn.addEventListener('click', () => {
        let itemText = itemInput.value.trim();;
        // for registering items
        if(itemInput.value === ''){
            alert('Item cannot be empty');
            return;
        }
        
        items.push({name:itemText,purchased:false}); // create obj lit and pushing it to the array
        itemInput.value = ''; // clear input
        renderList();
    });
    renderList(); // initial render
    console.log(items);
});