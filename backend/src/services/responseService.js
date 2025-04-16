import responsesDB from "../database/responses.js";

class GraphService {
    saveResponse(response) {
        responsesDB.insertResponse(response);
    }

    async getResponses() {
        console.log(await responsesDB.getResponses());
        return await responsesDB.getResponses();
    }
}

export default new GraphService();
