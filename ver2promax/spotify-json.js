// @kill-check
{const _e=$persistentStore.read("crack_expires")||"",_k=$persistentStore.read("crack_killed")==="true",_n=new Date().toISOString().slice(0,10);if(!_e||_k||_n>_e)$done({});}

console.log(`spotify-json-2025.06.20`);
let url = $request.url;
// console.log(`原始url:${url}`);
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`替换platform:${url}`);
} else {
    console.log('无需处理');
}
$done({
    url
});
