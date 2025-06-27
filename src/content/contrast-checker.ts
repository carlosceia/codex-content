/* tslint:disable */

export function checkcontrast(color, bgcolor) {
  const result: any = {};
  const L1 = getL(color);
  const L2 = getL(bgcolor);

  if (L1 !== false && L2 !== false) {
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    result.ratio = Math.round(ratio * 100) / 100 + ':1';
    if (ratio >= 4.5) {
      result.normalaa = 'Pass';
    } else {
      // normalaa.innerHTML = "Fail";
      // normalaa.className="fail";
      // bigaaa.innerHTML = "Fail";
      // bigaaa.className="fail";
      result.normalaa = 'Fail';
    }
    if (ratio >= 3) {
      // bigaa.innerHTML = "Pass";
      // bigaa.className='pass';
      result.bigaa = 'Pass';
    } else {
      // bigaa.innerHTML = "Fail";
      // bigaa.className='fail';
      result.bigaa = 'Fail';
    }
    if (ratio >= 7) {
      // normalaaa.innerHTML = "Pass";
      // normalaaa.className='pass';
      result.normalaaa = 'Pass';
    } else {
      // normalaaa.innerHTML = "Fail";
      // normalaaa.className='fail';
      result.normalaaa = 'Fail';
    }
  } else {
    result.ratio = '0';
  }
  return result;
}

function getL(color) {
  let R: number, G: number, B: number;
  let update;
  if (color.length == 3) {
    R = getsRGB(color.substring(0, 1) + color.substring(0, 1));
    G = getsRGB(color.substring(1, 2) + color.substring(1, 2));
    B = getsRGB(color.substring(2, 3) + color.substring(2, 3));
    update = true;
  } else if (color.length == 6) {
    R = getsRGB(color.substring(0, 2));
    G = getsRGB(color.substring(2, 4));
    B = getsRGB(color.substring(4, 6));
    update = true;
  } else {
    update = false;
  }
  if (update == true) {
    const L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    return L;
  } else {
    return false;
  }
}

function getsRGB(color) {
  color = getRGB(color);
  if (color !== false) {
    color = color / 255;
    color = color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
    return color;
  } else {
    return false;
  }
}

function getRGB(color) {
  try {
    color = parseInt(color, 16);
  } catch (err) {
    color = false;
  }
  return color;
}
