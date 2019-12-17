//Library Fine
//Check if year returned > year due (if yes return 10000)
//check if month > month due (if yes return month-month due * 500)
//check if day > day due (if yes return day-daydue* 15)
//Test cases where y1<y2 && m1<m2

function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine =0;
    if(y1>y2){
        return fine = (y1-y2)*10000;
    }else if(y2>y1){
        return fine;
    }else{
        if(m1>m2){
            return fine = (m1-m2)*500;
        }else if(m1 < m2){
            return fine;
        }else{
            if(d1>d2){
                return fine = (d1-d2)*15;
            }else{
                return fine;
            }
        }
    }

}

libraryFine(9,6,2015,6,6,2015);
libraryFine(2,7,1014,1,1,1015);