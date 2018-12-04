const express = require('express');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const axios = require('axios');

const router = express.Router();
const app = express();

const swiftAxios = axios.create({
    baseURL: "",
});

/* GET api listing. */

app.get('/healthcheck',(req,res)=>{
 try{   res.status(200)
    return res.send({
        status:'success'
    })
}
catch(e){
    console.log(e);
    return res.status(500).send({
        message: 'Something broke::::1'
    });
}
});

router.get('/', async(function(req, res) {
    try {
        body = {
            status: 'homePage'
        }
        console.log(body.status);

        res.setHeader("Content-Type", 'application/json');
        res.setHeader("Cache-Control","no-cache")
        res.status(200);
        return res.send(body);
    } catch (e) {
        
        console.log(e);
        return res.status(500).send({
            message: 'Something broke::::1'
        });
    }
}));
module.exports = router;