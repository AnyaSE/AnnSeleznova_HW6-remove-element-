const array = [3, 5, 7, 10, 12, 14, 2, 6, 8];

function removeElement (array, item) {
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (array.includes(number)) {
            array.splice(item, 1);
        } else {
        console.log(`This index is not in the array`);
        } 
        return array;
    }
};

console.log(removeElement(array, 7));
