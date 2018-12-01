export function convertToRoman(num) {
    const answer = [];
    let remainder;

    let CM = false;
    let CD = false;
    let XC = false;
    let XL = false;
    let IX = false;
    let IV = false;

    let M = Math.floor(num / 1000);
    remainder = num % 1000;
    if (remainder >= 900) {
        CM = true;
    }

    let D = Math.floor(remainder / 500);
    remainder = remainder % 500;
    if (remainder >= 400 && !CM) {
        CD = true;
    }

    let C = Math.floor(remainder / 100);
    remainder = remainder % 100;
    if (remainder >= 90) {
        XC = true;
    }

    let L = Math.floor(remainder / 50);
    remainder = remainder % 50;
    if (remainder >= 40 && !XC) {
        XL = true;
    }

    let X = Math.floor(remainder / 10);
    remainder = remainder % 10;
    if (remainder === 9) {
        IX = true;
    }

    let V = Math.floor(remainder / 5);
    remainder = remainder % 5;
    if (remainder === 4 && !IX) {
        IV = true;
    }


    let I = remainder;

    while (M > 0) {
        answer.push('M');
        M--;
    }

     if (CM) {
        answer.push('CM');
        D = 0;
        C = 0;
    }

    while (D > 0) {
        answer.push('D');
        D--;
    }

    if (CD) {
        answer.push('CD');
        C = 0;
    }

     while (C > 0) {
        answer.push('C');
        C--;
    }

    if (XC) {
        answer.push('XC');
        L = 0;
        X = 0;
    }

    while (L > 0) {
        answer.push('L');
        L--;
    }

    if (XL) {
        answer.push('XL');
        X = 0;
    }

    while (X > 0) {
        answer.push('X');
        X--;
    }

    if (IX) {
        answer.push('IX');
        I = 0;
        V = 0;
    }

    while (V > 0) {
        answer.push('V');
        V--;
    }

    if (IV) {
        answer.push('IV');
        I = 0;
    }

    while (I > 0) {
        answer.push('I');
        I--;
    }
   
    return answer.join("");
}
