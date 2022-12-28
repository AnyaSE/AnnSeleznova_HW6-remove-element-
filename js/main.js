const array = [3, 5, 7, 9, 1, 4, 2, 6, 8];

function removeElement (array, item) {
    const numberIndex = array.indexOf(item);
    if (array.includes(item)) {
        array.splice(numberIndex, 1);
    } else {
        console.log('This item is not in the array');
    }
    return array;
}; 

console.log(removeElement(array, 2));
