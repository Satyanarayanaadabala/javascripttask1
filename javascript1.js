// <--Write a Program to store following values in array:-->

x=[12,67,10,98,69];
y=x.length;
document.write(x+"<br>");
document.write("Total items:"+y+"<br>");
document.write("Middle value:"+x[2]+"<br>");
document.write("Item 2nd position:"+x[1]);
document.write("<br><br>");

// <--percentage in 3 subjects and check if percentage is greater than 75 or not. -->

Maths=parseInt(prompt("Enter Maths marks"));
Physics=parseInt(prompt("Enter physics marks"));
Science=parseInt(prompt("Enter Science marks"));
totalmarks=Maths+Physics+Science;
percentage=(totalmarks/300)*100;
if(percentage>75)
    {
        document.write("Percentage is greater than 75");
    }
    else
    {
        document.write("percentage is not greatherthan 75");
    }

    // <--Write a Program to find sum of a three digit number.-->

    x=prompt("Enter three digit number:");
    y=parseInt(x/100);
    z=x%100;
    q=parseInt(z/10);
    r=z%10;
    sum=y+q+r;
    document.write("<br>");
    document.write("Sum of three digits number:"+sum +"<br>");