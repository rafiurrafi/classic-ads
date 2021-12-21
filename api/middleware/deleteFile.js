const fs = require('fs')

const filePath = './todo/sample.txt'

// delete asynchronously 
fs.unlink(filePath, cb)

function cb(error){
    if(error){
        console.log('Error in deleting file')
        console.log(error.message)
    }else{
        console.log('Deleted successfully')
    }
}


// delete synchronously


// try{
//     fs.unlinkSync(filePath)
//     console.log('Deleted successfully')
// }
// catch(error){
//     console.log('Error in deleting file')
//     console.log(error.message)}


// 'fs.unlink()' to 'Asynchronously delete a file

// 'fs.unlinkSync()' to 'Synchronously delete a file

// syntax:
//  'fs.unlink(filePath, callbackFunction)

//  'fs.unlinkSync(filePath)