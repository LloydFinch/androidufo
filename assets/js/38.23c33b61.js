(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{601:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"升级androidstudio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级androidstudio"}},[s._v("#")]),s._v(" 升级AndroidStudio")]),s._v(" "),a("p",[s._v("你可以升级AndroidStudio为最新版，直接去"),a("a",{attrs:{href:"https://developer.android.google.cn/studio",target:"_blank",rel:"noopener noreferrer"}},[s._v("AndroidStudio官网"),a("OutboundLink")],1),s._v("更新AndroidStudio即可。")]),s._v(" "),a("h2",{attrs:{id:"升级gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级gradle"}},[s._v("#")]),s._v(" 升级gradle")]),s._v(" "),a("p",[s._v("你需要升级你的gradle为"),a("strong",[s._v("7.0及以上")]),s._v("，如下:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("buildscript "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"com.android.tools.build:gradle:7.0.0"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这一步可能遇到很多问题，请移步到后面的"),a("strong",[s._v("问题以及解决")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"升级kotlin版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级kotlin版本"}},[s._v("#")]),s._v(" 升级kotlin版本")]),s._v(" "),a("p",[s._v("接着，你需要升级你的kotlin版本为"),a("strong",[s._v("1.5.21及以上")]),s._v("，如下:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.jetbrains.kotlin:android'")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.5.21'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"开启compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启compose"}},[s._v("#")]),s._v(" 开启Compose")]),s._v(" "),a("p",[s._v("接着，你需要将应用的最低API版本设置为21及以上，并在build.gradle中启用Compose，还需要指定kotlin编译器插件版本，如下:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n        minSdkVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最低版本为21")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    buildFeatures "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为当前module启用 compose")]),s._v("\n        compose "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// java和kotlin编译版本都指定为1.8")]),s._v("\n    compileOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sourceCompatibility JavaVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VERSION_1_8\n        targetCompatibility JavaVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VERSION_1_8\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    kotlinOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        jvmTarget "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"1.8"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定编译版本")]),s._v("\n    composeOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        kotlinCompilerExtensionVersion "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.0.1'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("并且，你需要指定项目的JDK版本为"),a("strong",[s._v("JDK11及以上")]),s._v("。\n"),a("strong",[s._v("AndroidStudio -> 设置 -> Gradle -> Gradle JDK -> 选择JDK11及以上")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[s._v("#")]),s._v(" 添加依赖")]),s._v(" "),a("p",[s._v("接着，你需要在开启compose的module中的build.gradle中添加compose使用的依赖，比如我自己的项目中添加有如下依赖:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("compose_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.0.1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基础UI框架")]),s._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.ui:ui:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Material风格布局")]),s._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.material:material:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Compose扩展Activity")]),s._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'androidx.activity:activity-compose:1.3.0-alpha06'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// UI测试")]),s._v("\nandroidTestImplementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.ui:ui-test-junit4:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// UI工具包")]),s._v("\ndebugImplementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.ui:ui-tooling:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Material风格图标")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("implementation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.material:material-icons-core:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("implementation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"androidx.compose.material:material-icons-extended:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("compose_version")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 图片加载框架")]),s._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.coil-kt:coil-compose:1.3.0'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("这些依赖不唯一，可以根据项目的需要添加。")]),s._v(" "),a("h2",{attrs:{id:"compose和原生view的互调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compose和原生view的互调"}},[s._v("#")]),s._v(" Compose和原生View的互调")]),s._v(" "),a("h3",{attrs:{id:"android原生view使用composeview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android原生view使用composeview"}},[s._v("#")]),s._v(" Android原生View使用ComposeView")]),s._v(" "),a("p",[s._v("比如我用Compose写了个界面，要在原来的xml布局中使用它，可以这样:")]),s._v(" "),a("ol",[a("li",[s._v("在xml布局中添加androidx.compose.ui.ComposeView，然后findViewById(id)出来，然后使用composeView.setContent(@Composable)即可。")]),s._v(" "),a("li",[s._v("直接在代码中创建出ComposeView，然后使用composeView.setContent(@Composable)")])]),s._v(" "),a("p",[s._v("比如第一种方式:")]),s._v(" "),a("p",[s._v("我们先在xml文件中添加androidx.compose.ui.ComposeView")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("androidx.compose.ui.platform.ComposeView")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("@+id/compose_view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("layout_width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("match_parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("layout_height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("wrap_content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后在代码中使用:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 定义一个Compose风格的View\n@Composable\nfun TextView() {\n    Text(text = "this is a compose TextView")\n}\n\n\n// 使用\nval composeView: ComposeView = findViewById(R.id.compose_view)\ncomposeView.setContent { TextView() }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"composeview使用android原生view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composeview使用android原生view"}},[s._v("#")]),s._v(" ComposeView使用Android原生View")]),s._v(" "),a("p",[s._v("在@Composable内使用: androidx.compose.ui.viewinterop.AndroidView，然后在factory里面返回原生View即可。如下:")]),s._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[s._v("@Composable")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fun")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TextView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is a compose TextView"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用androidx.compose.ui.viewinterop.AndroidView")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AndroidView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要提供一个factory来返回我们要使用的Android原生View，这里我们返回一个原生的ImageView")]),s._v("\n        factory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ImageView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// modifier，可以不提供")]),s._v("\n        modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// update，每次compose重组会调用到这里，可以不提供")]),s._v("\n        update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" imageView "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("\n            Log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Compsose"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("imageView")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(' has update"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("AndroidView的函数原型如下:")]),s._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[s._v("@Composable")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fun")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("T "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" View"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AndroidView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    factory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回原生View")]),s._v("\n    modifier"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修饰符")]),s._v("\n    update"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" Unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NoOpUpdate "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次界面重组(更新)调用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"问题以及解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题以及解决"}},[s._v("#")]),s._v(" 问题以及解决")]),s._v(" "),a("p",[s._v("我们遇到的大部分问题都是兼容性问题，而且集中在升级gradle到7.0这一步，再次吐槽下gradle！")]),s._v(" "),a("ul",[a("li",[s._v("1 所有使用compile 'xxxx'需要替换为api/implementation 'xxxx'。")]),s._v(" "),a("li",[s._v("2 gradle7.0不再支持非http的依赖，所以原有的http仓库的依赖，需要替换为https依赖，比如:")])]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://dl.bintray.com/umsdk/release'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http仓库不安全")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("就要替换为")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://dl.bintray.com/umsdk/release'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换为https类型的仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("3 一些插件会失效，所以要 去这些插件的官网 或者 gradle官网 查看更新日志 来找到对应的替换方案，比如: 比如 apply plugin 'maven',需要替换为 apply plugin 'maven-publish'")]),s._v(" "),a("li",[s._v("4 gradle的一些语法有更新，需要查看更新日志来进行更新，比如: 使用maven进行仓库发布的api更新了，就需要查看官网进行修改。")]),s._v(" "),a("li",[s._v("5 如果你的项目是混合开发，比如rn或者flutter，就需要检测这些项目并且做相应更新(很蛋疼!)。")])]),s._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("迁移Compose到现有项目，需要耐住脾气和性子，一点一点来，不然很容易火大，而且要自底向上迁移，尽量缩小影响范围。")]),s._v(" "),a("p",[s._v("最后想吐槽一下，Google更新的真频繁！！！")])])}),[],!1,null,null,null);t.default=e.exports}}]);