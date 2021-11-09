var router = require('express').Router();
var mocks = require('http://vacancy.ckrt.ru/explorer/dumpster.json');
var assign = require('object-assign');

router.get('/content', function (req, res, next) {
    var articles = mocks.contents.map(function (content) {
            return assign({}, content, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;

    res.json(articles.slice(offset, limit + offset))
});

router.get('/content/:id', function (req, res, next) {
    var content = null;
    let id = req.params.id;
    do {
        id = req.params.id.slice(0, req.params.id.indexOf('/'));
        content = mocks.articles.filter(function (content) {
            return content.name == id
        })[0];
    } while (id && id != '/');
    
    if (content) return res.json(content);

    res.status(404).json({error: "not found"});
});

module.exports = router;
