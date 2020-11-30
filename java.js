arr = [];
let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("delete");

//isComplete = [];

function get_update(){
    let title = document.getElementById('title').value;
    let states = document.getElementById('status').innerHTML="Pending";
    
    arr.push([title, states]);
    // arr.push([title]);
    update();
   

}

function update(){
    
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td id="status${index}">${element[1]}</td>
        
        <td>
            <button type="submit" onclick="Delete(${index})" >Delete</button>`;
        if(element[1]!="Completed"){
            str+= `<button id="complete${index}" type="submit" value="Complete" onclick="complete(${index})">Complete</button>`;
          }
        str+=`</td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = str;

}

function Delete(item){
    arr.splice(item,1);
    console.log(arr);
    update();

}
// function complete(val){
//     arr.push(val)
//     console.log(arr);
//     update();

// }
function complete(val){
    let status =document.getElementById("status"+val).innerHTML="Completed";
    arr[val][1]=status;
    document.getElementById("complete"+val).style.display = "none";
}
// function complete(val){
    
//     console.log(val);
//     update();

// }
// function complete(item_index){
//     arr.splice(item_element,1);
//     console.log(arr);
//     update();

// }

// function complete() {
//     var str = document.getElementById("demo").innerHTML; 
//     var res = str.replace("Pending", "Complete");
//     document.getElementById("demo").innerHTML = res;
    
//   }

// function complete(item_element) {
//     arr.elementR
    
//   }




btn_add.addEventListener("click", () => {
    get_update();
    
});
