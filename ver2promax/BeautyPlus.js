// @kill-check
{const _e=$persistentStore.read("crack_expires")||"",_k=$persistentStore.read("crack_killed")==="true",_n=new Date().toISOString().slice(0,10);if(!_e||_k||_n>_e)$done({});}

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
