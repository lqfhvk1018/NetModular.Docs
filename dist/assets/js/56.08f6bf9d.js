(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{342:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nuget-服务器搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuget-服务器搭建"}},[t._v("#")]),t._v(" Nuget 服务器搭建")]),t._v(" "),a("p",[t._v("随着公司业务发展，模块会越来越多，模块之间的依赖如果还是采用引用的方式管理，那真的是一件很痛苦的事情，而 "),a("a",{attrs:{href:"https://www.nuget.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet"),a("OutboundLink")],1),t._v(" 就是为了解决这个问题而生的。NuGet 不仅仅包含 dll 文件，它提供了很多方便的功能，比如安装某个包后执行一个脚本，或者是复制一些文件等等，这里不再介绍，感兴趣的 Coder 可以自行查看官方文档"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/nuget/what-is-nuget",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("微软官方提供了的包管理平台"),a("a",{attrs:{href:"https://www.nuget.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet"),a("OutboundLink")],1),t._v("，它允许任何人发布任何包，但是这些包都是公开的，对于企业业务模块来说，应该是私有的，不允许对外开放的。所以为了更好的管理业务模块的包，企业需要搭建私有的 NuGet 服务器。")]),t._v(" "),a("h2",{attrs:{id:"baget-or-nuget-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baget-or-nuget-server"}},[t._v("#")]),t._v(" BaGet Or NuGet.Server")]),t._v(" "),a("p",[t._v("为什么用 "),a("a",{attrs:{href:"https://loic-sharma.github.io/BaGet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BaGet"),a("OutboundLink")],1),t._v(" 而不用 "),a("a",{attrs:{href:"https://github.com/NuGet/NuGet.Server",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet.Server"),a("OutboundLink")],1),t._v("？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/NuGet/NuGet.Server",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet.Server"),a("OutboundLink")],1),t._v("是微软推出的轻量级的 NuGet 服务器，它是开源的，但是它是基于.Net Framework 的，只能运行在 Windows 服务器上，而且它不支持 NuGet 的 v3 版本的 API，不包含管理页面。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://loic-sharma.github.io/BaGet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BaGet"),a("OutboundLink")],1),t._v("是国外大神开发的一款基于最新的.Net Core 的 NuGet 服务器，所以它是跨平台的，同时它也提供了一套友好的管理页面。")]),t._v(" "),a("h2",{attrs:{id:"获取源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取源码"}},[t._v("#")]),t._v(" 获取源码")]),t._v(" "),a("p",[t._v("从 GitHub 获取最新的代码"),a("a",{attrs:{href:"https://github.com/loic-sharma/BaGet",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/loic-sharma/BaGet"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("使用 VS 打开项目，编辑"),a("code",[t._v("appsettings.json")]),t._v("配置文件")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发布包时用到密钥")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ApiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15722E23-4D72-43D9-B8FA-264F7745778C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//包删除级别，默认Unlist，只允许卸载，不能硬删除，如果要硬删除修改为HardDelete")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PackageDeletionBehavior"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unlist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用包覆盖，启用后同一个包发布时相同的版本号会覆盖旧的文件，否则不允许发布")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AllowPackageOverwrites"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据库类型")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Database"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sqlite"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ConnectionString"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Data Source=baget.db"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存储方式，默认即可")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Storage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FileSystem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查询方式")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Search"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Database"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//镜像配置，如果为true，则会自动从指定的PackageSource下载第三方包")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Mirror"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PackageSource"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.nuget.org/v3/index.json"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Logging"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IncludeScopes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Debug"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LogLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Warning"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Console"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LogLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Warning"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br")])]),a("h2",{attrs:{id:"发布部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布部署"}},[t._v("#")]),t._v(" 发布部署")]),t._v(" "),a("p",[t._v("BaGet 本身就是一个 ASP.NET Core 项目，所以发布部署参考官方文档即可，传送门：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 IIS 在 Windows 上托管 ASP.NET Core"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Nginx 在 Linux 上托管 ASP.NET Core"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"创建包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建包"}},[t._v("#")]),t._v(" 创建包")]),t._v(" "),a("p",[t._v("创建 NuGet 包有好几种方式，这里不再一一介绍，需要了解的请移步"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/nuget/create-packages/overview-and-workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建包"),a("OutboundLink")],1),t._v("。\n这里只介绍一种，也是个人认为最方便的一种，那就是"),a("a",{attrs:{href:"../extend/MSBuild"}},[t._v("MSBuild")]),t._v("。")]),t._v(" "),a("p",[t._v("通过 MSBuild 可以在编译项目时同步生成对应的 NuGet 包，包的信息通过在项目文件(.csproj)中进行配置，以下时一些配置说明，更多内容请移步"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/nuget/create-packages/creating-a-package-msbuild",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 MSBuild 创建 NuGet 包"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PropertyGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--作者--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Authors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Oldli"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Authors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--包版本--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2.5"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--包描述--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("模块核心库"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--是否生成xml文档（该文档会包含在nuget包中）--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("GenerateDocumentationFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("GenerateDocumentationFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--编译项目时生成包--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("GeneratePackageOnBuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("GeneratePackageOnBuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--所属公司--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Company")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Company")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Copyright--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--项目地址--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PackageProjectUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://github.com/iamoldli/NetModular"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PackageProjectUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--仓储地址--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RepositoryUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://github.com/iamoldli/NetModular"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("RepositoryUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PropertyGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"发布包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布包"}},[t._v("#")]),t._v(" 发布包")]),t._v(" "),a("p",[t._v("发布包有两种方式：")]),t._v(" "),a("p",[t._v("1、通过"),a("a",{attrs:{href:"https://github.com/NuGetPackageExplorer/NuGetPackageExplorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGetPackageExplorer"),a("OutboundLink")],1),t._v("图形工具来发布，可在 windows10 应用商店里面直接搜索安装，该工具也可以创建编辑 NuGet 包")]),t._v(" "),a("p",[t._v("打开一个包")]),t._v(" "),a("nm-img",{attrs:{id:"20190821135546"}}),t._v(" "),a("p",[t._v("点击 File>Publish")]),t._v(" "),a("nm-img",{attrs:{id:"20190821140203"}}),t._v(" "),a("p",[t._v("最后发布即可~")]),t._v(" "),a("p",[t._v("2、通过 dotnet nuget CLI 发布")]),t._v(" "),a("p",[t._v("dotnet nuget push "),a("code",[t._v("包文件路径")]),t._v(" -k "),a("code",[t._v("密钥")]),t._v(" -s "),a("code",[t._v("包服务器地址")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dotnet nuget push Nm.Module.Admin.Domain.1.2.1.nupkg -k qz2jga8pl3dvn2akksyquwcs9ygggg4exypy3bhxy6w6x6 -s http://localhost:5000/v3/index.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果有很多包，一个个发布是很通过的，所以你可以写一个 ps 脚本来批量发布")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Get-ChildItem -Path ./NetModular/_packages | ForEach-Object -Process{\n    dotnet nuget push $_.fullname  -k qz2jga8pl3dvn2akksyquwcs9ygggg4exypy3bhxy6w6x6 -s http://localhost:5000/v3/index.json\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);