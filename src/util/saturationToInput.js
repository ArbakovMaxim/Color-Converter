export function saturationToInput(color, saturation, flowerSystem) {
    color.setHSV(saturation.h, saturation.s / 100, saturation.v / 100);

    let result = {};

    if (flowerSystem === 'RGB') {
        result = color.getRGB()
        return result
    }

    if (flowerSystem === 'RGBA') {
        result = color.getRGBA()
        return result
    }

    if (flowerSystem === 'HEX') {
        try {
            result = color.getHEX()
            return result
        } catch (error) {
            return result
        }
    }
    if (flowerSystem === 'CMYK') {
        result = color.getCMYK()
        return result
    }

    if (flowerSystem === 'Name') {
        try {
            result = color.getName()
            return result
        } catch (error) {
            return "no name"
        }

    }
    if (flowerSystem === 'HSL') {
        result = color.getHLS()
        return result
    }

    if (flowerSystem === 'HSLA') {
        result = color.getHLSA()
        return result
    }
    if (flowerSystem === 'LCH') {
        result = color.getLCH()
        console.log(color.getLCH())
        return result
    }

    if (flowerSystem === 'HSIA') {
        result = color.getHSIA()
        return result
    }

    if (flowerSystem === 'HLSA') {
        result = color.getHLSA()
        return result
    }

    if (flowerSystem === 'HSI') {
        result = color.getHSI()
        return result
    }

    if (flowerSystem === 'HLS') {
        result = color.getHLS()
        return result
    }

    if (flowerSystem === 'HSV') {
        result = color.getHSV()
        return result
    }

    if (flowerSystem === 'HSB') {
        result = color.getHSB()
        return result
    }
    if (flowerSystem === 'Safe') {
        result = color.getSafe()
        return result
    }
    if (flowerSystem === 'CMY') {
        result = color.getCMY()
        return result
    }
    if (flowerSystem === 'XYZ') {
        result = color.getXYZ()
        return result
    }
    if (flowerSystem === 'Yxy') {
        result = color.getYxy()
        return result
    }
    if (flowerSystem === 'Lab') {
        result = color.getLab()
        return result
    }
    if (flowerSystem === 'HunterLab') {
        result = color.getHunterLab()
        return result
    }
    if (flowerSystem === 'Luv') {
        result = color.getLuv()
        return result
    }
}
