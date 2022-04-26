### LEVEL 1

1. Structure
|__Configs // chủ yếu chứa Object: config dabatabse,...
|__Helpers // chứa những document, function (được dùng chung): convert,...
|__Models // ánh xạ của dababase
|__Routes
|__.env

### LEVEL 2

1. Structure
src
|__config           // chủ yếu chứa Object: config dabatabse,...
|__api
   |__controllers   
   |__helpers
   |__middlewares
   |__routes
   |__models
   |__services
   |__validations
.gitignore
.env

2. Flow
routes => controllers => validation (check) => services => models

### LEVEL 3

1. Structure
```bash
src
|__config                  // chủ yếu chứa Object: config dabatabse,...
|__api
   |__version1             // chia nhiều version
      |__controllers   
      |__helpers
      |__middlewares
      |__routes
      |__models
      |__services
      |__validations
      |__interfaces
      |__logs
         |__info.log
         |__error.log
   |__version2
      |__controllers   
      |__helpers
      |__middlewares
      |__routes
      |__models
      |__services
      |__validations
      |__interfaces
      |__logs
         |__info.log
         |__error.log
|__ecosystem.config.js     //pm2 nodejs
tests                      // test
.gitignore
.eslintignore              // format code
.env
```