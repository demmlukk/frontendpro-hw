function removeElement (arr, el) {
    let index = arr.indexOf(el);
    arr.splice(index, 1);
}


let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);

console.log(array);