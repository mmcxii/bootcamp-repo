const db = require('./connection');

const selectAllFrom = (table, callback) => {
    const sql = 'SELECT * FROM ??';

    db.query(sql, table, (err, data) => {
        if (err) throw err;

        callback(data);
    });
};

const selectAllFromAndOfType = (table, column, value, callback) => {
    const sql = 'SELECT * FROM ?? WHERE ?? = ?';

    db.query(sql, [table, column, value], (err, data) => {
        if (err) throw err;

        callback(data);
    });
};

const joinTwoTables = (columnOne, columnTwo, tableOne, tableTwo, joinColumn, id, callback) => {
    const sql = 'SELECT ??, ?? FROM ??, INNER JOIN ?? WHERE ?? = ?';

    db.query(sql, [columnOne, columnTwo, tableOne, tableTwo, joinColumn, id], (err, data) => {
        if (err) throw err;

        callback(data);
    });
};

module.exports = { selectAllFrom, selectAllFromAndOfType, joinTwoTables };
