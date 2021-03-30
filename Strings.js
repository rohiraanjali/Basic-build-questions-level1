// Strings questions 
// 1
const StringUpperCase1 = (str )=> {
    return str.toUpperCase();
  }
  
  console.log(StringUpperCase1("Hey , How are you?"))
  
  // 2
  const joinStr = (Str1 , str2) => str1 + str2;
  joinStr("morning" , "good");
  
  // 3
  const charAtStr = (str) => str.length;
  charAtStr("morning")
  
  //4
  const strString = (str) => +str;
  strString("124")
  
  // 5 
  const removeVowels = (str) => {
      const newStr = str;
      return newStr.replace(/[aeiou]/gi, '');
  };
  
  // 7
  const SmallAndLargeString = (str1, str2, str3) => {
      const str1Len = str1.length;
      const str2Len = str2.length;
      const str3Len = str3.length;
      let largestStr = '';
      let smallestStr = '';
      if ((str1Len == str2Len) == str3Len) {
          return 'All the strings are equal';
      } else if (str1Len > str3Len && str1Len > str2Len) {
          largestStr = str1;
          if (str2Len > str3Len) {
              smallestStr = str3;
          } else {
              smallestStr = str2;
          }
      } else if (str2Len > str3Len) {
          largestStr = str2;
          if (str1Len > str3Len) {
              smallestStr = str3;
          } else {
              smallestStr = str1;
          }
      } else {
          largestStr = str3;
          if (str1Len > str2Len) {
              smallestStr = str2;
          } else {
              smallestStr = str1;
          }
      }
      return [`Largest string =${largestStr}`, `Smallest string =${smallestStr}`];
  };
  
  console.log(SmallAndLargeString('hello', 'neogrammer', 'Howsyou'));
  
  // 9
  const GreaterOrNot = (str) => {
      let strArr = str.split('');
      let count = 0;
      strArr.map(() => {
          count++;
      });
      return count > 7;
  };
  GreaterOrNot("hello neogrammers");
  
  // 10
  const string = (str1, str2) => {
      if (str1.length === str2.length) {
          return 'Both strings are equal';
      } else if (str1.length > str2.length) {
          str2 = str1;
          return str2;
      } else {
          str1 = str2;
          return str1;
      }
  };
  
  console.log(string('hello', 'neogrammer'));
  
  // 12
  const date = (str) => {
      const showDate = str.slice(0, str.indexOf(','));
      return showDate;
  };
  
  console.log(date('Wed April 15, 7pm'));
  
  // 13
  const maskStr = (str) => {
      const newStr =
          str.slice(0, str.length - 4).replace(/./g, '#') + str.slice(str.length - 4);
      return newStr;
  };
  
  maskStr("5565534276455423");
  
  // advanced
  // 1 
  const replaceChar = (str, char1, char2) => {
      const regex = new RegExp(char1, 'ig');
      const newStr = str.replace(regex, char2);
      return newStr;
  };
  
  console.log(replaceChar('hella world', 'o', 'a'));
  
  // 2
  const removeSpace = (str) => {
      const newStr = str.replace(/\s/g, '');
      return newStr;
  };
  
  console.log(
      removeSpace(
          'hello n eo gr amm e r , Hoe are y o u??'
      )
  );
  
  // 3
  const wordReverse = (str) => {
      const newStr = str.split(' ').reverse().join(' ');
      return newStr;
  };
  
  console.log(wordReverse('Hello neogrammers !!'));
  // 5
  const toggleCase = (str) => {
      let newStr = '';
      for (let i = 0; i < str.length; i++) {
          if (i % 2 === 0) {
              newStr += str[i].toLowerCase();
          } else {
              newStr += str[i].toUpperCase();
          }
      }
      return newStr;
  };
  
  console.log(toggleCase('neogcamp'));
  
  // 6
  const removeWord = (str, word) => {
      const regex = new RegExp(word, 'ig');
      let newStr = str;
      return newStr.replace(regex, '');
  };
  
  console.log(removeWord('Hey , they is me neogrammers', 'neogrammers'));