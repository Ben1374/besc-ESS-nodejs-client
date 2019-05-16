var besc_client = require("../src/index");

var keypair = new besc_client.keyPair("1", "abc123");

const queryOptions = besc_client.ProjectDataOptions;

var host_client = besc_client.Host.createDefault();

(async () =>{ 

    var options = queryOptions;

    options.limit = 5;

    try{
        var response = await besc_client.API.getProjectData(host_client, keypair, queryOptions);

        //console.log(response);
    }
    catch(apiError){
        // apiError.statusCode - request http status code
        // apiError.error - error message that send back from server
        //console.log(apiError);
    }

})();
