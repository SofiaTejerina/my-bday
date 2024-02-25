import responseService from '../services/responseService.js'

class GraphController {
    setResponse(req, res, next) {
        try {
            const response = req.body;
            responseService.saveResponse(response);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }

    async getResponses(req, res, next) {
        try {
            const responses = await graphService.getResponses();
            res.status(200).send(responses);
        } catch (err) {
            next(err);
        }
    }

    getResponseID(req, res, next) {
        try {
            const nextID = graphService.getNextID();
            res.status(200).send({ nextID });
        } catch (err) {
            next(err);
        }
    }
}

export default new GraphController();
