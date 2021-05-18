export function findById(anArray, someId) {
    const ID = Number(someId);
    for (let item of anArray) {
        if (item.id === ID) {
            return item;
        }
    }
    return null;
}