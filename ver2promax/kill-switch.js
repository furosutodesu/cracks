// jsDelivr CDN mirrors GitHub — more reliable globally than raw.githubusercontent.com
const CONFIG_URL = 'https://cdn.jsdelivr.net/gh/furosutodesu/cracks@master/config.json';

$httpClient.get({ url: CONFIG_URL, timeout: 10 }, (error, response, data) => {
  if (!error && data) {
    try {
      const cfg = JSON.parse(data);
      const userId = $persistentStore.read('crack_user_id') || '';
      const globalKilled = cfg.active === false;
      const blacklisted = Array.isArray(cfg.blacklist) && userId && cfg.blacklist.includes(userId);
      $persistentStore.write(globalKilled || blacklisted ? 'true' : 'false', 'crack_killed');
    } catch (e) {}
  }
  $done({});
});
