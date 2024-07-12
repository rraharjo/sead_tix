class QueryUtil {
    static properQueryStr = (theStr) => {
        return theStr ? "'" + theStr + "'" : null;
    };
    
    static properQueryInt = (theInt) => {
        return theInt ? parseInt(theInt) : null;
    };
    
    static properQueryFloat = (theFloat) => {
        return theFloat ? parseFloat(theFloat) : null;
    }
    
    static setZeroIfNull = (theInt) => {
        return theInt ? parseInt(theInt) : 0;
    }
}

export default QueryUtil;