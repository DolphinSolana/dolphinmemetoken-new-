# Dolphin Meme Token Website

موقع ويب مشابه لموقع Dolphin Meme Token مبني باستخدام React و Tailwind CSS.

## المميزات

- 🎨 تصميم حديث ومتجاوب
- 🚀 مبني باستخدام React و Vite
- 💎 استخدام Tailwind CSS للتصميم
- 📊 رسوم بيانية تفاعلية باستخدام Recharts
- 🎭 أنيميشن وتأثيرات بصرية
- 📱 متوافق مع الهواتف المحمولة

## الأقسام المتضمنة

1. **Hero Section** - القسم الرئيسي مع العنوان وصورة الدولفين
2. **Web3 Section** - شرح الفرق بين Web2 و Web3
3. **NFT Section** - توضيح فوائد NFTs
4. **DAO Section** - شرح مفهوم DAO
5. **Benefits Section** - جدول فوائد حاملي التوكن
6. **About Section** - معلومات عن المشروع
7. **Team Section** - أعضاء الفريق
8. **How To Buy Section** - كيفية الشراء
9. **Tokenomics Section** - توزيع التوكن مع رسم بياني
10. **Roadmap Section** - خارطة الطريق
11. **Footer** - تذييل الموقع

## التقنيات المستخدمة

- **React 19** - مكتبة JavaScript للواجهات
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **Shadcn/UI** - مكونات UI جاهزة
- **Recharts** - مكتبة الرسوم البيانية
- **Lucide React** - أيقونات
- **Framer Motion** - أنيميشن (مثبت ومتاح للاستخدام)

## التشغيل المحلي

1. فك ضغط الملف
2. انتقل إلى مجلد المشروع:
   ```bash
   cd dolphin-token-website
   ```

3. تثبيت التبعيات:
   ```bash
   npm install
   # أو
   pnpm install
   ```

4. تشغيل خادم التطوير:
   ```bash
   npm run dev
   # أو
   pnpm run dev
   ```

5. افتح المتصفح على: `http://localhost:5173`

## البناء للإنتاج

```bash
npm run build
# أو
pnpm run build
```

## النشر على GitHub Pages

1. ارفع المشروع على GitHub
2. اذهب إلى Settings > Pages
3. اختر source: GitHub Actions
4. أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## هيكل المشروع

```
dolphin-token-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # الصور والأصول
│   ├── components/      # مكونات React
│   │   ├── ui/         # مكونات UI الأساسية
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Web3Section.jsx
│   │   ├── NFTSection.jsx
│   │   ├── DAOSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── HowToBuySection.jsx
│   │   ├── TokenomicsSection.jsx
│   │   ├── RoadmapSection.jsx
│   │   └── Footer.jsx
│   ├── hooks/          # React hooks مخصصة
│   ├── lib/            # مكتبات مساعدة
│   ├── App.jsx         # المكون الرئيسي
│   ├── App.css         # أنماط CSS مخصصة
│   ├── index.css       # أنماط عامة
│   └── main.jsx        # نقطة الدخول
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## التخصيص

يمكنك تخصيص الموقع عبر:

1. **الألوان**: تعديل ألوان Tailwind في `App.css`
2. **المحتوى**: تعديل النصوص في ملفات المكونات
3. **الصور**: استبدال الصور في مجلد `src/assets/`
4. **الأنيميشن**: إضافة المزيد من التأثيرات باستخدام Framer Motion

## الدعم

إذا واجهت أي مشاكل، تأكد من:
- تثبيت Node.js الإصدار 16 أو أحدث
- استخدام npm أو pnpm لإدارة التبعيات
- التأكد من وجود جميع الملفات المطلوبة

---

تم إنشاء هذا المشروع باستخدام Manus AI ❤️

