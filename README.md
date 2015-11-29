# React Native Sample

## 注意事項

Node.jsバージョン4以降が必要

```bash
node -v
```

でバージョン確認。  
バージョンアップは [サイト](https://nodejs.org/) からDL。  

# Androidで動作させる場合

## Android SDKのパスを設定

```
//~/.bash_profile
export ANDROID_HOME=~/Library/Android/sdk
```

※API Level 23.0.1 のSDKをインストールしておく必要がある

## 参考

[React Native for Androidでアプリを作る](http://qiita.com/petitviolet/items/a455fe11b48237f7563b)

## Terminalで必要なソフトをインストール

```bash
npm install -g react-native-cli
brew install watchman
brew install flow
```

# 新しいプロジェクトを作成

```bash
react-native init ProjectName
```

# プロジェクトの実行

## iOS

```bash
open ./ProjectName/ios/ProjectName.xcodeproj
```

で実行

## Android

### Android エミュレーター

※事前にGenymotionをインストールしておく  

API 23のデバイスをインストールし起動しておく

```bash
cd ./ProjectName/
react-native run-android
```

で起動

