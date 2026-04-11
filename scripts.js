/* ========================================
   MVS Perf - 交互脚本 + 国际化 (i18n)
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== 国际化 (i18n) ==========

  const translations = {
    en: {
      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.video': 'Video',
      'nav.report': 'Report',
      'nav.privacy': 'Privacy',
      'nav.download': 'Download',
      'hero.subtitle': 'macOS Video Stream Performance Testing & Analysis',
      'hero.desc': 'Monitor frame rate, latency, jitter, and key metrics in real time.<br>Evaluate video stream quality and generate professional test reports with one click.',
      'hero.appstore': 'Download on the App Store',
      'features.title': 'Key Features',
      'features.desc': 'A powerful video stream performance analyzer built for macOS',
      'features.monitor.title': 'Real-time Monitoring',
      'features.monitor.desc': 'Track FPS, latency, jitter, dropped frames and other key performance metrics in real time.',
      'features.smooth.title': 'Smooth Score',
      'features.smooth.desc': 'An original comprehensive scoring system that intuitively quantifies video stream smoothness.',
      'features.charts.title': 'Detailed Charts',
      'features.charts.desc': 'Multi-dimensional trend graphs and distribution histograms for Smooth Score, FPS, and frame intervals.',
      'features.report.title': 'PDF Report Export',
      'features.report.desc': 'Generate professional PDF reports with complete test data and charts in one click.',
      'screenshots.title': 'Screenshots',
      'screenshots.desc': 'Clean and intuitive interface, efficient and professional testing experience',
      'screenshots.label1': 'Test Scenario Management',
      'screenshots.label2': 'Real-time Performance Overview',
      'screenshots.label3': 'Smooth Score Trend',
      'screenshots.label4': 'FPS Detailed Analysis',
      'screenshots.label5': 'Frame Interval Distribution',
      'video.title': 'Video Demo',
      'video.desc': 'Watch MVS Perf in action',
      'report.title': 'Sample Report',
      'report.desc': 'Professional PDF test reports with complete data and analysis results',
      'report.download': 'Download Sample Report',
      'download.title': 'Get Started with MVS Perf',
      'download.desc': 'Download for free on the Mac App Store and start testing video stream performance today.',
      'download.appstore': 'Download on the App Store',
    },
    zh: {
      'nav.features': '功能',
      'nav.screenshots': '截图',
      'nav.video': '视频',
      'nav.report': '报告',
      'nav.privacy': '隐私',
      'nav.download': '下载',
      'hero.subtitle': 'macOS 视频流性能测试与分析工具',
      'hero.desc': '实时监测帧率、延迟、抖动等关键指标，<br>全面评估视频流质量，一键生成专业测试报告。',
      'hero.appstore': 'App Store 下载',
      'features.title': '核心功能',
      'features.desc': '专为 macOS 打造的视频流性能分析利器',
      'features.monitor.title': '实时性能监测',
      'features.monitor.desc': '实时追踪 FPS、延迟、抖动、丢帧等关键性能指标，即时掌握视频流状态。',
      'features.smooth.title': '平滑度评分',
      'features.smooth.desc': '独创 Smooth Score 综合评分体系，直观量化视频流的流畅程度。',
      'features.charts.title': '详细性能图表',
      'features.charts.desc': '提供 Smooth Score、FPS、帧间隔等多维度趋势图和分布直方图，深度分析性能表现。',
      'features.report.title': 'PDF 报告导出',
      'features.report.desc': '一键生成包含完整测试数据和图表的 PDF 专业报告，方便分享与存档。',
      'screenshots.title': '应用截图',
      'screenshots.desc': '清晰直观的界面设计，高效专业的测试体验',
      'screenshots.label1': '测试场景管理',
      'screenshots.label2': '实时性能概览',
      'screenshots.label3': 'Smooth Score 趋势',
      'screenshots.label4': 'FPS 详细分析',
      'screenshots.label5': '帧间隔分布',
      'video.title': '视频演示',
      'video.desc': '观看 MVS Perf 的实际操作演示',
      'report.title': '测试报告示例',
      'report.desc': '专业的 PDF 测试报告，完整记录测试数据与分析结果',
      'report.download': '下载报告示例',
      'download.title': '开始使用 MVS Perf',
      'download.desc': '在 Mac App Store 免费下载，立即体验专业的视频流性能测试。',
      'download.appstore': 'App Store 免费下载',
    },
  };

  let currentLang = localStorage.getItem('mvs-lang') || 'en';

  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mvs-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update page title & meta description
    if (lang === 'zh') {
      document.title = 'MVS Perf - macOS 视频流性能测试工具';
      document.querySelector('meta[name="description"]').setAttribute('content',
        'MVS Perf 是一款专业的 macOS 视频流性能测试与分析工具，实时监测 FPS、延迟、抖动等关键指标，助您全面评估视频流质量。');
    } else {
      document.title = 'MVS Perf - macOS Video Stream Performance Tool';
      document.querySelector('meta[name="description"]').setAttribute('content',
        'MVS Perf is a professional macOS video stream performance testing and analysis tool. Monitor FPS, latency, jitter, and more in real time.');
    }

    // Update toggle button label: show the OTHER language name
    langLabel.textContent = lang === 'en' ? '中文' : 'EN';

    // Translate all elements with data-i18n
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  // Toggle language on click
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    applyLanguage(newLang);
  });

  // Apply saved language on load
  applyLanguage(currentLang);


  // ========== 导航栏滚动效果 & 高亮 ==========

  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section, .hero');

  function updateNavbar() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (!id) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    updateNavbar();
    updateActiveLink();
  }, { passive: true });

  updateNavbar();
  updateActiveLink();


  // ========== 移动端导航菜单 ==========

  const navToggleBtn = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  navToggleBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });

  // 点击导航链接后关闭菜单
  navLinksContainer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
    });
  });


  // ========== Lightbox 图片查看器 ==========

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const screenshotItems = document.querySelectorAll('.screenshot-item');

  let currentIndex = 0;
  const images = [];

  screenshotItems.forEach((item) => {
    const img = item.querySelector('img');
    images.push(img.src);
  });

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
  }

  screenshotItems.forEach((item) => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index, 10);
      openLightbox(index);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });


  // ========== 滚动渐入动画 ==========

  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => {
    fadeObserver.observe(el);
  });
});
