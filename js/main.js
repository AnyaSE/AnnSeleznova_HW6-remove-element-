const array = [3, 5, 7, 10, 12, 14, 2, 6, 8];

function removeElement (array, item) {
    if (array.includes(item)) {
        array.splice(item, 1);
    } else {
    console.log(`This number is not in the array`);
    } 
    return array;
};

console.log(removeElement(array, 7));
