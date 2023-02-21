Ý 1 : Tìm toàn bộ quyển sách trong document book
query:
db.book.find({})
result:
![](./img/Screenshot_20230221_092830.png)

Ý 2: Tìm một quyển sách theo id
query:
db.book.find({"\_id" : "ObjectId('63f4285710119b57e5d6db98')"})
result:
Em chạy đúng câu lệnh mà sao nó không ra
Ý 3: Truy vấn tất cả những nhà hàng chuyên về ẩm thực Mỹ
query:
db.book.insertOne({title:"New Book",author: "Luong Tran",publication_date: "2023-20-2",page:1000,genres:["Hai Huoc","Tham hiem"],publisher: {name:"hihi",location: "VietNam"}})

result:
{
\_id: ObjectId("63f48851395e21eb45b64e90"),
title: 'New Book',
author: 'Luong Tran',
publication_date: '2023-20-2',
page: 1000,
genres: [
'Hai Huoc',
'Tham hiem'
],
publisher: {
name: 'hihi',
location: 'VietNam'
}
}

Ý 4: Tìm 1 quyển sách có lớn hơn 400 trang và đúng 2 thể loại
query:
db.book.find({pages: {$gt : 400}, genres: {$size : 2}})
result:
{
\_id: ObjectId("63f4285710119b57e5d6db9b"),
title: 'One Hundred Years of Solitude',
author: 'Gabriel García Márquez',
publication_date: '1967-06-01',
pages: 417,
genres: [
'Novel',
'Magic realism'
],
publisher: {
name: 'Editorial Sudamericana',
location: 'Buenos Aires, Argentina'
}
}
{
\_id: ObjectId("63f4285710119b57e5d6db9c"),
title: 'The Lord of the Rings',
author: 'J.R.R. Tolkien',
publication_date: '1954-07-29',
pages: 1178,
genres: [
'Fantasy',
'Adventure'
],
publisher: {
name: 'George Allen & Unwin',
location: 'London, UK'
}
}

ý 5 : Update thông tin của quyển sách có title là "One Hundred Years Of Solitude"
query:
db.book.updateOne({title: "One Hundred Years of Solitude"},{$set :{publisher_date: "2023-02-20",genres:['Trinh tham','Hai'],publisher:{name:"Luong",location:"VN"}}})
result:
{
\_id: ObjectId("63f4285710119b57e5d6db9b"),
title: 'One Hundred Years of Solitude',
author: 'Gabriel García Márquez',
publication_date: '1967-06-01',
pages: 417,
genres: [
'Trinh tham',
'Hai'
],
publisher: {
name: 'Luong',
location: 'VN'
},
publisher_date: '2023-02-20'
}
Ý 6 : Delete những quyển sách xuất bản trước năm 1967
query:
db.book.deleteMany({"publication_date": {$lt: "1967-01-01"}})
result:
acknowledged: true,
deletedCount: 5
{
\_id: ObjectId("63f4285710119b57e5d6db9a"),
title: "The Hitchhiker's Guide to the Galaxy",
author: 'Douglas Adams',
publication_date: '1979-10-12',
pages: 214,
genres: [
'Science fiction',
'Comedy',
'Adventure'
],
publisher: {
name: 'Pan Books',
location: 'London, UK'
}
}
{
\_id: ObjectId("63f4285710119b57e5d6db9b"),
title: 'One Hundred Years of Solitude',
author: 'Gabriel García Márquez',
publication_date: '1967-06-01',
pages: 417,
genres: [
'Trinh tham',
'Hai'
],
publisher: {
name: 'Luong',
location: 'VN'
},
publisher_date: '2023-02-20'
}
{
\_id: ObjectId("63f48851395e21eb45b64e90"),
title: 'New Book',
author: 'Luong Tran',
publication_date: '2023-20-2',
page: 1000,
genres: [
'Hai Huoc',
'Tham hiem'
],
publisher: {
name: 'hihi',
location: 'VietNam'
}
}
