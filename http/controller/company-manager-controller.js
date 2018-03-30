class CompanyManagerController {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    create(req, res, next) {
        let repo = req.app.get('company-manager.repo');
        repo.add(req.companyManager).then( () => {
            res.send({message: 'success'});
        })
    }
}

module.exports = CompanyManagerController;
