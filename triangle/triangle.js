let a = 0
let b = 0
let c = 0
let alpha = 0
let beta = 0
let gamma = 0
let eredmeny = ""
let oldal1 = 0
let oldal2 = 0
let oldal3 = 0
let szog1 = 0
let szog2 = 0
let szog3 = 0

let oldalak = []
let szogek = []
//AZÁMOLÁSO HIH HAHA KAKI
function Send()
{
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    alpha = (document.getElementById("alpha").value)*Math.PI/180;
    beta = (document.getElementById("beta").value)*Math.PI/180;
    gamma = (document.getElementById("gamma").value)*Math.PI/180;

    oldalak = [a,b,c]
    szogek = [alpha,beta,gamma]

    eredmeny = document.querySelector("#eredmeny");
}

function SineLaw()
{     
    //assign values
    for (let i = 0; i < 3; i++)
    {
        if (oldalak[i] != 0)
        {
            if (oldal1 == 0)
            {
                oldal1 = oldalak[i]
            }
            else 
            {
                oldal2 = oldalak[i]
            }
        }
    }
    //szög
    for (let i = 0; i < 3; i++)
    {
        if (szogek[i] != 0)
        {
            if (szog1 == 0)
            {
                szog1 = szogek[i]
            }
            else 
            {
                szog2 = szogek[i]
            }
        }
    }
    //számol!
    //eredmeny.innerHTML = oldal1+" "+oldal2+" "+szog1+" "+szog2;
    if (oldal2 == 0)
    {
        oldal2 = oldal1/Math.sin(szog1)*Math.sin(szog2)

    }
    else
    {
        szog2 = Math.sin(szog1)/oldal1*oldal2
        szog2 = (Math.asin(szog2))*180/Math.PI*100

        
    }
    //KIÍRÁS
    
    
    szog1 = Math.round(((Math.asin(szog1))*180/Math.PI*100)*100)/100
    szog3 = Math.round(szog3*100)/100
    szog3 = Math.round(((Math.asin(szog3))*180/Math.PI*100)*100)/100
    oldal3 = Math.pow(oldal1, 2) + Math.pow(oldal2, 2) - 2*oldal1*oldal2*Math.cos(szog3)
    oldal3 = Math.sqrt(oldal3)
    oldal3 = Math.round(oldal3*100)/100
    oldal2 = Math.round(oldal2*100)/100
    szog2 = Math.round(szog2*100)/100;

    eredmeny.innerHTML = oldal1+" "+oldal2+" "+oldal3+" "+szog1+" "+szog2+" "+szog3;


}
function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.fillStyle = "#d3ecf1";
    ctx.fillRect(0, 0, 500, 500);

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(oldal1*Math.sin(szog2), oldal1*Math.sin(szog3));
    ctx.lineTo(oldal1*Math.sin(szog2), oldal1*Math.sin(szog3)+oldal3);
    ctx.lineTo(250, 250);
    ctx.stroke();

}
function Main()
{
    Send()
    SineLaw()
    draw()
}


