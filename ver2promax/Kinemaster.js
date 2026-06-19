// @kill-check
{const _e=$persistentStore.read("crack_expires")||"",_k=$persistentStore.read("crack_killed")==="true",_n=new Date().toISOString().slice(0,10);if(!_e||_k||_n>_e)$done({});}

var obj = JSON.parse($response.body);

obj= {
    "is_valid_device" : true,
    "has_valid_subscription" : true,
    "expiration_date_ms" : 4071600000000,
    "is_table_resettable" : true,
    "subscription_product_id" : "com.kinemaster.sub.annual.ia2",
    "state_code" : 0
};

$done({body: JSON.stringify(obj)});