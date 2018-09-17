var arr = [];
 var arr1 =[];

window.addEventListener("load",onload);

  function createElementFun() {
    var out_text = local_entry();
    var no1 = out_text.length;
    // alert(no1);
    var para = document.createElement("p");
    var inputtext = out_text[no1-1];/*document.getElementById('text').value;*/
    document.getElementById('text').value = "";
    var node = document.createTextNode(inputtext);
    para.appendChild(node);
    var element = document.getElementById("new_element");
    element.appendChild(para);
 }


  function local_entry() {
    var inputtext = document.getElementById('text').value;
    document.getElementById('text').value = "";
    arr.push(inputtext);
    var myJson = JSON.stringify(arr);
    // alert(myJson);
    localStorage.setItem("server", myJson);
    var output = localStorage.getItem("server");
    arr1 = JSON.parse(output);
    // alert(arr1);
    var no = arr1.length;
    // alert(no);
    return arr1;
  }

function onload() {
  var output = localStorage.getItem("server");
  arr1 = JSON.parse(output);
  var no = arr1.length;
  for (var i = 0; i < no; i++) {
    var para = document.createElement("p");
    var inputtext = arr1[i];/*document.getElementById('text').value;*/
    document.getElementById('text').value = "";
    var node = document.createTextNode(inputtext);
    para.appendChild(node);
    var element = document.getElementById("new_element");
    element.appendChild(para);
  }
}

function createnode(val) {
  this.value = val;
  this.status = true;
  // this.name = function() { this.value+" "+ this.status;

  }
}

var nav = new createnode("raju");
alert(nav);
