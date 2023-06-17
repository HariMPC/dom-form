
var formSubmit=document.querySelector('#form')

formSubmit.addEventListener('submit',(e) => {
e.preventDefault()
var firstName = document.querySelector('#first-Name')
var lastName = document.querySelector('#last-Name')
var adress = document.querySelector('#adress')
var pincode = document.querySelector('#pincode')
var gender = document.querySelector('#gender')
var food = document.querySelector('#food')
var state = document.querySelector('#state')
var country = document.querySelector('#country')

var array = [firstName,lastName,adress,pincode,gender,food,state,country]

// var div = document.createElement("div");
// div.setAttribute("class","");
// var form = document.createElement("form");
// form.setAttribute("class","survey-form");

var tableRow = document.createElement('tr')
var count = 0;
for(var i = 0; i < array.length; i++){
  if(array[i].value  != ''){
    var tableData = document.createElement('td')
    tableData.innerHTML=array[i].value
    tableRow.append(tableData)
    count++
  
  }
}
if(count > 2) {
  document.querySelector('tbody').append(tableRow)
}else{
  alert(" 2 or 5 options")
}
for(let i of array){
  i.value = ''
}

})