var arr = [];
 var arr1 =[];

window.addEventListener("load",on_load);
function createnode(val) {
  this.valu = val;
  this.status = true;
  }

//create a new new_element

  function createElementFun() {
    if (document.getElementById('text').value!="") 
    {
      var out_text = local_entry();
      var no1 = out_text.length;
      var inputtext = out_text[no1-1].valu;
      show(inputtext, no1-1);
    }
    else
    {
      alert("ENTER THE TO DO ITEM");
    }
 }

//function for storing data to the local storage

  function local_entry() {
    var inputtext = document.getElementById('text').value;
    document.getElementById('text').value = "";
    arr.push(new createnode(inputtext));
    var myJson = JSON.stringify(arr);
    localStorage.setItem("server", myJson);
    var output = localStorage.getItem("server");
    arr1 = JSON.parse(output);
    return arr1;
  }

//function for loading the data from local server when page loads

function on_load() {
  var output = localStorage.getItem("server");
  arr1 = JSON.parse(output);
  var no = arr1.length;
  for (var i = 0; i < no; i++) {
    arr[i] = arr1[i];
  }
  for (var i = 0; i < no; i++) {
    var inputtext = arr1[i].valu;
    show(inputtext, i);
  }
}

// show values in the local storage

function show(intext, id) {
  var inputtext = intext;
  var para = document.createElement("div");
  para.setAttribute("class", "outer");
  para.innerHTML = "<div class = 'each_node'><span id='"+id+"'>"+inputtext+"</span><div class = 'tick'><span onclick = 'check("+id+")'>✔</span></div><div class = 'close'><span onclick = 'remove("+id+")'>✖</span></div></div>";
  var element = document.getElementById("new_element");
  element.append(para);
}

// removes values from the local storage

function remove(t) {
  arr.splice(t, 1);
  var myJson = JSON.stringify(arr);
  localStorage.setItem("server", myJson);
  document.getElementById("new_element").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    show(arr[i].valu, i);
  }
}

// checks the values in the to do list

function check(a) {
  //if (a===) {}
  document.getElementById('new_element').style.textDecoration = "line-through";
  // console.log(a);
}

