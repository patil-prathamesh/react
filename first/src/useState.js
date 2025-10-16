let value;

function useState(val) {
    value = val;
    return [val, setVal]
}

function setVal(val) {
    value = val
}