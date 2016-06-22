var fs = require("fs");

//Reading CSV file from File System and converting to JSON
var data = fs.readFileSync('csv/country_details.csv');

var rawData=data.toString();
//console.log("Raw data ::"+rawData);

var newLineCharacter = "\r\n";

//splitting the new line character
var lines = rawData.split( newLineCharacter );

//Getting the no of columns
var noOfCols = lines.length; //23
var noOfRows = 0;
var processedData = [];
for( var i = 1; i < noOfCols; i++ ) {
  var line = lines[i];
  if( line != null && line != '' && line.length != 0 ) {
    noOfRows ++;
    var finalData = line.split( "," );
    processedData.push( finalData );// storing final data in processedData Array

  }
}


// JSON for Bar chart of Population by Country
createPopulationGraph(processedData);

function createPopulationGraph( processedData ) {
  var graphPopulationArray = [];
  var noOfRows = processedData.length;

  for (var i = 0; i < noOfRows; i++) {
    if(processedData[i][0] != "European Union" && processedData[i][0] != "World"){
      graphPopulationArray[i] = {
        country : processedData[i][0],
        population2013 : processedData[i][5]
      };
    }
  }




 fs.writeFile(process.cwd() + "/json/Population.json", JSON.stringify(graphPopulationArray,undefined, 2), function (err) {
    if (err) throw err;
    console.log('Population JSON file has been successfully created');
  });

}

// JSON for Bar chart of GDP by Country
createGDPGraph(processedData);

function createGDPGraph( processedData ) {
  var graphGDPArray = [];
  var noOfRows = processedData.length;
  for (var i = 0; i < noOfRows; i++) {
    if(processedData[i][0] != "European Union" && processedData[i][0] != "World"){
    graphGDPArray[i] = {
      country : processedData[i][0],
      GDP2013 : processedData[i][11]
    };
  }
}
  fs.writeFile(process.cwd() + "/json/GDP.json", JSON.stringify(graphGDPArray,undefined, 2), function (err) {
    if (err) throw err;
    console.log('GDP JSON file has been successfully created');
  });
}

// JSON for Bar chart of Pruchasing Power by country
createPurchasingPowerGraph(processedData);

function createPurchasingPowerGraph( processedData ) {
  var graphPurchasingPowerArray = [];
  var noOfRows = processedData.length;

  for (var i = 0; i < noOfRows; i++) {
      if(processedData[i][0] != "European Union" && processedData[i][0] != "World"){
    graphPurchasingPowerArray[i] = {
      country : processedData[i][0],
      PurchasingPower2013 : processedData[i][23]
    };
  }

}
  fs.writeFile(process.cwd() + "/json/PurchasingPower.json", JSON.stringify(graphPurchasingPowerArray,undefined, 2), function (err) {
    if (err) throw err;
    console.log('Purchasing Power JSON file has been successfully created');
  });
}

// Code for JSON Table

var population=[{"country": "Argentina","population2013": "42.2"},
  {"country": "Australia","population2013": "23.3"},
  {"country": "Brazil","population2013": "201.03"},
  {
    "country": "Canada",
    "population2013": "35.11"
  },
  {
    "country": "China",
    "population2013": "1360.72"
  },
  {
    "country": "France",
    "population2013": "63.65"
  },
  {
    "country": "Germany",
    "population2013": "80.77"
  },
  {
    "country": "India",
    "population2013": "1259.35"
  },
  {
    "country": "Indonesia",
    "population2013": "248.82"
  },
  {
    "country": "Italy",
    "population2013": "59.69"
  },
  {
    "country": "Japan",
    "population2013": "127.34"
  },
  {
    "country": "Mexico",
    "population2013": "118.4"
  },
  {
    "country": "Russia",
    "population2013": "143.7"
  },
  {
    "country": "Saudi Arabia",
    "population2013": "29.99"
  },
  {
    "country": "South Africa",
    "population2013": "53.16"
  },
  {
    "country": "Republic of Korea",
    "population2013": "50.22"
  },
  {
    "country": "Turkey",
    "population2013": "76.06"
  },
  {
    "country": "United Kingdom",
    "population2013": "64.09"
  },
  {
    "country": "USA",
    "population2013": "316.74"
  }
];
console.log("POPulation is ::: "+population);
