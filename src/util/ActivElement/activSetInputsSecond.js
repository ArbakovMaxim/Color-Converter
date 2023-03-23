export function activSetInputsSecond(activMenu,
    setInputSecond,
    setInputSecond2,
    setInputSecond3,
    setInputSecond4) {
    let activInput = setInputSecond;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = setInputSecond;
            break;
        case 'flowerSystemSecond':
            activInput = setInputSecond2;
            break;
        case 'flowerSystemThird':
            activInput = setInputSecond3;
            break;
        case 'flowerSystemFourth':
            activInput = setInputSecond4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}