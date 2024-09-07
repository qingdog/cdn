# cdn

## cdn 列表

### react

 - v17.0.2 : https://cdn.jsdelivr.net/gh/specialCoder/CDN/public/react/17.0.2/react.production.min.js

### react-dom

 - v17.0.2 : https://cdn.jsdelivr.net/gh/specialCoder/CDN/public/react-dom/17.0.2/react-dom.production.min.js



---

## quick start

```shell
PS D:\mytest\cdn> tree /f seldom
文件夹 PATH 列表
卷序列号为 00000044 CF0D:74A5
D:\MYTEST\CDN\SELDOM
    seldom-main.css
    seldom-utilities.css
    XTestRunner_logo.jpg

没有子文件夹
```

* cdn列表：https://cdn.jsdelivr.net/gh/qingdog/cdn/

```shell
https://cdn.jsdelivr.net/gh/qingdog/cdn/seldom/seldom-main.css
https://cdn.jsdelivr.net/gh/qingdog/cdn/seldom/seldom-utilities.css
https://cdn.jsdelivr.net/gh/qingdog/cdn@1.7.5/seldom/seldom-utilities.css

https://qingdog.netlify.app/seldom/seldom-utilities.css
https://seldom.pages.dev/seldom-utilities.css
# 图片
https://raw.githubusercontent.com/qingdog/cdn/v1.7.5/seldom/XTestRunner_logo.jpg
https://cdn.jsdelivr.net/gh/qingdog/cdn/seldom/XTestRunner_logo.jpg
```

* 通过jsDelivr引用资源

使用方法：[https://cdn.jsdelivr.net/gh/](https://link.zhihu.com/?target=https%3A//cdn.jsdelivr.net/gh/)你的[用户名](https://zhida.zhihu.com/search?q=用户名&zhida_source=entity&is_preview=1)/你的仓库名@发布的版本号/[文件路径](https://zhida.zhihu.com/search?q=文件路径&zhida_source=entity&is_preview=1)

例如：

```text
https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@1.0/images/trhx.png
https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@2.0.1/css/style.css  
https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.3//The%20Pet%20Girl%20of%20Sakurasou.mp4
```

注意：版本号不是必需的，是为了区分新旧资源，如果不使用版本号，将会直接引用最新资源，除此之外还可以使用某个范围内的版本，查看所有资源等，具体使用方法如下：

```text
// 加载任何Github发布、提交或分支
https://cdn.jsdelivr.net/gh/user/repo@version/file

// 加载 jQuery v3.2.1
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js

// 使用版本范围而不是特定版本
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js   https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js
 
// 完全省略该版本以获取最新版本
https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
 
// 将“.min”添加到任何JS/CSS文件中以获取缩小版本，如果不存在，将为会自动生成
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js
 
// 在末尾添加 / 以获取资源目录列表
https://cdn.jsdelivr.net/gh/jquery/jquery/
```

---

1. **使用 RawGit**： RawGit 是一个提供从 GitHub 仓库直接提供原始文件的服务。与 jsDelivr 类似，你可以通过 RawGit 的链接直接访问 GitHub 上的文件。不过，需要注意的是，从 2018 年起，RawGit 停止接受新文件，但仍然可以访问旧文件。
2. **使用 GitHack**： GitHack 是另一个提供类似 RawGit 功能的服务，允许你通过 CDN 方式访问 GitHub 上的文件。
3. **使用 Cloudflare Workers/Pages**： `Cloudflare Workers 允许你运行自定义的 JavaScript 代码来处理 HTTP 请求。你可以编写一个 Worker 来从 GitHub 仓库中获取文件并作为 CDN 提供服务。这个选项稍微复杂一些，但提供了更多的自定义能力。`
4. **使用 Netlify**： `Netlify 是一个静态网站托管服务，它可以从 GitHub 仓库自动部署网站。你可以利用 Netlify 的 CDN 功能来托管静态资源。Netlify 提供了免费计划，并支持自定义域名和 SSL。`
5. **使用 Vercel**： Vercel（之前称为 Zeit Now）也是一个静态网站和服务器less Functions 的托管平台，它可以从 GitHub 仓库自动部署项目，并提供全球 CDN 加速。
6. **使用 Surge**： Surge 是一个命令行工具，可以快速部署静态网站和资源到全球 CDN。虽然它不如 Netlify 和 Vercel 那样功能丰富，但操作简单，适合快速部署。
7. **使用 AWS CloudFront + S3**： 虽然这不是完全免费的服务，但亚马逊的 AWS 提供了免费层级的 S3 存储和一定量的 CloudFront CDN 数据传输。你可以将文件上传到 S3，然后通过 CloudFront 分发。
8. **使用 Firebase Hosting**： Firebase Hosting 提供了一个免费的 CDN 服务，可以托管静态网站和资源。它也支持从 GitHub 仓库自动部署。
9. jsdelivr：`jsDelivr 可以加载 github 仓库里 release 包里面的文件内容`

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

