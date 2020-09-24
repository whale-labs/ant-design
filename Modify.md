# 二次定制 ant-design 步骤

### package.json 文件

` "name": "antd",` =======> `"name": "@whale-labs/want",`

`"version": "4.4.3",` ======> ` "version": "0.0.1",`

`"homepage": "https://ant.design/", ` ======> ` "homepage": "https://want.meetwhale.com/",`

` "url": "https://github.com/ant-design/ant-design"`======> `"url": "https://github.com/whale-labs/ant-design"`

predeploy 删除 `&& npm run site:test`

删除` "deploy:china-mirror"` 命令

删除 ` "prepublishOnly": "antd-tools run guard",`命令

修改 `"pub": "npm run version && antd-tools run pub",`=======> `"pub": "npm run version && npm publish --access public",`

---

> 按照 package.json 中的 scripts 命令为顺序检查定制点

#### authors

> 删除了获取 antd 官网的作者

```
"authors": "git log --format='%aN <%aE>' | sort -u | grep -v 'users.noreply.github.com' | grep -v 'gitter.im' | grep -v '.local>' | grep -v 'alibaba-inc.com' | grep -v 'alipay.com' | grep -v 'taobao.com' > AUTHORS.txt",

```

=====>

```
"authors": "git log --format='%aN <%aE>' | sort -u | grep -v '.local>'  > AUTHORS.txt",

```

#### check-commit

> 更换了从远程 npm 的 package 中获取 version 的地址

文件：`./scripts/check-commit`

```
fetch('http://registry.npmjs.org/antd')

async function checkRemote() {
  const { remote } = await git.fetch('origin', 'master');
  if (remote.indexOf('ant-design/ant-design') === -1) {
    console.log(
      chalk.yellow('😓 Your remote origin is not ant-design/ant-design, did you fork it?'),
    );
    exitProcess();
  }
}

```

=====>

```
fetch('http://registry.npmjs.org/@whale-labs/want')

async function checkRemote() {
  const { remote } = await git.fetch('origin', 'master');
  if (remote.indexOf('whale-labs/ant-design') === -1) {
    console.log(
      chalk.yellow('😓 Your remote origin is not whale-labs/ant-design, did you fork it?'),
    );
    exitProcess();
  }
}
```

#### predeploy

> 删除 npm run site:test

文件`CNAME`: `ant.design` ====> `want.meetwhale.com`

---

#### webpack.config.js

> 将 antd 换成了@whale-labs/want,否则打包不过去

如`let packageName = 'want-with-locales';` ====> `let packageName = 'want-with-locales'`

如`if (webpackConfig.entry['antd.min'])';` ====> `if (webpackConfig.entry['@whale-labs/want.min'])`

#### .antd-tools.config.js

> 将 antd 换成了 want,否则打包出来的 less 文件有问题

```
  path.join(process.cwd(), 'dist', `antd.${theme}.less`),
  =====>
  path.join(process.cwd(), 'dist', `want.${theme}.less`),

  path.join(process.cwd(), 'dist', 'antd.less'),
  =====>
  path.join(process.cwd(), 'dist', 'want.less'),

```

---

### 增加 customized 定制文件夹，存放覆盖原代码结构的代码

> 在需要覆盖的地方，引入定制文件。如在 componets/style/themes/index.less 中引入`@import '../../../customized/style/themes/index.less';`
