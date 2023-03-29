import {
    RGB,
    RGBA,
    HEX,
    CMYK,
    Name,
    HSL,
    HSLA,
    HSIA,
    HLSA,
    HSI,
    HLS,
    HSV,
    HSB,
    Safe,
    CMY,
    XYZ,
    Yxy,
    Lab,
    LCH,
    HunterLab,
} from '../../components/colorModelDescription/index';
export function activColorModel(activBTN) {
    let activColor = activBTN;
    switch (activBTN) {
        case 'RGB':
            activColor = RGB;
            break;
        case 'RGBA':
            activColor = RGBA;
            break;
        case 'HEX':
            activColor = HEX;
            break;
        case 'CMYK':
            activColor = CMYK;
            break;
        case 'Name':
            activColor = Name;
            break;
        case 'HSL':
            activColor = HSL;
            break;
        case 'HSLA':
            activColor = HSLA;
            break;
        case 'HSIA':
            activColor = HSIA;
            break;
        case 'HLSA':
            activColor = HLSA;
            break;
        case 'HSI':
            activColor = HSI;
            break;
        case 'HLS':
            activColor = HLS;
            break;
        case 'HSV':
            activColor = HSV;
            break;
        case 'HSB':
            activColor = HSB;
            break;
        case 'Safe':
            activColor = Safe;
            break;
        case 'CMY':
            activColor = CMY;
            break;
        case 'XYZ':
            activColor = XYZ;
            break;
        case 'Yxy':
            activColor = Yxy;
            break;
        case 'Lab':
            activColor = Lab;
            break;
        case 'LCH':
            activColor = LCH;
            break;
        case 'HunterLab':
            activColor = HunterLab;
            break;
        default:
            console.log('Invalid name');
    }
    return activColor
}