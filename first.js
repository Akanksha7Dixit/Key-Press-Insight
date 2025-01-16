const HandleKeyPress=(events)=>{
    console.log(events);
    console.log("Key pressed",events.key);
    console.log("Key code:",events.code)
    // console.log("char code",events.code)
    console.log("Event Type:",events.type)

    document.querySelector(".keypressed").textContent=`Key Pressed:${events.key}`;

    document.querySelector(".charcode").textContent=`Char Code:${events.key.charCodeAt(0)}`;

    document.querySelector(".keycode").textContent=`Key Code:${events.code}`;

    document.querySelector(".eventType").textContent=`Event Type:${events.type}`;
};


var myInput= document.getElementById("myInput");
myInput.addEventListener("keydown",HandleKeyPress);