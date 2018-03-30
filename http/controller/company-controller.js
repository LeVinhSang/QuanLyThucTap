class CompanyController  {

    create(req, res, next) {
        let repo = req.app.get('company.repo');
        repo.add(req.company).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }

    update(req, res, next) {
        let repo = req. app.get('company.repo');
        repo.edit(req.company).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
}

module.exports = CompanyController;
