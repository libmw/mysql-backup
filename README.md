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
#备份脚本运行时间，默认为每日12点，格式为cron表达式
RUN_TIME="0 0 0 * * *"
```

## 安装

pnpm install
pnpm index.js

## cron表达式文档

参考<http://crontab.org/>