module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'admin',
      host : '18.191.47.86',
      ref  : 'origin/main',
      repo : 'git@github.com:yulia-solo/Helper_Project.git',
      path : '/home/admin/backend',
      env: {
        DB_PASSWORD: 'LeoMilano21!'
      },
      "post-deploy" : 'cd Server && npm install && pm2 reload ecosystem.config.js --env production',
      "ssh_options": "StrictHostKeyChecking=no"
    }
  }
};
