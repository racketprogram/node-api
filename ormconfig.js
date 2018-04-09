const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "user",
    "password": "password",
    "database": "database1",
    "synchronize": true,
    "logging": false,
    "entities": [`${SOURCE_PATH}/**/**.entity{.ts,.js}`],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}