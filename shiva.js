
function res()
{
const val1=parseInt(document.getElementById("val1").value);
const val2=parseInt(document.getElementById("val2").value);
const val3=parseInt(document.getElementById("val3").value);

const val4=parseInt(document.getElementById("val4").value);
const val5=parseInt(document.getElementById("val5").value);
const val6=parseInt(document.getElementById("val6").value);

const a1=Number((val1+val2+val3)/3);
const a2=Number((val4+val5+val6)/3);
const A="Team-A Winner";
const B="Team-B Winner";
const C="Team-A Won by Bonus";
const D="Team-B Won by Bonus";
const E="Toss To Decide ";



    if(a1<a2)
    {
        document.getElementById("avg1").value=a1;
        document.getElementById("avg2").value=a2;
        document.getElementById("result").value=B;
    }
    else if(a1>a2)
    {
        document.getElementById("avg1").value=a1;
        document.getElementById("avg2").value=a2;
        document.getElementById("result").value=A;
    
    }
    else if((val1>val4)||(val2>val5)||(val3>val6))
    {
        document.getElementById("avg1").value=a1;
        document.getElementById("avg2").value=a2;
        document.getElementById("result").value=C;

    }
    else if((val1<val4)||(val2<val5)||(val3<val6))
    {
    document.getElementById("avg1").value=a1;
    document.getElementById("avg2").value=a2;
    document.getElementById("result").value=D;

    }
   else
   {
    document.getElementById("avg1").value=a1;
    document.getElementById("avg2").value=a2;
    document.getElementById("result").value=E;
   }


    
}

