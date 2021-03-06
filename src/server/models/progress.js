var lti = require('ims-lti');
var config = require('../config');
var atob = require('atob');
module.exports = function(app) {
    app.get('/progress/:id/:score', function(req, res, next) {
        app.lti._createProvider(null, function(err, provider) {
            if (err) {
                return res.send('error1');
            }
            provider.valid_request(req, function(err, is_valid) {
                // if (err) {
                //     return res.send('error2');
                // }

                var id = atob(req.params.id);
                var score = Number(atob(req.params.score));
                //console.log(id, score);
                var outcomeConfig = {
                    consumer_key: config.lti.consumerKey,
                    consumer_secret: config.lti.consumerSecret,
                    service_url: provider.body.lis_outcome_service_url,
                    source_did: id,
                    result_data_types: [],
                };
                // console.log(outcomeConfig); 
                var outcome = new lti.OutcomeService(outcomeConfig);

                console.log(outcomeConfig)
                outcome.send_read_result(function(err, result) {
                    if (err) {
                        console.log('readError', err);
                        res.send('error');
                    }
                    if (!result || result < score) {
                        outcome.send_replace_result(score, function(err, result) {
                            if (err) {
                                res.send('error1');
                                return console.log('writeError', err);
                            }
                            res.send('grade', result)
                        });
                    } else {
                        res.send('up to date');
                    }
                });
            });
        });
    });
}
