export function activSetInputNameOrHEX(activMenu,
    setInputNameOrHEX,
    setInputNameOrHEXSecond,
    setInputNameOrHEXThird,
    setInputNameOrHEXFourth) {
    let activInput = setInputNameOrHEX;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = setInputNameOrHEX;
            break;
        case 'flowerSystemSecond':
            activInput = setInputNameOrHEXSecond;
            break;
        case 'flowerSystemThird':
            activInput = setInputNameOrHEXThird;
            break;
        case 'flowerSystemFourth':
            activInput = setInputNameOrHEXFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}