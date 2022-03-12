const express = require('express');
const mangaRouter = express.Router();


//Dinh nghia danh sach cac quyen manga
const mangas = [{ id: '1', name: 'bay vien ngoc rong' },
    { id: '2', name: 'conan' },
    { id: '3', name: 'conan' },
    { id: '4', name: '' }
];

//handling manga
//get localhost:3002/ -> Tra ve danh sach manga
//POST localhost:3002/ {id, name:} -> Thêm quyển truyện mới vào array (POSTMAN) và trả về mảng manga mới
// PUT localhost:3002/ {id,name } -> Cập nhật tên một manga nào đó
//DELETE localhost:3002/ {id} -> xóa truyện ra khỏi mảng

mangaRouter.get('/', function(req, res) {
    res.send(mangas);
});


mangaRouter.post('/', function(req, res) {
    const newManga = {
        id: `${mangas.length + 1}`,
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
});

module.exports = mangaRouter;