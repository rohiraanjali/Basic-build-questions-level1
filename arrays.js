//arrays questions

// 1
const array = [10, 4, 5, 2, 5, 6, 9];
const sumOfArray = (arr) => {
    return arr.reduce((num, acc) => num + acc);
}
console.log(sumOfArray(array));

// 2
const arrReducer = (arr) => 
    arr.reduce((acc, value) => acc + value) / arr.length;
    console.log(arrReducer[1,2,3,4,5]));

// 3
const maxMin = (ary) => {
    const ret = ary.reduce((acc, val) => {
        return val > acc.max ? { ...acc, max: val }
            : val < acc.min ? { ...acc, min: val }
                : acc

    }, { max: 0, min: 999 });
    return ret;
}
console.log(maxMin(array));

// 5
const sumOfArrays = (firstArr, secondArr) => {
    const combined = firstArr.concat(secondArr);
    return combined.reduce((acc, num) => acc + num);
}
console.log(sumOfArrays([1,2, 3, 4, 5], [6, 7, 8, 9, 0]));

// 6
const count_Con_Vol = (ary) => {
    let ret = ary.map((string) => {
        return {
            [string]: [...string].reduce((acc, char) => {
                return ["a", "e", "o", "i", "u"].includes(char) ? { ...acc, vowel: acc.vowel + 1 } : { ...acc, consonent: acc.consonent + 1 };
            }, { vowel: 0, consonent: 0 })
        }
    })
    console.log(ret);
}
count_Con_Vol(["hey", "neogrammers", "how", "are", "you"]);

// 7
const shiftNum = (Arr, num) => {
    let ary = Arr;
    for (let i = 0; i < num; i++) {
        let last = ary[ary.length - 1];
        for (let i = ary.length - 1; i > 0; i--) {
            ary[i] = ary[i - 1];
        }
        ary[0] = last;
    }
    return ary;
}
console.log(`from shift: ${shiftNum([3,4,5,6], 3)}`);