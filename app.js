function palindrome(){
    var num = document.querySelector(".inputbox").value.toUpperCase();

    var alpha = num
        .split('')
        .reverse()
        .join('');

    if(num.length<=2){
        document.querySelector(".list").innerHTML = "TYPE MORE VALUES"
    }else if(num.length>=3 && num===alpha){
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is a palindrome!`
    }else{
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is not a palindrome!`
    }
}