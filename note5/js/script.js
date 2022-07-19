function generateCat(){
    var image = document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.setAttribute('id','cat-images');
    image.src = 'https://cdn2.thecatapi.com/images/9oj.gif';
    div.appendChild(image);
}

function reset(){
     document.getElementById('cat-images').remove();
}