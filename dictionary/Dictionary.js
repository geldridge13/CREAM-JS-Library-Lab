const ValuePair = require('./keyValuePair');

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key) {
        return this.table[this.toStrFn()] != null;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }


}

function defaultToString(item){

    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string'|| item instanceof String) {
        return `${item}`
    }
    return item.toString();
    
}





module.exports = Dictionary;