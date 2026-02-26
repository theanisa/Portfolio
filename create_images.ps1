# Create minimal valid 1x1 white PNG
$png_bytes = @(
  137, 80, 78, 71, 13, 10, 26, 10,  # PNG signature
  0, 0, 0, 13,  # IHDR chunk size
  73, 72, 68, 82,  # IHDR
  0, 0, 0, 1,  # width: 1
  0, 0, 0, 1,  # height: 1
  8, 2, 0, 0, 0,  # bit depth, color type, compression
  144, 119, 83, 222,  # CRC
  0, 0, 0, 12,  # IDAT chunk size
  73, 68, 65, 84,  # IDAT
  8, 153, 1, 1, 0, 0, 254, 255, 0, 0, 0, 2, 0, 1,  # image data
  229, 39, 222, 252,  # CRC
  0, 0, 0, 0,  # IEND chunk size
  73, 69, 78, 68,  # IEND
  174, 66, 96, 130  # CRC
)

[System.IO.File]::WriteAllBytes('public\images\avatar.png', $png_bytes)
[System.IO.File]::WriteAllBytes('public\images\project1.png', $png_bytes)
Write-Host "Created valid PNG images"
