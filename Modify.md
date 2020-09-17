# 二次定制 ant-design 步骤

> 按照 package.json 中的 scripts 命令为顺序检查定制点

### name

```
  "name": "antd",
```

=====>

```
  "name": "@whale-labs/want",
```

### authors

```
"authors": "git log --format='%aN <%aE>' | sort -u | grep -v 'users.noreply.github.com' | grep -v 'gitter.im' | grep -v '.local>' | grep -v 'alibaba-inc.com' | grep -v 'alipay.com' | grep -v 'taobao.com' > AUTHORS.txt",

```

=====>

```
"authors": "git log --format='%aN <%aE>' | sort -u | grep -v '.local>'  > AUTHORS.txt",

```

### check-commit

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

### predeploy

文件`CNAME`: `ant.design` ====> `want.meetwhale.com`

文件`.circleci/config.yml`:

删除 `&& npm run site:test`

```

```

=====>

```

```

### deploy

```

```

=====>

```

```

### 删除 deploy:china-mirror

### 删除 deploy:china-mirror

```

```

=====>

```

```

### deploy

```

```

=====>

```

```

### deploy

```

```

=====>

```

```

### deploy

```

```

=====>

```

```
