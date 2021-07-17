// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init()
{
     const button = document.getElementById("takeoff");
     const  p = document.getElementById("flightStatus");
     const background = document.getElementById("shuttleBackground")
     const height = document.getElementById("spaceShuttleHeight")
     const button1 = document.getElementById("landing");
     const button2 = document.getElementById("missionAbort");
     const button3 = document.getElementsByTagName("button");
     const image = document.getElementById("rocket")


     button.addEventListener('click',event => {
        let res = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (res== true)
        {
            p.textContent= "Shuttle in flight."
            background.style="background-color:blue";
            height.textContent = "1000"
        }
    }); 
   button1.addEventListener('click', function(event) {
    window.alert("The shuttle is landing. Landing gear engaged.")
    
        p.textContent = "The shuttle has landed."
        background.style="background-color:green";
        height.textContent = "0"
    

   });
   button2.addEventListener('click',event => {
    let res1 = window.confirm("Confirm that you want to abort the mission.")
    if (res1== true)
    {
        p.textContent = "Mission Aborted"
        background.style="background-color:green";
        height.textContent = "0"
    }
});
   
button3[0].addEventListener('click',event => {
    image.height = image.height+10;
    height.textContent = height.textContent +10000
});
button3[1].addEventListener('click',event => {
    image.height = image.height-10;
    height.textContent = height.textContent -10000
});

button3[2].addEventListener('click',event => {
    image.width = image.width+10;
    height.textContent = height.textContent +10000

});

    button3[3].addEventListener('click',event => {
        image.width = image.width-10;
        height.textContent = height.textContent -10000
    
    });


}

window.addEventListener("load", init);

// Write your JavaScript code here.
// Remember to pay attention to page loading!
