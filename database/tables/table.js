class Table{
    constructor(tableName, shortName = null){
        this.tableName = tableName;
        this.shortName = shortName ? shortName : tableName;
    }
}

export default Table;