

const butt1 = document.querySelector('#btn1');
const butt2 = document.querySelector('#btn2');

function onkaro()
{
    console.log("Fired 1");
    document.getElementById('light').src ='lighton.jpg';
}
function turnoff()
{
    console.log("Fired 2")
    document.getElementById('light').src ='lightoff.jpg';
}
butt1.addEventListener("click",onkaro);
butt2.addEventListener("click",turnoff);
