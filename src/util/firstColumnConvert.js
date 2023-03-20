import { Color } from "js/color";

export function firstColumnConvert(flowerSystem, rightsFlowerSystem, inputOne) {
    const color = new Color();
    let result = {}

    if (flowerSystem === 'RGB') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setRGB(colorEl[0],
                colorEl[1],
                colorEl[2])
        } else {
            return result
        }
        switch (rightsFlowerSystem) {
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
                result = color.getHLS()  ////////////////проверить
                break;
            case 'HSV':
                result = color.getHSV()
                break;
            case 'HSB':
                result = color.getHSB() ////////////////проверить
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
    if (flowerSystem === 'RGBA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            color.setRGB(colorEl[0],
                colorEl[1],
                colorEl[2])
            color.setAlpha(colorEl[3])
        } else {
            return result
        }
        if (colorEl[3]) {
            color.setAlpha(colorEl[3])
        }
        switch (rightsFlowerSystem) {
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
                result = color.getHLS()  ////////////////проверить
                break;
            case 'HSV':
                result = color.getHSV()
                break;
            case 'HSB':
                result = color.getHSB() ////////////////проверить
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
    if (flowerSystem === 'HEX') {
        try {
            color.setHEX(inputOne)
        } catch (error) {
            return result
        }
        switch (rightsFlowerSystem) {
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
                result = color.getHLS()  ////////////////проверить
                break;
            case 'HSV':
                result = color.getHSV()
                break;
            case 'HSB':
                result = color.getHSB() ////////////////проверить
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
    if (flowerSystem === 'CMYK') {
        switch (rightsFlowerSystem) {
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
                result = color.getHLS()  ////////////////проверить
                break;
            case 'HSV':
                result = color.getHSV()
                break;
            case 'HSB':
                result = color.getHSB() ////////////////проверить
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
}