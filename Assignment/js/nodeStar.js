var x,y,z;
for(x=1; x<=5; x++)
{
    var output = "";
    for(y=4; y>=x; y--)
    {
       output+=" ";
    }
    for(z=1; z<=(2*x-1); z++)
    {
    output+="*";
    }
console.log(output);
}
