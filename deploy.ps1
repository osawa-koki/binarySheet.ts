
Clear-Host

Write-Host ""
Write-Host " ***** start deploying... *****" -ForegroundColor Green
Write-Host ""

# 出力先のフォルダの中身を削除
Remove-Item -Path ".\dist\*.*" -Recurse -Force

# 公開ディレクトリの中身をコピー
Copy-Item -Path ".\public\*" -Destination ".\dist\" -Recurse -Force

# ビルド
yarn build

Clear-Host

Write-Host ""
Write-Host " ***** deploying finished... *****" -ForegroundColor Blue
Write-Host ""
