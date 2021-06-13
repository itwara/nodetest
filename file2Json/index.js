const fs = require('fs')
const path = require('path')
const textract = require('textract')  // https://www.npmjs.com/package/textract

// text 处理
// fs.readFile('./file.txt', (err, data) => {
//   if (err) console.log(err)
//   console.log(data.toString())
// })

// 提取docx，只含基本文字
// textract.fromFileWithPath('test.docx', (err, data) => {
//   console.log(data)
// })


// 提取docx，含表格，只输出文本
// textract.fromFileWithPath('test-with-table.docx', (err, data) => {
//   console.log(data)
// })

// 提取docx，含图片, 未提取文件
// textract.fromFileWithPath('test-with-img.docx', (err, data) => {
//   console.log(data)
// })

// 提取pdf需要安装pdftotext
// textract.fromFileWithPath('test.pdf', (err, data) => {
//   console.log(data)
// })


// 提取img需要安装pdftotext
// textract.fromFileWithPath('test.jpg', (err, data) => {
//   console.log(data)
// })


// 提取img需要安装pdftotext
textract.fromFileWithMimeAndPath('image/jpeg', 'test.jpg', (err, data) => {
  console.log(data)
})

