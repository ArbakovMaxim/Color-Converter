import { Color } from "js/color";
import { getColor } from "./getColor";

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
        result = getColor(color, rightsFlowerSystem)
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
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HEX') {
        try {
            color.setHEX(inputOne)
        } catch (error) {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'CMYK') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            color.setCMYK(colorEl[0],
                colorEl[1],
                colorEl[2],
                colorEl[3])
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'Name') {
        try {
            color.setName(inputOne.trim())
        } catch (error) {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSL') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHSL(colorEl[0],
                colorEl[1],
                colorEl[2])
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSLA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            color.setHSLA(colorEl[0],
                colorEl[1],
                colorEl[2],
                colorEl[3])
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSIA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            color.setHSIA(colorEl[0],
                colorEl[1],
                colorEl[2],
                colorEl[3])
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HLSA') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2] && colorEl[3]) {
            color.setHLSA(colorEl[0],
                colorEl[1],
                colorEl[2],
                colorEl[3])
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSI') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHSI(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSI') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHSI(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HLS') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHLS(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HLS') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHLS(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSV') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHSV(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HSB') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHSB(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'Safe') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setRGB(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'CMY') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setCMY(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'XYZ') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setXYZ(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'Yxy') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setYxy(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'Lab') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setLab(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'HunterLab') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setHunterLab(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
    if (flowerSystem === 'Luv') {
        const colorEl = inputOne.split(',');
        if (colorEl[0] && colorEl[1] && colorEl[2]) {
            color.setLuv(colorEl[0],
                colorEl[1],
                colorEl[2],)
        } else {
            return result
        }
        result = getColor(color, rightsFlowerSystem)
        return result
    }
}