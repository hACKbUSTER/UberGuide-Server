# UberGuide-Server

common data

```
{
	status : 0|1|2,
	data : {},
	message : ''
}
```

## Preferences

__get preferences in city__

__city::tag::get__

data:

```
[{
	_id : "569a062b60b26385cc99e9ec",
	zhLabel : "教育",
	enLabel : "Education",
	imageSrc : "http://magic_ride.leanapp.cn/images/education.jpg",
	cityCode : "PEK"
}]
```

__city::tag::post__

params: 

```
{
	tags : [_id, _id]
}
```

获取旅途名称

如有多个tags，显示“探索”
如果只有一个tag，显示 tag 的 label
    
## Places

__city::place::get__

```
{
	"description": "始建于明朝永乐十五年（公元1417年），最初名叫“承天门”，寓“承天启运、受命于天”之意，是紫禁城的正门。既包含了皇帝是替天行使权力、理应万世至尊的意旨；又寓有“外安内和、长治久安”的含义。",
	"zhName": "天安门",
	"cityCode": "PEK",
	"enName": "Tian'an men Square",
	"longitude": "116.39739",
	"imageSrc": "http://magic_ride.leanapp.cn/images/tiananmen.jpg",
	"latitude": "39.90872",
	"objectId": "569a289b60b21c04873c3862",
	"createdAt": "2016-01-16T11:25:15.386Z",
	"updatedAt": "2016-01-16T13:51:45.190Z"
}
```

__current::get__

params

```
{
	index : [0-3],
	
}
```

data

```
[
  {
    "type": "message",
    "data": "我们即将要抵达目的地 “天安门”"
  },
  {
    "type": "location",
    "data": {
      "description": "始建于明朝永乐十五年（公元1417年），最初名叫“承天门”，寓“承天启运、受命于天”之意，是紫禁城的正门。既包含了皇帝是替天行使权力、理应万世至尊的意旨；又寓有“外安内和、长治久安”的含义。",
      "zhName": "天安门",
      "cityCode": "PEK",
      "enName": "Tian'an men Square",
      "longitude": "116.3952912",
      "summary": "this is the summary",
      "imageSrc": "http://magic_ride.leanapp.cn/images/tiananmen.jpg",
      "latitude": "39.908724",
      "objectId": "569a289b60b21c04873c3862",
      "createdAt": "2016-01-16T11:25:15.386Z",
      "updatedAt": "2016-01-16T14:41:33.091Z"
    }
  }
]
```






__uber::access_token__

params

```
{
	access_token : access token of user
}
```

data

```
whatever
```

__uber::current_trip__



params

```
{
	request_id : current request id
}
```

data

```
{
  "result": {
    "data": {
      "status": "in_progress",
      "destination": {
        "latitude": 39.9087177183,
        "longitude": 116.397387524
      },
      "request_id": "f9542088-35d1-40b4-aeb4-8f751e0265e4",
      "driver": {
        "phone_number": "(555)555-5555",
        "rating": 4.9,
        "picture_url": "https://d1a3f4spazzrp4.cloudfront.net/uberex-sandbox/images/driver.jpg",
        "name": "John"
      },
      "pickup": {
        "latitude": 39.9081903646,
        "longitude": 116.3228380886
      },
      "eta": null,
      "location": {
        "latitude": 39.9081903646,
        "bearing": -150,
        "longitude": 116.3228380886
      },
      "vehicle": {
        "make": "Toyota",
        "picture_url": "https://d1a3f4spazzrp4.cloudfront.net/uberex-sandbox/images/prius.jpg",
        "model": "Prius",
        "license_plate": "UBER-PLATE"
      },
      "surge_multiplier": 1
    },
    "status": "0",
    "message": "ok"
  }
}
```

__uber::request__

params

```
{
	access_token : access token of user
}
```

data

```
{
  "result": {
    "data": {
      "status": "processing",
      "request_id": "f9542088-35d1-40b4-aeb4-8f751e0265e4",
      "driver": null,
      "eta": null,
      "location": null,
      "vehicle": null,
      "surge_multiplier": 1
    },
    "status": "0",
    "message": "ok"
  }
}
```

__uber::updateState__

params

```
{
    request_id:
    state:targer request state
    /*
    processing
    no_drivers_available
    accepted
    arriving
    in_progress
    driver_canceled
    rider_canceled
    completed
}
```

data

```
{
  "result": {
    "status": "0",
    "message": "ok"
  }
}
```
