export function activInputs(activMenu,
    input, input2, input3, input4) {
    let activInput = input;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = input;
            break;
        case 'flowerSystemSecond':
            activInput = input2;
            break;
        case 'flowerSystemThird':
            activInput = input3;
            break;
        case 'flowerSystemFourth':
            activInput = input4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}