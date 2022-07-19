

function ageInDays (){
    var birthYear = prompt('What year were you born.. Good friend?');
    var myDays = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + myDays + ' days');
    h1.setAttribute('id','ageInDay');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetNumber(){
    document.getElementById("ageInDay").remove(); 

}


