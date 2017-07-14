# apple-system-status

Apple System Status

## Install

```
$ npm install -g apple-system-status
```

## Usage

```js
const ass = require("apple-system-status");

ass().then(services => {
  console.log(JSON.stringify(services, null, 2));
});
/*** Output
[
  {
    "serviceName": "TestFlight",
    "redirectUrl": "https://developer.apple.com/testflight/",
    "events": [
      {
        "usersAffected": "Some users were affected",
        "epochStartDate": 1499963100000,
        "epochEndDate": 1499974800000,
        "messageId": "1914",
        "statusType": "Performance",
        "datePosted": "07/13/2017 13:28 PDT",
        "startDate": "07/13/2017 09:25 PDT",
        "endDate": "07/13/2017 12:40 PDT",
        "affectedServices": null,
        "eventStatus": "resolved",
        "message": "Users experienced a problem with this service."
      }
    ]
  }
]
***/
```

### CLI

`apple-system-status` or `ass`

```
$ apple-system-status
TestFlight - https://developer.apple.com/testflight/
[ { usersAffected: 'Some users were affected',
    epochStartDate: 1499963100000,
    epochEndDate: 1499974800000,
    messageId: '1914',
    statusType: 'Performance',
    datePosted: '07/13/2017 13:28 PDT',
    startDate: '07/13/2017 09:25 PDT',
    endDate: '07/13/2017 12:40 PDT',
    affectedServices: null,
    eventStatus: 'resolved',
    message: 'Users experienced a problem with this service.' } ]
```

## Link

https://developer.apple.com/system-status/
