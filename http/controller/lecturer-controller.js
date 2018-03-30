class LecturerController {

    /**
     * 
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }
    
    create(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.add(req.lecturer).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.edit(req.lecturer).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    remove(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.remove(req.params.id).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports = LecturerController;
