// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick()
// {
//     alert("i got clicked");
// }


//OR

// document.querySelectorAll("button").addEventListener("click", function()
// {
//     alert("hey am clicked");
// })


let noOfDrumButton = document.querySelectorAll(".drum").length;
for ( let i = 0; i < noOfDrumButton; i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function () 
    {
        let btnInnerHtml = this.innerHTML;

        switch (btnInnerHtml)
        {
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'a':
                tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 's':
                tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'd':
                tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case 'j':
                crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'k':
                kickAss = new Audio("sounds/kick-bass.mp3");
                kickAss.play();
                break;
            case 'l':
                snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
                console.log(btnInnerHtml);
        }
    })
}
