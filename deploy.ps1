
Clear-Host

Write-Host ""
Write-Host " ***** start deploying... *****" -ForegroundColor Green
Write-Host ""

# 出力先ディレクトリを作成(なければ)
if (!(Test-Path -Path ".\docs")) {
    New-Item -ItemType Directory -Path ".\docs"
}

# 出力先のフォルダの中身を削除
Remove-Item -Path ".\docs\*.*" -Recurse -Force

# 公開ディレクトリの中身をコピー
Copy-Item -Path ".\public\*" -Destination ".\docs\" -Recurse -Force

# ビルド(SCSS)
yarn compile:sass

# ビルド(TS)
yarn build

Clear-Host

Write-Host ""
Write-Host " ***** deploying finished... *****" -ForegroundColor Blue
Write-Host ""
