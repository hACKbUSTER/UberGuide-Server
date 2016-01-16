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
