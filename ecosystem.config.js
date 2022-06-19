module.exports = {
  apps: [
    {
      name: 'feedback',
      script: 'dist/main.js',
      exec_mode: 'cluster',
      // Heroku gives memory quota err for 8 instances, use 4 for now
      instances: '4',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
