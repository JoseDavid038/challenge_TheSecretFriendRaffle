
const inputFriend = document.querySelector('.js-input');
const buttonAdd = document.querySelector('.js-button');
const friendsAdd = document.querySelector('.js-friends-list');
const deleteButton = document.querySelector('.js-delete-button');
const winnerChoose = document.querySelector('.js-winner');
const playButton = document.querySelector('.js-play-button');



let friendList = [];

clear();



buttonAdd.addEventListener('click', () => {
    addList();
    renderHtml();
});

inputFriend.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
      addList();
      renderHtml();
    }
})


deleteButton.addEventListener('click', () => {
  deleteList();
  renderHtml();
});

playButton.addEventListener('click', () => {
  raffle();
});



function addList (){

  if (inputFriend.value){
    if (friendList.includes(inputFriend.value)){
      alert('That name has already been entered. Please enter another one.');
      clear();
    }else{
      let friend = inputFriend.value;
      friendList.push(friend);
      console.log(friendList);
      clear();
    }
  }else{
    alert('You should enter a name.');
    inputFriend.focus();
  }

}

function deleteFriendList(event){
  friendList.splice(event,1);
  renderHtml();
}

function raffle(){
  let number = Math.floor(Math.random()*friendList.length);

  if (friendList[number] === undefined){
    alert('List of friends empty .You should enter a name.');
    inputFriend.focus();
  }else{
    winnerChoose.innerHTML = `The secret friend raffled is: <span class = "text-winner">${friendList[number]}</span> <img src="assets/amigo-secreto.png" class="img-winner">`;
  };
  
};


function renderHtml(){
  let html = '';
  for (let name in friendList){
    html += `<p class = "text-list">${friendList[name]} </p> <img src= "assets/icon-trash.svg" class="icon-trash js-icon-trash"> `;
  }
  friendsAdd.innerHTML = html;

  document.querySelectorAll('.js-icon-trash').forEach((buttonDelete, index) => {
    buttonDelete.addEventListener('click', () => {
      deleteFriendList(index);
  
    });
  });
  
};


function clear(){
  inputFriend.value = '';
  inputFriend.focus();
}

function deleteList(){

  friendList = [];
  clear();
  winnerChoose.innerHTML = '';

}














