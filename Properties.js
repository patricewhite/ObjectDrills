let green = [

    {
        name : "Sarah",
        job_title : "nurse",
        boss: "Mike"
    },
    {
        name : "Maurice",
        job_title : "Developer",
        boss: "Mike"
    },
    {
        name : "Maya",
        job_title : "dancer",
        boss: "Mike"
    },
    {
        name:"Brian",
        job_title : "singer"
        
    }

]
for(key in green){
     if (!green[key].boss){
         console.log(`${green[key].job_title} ${green[key].name} does not reports to anybody`);
     } else {
     console.log(`${green[key].job_title} ${green[key].name} reports to ${green[key].boss}`);
     }
 };

