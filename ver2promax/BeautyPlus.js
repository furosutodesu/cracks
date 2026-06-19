// @kill-check-v2
var __cfg="https://cdn.jsdelivr.net/gh/furosutodesu/cracks@master/config.json",__now=Date.now(),__last=parseInt($persistentStore.read("crack_check_ts")||"0");function __chk(){var e=$persistentStore.read("crack_expires")||"",k=$persistentStore.read("crack_killed")==="true",d=new Date().toISOString().slice(0,10);if(!e||k||d>e){$done({});return;}__main();}if(__now-__last>300000){$httpClient.get({url:__cfg,timeout:10},function(err,res,data){if(!err&&data){try{var c=JSON.parse(data),uid=$persistentStore.read("crack_user_id")||"",killed=c.active===false||(Array.isArray(c.blacklist)&&uid&&c.blacklist.includes(uid));$persistentStore.write(killed?"true":"false","crack_killed");$persistentStore.write(String(__now),"crack_check_ts");}catch(e){}}__chk();});}else{__chk();}function __main(){
/* BeautyPlus Crack By duyvinh09
*/
var objc = JSON.parse($response.body);

    objc = {
  
"vip_expires_date": 4071600000,
"message": "success",
  "data": {
    "points": 999999999,
    "next_claim": 1,
    "gid": "2641810920",
    "balance": 999999999,
    "created_at": 1707331696
},
}

$done({body : JSON.stringify(objc)});

}
