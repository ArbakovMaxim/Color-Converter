export function ActivInputNameOrHEX(activMenu,
    inputNameOrHEX,
    inputNameOrHEXSecond,
    inputNameOrHEXThird,
    inputNameOrHEXFourth) {
    let activInput = inputNameOrHEX;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = inputNameOrHEX;
            break;
        case 'flowerSystemSecond':
            activInput = inputNameOrHEXSecond;
            break;
        case 'flowerSystemThird':
            activInput = inputNameOrHEXThird;
            break;
        case 'flowerSystemFourth':
            activInput = inputNameOrHEXFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}