let meme = document.getElementById('meme-text')
let input = document.getElementById('text-input')

input.addEventListener('keyup', function(){
    meme.innerHTML = input.value
})

let imageInput = document.getElementById('meme-insert')
let container = document.getElementById('meme-image-container')
let newImage = document.getElementById('meme-image')


imageInput.addEventListener('change', function(){
    newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
    container.style.width = 'auto'
    container.style.height = 'auto'
})


let botao1 = document.getElementsByTagName('button')[0];
let botao2 = document.getElementsByTagName('button')[1];
let botao3 = document.getElementsByTagName('button')[2];
    
    botao1.addEventListener('click', function(){
        container.style.border = 'red dashed 3px'
    })

    botao2.addEventListener('click', function(){
        container.style.border = 'blue double 5px'
    })

    botao3.addEventListener('click', function(){
        container.style.border = 'green groove 6px'
    })


let img1 = document.getElementById('meme-1');
let img2 = document.getElementById('meme-2');
let img3 = document.getElementById('meme-3');
let img4 = document.getElementById('meme-4');
        
    img1.addEventListener('click', function(){
        newImage.src = '/sd-027-b-project-meme-generator/imgs/meme1.png'
        container.style.width = 'auto'
        container.style.height = 'auto'
    })
    
    img2.addEventListener('click', function(){
        newImage.src = '/sd-027-b-project-meme-generator/imgs/meme2.png'
        container.style.width = 'auto'
        container.style.height = 'auto'
    })
    
    img3.addEventListener('click', function(){
        newImage.src = '/sd-027-b-project-meme-generator/imgs/meme3.png'
        container.style.width = 'auto'
        container.style.height = 'auto'
    })

    img4.addEventListener('click', function(){
        newImage.src = '/sd-027-b-project-meme-generator/imgs/meme4.png'
        container.style.width = 'auto'
        container.style.height = 'auto'
    })