'use strict';

const { Service } = require('ee-core');
const Storage = require('ee-core/storage');
/**
 * sqlite数据存储
 * @class
 */
class SqliteDBService extends Service {

    constructor (ctx) {
        super(ctx);

        this.sqliteFile = 'sqlite-demo.db';

        // sqlite数据库
        this.demoSqliteDB = Storage.connection(this.sqliteFile, {
            driver: 'sqlite',
            default: {
                timeout: 6000,
                verbose: console.log // 打印sql语法
            }
        });
    }

    add(sql, data) {
        // const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (name, age) VALUES (@name, @age)`);
        // insert.run(data);
    }

}

SqliteDBService.toString = () => '[class SqliteDBService]';
module.exports = SqliteDBService;
