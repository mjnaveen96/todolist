
/*

  *   @Desc   : Todo list
  *   @Author : Naveen Jose

*/



var arr    =  [];
var arr1   =  [];

window.addEventListener("load",on_Load);

//create node function

function createNode(val) {
  this.valu   =  val;
  this.status =  false;
  }

//create a new new_element

  function createElementFun() {
    if (document.getElementById('text').value!="")
    {
      var inputtext  =  document.getElementById('text').value;
      document.getElementById('text').value = "";
      arr.push(new createNode(inputtext));
      save();
      on_Load();
    }
    else
    {
      alert("PLEASE ENTER THE INPUT");
    }
 }
function save() {
  var myJson  =  JSON.stringify(arr);
  localStorage.setItem("server", myJson);
}
function getValues() {
  var output  =  localStorage.getItem("server");
  arr1        =  JSON.parse(output);
}

//function for loading the data from local server when page loads

function on_Load() {
  getValues();
  if(arr1!=null) {
    var no  =  arr1.length;
    for (var i=0; i < no; i++) {
      arr[i]  =  arr1[i];
    }
    document.getElementById("new_element").innerHTML = "";
    for (var i=0; i < no; i++) {
      show(arr1[i], i);
    }
  }
}

// show values in the local storage

function show(intext, id) {
  var c  =  "";
  if(intext.status === true) {
    c = " checked";
  } else {
    c = "";
  }
  var inputtext  =  intext.valu;
  var para       =  document.createElement("div");
  para.setAttribute("class", "outer");
  para.innerHTML =  "<div class = 'each_node'><span class='"+c+"' id='"+id+"'>"+inputtext+"</span><div class = 'tick'><span onclick = 'check("+id+")'>✔</span></div><div class = 'close'><span onclick = 'remove("+id+")'>✖</span></div></div>";
  var element    =  document.getElementById("new_element");
  element.append(para);
}

// removes values from the local storage

function remove(t) {
  arr.splice(t, 1);
  save();
  on_Load();
}

// checks the values in the to do list

function check(a) {
  if(arr1[a].status === false) {
    arr1[a].status  =  true;
  } else {
    arr1[a].status  =  false;
  }
  save();
  on_Load();

}

//completed button

function completed() {
  document.getElementById("new_element").innerHTML = "";
  for (var i=0; i < arr1.length; i++) {
    if (arr1[i].status === true) {
     show(arr1[i],i);
    }
  }
  onclick  =  "on_Load()";
}

//notcomplted button

function notcompleted() {
  document.getElementById("new_element").innerHTML = "";
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].status === false) {
     show(arr1[i],i);
    }
  }
}
