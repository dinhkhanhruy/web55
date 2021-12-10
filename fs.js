var fs = require('fs');
var path = require('path');

// create file
fs.writeFile('student.json', `[{"name":"duy","age":23}]`, (err, data) => {
    if (err) throw err;
    console.log('write file successfully');
});


// read file
// fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log("File description:", JSON.parse(data));
// });


// update file
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const dataParse = JSON.parse(data);

    const dataUpdate = { name: "duy2", age: 24 };
    dataParse.push(dataUpdate);

    fs.writeFile(path.resolve(__dirname, 'student.json'), JSON.stringify(dataParse), (err) => {
        if (err) throw err;
        console.log("Update Success");
    });
});


// delete file
fs.unlink('student.json', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});