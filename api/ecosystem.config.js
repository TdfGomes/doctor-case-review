module.exports = {
  apps: [
    {
      name: 'api',
      script: 'index.js',
      watch: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      watch_options: {
        usePolling: true,
      },
      instances: 1,
      exec_mode: 'cluster_mode',
      autorestart: true,
    },
  ],
}
