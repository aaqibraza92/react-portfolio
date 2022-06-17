const dateFormatter=(val)=>{
    let date = new Date(val);
    let dateMDY = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    return dateMDY;
  }

  const nextOneYear=(val)=>{
    let date = new Date(val);
    let dateMDY = `${date.getFullYear()+1}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    return dateMDY;
  }

  const nextOneMonth=(val)=>{
    var date =new Date();
    var newDate = new Date(date.setMonth(date.getMonth()+1));
     return dateFormatter(newDate);
  }

  export {dateFormatter,nextOneYear,nextOneMonth};