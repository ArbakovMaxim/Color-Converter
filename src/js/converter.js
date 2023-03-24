import nameColors from '../util/colorsName.json'
import websafe_colors from '../util/websafe_colors.json'




export default class Converter {
    static RGBAToRGB(
        red,
        green,
        blue,
        alpha,
        bgRed = 255,
        bgGreen = 255,
        bgBlue = 255
    ) {
        red = ((1 - alpha) * bgRed) + (alpha * red);
        green = ((1 - alpha) * bgGreen) + (alpha * green);
        blue = ((1 - alpha) * bgBlue) + (alpha * blue);

        const result = this._roundRGB(red, green, blue);

        return result;
    }

    // /**
    //  * Convert the RGB color to a RGBA color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]
    //  */

    static RGBToRGBA(red, green, blue) {
        const rgba = {}
        rgba.red = red;
        rgba.green = green;
        rgba.blue = blue;
        rgba.alpha = 1;
        return rgba
    }

    // /**
    //  * Convert the HEX color to a RGB color.
    //  *
    //  * @param string $hex
    //  *
    //  * @return int[]
    //  */

    static HEXToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const rgb = [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)]
        return this._roundRGB(...rgb);
    }

    // /**
    //  * Convert the RGB color to a HEX color
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return string
    //  */

    static RGBToHEX(red, green, blue) {
        red = Number(red);
        green = Number(green);
        blue = Number(blue);
        return ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }

    // /**
    //  * Convert the CMYK color to a RGB color.
    //  *
    //  * @param float $cyan
    //  * @param float $magenta
    //  * @param float $yellow
    //  * @param float $key
    //  *
    //  * @return int[]
    //  */


    static CMYKToRGB(cyan, magenta, yellow, key) {
        cyan = cyan / 100
        magenta = magenta / 100
        yellow = yellow / 100
        key = key / 100
        const red = Math.round(255 * (1 - cyan) * (1 - key))
        const green = Math.round(255 * (1 - magenta) * (1 - key))
        const blue = Math.round(255 * (1 - yellow) * (1 - key))
        return this._roundRGB(red, green, blue);
    }

    // /**
    //  * Convert the RGB color to a CMYK color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return float[]
    //  */

    static RGBToCMYK(red, green, blue) {

        const calcRed = red / 255;
        const calcGreen = green / 255;
        const calcBlue = blue / 255;

        const key = 1 - Math.max(calcRed, calcGreen, calcBlue);
        const cyan = ((1 - calcRed - key) / (1 - key))
        const magenta = ((1 - calcGreen - key) / (1 - key));
        const yellow = ((1 - calcBlue - key) / (1 - key));

        const cmyk = {}
        cmyk.cyan = ((cyan).toFixed(2)) * 100;
        cmyk.magenta = ((magenta).toFixed(2)) * 100;
        cmyk.yellow = ((yellow).toFixed(2)) * 100;
        cmyk.key = ((key).toFixed(2)) * 100;
        // console.log(cmyk);


        return cmyk;
    }

    // /**
    //  * Convert the HTML named color to a RGB color.
    //  *
    //  * @param string $name
    //  *
    //  * @return int[]
    //  */


    static NameToRGB(name) {
        let color = ''
        for (let nameColor of nameColors) {
            if (nameColor.name === name) {
                color = nameColor.rgb
            }
        }
        if (color === '') {
            throw new Error('Color name not found!');
        }
        const red = color[0];
        const green = color[1];
        const blue = color[2];


        return this._roundRGB(red, green, blue);
    }

    // /**
    //  * Convert the RGB color to a HTML named color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return string
    //  */


    static RGBToName(red, green, blue) {
        let color = ''
        for (const nameColor of nameColors) {
            if (nameColor.rgb[0] === red && nameColor.rgb[1] === green && nameColor.rgb[2] === blue) {
                color = nameColor.name
                return color
            }
        }
        throw new Error('Name for color not found!');
    }

    // /**
    //  * Convert the HSL color to a RGB color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $lightness
    //  *
    //  * @return int[]
    //  */

    static HSLToRGB(hue, saturation, lightness) {
        saturation = saturation / 100;
        lightness = lightness / 100;

        let c = (1 - Math.abs(2 * lightness - 1)) * saturation,
            x = c * (1 - Math.abs((hue / 60) % 2 - 1)),
            m = lightness - c / 2,
            red = 0,
            green = 0,
            blue = 0;

        if (0 <= hue && hue < 60) {
            red = c; green = x; blue = 0;
        } else if (60 <= hue && hue < 120) {
            red = x; green = c; blue = 0;
        } else if (120 <= hue && hue < 180) {
            red = 0; green = c; blue = x;
        } else if (180 <= hue && hue < 240) {
            red = 0; green = x; blue = c;
        } else if (240 <= hue && hue < 300) {
            red = x; green = 0; blue = c;
        } else if (300 <= hue && hue < 360) {
            red = c; green = 0; blue = x;
        }
        red = Math.abs(((red + m) * 255));
        green = Math.abs(((green + m) * 255));
        blue = Math.abs(((blue + m) * 255));

        return this._roundRGB(red, green, blue);;
    }

    // /**
    //  * Convert the RGB color to a HSL color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */


    static RGBToHSL(red, green, blue) {
        red /= 255;
        green /= 255;
        blue /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(red, green, blue),
            cmax = Math.max(red, green, blue),
            delta = cmax - cmin,
            hue = 0,
            saturation = 0,
            lightness = 0;

        if (delta === 0)
            hue = 0;
        else if (cmax === red)
            hue = ((green - blue) / delta) % 6;

        else if (cmax === green)
            hue = (blue - red) / delta + 2;

        else
            hue = (red - green) / delta + 4;

        hue = Math.round(hue * 60);

        if (hue < 0)
            hue += 360;

        lightness = (cmax + cmin) / 2;

        saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

        saturation = +(saturation).toFixed(11);
        lightness = +(lightness).toFixed(11);

        const hsl = {}
        hsl.hue = hue;
        hsl.saturation = saturation.toFixed(2) * 100;
        hsl.lightness = lightness.toFixed(2) * 100;

        return hsl;
    }

    // /**
    //  * Convert the HSLA color to a RGBA color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $lightness
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */


    static HSLAToRGBA(hue, saturation, lightness, alpha) {
        const rgba = this.HSLToRGB(hue, saturation, lightness);
        rgba.alpha = alpha

        return rgba;
    }

    // /**
    //  * Convert the RGBA color to a HSLA color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */


    static RGBAToHSLA(red, green, blue, alpha) {
        const hsla = this.RGBToHSL(red, green, blue);
        hsla.alpha = alpha;
        return hsla;
    }

    // /**
    //  * Convert the HSIA color to a RGBA color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $intensity
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */


    static HSIAToRGBA(hue, saturation, intensity, alpha) {
        const rgba = this.HSIToRGB(hue, saturation, intensity);
        rgba.alpha = alpha;

        return rgba;
    }

    // /**
    //  * Convert the RGBA color to a HSIA color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */


    static RGBAToHSIA(red, green, blue, alpha) {
        const hsia = this.RGBToHSI(red, green, blue);
        hsia.alpha = alpha;

        return hsia;
    }

    // /**
    //  * Convert the HLSA color to a RGBA color.
    //  *
    //  * @param int $hue
    //  * @param float $lightness
    //  * @param float $saturation
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */


    static HLSAToRGBA(hue, lightness, saturation, alpha) {
        const rgba = this.HLSToRGB(hue, lightness, saturation);
        rgba.alpha = alpha;

        return rgba;
    }

    // /**
    //  * Convert the RGBA color to a HLSA color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @param float $alpha
    //  *
    //  * @return int[]|float[]
    //  */

    static RGBAToHLSA(red, green, blue, alpha) {
        const hlsa = this.RGBToHLS(red, green, blue);
        hlsa.alpha = alpha;

        return hlsa;
    }

    // /**
    //  * Convert the HSI color to a RGB color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $intensity
    //  *
    //  * @return int[]
    //  */


    static HSIToRGB(hue, saturation, intensity) {
        return this.HSLToRGB(hue, saturation, intensity);
    }

    // /**
    //  * Convert the RGB color to a HSI color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */

    static RGBToHSI(red, green, blue) {
        return this.RGBToHSL(red, green, blue);
    }

    // /**
    //  * Convert the HLS color to a RGB color.
    //  *
    //  * @param int $hue
    //  * @param float $lightness
    //  * @param float $saturation
    //  *
    //  * @return int[]
    //  */

    static HLSToRGB(hue, lightness, saturation) {
        return this.HSLToRGB(hue, saturation, lightness);
    }

    // /**
    //  * Convert the RGB color to a HLS color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */

    static RGBToHLS(red, green, blue) {
        const hsl = this.RGBToHSL(red, green, blue);
        const hls = {}
        hls.hue = hsl.hue
        hls.lightness = hsl.lightness
        hls.saturation = hsl.saturation

        return hls
    }

    // /**
    //  * Convert the HSV color to a RGB color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $value
    //  *
    //  * @return int[]
    //  */

    static HSVToRGB(hue, saturation, value) {
        // saturation = saturation / 100
        // value = value / 100
        let red = Number;
        let green = Number;
        let blue = Number;
        if (saturation === 0) {
            red = green = blue = value;
        } else {
            if (hue === 360) {
                hue = 0;
            } else {
                hue /= 60;
            }

            const i = Math.floor(hue);
            const f = hue - i;

            const p = value * (1.0 - saturation);
            const q = value * (1.0 - (saturation * f));
            const t = value * (1.0 - (saturation * (1.0 - f)));

            switch (i) {
                case 0:
                    red = value;
                    green = t;
                    blue = p;
                    break;
                case 1:
                    red = q;
                    green = value;
                    blue = p;
                    break;
                case 2:
                    red = p;
                    green = value;
                    blue = t;
                    break;
                case 3:
                    red = p;
                    green = q;
                    blue = value;
                    break;
                case 4:
                    red = t;
                    green = p;
                    blue = value;
                    break;
                default:
                    red = value;
                    green = p;
                    blue = q;
                    break;
            }
        }

        return this._roundRGB(red * 255, green * 255, blue * 255);
    }

    // /**
    //  * Convert the RGB color to a HSV color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */

    static RGBToHSV(red, green, blue) {
        const circle = this._prepareRGBToCircle(red, green, blue);
        const value = circle.max.toFixed(11);
        let saturation = (circle.max === 0) ? 0 : (circle.d / circle.max);
        saturation = saturation.toFixed(11);
        const hsv = {}
        hsv.hue = circle.hue;
        hsv.saturation = saturation
        hsv.value = value

        return hsv
    }

    // /**
    //  * Convert the HSB color to a RGB color.
    //  *
    //  * @param int $hue
    //  * @param float $saturation
    //  * @param float $brightness
    //  *
    //  * @return array
    //  */


    static HSBToRGB(hue, saturation, brightness) {
        return this.HSVToRGB(hue, saturation, brightness);
    }

    // /**
    //  * Convert the RGB color to a HSB color.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */
    static RGBToHSB(red, green, blue) {
        return this.RGBToHSV(red, green, blue);
    }

    // /**
    //  * Convert the RGB color to a RGB color from the safe color list.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]
    //  */

    static RGBToSafe(red, green, blue) {
        const colors = websafe_colors;
        let nearest = colors.shift();
        let shortest_distance = this._getRGBDistance(red, green, blue, ...nearest);
        colors.forEach(color => {
            let current_distance = this._getRGBDistance(red, green, blue, ...color);
            if (current_distance < shortest_distance) {
                shortest_distance = current_distance;
                nearest = color;
            }
        })

        return this._roundRGB(...nearest);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @return array
    //  */

    static RGBToCMY(red, green, blue) {
        const cyan = 1 - (red / 255);
        const magenta = 1 - (green / 255);
        const yellow = 1 - (blue / 255);
        const cmy = {};
        cmy.cyan = cyan.toFixed(2) * 100;
        cmy.magenta = magenta.toFixed(2) * 100;
        cmy.yellow = yellow.toFixed(2) * 100;

        return cmy;
    }

    // /**
    //  * @param float $cyan
    //  * @param float $magenta
    //  * @param float $yellow
    //  * @return int[]
    //  */


    static CMYToRGB(cyan, magenta, yellow) {
        cyan = cyan / 100
        magenta = magenta / 100
        yellow = yellow / 100
        const red = (1 - cyan) * 255;
        const green = (1 - magenta) * 255;
        const blue = (1 - yellow) * 255;

        return this._roundRGB(red, green, blue);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * X, Y and Z output refer to a D65/2° standard illuminant.
    //  * @return array
    //  */

    static RGBToXYZ(red, green, blue) {
        const redCulc = this._prepareColorToXYZConversion(red);
        const greenCulc = this._prepareColorToXYZConversion(green);
        const blueCulc = this._prepareColorToXYZConversion(blue);

        const X = redCulc * 0.4124 + greenCulc * 0.3576 + blueCulc * 0.1805;
        const Y = redCulc * 0.2126 + greenCulc * 0.7152 + blueCulc * 0.0722;
        const Z = redCulc * 0.0193 + greenCulc * 0.1192 + blueCulc * 0.9505;

        const xyz = {};
        xyz.X = X.toFixed(2);
        xyz.Y = Y.toFixed(2);
        xyz.Z = Z.toFixed(2);
        return xyz;
    }

    // /**
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $X
    //  * @param float $Y
    //  * @param float $Z
    //  * @return array
    //  */

    static XYZToRGB(X, Y, Z) {
        X = Number(X) / 100;
        Y = Number(Y) / 100;
        Z = Number(Z) / 100;
        console.log(X, Y, Z);
        let red = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
        let green = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
        let blue = X * 0.0557 + Y * -0.2040 + Z * 1.0570;

        red = this._prepareColorForXYZToRGBOutput(red);
        green = this._prepareColorForXYZToRGBOutput(green);
        blue = this._prepareColorForXYZToRGBOutput(blue);
        console.log(red, green, blue);

        return this._roundRGB(red, green, blue);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @return array
    //  */


    static RGBToYxy(red, green, blue) {
        console.log(this.RGBToXYZ(red, green, blue))
        const XYZ = this.RGBToXYZ(red, green, blue);
        const X = Number(XYZ.X);
        const Y = Number(XYZ.Y);
        const Z = Number(XYZ.Z);
        const x = X / (X + Y + Z);
        const y = Y / (X + Y + Z);

        const yxy = {};
        yxy.Y = Math.round(Y);
        yxy.x = x.toFixed(2) * 100;
        yxy.y = y.toFixed(2) * 100;
        return yxy;
    }

    // /**
    //  * @param float $Y
    //  * @param float $x
    //  * @param float $y
    //  * @return array
    //  */

    static YxyToRGB(Y, x, y) {
        x = x / 100
        y = y / 100
        const X = x * (Y / y);
        const Z = (1 - x - y) * (Y / y);

        return this.XYZToRGB(X, Y, Z);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return array
    //  */

    static RGBToLab(
        red,
        green,
        blue,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        let { X, Y, Z } = this.RGBToXYZ(red, green, blue);
        X = X / refX;
        Y = Y / refY;
        Z = Z / refZ;

        X = X > 0.008856 ? Math.pow(X, 1 / 3) : (7.787 * X) + (16 / 116);
        Y = Y > 0.008856 ? Math.pow(Y, 1 / 3) : (7.787 * Y) + (16 / 116);
        Z = Z > 0.008856 ? Math.pow(Z, 1 / 3) : (7.787 * Z) + (16 / 116);

        const L = (116 * Y) - 16;
        const a = 500 * (X - Y);
        const b = 200 * (Y - Z);

        const lab = {};
        lab.L = L;
        lab.a = a;
        lab.b = b;

        return lab;
    }

    // /**
    //  * @param float $L
    //  * @param float $a
    //  * @param float $b
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return int[]
    //  */

    static LabToRGB(
        L,
        a,
        b,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        let Y = (L + 16) / 116;
        let X = a / 500 + Y;
        let Z = Y - b / 200;

        Y = Math.pow(Y, 3) > 0.008856 ? Math.pow(Y, 3) : (Y - 16 / 116) / 7.787;
        X = Math.pow(X, 3) > 0.008856 ? Math.pow(X, 3) : (X - 16 / 116) / 7.787;
        Z = Math.pow(Z, 3) > 0.008856 ? Math.pow(Z, 3) : (Z - 16 / 116) / 7.787;

        X = X * refX;
        Y = Y * refY;
        Z = Z * refZ;

        return this.XYZToRGB(X, Y, Z);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * @return array
    //  */

    static RGBToLCH(red, green, blue) {
        let { L, a, b } = this.RGBToLab(red, green, blue);
        let H = Math.atan2(b, a);
        H = H > 0 ? (H / Math.PI) * 180 : 360 - (Math.abs(H) / Math.PI) * 180;

        L = L.toFixed(4);
        const C = (Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)))).toFixed(4);
        H = Math.floor(H % 360);
        const lch = {};
        lch.L = Number(L);
        lch.C = Number(C);
        lch.H = H;

        return lch;
    }

    // /**
    //  * @param float $L
    //  * @param float $C
    //  * @param float $H - range = 0 ÷ 360°
    //  * @return array
    //  */

    static LCHToRGB(L, C, H) {
        const radiansH = (Math.PI * H) / 180;
        const a = Math.cos(radiansH) * C;
        const b = Math.sin(radiansH) * C;

        return this.LabToRGB(L, a, b);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return array
    //  */

    static RGBToHunterLab(
        red,
        green,
        blue,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        const { X, Y, Z } = this.RGBToXYZ(red, green, blue);
        const Ka = (175 / 198.04) * (refY + refX);
        const Kb = (70 / 218.11) * (refY + refZ);

        const Hunter_L = 100 * Math.sqrt(Y / refY);
        const Hunter_a = Ka * (((X / refX) - (Y / refY)) / Math.sqrt(Y / refY));
        const Hunter_b = Kb * (((Y / refY) - (Z / refZ)) / Math.sqrt(Y / refY));

        const hunterLab = {};
        hunterLab.Hunter_L = Hunter_L;
        hunterLab.Hunter_a = Hunter_a;
        hunterLab.Hunter_b = Hunter_b;

        return hunterLab;
    }

    // /**
    //  * @param float $Hunter_L
    //  * @param float $Hunter_a
    //  * @param float $Hunter_b
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return array
    //  */

    static HunterLabToRGB(
        Hunter_L,
        Hunter_a,
        Hunter_b,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        const Ka = (175.0 / 198.04) * (refY + refX);
        const Kb = (70.0 / 218.11) * (refY + refZ);

        const Y = Math.pow((Hunter_L / refY), 2) * 100;
        const X = (Hunter_a / Ka * Math.sqrt(Y / refY) + (Y / refY)) * refX;
        const Z = - (Hunter_b / Kb * Math.sqrt(Y / refY) - (Y / refY)) * refZ;

        return this.XYZToRGB(X, Y, Z);
    }

    // /**
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return array
    //  */

    static RGBToLuv(
        red,
        green,
        blue,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        let { X, Y, Z } = this.RGBToXYZ(red, green, blue);

        const U = (4 * X) / (X + (15 * Y) + (3 * Z));
        const V = (9 * Y) / (X + (15 * Y) + (3 * Z));
        Y /= 100;
        Y = Y > 0.008856 ? Math.pow(Y, 1 / 3) : (7.787 * Y) + (16 / 116);

        const refU = (4 * refX) / (refX + (15 * refY) + (3 * refZ));
        const refV = (9 * refY) / (refX + (15 * refY) + (3 * refZ));

        const L = (116 * Y) - 16;
        const u = 13 * L * (U - refU);
        const v = 13 * L * (V - refV);

        const luv = {};
        luv.L = L;
        luv.u = u;
        luv.v = v;

        return luv;
    }

    // /**
    //  * @param float $L
    //  * @param float $u
    //  * @param float $v
    //  * X, Y and Z input refer to a D65/2° standard illuminant.
    //  * @param float $refX
    //  * @param float|int $refY
    //  * @param float $refZ
    //  * @return int[]
    //  */

    static LuvToRGB(
        L,
        u,
        v,
        refX = 95.047,
        refY = 100,
        refZ = 108.883
    ) {
        let Y = (L + 16) / 116;
        Y = Math.pow(Y, 3) > 0.008856 ? Math.pow(Y, 3) : ((Y - 16 / 116) / 7.787);

        const refU = (4 * refX) / (refX + (15 * refY) + (3 * refZ));
        const refV = (9 * refY) / (refX + (15 * refY) + (3 * refZ));

        const U = u / (13 * L) + refU;
        const V = v / (13 * L) + refV;

        Y *= 100;
        const X = - (9 * Y * U) / ((U - 4) * V - U * V);
        const Z = (9 * Y - (15 * V * Y) - (V * X)) / (3 * V);

        return this.XYZToRGB(X, Y, Z);
    }

    // /**
    //  * @param $color
    //  * @return float
    //  */

    static _prepareColorForXYZToRGBOutput(color) {
        const colors = (color > 0.0031308) ? (1.055 * Math.pow(color, (1 / 2.4)) - 0.055) : (12.92 * color);

        return colors * 255;
    }

    // /**
    //  * @param int $color
    //  * @return float
    //  */

    static _prepareColorToXYZConversion(color) {
        let colorCulc = color / 255;
        colorCulc = colorCulc > 0.04045 ? Math.pow(((colorCulc + 0.055) / 1.055), 2.4) : colorCulc / 12.92;
        colorCulc *= 100;

        return colorCulc;
    }

    // /**
    //  * Rounds the RGB colors to integers.
    //  *
    //  * @param int|float $red
    //  * @param int|float $green
    //  * @param int|float $blue
    //  *
    //  * @return int[]
    //  */

    static _roundRGB(red, green, blue) {
        red = Math.round(red);
        green = Math.round(green);
        blue = Math.round(blue);
        const rgb = {};
        rgb.red = red;
        rgb.green = green;
        rgb.blue = blue;

        return rgb
    }

    // /**
    //  * Prepares RGB to HLS/HSB conversion.
    //  *
    //  * @param int $red
    //  * @param int $green
    //  * @param int $blue
    //  *
    //  * @return int[]|float[]
    //  */

    static _prepareRGBToCircle(red, green, blue) {
        red /= 255;
        green /= 255;
        blue /= 255;

        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        const d = max - min;
        let hue = d

        if (d !== 0) {
            if (max === red) {
                hue = ((green - blue) / d) % 6;
            } else if (max === green) {
                hue = 2 + (blue - red) / d;
            } else {
                hue = 4 + (red - green) / d;
            }
            hue = Math.round(hue * 60);
            if (hue < 0) {
                hue = 360 + hue;
            }
        } else {
            hue = 0;
        }

        const result = {};
        result.min = min;
        result.max = max;
        result.d = d;
        result.hue = hue;

        return result;
    }

    // /**
    //  * Prepare Hue value to RGB conversion.
    //  *
    //  * @param $v1
    //  * @param $v2
    //  * @param $vH
    //  *
    //  * @return float
    //  */

    static _HueToRGB(v1, v2, vH) {
        if (vH < 0) {
            ++vH;
        }

        if (vH > 1) {
            --vH;
        }

        if ((6 * vH) < 1) {
            return (v1 + (v2 - v1) * 6 * vH);
        }

        if ((2 * vH) < 1) {
            return v2;
        }

        if ((3 * vH) < 2) {
            return (v1 + (v2 - v1) * ((2.0 / 3) - vH) * 6);
        }

        return v1;
    }

    // /**
    //  * Return distance between two RGB colors.
    //  *
    //  * @param int $r0
    //  * @param int $g0
    //  * @param int $b0
    //  * @param int $r1
    //  * @param int $g1
    //  * @param int $b1
    //  *
    //  * @return int
    //  */

    static _getRGBDistance(r1, g1, b1, r0, g0, b0,) {
        const diff = Math.abs(r0 - r1);
        const diff1 = diff + Math.abs(g0 - g1);
        const diff2 = diff1 + Math.abs(b0 - b1);

        return diff2;
    }
}
