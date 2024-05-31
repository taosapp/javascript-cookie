const javascriptCookie = {
    set: (name, value, exptime, thepath) => {
        let now = new Date();
        let thePath = '';
        let time = now.getTime(); //getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数
        //let anhour = (exptime+9)*3600; //以小时为单位，中国时间1小时要加8小时
        let days = (exptime*24+8)*3600; //以天为单位，中国时间24小时要加8小时
        time += days * 1000; //now 毫秒 + 天数毫秒
        now.setTime(time);
        document.cookie = name+'='+value+';expires='+now.toUTCString()+';path='+thepath;
    },
    get: (name) => {
        let cArr=document.cookie.split('; ');
        for(let i=0;i<cArr.length;i++){
            let cArr2=cArr[i].split('=');
            if(cArr2[0]==name){
                return cArr2[1];
            }
        }
        return '';
    },
    remove: (name, path) => {
        javascriptCookie.set(name, '', -1, path);
    }
}

export default javascriptCookie;