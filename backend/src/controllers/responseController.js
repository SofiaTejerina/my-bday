import responseService from '../services/responseService.js'

class GraphController {
    setResponse(req, res, next) {
        try {
            const response = req.body;
            responseService.safeResponse(response);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }
}

export default new GraphController();
