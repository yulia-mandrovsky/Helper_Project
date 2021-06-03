module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '18.191.222.72',
      ref  : 'origin/main',
      repo : 'git@github.com:yulia-solo/Helper_Project.git',
      path : '/home/ubuntu/backend-helper',
      env: {
        DB_NAME: 'helper_db',
        DB_HOST: 'helper-db.czeyex3idb1y.us-east-2.rds.amazonaws.com',
        DB_USER: 'Yulia_Solo',
        DB_PASSWORD: 'LeoMilano21!'
      },
      "post-deploy" : 'cd Server && npm install && pm2 reload ecosystem.config.js --env production',
      "ssh_options": "StrictHostKeyChecking=no"
    }
  }
};
