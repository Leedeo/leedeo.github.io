source "https://rubygems.org"

# github-pages gestiona internamente la versión de Jekyll compatible.
# Declarar jekyll por separado puede causar conflictos de versión en Bundler.
# gem "jekyll"
# github-pages >= 233 es imprescindible para poder parchear rubyzip:
# las versiones 228-232 fijan jekyll-remote-theme 0.4.3, que limita rubyzip
# a < 3.0 y bloquea CVE-2026-85396 (corregido en rubyzip 3.4.0).
# Trae jekyll 3.10.0 (antes 3.9.3) y jekyll-remote-theme 0.6.2.
gem "github-pages", ">= 233"

# Imprescindibles para entorno Windows (Ruby 3+)
gem "tzinfo-data", platforms: [:windows, :jruby]
gem "webrick", "~> 1.8"

# csv ya no será una gema por defecto en Ruby 3.4; declararlo evita la advertencia
gem "csv"

# --- Versiones mínimas por avisos de seguridad (Dependabot) ---
# Faraday NestedParamsEncoder: recursión sin límite / CVE-2026-54297 (corregido en 2.14.3)
gem "faraday", ">= 2.14.3"
# Concurrent::AtomicReference#update con Float::NAN / CVE-2026-54904 (corregido en 1.3.7)
gem "concurrent-ruby", ">= 1.3.7"
# rubyzip Zip::Entry#extract path traversal / CVE-2026-85396 (corregido en 3.4.0)
gem "rubyzip", ">= 3.4.0", "< 4.0"
# nokogiri: múltiples avisos (libxml2/libxslt y OOB read), corregidos en 1.19.4+
gem "nokogiri", ">= 1.19.7"
