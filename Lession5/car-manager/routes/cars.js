const express = require("express");
const router = express.Router();
const carModel = require("../model/car.model"); //Đại diện cho một bảng trong database
//CRUD here

//Create - Tạo 1 api tạo 1 chiếc xe mới lưu vào database và trả về khi call API
router.post("/", (req, res) => {
  const car = new carModel();
  car.name = req.body.name;
  car.manufacturer = req.body.manufacturer;
  car.price = req.body.price;

  car.save((err, car) => {
    if (err) {
      res.send("Lỗi lưu thông tin");
    } else {
      console.log("Lưu thông tin thành công");
      res.send(car);
    }
  });
});

//Read - Lấy toàn bộ danh sách các xe ô tô
router.get("/:name", (req, res) => {
  carModel.findOne({ name: req.query.name }).exce((err, cars) => {
    if (err) {
      res.send("Khong the lay thong tin o to trong bang");
    } else {
      console.log("Lay thong tin thanh cong");
      res.json(cars);
    }
  });
});

//Lấy 1 chiếc xe bở ID
router.get("/:id", (req, res) => {
  carModel.findOne({ _id: req.params.id }).exec((err, cars) => {
    if (err) {
      res.send("Không tìm thấy");
    } else {
      res.json(cars);
    }
  });
});

//Update thông tin 1 chiếc xe
router.put("/:id", (req, res) => {
  carModel.findOneAndUpdate(
    { id: req.params.id },
    { $set: { name: req.body.name } },
    { upsert: true },
    (err, car) => {
      if (err) {
        res.send("Xay ra loi");
      } else {
        res.status(200).send("Update thanh cong");
        res.json(car);
      }
    }
  );
});

//Xóa 1 chiếc xe bởi ID
router.delete("/:id", (req, res) => {
  carModel.deleteOne(
    { _id: req.params.id }.exec((err, cars) => {
      if (err) {
        res.send("Delete failed");
      } else {
        res.json(cars);
      }
    })
  );
});

module.exports = router;
