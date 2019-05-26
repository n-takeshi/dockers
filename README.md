# dockers

# 私が忘れちゃいけない、覚えておきたいコマンド(｡･ω･｡)

[🍀それ以外はここに書いてます](https://qiita.com/sachiko-kame/items/35e0cf07d117c3b92613)

### 最初の再スタート

- `docker-machine start default`
- `docker-machine env default`
- `eval "$(docker-machine env default)`
- `docker run hello-world`    ← sampleで試しているのみ

### 動かすフォルダ行って行うコマンド集

- `docker-machine stop default`
---------
- `docker build -t <お好きなビルド名> .`　今あるものをビルド
- `docker-machine ip default`  この場合defaultのマシーンのipアドレス確認
---------
- `docker-machine ls`
- `docker images`
---------
- `docker rmi -f <削除したいイメージid>`
- `docker stop <終わらせたいコンテナid>`
- `docker kill <終了したいコンテナid>`
- `docker rm <削除したいコンテナid>`
- `docker rmi $(docker images)`　イメージ全削除
- `docker rm $(docker ps -a -q)`　コンテナ全削除
---------
- `docker ps -a` 全てのコンテナ表示
- `docker ps`　実行中のもののみ表示
---------
- `docker-compose up`
- `docker-compose up --build`
---------
- `docker-compose up --build -d `
- `docker exec -i -t <コンテナid> bash`　コンテナの中に入る


### 基本コマンドメモ

- `mkdir` フォルダ作成
- `touch Dockerfile`　Dockerfileの作成
- `open -e Dockerfile` Dockerfile開く　最近は `atom Dockerfile` ってやってatomで開いてるかも…





