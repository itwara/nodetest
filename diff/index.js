const startTime = Date.now()
const path = require('path')
const fs = require('fs')
const xlsx = require('node-xlsx')
const referXlsPath = path.resolve('1.xlsx')
const targetXlsPath = path.resolve('2.xlsx')
const referSheets = xlsx.parse(referXlsPath)
const targetSheets = xlsx.parse(targetXlsPath)


function getMatchInfo(targetRow) {
    if (
        targetRow
        && targetRow[2]
        && targetRow[2].trim()
        && /^[0-9a-zA-Z]*$/.test(targetRow[2].trim())
    ) {
        for (let referSheet of referSheets) {
            referSheet.data = referSheet.data.filter(referRow => referRow.length > 0)
            for (let referRowId in referSheet.data) {
                const referRow = referSheet.data[referRowId]
                if (
                    referRow
                    && referRow[2]
                    && referRow[2].toString()
                    && referRow[2].toString().trim() === targetRow[2].trim()
                ) {
                    referSheet.data.splice(referRowId, 1)
                    return referRow[0].toString().trim()
                }
                console.log(`...${++i}...${referRow[0]}`)
            }
        }
        return '/'
    } else {
        return '/'
    }
}

// 读取
let i = 0
targetSheets.forEach(targetSheet => {
    targetSheetFilter = targetSheet.data.filter(targetRow => targetRow.length > 0)
    for (let targetRow of targetSheetFilter) {
        const matchInfo = getMatchInfo(targetRow)
        targetRow.push(matchInfo)
    }
})

// 写入文件
const buffer = xlsx.build(targetSheets);
fs.writeFile('a.xlsx', buffer, function (err) {
    if (err) {
        console.log("Write failed: " + err);
        return;
    }

    console.log("Write completed.");
    console.log(`共花费时间：${(Date.now() - startTime) / 1000}秒`)
});