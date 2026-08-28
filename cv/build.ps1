# Rebuild PETIT_CV.pdf (repo root) from the LaTeX sources in this folder.
#
#   powershell -File cv\build.ps1           rebuild
#   powershell -File cv\build.ps1 -Clean    wipe the aux directory first
#
# Requires MiKTeX (latexmk + xelatex) on PATH.

param([switch]$Clean)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

# '-outdir=.build' must be quoted: PowerShell 5.1 otherwise splits it into
# '-outdir=' and '.build', and latexmk then sees two filenames.
if ($Clean) { latexmk -C '-outdir=.build' '-jobname=PETIT_CV' cv.tex }

latexmk -xelatex -interaction=nonstopmode -halt-on-error '-jobname=PETIT_CV' '-outdir=.build' cv.tex
if ($LASTEXITCODE -ne 0) { throw 'latexmk failed - see cv/.build/PETIT_CV.log' }

Copy-Item .build/PETIT_CV.pdf ../PETIT_CV.pdf -Force
Write-Host 'Wrote PETIT_CV.pdf'
