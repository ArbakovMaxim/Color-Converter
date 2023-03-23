export function activInputsFourth(activMenu,
    inputFourth, inputFourth2, inputFourth3, inputFourth4) {
    let activInput = inputFourth;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = inputFourth;
            break;
        case 'flowerSystemSecond':
            activInput = inputFourth2;
            break;
        case 'flowerSystemThird':
            activInput = inputFourth3;
            break;
        case 'flowerSystemFourth':
            activInput = inputFourth4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}