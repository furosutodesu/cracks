const CONFIG_URL = 'https://raw.githubusercontent.com/furosutodesu/cracks/master/config.json';

$httpClient.get({ url: CONFIG_URL, timeout: 10 }, (error, response, data) => {
  if (!error && data) {
    try {
      const cfg = JSON.parse(data);
      $persistentStore.write(cfg.active === false ? 'true' : 'false', 'crack_killed');
    } catch (e) {}
  }
  $done({});
});
