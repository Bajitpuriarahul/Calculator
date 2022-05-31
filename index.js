let srn = document.getElementById('screen');
let btn = document.querySelectorAll('button');
for(item of btn){
item.addEventListener('click', (e)=>{
    btnText = e.target.innerText;
    if(btnText == '*'){
        srn.value += btnText;
    }
 else if(btnText == "="){
        srn.value = eval(srn.value);
    }
    else if ( btnText == 'C'){
        srn.value = '';
    }
    else if( btnText == '%'){
        srn.value = srn.value*1/100;
    }
    else if(btnText =='<'){
        let string = srn.value.toString();
        srn.value = string.substr(0, string.length - 1);
    }
    else{
        srn.value += btnText;
    }
})
};



