// @kill-check-v2
var __cfg="https://cdn.jsdelivr.net/gh/furosutodesu/cracks@master/config.json",__now=Date.now(),__last=parseInt($persistentStore.read("crack_check_ts")||"0");function __chk(){var e=$persistentStore.read("crack_expires")||"",k=$persistentStore.read("crack_killed")==="true",d=new Date().toISOString().slice(0,10);if(!e||k||d>e){$done({});return;}__main();}if(__now-__last>300000){$httpClient.get({url:__cfg,timeout:10},function(err,res,data){if(!err&&data){try{var c=JSON.parse(data),uid=$persistentStore.read("crack_user_id")||"",killed=c.active===false||(Array.isArray(c.blacklist)&&uid&&c.blacklist.includes(uid));$persistentStore.write(killed?"true":"false","crack_killed");$persistentStore.write(String(__now),"crack_check_ts");}catch(e){}}__chk();});}else{__chk();}function __main(){
let objc = {
  "status": "success",
    "response": [
        {
            "status": "SUBSCRIPTION_RENEWED",
            "is_trial": false,
            "order_id": "2000001108782321",
            "expire_date": 32662137600000,
            "purchase_date": 1704758400000,
            "subscription_id": "com.picsart.studio.subscription_pro_3_yearly",
            "original_order_id": "2000000756285050",
            "plan_meta": {
                "permissions": [
                    "premium_tools_standard",
                    "premium_tools_ai"
                ],
                "auto_renew_product_id": "com.picsart.studio.subscription_mac_tier1_pro_yearly",
                "level": 2000,
                "storage_limit_in_mb": 102400,
                "id": "com.picsart.studio.subscription_pro_3_yearly",
                "frequency": "yearly",
                "type": "renewable",
                "scope_id": "full",
                "product_id": "com.picsart.studio.subscription_pro_3_yearly",
                "tier_id": "pro"
            },
            "limitation": {
                "max_count": 10,
                "limits_exceeded": false
            },
            "is_eligible_for_introductory": false,
            "reason": "ok"
        }
    ]
}
$done({ response: {body: JSON.stringify(objc),status: 200} });
}
