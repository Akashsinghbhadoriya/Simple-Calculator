let s="";
let bracket_type=false;

function expression(id){
    let currentselection=document.getElementById(id);
    if(currentselection.value==="bracket")
    {
        if(bracket_type)
        {
            s+=")";
            bracket_type=false;
        }
        else
        {
            s+="(";
            bracket_type=true;
        }
    }
    else
    {
        s+=currentselection.value;
    }
    document.getElementById("display").value=s;
}

function result(){
    let q=eval(s);
    document.getElementById("display").value=q;
    s="";
}

function Reset(){
    s="";
}