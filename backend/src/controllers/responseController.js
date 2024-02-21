export default class GraphController {
    setResponse(req, res, next) {
        try {
            const response = req.body;
            console.log(response);
            // graphService.updateNodes(nodes);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }
}
