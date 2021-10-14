const convertToVnd = (value) => {
    return value.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

export {
    convertToVnd
};