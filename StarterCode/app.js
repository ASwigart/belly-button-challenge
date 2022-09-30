


// read in from samples.json

const bellyurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
var data;

// JSON read in from Eli 
// var url = "samples.json";
// d3.json(bellyurl). then( data => {
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
// Create horizontal bar chart using sample_values and otu_ids and otu_labels
function buildCharts(subId) {
    d3.json(bellyurl). then((data) => {
        let subIdmetadata = data.samples 
        var resultArray = subIdmetadata.filter(sample_value => sample_value.id == subId);
        var result = resultArray[0];


    var data = [
        {
            x: result.sample_values.slice(0,10).reverse(),
            y: result.otu_ids.slice(0,10).map(Id => `OTU ${Id}`).reverse(),
            type: 'bar',
            orientation: 'h'
        } 
    ];
    var layout = {
        title: 'Top 10 Sample Values',
        height: 600,
        width: 600,
    }
    Plotly.newPlot("bar", data, layout);
    
    var data = [
        {
            y: result.sample_values,
            x: result.otu_ids,
            mode: 'markers',
            marker: {
                size: result.sample_values,
                color: result.otu_ids,
                colorscale: 'Greens',
            }
            
        } 
    ];
    var layout = {
        title: 'Sample Values',
    }
    Plotly.newPlot("bubble", data, layout, {responsive: true});
    });
}



      
