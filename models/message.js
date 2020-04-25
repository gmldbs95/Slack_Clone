export default (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: DataTypes.STRING
    },
        {underscore: true},
    );

    Message.associate = (models) => {
        // 1:M
        Message.belongsTo(models.Channel, {
            foreignKey: 'channelId',
        });
        Message.belongsTo(models.User, {
            foreignKey: 'UserId',
        });
    }
    return Message;
};