class InternController {

    create(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.add(req.intern).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.edit(req.intern).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    remove(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.delete(req.params.id).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    confirm(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.confirm(req.params.id).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports = InternController;