var fs = require('fs');
fs.readFile('country_details.csv', 'utf8', function(err, contents) {
   if(err){
     return console.error(err);
   }
   var headerData;
   var data=[];
   var numOfClum;
   var populationIndex;
   var countryIndex;
   var pppIndex;
   var fileContentInRows= contents.trim().split('\r\n');
   for(var i=0;i<fileContentInRows.length-1;i++){
     if(i==0){
         headerData= fileContentInRows[i].trim().split(',');
         for(var j=0;j<headerData.length;j++){
              if('Population2013' === headerData[j]){
                populationIndex=j;
             } else if('Country' === headerData[j]){
                countryIndex=j;
             } else if('PPP2013' === headerData[j]){
               pppIndex=j;
             }
         }
     }else{

         var temp;

               for(j=i+1;j< fileContentInRows.length;j++){
                 data =fileContentInRows[i].trim().split(',');
                 if(data[0] == "European Union" || data[0] == "World"){

                 }
                 nextData =fileContentInRows[j].trim().split(',');
                 if(Number(data[populationIndex]) < Number(nextData[populationIndex])){
                   temp=fileContentInRows[j];
                   fileContentInRows[j]=fileContentInRows[i];
                   fileContentInRows[i]=temp;
                  }
               }

}

}

console.log(fileContentInRows);


fs.writeFile(process.cwd() + "/PopulationModofied.json", JSON.stringify(fileContentInRows,undefined, 2), function (err) {
   if (err) throw err;
   console.log('Population JSON file has been successfully created');
 });


createPopulationGraph(fileContentInRows);

function createPopulationGraph( fileContentInRows ) {
  var graphpopulationArray = [];
  var noOfRows = fileContentInRows.length;
  for (var i = 0; i < noOfRows; i++) {


  }

}

});
