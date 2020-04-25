import Sequelize from "sequelize";

const sequelize = new Sequelize('slack', 'postgres', '1234qwer', {
    dialect: 'postgres',
    underscore: true,
});

const models= {
    User: sequelize.import('./user'),
    Team: sequelize.import('./team'),
    Channel: sequelize.import('./channel'),
    Message: sequelize.import('./message'),
    // member: sequelize.import('./member'),
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;