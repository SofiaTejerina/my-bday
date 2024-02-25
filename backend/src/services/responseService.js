import dbClient from "../database/dbClient.js";

class GraphService {
    saveResponse(response) {
        let responses = this.getResponses();
        response = {...response, id: this.getNextID()};
        responses.push(response);
        console.log(response);
        dbClient.writeJSON(responses);
    }

    getResponses() {
        return dbClient.readJSON()
    }

    getNextID() {
        const responses = this.getResponses()
        let maxID = 0
        for (const response of responses) {
            maxID = Math.max(maxID, response.id)
        }
        return maxID + 1
    }
}

export default new GraphService();
