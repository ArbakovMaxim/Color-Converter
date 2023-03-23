export function activInputsSecond(activMenu,
    inputSecond, inputSecond2, inputSecond3, inputSecond4) {
    let activInput = inputSecond;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = inputSecond;
            break;
        case 'flowerSystemSecond':
            activInput = inputSecond2;
            break;
        case 'flowerSystemThird':
            activInput = inputSecond3;
            break;
        case 'flowerSystemFourth':
            activInput = inputSecond4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}