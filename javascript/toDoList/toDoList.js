let lists = document.getElementsByTagName("li");
let close = document.getElementsByClassName("close");
let listDOM = document.querySelector("#list")

function newElement(){
    const LIST_ITEM = document.querySelector("#task");
    let inputValue = LIST_ITEM.value;
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${inputValue}`
    
    if(inputValue.trim() === "" || !inputValue){
      $('.error').toast('show');
    }else {
      listDOM.append(liDOM)
      $('.success').toast('show');
    }
    inputValue.innerHTML = "";

    const span = document.createElement('span');
    span.className = "close";
    span.textContent = "\u00D7";
    liDOM.appendChild(span);

    for(i=0; i<close.length; i++){
      close[i].onclick = function(){
        var list = this.parentElement;
        list.remove();
      }
    }

}

for(i = 0; i< lists.length; i++){
  const span = document.createElement('span');
  span.className = "close";
  span.textContent = "\u00D7";
  lists[i].appendChild(span);
}

for(i=0; i<close.length; i++){
  close[i].onclick = function(){
    var list = this.parentElement;
    list.remove();
  }
}

listDOM.addEventListener("click", function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);











// let deleteButtonDOM = document.querySelector("#delete")

// deleteButtonDOM.addEventListener("click", deleteItem())

// function deleteItem(){
    
// }