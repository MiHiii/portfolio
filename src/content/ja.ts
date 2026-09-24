import type { PortfolioContent } from './types';

export const ja: PortfolioContent = {
  htmlLang: 'ja',
  seo: {
    title: 'ファム・ミン・ヒョウ | Technical BrSE・ブリッジSE',
    description:
      '日本向け金融システム開発に携わるTechnical BrSE。仕様確認、要件展開、実装レビュー、影響範囲分析、テストに加え、Java／Spring Boot／PostgreSQLを用いた調査にも対応しています。',
    keywords: [
      'ブリッジSE',
      'Technical BrSE',
      'BrSE',
      '金融システム',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'ベトナム開発',
    ],
  },
  profile: {
    name: 'ファム・ミン・ヒョウ',
    title: 'Technical BrSE / ブリッジSE',
    positioning:
      '日本のお客様とベトナム開発チームをつなぎ、仕様調整だけでなく技術調査まで対応するTechnical BrSEです。',
    supportingLine: '金融システム · Java/Spring Boot · PostgreSQL · 要件整理 · テスト',
    location: 'ハノイ, ベトナム',
    socials: [
      { name: 'GitHub', href: 'https://github.com/MiHiii', username: 'MiHiii' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/phaminhieuu', username: 'phaminhieuu' },
    ],
  },
  about: {
    heading: '自己紹介',
    paragraph:
      '金融系システム開発プロジェクトにおいて、顧客との仕様調整から開発チームへの要件展開、実装レビュー、影響範囲分析、テストまで一貫して対応するTechnical BrSEとして活動しています。単なる通訳にとどまらず、Java／Spring Boot／PostgreSQLで構築されたソースコードやDB構造を理解した上で、仕様と実装の不整合を自ら発見し、開発チームと修正方針を調整することを強みとしています。日本での留学・生活経験があり、日本語だけでなく日本の文化や仕事に対する考え方への理解があります。今後は、より上流の要件定義・設計フェーズにも貢献できるTechnical BrSEを目指しています。',
  },
  experience: {
    heading: '職務経歴',
    visitCompanyLabel: '会社サイトを見る',
    items: [
      {
        role: 'Technical BrSE',
        company: 'ビニコープ株式会社（VINICORP）',
        logo: '/vinicorp-logo.png',
        duration: '2025年5月 - 現在',
        summary:
          '証券・投資系の金融システム開発プロジェクトにおいて、顧客との仕様調整から開発チームへの要件展開、実装レビュー、影響範囲分析、テストまで一貫して対応。',
        highlights: [
          '仕様確認・翻訳、要件展開、テスト・調査、顧客別カスタマイズ対応等を通じ、累計約300機能に関与。',
          'ベトナム語のテストケース累計10,000件以上を日本語へ翻訳。',
          '顧客（日本側）とのオンライン会議に参加し、要件ヒアリング・仕様確認・課題調整、進捗報告を担当。',
          '仕様書・DB定義・実装間の不整合を自ら発見し、原因調査から修正方針の整理までを担当。',
          'JasperReportsを用いた帳票開発を要件整理から実装・保守まで一貫して担当し、複合フローの影響範囲分析・リグレッションテストを実施。',
        ],
        images: ['/vinicorp.jpg'],
      },
      {
        role: 'クリエイター',
        company: 'ベトナムRIKI教育商事株式会社',
        companyHref: 'https://riki.edu.vn',
        logo: '/riki-logo.png',
        duration: '2023年8月 - 2025年4月',
        summary:
          'JLPT N1・N2・N3向け教育コンテンツの制作、Figmaを用いたUI/UXデザイン、キャンペーン用ランディングページの制作を担当。',
        highlights: [
          'JLPT N1・N2・N3コース向けの動画編集を担当。',
          'Figmaを用いたUI/UXデザイン、キャンペーン用ランディングページを制作。',
        ],
        images: ['/riki.png'],
      },
    ],
  },
  education: {
    heading: '学歴',
    items: [
      {
        school: '外国貿易大学',
        major: '経営学科',
        duration: '2026年8月 - 現在',
      },
      {
        school: 'FPT Polytechnic短期大学',
        major: '情報技術',
        duration: '2023年7月 - 2025年8月',
        gpa: '3.6/4.0',
      },
      {
        school: '日本留学',
        major: '弘堂国際学園、CODO観光専門学校、九州龍谷短期大学',
        duration: '2018年4月 - 2021年10月',
      },
    ],
  },
  projects: {
    heading: '主なプロジェクト',
    items: [
      {
        title: 'Custom MCP Host',
        meta: '個人開発 · 2026年',
        description:
          'GoでGeminiとMCPツールを接続するAgentic Loop、およびBearer認証付きHTTP/SSE Gatewayを開発。ファイルアクセスポリシーやタイムアウト・実行回数・並行数・出力サイズを制御し、役割別に再利用可能なAgent・Skill・Rule・Commandを設計。',
        tech: ['Go', 'MCP', 'Gemini API', 'SSE'],
      },
      {
        title: 'Vinaside',
        meta: 'チームリーダー・4名 · 2025年',
        description:
          '宿泊施設の検索・予約、施設／スタッフ管理、RBAC、リアルタイムチャット、VNPay決済、クーポン、ダッシュボード、メール通知を備えたフルスタック宿泊予約プラットフォーム。',
        tech: ['React', 'Vite', 'TypeScript', 'NestJS', 'MongoDB', 'Socket.IO', 'Redis', 'AWS S3'],
        links: [{ label: 'GitHub', href: 'https://github.com/MiHiii/vinaside-backend' }],
      },
      {
        title: 'Nem Mo E-commerce',
        meta: 'チームリーダー・4名 · 2024年',
        description:
          '認証、商品／カテゴリ管理、カート、VNPay決済、コメント、メール通知機能を備えたECサイト。',
        tech: ['PHP', 'JavaScript', 'HTML', 'MySQL'],
      },
    ],
  },
  skills: {
    heading: 'スキル',
    groups: [
      { label: '言語', items: ['TypeScript/JavaScript', 'Java', 'Go', 'PHP'] },
      {
        label: 'フレームワーク',
        items: ['Spring Boot', 'Spring Batch', 'React', 'Next.js', 'NestJS', 'Node.js/Express'],
      },
      {
        label: 'データ＆クラウド',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS S3', 'AWS EC2', 'AWS SSM'],
      },
      { label: 'ツール・その他', items: ['JasperReports', 'Git', 'Docker', 'Postman', 'MCP', 'AIエージェント活用'] },
    ],
  },
  certifications: {
    heading: '資格',
    items: [{ name: 'JLPT N2（日本語能力試験N2）', date: '2019年12月' }],
  },
  resume: {
    ctaLabel: '履歴書・職務経歴書',
    dialogTitle: '書類を選択',
    viewLabel: '表示',
    downloadLabel: 'ダウンロード',
    documents: [
      {
        key: 'ja-rirekisho',
        label: '履歴書',
        href: '/resume/pham-minh-hieu-rirekisho-ja.pdf',
        downloadName: 'Pham-Minh-Hieu-Rirekisho.pdf',
      },
      {
        key: 'ja-shokumukeirekisho',
        label: '職務経歴書',
        href: '/resume/pham-minh-hieu-shokumukeirekisho-ja.pdf',
        downloadName: 'Pham-Minh-Hieu-Shokumukeirekisho.pdf',
      },
    ],
  },
  ui: {
    languageSwitcherLabel: '言語を選択',
  },
};
