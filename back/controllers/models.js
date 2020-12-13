const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL) // Example for postgre

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await People.sync({alter: true});
        await StatCount.sync({alter: true});
        await Entreprise.sync({alter: true});
        await Product.sync({alter: true});
        await Users.sync({alter: true});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const People = sequelize.define('people', {
    firstName: {
        type: DataTypes.STRING,
        field: "firstname"
        //    defaultValue: "John Doe"
        // allowNull: bool
        // unique: true/false
        // unique: string (multiunicité en fonction de la key)
        // field: string (custom name)
    },
    lastName: {
        type: DataTypes.STRING,
        field: "lastname"
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

const StatCount = sequelize.define('stat_count', {
    countHandwashing: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "count_handwashing"
    },
    resetDelay: {
        type: DataTypes.DATE,
        field: "reset_delay"
    },
    lastDelay: {
        type: DataTypes.DATE,
        field: "last_delay"
    }
}, {
    timestamps: false
});

const Entreprise = sequelize.define('entreprise', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    siret: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

const Product = sequelize.define('product', {
    idArduino: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_arduino"
    },
    idEntreprise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Entreprise,
            key: 'id'
        },
        field: "id_entreprise"
    },
    utilisation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    lastFill: {
        type: DataTypes.DATE,
        field: "last_fill"
    },
    isEmpty: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: "is_empty"
    },
    capacity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.25,
    },
}, {
    timestamps: false
});

const Users = sequelize.define('users', {
    people: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: People,
            key: 'id'
        }
    },
    idEntreprise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Entreprise,
            key: 'id'
        },
        field: "id_entreprise"
    },
    countHandwashingDay: {
        type: DataTypes.INTEGER,
        field: "count_handwashing_day"
    },
    countDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StatCount,
            key: 'id'
        },
        field: "count_day"
    },
    countMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StatCount,
            key: 'id'
        },
        field: "count_month"
    },
    lastHandwashing: {
        type: DataTypes.DATE,
        field: "last_handwashing"
    },
    delayHandwashing: {
        type: DataTypes.DATE,
        field: "delay_handwashing"
    },
    role: {
        type: DataTypes.ENUM('admin', 'employee', 'responsable', 'surface_technician')
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false
});

exports.People = People;
exports.StatCount = StatCount;
exports.Entreprise = Entreprise;
exports.Product = Product;
exports.Users = Users;

exports.connect = connect;