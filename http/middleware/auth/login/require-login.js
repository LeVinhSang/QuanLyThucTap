module.exports = function(req, res, next) {
    let authSession = req.app.get('authSession');
    authSession.setSession(req.session);
    if(authSession.isGuest()){
        return res.redirect('');
    }
    next();
};