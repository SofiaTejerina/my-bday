import dbClient from "../database/dbClient.js";
import responsesDB from "../database/responses.js";

class GraphService {
    saveResponse(response) {
        // let responses = this.getResponses();
        // response = {...response, id: this.getNextID()};
        // responses.push(response);
        // console.log(response);
        // dbClient.writeJSON(responses);
        responsesDB.insertResponse(response);
    }

    async getResponses() {
        // return dbClient.readJSON()
        console.log(await responsesDB.getResponses());
        return await responsesDB.getResponses();
    }
}

export default new GraphService();
