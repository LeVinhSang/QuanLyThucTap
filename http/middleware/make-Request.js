const InternFactory = require('../../src/intern/intern-provider');

function MakeRequestDB(request, response , next) {
    let internFactory = new InternFactory();
    internFactory.makeFromDB(request).then(result=>{
        request.intern = result;
        next();
    })
}
module.exports = MakeRequestDB;