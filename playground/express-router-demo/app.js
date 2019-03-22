var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json());

var items = [];

router.route("/")               //http://localhost:3000/todo
    .get((req, res) => {
        res.json({
            status: "Items Found",
            items: items
        })
    })
    .post((req, res) => {
        items.push(req.body);
        res.send({
            status: "Item Added",
            item: req.body
        })
    })
    .put((req, res) => {
        items = {};
        res.send({
            status: "Items updated",
        })
    })
    .delete((req, res) => {
        items = [];
        res.send({
            status: "Items deleted"
        })
    });
router.route("/:num")            // http://localhost:3000/todo/3
    .get((req, res) => {
        var id = req.params['num'];
        if (id && items[Number(id)]) {
            return res.send({
                status: "Item Found",
                item: items[Number(id)]
            })
        } else {
            res.send({
                status: "Item NOT found"
            })
        }
    })
    .all((req, res) => {
        res.send({
            status: "NOT Implemented"
        })
    })

app.use("/todo", router);

app.listen(3000, function () {
    console.log("Todo App started at Port 3000");
})
