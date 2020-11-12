const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgre

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING
        //    defaultValue: "John Doe"
        // allowNull: bool
        // unique: true/false
        // unique: string (multiunicité en fonction de la key)
        // field: string (custom name)
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
});

const StatCount = sequelize.define('StatCount', {
    countHandwashing: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resetDelay: {
        type: DataTypes.DATE
    },
    lastDelay: {
        type: DataTypes.DATE
    }
});

const Entreprise = sequelize.define('Entreprise', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    siret: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const Product = sequelize.define('Product', {
    idEntreprise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Entreprise,
            key: 'id'
        }
    },
    utilisation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    lastFill: {
        type: DataTypes.DATE,
    },
    isEmpty: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    capacity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.25,
    },
});

const User = sequelize.define('User', {
    person: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Person,
            key: 'id'
        }
    },
    idEntreprise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Entreprise,
            key: 'id'
        }
    },
    countHandwashingDay: {
        type: DataTypes.INTEGER
    },
    countDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StatCount,
            key: 'id'
        }
    },
    countMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StatCount,
            key: 'id'
        }
    },
    lastHandwashing: {
        type: DataTypes.DATE
    },
    delayHandwashing: {
        type: DataTypes.DATE
    },
    role: {
        type: DataTypes.ENUM('admin', 'employee', 'responsable', 'surface_technician')
    },
    password: {
        type: DataTypes.STRING
    },
});

exports.Person = Person;
exports.StatCount = StatCount;
exports.Entreprise = Entreprise;
exports.Product = Product;
exports.User = User;

exports.connect = connect;