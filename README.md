# cdn

## cdn 列表

### react

 - v17.0.2 : https://cdn.jsdelivr.net/gh/specialCoder/CDN/public/react/17.0.2/react.production.min.js

### react-dom

 - v17.0.2 : https://cdn.jsdelivr.net/gh/specialCoder/CDN/public/react-dom/17.0.2/react-dom.production.min.js



---

## quick start

为什么要用CDN？
---------

> CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。  
> \-- 百度百科

通俗的来讲CDN主要有两个功能：

*   基础功能：可以提供静态文件内容
*   主要功能：加速内容获取，提高访问速度

jsDelivr 是什么
------------

> A free, fast, and reliable Open Source CDN for npm, GitHub, Javascript, and ESM.  
> \-- from https://www.jsdelivr.com/

简单来说就是它可以为开放资源（比如 npm/github release等）提供CDN服务。

网络分布：https://www.jsdelivr.com/network#map

![](https://segmentfault.com/img/bVcXK9F)

可以看到在中国也有好几台服务器，国内使用也可以完全不用担心速度。

jsDelivr + Github 可以做什么？
------------------------

**通过jsDelivr 可以加载 github 仓库里的文件内容。** 

### 通过jsDelivr引用资源

![](https://segmentfault.com/img/bVcXK1X)

#### 常用：使用 release 包里面的内容

##### 指定版本：

```
https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径
```

例如：https://cdn.jsdelivr.net/gh/specialCoder/cdn@0.1.3/public/jquery/jquery.min.js

就是加载 v0.1.3版本下的这个文件：https://github.com/specialCoder/cdn/blob/main/public/jquery/jquery.min.js

| 描述 | 内容 |
| --- | --- |
| 用户名 | specialCoder |
| 仓库名 | cdn |
| relaese版本号 | 0.1.3 |
| 文件路径 | /public/jquery/jquery.min.js |

##### 其他使用方法

以 jquery 为例子：[https://github.com/jquery/jquery](https://link.segmentfault.com/?enc=5aiZkwGBYZHZmLFbgMuecA%3D%3D.iAYYW30%2F%2FGasMjybT7prxKCGOPMD%2BzM%2BxSA78jYQazY5NB6SOD638bEbKV3hfte7)

```
// 使用版本范围而不是特定版本
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js   https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js
 
// 完全省略该版本以获取最新版本
https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
 
// 将“.min”添加到任何JS/CSS文件中以获取缩小版本，如果不存在，将为会自动生成
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js
 
```

#### 其他用法

```
// 加载任何Github发布、提交或分支
https://cdn.jsdelivr.net/gh/user/repo@version/file

// 在末尾添加 / 以获取资源目录列表（返回以html文件，页面中展示列表）
https://cdn.jsdelivr.net/gh/jquery/jquery/
```

### github 部分

通过上面我们知道了 jsDelivr 可以加载 github release 下的内容，接下来我们需要：

1.  创建 github cdn 仓库
2.  发布版本
3.  实现 push 的时候自动发布版本

#### 创建 github cdn 仓库

访问 [https://github.com/](https://link.segmentfault.com/?enc=pE1QLr26%2Bp90qaBtIQvGJA%3D%3D.r59qhBgvHo1Q1DlAMBpjcL71OGcYIcAppBBIbmYBzKk%3D) 创建，目前创建 public 仓库获取文件是没有问题的（private 仓库还没试过）。  
然后把仓库代码克隆到本地，往仓库里添加你需要的文件，然后提交到远程即可。

#### 发布版本

tag 与 release 【待补充】

在仓库主页，点击右边区域 Release 按钮：  
![](https://segmentfault.com/img/bVcXK8J)

点击 「创建一个新的 relaese」:  
![](https://segmentfault.com/img/bVcXK8I)

创建 release：  
![](https://segmentfault.com/img/bVcXK8W)

*   choose tag: 选择一个已经存在的tag或者新建一个，关于 [git tag](https://link.segmentfault.com/?enc=IrzuyhOPpJdHhALXjhcYFA%3D%3D.FlO0s%2Bnz42iO8EwZtHfwZVWghXZsNn%2BAXFU3SQJYp%2BScD%2BvpsXFQDZQTa9EceHfJLrCcAzy6tA%2Bi7aGJ0sHF9fKXf3MBXz91ohKXpmjrM%2Ft4Y8%2BahGyvYlMK8HC7Ex60)
*   target: 选择一个分支或者一次提交。建议选择主分支
*   title: 输入 title，会显示在版本列表中
*   description: 输入版本描述
*   Attach files: 忽略
*   pre-release: 发布测试版版本的时候可以勾选

输入完毕然后选择 「Publish relasese」就可以了。

#### 自动发布

使用 github action 来实现自动发布：

*   mian 分支有提交的时候就会发布
*   使用 package.json 里面的 verison 控制 tag 和 版本号（tag 与 版本号一致）
*   每次都发布正式版本

`.github/workflow/publish.yml` 内容:

```

name: release CI
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: 读取当前版本号
        id: version
        uses: ashley-taylor/read-json-property-action@v1.0
        with:
          path: ./package.json
          property: version
      - name: Release
        uses: actions/create-release@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{steps.version.outputs.value}}
          release_name: v${{steps.version.outputs.value}}
          body: Release v${{steps.version.outputs.value}}
          draft: false
          prerelease: false
```

至此，github部分完成。



总结
--

我们实现了自制CDN，并且可以自动发版。这样就可以愉快的使用了～～  
思考🤔 如何把它做成一个接口？？这样我们在文件需求较少的时候就省去了购买 文件存储的花销。

参考
--
*   [免费CDN：jsDelivr+Github 使用方法](https://zhuanlan.zhihu.com/p/76951130)

