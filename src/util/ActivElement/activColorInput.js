export function activColorInput(activMenu,
    setColorInput,
    setColorInputSecond,
    setColorInputThird,
    setColorInputFourth) {
    let activColorInput = activMenu;
    switch (activMenu) {
        case 'flowerSystem':
            activColorInput = setColorInput;
            break;
        case 'flowerSystemSecond':
            activColorInput = setColorInputSecond;
            break;
        case 'flowerSystemThird':
            activColorInput = setColorInputThird;
            break;
        case 'flowerSystemFourth':
            activColorInput = setColorInputFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activColorInput
}
