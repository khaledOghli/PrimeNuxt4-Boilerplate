// server/api/locales.ts

import { defineEventHandler, getHeader } from 'h3';

export default defineEventHandler((event) => {
  const lang = getHeader(event, 'accept-language')?.split(',')[0] || 'en';

  const locales: any = {
    en: {
      'hi-from-app': 'Hi from app',
      'clear-errors': 'Clear errors',
      'forms-validation': 'Forms validation',
      'fields-validation': 'Fields validation',
      'pick-a-password': 'Pick a password',
      'at-least-one-lowercase': 'At least one lowercase',
      'at-least-one-uppercase': 'At least one uppercase',
      'at-least-one-numeric': 'At least one numeric',
      'minimum-8-characters': 'Minimum 8 characters',
      'test-api-page': 'This is a page to test API calls.',
      'welcome-to': 'Welcome to {name}',
      'nuxt-primeVue!': 'Nuxt PrimeVue!',
      'demo-page': 'This is a demo of Nuxt PrimeVue with TypeScript and UnoCSS.',
      'send-password-reset-link': 'Send password reset link',
      'login': {
        'remember-me': 'Remember me',
        'forgot-password': 'Forgot password?',
        'login': 'Login',
        'logout': 'Logout',
        'want-to-logout': 'Are you sure you want to logout?',
        'or continue with': 'Or continue with',
        'google': 'Google',
        'Github': 'Github',
        'register': 'Register',
        'do-not-have-account': 'Don\'t have an account?',
      },
      'register': {
        'i-agree-with': 'I agree with',
        'terms-conditions': 'terms and conditions',
        'register': 'Register',
        'already-have-account': 'Already have an account?',
      },
      'menu': {
        'sidebar-content': 'Sidebar content',
        'home': 'Home',
        'forms': 'Forms',
        'apis': 'APIs',
        'lists': 'Lists',
        'drawer-test-description': 'Click the button to open the drawer',
      },
      'header': {
        'user-name': 'Khaled Oghli',
      },
      'home': 'Home',
      'submit': 'Submit',
      'cancel': 'Cancel',
      'cookies': {
        bar: {
          description: 'We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking the customize button.',
          title: '🍪 Hi. This site uses cookies',
        },
        modal: {
          'description': 'We use different types of cookies to optimize your experience on our website. Click on the categories below to learn more about their purposes. You can choose the types of cookies to be allowed and can change your preferences later. Remember that disabling cookies can affect your experience.',
          'privacy-policy': 'Privacy policy',
          'title': 'Customize',
        },
        necessary: {
          description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
          title: 'Strictly necessary cookies',
        },
      },
      'error': {
        'page-not-found': 'Page not found',
        'return': 'Go back',
      },
      'errors': 'Errors',
      'locale.ar': 'Arabic',
      'locale.dir': 'ltr',
      'locale.en': 'English',
      'offline': 'You have lost your internet connection. Please check your network settings.',
      'online': 'You are back online! Your connection has been restored.',
      'pages': {
        about: {
          link: 'About',
          meta: {
            description: 'About page',
            title: 'About',
          },
          p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
          title: 'About',
        },
        index: {
          features: {
            Iconify: 'Iconify',
            Pinia: 'Pinia',
            Prettier: 'Prettier',
            TailwindCSS: 'TailwindCSS',
            Typescript: 'Typescript',
            cookies: 'Cookie banner',
            darkMode: 'Dark mode',
            deviceDetect: 'Device detection',
            eslint: 'ESLint',
            googleFonts: 'Google Fonts',
            i18n: 'Localization (i18n)',
            imageOptim: 'Image optimization',
            lightHouse: 'Lighthouse 100%',
            postcss: 'PostCSS',
          },
          hero: {
            description: 'A ready to use starter kit for all kinds of projects',
            subtitle: 'Unofficial',
            title: 'Nuxt Boilerplate',
          },
          link: 'Home',
          meta: {
            description: 'Home page',
            title: 'Home',
          },
        },
        minimal: {
          link: 'Minimal',
          meta: {
            description: 'Minimal page using Fullscreen-layout',
            title: 'Minimal page (Fullscreen-layout)',
          },
          p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
          title: 'Minimal with Fullscreen-layout',
        },
      },
      'result': 'Result',
      'site': {
        name: 'Prime Nuxt',
      },
      'themes': {
        dark: 'Dark',
        light: 'Light',
        system: 'System',
      },
      'value': 'Value',
      'values': 'Values',
    },
    ar: {
      'hi-from-app': 'مرحباً من التطبيق',
      'clear-errors': 'مسح الأخطاء',
      'forms-validation': 'التحقق من النماذج',
      'fields-validation': 'التحقق من الحقول',
      'pick-a-password': 'اختر كلمة مرور',
      'at-least-one-lowercase': 'على الأقل حرف صغير واحد',
      'at-least-one-uppercase': 'على الأقل حرف كبير واحد',
      'at-least-one-numeric': 'على الأقل رقم واحد',
      'minimum-8-characters': 'الحد الأدنى 8 أحرف',
      'test-api-page': 'هذه هي صفحة لاختبار استدعاءات الواجهة البرمجية للتطبيقات.',
      'welcome-to': 'مرحبًا بك في {name}',
      'nuxt-primeVue!': 'Nuxt PrimeVue!',
      'demo-page': 'هذا هو عرض توضيحي لـ Nuxt PrimeVue مع TypeScript و UnoCSS.',
      'send-password-reset-link': 'إرسال رابط إعادة تعيين كلمة المرور',
      'login': {
        'remember-me': 'تذكرني',
        'forgot-password': 'نسيت كلمة المرور؟',
        'login': 'تسجيل الدخول',
        'logout': 'تسجيل الخروج',
        'want-to-logout': 'هل تريد تسجيل الخروج؟',
        'or continue with': 'أو تابع مع',
        'google': 'Google',
        'Github': 'Github',
        'register': 'تسجيل',
        'do-not-have-account': 'ليس لديك حساب؟',
      },
      'register': {
        'i-agree-with': 'أوافق على',
        'terms-conditions': 'الشروط والأحكام',
        'register': 'تسجيل',
        'already-have-account': 'هل لديك حساب؟',
      },
      'menu': {
        'sidebar-content': 'محتوى الشريط الجانبي',
        'home': 'الرئيسية',
        'forms': 'النماذج',
        'apis': 'الواجهات البرمجية للتطبيقات',
        'lists': 'القوائم',
        'drawer-test-description': 'اضغط على الزر لفتح القائمة الجانبية',
      },
      'header': {
        'user-name': 'خالد اوغلي',
      },
      'home': 'الرئيسية',
      'submit': 'إرسال',
      'cancel': 'إلغاء',
      'cookies': {
        bar: {
          description: 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة للمساعدة في تخصيص المحتوى وتقديم تجربة أفضل. يمكنك اختيار تخصيصها عن طريق النقر فوق زر التخصيص.',
          title: '🍪 مرحبًا. يستخدم هذا الموقع ملفات تعريف الارتباط',
        },
        modal: {
          'description': 'نستخدم أنواعًا مختلفة من ملفات تعريف الارتباط لتحسين تجربتك على موقعنا على الويب. انقر على الفئات أدناه لمعرفة المزيد عن أهدافها. يمكنك اختيار أنواع ملفات تعريف الارتباط المسموح بها ويمكنك تغيير تفضيلاتك لاحقًا. تذكر أن تعطيل ملفات تعريف الارتباط قد يؤثر على تجربتك.',
          'privacy-policy': 'سياسة الخصوصية',
          'title': 'تخصيص',
        },
        necessary: {
          description: 'هذه ملفات ضرورية للعمل الصحيح لموقع الويب. بدون هذه الملفات، لن يعمل الموقع بشكل صحيح',
          title: 'ملفات تعريف الارتباط الضرورية',
        },
      },
      'error': {
        'page-not-found': 'الصفحة غير موجودة',
        'return': 'العودة',
      },
      'errors': 'أخطاء',
      'locale.ar': 'العربية',
      'locale.dir': 'rtl',
      'locale.en': 'English',
      'offline': 'أنت غير متصل بالإنترنت',
      'online': 'أنت متصل بالإنترنت',
      'pages': {
        about: {
          link: 'معلومات',
          meta: {
            description: 'صفحة المعلومات',
            title: 'معلومات',
          },
          p: 'لوريم إيبسوم دولور سيت، أميت كونسيكتور أديبايسينج إليت. إيك وإيستي آتكوي، هيك بوررو أوفيسيس فوجيت كواي ديسيرونت نوبيس دولوروم أوديت ديجنيسيموس كونسيكواتور إيسه مايوريس ريبيلات إمبيديت. كواي دولوروم إيد ريم؟',
          title: 'معلومات',
        },
        index: {
          features: {
            Iconify: 'Iconify',
            Pinia: 'Pinia',
            Prettier: 'Prettier',
            TailwindCSS: 'TailwindCSS',
            Typescript: 'Typescript',
            cookies: 'شريط ملفات تعريف الارتباط',
            darkMode: 'الوضع الداكن',
            deviceDetect: 'اكتشاف الأجهزة',
            eslint: 'ESLint',
            googleFonts: 'خطوط جوجل',
            i18n: 'التوطين (i18n)',
            imageOptim: 'تحسين الصور',
            lightHouse: ' نتيجة 100% على Lighthouse ',
            postcss: 'PostCSS',
          },
          hero: {
            description: 'مجموعة جاهزة للاستخدام لجميع أنواع المشاريع',
            subtitle: 'غير رسمي',
            title: 'قالب Nuxt',
          },
          link: 'الرئيسية',
          meta: {
            description: 'الصفحة الرئيسية',
            title: 'الصفحة الرئيسية',
          },
        },
        minimal: {
          link: 'الحد الأدنى',
          meta: {
            description: 'الحد الأدنى من الصفحة باستخدام تخطيط ملء الشاشة',
            title: 'الحد الأدنى من الصفحة (تخطيط ملء الشاشة)',
          },
          p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?',
          title: 'الحد الأدنى من الصفحة (تخطيط ملء الشاشة)',
        },
      },
      'result': 'النتيجة',
      'site': {
        name: 'Prime Nuxt',
      },
      'themes': {
        dark: 'داكن',
        light: 'فاتح',
        system: 'النظام',
      },
      'value': 'القيمة',
      'values': 'القيم',
    },
  };

  return locales[lang] || locales.en;
});
