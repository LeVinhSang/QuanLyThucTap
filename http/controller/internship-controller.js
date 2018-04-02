class InternshipController {

    create(req, res, next) {
        let repo = req.app.get('internship.repo');
        repo.add(req.internship).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports = InternshipController;
