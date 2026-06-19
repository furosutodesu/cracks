// @kill-check
{const _e=$persistentStore.read("crack_expires")||"",_k=$persistentStore.read("crack_killed")==="true",_n=new Date().toISOString().slice(0,10);if(!_e||_k||_n>_e)$done({});}

/***********************************************
> deleteHeader by duyvinh09
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});
