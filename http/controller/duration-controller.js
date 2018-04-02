class DurationController {

    create(req, res, next) {
        let repo = req.app.get('duration.repo');
        repo.add(req.duration).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req.app.get('duration.repo');
        repo.edit(req.duration).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports = DurationController;

