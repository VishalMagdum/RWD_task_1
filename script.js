const stars = document.querySelectorAll('.star');



for(var i =0; i<stars.length; i++){
     stars[i].starvalue = (i+1);
    // stars[i].addEventListener('click',function(){
    //     console.log("star clicked " + stars[i].starvalue)
    // })
    ["click","mouseover","mouseout"].forEach(function(action){
        stars[i].addEventListener(action,rating);

        })
}


function rating(action){
    let type = action.type;
    // console.log(type)
    let starvalue = this.starvalue;
    // console.log(starvalue);
    if(type === 'click'){
        if(starvalue>=1){
            console.log(starvalue);
        }
    }
    stars.forEach(function(element,index){
        if(type === 'click'){
            if(index<starvalue){
                element.classList.add("Orange")
                element.classList.remove('Yellow')
            }else{
                element.classList.remove('Orange')
            }
        }

        if(type === 'mouseover'){
            if(index<starvalue){
                element.classList.add("Yellow")
            }else{
                element.classList.remove('Yellow')
            }
        }
        
        if(type === 'mouseout'){
            element.classList.remove('Yellow')
        }

        

    })
}