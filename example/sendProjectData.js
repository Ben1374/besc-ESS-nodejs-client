var besc_client = require("../src/index");

var keypair = new besc_client.keyPair("1", "abc123");

const queryOptions = besc_client.ProjectDataOptions;
const ProjectData = besc_client.ProjectData;
const Device = besc_client.Device;

var host_client = besc_client.Host.createDefault();

(async () =>{ 

    var projectData = ProjectData.creatWithCurrentTime(
        "Testing", 
        [
            new Device("AABC1",40), 
            new Device("AABC2",70)
        ],
        110,
        80.5,
        "Malaysia"
    );

    try{
        var response = await besc_client.API.sendProjectData(host_client, keypair, projectData);

        //console.log(response);
    }
    catch(apiError){
        // apiError.statusCode - request http status code
        // apiError.error - error message that send back from server
        //console.log(apiError);
    }

})();
