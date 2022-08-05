const {initializeApp, cert } = require('firebase-admin/app');
const {getStorage} = require('firebase-admin/storage');
const { v4: uuid_v4 } = require('uuid');
const http = require("http");

const serviceAccount = require('../adminSDK.json');
initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'gs://test-beba8.appspot.com/',
});

const bucket = getStorage().bucket();
const filePath = "../spiderman.png";

const upload = async(filePath) => {
    await bucket.upload(filePath, {
        metadata: {
            metadata:{
                firebaseStorageDownloadTokens: uuid_v4()
            }
        }
    });
}

upload(filePath);

http.createServer(async(req, res) => {
    try{
        let url = await upload(filePath);
        console.log(url);
    }catch(err){
        console.log(err);
    }
}).listen(8080);
console.log('server is running at http://127.0.0.1:8080/');