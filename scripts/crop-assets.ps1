$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$sourceRoot = 'C:\Users\Dhinotea\Downloads\web-travel-template3 (1)'
$outputRoot = Join-Path $PSScriptRoot '..\assets\images'
New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null

function Export-Crop {
    param(
        [string]$Source,
        [int]$X,
        [int]$Y,
        [int]$Width,
        [int]$Height,
        [string]$Name
    )

    $sourceImage = [System.Drawing.Bitmap]::FromFile($Source)
    try {
        $rect = New-Object System.Drawing.Rectangle($X, $Y, $Width, $Height)
        $target = $sourceImage.Clone($rect, $sourceImage.PixelFormat)
        try {
            $target.Save((Join-Path $outputRoot $Name), [System.Drawing.Imaging.ImageFormat]::Jpeg)
        }
        finally {
            $target.Dispose()
        }
    }
    finally {
        $sourceImage.Dispose()
    }
}

function Export-PngCrop {
    param([string]$Source, [int]$X, [int]$Y, [int]$Width, [int]$Height, [string]$Name)
    $sourceImage = [System.Drawing.Bitmap]::FromFile($Source)
    try {
        $rect = New-Object System.Drawing.Rectangle($X, $Y, $Width, $Height)
        $target = $sourceImage.Clone($rect, $sourceImage.PixelFormat)
        try { $target.Save((Join-Path $outputRoot $Name), [System.Drawing.Imaging.ImageFormat]::Png) }
        finally { $target.Dispose() }
    }
    finally { $sourceImage.Dispose() }
}

$gallery = Join-Path $sourceRoot 'Galeri\Desktop.png'
$article = Join-Path $sourceRoot 'Artikel\Desktop.png'

# All crops are taken from the supplied visual references and deliberately avoid UI copy.
Export-Crop $gallery 80 590 410 395 'kaaba-courtyard.jpg'
Export-Crop $gallery 510 590 410 285 'madinah-sunrise.jpg'
Export-Crop $gallery 940 590 410 345 'mosque-arches.jpg'
Export-Crop $gallery 80 1080 410 325 'nabawi-courtyard.jpg'
Export-Crop $gallery 510 970 410 390 'hotel-room.jpg'
Export-Crop $gallery 940 1035 410 270 'travel-suitcase.jpg'
Export-Crop $gallery 80 1490 410 340 'quiet-arches.jpg'
Export-Crop $gallery 510 1470 410 325 'kaaba-panorama.jpg'
Export-Crop $gallery 940 1405 410 330 'consultation-room.jpg'
Export-Crop $article 80 480 650 460 'packing-feature.jpg'

# Larger, lossless crops from the supplied 2x home design and full-size page designs.
$home2x = Join-Path $sourceRoot 'Beranda\Desktop@2x.png'
$detail = Join-Path $sourceRoot 'Detail Paket\Desktop.png'
$about = Join-Path $sourceRoot 'Tentang Kami\Desktop.png'
Export-PngCrop $home2x 165 7630 1718 775 'kaaba-hero-hd.png'
Export-PngCrop $home2x 165 2488 810 390 'kaaba-card-hd.png'
Export-PngCrop $home2x 1035 2488 810 390 'madinah-card-hd.png'
Export-PngCrop $home2x 1905 2488 810 390 'arches-card-hd.png'
Export-PngCrop $home2x 1925 7630 790 335 'nabawi-hd.png'
Export-PngCrop $home2x 165 4026 990 970 'arches-portrait-hd.png'
Export-PngCrop $detail 80 1950 610 200 'hotel-hd.png'
Export-PngCrop $about 80 3658 625 300 'office-hd.png'
Export-PngCrop $about 733 3658 625 300 'suitcase-hd.png'
Export-PngCrop $article 80 480 650 440 'packing-hd.png'

Write-Output "Exported reference crops to $outputRoot"
