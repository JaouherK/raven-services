module.exports = {
  apps : [{
    name   : 'service1-bash',
    script : './service.sh',
  }, {
    name   : 'service2-php',
    script : './service.php',
    instances: 3,
    exec_mode: 'fork',
    env: {
      "ENV": "development"
    },
    env_production: {
      "ENV": "production",
    }
  }, {
    name   : 'service3-php',
    script : './service.php',
  }, {
    name   : 'service4-ruby',
    script : './service.rb',
  }, {
    name   : 'service5-python',
    script : './service.py',
  }, {
    name   : 'service6-node',
    script : './service.js',
    instances: 2,
    exec_mode: 'cluster'
  }]
}
