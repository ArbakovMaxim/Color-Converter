export function getColor(color, options, setErrorMassege) {
    let result = {};
    switch (options) {
        case 'RGB':
            try {
                result = color.getRGB()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'RGBA':
            try {
                result = color.getRGBA()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HEX':
            try {
                result = color.getHEX()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'CMYK':
            try {
                result = color.getCMYK()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'Name':
            try {
                result = color.getName()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSL':
            try {
                result = color.getHSL()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSLA':
            try {
                result = color.getHSLA()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSIA':
            try {
                result = color.getHSIA()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HLSA':
            try {
                result = color.getHLSA()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSI':
            try {
                result = color.getHSI()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HLS':
            try {
                result = color.getHLS()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSV':
            try {
                result = color.getHSV()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HSB':
            try {
                result = color.getHSB()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'Safe':
            try {
                result = color.getSafe()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'CMY':
            try {
                result = color.getCMY()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'XYZ':
            try {
                result = color.getXYZ()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'Yxy':
            try {
                result = color.getYxy()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'Lab':
            try {
                result = color.getLab()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'LCH':
            try {
                result = color.getLCH()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'HunterLab':
            try {
                result = color.getHunterLab()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        case 'Luv':
            try {
                result = color.getLuv()
            } catch (error) {
                setErrorMassege(`${error}`)
                result = ""
            }
            break;
        default:
            result = '';
    }
    return result
}