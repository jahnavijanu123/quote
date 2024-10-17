let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let bg=document.getElementsByTagName("body")
    let color = "#"
    color=color+Math.floor(Math.random()*100000+100000)
    bg[0].style.backgroundColor=color

})
let btn1=document.getElementById("btn1")
let arr=[
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams....",
    "you never lose by loving You always lose by holding back ...",
    "At the touch of love everyone becomes a poet...",
    "Love is an irresistible desire to be irresistibly desired....",
    "Where there is love there is life....",
    "Life is the flower for which love is the honey.",
    "You're nothing short of my everything....",
     "We loved with a love that was more than love..."
    ]
btn1.addEventListener("click",()=>{
    let p1=document.getElementsByTagName("p")
    p1[0].innerHTML=arr[parseInt(Math.random()*arr.length)]
    p1[0].style.fontSize="40px"
    p1[0].style.fontStyle="itallic"
    
    // quote.innerHTML=randomQuote
    document.body.appendChild(quote)
})




// let quote=document.createElement("h3")
//     let randomQuote1=[
//         "1","2","3","4","5","6","7","8","9","09"
//     ]
//     let randomQuote=randomQuote1[Math.floor(Math.random()*randomQuote1.length+1)]