# Gera assets do hero (0:00–0:06) a partir do vídeo do pedido de namoro.
# Requer ffmpeg no PATH.

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$media = Join-Path $root "public\media"
$src = Join-Path $media "video-pedido-namoro.mp4"

if (-not (Test-Path $src)) {
    Write-Error "Fonte não encontrada: $src"
}

Write-Host "Gerando hero-pedido-loop.mp4 (loop-friendly GOP)..."
ffmpeg -y -ss 0 -t 6 -i $src -vf "scale=1280:-2" -an -c:v libx264 -crf 28 -pix_fmt yuv420p -r 24 -g 48 -keyint_min 48 -movflags +faststart (Join-Path $media "hero-pedido-loop.mp4")

Write-Host "Gerando hero-pedido-loop.webm..."
ffmpeg -y -ss 0 -t 6 -i $src -vf "scale=1280:-2" -an -c:v libvpx-vp9 -crf 35 (Join-Path $media "hero-pedido-loop.webm")

Write-Host "Gerando hero-pedido-poster.jpg..."
ffmpeg -y -ss 0 -i $src -frames:v 1 -update 1 (Join-Path $media "hero-pedido-poster.jpg")

Write-Host "Gerando hero-pedido-loop.gif..."
ffmpeg -y -ss 0 -t 6 -i $src -an -filter_complex "fps=12,scale=960:-1:flags=lanczos,split[a][b];[a]palettegen=128[p];[b][p]paletteuse=dither=bayer" -loop 0 (Join-Path $media "hero-pedido-loop.gif")

Write-Host "Concluído:"
Get-ChildItem $media -Filter "hero-pedido*" | Format-Table Name, Length -AutoSize
