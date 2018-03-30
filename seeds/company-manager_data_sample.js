
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companyManager').del()
        .then(function () {
            // Inserts seed entries
            return knex('companyManager').insert([
                {id: 1, name: 'mai',company_id: '1', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 2, name: 'hoa',company_id: '2', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 3, name: 'xuan',company_id: '3', sex : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
