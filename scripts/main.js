// Image switcher code

let myImage = document.querySelector('img');
//document は 組み込みのオブジェクト。
//ブラウザが表示しているページ。DOM とも呼ぶ。 Document Object Modelの略。
//querySelector はページの一部（HTML要素）を選ぶ関数。


myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/myImage.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('名前を入力してください');
  // prompt は、組み込みの関数。prompt (pop-up) Windowを表示して、ユーザー入力させる。
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    // 入力データを、特別な場所（変数ではない、ファイルなどに相当）に保存する
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  //　以前に特別な場所（ファイルなど）に保存していた名前があればそれを使う。
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
