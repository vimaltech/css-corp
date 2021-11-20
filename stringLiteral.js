// String Literal

// Create Variable name
// First Name
// CamelCase  -> firstName -> Preffered
// SnackCase -> first_name

const firstName = "Yagnesh";

const lastName = "Modh";

// double quotes and single quotes are same

// const fullName = firstName + ' ' + lastName;

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Yagnesh's car

// const pos = firstName + '\'s car';

const pos = `${firstName}'s car`;

console.log(pos);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const title = "Portfolio";

const newHmtl = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`;

console.log(newHmtl);

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>'+ title + '</title>' +
// '\n</head>' +
// '\n<body>' +
//     '\n' +
// '\n</body>' +
// '\n</html>';

// console.log(html);

// sting literal used to convert premitive data type to string
const a = 1;

const bul = false;

const b = `${a}`;
const d = `${bul}`;

console.log(d);

console.log(typeof a);
console.log(typeof bul);
console.log(typeof b);

console.log(typeof d);
