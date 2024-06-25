const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
];

app.get("/items", (req, res) => {
    res.json(items);
});

app.get("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find((item) => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: "Item not found" });
    }
});

app.post("/items", (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = items.findIndex((item) => item.id === itemId);

    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        res.json(items[index]);
    } else {
        res.status(404).json({ error: "Item not found" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
