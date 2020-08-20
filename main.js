
const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

let cnt1=0, cnt2 = 0;
function getRow(firstRow, secondRow) {
    for(let i =0; i < firstRow.length;  i++){
        if(firstRow.charAt(i) == 'а')
            cnt1++;
    }
    for(let i =0; i < secondRow.length;  i++){
        if(secondRow.charAt(i) == 'а')
            cnt2++;
    }
    return cnt1 > cnt2 ? firstRow : secondRow;
}


console.log(getRow(firstRow, secondRow));


