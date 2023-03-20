export function getColor(color, options) {
    let result = {};
    switch (options) {
        case 'RGB':
            result = color.getRGB()
            break;
        case 'RGBA':
            result = color.getRGBA()
            break;
        case 'HEX':
            result = color.getHEX()
            break;
        case 'CMYK':
            result = color.getCMYK()
            break;
        case 'Name':
            result = color.getName()
            break;
        case 'HSL':
            result = color.getHSL()
            break;
        case 'HSLA':
            result = color.getHSLA()
            break;
        case 'HSIA':
            result = color.getHSIA()
            break;
        case 'HLSA':
            result = color.getHLSA()
            break;
        case 'HSI':
            result = color.getHSI()
            break;
        case 'HLS':
            result = color.getHLS()
            break;
        case 'HSV':
            result = color.getHSV()
            break;
        case 'HSB':
            result = color.getHSB()
            break;
        case 'Safe':
            result = color.getSafe()
            break;
        case 'CMY':
            result = color.getCMY()
            break;
        case 'XYZ':
            result = color.getXYZ()
            break;
        case 'Yxy':
            result = color.getYxy()
            break;
        case 'Lab':
            result = color.getLab()
            break;
        case 'LCH':
            result = color.getLCH()
            break;
        case 'HunterLab':
            result = color.getHunterLab()
            break;
        case 'Luv':
            result = color.getLuv()
            break;
        default:
            result = '';
    }
    return result
}