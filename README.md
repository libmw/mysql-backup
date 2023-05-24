# mysql定时备份

定时备份mysql数据到指定的文件夹中。可以配置备份时间等。

## 前置条件

在该项目的根目录建立.env文件，并写入以下配置：

```
DATABASE_HOST=127.0.0.1
DATABASE_USERNAME=test
DATABASE_PASSWORD=test123
DATABASE_NAME=user
#备份路径，默认当前目录
BACKUP_PATH="./"
#备份脚本运行时间，默认为每日凌晨12点，格式为cron表达式
RUN_TIME="0 0 0 * * *"
```

## 安装
```bash
pnpm install
```

## 运行

建议使用pm2来运行该脚本，因为该脚本需要在后台常驻运行。

如果还没有pm2，请先全局安装：

```javascript
npm install pm2 -g
```

安装后执行：

```javascript
pm2 start index.js --name mysql_backup
```

检测是否执行成功：
```javascript
pm2 list
```
如果status为online则执行成功


## cron表达式文档

参考<http://crontab.org/>