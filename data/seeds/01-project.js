
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'project name', description: 'project description' },
        { name: 'project name', description: 'project description' },
        { name: 'project name', description: 'project description' }
      ]);
    });
};

