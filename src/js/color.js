import Converter from './converter.js'

export default class Color {
    constructor() {
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.alpha = 1;
        this.bgRed = 255;
        this.bgGreen = 255;
        this.bgBlue = 255;
    }

    setRGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;

        this.resetAlpha();

        return this._checkColor();
    }

    getRGB(val = '') {
        let rgb = {};
        if (this.alpha !== 1.0) {
            rgb = Converter.RGBAToRGB(
                this.red,
                this.green,
                this.blue,
                this.alpha,
                this.bgRed,
                this.bgGreen,
                this.bgBlue
            );
        } else {
            rgb = this._compactColor(this.red, this.green, this.blue);
        }

        return this.getRGBValue(rgb, val);
    }

    setAlpha(alpha) {
        this.alpha = alpha;

        return this._checkAlpha();
    }

    getAlpha() {
        return this.alpha;
    }

    setBgRGB(red, green, blue) {
        this.bgRed = red;
        this.bgGreen = green;
        this.bgBlue = blue;

        return this._checkBgColor();
    }

    getBgRGB(val = '') {
        const rgb = this._compactColor(this.bgRed, this.bgGreen, this.bgBlue);

        return this.getRGBValue(rgb, val);
    }

    getRGBValue(rgb, val = '') {
        switch (val) {
            case 'r':
            case 'red':
                return rgb = rgb['red'];
            case 'g':
            case 'green':
                return rgb = rgb['green'];
            case 'b':
            case 'blue':
                return rgb = rgb['blue'];
            default:
                return rgb;
        }
    }

    setRGBA(
        red,
        green,
        blue,
        alpha,
        bgRed = 255,
        bgGreen = 255,
        bgBlue = 255
    ) {
        this.setRGB(red, green, blue)
            .setAlpha(alpha)
            .setBgRGB(bgRed, bgGreen, bgBlue);

        return this;
    }

    getRGBA() {
        return this._compactColor(this.red, this.green, this.blue, this.alpha);
    }

    setHEX(hex) {
        hex = hex.toLowerCase().trim();
        switch (hex.length) {
            case 1:
                hex = hex + hex + hex + hex + hex + hex;
                break;
            case 2:
                hex = hex[0] + hex[1] + hex[0] + hex[1] + hex[0] + hex[1];
                break;
            case 3:
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                break;
            case 6:
                break;
            default:
                throw new Error('Invalid HEX length!');
        }
        const rgb = Converter.HEXToRGB(hex);

        this.setRGB(rgb['red'], rgb['green'], rgb['blue']);

        return this;
    }

    getHEX() {
        const rgb = this.getRGB();
        return Converter.RGBToHEX(rgb['red'], rgb['green'], rgb['blue']);
    }

    setCMYK(cyan, magenta, yellow, key) {
        const rgb = Converter.CMYKToRGB(cyan, magenta, yellow, key);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getCMYK() {
        const rgb = this.getRGB();

        return Converter.RGBToCMYK(rgb['red'], rgb['green'], rgb['blue']);
    }

    setCMY(cyan, magenta, yellow) {
        const rgb = Converter.CMYToRGB(cyan, magenta, yellow);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);

    }

    getCMY() {
        const rgb = this.getRGB();

        return Converter.RGBToCMY(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHLSA(hue, lightness, saturation, alpha) {
        const rgba = Converter.HLSAToRGBA(hue, lightness, saturation, alpha);

        return this.setRGBA(rgba['red'], rgba['green'], rgba['blue'], rgba['alpha']);
    }

    getHLSA() {
        const rgb = this.getRGBA();

        return Converter.RGBAToHLSA(rgb['red'], rgb['green'], rgb['blue'], rgb['alpha']);
    }

    setHLS(hue, lightness, saturation) {
        const rgb = Converter.HLSToRGB(hue, lightness, saturation);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getHLS() {
        const rgb = this.getRGB();

        return Converter.RGBToHLS(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHSB(hue, saturation, brightness) {
        const rgb = Converter.HSBToRGB(hue, saturation, brightness);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getHSB() {
        const rgb = this.getRGB();

        return Converter.RGBToHSB(rgb['red'], rgb['green'], rgb['blue']);
    }

    setName(name) {
        const rgb = Converter.NameToRGB(name);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getName() {
        const rgb = this.getRGB();

        return Converter.RGBToName(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHSL(hue, saturation, lightness) {
        const rgb = Converter.HSLToRGB(hue, saturation, lightness);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getHSL() {
        const rgb = this.getRGB();

        return Converter.RGBToHSL(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHSI(hue, saturation, intensity) {
        return this.setHSL(hue, saturation, intensity);
    }

    getHSI() {
        return this.getHSL();
    }

    setHSLA(hue, saturation, lightness, alpha) {
        const rgb = Converter.HSLToRGB(hue, saturation, lightness);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']).setAlpha(alpha);
    }

    getHSLA() {
        const rgba = this.getRGBA();

        return Converter.RGBAToHSLA(rgba['red'], rgba['green'], rgba['blue'], rgba['alpha']);
    }

    setHSIA(hue, saturation, lightness, alpha) {
        const rgb = Converter.HSIToRGB(hue, saturation, lightness);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']).setAlpha(alpha);
    }

    getHSIA() {
        const rgba = this.getRGBA();

        return Converter.RGBAToHSIA(rgba['red'], rgba['green'], rgba['blue'], rgba['alpha']);
    }

    setSafe() {
        const rgb = this.getSafe();

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getSafe() {
        const rgb = this.getRGB();

        return Converter.RGBToSafe(rgb['red'], rgb['green'], rgb['blue']);
    }

    setXYZ(X, Y, Z) {
        const rgb = Converter.XYZToRGB(X, Y, Z);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getXYZ() {
        const rgb = this.getRGB();

        return Converter.RGBToXYZ(rgb['red'], rgb['green'], rgb['blue']);
    }

    setLab(L, a, b) {
        const rgb = Converter.LabToRGB(L, a, b);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getLab() {
        const rgb = this.getRGB();

        return Converter.RGBToLab(rgb['red'], rgb['green'], rgb['blue']);
    }

    setLCH(L, C, H) {
        const rgb = Converter.LCHToRGB(L, C, H);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getLCH() {
        const rgb = this.getRGB();

        return Converter.RGBToLCH(rgb['red'], rgb['green'], rgb['blue']);
    }
    setYxy(Y, x, y) {
        const rgb = Converter.YxyToRGB(Y, x, y);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getYxy() {
        const rgb = this.getRGB();

        return Converter.RGBToYxy(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHunterLab(L, a, b) {
        const rgb = Converter.HunterLabToRGB(L, a, b);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getHunterLab() {
        const rgb = this.getRGB()

        return Converter.RGBToHunterLab(rgb['red'], rgb['green'], rgb['blue']);
    }

    setHSV(H, S, V) {
        const rgb = Converter.HSVToRGB(H, S, V);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getHSV() {
        const rgb = this.getRGB();

        return Converter.RGBToHSV(rgb['red'], rgb['green'], rgb['blue']);
    }

    setLuv(L, u, v) {
        const rgb = Converter.LuvToRGB(L, u, v);

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getLuv() {
        const rgb = this.getRGB();

        return Converter.RGBToLuv(rgb['red'], rgb['green'], rgb['blue']);
    }

    setRandom() {
        const rgb = this.getRandom();

        return this.setRGB(rgb['red'], rgb['green'], rgb['blue']);
    }

    getRandom() {
        return this._compactColor(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    }

    resetAlpha() {
        return this.setAlpha(1.0).setBgRGB(255, 255, 255);
    }

    _checkColor() {
        if (!this._isRGBValid(this.red, this.green, this.blue)) {
            throw new Error('Invalid background color value!');
        }

        return this;
    }

    _checkAlpha() {
        if (this.alpha < 0 || this.alpha > 1) {
            throw new Error('Invalid alpha value!');
        }

        return this;
    }

    _checkBgColor() {
        if (!this._isRGBValid(this.bgRed, this.bgGreen, this.bgBlue)) {
            throw new Error('Invalid background color value!');
        }

        return this;
    }

    _isRGBValid(red, green, blue) {
        return red >= 0 && red <= 255
            && green >= 0 && green <= 255
            && blue >= 0 && blue <= 255;
    }

    _compactColor(red, green, blue, alpha = null) {
        const result = {}
        result.red = red;
        result.green = green;
        result.blue = blue;

        if (alpha === null) {
            return result;
        }
        result.alpha = alpha;
        return result;
    }

}


