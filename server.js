const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");
const url =
    "mongodb+srv://yamlevi002:Y124578235689@cluster0.iuh22uk.mongodb.net/final-test-q3";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect(url).then(() => {
    console.log("db connected");
});

app.use(express.static("pages"));

const teacherSchema = db.Schema({
    fullName: String,
    id: String,
    salary: Number,
    profession: String
});
const teacherModel = db.model("teachers", teacherSchema);

app.get("/find-all-teachers", (req, res) => {
    const findAllTeachers = async () => {
        let allTeachers = await teacherModel.find()
        res.send(allTeachers)
    }
    findAllTeachers()
})

app.get("/find-teachers-by-salary-input", async (req, res) => {
    const temp = await teacherModel.find({
        salary: { $lt: req.query.maxSalaryInput },
    });
    res.send(temp);
});

app.post("/add-teacher", (req, res) => {
    let temp = {
        fullName: req.body.fullName,
        id: req.body.id,
        salary: req.body.salary,
        profession: req.body.profession,
    };

    const addTeacherToDB = async (teacher) => {
        let fullName = await teacherModel.findOne({ fullName: req.body.fullName });
        if (fullName == null) {
            await teacherModel.insertMany(teacher);
            res.send(`${teacher.fullName} added to DB!`);
        } else {
            res.send("teacher already in DB");
        }
    };
    addTeacherToDB(temp);
});


app.listen("3000", () => {
    console.log("server is working on port 3000!");
});
