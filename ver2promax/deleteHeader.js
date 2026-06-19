// @kill-check-v2
var __cfg="https://cdn.jsdelivr.net/gh/furosutodesu/cracks@master/config.json",__now=Date.now(),__last=parseInt($persistentStore.read("crack_check_ts")||"0");function __chk(){var e=$persistentStore.read("crack_expires")||"",k=$persistentStore.read("crack_killed")==="true",d=new Date().toISOString().slice(0,10);if(!e||k||d>e){$done({});return;}__main();}if(__now-__last>300000){$httpClient.get({url:__cfg,timeout:10},function(err,res,data){if(!err&&data){try{var c=JSON.parse(data),uid=$persistentStore.read("crack_user_id")||"",killed=c.active===false||(Array.isArray(c.blacklist)&&uid&&c.blacklist.includes(uid));$persistentStore.write(killed?"true":"false","crack_killed");$persistentStore.write(String(__now),"crack_check_ts");}catch(e){}}__chk();});}else{__chk();}function __main(){
/***********************************************
> deleteHeader by duyvinh09
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});

}
