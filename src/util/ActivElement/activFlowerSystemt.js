export function activFlowerSystemt(activMenu,
    flowerSystem,
    flowerSystemSecond,
    flowerSystemThird,
    flowerSystemFourth) {
    let activFlowerSystemt = activMenu;
    switch (activMenu) {
        case 'flowerSystem':
            activFlowerSystemt = flowerSystem;
            break;
        case 'flowerSystemSecond':
            activFlowerSystemt = flowerSystemSecond;
            break;
        case 'flowerSystemThird':
            activFlowerSystemt = flowerSystemThird;
            break;
        case 'flowerSystemFourth':
            activFlowerSystemt = flowerSystemFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activFlowerSystemt
}