export function activInputsThird(activMenu,
    inputThird, inputThird2, inputThird3, inputThird4) {
    let activInput = inputThird;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = inputThird;
            break;
        case 'flowerSystemSecond':
            activInput = inputThird2;
            break;
        case 'flowerSystemThird':
            activInput = inputThird3;
            break;
        case 'flowerSystemFourth':
            activInput = inputThird4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}