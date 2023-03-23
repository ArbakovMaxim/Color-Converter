export function activSetInputsThird(activMenu,
    setInputThird,
    setInputThird2,
    setInputThird3,
    setInputThird4) {
    let activInput = setInputThird;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = setInputThird;
            break;
        case 'flowerSystemSecond':
            activInput = setInputThird2;
            break;
        case 'flowerSystemThird':
            activInput = setInputThird3;
            break;
        case 'flowerSystemFourth':
            activInput = setInputThird4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}