# shopping-market

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#### 经营理念
1. 做线上线下周围小区生意。保证正常收入的前提
2. 通过早上第一批不需要早起到蔬菜水果店来购买最新鲜的蔬菜水果线上销售配送到附近小区。
3. 老人电话客服订菜专栏，到达客户现场电子秤计量无误。
4. 线上支付退款业务保证无差错。不做评价系统
5. 开始覆盖周围小区，逐渐涉及批发业务，冷冻仓库
6. 不提供选货业务，提供抵挡残次专栏处理残次货物
7. 一定要注意一线产品不出问题，入口的东西亲自掌握。
8. 单位可选，
9. 图片都是都是放在服务器，默认加载过程中需要默认缩略图展示
10. 处理商品详情页从模糊到清晰，开始进入页面使用列表缩略图展示，直到请求清晰图片结束在渲染上去
10. 首页图标地址加入缓存，提前请求，固定模块直接缓存处理
11. 用微信登录授权后，提示哪行绑定手机号。不然无法下单
12. 印制宣传手提袋，主推线上。手提袋宣传信息印上边
13. 鸡蛋加两毛钱,但是订单要满88包配送。小区内满59配送
































14. 微信授权之后可以进行操作,在购买订单的时候获取客户使用的电话进行保存。
15. 用户购买之后随时可以拨打电话,查询订单或者追踪订单
16. 默认配送地址选择本小区,详细地址可以修改。 本小区无配送费
17. 订单排队
#### 首页内容
1. 首页顶部滚动banner图,理念介绍,订单指引。
2. 
#### 管理后台
1. 上传商品信息页,必传商品主图,商品标题,商品价格,至少一张商品详情图

#### 数据库设计
1. 商品分类表,类别名称,类别使用状态(使用,未使用),列表标签(比如：热,hot...)
2. 商品表,缩略图,商品名称,商品价格+单位,商品副标题,商品状态(上架,下架),货品状态(有无货,库存状态==),商品主图({... , Array:[] ... }), 商品详情图({... , Array:[] ... })
3. 订单表,地址id,商品ids(array),发票(暂不支持),送达时间,订单总价,订单状态(待付款,待配送,待收货,已失效-? 商品售完失效)
4. 地址表,地址状态(是否是默认),地址标签(家,公司,父母家,其他) 地址,详细地址及门牌号楼号,电话,联系人 
