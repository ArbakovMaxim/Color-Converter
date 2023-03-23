export function activSetInputs(activMenu,
    setInput,
    setInput2,
    setInput3,
    setInput4) {
    let activInput = setInput;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = setInput;
            break;
        case 'flowerSystemSecond':
            activInput = setInput2;
            break;
        case 'flowerSystemThird':
            activInput = setInput3;
            break;
        case 'flowerSystemFourth':
            activInput = setInput4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}