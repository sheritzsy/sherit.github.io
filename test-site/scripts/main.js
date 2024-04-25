let myFile = document.querySelector("h6");
if (myFile === 'true'){
    alert("文件已上传")
    myFile.textContent = "文件xxx";
} else {
    alert("未变化")
}
/*
let mytest_js1 = 'test_js';/*变量更改 
mytest_js1 = 'learn_js';

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
*/
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/背景2.jpg") {
    myImage.setAttribute("src", "images/4k.jpg");
  } else {
    myImage.setAttribute("src", "images/赫本.jfif");
  }
};
/* 显示名字 */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
    myHeading.textContent ="欢迎上传资源" + storedName;
      }
  }
  myButton.onclick = function () {
    setUserName(); 
  };
  
  