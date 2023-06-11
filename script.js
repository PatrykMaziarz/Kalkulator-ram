
function Szosowy()
{
    var a = document.getElementById("a").value;   
    a = parseFloat(a);

    var Szosowy = ( (a * 0.66) / 2.54).toFixed(2);document.
    getElementById("wynik").innerHTML=Szosowy;    
}

function Gorski()
{
    var a = document.getElementById("a").value;   
    a = parseFloat(a);
    
    var Gorski = ((a * 0.57) / 2.54 ).toFixed(2);document.
    getElementById("wynik").innerHTML=Gorski;    
}

function Trekkingowy()
{
    var a = document.getElementById("a").value;   
    a = parseFloat(a);
    
    var Trekkingowy = ((a * 0.63) / 2.54).toFixed(2);document.
    getElementById("wynik").innerHTML=Trekkingowy;    
}
