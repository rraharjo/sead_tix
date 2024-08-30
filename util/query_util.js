class QueryUtil {
    static properQueryStr = (theStr) => {
        return theStr ? "'" + theStr + "'" : null;
    };
    
    static properQueryInt = (theInt) => {
        if (theInt === 0){
            return parseInt(theInt);
        }
        return theInt ? parseInt(theInt) : null;
    };
    
    static properQueryFloat = (theFloat) => {
        return theFloat ? parseFloat(theFloat) : null;
    }
    
    static setZeroIfNull = (theInt) => {
        return theInt ? parseInt(theInt) : 0;
    }

    static properQueryDate = (theDate) => {
        const day = theDate.getUTCDate().toString().padStart(2, 0);
        const month = (theDate.getUTCMonth() + 1).toString().padStart(2, 0);
        const year = theDate.getUTCFullYear().toString();
        return `to_date('${day}${month}${year}', 'ddMMyyyy')`
    }

    static properQueryArr = (properElementArr) => {
        var toRet = '(';
        var i = 0;
        for (i ; i < properElementArr.length - 1; i++){
            toRet += properElementArr[i] + ',';
        }
        toRet += properElementArr[i] + ')'
        return toRet;
    }
}

export default QueryUtil;