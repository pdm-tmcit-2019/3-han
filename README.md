# 環境構築
パッケージ名 | バージョン
:-- | :--
Python | 3.7.x
pip | pip3

## mac
### pythonをインストール
[https://www.python.org/downloads/](https://www.python.org/downloads/)

上記のurlからPython 3.7.3を選択してダウンロードする。

もしくは以下のコマンドを実行してpythonとpipをダウンロードする。

```
brew install python3
```

***この方法だと3.7以外のバージョンがインストールされてしまう可能性がある***

### 開発環境の確認
以下のコマンドを実行して以下の結果が返ってきていれば良い

```
$ python3 --version
Python 3.7.x
```
```
$ pip3

Usage:   
  pip3 <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  help                        Show help for commands.

General Options:
  -h, --help                  Show help.
  --isolated                  Run pip in an isolated mode, ignoring
                              environment variables and user configuration.
  -v, --verbose               Give more output. Option is additive, and can be
                              used up to 3 times.
  -V, --version               Show version and exit.
  -q, --quiet                 Give less output. Option is additive, and can be
                              used up to 3 times (corresponding to WARNING,
                              ERROR, and CRITICAL logging levels).
  --log <path>                Path to a verbose appending log.
  --proxy <proxy>             Specify a proxy in the form
                              [user:passwd@]proxy.server:port.
  --retries <retries>         Maximum number of retries each connection should
                              attempt (default 5 times).
  --timeout <sec>             Set the socket timeout (default 15 seconds).
  --exists-action <action>    Default action when a path already exists:
                              (s)witch, (i)gnore, (w)ipe, (b)ackup, (a)bort).
  --trusted-host <hostname>   Mark this host as trusted, even though it does
                              not have valid or any HTTPS.
  --cert <path>               Path to alternate CA bundle.
  --client-cert <path>        Path to SSL client certificate, a single file
                              containing the private key and the certificate
                              in PEM format.
  --cache-dir <dir>           Store the cache data in <dir>.
  --no-cache-dir              Disable the cache.
  --disable-pip-version-check
                              Don't periodically check PyPI to determine
                              whether a new version of pip is available for
                              download. Implied with --no-index.
  --no-color                  Suppress colored output
```

### エディタの導入
Visual Studio Codeを元にPythonのコーディング環境を構築していく。
#### VS Codeの導入
[Visual Studio Codeの公式ダウンロードサイト](https://code.visualstudio.com/)

#### プラグインのインストール
[https://code.visualstudio.com/docs/languages/python](https://code.visualstudio.com/docs/languages/python)

基本的には上記のサイトを元にプラグインを導入していく。また、下記のサイトも参考になる。

[Visual Studio CodeでPythonの開発環境構築を構築してみた。](https://dev.classmethod.jp/tool/python-pyenv-vscode/)

以下のプラグインがVS Codeでインストールされていれば良い

- Python
- Python For VSCode
- Python Extension Pack