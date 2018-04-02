class RegistrationController {

    send(req, res, next) {
        let service = req.app.get('registration.service');
        service.send(req.registration).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
    
    confirm(req, res, next) {
        let service = req.app.get('registration.service');
        service.confirm(req.registration).then( () => {
            res.send({message: 'success'});
        }).catch(next);
    }
    
    update(req, res, next) {
        let service = req.app.get('registration.service');
        service.edit(req.registration).then( () => {
            res.send({message: 'success'});
        }).catch(next)
    }
}

module.exports = RegistrationController;
