


// read in from samples.json


var url = "samples.json";
d3.json(url). then( data => {
    console.log("data", data);
    console.log("names", data["names"]);
    console.log("metadata", data["metadata"]);
    console.log("samples", data["samples"])
    console.log("metadata[0]", data['metadata'][0]);
    console.log("samples[0]", data['samples'][0]);
    console.log('samples[0]["otu_ids"]', data['samples'][0]["otu_ids"]);
    console.log('samples[0]["otu_labels"]', data['samples'][0]["otu_labels"]);
    console.log('samples[0]["sample_values"]', data['samples'][0]["sample_values"]);
    console.log('samples[0]["sample_values"] first 10?', data['samples'][0]["sample_values"].slice(0,10));
})

let samples = []

 // Create dropdownMenu
function getData(){
// 
    let dropdownMenu = d3.select("names");
    let dataset = dropdownMenu.property("names");
    let data = [];
     if (dataset == "names") {data = names;}

// Call function to update the chart
    updatePlotly(data);
}

// Create horizontal bar chart using sample_values and otu_ids and otu_labels
// https://plotly.com/javascript/horizontal-bar-charts/
function init(){
    let trace1 = {
        x: data["sample_values"],
        y: data["otu_ids"],
        type: 'bar'
    };
    let layout = {
        title: 'Sample Values',
        height: 600,
        width: 600,
    };

    let data =[trace1];
    Plotly.newPlot ("bar", data, layout);
}
init();

function getData() {
    let dropDownmenu = d3.select("selDataSet");
    let dataset = dropDownmenu.property("names");
    console.log(dataset);
    let nData= Oject.values(data[dataset]);
    let layout = {
        title: '${dataset}'
    };
    Plotly.restyle("bar","values,[nData]);
    Plotly.restyle("bar","values,[nData]);"
}


// hovertext 





// Create bubble chart displaying otu_ids for x and sample_values as y 
// https://plotly.com/javascript/bubble-charts/


// deploy on github pages 


