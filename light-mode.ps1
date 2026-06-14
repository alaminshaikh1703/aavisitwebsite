$files = Get-ChildItem -Path "src\components\software\*" -Include "*.tsx" -Recurse
$files += Get-ChildItem -Path "src\app\software\page.tsx"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Text colors
    $content = $content -replace 'text-white', 'text-slate-900'
    $content = $content -replace 'text-slate-400', 'text-slate-600'
    $content = $content -replace 'text-slate-300', 'text-slate-700'
    $content = $content -replace 'fill-white', 'fill-slate-900'
    
    # Backgrounds
    $content = $content -replace 'bg-\[\#0B0F19\]', 'bg-white'
    $content = $content -replace 'bg-slate-950', 'bg-slate-50'
    $content = $content -replace 'bg-slate-900/50', 'bg-slate-50'
    $content = $content -replace 'bg-slate-900/40', 'bg-slate-50/80'
    $content = $content -replace 'bg-slate-900/80', 'bg-slate-100'
    $content = $content -replace 'bg-white/5', 'bg-slate-100'
    $content = $content -replace 'bg-white/10', 'bg-slate-200'
    $content = $content -replace 'bg-\[\#0F1523\]', 'bg-white'
    
    # Borders
    $content = $content -replace 'border-white/10', 'border-slate-200'
    $content = $content -replace 'border-white/5', 'border-slate-100'
    $content = $content -replace 'border-white/20', 'border-slate-300'
    
    # Specifics for buttons / inverted colors
    $content = $content -replace 'bg-white text-slate-950', 'bg-slate-900 text-white'
    $content = $content -replace 'hover:bg-slate-200', 'hover:bg-slate-800'
    $content = $content -replace 'text-white/50', 'text-slate-400'

    Set-Content -Path $file.FullName -Value $content
}
