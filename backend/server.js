const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


const app = express();
const PORT = 3000;
app.use(cors());

let myName = "Candelaria"; 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });


app.post("/api/avatar", upload.single("avatar"), (req, res) => {

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const avatarUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  res.json({ avatarUrl });
});

app.post("/api/name", express.json(), (req, res) => {
  const { name } = req.body;
  console.log("Nombre recibido:", name); 
  if (name) {
    myName = name;
    res.json({ message: 'Name updated successfully' });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

app.get("/api/name", (req, res) => {
  res.json({ name: myName });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
