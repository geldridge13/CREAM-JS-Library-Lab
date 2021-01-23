const ValuePair = require('./keyValuePair');

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
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

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn((key))];
            return true;
        }
        return false;
    }

    keyValues() {
        return Object.values(this.table);
    }

    size() {
        return this.keyValues().length;
    }

    clear() {
        this.table = {};
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
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