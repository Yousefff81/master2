var imgList=Array.from(document.querySelectorAll(".item img")) ;
var lightbox=document.getElementById("lightbox");
var yousef=document.getElementById('lightbox-content');

var right=document.getElementById("right");
var left=document.getElementById("left")

var closeBtn=document.getElementById("close")
var currentIndex=0


for(var i=0; i<imgList.length; i++){

    imgList[i].addEventListener('click', function(e){


        lightbox.style.display='flex';
        
        var imgSelect=e.target.getAttribute('src');

        yousef.style.backgroundImage=`url(${imgSelect})`

        currentIndex=imgList.indexOf(e.target)

        console.log(currentIndex);


    })
}

function nextSlider(){

    currentIndex++;

    if(currentIndex==imgList.length){

        currentIndex=0;
    }

    var imgSelect=imgList[currentIndex].getAttribute('src')
    
    yousef.style.backgroundImage=`url(${imgSelect})`
}

right.addEventListener('click',function(){

    nextSlider();
})

function prevSlider(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=imgList.length-1;
    }

    var imgSelect=imgList[currentIndex].getAttribute('src')
    
    yousef.style.backgroundImage=`url(${imgSelect})`
}
left.addEventListener('click',function(){

    prevSlider();
})

function close(){

    lightbox.style.display='none';
}
closeBtn.addEventListener('click',function(){

    close();
})

document.addEventListener("keyup", function(e){

if(e.key=="ArrowRight"){

    nextSlider();
}

else if(e.key=="ArrowLeft"){

    prevSlider();
}

else if(e.key=="Enter"){

    close();
}

})