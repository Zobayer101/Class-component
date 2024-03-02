
// let text = 'mdzobayerhosen4@gmail.com';
// const regex = /[a-z0-9]+@(gmail|yaooh).com/gi;
// const match=text.match(regex)
// const search = text.search(regex);
// const test = regex.test(text);
// console.log(match, search, test)
// if (text == match) {
//     console.log('valid email')
// }else console.log('This is a not valid mail')

let password = 'mynamepassword';
// //let regex = /^(?=.*\d)((?=.*[a-z])(?=.*[A-Z]))[a-zA-Z0-9]{7,}$/;
// let regex = /((?=.*[A-Z])(?=.*[a-z]))/;
// let match = password.match(regex);
// console.log(match);
let uri=encodeURI(password)
console.log(uri)