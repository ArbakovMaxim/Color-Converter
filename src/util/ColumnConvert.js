
import { getColor } from "./getColor";

export function columnConvert(flowerSystem, rightsFlowerSystem, inputOne, color, setErrorMassege) {
    let result = {}

    if (flowerSystem === 'RGB') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setRGB(colorEl[0],
                    colorEl[1],
                    colorEl[2])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)

        return result
    }
    if (flowerSystem === 'RGBA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            try {
                color.setRGB(colorEl[0],
                    colorEl[1],
                    colorEl[2])
                color.setAlpha(colorEl[3])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HEX') {
        try {
            color.setHEX(inputOne)
            setErrorMassege(``)
        } catch (error) {
            setErrorMassege(`${error}`)
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'CMYK') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            try {
                color.setCMYK(colorEl[0],
                    colorEl[1],
                    colorEl[2],
                    colorEl[3])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'Name') {
        try {
            color.setName(inputOne.trim())
            setErrorMassege(``)
        } catch (error) {
            setErrorMassege(`${error}`)
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSL') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHSL(colorEl[0],
                    colorEl[1],
                    colorEl[2])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSLA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            try {
                color.setHSLA(colorEl[0],
                    colorEl[1],
                    colorEl[2],
                    colorEl[3])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSIA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            try {
                color.setHSIA(colorEl[0],
                    colorEl[1],
                    colorEl[2],
                    colorEl[3])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HLSA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            try {
                color.setHLSA(colorEl[0],
                    colorEl[1],
                    colorEl[2],
                    colorEl[3])
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSI') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHSI(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HLS') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHLS(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSV') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHSV(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HSB') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHSB(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'Safe') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setRGB(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'CMY') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setCMY(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'XYZ') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setXYZ(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'Yxy') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setYxy(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'LCH') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setLCH(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'Lab') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setLab(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'HunterLab') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setHunterLab(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
    if (flowerSystem === 'Luv') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            try {
                color.setLuv(colorEl[0],
                    colorEl[1],
                    colorEl[2],)
                setErrorMassege(``)
            } catch (error) {
                setErrorMassege(`${error}`)
            }
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem, setErrorMassege)
        return result
    }
}