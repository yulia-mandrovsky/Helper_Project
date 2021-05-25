module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'admin',
      host : 'ec2-18-224-37-172.us-east-2.compute.amazonaws.com',
      ref  : 'origin/main',
      repo : 'git@github.com:yulia-solo/Helper_Project.git',
      path : '/home/admin/backend',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      "ssh_options": "StrictHostKeyChecking=no"
    }
  }
};
