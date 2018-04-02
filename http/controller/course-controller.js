class CourseController {

    create(req, res, next) {
        let repo = req.app.get('course.repo');
        repo.add(req.course).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req.app.get('course.repo');
        repo.edit(req.course).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    confirm(req, res, next) {
        let repo = req.app.get('course.service');
        repo.confirm(req.params.id).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    open(req, res, next) {
        let repo = req.app.get('course.service');
        repo.open(req.params.id).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

}

module.exports = CourseController;