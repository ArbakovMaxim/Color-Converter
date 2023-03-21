export function activColorInputValue(colorInput,
    colorInputSecond,
    colorInputThird,
    colorInputFourth,
    activMenu) {
    let activColorInputValue = activMenu;
    switch (activMenu) {
        case 'flowerSystem':
            activColorInputValue = colorInput;
            break;
        case 'flowerSystemSecond':
            activColorInputValue = colorInputSecond;
            break;
        case 'flowerSystemThird':
            activColorInputValue = colorInputThird;
            break;
        case 'flowerSystemFourth':
            activColorInputValue = colorInputFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activColorInputValue
}
