


// read in from samples.json

// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").
// then((data) => {

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
// });


var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
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


 // Create dropdownMenu
// let label = Object.keys(data['names'])

// function getData() {
//     let dropdownMenu = d3.select(" - ")
//     let dataset = d3.select(" dataset");
//     let dataset = dropdownMenu.property("names");
//     let data = [];
//      if (dataset == "names") {data = names;}
// }


// Create horizontal bar chart using sample_values and otu_ids and otu_labels
// https://plotly.com/javascript/horizontal-bar-charts/
let trace1 = {
    x:
}

var data = [{
    type:'bar',
    x: ["sample_values"[0]['
    y: [otu_ids],
    orientation: 'h'
}];

Plotly.newPlot ()

// hovertext 

}



// Create bubble chart displaying otu_ids for x and sample_values as y 
// https://plotly.com/javascript/bubble-charts/


// deploy on github pages 


