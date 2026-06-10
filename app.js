/* ==========================================================================
   DONG HWANG TO SAN - MULTILINGUAL & INTERACTIVE JAVASCRIPT
   ========================================================================== */

// --- 1. Translation Dictionary ---
const translations = {
    ko: {
        // Logo & Navigation
        logo_name: "(주) 동황토산",
        logo_sub: "DONG HWANG TO SAN",
        nav_story: "CEO 인사말",
        nav_about: "회사소개",
        nav_branches: "쇼핑매장",
        nav_products: "제품소개",
        nav_efficacy: "인삼효능",
        nav_partnership: "제휴혜택",
        nav_booking: "오시는길",
        nav_hogandan: "<i class='fa-solid fa-leaf'></i> 호간단 브랜드몰",

        // Hero Section (index.html)
        hero_badge: "KOREAN PREMIUM RED GINSENG",
        hero_title: "황토의 기운으로 키워낸<br>생명의 영약, 고려인삼",
        hero_desc: "천혜의 황토 땅에서 6년의 세월을 견뎌 완성된 최고급 홍삼. 전 세계 여행객에게 대한민국 건강의 자부심을 선사합니다.",
        hero_cta_products: "제품 둘러보기",
        hero_cta_booking: "지점 방문 예약",

        // Brand Story Summary (index.html)
        story_subtitle: "THE HERITAGE OF HWANGTO",
        story_title: "동황토산 브랜드 스토리",
        story_h3: "왜 '황토'에서 자란 인삼일까요?",
        story_p1: "황토(Yellow Clay)는 수많은 미생물과 원적외선을 품고 있는 살아있는 흙입니다. 동황토산은 게르마늄과 영양분이 가득한 청정 황토 지대만을 선별하여 삼을 재배합니다. 황토에서 자란 인삼은 뿌리가 더욱 견고하고, 인삼의 핵심 효능 성분인 진세노사이드(사포닌) 함량이 일반 인삼에 비해 월등히 높습니다.",
        story_p2: "동황토산은 100% 계약 재배 및 철저한 자체 품질 검사를 통해 최고 등급의 인삼만을 고집합니다. 경기도 고양시 본점에서 제품을 연구 및 생산하고, 주요 관광 거점인 부산과 제주 지점에서 해외 고객 여러분을 정성껏 맞이하고 있습니다.",
        story_stat1: "6년근 엄선",
        story_stat2: "황토 재배",
        story_stat3: "국내 직영점",
        story_badge_txt: "최고급 고려인삼인증",

        // Branches Summary (index.html)
        branches_subtitle: "OUR LOCATIONS",
        branches_title: "동황토산 지점 안내",
        branch_hq: "본점 (HQ)",
        branch_store: "직영 지점",
        branch_goyang_name: "경기도 고양 본점",
        branch_goyang_desc: "제품 기획, 가공 연구 및 경영 관리를 수행하는 동황토산의 심장부입니다.",
        branch_goyang_addr: "경기도 고양시 일산동구 중앙로 123",
        branch_goyang_time: "09:00 - 18:00 (주말 휴무)",
        branch_goyang_spec: "R&D 센터 투어 가능, 대량 구매 상담",
        
        branch_busan_name: "부산 지점",
        branch_busan_desc: "부산 크루즈 항구 및 국제공항과 인접하여 남해안을 방문하는 외국인 고객을 위한 최상의 서비스를 제공합니다.",
        branch_busan_addr: "부산광역시 중구 중앙대로 45",
        branch_busan_time: "09:00 - 20:00 (연중무휴)",
        branch_busan_spec: "즉시 면세 환급, 시음 서비스, 영어/중국어/일어 통역",

        branch_jeju_name: "제주 지점",
        branch_jeju_desc: "천혜의 섬 제주를 찾으시는 전 세계 휴양객들을 위해 공항 인근에 위치하며 고품격 선물 패키지를 다양하게 구비하고 있습니다.",
        branch_jeju_addr: "제주특별자치도 제주시 노연로 88",
        branch_jeju_time: "09:00 - 21:00 (연중무휴)",
        branch_jeju_spec: "공항 무료 셔틀, 글로벌 카드 환영, 호텔 직송 서비스",

        // Products General
        products_subtitle: "OUR PRODUCTS",
        products_title: "인삼 & 홍삼 대표 제품",
        prod_view_detail: "상세 정보 보기",
        prod_cat_extract: "고농축 홍삼정",
        prod_title_extract: "동황토산 6년근 황토홍삼정",
        prod_cat_roots: "명품 뿌리삼",
        prod_title_roots: "천삼 등급 황토 건삼 (목함)",
        prod_cat_slices: "간편 웰빙식품",
        prod_title_slices: "동황토산 꿀벌 홍삼절편",

        // Ho Gan Dan Subsidiary
        hgd_badge: "호간단 (護肝丹)",
        hgd_subtitle: "DONG HWANG TO SAN SUBSIDIARY",
        hgd_title: "호간단 (護肝丹)",
        hgd_intro: "여행의 피로와 현대인의 불규칙한 생활로 지친 간을 보호하는 최적의 처방.",
        hgd_body: "동황토산의 전문 약초 배합 기술을 바탕으로 출범한 자회사 브랜드 '호간단'은 한국의 전통 약용 식물인 헛개나무 열매 고농축 추출물과 엄선된 6년근 홍삼을 결합하여 완성되었습니다. 잦은 음주, 누적된 피로, 시차 적응으로 몸이 무거우신 해외 여행객들께 활력 넘치는 하루를 되찾아 드립니다.",
        hgd_f1_t: "간 세포 보호 및 해독",
        hgd_f1_d: "헛개나무의 핵심 성분이 간 해독 기능을 보완하고 숙취를 신속하게 해소합니다.",
        hgd_f2_t: "강력한 피로 회복",
        hgd_f2_d: "홍삼의 진세노사이드가 신진대사를 촉진하여 누적된 피로를 없애줍니다.",
        hgd_price_lbl: "호간단 프리미엄 (120캡슐 / 2달분)",
        hgd_cta: "호간단 예약/구매 문의",

        // Tourist Services
        services_subtitle: "TOURIST SERVICES",
        services_title: "해외 여행객 특별 안심 서비스",
        serv_tax_title: "즉시 면세 환급 (Tax Refund)",
        serv_tax_desc: "부산/제주 매장에서 면세 혜택을 즉시 적용받거나 공항 세금 환급 처리를 빠르게 도와드립니다.",
        serv_ship_title: "안전한 해외 항공 직배송",
        serv_ship_desc: "무거운 선물 세트를 직접 들고 다닐 필요 없이, EMS/DHL을 통해 본국 자택까지 안심 배송해 드립니다.",
        serv_lang_title: "전담 통역 및 투어 케어",
        serv_lang_desc: "지점마다 영어, 중국어, 일본어 전담 쇼핑 어드바이저가 상주하여 언어 장벽 없는 쇼핑을 선사합니다.",
        serv_customs_title: "수출 규격 및 통관 보증",
        serv_customs_desc: "각 국가별 식품 및 통관 기준에 부합하도록 공식 수출용 검역 증명서 발급 및 규격 패키징을 지원합니다.",

        // CEO Page Specific (ceo.html)
        ceo_page_title: "CEO 인사말",
        ceo_intro_subtitle: "MESSAGE FROM DONG HWANG TO SAN CEO",
        ceo_greeting: "동황토산 공식 홈페이지를 방문해주신 내외빈 여러분 환영합니다.",
        ceo_body1: "저희 동황토산은 자연이 준 최고의 영약인 고려인삼을 황토 밭에서 6년간 정성껏 길러내어 전 세계에 소개하고 있습니다. 황토의 원적외선과 비옥한 게르마늄 성분으로 자라난 동황토산 인삼은 효능과 품질 면에서 대한민국 인삼의 기준을 제시해 왔습니다.",
        ceo_body2: "특히 세계의 많은 관광객들이 한국을 찾아주실 때 신뢰하고 구매할 수 있는 명품 브랜드를 선도하며, 자회사 호간단과의 시너지를 통해 현대인의 지친 몸과 간을 보살피는 통합 웰빙 가치를 창출하고 있습니다. 신뢰와 정직을 바탕으로 세계 일류 건강 브랜드로 나아가겠습니다.",
        ceo_sign: "주식회사 동황토산 대표이사 홍 길 동",

        // About Page Specific (about.html)
        about_page_title: "회사소개",
        about_intro_subtitle: "WHO WE ARE",
        about_intro_title: "전통과 정성으로 건강한 미래를 설계합니다",
        about_intro_p: "동황토산은 수천 년간 이어온 고려인삼의 우수성을 첨단 위생 가공 기술과 결합하여 전 세계에 널리 알리고 있는 대한민국 대표 웰빙 건강 기업입니다.",
        about_core_h3: "동황토산의 핵심 경쟁력",
        about_core1_t: "100% 청정 황토 계약 재배",
        about_core1_d: "게르마늄과 유익균이 살아있는 청정 황토 토양만을 고집하여 사포닌이 가장 풍부한 인삼을 재배합니다.",
        about_core2_t: "원스톱 위생 가공 시스템",
        about_core2_d: "경기도 고양시 본점 R&D 센터에서 직접 원료 검사, 홍삼 가공, 농축, 포장까지의 전 과정을 엄격하게 통제합니다.",
        about_core3_t: "글로벌 관광객 안심 서비스",
        about_core3_d: "부산 및 제주 지점에서 전문적인 다국어 통역, 면세 환급, 국제 안전 항공 배송(EMS/DHL) 혜택을 원스톱으로 제공합니다.",
        about_hgd_title: "호간단 (護肝丹)",
        about_hgd_desc: "간 건강 전문 브랜드인 '호간단'은 동황토산의 약초 가공 노하우와 R&D 기술을 이전받아 설립된 독립 자회사입니다. 잦은 피로와 음주에 노출된 현대인 및 시차와 이동 피로로 고단한 해외 관광객들을 위해 헛개나무 열매 추출액과 홍삼을 조화롭게 배합한 고기능성 건강식품을 공급하고 있습니다.",

        // Outlets Page Specific (outlets.html)
        outlets_page_title: "쇼핑매장 안내",
        outlets_intro_subtitle: "OUR WORLD-CLASS OUTLETS",
        outlets_intro: "동황토산의 직영 쇼핑 매장은 최고의 접근성과 쾌적한 쇼핑 환경을 제공하며, 외국인 관광객 맞춤 어드바이저 시스템을 갖추고 있습니다.",
        outlets_guide_title: "외국인 고객 특별 쇼핑 가이드",
        outlets_step1_t: "1. 웰컴 티 & 무료 시음",
        outlets_step1_d: "매장 방문 시 피로 회복에 탁월한 프리미엄 홍삼 추출액과 호간단을 무료로 시음해 보실 수 있습니다.",
        outlets_step2_t: "2. 맞춤형 면세 혜택",
        outlets_step2_d: "여권을 제시하시면 매장 즉시 면세 적용 또는 공항에서 빠르게 세금을 환급받을 수 있는 전용 영수증을 발행해 드립니다.",
        outlets_step3_t: "3. 국제 직배송 및 검역 보증",
        outlets_step3_d: "가정이나 호텔로 안전하게 배송해 드리며, 거주 국가 세관 반입에 문제가 없도록 검역 인증 스티커 및 패키지를 포장해 드립니다.",

        // Efficacy Page (efficacy.html) - [NEW]
        eff_page_title: "황토인삼 효능",
        eff_subtitle: "HEALTH BENEFITS OF HWANGTO GINSENG",
        eff_title: "인삼의 5대 대표 효능",
        eff_desc: "비옥한 황토 토양 속에서 게르마늄과 고농축 천연 에너지를 가득 머금고 자란 동황토산 인삼이 선사하는 과학적인 신체 건강 개선 효과입니다.",
        eff_card1_title: "면역력 증진 및 예방",
        eff_card1_desc: "세균이나 바이러스로부터 우리 몸을 지켜주는 활성 대식세포와 T-세포 생성을 촉진하여 원초적인 면역 체계를 강력하게 구축해 줍니다.",
        eff_card2_title: "강력한 피로 해소 & 활력",
        eff_card2_desc: "피로 유발 인자인 젖산 축적을 강력히 억제하고 신진대사를 촉진하여 장시간 여행이나 누적된 스트레스, 만성 피로에서 빠르게 복원됩니다.",
        eff_card3_title: "혈행 개선 및 수족냉증 완화",
        eff_card3_desc: "혈관 수축을 유발하는 혈소판 응집을 억제하고 산소 혈류량을 증대하여 손발 차가움 증상을 완화하고 원활한 혈관 건강을 도모합니다.",
        eff_card4_title: "항산화 작용 & 노화 방지",
        eff_card4_desc: "세포 파괴와 신체 노화를 촉진하는 악성 활성 산소를 탁월하게 중화하고, 피부 콜라겐 촉진 등 세포의 활력을 재생시켜 젊음을 유지합니다.",
        eff_card5_title: "기억력 개선 & 집중력 향상",
        eff_card5_desc: "뇌세포 활성 물질을 조절하여 학습 인지 능력을 향상하고 스트레스 호르몬 분비를 감소시켜 심신 안정과 치매 방지에 도움을 줍니다.",
        eff_soil_title: "왜 황토(黃土)에서 자란 인삼이 더 특별할까요?",
        eff_soil_p1: "황토는 '살아있는 유기물 배양기'라 불릴 만큼 미세 미생물과 원적외선 에너지 공급력이 우수한 자연의 보고입니다. 동황토산 연구원 분석 결과, 청정 황토 밭에서 6년간 자라난 수삼은 일반 진흙이나 모래밭에서 자란 인삼 대비 핵심 약리 성분인 진세노사이드(사포닌) 함량이 평균 25% 이상 높게 추출되었습니다.",
        eff_soil_p2: "황토에서 자연 발생하는 풍부한 원적외선 온열 에너지는 인삼의 미세 모근까지 깊숙이 침투하여 영양 성분 저장을 활성화합니다. 이로 인해 동황토산 고려인삼은 일반 인삼에 비해 인체 흡수율이 탁월하여 더 빠르고 확실한 효능 체감을 약속합니다.",

        // Partnership Page (partnership.html) - [NEW]
        part_page_title: "글로벌 제휴혜택",
        part_subtitle: "GLOBAL PARTNERSHIP & EXCLUSIVE VIP BENEFITS",
        part_title: "글로벌 파트너십 & 제휴 혜택",
        part_desc: "동황토산은 전 세계 항공사, 특급 면세점 및 럭셔리 호텔과의 제휴를 통하여 해외 여행객만을 위한 특별 VIP 쇼핑 특전을 제공합니다.",
        part_card1_title: "항공사 특별 마일리지 적립",
        part_card1_desc: "대한항공(Skypass) 및 아시아나항공(Asiana Club) 회원 카드를 소지하신 고객은 당사 매장 구매 금액 1,000원당 1.5마일리지를 상시 적립하실 수 있으며, VIP 회원께는 제휴 라운지 이용권을 증정합니다.",
        part_card2_title: "면세점 추가 5% 우대 할인",
        part_card2_desc: "롯데, 신라, 신세계 면세점 VIP 할인 쿠폰 또는 멤버십을 매장 카운터에 제시해 주시면 전 상품 추가 5% 할인이 적용되며, 즉시 세금 환급(Tax Refund) 혜택과 중복 혜택 적용이 가능합니다.",
        part_card3_title: "특급 호텔 VIP 무료 배송",
        part_card3_desc: "부산 및 제주 지역 연계 특급 호텔(롯데호텔, 신라호텔, 그랜드 하얏트 등)에 투숙하시는 관광객들께는 구매하신 물품을 호텔 프런트까지 당일 무료로 안전하게 책임 배송해 드립니다.",

        // Directions Page Specific (directions.html)
        dir_page_title: "오시는 길 & 방문 예약",
        dir_intro_subtitle: "FIND US",
        dir_hq_title: "본점 및 R&D 센터 (경기도 고양시)",
        dir_hq_how: "대중교통: 지하철 3호선 정발산역 1번 출구 도보 5분. 자가용: 수도권제1순환고속도로 일산IC 진출 후 중앙로 방면 2km.",
        dir_busan_title: "부산 지점 (Busan Branch)",
        dir_busan_how: "대중교통: 부산지하철 1호선 중앙역 10번 출구 도보 2분. 크루즈 터미널: 부산항국제여객터미널에서 택시로 5분.",
        dir_jeju_title: "제주 지점 (Jeju Branch)",
        dir_jeju_how: "대중교통: 제주공항에서 365번 버스 탑승 후 은남동 정류장 하차 도보 3분. 공항 서비스: 공항 및 인근 호텔 셔틀버스 운행 (사전 예약 필수).",

        // Booking Form (in directions.html)
        book_pane_title: "지점 방문 및 구매 예약",
        book_pane_desc: "미리 예약 후 매장을 방문하시면 대기 없이 맞춤 안내 서비스를 받으실 수 있으며, 사전 시음 기회와 추가 5% VIP 할인 혜택을 드립니다.",
        book_b1: "방문 시 웰컴 홍삼 음료 무료 시음",
        book_b2: "사전 예약자 전원 5% 현장 할인 쿠폰 제공",
        book_b3: "외국어 어드바이저 1:1 쇼핑 어시스트",
        form_lbl_name: "성함 (Full Name)",
        form_lbl_lang: "소통 가능 언어 (Preferred Language)",
        form_lbl_branch: "방문 예정 지점 (Target Branch)",
        form_lbl_date: "방문 예정 일자 (Visit Date)",
        form_lbl_count: "방문 인원 (Number of Guests)",
        form_lbl_contact: "연락처 (이메일/메신저 아이디/전화번호)",
        form_lbl_req: "특별 요청 및 문의 사항 (Special Request)",
        form_btn_submit: "방문 및 구매 예약하기",
        form_opt_goyang: "경기도 고양 본점 (HQ)",
        form_opt_busan: "부산 지점 (Busan)",
        form_opt_jeju: "제주 지점 (Jeju)",

        form_plh_name: "여권상 이름을 입력해 주세요",
        form_plh_contact: "이메일 주소 또는 Line/WeChat 아이디",
        form_plh_req: "호텔 배송 희망, 특정 상품 문의 등",

        // Footer
        foot_desc: "대한민국 전통 고려인삼의 자부심을 계승하며, 전 세계 관광객들께 자연의 생명력과 웰빙 솔루션을 전달합니다.",
        foot_title_links: "빠른 링크",
        foot_title_addr: "본사 정보",
        foot_lbl_comp: "상호명:",
        foot_lbl_ceo: "대표자:",
        foot_lbl_hq: "본점:",
        foot_lbl_reg: "등록번호:",
        foot_ceo: "홍길동",

        // Modals & Messages
        modal_lbl_desc: "제품 특징 (Key Features)",
        modal_lbl_ingredients: "성분 정보 (Ingredients)",
        modal_lbl_how_to_use: "섭취 및 보관 방법 (Directions)",
        modal_lbl_customs: "여행객 통관 유의사항 (Customs Notice)",
        modal_btn_book: "이 제품 구매 예약하기",
        toast_success_title: "예약 완료",
        toast_success_msg: "방문 예약이 성공적으로 등록되었습니다. 담당자가 곧 기재해주신 연락처로 안내 이메일을 발송해 드리겠습니다.",
        toast_error_title: "오류 발생",
        toast_error_msg: "입력 값을 다시 확인해 주세요."
    },
    en: {
        logo_name: "Dong Hwang To San Co.",
        logo_sub: "DONG HWANG TO SAN",
        nav_story: "CEO Message",
        nav_about: "About Us",
        nav_branches: "Outlets",
        nav_products: "Products",
        nav_efficacy: "Benefits",
        nav_partnership: "VIP Benefits",
        nav_booking: "Directions",
        nav_hogandan: "<i class='fa-solid fa-leaf'></i> Ho Gan Dan Shop",

        hero_badge: "KOREAN PREMIUM RED GINSENG",
        hero_title: "Elixir of Life Cultivated<br>by the Power of Hwangto Soil",
        hero_desc: "Premium red ginseng perfected by enduring 6 years in blessedly fertile yellow clay soil. Gifting the pride of Korea's health to travelers worldwide.",
        hero_cta_products: "View Products",
        hero_cta_booking: "Book Store Visit",

        story_subtitle: "THE HERITAGE OF HWANGTO",
        story_title: "Dong Hwang To San Brand Story",
        story_h3: "Why Ginseng Grown in 'Hwangto' (Yellow Clay)?",
        story_p1: "Hwangto (Korean yellow clay soil) is a living earth abundant with organic nutrients and beneficial microbes. Dong Hwang To San selectively cultivates ginseng only in clean, germanium-rich yellow clay zones. Ginseng grown in Hwangto yields firmer roots and boasts significantly higher levels of Ginsenosides (saponins) compared to regular ginseng.",
        story_p2: "We maintain our premium standards through 100% contract farming and rigorous internal testing. Our headquarters in Goyang, Gyeonggi-do directs research and processing, while our Busan and Jeju branches proudly serve international visitors.",
        story_stat1: "Selected 6-Yr Roots",
        story_stat2: "Hwangto Clay Grown",
        story_stat3: "Direct Outlets",
        story_badge_txt: "Certified Premium Ginseng",

        branches_subtitle: "OUR LOCATIONS",
        branches_title: "Our Branches & Headquarters",
        branch_hq: "Headquarters (HQ)",
        branch_store: "Direct Branch",
        branch_goyang_name: "Goyang Headquarters",
        branch_goyang_desc: "The heart of Dong Hwang To San, directing product development, agricultural research, and corporate management.",
        branch_goyang_addr: "123 Jungang-ro, Ilsandong-gu, Goyang-si, Gyeonggi-do",
        branch_goyang_time: "09:00 - 18:00 (Closed on weekends)",
        branch_goyang_spec: "R&D center tours available, wholesale consultations",

        branch_busan_name: "Busan Branch",
        branch_busan_desc: "Located near Busan cruise port and international airport, offering top-tier shopping service for travelers touring the Southern coast.",
        branch_busan_addr: "45 Jungang-daero, Jung-gu, Busan",
        branch_busan_time: "09:00 - 20:00 (Open 365 Days)",
        branch_busan_spec: "Instant tax refund, free tasting, EN/ZH/JA interpreters on-site",

        branch_jeju_name: "Jeju Branch",
        branch_jeju_desc: "Situated near Jeju Airport, catering to global vacationers with exclusive gift packages and luxury travel souvenirs.",
        branch_jeju_addr: "88 Noyeon-ro, Jeju-si, Jeju-do",
        branch_jeju_time: "09:00 - 21:00 (Open 365 Days)",
        branch_jeju_spec: "Free airport shuttle, global credit cards accepted, direct hotel delivery",

        products_subtitle: "OUR PRODUCTS",
        products_title: "Signature Ginseng & Red Ginseng",
        prod_view_detail: "View Details",
        prod_cat_extract: "Red Ginseng Extract",
        prod_title_extract: "Dong Hwang To San 6-Year Red Ginseng Extract",
        prod_cat_roots: "Heaven Grade Roots",
        prod_title_roots: "Heaven-Grade Dried Hwangto Ginseng (Wooden Box)",
        prod_cat_slices: "Healthy Snack",
        prod_title_slices: "Honey-Glazed Ginseng Slices",

        hgd_badge: "Ho Gan Dan",
        hgd_subtitle: "DONG HWANG TO SAN SUBSIDIARY",
        hgd_title: "Subsidiary Brand: Ho Gan Dan (護肝丹)",
        hgd_intro: "The optimal herbal remedy for livers exhausted by travel fatigue and modern busy life.",
        hgd_body: "Developed using Dong Hwang To San's expertise in traditional herbs, our subsidiary brand 'Ho Gan Dan' combines highly concentrated extracts of Hovenia dulcis fruits with selected 6-year-old red ginseng. It restores vitality to international tourists suffering from jetlag, fatigue, or frequent socializing.",
        hgd_f1_t: "Liver Protection & Detoxification",
        hgd_f1_d: "Key Hovenia dulcis components enhance liver enzyme activity and accelerate alcohol clearance.",
        hgd_f2_t: "Intense Fatigue Recovery",
        hgd_f2_d: "Active ginsenosides boost metabolic pathways, eliminating deep chronic exhaustion.",
        hgd_price_lbl: "Ho Gan Dan Premium (120 Capsules / 2-Month Supply)",
        hgd_cta: "Inquire / Pre-order Ho Gan Dan",

        services_subtitle: "TOURIST SERVICES",
        services_title: "Exclusive Services for Overseas Tourists",
        serv_tax_title: "Instant Tax Refund",
        serv_tax_desc: "Enjoy immediate duty-free price deductions in our Busan/Jeju stores or fast-track tax refund processing at airport terminals.",
        serv_ship_title: "Worldwide Safe Air Shipping",
        serv_ship_desc: "Travel light and stress-free. We ship your heavy premium gift sets directly to your home country via EMS/DHL.",
        serv_lang_title: "Multilingual Shopping Guides",
        serv_lang_desc: "Every branch has dedicated English, Chinese, and Japanese shopping assistants to ensure smooth communication.",
        serv_customs_title: "Guaranteed Customs Compliance",
        serv_customs_desc: "We provide official phytosanitary inspection certificates and export packaging meeting international quarantine laws.",

        // CEO Page
        ceo_page_title: "CEO Message",
        ceo_intro_subtitle: "MESSAGE FROM DONG HWANG TO SAN CEO",
        ceo_greeting: "Welcome to all international and domestic guests visiting Dong Hwang To San.",
        ceo_body1: "Dong Hwang To San cultivates Korean ginseng, nature's finest elixir, in yellow clay soil for 6 years to showcase to the world. Our ginseng, grown with the far-infrared rays and germanium of Hwangto clay, has set the standard for Korean ginseng's efficacy and quality.",
        ceo_body2: "We lead the luxury ginseng brand that global travelers trust when visiting Korea, creating integrated wellness values through synergy with our subsidiary Ho Gan Dan. We will stride forward as a world-class health brand based on trust and honesty.",
        ceo_sign: "CEO Gildong Hong, Dong Hwang To San Co., Ltd.",

        // About Page
        about_page_title: "About Us",
        about_intro_subtitle: "WHO WE ARE",
        about_intro_title: "Designing a healthy future with tradition and care",
        about_intro_p: "Dong Hwang To San is Korea's leading wellness health enterprise, blending traditional Korean ginseng heritage with advanced hygienic processing technologies.",
        about_core_h3: "Core Competencies of Dong Hwang To San",
        about_core1_t: "100% Clean Hwangto Contract Cultivation",
        about_core1_d: "We insist on germanium-rich yellow clay soil to harvest ginseng with the highest concentration of saponins.",
        about_core2_t: "One-stop Hygienic Processing System",
        about_core2_d: "At our Goyang HQ R&D center, we strictly control the entire process from raw material testing to processing, concentration, and packaging.",
        about_core3_t: "Global Travelers Peace of Mind",
        about_core3_d: "Our Busan and Jeju branches offer one-stop multilingual guides, airport tax refunds, and worldwide secure air delivery.",
        about_hgd_title: "Subsidiary: Ho Gan Dan (護肝丹)",
        about_hgd_desc: "Ho Gan Dan, a specialized liver health brand, is an independent subsidiary established by receiving R&D and herbal processing technologies from Dong Hwang To San. It supplies highly functional health supplements combining Hovenia dulcis and red ginseng for modern people and travelers suffering from fatigue.",

        // Outlets Page
        outlets_page_title: "Our Outlets & Stores",
        outlets_intro_subtitle: "OUR WORLD-CLASS OUTLETS",
        outlets_intro: "Our direct stores offer the best accessibility and pleasant shopping environments, featuring customized shopping advisor services for international tourists.",
        outlets_guide_title: "Special Shopping Guide for Global Customers",
        outlets_step1_t: "1. Welcome Tea & Free Tasting",
        outlets_step1_d: "Upon arrival, enjoy complimentary tasting of premium red ginseng extracts and Ho Gan Dan to restore energy.",
        outlets_step2_t: "2. Customized Duty-Free Benefits",
        outlets_step2_d: "Present your passport for instant duty-free discounts or specialized tax refund receipts for airport terminals.",
        outlets_step3_t: "3. Global Shipping & Quarantine Support",
        outlets_step3_d: "We ship securely to your hotel or home address, providing quarantine stickers and certificates to guarantee hassle-free customs clearance.",

        // Efficacy Page
        eff_page_title: "Ginseng Efficacy",
        eff_subtitle: "HEALTH BENEFITS OF HWANGTO GINSENG",
        eff_title: "5 Core Health Benefits",
        eff_desc: "Scientific wellness benefits of Dong Hwang To San ginseng, cultivated in fertile yellow clay and containing dense saponin content.",
        eff_card1_title: "Immunity Boost",
        eff_card1_desc: "Promotes macrophages and T-cells to guard your body against virus and bacterial infections.",
        eff_card2_title: "Fatigue Recovery",
        eff_card2_desc: "Suppresses fatigue-inducing lactate build-up and enhances energy metabolism to restore vigor from jet lag and physical stress.",
        eff_card3_title: "Blood Circulation",
        eff_card3_desc: "Inhibits platelet aggregation to widen blood vessels, warm extremities, and secure cardiovascular wellness.",
        eff_card4_title: "Antioxidant & Anti-Aging",
        eff_card4_desc: "Neutralizes cell-damaging active oxygen species and stimulates cell rejuvenation to keep your body younger.",
        eff_card5_title: "Memory & Mind Calm",
        eff_card5_desc: "Regulates brain neurotransmitters to boost memory concentration, while reducing stress hormones to assist emotional stability.",
        eff_soil_title: "Why is Hwangto (Yellow Clay) Cultivation Superior?",
        eff_soil_p1: "Hwangto soil is a mineral-rich living incubator generating organic nutrients and far-infrared radiation. Our laboratory analyses reveal that 6-year-old ginseng grown in clean hwangto fields contains up to 25% more Ginsenosides (active saponins) than those grown in general soils.",
        eff_soil_p2: "The far-infrared heat waves gently stimulate the plant cells to enrich saponin synthesis, while enzymes in hwangto soil foster healthy root networks. This enables Dong Hwang To San products to offer superior absorption rates and faster efficacy.",

        // Partnership Page
        part_page_title: "VIP Benefits",
        part_subtitle: "GLOBAL PARTNERSHIP & EXCLUSIVE VIP BENEFITS",
        part_title: "Global Partnership & VIP Benefits",
        part_desc: "We partner with major international airlines, premium duty-free centers, and luxury hotels to deliver exclusive shopping benefits to overseas travelers.",
        part_card1_title: "Airline Special Mileage",
        part_card1_desc: "Korean Air (Skypass) and Asiana Airlines (Asiana Club) members accumulate 1.5 miles per 1,000 KRW spent at our outlets. VIP members receive lounge access vouchers.",
        part_card2_title: "Extra 5% Duty-Free Discount",
        part_card2_desc: "Show your Lotte, Shilla, or Shinsegae Duty-Free VIP coupons at checkout for an extra 5% off, stackable with the instant Tax Refund system.",
        part_card3_title: "Luxury Hotel Free Delivery",
        part_card3_desc: "For guests staying at partner luxury hotels in Jeju & Busan (Lotte, Shilla, Grand Hyatt, etc.), we provide free, same-day delivery of purchases directly to your hotel room lobby.",

        // Directions Page
        dir_page_title: "Directions & Booking",
        dir_intro_subtitle: "FIND US",
        dir_hq_title: "Headquarters & R&D Center (Goyang)",
        dir_hq_how: "Public Transit: 5 min walk from Jungbalsan Station (Line 3), Exit 1. Car: 2km from Ilsan IC off the Capital Region First Ring Expressway.",
        dir_busan_title: "Busan Branch",
        dir_busan_how: "Public Transit: 2 min walk from Jungang Station (Busan Line 1), Exit 10. Cruise: 5 min taxi ride from Busan Port International Passenger Terminal.",
        dir_jeju_title: "Jeju Branch",
        dir_jeju_how: "Public Transit: Take Bus 365 from Jeju Airport, get off at Eunnam-dong, 3 min walk. Shuttle: Free airport/hotel shuttles (Pre-booking required).",

        // Booking Form
        book_pane_title: "Store Visit & Purchase Reservation",
        book_pane_desc: "Pre-book your visit to receive personalized 1:1 guidance with zero queueing, plus free tasting sessions and an extra 5% VIP discount coupon.",
        book_b1: "Free premium red ginseng beverage tasting",
        book_b2: "5% off onsite discount coupon for all registered guests",
        book_b3: "1:1 multilingual personal shopping assistant",
        form_lbl_name: "Full Name (as in Passport)",
        form_lbl_lang: "Preferred Language",
        form_lbl_branch: "Target Branch to Visit",
        form_lbl_date: "Visit Date",
        form_lbl_count: "Number of Guests",
        form_lbl_contact: "Contact (Email / Messenger ID / Phone)",
        form_lbl_req: "Special Request / Inquiries",
        form_btn_submit: "Submit Reservation",
        form_opt_goyang: "Goyang HQ (Gyeonggi-do)",
        form_opt_busan: "Busan Branch",
        form_opt_jeju: "Jeju Branch",

        form_plh_name: "Enter your full name",
        form_plh_contact: "Email address or Line/WeChat ID",
        form_plh_req: "E.g., request hotel delivery, inquiry on specific products",

        // Footer
        foot_desc: "Preserving the legacy of traditional Korean ginseng, delivering the vital energy of nature and wellness solutions to tourists worldwide.",
        foot_title_links: "Quick Links",
        foot_title_addr: "HQ Corporate Info",
        foot_lbl_comp: "Company Name:",
        foot_lbl_ceo: "CEO:",
        foot_lbl_hq: "HQ Address:",
        foot_lbl_reg: "Business Reg No:",
        foot_ceo: "Gildong Hong",
        foot_copy_extra: "Subsidiary: Ho Gan Dan Co., Ltd.",

        modal_lbl_desc: "Key Features",
        modal_lbl_ingredients: "Ingredients",
        modal_lbl_how_to_use: "Directions & Storage",
        modal_lbl_customs: "Customs Notice for Travelers",
        modal_btn_book: "Pre-order this product",
        toast_success_title: "Reservation Successful",
        toast_success_msg: "Your visit reservation has been registered. An advisor will contact you via email/messenger shortly.",
        toast_error_title: "Registration Error",
        toast_error_msg: "Please check your inputs."
    },
    zh: {
        logo_name: "株式会社 东黄土山",
        logo_sub: "DONG HWANG TO SAN",
        nav_story: "总裁致辞",
        nav_about: "公司介绍",
        nav_branches: "免税商场",
        nav_products: "产品中心",
        nav_efficacy: "健康功效",
        nav_partnership: "合作特惠",
        nav_booking: "交通指南",
        nav_hogandan: "<i class='fa-solid fa-leaf'></i> 护肝丹商城",

        hero_badge: "KOREAN PREMIUM RED GINSENG",
        hero_title: "汲取黄土之灵气<br>孕育生命之仙草——高丽参",
        hero_desc: "在得天独厚的黄土沃土中，历经六年寒暑锤炼而成的至尊红参。为全球旅客奉上大韩民国健康的骄傲。",
        hero_cta_products: "浏览产品",
        hero_cta_booking: "到店访问预约",

        story_subtitle: "THE HERITAGE OF HWANGTO",
        story_title: "东黄土山品牌故事",
        story_h3: "为什么要在“黄土”中培育人参？",
        story_p1: "黄土（Yellow Clay）是蕴含无数微生物和远红外线的有生命力的泥土。东黄土山仅挑选富含锗和矿物质 of 纯净黄土带种植人参。在黄土中培育的人参根部更为紧实，其核心功效成分——人参皂苷的含量远高于普通人参。",
        story_p2: "东黄土山坚持100%合同种植与严苛的自主质量检测，只选用最高等级的人参。我们在京畿道高阳市的总部进行产品研发与生产，并在核心旅游地釜山和济州直营店真诚迎接海内外贵宾的到来。",
        story_stat1: "严选6年根",
        story_stat2: "黄土带种植",
        story_stat3: "直营旗舰店",
        story_badge_txt: "特级高丽人参认证",

        branches_subtitle: "OUR LOCATIONS",
        branches_title: "东黄土山网点指南",
        branch_hq: "总部 (HQ)",
        branch_store: "直营分店",
        branch_goyang_name: "京畿道高阳总部",
        branch_goyang_desc: "进行产品企划、加工研究及经营管理的东黄土山核心基地。",
        branch_goyang_addr: "京畿道高阳市一山东区中央路 123",
        branch_goyang_time: "09:00 - 18:00 (周末休息)",
        branch_goyang_spec: "可申请参观研发中心，大宗采购咨询",

        branch_busan_name: "釜山分店",
        branch_busan_desc: "临近釜山游轮港口和国际机场，为访问韩国南部海岸的外国游客提供最优质的免税购物体验。",
        branch_busan_addr: "釜山广域市中区中央大路 45",
        branch_busan_time: "09:00 - 20:00 (全年无休)",
        branch_busan_spec: "现场即时退税、免费试饮、中英日文专业翻译导购",

        branch_jeju_name: "济州分店",
        branch_jeju_desc: "位于济州国际机场附近，为到访美丽济州岛的全球游客准备了高端精美伴手礼礼盒。",
        branch_jeju_addr: "济州特别自治道济州市老莲路 88",
        branch_jeju_time: "09:00 - 21:00 (全年无休)",
        branch_jeju_spec: "机场免费接送、支持国际信用卡、配送至酒店服务",

        products_subtitle: "OUR PRODUCTS",
        products_title: "人参 & 红参代表产品",
        prod_view_detail: "查看详情",
        prod_cat_extract: "高浓缩红参精",
        prod_title_extract: "东黄土山6年根黄土红参精",
        prod_cat_roots: "名贵天参",
        prod_title_roots: "天参等级黄土干参 (木盒装)",
        prod_cat_slices: "便捷健康零食",
        prod_title_slices: "东黄土山蜂蜜红参切片",

        hgd_badge: "护肝丹",
        hgd_subtitle: "DONG HWANG TO SAN SUBSIDIARY",
        hgd_title: "子公司品牌: 护肝丹 (護肝丹)",
        hgd_intro: "专为旅行疲劳与现代人生活不规律者研制的保肝良药。",
        hgd_body: "依托东黄土山专业的草本配方技术，子公司品牌“护肝丹”将韩国传统药用植物拐枣（枳椇子）的高浓缩提取物与严选的6年根红参科学配比而成。能为因频繁应酬、熬夜疲劳及倒时差而身心沉重的海外游客迅速恢复满溢活力。",
        hgd_f1_t: "保护肝细胞及解毒",
        hgd_f1_d: "拐枣的活性成分促进肝脏解毒，快速缓解酒精带来的宿醉和头痛。",
        hgd_f2_t: "高效抗疲劳",
        hgd_f2_d: "红参中的人参皂苷促进新陈代谢，消除体内长期积累的慢性疲劳。",
        hgd_price_lbl: "护肝丹特级装 (120粒 / 2个月量)",
        hgd_cta: "护肝丹预订/购买咨询",

        services_subtitle: "TOURIST SERVICES",
        services_title: "海外游客专享安心服务",
        serv_tax_title: "即时免税退税 (Tax Refund)",
        serv_tax_desc: "在釜山和济州分店享受当场即时免税，或由专人协助在机场快速办理退税手续。",
        serv_ship_title: "安全便捷的国际空运直邮",
        serv_ship_desc: "无需手提沉重的礼盒旅行，我们通过 EMS/DHL 帮您安全快捷地直邮至您的本国住址。",
        serv_lang_title: "多语种导购及贴心服务",
        serv_lang_desc: "各分店常驻英文、中文、日文专业导购经理，为您提供无障碍的沟通与贴心服务。",
        serv_customs_title: "符合多国海关通关规范",
        serv_customs_desc: "提供符合各国检疫要求的官方检验检疫证书，并采用规范安全的出口防伪包装。",

        // CEO Page
        ceo_page_title: "总裁致辞",
        ceo_intro_subtitle: "MESSAGE FROM DONG HWANG TO SAN CEO",
        ceo_greeting: "欢迎访问东黄土山官方网站的各位国内外宾客。",
        ceo_body1: "我们东黄土山在黄土田中精心培育被誉为大自然最佳仙草的高丽参长达六年，并向全球推介。在富含远红外线和锗元素的黄土中成长起来的东黄土山高丽参，在功效和品质上都树立了韩国人参的行业标准。",
        ceo_body2: "我们致力于引领全球旅客访问韩国时能够信赖并购买的高端品牌，通过与子公司护肝丹的协同效应，创造了关爱现代人疲惫身心的综合健康价值。我们将以信任与诚实为基石，向着世界一流的健康品牌迈进。",
        ceo_sign: "株式会社 东黄土山 代表理事 洪 吉 童",

        // About Page
        about_page_title: "公司介绍",
        about_intro_subtitle: "WHO WE ARE",
        about_intro_title: "用传统与诚意设计健康的未来",
        about_intro_p: "东黄土山是一家代表大韩民国的健康企业，将传承数千年的高丽参优秀品质与先进的卫生加工技术相结合，向全球推广。",
        about_core_h3: "东黄土山的核心竞争力",
        about_core1_t: "100% 绿色黄土契约种植",
        about_core1_d: "坚持选用富含锗元素和有益菌的纯净黄土土壤，种植皂苷含量最丰富的高品质人参。",
        about_core2_t: "一站式卫生加工系统",
        about_core2_d: "在京畿道高阳市总部的研发中心，严格控制从原料检验、红参加工、浓缩到包装的全过程。",
        about_core3_t: "全球游客安心服务",
        about_core3_d: "在釜山和济州直营店，提供专业的多语种翻译、免税退税以及安全的国际航空直邮（EMS/DHL）一站式服务。",
        about_hgd_title: "子公司介绍: 护肝丹 (護肝丹)",
        about_hgd_desc: "保肝专家品牌“护肝丹”是引进东黄土山的中草药加工技术和研发科技而设立 of 独立子公司。专为饱受频繁应酬和疲劳困扰的现代人，以及因时差和长途旅行而疲惫不堪的海外游客，提供将枳椇子（拐枣）浓缩精华与红参黄金配比而成的高性能健康食品。",

        // Outlets Page
        outlets_page_title: "免税商场指南",
        outlets_intro_subtitle: "OUR WORLD-CLASS OUTLETS",
        outlets_intro: "东黄土山直营免税店拥有极佳的地理位置与舒适的购物环境，并配有专为外国游客服务的专属多语种导购系统。",
        outlets_guide_title: "外国顾客专属购物指南",
        outlets_step1_t: "1. 迎宾茶与免费试饮",
        outlets_step1_d: "顾客到店时，可免费试饮具有卓越抗疲劳功效的特级红参浓缩液及护肝丹。",
        outlets_step2_t: "2. 专属免税退税福利",
        outlets_step2_d: "结账时出示护照，可享受当场即时免税扣除，或为您开具可在机场快速办理退税的专属单据。",
        outlets_step3_t: "3. 国际直邮与通关保证",
        outlets_step3_d: "为您安全配送至家中或酒店，并贴有符合入境国海关检疫标准的检疫合格标签并使用专用防潮箱包装。",

        // Efficacy Page
        eff_page_title: "健康功效",
        eff_subtitle: "HEALTH BENEFITS OF HWANGTO GINSENG",
        eff_title: "东黄土山高丽参的五大代表功效",
        eff_desc: "在肥沃的黄土土壤中培育，吸取丰富锗元素与浓缩天然能量的东黄土山高丽参，为您带来科学验证的身体健康改善效果。",
        eff_card1_title: "增强免疫力",
        eff_card1_desc: "促进体内巨噬细胞和T细胞的生成，帮助身体抵御病毒和细菌入侵，强力构建第一道免疫防线。",
        eff_card2_title: "高效缓解疲劳与补充精力",
        eff_card2_desc: "强效抑制乳酸等疲劳因子的堆积，促进新陈代谢，让您在长时间旅行、劳累应酬后迅速恢复充沛活力。",
        eff_card3_title: "改善血液循环与畏寒症状",
        eff_card3_desc: "抑制血小板凝聚以疏通血管，增加血液含氧量，有效缓解手脚冰凉，保障血管与心脏健康。",
        eff_card4_title: "抗氧化与防衰老",
        eff_card4_desc: "中和导致细胞老化损伤的游离自由基，促进皮肤胶原蛋白生成，重新激发细胞活性以保持年轻体态。",
        eff_card5_title: "提高记忆力与安神减压",
        eff_card5_desc: "调节脑细胞神经递质，提高专注力与认知力，同时降低压力荷尔蒙分泌，有助于调节情绪、安神睡眠。",
        eff_soil_title: "为什么在黄土地培育的高丽参效果更好？",
        eff_soil_p1: "黄土因富含活性微生物和远红外线，被誉为“活性有机培育箱”。东黄土山研发中心的检测报告显示，在纯净黄土田中培育出的6年根高丽参，其核心药用成分——人参皂苷的含量比在普通沙土或普通农田培育的高出平均25%以上。",
        eff_soil_p2: "黄土散发的天然远红外温热能量能深层渗透参根，促进活性皂苷的合成。这也使得东黄土山高丽参的活性更容易被人体吸收利用，保证您体验到更快更显著的滋补成效。",

        // Partnership Page
        part_page_title: "合作特惠",
        part_subtitle: "GLOBAL PARTNERSHIP & EXCLUSIVE VIP BENEFITS",
        part_title: "全球战略合作与VIP特惠",
        part_desc: "东黄土山通过与全球知名航空公司、高端免税店及豪华酒店开展合作，为海外旅客量身定制尊享的VIP购物特权。",
        part_card1_title: "航空尊享里程积分",
        part_card1_desc: "大韩航空（Skypass）及韩亚航空（Asiana Club）会员在直营店消费，每1000韩元即可累积1.5里程，VIP会员可获赠机场贵宾厅入场券。",
        part_card2_title: "免税店VIP折上折",
        part_card2_desc: "在店内收银台出示乐天、新罗、新世界免税店的VIP折扣券或会员标识，即可享受全场商品额外5%优惠，可与即时退税（Tax Refund）叠加使用。",
        part_card3_title: "高端酒店免费配送",
        part_card3_desc: "面向釜山及济州地区合作五星级酒店（乐天、新罗、君悦等）的住客，提供购物当日由专车免费安全配送至酒店前台的贴心服务。",

        // Directions Page
        dir_page_title: "交通指南与到店预约",
        dir_intro_subtitle: "FIND US",
        dir_hq_title: "总部及研发中心 (京畿道高阳市)",
        dir_hq_how: "公共交通：地铁3号线鼎钵山站1号出口步行5分钟。自驾：从首都圈第一环线高速公路一山IC驶出后往中央路方向行驶2公里。",
        dir_busan_title: "釜山直营店",
        dir_busan_how: "公共交通：釜山地铁1号线中央站10号出口步行2分钟。游轮码头：从釜山港国际旅客航站楼搭乘出租车5分钟即可到达。",
        dir_jeju_title: "济州直营店",
        dir_jeju_how: "公共交通：在济州机场搭乘365路公交车，在银南洞站下车步行3分钟。机场大巴：提供往返机场及附近酒店的免费接送班车（需提前预约）。",

        // Booking Form
        book_pane_title: "到店访问及预购预约",
        book_pane_desc: "提前预约到店，即可享受尊贵 1:1 导购服务，无需排队，并获赠免费试饮机会及VIP专属5%现场折上折优惠券。",
        book_b1: "到店免费试饮特制红参迎宾饮品",
        book_b2: "为所有预约到店顾客发放现场5%折上折优惠券",
        book_b3: "外语导购 1:1 贴心购物协助",
        form_lbl_name: "姓名 (Full Name)",
        form_lbl_lang: "首选沟通语言 (Preferred Language)",
        form_lbl_branch: "计划访问分店 (Target Branch)",
        form_lbl_date: "计划访问日期 (Visit Date)",
        form_lbl_count: "随行人数 (Number of Guests)",
        form_lbl_contact: "联系方式 (邮箱/微信ID/电话号码)",
        form_lbl_req: "特殊要求或咨询事项 (Special Request)",
        form_btn_submit: "提交预约登记",
        form_opt_goyang: "京畿道高阳总部 (HQ)",
        form_opt_busan: "釜山分店 (Busan)",
        form_opt_jeju: "济州分店 (Jeju)",

        form_plh_name: "请输入您护照上的英文或中文姓名",
        form_plh_contact: "电子邮箱地址或微信/Line ID",
        form_plh_req: "例如：希望配送至酒店、咨询特定商品库存等",

        // Footer
        foot_desc: "秉承韩国传统高丽参的骄傲，致力于为全球旅客传递自然的生命力与健康解决方案。",
        foot_title_links: "快捷导航",
        foot_title_addr: "总部公司信息",
        foot_lbl_comp: "公司名称:",
        foot_lbl_ceo: "法人代表:",
        foot_lbl_hq: "总部地址:",
        foot_lbl_reg: "营业执照号:",
        foot_ceo: "洪吉童",
        foot_copy_extra: "子公司: 株式会社 护肝丹",

        modal_lbl_desc: "产品特征",
        modal_lbl_ingredients: "主要成分",
        modal_lbl_how_to_use: "服用及保存方法",
        modal_lbl_customs: "游客通关及携带须知",
        modal_btn_book: "预约购买此产品",
        toast_success_title: "预约提交成功",
        toast_success_msg: "您的访问预约已登记成功。我们的服务人员将尽快通过邮箱或即时软件与您联系。",
        toast_error_title: "提交失败",
        toast_error_msg: "请检查您的输入项是否正确。"
    },
    ja: {
        logo_name: "株式会社 東黄土山",
        logo_sub: "DONG HWANG TO SAN",
        nav_story: "代表挨拶",
        nav_about: "会社紹介",
        nav_branches: "免税店舗",
        nav_products: "商品案内",
        nav_efficacy: "健康効能",
        nav_partnership: "提携特典",
        nav_booking: "アクセス",
        nav_hogandan: "<i class='fa-solid fa-leaf'></i> ホガンダンショップ",

        hero_badge: "KOREAN PREMIUM RED GINSENG",
        hero_title: "黄土의 기운으로 키워낸<br>생명의 영약, 고려인삼",
        hero_desc: "Premium red ginseng perfected by enduring 6 years in blessedly fertile yellow clay soil. Gifting the pride of Korea's health to travelers worldwide.",
        hero_cta_products: "商品を見る",
        hero_cta_booking: "来店予約はこちら",

        story_subtitle: "THE HERITAGE OF HWANGTO",
        story_title: "東黄土山ストーリー",
        story_h3: "なぜ「黄土」で育った人参なのか？",
        story_p1: "黄土（Yellow Clay）は、数多くの微生物と遠赤外線を秘めた「生きている土」です。東黄土山は、ゲルマニウムと栄養分が豊富なクリーンな黄土地帯だけを厳選して人参를재배합니다.黄土で育った高麗人参은뿌리가더욱견고하고,인삼의핵심효능성분인진세노사이드(사포닌)함량이일반인삼에비해월등히높습니다.",
        story_p2: "当社는100%계약재배와철저한품질관리를통해,최고등급의인삼만을고집합니다.京畿道고양시본점에서제품의연구·생산을하고,주요관광거점인부산과제주직영점에서해외고객을정성껏맞이하고있습니다.",
        story_stat1: "厳選6年根",
        story_stat2: "黄土栽培",
        story_stat3: "国内직영점",
        story_badge_txt: "特級高麗人参認証",

        branches_subtitle: "OUR LOCATIONS",
        branches_title: "東黄土山 店舗一覧",
        branch_hq: "本店 (HQ)",
        branch_store: "直営店舗",
        branch_goyang_name: "京畿道 高陽本店",
        branch_goyang_desc: "제품의기획,가공연구및경영관리를통괄하는동황토산의심장부입니다.",
        branch_goyang_addr: "京畿道고양시 일산동구 중앙로 123",
        branch_goyang_time: "09:00 - 18:00 (土日祝休み)",
        branch_goyang_spec: "R&D센터의見学가능,대량구매의상담",

        branch_busan_name: "釜山支店",
        branch_busan_desc: "부산크루즈항구나국제공항에가까워,남해안을방문하는외국인관광객에게최고품질의면세쇼핑을제공합니다.",
        branch_busan_addr: "釜산광역시 중구 중앙대로 45",
        branch_busan_time: "09:00 - 20:00 (年中無休)",
        branch_busan_spec: "即時免税還付、試飲サービス、日・中・英語による通訳サポート",

        branch_jeju_name: "済州支店",
        branch_jeju_desc: "아름다운리조트지·제주도를방문하는세계의관광객을위해공항가까이에위치하고,고급스러운기프트패키지를준비하고있습니다.",
        branch_jeju_addr: "제주특별자치도 제주시 노연로 88",
        branch_jeju_time: "09:00 - 21:00 (年中無休)",
        branch_jeju_spec: "공항무료셔틀,각종신용카드이용가능,호텔직송배송",

        products_subtitle: "OUR PRODUCTS",
        products_title: "高麗人参 & 紅参の代表商品",
        prod_view_detail: "詳細を見る",
        prod_cat_extract: "高濃縮紅参エキス",
        prod_title_extract: "東黄土山 6년근 黄土紅参精",
        prod_cat_roots: "名品 根人参",
        prod_title_roots: "天参等級 黄土乾参 (木箱入り)",
        prod_cat_slices: "手軽なヘル시스낵",
        prod_title_slices: "東黄土山 蜂蜜紅参切片",

        hgd_badge: "ホガンダン",
        hgd_subtitle: "DONG HWANG TO SAN SUBSIDIARY",
        hgd_title: "子회사브랜드: 호간단 (護肝丹)",
        hgd_intro: "여행의피로와현대인의불규칙한생활로지친간을보호하는최적의레시피.",
        hgd_body: "동황토산의전통허브配合기술에기반하여탄생한자회사브랜드「호간단(護肝丹)」은,한국전통의약용식물인헛개나무열매고농축추출물과,엄선된6년근홍삼을결합하여완성되었습니다.잦은음주,누적된피로,시차적응으로몸이무겁게느껴지시는해외관광객에활력을가져다줍니다.",
        hgd_f1_t: "肝細胞의보호와데톡스",
        hgd_f1_d: "헛개나무의유효성분이간해독기능을서포트하여,숙취를속히해소합니다.",
        hgd_f2_t: "強力한피로회복효과",
        hgd_f2_d: "홍삼의사포닌이신진대사를촉진하여,몸에축적된만성피로를해소합니다.",
        hgd_price_lbl: "호간단 프리미엄 (120캡슐 / 2달분)",
        hgd_cta: "호간단의ご予約/お問い合わせ",

        services_subtitle: "TOURIST SERVICES",
        services_title: "外国人旅行者向け特別安心サービス",
        serv_tax_title: "즉시면세환급 (Tax Refund)",
        serv_tax_desc: "釜山・済州店では店舗で直接免税를적용하거나,공항에서의세금환급절차를신속하게서포트합니다.",
        serv_ship_title: "安心의국제항공직송서비스",
        serv_ship_desc: "무거운선물세트를가지고다닐필요가없습니다.EMS나DHL을이용하여자택까지안전하게배송합니다.",
        serv_lang_title: "전임통역사에의한서포트",
        serv_lang_desc: "각점포에일본어,중국어,영어의전임어드바이저가상주하여언어의걱정없이쇼핑을즐길수있습니다.",
        serv_customs_title: "각국통관기준에완전적합",
        serv_customs_desc: "각국의식품·동식물검역에대응하는공식증명서발행이나,검역통과용의안전한포장을제공합니다.",

        // CEO Page
        ceo_page_title: "代表挨拶",
        ceo_intro_subtitle: "MESSAGE FROM DONG HWANG TO SAN CEO",
        ceo_greeting: "東黄土山の公式ホームページをご覧いただき、誠にありがとうございます。",
        ceo_body1: "私たち東黄土山は、自然が与えてくれた最高の健康의선물인고려인삼을,게르마늄이풍부한황토밭에서6년간진심을담아재배하여세계로보내고있습니다.황토의원적외선과대지의양분으로자란동황토산의인삼은,그효능과품질에있어서한국인삼의탑기준으로인정받아왔습니다.",
        ceo_body2: "특히세계의많은관광객들이한국을찾아주실때신뢰하고구매할수있는프리미엄브랜드로서,자회사호간단과의시너지를통해현대인의지친몸과간을케어하는종합적인웰니스가치를창출합니다.신뢰와성실을가슴에,세계유수의헬스케어브랜드로서성장해가겠습니다.",
        ceo_sign: "株式会社 東黄土山 代表取締役 洪 吉 童",

        // About Page
        about_page_title: "会社紹介",
        about_intro_subtitle: "WHO WE ARE",
        about_intro_title: "伝統と誠実さで健康な未来を設計します",
        about_intro_p: "東黄土山은,수천년에걸쳐전해내려온고려인삼의훌륭함을최첨단의위생가공기술과조합하여,세계로널리알리고있는대한민국의대표적인웰니스건강기업입니다.",
        about_core_h3: "東黄土山의핵심적인강점",
        about_core1_t: "100% 클린황토계약재배",
        about_core1_d: "게르마늄과유익한미생물이살아있는클린한황토토양에만고집하여,사포닌이가장풍부한최고품질의인삼을재배합니다.",
        about_core2_t: "원스톱위생가공시스템",
        about_core2_d: "京畿道고양시의본점R&D센터에서원료의검사부터홍삼의가공,농축,포장에이르는전공정을엄격하게관리·통제하고있습니다.",
        about_core3_t: "글로벌관광객안심서비스",
        about_core3_d: "부산및제주점에서전문적인다국어통역,면세절차,안전한국제항공배송(EMS/DHL)서비스를원스톱으로제공합니다.",
        about_hgd_title: "子会社紹介: ホガンダン (護肝丹)",
        about_hgd_desc: "간건강전문브랜드「호간단(護肝丹)」은,동황토산의허브가공기술과R&D노하우의이전을받아설립된독립자회사입니다.접대나불규칙한생활로피로에노출되어있는현대인이나,시차적응이나장시간의이동으로몸이피곤한해외여행자를위해켄포나시열매추출물과홍삼을과학적으로배합한고기능건강식품을공급하고있습니다.",

        // Outlets Page
        outlets_page_title: "免税店舗のご案内",
        outlets_intro_subtitle: "OUR WORLD-CLASS OUTLETS",
        outlets_intro: "동황토산의직영면세점은최고의접근성과쾌적한쇼핑환경을제공하며,외국인관광객을위한퍼스널언어어시스턴트를구비하고있습니다.",
        outlets_guide_title: "外国人のお客様向け特別ガイド",
        outlets_step1_t: "1. ウェルカムティー&無料試飲",
        outlets_step1_d: "점포에오실때,피로회복에뛰어난프리미엄홍삼에키스나호간단의캡슐을무료로체험하실수있습니다.",
        outlets_step2_t: "2. カスタム免税・タックスリファンド",
        outlets_step2_d: "여권을제시해주시면,점포에서의즉시면세또는공항에서빠르게환급을받을수있는전용서류를발행해드립니다.",
        outlets_step3_t: "3. 国際直配および通関保証",
        outlets_step3_d: "자택이나체류하시는호텔로안전하게배송하고,각국세관의규제를클리어하는검역합격씰및전용패키지로포장합니다.",

        // Efficacy Page - [NEW]
        eff_page_title: "健康効능",
        eff_subtitle: "HEALTH BENEFITS OF HWANGTO GINSENG",
        eff_title: "東黄土山高麗人参の5大代表効能",
        eff_desc: "肥沃な黄土の土壌でゲルマニウムと濃縮された天然エネルギーをたっぷりと吸い上げて育った東黄土山の人参がもたらす,科学的に検証された身体の健康改善効果です.",
        eff_card1_title: "免疫力増進および予防",
        eff_card1_desc: "体内のマクロファージやT細胞の生成を促進し,細菌やウイルスから体を守り,根本的な免疫システムを強力に構築します.",
        eff_card2_title: "強力な疲労回復&活力",
        eff_card2_desc: "疲労原因物質である乳酸の蓄積を強力に抑え,新陳代謝を促進することで,長時間の旅行や慢性疲労から素早く活力を取り戻します.",
        eff_card3_title: "血行改善および冷え性緩和",
        eff_card3_desc: "血管収縮を誘발하는혈소판응집을억제하고산소혈류량을증대하여손발차가움증상을완화하고원활한혈관건강을도모합니다.",
        eff_card4_title: "抗酸化作用&老化防止",
        eff_card4_desc: "細胞の破壊や老化を促進する活性酸素を効果的に中和し,皮膚のコラーゲン生成を促すなど,細胞の若々しさを保ちます.",
        eff_card5_title: "記憶力改善&集中力向上",
        eff_card5_desc: "脳細胞の活性物質を調節し,認知能力を向上させるとともに,ストレスホルモンの分泌を抑えて心身の安定と認知症予防をサポートします.",
        eff_soil_title: "なぜ黄土(おうと)で育った高麗人参が特別なのでしょうか？",
        eff_soil_p1: "黄土は「生きている有機物の培養器」と呼ばれるほど,微生物や遠赤外線エネルギーの供給力に優れた大自然の宝庫です.分析の結果,清浄な黄土畑で6年間栽培された水参は,砂地や一般的な農地で育った人参に比べ,核心成分であるジンセノサイド(サポニン)の含有量が平均25%以上も高く抽出されました.",
        eff_soil_p2: "黄土から自然発生する豊富な遠赤外線の温熱エネルギーは,人参の細根まで深く浸透して栄養成分の蓄積を活性化します.これにより東黄土山の高麗人参は優れた吸収率を誇り,より早く確実な効果を実感いただけます.",

        // Partnership Page - [NEW]
        part_page_title: "提携特典",
        part_subtitle: "GLOBAL PARTNERSHIP & EXCLUSIVE VIP BENEFITS",
        part_title: "グローバルパートナーシップ&VIP特典",
        part_desc: "東黄土山は世界中の主要航空会社,高級免税店,およびラグジュアリーホテルとの提携を通じ,外国人旅行者の方々だけのための特別なVIP特典を提供しています.",
        part_card1_title: "航空会社のマイレージ特別積算",
        part_card1_desc: "大韓航空(Skypass)およびアシアナ航空(Asiana Club)の会員カードをお持ちのお客様は,当店でのご購入金額1,000ウォンにつき1.5マイルを積算いただけます.また,VIP会員のお客様には提携ラウンジ利用券を進呈いたします.",
        part_card2_title: "免税店での5%追加優待割引",
        part_card2_desc: "ロッテ,新羅,新世界免税店のVIP割引クーポンまたはメンバーシップをレジでご提示いただくと,全商品がさらに5%割引され,即時免税(Tax Refund)システムとの二重適用も可能です.",
        part_card3_title: "特急ホテルVIP無料配送",
        part_card3_desc: "釜山および済州エリアの提携ホテル(ロッテホテル,新羅ホテル,グランドハイアットなど)にご宿泊のお客様には,ご購入品をホテルまで当日中に無料でお届けいたします.",

        // Directions Page
        dir_page_title: "アクセスと来店予約",
        dir_intro_subtitle: "FIND US",
        dir_hq_title: "本店およびR&Dセンター (京畿道高양시)",
        dir_hq_how: "대중교통: 지하철 3호선 정발산역 1번 출구 도보 5분. 자가용: 수도권제1순환고속도로 일산IC 진출 후 중앙로 방면 2km.",
        dir_busan_title: "釜山支店",
        dir_busan_how: "대중교통: 부산지하철 1호선 중앙역 10번 출구 도보 2분. 크루즈 터미널: 부산항국제여객터미널에서 택시로 5분.",
        dir_jeju_title: "Jeju Branch",
        dir_jeju_how: "대중교통: 제주공항에서 365번 버스 탑승 후 은남동 정류장 하차 도보 3분. 공항 서비스: 공항 및 인근 호텔 셔틀버스 운행 (사전 예약 필수).",

        // Booking Form
        book_pane_title: "来店および購入予約",
        book_pane_desc: "事前予約をしてご来店いただくと、並ぶことなく1:1でご案内。さらに無料試飲と5%のVIP現地割引クーポンを差し上げます。",
        book_b1: "ご来店時に特製紅参ドリンクの無料試飲",
        book_b2: "来店予約者全員に現地で使える5%割引クーポン進呈",
        book_b3: "日本語アドバイザーによる1:1のお買い物アシスト",
        form_lbl_name: "お名前 (Full Name)",
        form_lbl_lang: "対応希望言語 (Preferred Language)",
        form_lbl_branch: "来店予定の店舗 (Target Branch)",
        form_lbl_date: "来店予定日 (Visit Date)",
        form_lbl_count: "来店人数 (Number of Guests)",
        form_lbl_contact: "連絡先 (メール/メッセンジャーID/電話番号)",
        form_lbl_req: "ご要望・お問い合わせ事項 (Special Request)",
        form_btn_submit: "予約를 신청하기",
        form_opt_goyang: "京畿道 高陽本店 (HQ)",
        form_opt_busan: "釜山支店 (Busan)",
        form_opt_jeju: "済州支店 (Jeju)",

        form_plh_name: "パスポートと同じスペルで入力してください",
        form_plh_contact: "メールアドレスまたはLine/WeChat ID",
        form_plh_req: "（例：ホテルへの配送希望、特定商品の在庫確認など）",

        // Footer
        foot_desc: "한국의전통고려인삼의자부심을계승하며,전세계관광객들께자연의생명력과웰빙솔루션을전달합니다.",
        foot_title_links: "クイックリンク",
        foot_title_addr: "会社情報",
        foot_lbl_comp: "商号:",
        foot_lbl_ceo: "代表者:",
        foot_lbl_hq: "本社所在地:",
        foot_lbl_reg: "事業者登録番号:",
        foot_ceo: "홍길동",
        foot_copy_extra: "子会社: 株式会社 ホガンダン",

        modal_lbl_desc: "商品の特徴",
        modal_lbl_ingredients: "成分情報",
        modal_lbl_how_to_use: "お召し上がり方・保管方法",
        modal_lbl_customs: "旅行者向けの通関時の注意事項",
        modal_btn_book: "この商品を予約する",
        toast_success_title: "予約完了",
        toast_success_msg: "来店予約이 완료되었습니다. 담당자가 안내 메일 또는 연락을 주실 것입니다.",
        toast_error_title: "エラー",
        toast_error_msg: "입력내용을 모두 다시 확인하십시오."
    }
};

// --- 2. Product Information Database (Multilingual) ---
const productDetails = {
    extract: {
        img: "assets/extract.png",
        ko: {
            category: "고농축 홍삼정",
            title: "동황토산 6년근 황토홍삼정",
            desc: "게르마늄이 풍부한 황토 지대에서 자란 6년근 수삼만을 엄선하여 저온 농축 기법으로 추출한 프리미엄 홍삼정입니다. 체력 증진, 면역력 강화, 육체 피로 개선에 탁월합니다.",
            ingredients: "6년근 홍삼 농축액 100% (고형분 65% 이상, 진세노사이드 Rg1+Rb1+Rg3 = 12.0mg/g, 국산)",
            usage: "성인 기준 1일 1회, 온수 또는 냉수에 타서 복용하거나 동봉된 전용 나무 스푼으로 1g씩 직접 섭취하십시오.",
            customs: "해당 제품은 고농축 액상 제제로 공식 검역 및 가공 등록이 완료되어 여행자 기내 반입(수하물 포함) 시 여권당 최대 10개까지 별도 신고 없이 입국 국가 반입이 가능합니다."
        },
        en: {
            category: "Concentrated Red Ginseng Extract",
            title: "Dong Hwang To San 6-Year Red Ginseng Extract",
            desc: "Premium red ginseng extract brewed at low temperatures, selecting only the finest 6-year-old roots grown in germanium-rich yellow clay soil. Excellent for immune support, blood flow improvement, and boosting physical endurance.",
            ingredients: "100% 6-Year Korean Red Ginseng Extract (Solids 65% or more, Ginsenoside Rg1+Rb1+Rg3 = 12.0mg/g, Korean origin)",
            usage: "Take 1g once daily, either directly using the included wooden spoon or stirred into warm/cold water.",
            customs: "As a fully processed liquid tonic, this is approved by quarantine authorities. Travelers can bring up to 10 jars per passport into most countries without special declaration."
        },
        zh: {
            category: "高浓缩红参精",
            title: "东黄土山6年根黄土红参精",
            desc: "选用富含锗元素的黄土地带培育的特级6年根新鲜人参，采用低温浓缩工艺提炼而成的尊贵红参精。对于提升免疫力、改善血液循环、缓解肉体疲劳有极佳效果。",
            ingredients: "100% 6年根高丽红参浓缩液 (固形物 65%以上, 人参皂苷 Rg1+Rb1+Rg3 = 12.0毫克/克, 韩国产)",
            usage: "每日1次，每次1克（请使用内附木勺），可直接温服或兑水冲饮。",
            customs: "本产品属于深加工注册食品，已通过全面检疫。旅客随身携带或托运进入中国、东南亚、美加等国时，每本护照限额内（通常最多10瓶）免申报通关。"
        },
        ja: {
            category: "高濃縮紅参エキス",
            title: "東黄土山 6年根 黄土紅参精",
            desc: "ゲルマニウムが豊富な黄土地帯で育った6年根水参だけを厳選し、低温濃縮工法で抽出したプレミアム紅参精です。体力増進、免疫力強化、血行改善、疲労回復에유수합니다.",
            ingredients: "6年根 紅参濃縮液 100% (固形分65%以上、ジンセノサイド Rg1+Rb1+Rg3=12.0mg/g、韓国産)",
            usage: "大人1日1回、1回1g(同封のスプーンを使用)를직접 섭취하시거나, 온수에 섞어서 드십시오.",
            customs: "이 제품은 정식 가공된 식품으로, 일본 입국 시 공항 검역의 제약 없이 개인 선물용으로 면세 범위 내에서 자유롭게 반입이 가능합니다."
        }
    },
    roots: {
        img: "assets/roots.png",
        ko: {
            category: "명품 뿌리삼",
            title: "천삼 등급 황토 건삼 (목함)",
            desc: "황토 밭에서 수확한 인삼 중 외형이 온전하고 사포닌 조직의 밀도가 가장 치밀한 '천삼(Heaven Grade)' 등급만을 자연 건조시켜 전통 오동나무 함에 포장한 명품 뿌리삼입니다. 귀한 분을 위한 최고의 선물입니다.",
            ingredients: "100% 6년근 고려인삼 (건조 가공, 국산)",
            usage: "온수에 달여서 홍삼 차 형태로 섭취하시거나, 얇게 썰어 꿀에 재워 드십시오.",
            customs: "천삼 뿌리삼은 건조 가공된 제품으로, 여행 국가 입국 시 수하물 검역에서 가공 완료 표기 및 영문 보증서를 제시하시면 문제없이 통관할 수 있도록 영문 보증서를 동봉해 드립니다."
        },
        en: {
            category: "Heaven Grade Dried Roots",
            title: "Heaven-Grade Dried Hwangto Ginseng (Wooden Box)",
            desc: "The absolute highest quality 'Heaven-Grade' roots, boasting flawless outer appearance and dense saponin tissue, naturally dried and presented in a traditional paulownia wooden box. A prestigious gift for valued guests.",
            ingredients: "100% 6-Year Korean Red Ginseng (Dried and Cured, Korean origin)",
            usage: "Decoct in hot water to drink as red ginseng tea, or slice thinly and preserve in honey for direct consumption.",
            customs: "These are cured, dried roots. To ensure smooth custom clearance, we accompany each box with an official English guarantee card and quarantine certification."
        },
        zh: {
            category: "名贵天参",
            title: "天参等级黄土干参 (木盒装)",
            desc: "在黄土田中收获的人参中，仅挑选外观完美无瑕、核心皂苷组织密度最高的“天参”等级人参，经自然干燥后，盛装于传统梧桐木盒中的国礼级根参。是馈赠贵宾的至尊礼品。",
            ingredients: "100% 6年根高丽红参 (干燥加工, 韩国产)",
            usage: "可放入养生壶加水慢炖成参茶饮用，或切薄片浸泡蜂蜜直接含服。",
            customs: "本产品为熟化干燥根参。为方便通关，我们为您免费提供英文品质保证书及官方检疫书，满足旅客入境海关检疫规定。"
        },
        ja: {
            category: "名品 根人参",
            title: "天参等級 黄土乾参 (木箱入り)",
            desc: "황토밭에서 수확한 인삼 중 외형이 온전하고 사포닌 조직이 가장 치밀한 '천삼' 등급을 자연 건조시켜 만든 전통 오동나무 함에 들어간 제품입니다.",
            ingredients: "100% 6년근 고려인삼 (건조 가공, 국산)",
            usage: "온수에 달여서 홍삼차 형태로 마시거나, 얇게 썰어 꿀에 절여서 섭취해 주십시오.",
            customs: "乾燥処理済みの高麗人参です.通関をスムーズにするために品質保証書と証明タグを同封しております.検疫の際にご提示いただければ日本国内へ持ち込めます."
        }
    },
    slices: {
        img: "assets/roots.png", // reusing roots image with CSS hue-rotate
        ko: {
            category: "간편 웰빙식품",
            title: "동황토산 꿀벌 홍삼절편",
            desc: "6년근 황토홍삼을 얇게 슬라이스하여 한국산 천연 벌꿀과 올리고당에 절여 건조한 웰빙 건강 간식입니다. 인삼 특유의 쓴맛을 줄여 외국인 및 어린이도 부담 없이 즐길 수 있습니다.",
            ingredients: "6년근 홍삼 70% (국산), 벌꿀 20% (국산), 올리고당 10%",
            usage: "언제 어디서나 간편하게 간식처럼 1일 2~3회, 1회당 1~2조각씩 직접 씹어서 섭취하십시오.",
            customs: "완전 밀봉 및 당 침 가공된 제과 형태의 식품으로, 전 세계 모든 국가의 입국 심사 및 세관 통관 시 규제 대상이 아니므로 자유롭게 반입이 가능합니다."
        },
        en: {
            category: "Convenient Healthy Snack",
            title: "Honey-Glazed Ginseng Slices",
            desc: "A healthy snack made by slicing 6-year-old Hwangto red ginseng and glazing it in natural Korean honey. The bitter taste is minimized, making it delightful for international tourists and children alike.",
            ingredients: "6-Year Red Ginseng 70% (Korean), Natural Honey 20% (Korean), Oligosaccharide 10%",
            usage: "Consume as a daily snack. Chew 1-2 slices, 2 to 3 times a day at your convenience.",
            customs: "Since this product is vacuum-sealed and fully glazed in honey/sugar, it is treated as regular confectionery and is completely free from customs restrictions worldwide."
        },
        zh: {
            category: "便捷健康零食",
            title: "东黄土山蜂蜜红参切片",
            desc: "将6年根黄土红参切成薄片，浸泡在韩国产天然蜂蜜和低聚糖中蜜炙晾干的健康零食。降低了人参特有的苦涩味，无论是外国游客还是老人儿童，均可轻松享受美味与营养。",
            ingredients: "6年根红参 70% (韩国产), 天然蜂蜜 20% (韩国产), 低聚糖 10%",
            usage: "每日2-3次，每次嚼服1-2片，可当作日常零食随时随地食用。",
            customs: "本品属于经糖浸加工的密封包装休闲食品，符合全球海关检验规则，不受动植物检疫限制，可携带入境。"
        },
        ja: {
            category: "手軽なヘルシースナック",
            title: "東黄土山 蜂蜜紅参切片",
            desc: "6년근 황토홍삼을 얇게 썰어 벌꿀과 올리고당에 절여 말린 건강 스낵입니다. 쓴맛이 적어 외국인 관광객이나 아이들도 맛있게 섭취할 수 있습니다.",
            ingredients: "6년근 홍삼 70% (국산), 벌꿀 20% (국산), 올리고당 10%",
            usage: "하루 2~3회, 1회당 1~2조각씩 직접 씹어 삼키거나 차의 곁들임 스낵으로 섭취해 주십시오.",
            customs: "꿀에 절여 완전히 밀봉한 가공 과자류로 분류되기 때문에, 일본 입국 시 검역 없이 반입할 수 있습니다."
        }
    }
};

// --- 3. Core Application Setup ---
document.addEventListener("DOMContentLoaded", () => {
    // Persistent Language State: Read from localStorage or default to KO
    let currentLang = localStorage.getItem("preferred_language") || "ko";

    const contentWrapper = document.getElementById("content-wrapper");
    const langBtns = document.querySelectorAll(".lang-select-btn");
    const langTrigger = document.getElementById("lang-trigger");
    const langTriggerText = document.getElementById("lang-trigger-text");
    const langDropdownWrap = document.getElementById("lang-dropdown-wrap");
    const langDropdownMenu = document.getElementById("lang-dropdown-menu");
    const closeLangDropdown = document.getElementById("close-lang-dropdown");
    const header = document.getElementById("main-header");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    // Modals (only active on pages containing product-modal)
    const productModal = document.getElementById("product-modal");
    const modalCloseBtn = document.getElementById("modal-close");
    const modalImg = document.getElementById("modal-product-img");
    const modalCategory = document.getElementById("modal-product-category");
    const modalTitle = document.getElementById("modal-product-title");
    const modalPrice = document.getElementById("modal-product-price");
    const modalDesc = document.getElementById("modal-product-desc");
    const modalIngredients = document.getElementById("modal-product-ingredients");
    const modalUsage = document.getElementById("modal-product-usage");
    const modalCustoms = document.getElementById("modal-product-customs");
    const modalBookingBtn = document.getElementById("modal-booking-btn");
    
    // Form & Toast (only active on pages containing reservation-form)
    const reservationForm = document.getElementById("reservation-form");
    const toastNotif = document.getElementById("toast-notif");
    const toastTitle = document.getElementById("toast-title");
    const toastMessage = document.getElementById("toast-message");

    const triggerTextMap = {
        ko: "KOR",
        en: "ENG",
        ja: "JPN",
        zh: "CHI"
    };

    // Initialize Active Language Button State & Trigger Text
    if (langTriggerText) {
        langTriggerText.textContent = triggerTextMap[currentLang] || "KOR";
    }
    langBtns.forEach(btn => {
        if (btn.getAttribute("data-lang") === currentLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Initial Translation (without fade animation for instantaneous loading)
    updateLanguage(currentLang, false);

    // --- 4. Language Switcher Functionality ---
    function updateLanguage(lang, isTransition = true) {
        currentLang = lang;
        localStorage.setItem("preferred_language", lang);

        const translateJob = () => {
            // Translate elements marked with data-i18n
            document.querySelectorAll("[data-i18n]").forEach(elem => {
                const key = elem.getAttribute("data-i18n");
                if (translations[lang] && translations[lang][key]) {
                    elem.innerHTML = translations[lang][key];
                }
            });

            // Translate placeholder elements
            document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
                const key = elem.getAttribute("data-i18n-placeholder");
                if (translations[lang] && translations[lang][key]) {
                    elem.setAttribute("placeholder", translations[lang][key]);
                }
            });

            // Change prices according to currency matching the language
            updateProductPrices(lang);
        };

        if (isTransition && contentWrapper) {
            // Apply smooth fade transition
            contentWrapper.classList.add("fade-out");
            setTimeout(() => {
                translateJob();
                contentWrapper.classList.remove("fade-out");
                contentWrapper.classList.add("fade-in");
                setTimeout(() => {
                    contentWrapper.classList.remove("fade-in");
                }, 300);
            }, 200);
        } else {
            // Instant apply (used on page load)
            translateJob();
        }
    }

    function updateProductPrices(lang) {
        const currencyMap = {
            ko: "data-currency-krw",
            en: "data-currency-usd",
            zh: "data-currency-cny",
            ja: "data-currency-jpy"
        };
        const prefixMap = {
            ko: "₩",
            en: "$",
            zh: "¥",
            ja: "￥"
        };

        const attr = currencyMap[lang] || "data-currency-krw";
        const symbol = prefixMap[lang] || "₩";

        document.querySelectorAll("[data-currency-krw]").forEach(priceElem => {
            const rawVal = priceElem.getAttribute(attr);
            if (rawVal) {
                priceElem.textContent = `${symbol}${rawVal}`;
            }
        });
    }

    // Bind language selector buttons
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            langBtns.forEach(b => {
                if (b.getAttribute("data-lang") === selectedLang) {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });
            if (langTriggerText) {
                langTriggerText.textContent = triggerTextMap[selectedLang] || "KOR";
            }
            updateLanguage(selectedLang, true);
            // Close dropdown
            if (langDropdownMenu && langDropdownWrap) {
                langDropdownMenu.classList.remove("show");
                langDropdownWrap.classList.remove("open");
            }
        });
    });

    // Language Dropdown Event Handlers
    if (langTrigger && langDropdownMenu && langDropdownWrap) {
        langTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdownMenu.classList.toggle("show");
            langDropdownWrap.classList.toggle("open");
        });
    }

    if (closeLangDropdown && langDropdownMenu && langDropdownWrap) {
        closeLangDropdown.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdownMenu.classList.remove("show");
            langDropdownWrap.classList.remove("open");
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (langDropdownMenu && langDropdownWrap && langDropdownMenu.classList.contains("show")) {
            if (!langDropdownWrap.contains(e.target)) {
                langDropdownMenu.classList.remove("show");
                langDropdownWrap.classList.remove("open");
            }
        }
    });

    // --- 5. Navigation & Sticky Header ---
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Mobile Menu Toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const icon = mobileToggle.querySelector("i");
            if (navMenu.classList.contains("open")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        });

        // Close menu when clicking link (for mobile responsiveness)
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                mobileToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
            });
        });
    }

    // --- 6. Product Details Modal ---
    const productCards = document.querySelectorAll(".product-card");
    if (productCards.length > 0 && productModal) {
        productCards.forEach(card => {
            card.addEventListener("click", () => {
                const productId = card.getAttribute("data-product-id");
                openProductModal(productId);
            });
        });
    }

    function openProductModal(productId) {
        const prodData = productDetails[productId];
        if (!prodData) return;

        const langData = prodData[currentLang] || prodData["ko"];
        
        // Populate modal data
        if (modalImg) {
            modalImg.src = prodData.img;
            modalImg.alt = langData.title;
        }
        if (modalCategory) modalCategory.textContent = langData.category;
        if (modalTitle) modalTitle.textContent = langData.title;
        
        // Retrieve converted price
        const priceElement = document.querySelector(`.product-card[data-product-id="${productId}"] .product-price`);
        if (priceElement && modalPrice) {
            modalPrice.textContent = priceElement.textContent;
        }

        // Detailed blocks
        if (modalDesc) modalDesc.textContent = langData.desc;
        if (modalIngredients) modalIngredients.textContent = langData.ingredients;
        if (modalUsage) modalUsage.textContent = langData.usage;
        if (modalCustoms) modalCustoms.textContent = langData.customs;

        // Open modal
        productModal.classList.add("open");
        document.body.style.overflow = "hidden"; // disable scroll
    }

    function closeProductModal() {
        if (productModal) {
            productModal.classList.remove("open");
            document.body.style.overflow = ""; // enable scroll
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProductModal);
    }
    
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) {
                closeProductModal();
            }
        });
    }

    if (modalBookingBtn) {
        modalBookingBtn.addEventListener("click", () => {
            closeProductModal();
            // Redirect to booking section is handled naturally by href
        });
    }

    // --- 7. Booking Form Submission & Toast ---
    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Fetch field values
            const nameVal = document.getElementById("visitor-name").value;
            const langVal = document.getElementById("visitor-lang").value;
            const branchVal = document.getElementById("visit-branch").value;
            const dateVal = document.getElementById("visit-date").value;
            const countVal = document.getElementById("visitor-count").value;
            const contactVal = document.getElementById("visitor-contact").value;

            // Form validation check
            if (!nameVal || !dateVal || !contactVal) {
                showToast(
                    translations[currentLang].toast_error_title,
                    translations[currentLang].toast_error_msg,
                    true
                );
                return;
            }

            // Success simulation
            showToast(
                translations[currentLang].toast_success_title,
                translations[currentLang].toast_success_msg,
                false
            );

            // Reset form
            reservationForm.reset();
        });
    }

    function showToast(title, message, isError) {
        if (!toastNotif) return;
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        
        const icon = toastNotif.querySelector(".toast-icon");
        if (isError) {
            toastNotif.style.borderLeftColor = "#d32f2f";
            if (icon) {
                icon.className = "fa-solid fa-circle-xmark toast-icon";
                icon.style.color = "#d32f2f";
            }
        } else {
            toastNotif.style.borderLeftColor = "#2e7d32";
            if (icon) {
                icon.className = "fa-solid fa-circle-check toast-icon";
                icon.style.color = "#2e7d32";
            }
        }

        toastNotif.classList.add("show");

        setTimeout(() => {
            toastNotif.classList.remove("show");
        }, 5000);
    }

    // --- 8. Scroll Reveal Animations ---
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    const elementsToReveal = [];

    // Auto-reveal elements by matching layout selectors
    const sectionTitles = document.querySelectorAll(".section-title-wrap");
    sectionTitles.forEach(el => {
        el.classList.add("reveal");
        elementsToReveal.push(el);
    });

    // Stagger grid cards container-by-container locally rather than using global index
    const gridContainers = document.querySelectorAll(
        ".products-grid, .branches-grid, .services-grid, .about-core-grid, .outlets-guide-grid"
    );
    gridContainers.forEach(container => {
        const gridCards = container.querySelectorAll(
            ".product-card, .branch-card, .service-card, .about-core-card, .outlets-guide-card"
        );
        gridCards.forEach((card, index) => {
            card.classList.add("reveal");
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            card.classList.add(delayClass);
            elementsToReveal.push(card);
        });
    });

    // Left elements (sliding in from the left)
    const leftElements = document.querySelectorAll(
        ".story-text, .ceo-statement, .hogandan-visual, .booking-info-pane, .direction-visual"
    );
    leftElements.forEach(el => {
        el.classList.add("reveal-left");
        elementsToReveal.push(el);
    });

    // Right elements (sliding in from the right)
    const rightElements = document.querySelectorAll(
        ".story-visual, .ceo-portrait-card, .hogandan-text, .booking-form-pane, .direction-details"
    );
    rightElements.forEach(el => {
        el.classList.add("reveal-right");
        elementsToReveal.push(el);
    });

    // Custom reveals pre-declared in HTML
    const customReveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    customReveals.forEach(el => {
        elementsToReveal.push(el);
    });

    // Add load delay to elements in the initial viewport on page load to coordinate with hero animations
    if (window.scrollY < 50) {
        elementsToReveal.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add("init-viewport");
            }
        });
    }

    elementsToReveal.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 9. Premium Scroll JS Effects (Progress Bar, Circular Back-to-Top, Parallax Hero) ---

    // 9a. Inject Scroll Progress Bar
    const progContainer = document.createElement("div");
    progContainer.className = "scroll-progress-container";
    const progBar = document.createElement("div");
    progBar.className = "scroll-progress-bar";
    progContainer.appendChild(progBar);
    document.body.appendChild(progContainer);

    // 9b. Inject Back to Top FAB
    const bttBtn = document.createElement("button");
    bttBtn.className = "back-to-top";
    bttBtn.id = "back-to-top-btn";
    bttBtn.setAttribute("aria-label", "Scroll to top");
    bttBtn.innerHTML = `
        <svg class="progress-circle" width="48" height="48" viewBox="0 0 48 48">
            <circle class="progress-circle-bg" cx="24" cy="24" r="20"></circle>
            <circle class="progress-circle-path" cx="24" cy="24" r="20"></circle>
        </svg>
        <i class="fa-solid fa-arrow-up"></i>
    `;
    document.body.appendChild(bttBtn);

    // 9c. Back to Top Click Action
    bttBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 9d. Setup Hero Parallax Layers
    const mainHero = document.querySelector(".hero-section");
    let mainHeroBg = null;
    if (mainHero) {
        mainHeroBg = document.createElement("div");
        mainHeroBg.className = "hero-parallax-bg";
        const overlay = mainHero.querySelector(".hero-bg-overlay");
        if (overlay) {
            mainHero.insertBefore(mainHeroBg, overlay);
        } else {
            mainHero.prepend(mainHeroBg);
        }
        mainHero.style.backgroundImage = "none";
    }

    const subHero = document.querySelector(".subpage-hero");
    let subHeroBg = null;
    if (subHero) {
        subHeroBg = document.createElement("div");
        subHeroBg.className = "subpage-hero-bg";
        subHero.prepend(subHeroBg);
        subHero.style.backgroundImage = "none";
    }

    // 9e. Scroll Calculation & RequestAnimationFrame Execution
    let ticking = false;

    const handleScrollEffects = () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update Scroll Progress Bar & FAB Circular Path
        if (docHeight > 0) {
            const scrollPercent = (scrollY / docHeight) * 100;
            progBar.style.width = `${scrollPercent}%`;

            const circleLength = 125.66;
            const strokeOffset = circleLength - (scrollY / docHeight) * circleLength;
            const path = bttBtn.querySelector(".progress-circle-path");
            if (path) {
                path.style.strokeDashoffset = strokeOffset;
            }
        }

        // Show/Hide Back to Top button
        if (scrollY > 300) {
            bttBtn.classList.add("show");
        } else {
            bttBtn.classList.remove("show");
        }

        // Main Hero Parallax Zoom & Content Fade
        if (mainHero && mainHeroBg) {
            const translateVal = scrollY * 0.45;
            const scaleVal = 1 + scrollY * 0.0006;
            mainHeroBg.style.transform = `translate3d(0, ${translateVal}px, 0) scale(${scaleVal})`;

            const heroContent = mainHero.querySelector(".hero-content");
            if (heroContent) {
                const opacityVal = Math.max(0, 1 - scrollY / 650);
                heroContent.style.opacity = opacityVal;
            }
        }

        // Subpage Hero Parallax Zoom & Content Fade
        if (subHero && subHeroBg) {
            const translateVal = scrollY * 0.35;
            const scaleVal = 1 + scrollY * 0.0005;
            subHeroBg.style.transform = `translate3d(0, ${translateVal}px, 0) scale(${scaleVal})`;

            const subHeroContent = subHero.querySelector(".subpage-hero-content");
            if (subHeroContent) {
                const opacityVal = Math.max(0, 1 - scrollY / 320);
                subHeroContent.style.opacity = opacityVal;
            }
        }

        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScrollEffects);
            ticking = true;
        }
    }, { passive: true });

    // Run once on load to initialize correct widths/opacity
    handleScrollEffects();

    // Trigger hero entrance animations on page load
    const hContent = document.querySelector(".hero-content");
    if (hContent) {
        setTimeout(() => {
            hContent.classList.add("loaded");
        }, 150);
    }

    const sHeroContent = document.querySelector(".subpage-hero-content");
    if (sHeroContent) {
        setTimeout(() => {
            sHeroContent.classList.add("loaded");
        }, 150);
    }
});

