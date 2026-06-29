# Yusa Güneş — Kişisel Site

Modern, minimal ve hızlı kişisel site. Static HTML/CSS/JavaScript ile GitHub Pages'e deploy için hazır.

## ✨ Özellikler

- 🎨 **Modern tasarım** — Apple / Vercel / Stripe / Linear esinli
- 🌓 **Dark mode** — Sistem tercihi + manuel toggle (localStorage)
- 📱 **Tam responsive** — Mobil-first, 768px breakpoint
- ♿ **WCAG accessible** — Skip-link, ARIA labels, focus states, reduced-motion
- ⚡ **Sıfır bağımlılık** — Saf HTML/CSS/JS, build step yok
- 🔍 **Blog search** — Client-side filtreleme + tag filter
- 🌐 **SEO ready** — Open Graph, JSON-LD, semantic HTML
- 🎭 **Smooth animations** — IntersectionObserver fade-in

## 📁 Dosya yapısı

```
site/
├── index.html              # Ana sayfa (hero, featured projeler, son yazılar)
├── about.html              # Hakkımda
├── resume.html             # Özgeçmiş (PDF indirme dahil)
├── projects.html           # Proje showcase
├── blog.html               # Blog index (arama + tag filter)
├── contact.html            # İletişim formu
├── blog/
│   ├── pyspark-optimizasyonu.html
│   ├── airflow-patterns.html
│   ├── dbt-incremental.html
│   └── merhaba-dunya.html
└── assets/
    ├── css/
    │   ├── main.css        # Design system (tokens, layout, nav, footer)
    │   └── components.css  # Componentler (cards, buttons, forms)
    ├── js/
    │   ├── main.js         # Theme toggle, mobile nav
    │   ├── search.js       # Blog search & filter
    │   └── animations.js   # Scroll fade-in
    ├── images/             # Görseller (eklenecek)
    └── files/              # PDF CV (eklenecek)
```

## 🚀 GitHub Pages'e deploy

### Yöntem 1: Repo kökü (önerilen)

1. Bu `site/` klasörünün içeriğini GitHub Pages reponun **köküne** push'la
2. Repo `Settings → Pages → Source → Deploy from a branch → main`
3. Site `https://kullanici.github.io/` adresinde yayında

### Yöntem 2: /docs klasörü

1. `site/` içeriğini `docs/` altına taşı
2. Repo `Settings → Pages → Source → /docs`

### Yöntem 3: Ayrı branch

1. `site/` içeriğini `gh-pages` branch'ine push'la
2. Source olarak `gh-pages` branch'ini seç

## ✏️ İçerik özelleştirme

### Profil bilgileri

Tüm HTML dosyalarında şunları değiştir:

- `Yusa Güneş` → Senin adın
- `yusagunes36@gmail.com` → Senin mailin
- `github.com/yusagunes` → Senin GitHub
- `linkedin.com/in/yusagunes` → Senin LinkedIn
- `Ankara'dan` → Senin şehrin

Kısayol: `grep -r "yusagunes\|Yusa Güneş\|yusagunes36" *.html` ile bul.

### Tema renkleri

`assets/css/main.css` içinde `:root` altındaki CSS değişkenlerini değiştir:

```css
:root {
  --accent: #6366f1;    /* Ana vurgu rengi */
  --accent-2: #8b5cf6;  /* Gradient için ikinci renk */
  --bg: #ffffff;        /* Arka plan */
  --text: #0a0a0a;      /* Ana metin */
  /* ... */
}
```

### Profil fotoğrafı

`index.html`'deki `<div class="hero-photo">Y</div>` satırını bul ve:

1. `assets/images/profile.jpg` adında bir fotoğraf ekle
2. Şu şekilde değiştir:
```html
<div class="hero-photo">
  <img src="assets/images/profile.jpg" alt="Yusa Güneş">
</div>
```

### Yeni blog yazısı ekle

1. `blog/yeni-yazi.html` adında bir dosya oluştur (mevcut bir yazıyı template olarak kullan)
2. Sayfanın meta bilgilerini, başlığını ve içeriğini güncelle
3. `blog.html`'de uygun yere bir `<a class="post-card">` ekle:

```html
<a href="blog/yeni-yazi.html" class="post-card fade-in"
   data-tags="python,best-practices"
   data-title="Yeni yazı başlığı"
   data-excerpt="Kısa açıklama">
  ...
</a>
```

### CV PDF'i

`resume.html`'de indirme linki:
```html
<a href="assets/files/yusa-gunes-cv.pdf" download>
```

PDF'i `assets/files/yusa-gunes-cv.pdf` olarak ekle.

### İletişim formu

`contact.html`'deki form `Formspree.io` kullanıyor. Ücretsiz hesap aç, form ID'ni değiştir:

```html
<form action="https://formspree.io/f/SENIN-FORM-ID" method="POST">
```

Alternatifler: [Web3Forms](https://web3forms.com), [Getform](https://getform.io), [Basin](https://usebasin.com).

## 🎨 Design tokens

CSS değişkenleri (`assets/css/main.css`):

| Token | Açıklama |
|-------|----------|
| `--bg`, `--text`, `--border` | Ana renkler |
| `--accent`, `--accent-2` | Vurgu renkleri |
| `--shadow-sm`, `--shadow-md`, `--shadow-lg` | Gölgeler |
| `--radius`, `--radius-lg` | Köşe yuvarlaklığı |
| `--font-sans`, `--font-mono` | Font ailesi |
| `--container` | Maksimum genişlik |
| `--t-fast`, `--t-med`, `--t-slow` | Geçiş süreleri |

## 🌐 Tarayıcı desteği

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+

Modern CSS features kullanılıyor (`backdrop-filter`, `color-mix()`, custom properties). Eski tarayıcılarda graceful fallback var.

## 📝 Lisans

Kişisel kullanım için. Dilediğin gibi düzenleyebilirsin.# yusagunes.github.io
