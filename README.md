[![Build Status](https://travis-ci.org/telemark/micro-sso-router.svg?branch=master)](https://travis-ci.org/telemark/micro-sso-router)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-sso-router.svg)](https://greenkeeper.io/)

# micro-sso-router

Microservice for routing requests

# API

### GET ```?origin=originurl&nextPath=/pathAfterLogin```

redirects you to correct sso instance

| URL param  | Description                                                             |
|------------|-------------------------------------------------------------------------|
| origin     | The URL to redirect to after login                                      |
| nextPath   | nextPath is stored in JWT after login and can be used as local redirect |

### GET ```/ip```

shows your ip according to the system

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-sso-router.png "Robohash image of micro-sso-router")
