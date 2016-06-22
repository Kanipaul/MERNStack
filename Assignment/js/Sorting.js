var myObj =
[
{'name':'Srinivas', 'age': 30, 'occupation': "Team Leader"},
{'name':'Balaji', 'age': 32, 'occupation': "Team Leader"},
{'name':'Sneha', 'age': 25, 'occupation': "Programmer"},
{'name':'Anisha', 'age': 27, 'occupation': "Programmer"},
{'name':'Kishore', 'age': 22, 'occupation': "Programmer"},
{'name':'Raj', 'age': 28, 'occupation': "Programmer"}];



for(i=0;i<myObj.length;i++){
  if(myObj[i].occupation == "Programmer"){
      console.log(myObj[i]);
  }


}
console.log("-------------------------------------------------------------------------------------");
for(i=0;i<myObj.length;i++)
{
    for(j=i+1;j<myObj.length;j++)
    {
        if(myObj[i].age < myObj[j].age)
        {
            a= myObj[i];
            myObj[i]=myObj[j];
            myObj[j]=a;        }
    }
}
for(i=0;i<myObj.length;i++){
console.log(myObj[i]);
}
