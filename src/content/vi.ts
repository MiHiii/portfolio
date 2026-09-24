import type { PortfolioContent } from './types';

export const vi: PortfolioContent = {
  htmlLang: 'vi',
  seo: {
    title: 'Phạm Minh Hiếu | Technical BrSE',
    description:
      'Technical BrSE kết nối khách hàng Nhật Bản và đội phát triển Việt Nam, có kinh nghiệm với hệ thống tài chính, Java/Spring Boot, PostgreSQL, phân tích yêu cầu, kiểm thử và điều tra lỗi.',
    keywords: [
      'BrSE tiếng Nhật',
      'kỹ sư cầu nối',
      'Technical BrSE',
      'hệ thống tài chính Nhật Bản',
      'Java Spring Boot',
      'PostgreSQL',
    ],
  },
  profile: {
    name: 'Phạm Minh Hiếu',
    title: 'Technical BrSE',
    positioning:
      'Kết nối khách hàng Nhật Bản và đội phát triển Việt Nam bằng cả năng lực giao tiếp lẫn khả năng phân tích kỹ thuật.',
    supportingLine: 'Hệ thống tài chính · Java/Spring Boot · PostgreSQL · Yêu cầu · Kiểm thử',
    location: 'Hà Nội, Việt Nam',
    socials: [
      { name: 'GitHub', href: 'https://github.com/MiHiii', username: 'MiHiii' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/phaminhieuu', username: 'phaminhieuu' },
    ],
  },
  about: {
    heading: 'Giới thiệu',
    paragraph:
      'Là một Technical BrSE, tôi đảm nhiệm toàn bộ quy trình từ làm rõ yêu cầu, trao đổi đặc tả với khách hàng Nhật Bản đến điều phối yêu cầu cho đội phát triển, review triển khai, phân tích ảnh hưởng và kiểm thử. Không chỉ đơn thuần biên dịch, tôi đọc hiểu mã nguồn Java/Spring Boot và cấu trúc cơ sở dữ liệu PostgreSQL để tự phát hiện những điểm chưa khớp giữa đặc tả và triển khai thực tế, sau đó phối hợp với khách hàng và đội phát triển để đưa ra hướng xử lý. Từng học tập và sinh sống tại Nhật Bản, qua đó hiểu rõ hơn về ngôn ngữ và văn hóa làm việc của Nhật. Tôi mong muốn tiếp tục phát triển lên các giai đoạn phân tích yêu cầu và thiết kế ở tầm cao hơn.',
  },
  experience: {
    heading: 'Kinh nghiệm làm việc',
    visitCompanyLabel: 'Xem trang công ty',
    items: [
      {
        role: 'Technical BrSE',
        company: 'VINICORP · Viet Nhat General JSC',
        logo: '/vinicorp-logo.png',
        duration: 'Tháng 5/2025 - Hiện tại',
        summary:
          'Technical BrSE hỗ trợ các dự án chứng khoán và đầu tư của khách hàng Nhật Bản, đảm nhiệm từ làm rõ đặc tả, điều phối với đội phát triển, review triển khai, phân tích ảnh hưởng đến kiểm thử.',
        highlights: [
          'Tham gia tổng cộng khoảng 300 chức năng thông qua việc review/dịch đặc tả, trao đổi yêu cầu, kiểm thử, điều tra và tùy chỉnh theo từng khách hàng.',
          'Dịch hơn 10.000 test case từ tiếng Việt sang tiếng Nhật.',
          'Tham gia họp trực tuyến với khách hàng Nhật để làm rõ yêu cầu, điều phối vấn đề phát sinh và báo cáo tiến độ.',
          'Tự phát hiện các điểm chưa khớp giữa quy trình nghiệp vụ, đặc tả, thiết kế DB và mã nguồn; review triển khai và theo dõi khắc phục.',
          'Thiết kế, triển khai và bảo trì báo cáo JasperReports từ khâu yêu cầu đến tích hợp Java; thực hiện phân tích ảnh hưởng và kiểm thử hồi quy cho các luồng phê duyệt/hủy phức tạp.',
        ],
        images: ['/vinicorp.jpg'],
      },
      {
        role: 'Creator',
        company: 'RIKI EDU TRADE JSC',
        companyHref: 'https://riki.edu.vn',
        logo: '/riki-logo.png',
        duration: 'Tháng 8/2023 - Tháng 4/2025',
        summary:
          'Biên tập video cho các khóa JLPT N1, N2, N3, thiết kế giao diện UI/UX bằng Figma và xây dựng landing page cho các chiến dịch marketing.',
        highlights: [
          'Biên tập video cho các khóa học JLPT N1, N2, N3.',
          'Thiết kế UI/UX bằng Figma và xây dựng landing page cho các chiến dịch marketing.',
        ],
        images: ['/riki.png'],
      },
    ],
  },
  education: {
    heading: 'Học vấn',
    items: [
      {
        school: 'Đại học Ngoại thương',
        major: 'Quản trị kinh doanh',
        duration: 'Tháng 8/2026 - Hiện tại',
      },
      {
        school: 'Cao đẳng FPT Polytechnic',
        major: 'Công nghệ thông tin',
        duration: 'Tháng 7/2023 - Tháng 8/2025',
        gpa: '3.6/4.0',
      },
      {
        school: 'Du học Nhật Bản',
        major: 'CODO International Academy, CODO Tourism Vocational School, Kyushu Ryukoku Junior College',
        duration: 'Tháng 4/2018 - Tháng 10/2021',
      },
    ],
  },
  projects: {
    heading: 'Dự án tiêu biểu',
    items: [
      {
        title: 'Custom MCP Host',
        meta: 'Dự án cá nhân · 2026',
        description:
          'Agentic loop viết bằng Go kết nối Gemini với các MCP tool, cùng một gateway HTTP/SSE xác thực Bearer với chính sách truy cập file, kiểm soát timeout/số lần lặp/đồng thời/kích thước kết quả. Bao gồm các agent, skill, rule và command có thể tái sử dụng theo vai trò.',
        tech: ['Go', 'MCP', 'Gemini API', 'SSE'],
      },
      {
        title: 'Vinaside',
        meta: 'Trưởng nhóm, 4 thành viên · 2025',
        description:
          'Nền tảng đặt phòng lưu trú full-stack với tìm kiếm/đặt phòng, quản lý cơ sở lưu trú và nhân viên, RBAC, chat thời gian thực, thanh toán VNPay, voucher, dashboard và email thông báo.',
        tech: ['React', 'Vite', 'TypeScript', 'NestJS', 'MongoDB', 'Socket.IO', 'Redis', 'AWS S3'],
        links: [{ label: 'GitHub', href: 'https://github.com/MiHiii/vinaside-backend' }],
      },
      {
        title: 'Nem Mo E-commerce',
        meta: 'Trưởng nhóm, 4 thành viên · 2024',
        description:
          'Website bán hàng với đăng nhập/đăng ký, quản lý sản phẩm/danh mục, giỏ hàng, thanh toán VNPay, bình luận và email thông báo.',
        tech: ['PHP', 'JavaScript', 'HTML', 'MySQL'],
      },
    ],
  },
  skills: {
    heading: 'Kỹ năng',
    groups: [
      { label: 'Ngôn ngữ', items: ['TypeScript/JavaScript', 'Java', 'Go', 'PHP'] },
      {
        label: 'Framework',
        items: ['Spring Boot', 'Spring Batch', 'React', 'Next.js', 'NestJS', 'Node.js/Express'],
      },
      {
        label: 'Dữ liệu & Cloud',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS S3', 'AWS EC2', 'AWS SSM'],
      },
      { label: 'Công cụ khác', items: ['JasperReports', 'Git', 'Docker', 'Postman', 'MCP', 'AI-agent workflows'] },
    ],
  },
  certifications: {
    heading: 'Chứng chỉ',
    items: [{ name: 'JLPT N2', date: 'Tháng 12/2019' }],
  },
  resume: {
    ctaLabel: 'Xem CV',
    dialogTitle: 'Chọn hồ sơ để xem',
    viewLabel: 'Xem',
    downloadLabel: 'Tải xuống',
    note: 'CV tiếng Việt hiện chưa có bản PDF.',
    documents: [
      {
        key: 'en-cv',
        label: 'English CV',
        href: '/resume/pham-minh-hieu-technical-brse-en.pdf',
        downloadName: 'Pham-Minh-Hieu-Technical-BrSE.pdf',
      },
      {
        key: 'ja-rirekisho',
        label: '日本語 履歴書 (Rirekisho)',
        href: '/resume/pham-minh-hieu-rirekisho-ja.pdf',
        downloadName: 'Pham-Minh-Hieu-Rirekisho.pdf',
      },
      {
        key: 'ja-shokumukeirekisho',
        label: '日本語 職務経歴書 (Shokumukeirekisho)',
        href: '/resume/pham-minh-hieu-shokumukeirekisho-ja.pdf',
        downloadName: 'Pham-Minh-Hieu-Shokumukeirekisho.pdf',
      },
    ],
  },
  ui: {
    languageSwitcherLabel: 'Chọn ngôn ngữ',
  },
};
