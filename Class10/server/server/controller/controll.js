const UserDB = require('../model/DBmodel');
const fs=require('fs')


exports.saveData = async (req, res) => {
     //console.log(req.body);
    try {
        var base64 = req.body.myFile;
        //var myImg = base64.replace(/^data:image\/jpeg;base64,/, "");
        var newMyImg = base64.split(',')
        console.log(newMyImg[0]);
        //console.log(newMyImg[1]);
        var myData = Buffer.from(newMyImg[1], 'base64');
        fs.writeFile('myimg.jpg', myData, 'binary', (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('data save successfully')
            }
        })
        console.log(myData)
        const user = new UserDB({ photo: req.body.myFile });
        const data = await user.save(user)
        res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(409).json({
            message: error.message,
        })
        console.log(error.message);
    }
}

exports.showData = async (req,res) => {
    try {
        const data = await UserDB.find();
        res.status(200).json({
            data: data
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
        console.log(error.message);
    }
}
