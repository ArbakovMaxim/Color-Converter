export function activSetInputsFourth(activMenu,
    setInputFourth,
    setInputFourth2,
    setInputFourth3,
    setInputFourth4) {
    let activInput = setInputFourth;
    switch (activMenu) {
        case 'flowerSystem':
            activInput = setInputFourth;
            break;
        case 'flowerSystemSecond':
            activInput = setInputFourth2;
            break;
        case 'flowerSystemThird':
            activInput = setInputFourth3;
            break;
        case 'flowerSystemFourth':
            activInput = setInputFourth4;
            break;
        default:
            console.log('Invalid name');
    }
    return activInput
}