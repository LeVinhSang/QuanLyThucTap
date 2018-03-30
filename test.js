const knex                          = require('./database/knex-connection');
const InternController = require('./http/controller/intern-controller');



let internController = new InternController;

let intern = {'code': 1400618, 'name': 'Sang',
    'phone': '01648021510', 'email': 'sanglv@sphinx-software.com',
    'address': '', 'sex': 'male'
};

function Test() {
    internController.create(intern);
    console.log('success')
}

Test();