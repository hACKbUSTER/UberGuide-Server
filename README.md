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

** GET ** `/api/city/place/:CITY_ID`

```
{
	_id : "",
	name : "天安门",
	latitude : "5.4",
	longitude : "12.7",
	description : "天安门就是六四事件发生的地点",
	imageSrc : ""
}
```

** GET ** `/api/ride/place/:LONGITUDE/:LATITUDE`

longitude and latitude is your location 

```
{
	_id : "",
	name : "天安门",
	latitude : "5.4",
	longitude : "12.7",
	description : "天安门就是六四事件发生的地点",
	imageSrc : "",
	relativeLocation : {
		
	}
}
```
