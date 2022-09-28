


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
// Function to fetch new data each time a new sample is elected (edited)
function optionChanged(subId){
    buildMetadata(subId);
    buildCharts(subId);
}

buildMetadata()

// function buildcharts(subId) data.samples 
function BuildCharts(subId) {
    d3.json(bellyurl). then((data) => {
        let subIdmetadata = data.samples 
        var resultArray = subIdmetadata.filter(sampleObj => sampleObj.id == subId);
    var result = resultArray[0];
    });
}



// 3. Function init() for the dropdown
 // Create dropdownMenu Init() function
//  3. About 6 lines or so

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








// 4. 
// 4. about 2 
// deploy on github pages 
//