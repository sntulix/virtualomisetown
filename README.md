# Virtual Omise Town

## セットアップ / setup
```
python3 -m venv ~/venv
source ~/venv/bin/activate
pip install -r requirements.txt
```

## 使い方 / usage
```
flask run -h localhost -p 5001 \
--reload --extra-files templates/index.html \
--debugger
```

## デモ / demo
~~http://shoutengai.futuregadget.com~~ 停止中 / closed
- アセットにはOpenStreetMapとBlosmを使っています。
- Assets using OpenStreetMap and Blosm.

## 備考 / note
モデルファイルはリポジトリには入っていませんので、[Blosm](https://github.com/vvoovv/blosm)などを使って作成してください。  
Assets are excluded on this repository. Create by [Blosm](https://github.com/vvoovv/blosm) etc, please.

## using Library
- A-Frame
- Flask
- Flask Socket.IO
- OpenStreetMap
