const express = require('express');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const axios = require('axios');

const router = express.Router();
const app = express();

const swiftAxios = axios.create({
    baseURL: "https://yesno.wtf",
});

/* GET api listing. */

router.get('/', async(function(req, res) {
    try {
        let url='/api';
        
        const result = await(swiftAxios.get(url));
        
        let body={
            answer:result.data.answer,
            image:result.data.image
        }
        console.log(body.answer);

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