


// read in from samples.json

const bellyurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
var data;

// JSON read in from Eli 
// var url = "samples.json";
// d3.json(url). then( data => {
//     console.log("data", data);
//     console.log("names", data["names"]);
//     console.log("metadata", data["metadata"]);
//     console.log("samples", data["samples"])
//     console.log("metadata[0]", data['metadata'][0]);
//     console.log("samples[0]", data['samples'][0]);
//     console.log('samples[0]["otu_ids"]', data['samples'][0]["otu_ids"]);
//     console.log('samples[0]["otu_labels"]', data['samples'][0]["otu_labels"]);
//     console.log('samples[0]["sample_values"]', data['samples'][0]["sample_values"]);
//     console.log('samples[0]["sample_values"] first 10?', data['samples'][0]["sample_values"].slice(0,10));
// })

// function buildcharts(subId) data.samples  


function buildMeta() {
    let infoBox = d3.select("#selDataset");

    d3.json(bellyurl). then((data) => {
        console.log(data);
        var subId = data.names;
        subId.forEach((sample) => {
            infoBox
              .append("option")
              .text(sample)
              .property("value", sample);
          });

        buildMetadata(subId[0]);
        buildCharts(subId[0]);
    });
}

buildMeta()

function buildMetadata(subId){
    d3.json(bellyurl). then((data) => {
        let subIdmetadata = data.metadata
        var resultArray = subIdmetadata.filter(sampleObj => sampleObj.id == subId);
    var result = resultArray[0];
    let infosample = d3.select("#sample-metadata");
        infosample.html("")

    Object.entries(result).forEach(([key, value]) => {
            infosample.append("h6").text(`${key.toUpperCase()}: ${value}`);
          });
    });
}

function optionChanged(subId){
    buildMetadata(subId);
    buildCharts(subId);
}


// infoBox.append("p").text 

//         subId.forEach((sample) => {
//             dropDown.append("option"). text(sample).property("value", sample)
//         });
//         var initSample = subId[0];
//         buildMeta(initSample);
//     // buildCharts(initSample);
//     });

function BuildCharts(subId) {
d3.json(bellyurl). then((data) => {
    let subIdmetadata = data.samples 
    var resultArray = subIdmetadata.filter(sampleObj => sampleObj.id == subId);
var result = resultArray[0];
    }
}


//  1. Function to collect your metadata (load the data and pull out metadata)
//  a. Use metadata to update your panel with info
// 1. Around 7 lines of code
// https://stackoverflow.com/questions/18238173/javascript-loop-through-json-array
// JSON.parse(data);
// data["samples"];

// for (var data in JSON) {
//     if(JSON.hasOwnProperty(data)) {
//         let obj = json[i];
//         console.log(obj.id);
//      }
//     }


// async function populate(){
//     const request = new Request(url);

//     const response = await fetch(request);
//     const data = await response.text();
    
//     const sampleValues = JSON.parse(data);
//     ("data", data);
//     ("names", data["names"]);
//     ("metadata", data["metadata"]);
//     ("samples", data["samples"])
//     ("metadata[0]", data['metadata'][0]);
//     ("samples[0]", data['samples'][0]);
//     ('samples[0]["otu_ids"]', data['samples'][0]["otu_ids"]);
//     ('samples[0]["otu_labels"]', data['samples'][0]["otu_labels"]);
//     ('samples[0]["sample_values"]', data['samples'][0]["sample_values"]);
//     ('samples[0]["sample_values"] first 10?', data['samples'][0]["sample_values"].slice(0,10));
// }
  




// let samples = JSON.parse(text, String, key, String, encoding: "utf8", value: any) === ",";

// let json = [{
//     "data": data,
//     "names": data.names,
//     "metadata": metadata,
//     "samples": samples,
//     "metadata[0]": demoMetadata,
//     "samples[0]": samplesID,
//     "samples[0]": otu_ids, data['samples'][0]["otu_ids"],
//     "samples[0]["otu_labels"]": data['samples'][0]["otu_labels"],
//     "samples[0]["sample_values"]": data['samples'][0]["sample_values"],
//     "samples[0]["sample_values"]": data['samples'][0]["sample_values"]
// }];









// 3. Function init() for the dropdown
 // Create dropdownMenu Init() function
//  3. About 6 lines or so
 function getData(){
 
    let dropdownMenu = d3.select("names");
    let dataset = dropdownMenu.property("names");
    let data = [];
     if (dataset == "names") {data = names;}

     function getData() {
        let dropDownmenu = d3.select("selDataSet");
        let dataset = dropDownmenu.property("names");
        console.log(dataset);
        let nData= Oject.values(data[dataset]);
        let layout = {
            title: '${dataset}'
        };
    }
}
// Call function to update the chart
    // updatePlotly(data);

// 22222222. Function to create your charts from sample data (load the data and pull out samples)
//  6 lines just to setup variables for your charts...
// Create horizontal bar chart using sample_values and otu_ids and otu_labels
// https://plotly.com/javascript/horizontal-bar-charts/
// function init(){
//     let trace1 = {
//         x: data['sample_values'],
//         y: data['otu_ids'],
//         type: 'bar'
//     };
//     let layout = {
//         title: 'Sample Values',
//         height: 600,
//         width: 600,
//     };

//     let data =[trace1];
//     Plotly.newPlot ("bar", data, layout);
// }
// init();

// Plotly.restyle("bar","values");
      


// hovertext 





// BBBBBBBBUBBLE 
// Create bubble chart displaying otu_ids for x and sample_values as y 
// https://plotly.com/javascript/bubble-charts/
// https://d3-graph-gallery.com/graph/bubble_basic.html

// var trace2 = {
//     x: data['otu_ids'],
//     y: data['sample_values'],
//     mode: 'markers'
//     marker: {
//         size: {
//             width: 20,
//             height: 20
//         }
//     };

// var otuz = [trace2];

// var layout = {
//     title: 'OTU ID',
//     showlegend: true,
//     height: 600,
//     width: 600,
//     xaxis: "OTU_ID"};

// Plotly.newPlot ("bubble", otuz, layout);








// 4. Function to fetch new data each time a new sample is elected (edited)
// 4. about 2 
// deploy on github pages 
//