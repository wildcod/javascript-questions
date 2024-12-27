const isObject = (obj) => typeof obj === 'object' && obj !== null;

function update(data, command) {
    if ('$push' in command) {
        if (!Array.isArray(data)) {
            throw new Error('not an array');
        }

        return [...data, ...command['$push']];
    }

    if ('$merge' in command) {
        if (!isObject(data)) {
            throw new Error('not an object');
        }
        return { ...data, ...command['$merge'] }
    }

    if ('$set' in command) {
        return command['$set'];
    }

    if ('$apply' in command) {
        return command['$apply'](data);
    }

    const newData = Array.isArray(data) ? [...data] : { ...data };

    for (let key of Object.keys(command)) {
        newData[key] = update(newData[key], command[key]);
    }

    return newData;
}