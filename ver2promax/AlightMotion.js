// @kill-check-v2
var __cfg="https://cdn.jsdelivr.net/gh/furosutodesu/cracks@master/config.json",__now=Date.now(),__last=parseInt($persistentStore.read("crack_check_ts")||"0");function __chk(){var e=$persistentStore.read("crack_expires")||"",k=$persistentStore.read("crack_killed")==="true",d=new Date().toISOString().slice(0,10);if(!e||k||d>e){$done({});return;}__main();}if(__now-__last>300000){$httpClient.get({url:__cfg,timeout:10},function(err,res,data){if(!err&&data){try{var c=JSON.parse(data),uid=$persistentStore.read("crack_user_id")||"",killed=c.active===false||(Array.isArray(c.blacklist)&&uid&&c.blacklist.includes(uid));$persistentStore.write(killed?"true":"false","crack_killed");$persistentStore.write(String(__now),"crack_check_ts");}catch(e){}}__chk();});}else{__chk();}function __main(){
var objc = JSON.parse($response.body);

objc = {
    "result": {
        "result": "success",
        "msTime": 1704758400000,
        "accountCreatedMillis": null,
        "licenses": [
            {
                "benefits": [
                    "RemoveWatermark",
                    "MemberEffects",
                    "ProjectPackageSharing",
                    "FutureMemberFeatures",
                    "AdvancedEasing",
                    "CameraObjects",
                    "LayerParenting",
                    "CloudStorageLowTier"
                ],
                "type": "subscription",
                "store": "apple_app_store",
                "autoRenewing": true,
                "orderNumber": "730002548422566",
                "productId": "alightcreative.motion.1y_t60_1w_choose_your_bundle",
                "period": "1y",
                "label": null,
                "details": null,
                "expires": 32662137600000,
                "valid": true,
                "linkStatus": "linked-current"
            }
        ],
        "warnings": []
    }
}


$done({ body: JSON.stringify(objc) });
}
