# node-server

werewolfworldの[server2clientのjsonld](https://github.com/ktr-skmt/werewolfworld/tree/gh-pages/village/example/0.3/server2client)を一定の時間間隔で送信するサーバ

## 環境
|ツール|バージョン|
|-|-|
|node.js|v12.11.1|

## 使い方
`node-server`ディレクトリ下で`npm run start`コマンドを入力すると次の結果を得られる。
```
C:\…\3-han\node-server>npm run start

> node-server@1.0.0 start C:\…\3-han\node-server
> npx tsc && node .

server started. PORT:8000
http://localhost:8000
```
表示されているように、`localhost`の`8000`番ポートでサーバが起動する。
