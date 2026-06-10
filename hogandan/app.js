/* ==========================================================================
   HO GAN DAN (護肝丹) - MULTILINGUAL & INTERACTIVE JAVASCRIPT
   ========================================================================== */

// --- 1. Translation Dictionary ---
const translations = {
    ko: {
        logo_name: "고려호간단 (주)",
        logo_sub: "KOREA HOGANDAN",
        nav_story: "브랜드 스토리",
        nav_ingredients: "핵심 성분",
        nav_efficacy: "효능 효과",
        nav_products: "제품 소개",
        nav_market: "쇼핑 매장",
        nav_booking: "방문 예약",
        nav_parent: "<i class='fa-solid fa-house'></i> 동황토산 바로가기",

        hero_badge: "PREMIUM LIVER PROTECTION",
        hero_title: "지친 현대인과 여행객의<br>간을 위한 최적의 처방",
        hero_desc: "엄선된 6년근 홍삼과 고농축 헛개나무 열매 추출물의 황금 비율 배합. 피로와 일상의 활력을 되찾아 드리는 자연의 선물입니다.",
        hero_cta_products: "제품 소개",
        hero_cta_booking: "방문 예약",

        story_subtitle: "TRUSTED HERITAGE",
        story_title: "호간단 브랜드 스토리",
        story_h3: "과학적 배합으로 지키는 간 건강",
        story_p1: "고려호간단은 오랜 연구와 인삼 가공 노하우를 가진 (주)동황토산의 R&D 기술을 바탕으로 출범한 간 건강 전문 브랜드입니다. 바쁜 일상, 잦은 피로, 스트레스 및 여행 이동으로 무거워진 몸의 근본적인 해독과 회복을 돕습니다.",
        story_p2: "인위적인 합성 성분을 배제하고, 자연에서 얻은 프리미엄 식물 원료와 전통 발효 기법을 융합하여 간 세포 보호에 효과적인 핵심 물질을 최대로 농축했습니다. 대한민국 특산 6년근 홍삼과의 시너지로 차별화된 영양을 공급합니다.",
        story_badge_txt: "동황토산 R&D 기술 보증",

        ingredients_subtitle: "NATURAL ACTIVE INGREDIENTS",
        ingredients_title: "호간단의 핵심 성분",
        ing1_title: "헛개나무 열매 고농축 추출액",
        ing1_desc: "한국의 깊은 산지에서 자란 헛개나무 열매에서만 추출한 다당체 성분이 간의 해독 대사를 활성화하고, 아세트알데히드 분해를 가속화하여 숙취와 만성 피로의 원인을 신속하게 씻어줍니다.",
        ing2_title: "엄선된 6년근 고려인삼 (홍삼)",
        ing2_desc: "천혜의 황토 땅에서 기른 6년근 홍삼의 풍부한 진세노사이드(사포닌)가 신체 신진대사율을 높이고 면역 세포를 증식시켜 간 건강뿐 아니라 신체 전체의 방어 체계와 체력을 강화합니다.",

        features_subtitle: "SCIENTIFIC WELLNESS",
        features_title: "호간단의 3대 대표 효능",
        feat1_title: "간 세포 보호 및 자가 재생 촉진",
        feat1_desc: "간의 항산화 효소 분비를 유도하여 약물, 피로 물질, 알코올로 인해 손상되는 간 세포막을 견고하게 방어하며 세포 재생을 돕습니다.",
        feat2_title: "강력한 해독 작용 및 숙취 해소",
        feat2_desc: "혈중 알코올 농도를 빠르게 감소시키고 과음으로 누적되는 간 독성 피로를 해소하여 가볍고 맑은 아침을 열어줍니다.",
        feat3_title: "만성 피로 개선 및 활력 충전",
        feat3_desc: "지친 신체 조직에 활력 에너지를 주입하는 진세노사이드와 헛개의 작용으로 여행과 과로로 짓눌린 피로에서 해방시킵니다.",

        products_subtitle: "HOGANDAN SELECTIONS",
        products_title: "제품 소개",
        prod1_cat: "건강 캡슐",
        prod1_title: "호간단 분말캡슐 (TIS)",
        prod1_features: "휴대와 섭취가 극대화된 분말형 캡슐 제품으로 바쁜 일상과 여행 중에도 언제 어디서나 간편하게 간 건강을 지킬 수 있습니다.",
        prod1_ingredients: "고농축 헛개나무열매 분말 70%, 6년근 고려홍삼 분말 20%, 천연 식물 추출 분말",
        prod1_directions: "1일 2회, 1회 1캡슐을 충분한 물과 함께 섭취하십시오.",

        prod2_cat: "최고급 프리미엄",
        prod2_title: "고려호간단 플래티넘 (PLATINUM)",
        prod2_features: "최고 등급의 원료만을 엄선하여 고밀도로 농축 가공한 명품 건강 세트입니다. 귀한 분들께 드리는 최고의 선물 및 고품격 집중 관리에 이상적입니다.",
        prod2_ingredients: "천삼 등급 홍삼 추출 농축 분말 40%, 특등급 헛개나무열매 농축액 50%, 발효 밀크씨슬 추출물 10%",
        prod2_directions: "1일 1회, 1회 1포(또는 2캡슐)를 직접 천천히 섭취하십시오.",

        prod3_cat: "시그니처 패키지",
        prod3_title: "호간단 프리미엄 (120캡슐 / 2달분)",
        prod3_features: "동황토산 자회사 호간단의 대표 시그니처 상품입니다. 2달 동안 꾸준하게 복용하여 만성적인 피로 개선과 음주 독성으로부터 간을 보살피는 대중적인 웰빙 패키지입니다.",
        prod3_ingredients: "고농축 헛개나무 열매 추출액 분말, 6년근 고려인삼 사포닌 농축액, 비타민 B군 복합체",
        prod3_directions: "1일 1회 2캡슐(혹은 1일 2회, 1회 1캡슐)을 물과 함께 아침 또는 취침 전에 복용하십시오.",

        market_subtitle: "PREMIUM SHOPPING EXPERIENCE",
        market_title: "쇼핑 매장 안내",
        market_ext: "매장 외부 전경",
        market_ext_desc: "글로벌 관광객을 환대하는 쾌적하고 품격 있는 단독 매장 외관입니다.",
        market_2f: "2층 VIP 상담 라운지",
        market_2f_desc: "방문 예약 고객을 위해 제공되는 1:1 차 시음 및 전문 상담 전용 프리미엄 공간입니다.",
        market_farm: "친환경 인삼 재배지",
        market_farm_desc: "최적의 황토 기운과 자연 조건에서 6년근 수삼을 재배하는 엄격하게 엄선된 청정 농장입니다.",

        spec_features: "제품 특징",
        spec_ingredients: "주요 성분",
        spec_directions: "복용법",

        book_pane_title: "지점 방문 및 구매 예약",
        book_pane_desc: "사전 예약 후 매장을 내방하시면 웨이팅 없이 통역 안내 서비스를 바로 지원해 드리며, 당일 현장 추가 5% 스페셜 VIP 할인 쿠폰 및 시음 세트를 무상 증정합니다.",
        book_b1: "방문 즉시 웰컴 드링크 및 호간단 시음용 제공",
        book_b2: "사전 예약 방문자 한정 5% 추가 즉시 할인 우대",
        book_b3: "다국어 전문 카운셀러 1:1 맞춤형 가이드 배정",
        loc_info_title: "호간단 고객 상담 센터",
        loc_info_sub: "※ 제품명과 희망 수량을 미리 파악하여 문의하시면 빠르게 진행됩니다.",

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

        foot_desc: "(주)동황토산 자회사로서 대한민국 전통 원료와 약재 배합 노하우를 바탕으로, 전 세계 고객님께 피로 회복과 간 기능 강화를 돕는 웰빙 솔루션을 전달합니다.",
        foot_title_links: "빠른 링크",
        foot_title_addr: "상담 및 본사 정보",
        foot_lbl_comp: "상호명:",

        toast_success_title: "예약 완료",
        toast_success_msg: "방문 예약이 성공적으로 등록되었습니다. 담당자가 곧 기재해주신 연락처로 안내 이메일을 발송해 드리겠습니다.",
        toast_error_title: "오류 발생",
        toast_error_msg: "입력 값을 다시 확인해 주세요."
    },
    en: {
        logo_name: "Korea Hogandan Co., Ltd.",
        logo_sub: "KOREA HOGANDAN",
        nav_story: "Brand Story",
        nav_ingredients: "Key Ingredients",
        nav_efficacy: "Efficacy",
        nav_products: "Products",
        nav_market: "Outlets",
        nav_booking: "Booking",
        nav_parent: "<i class='fa-solid fa-house'></i> Dong Hwang To San",

        hero_badge: "PREMIUM LIVER PROTECTION",
        hero_title: "The Ultimate Solution<br>for Exhausted Livers",
        hero_desc: "Golden ratio formulation of selected 6-year-old red ginseng and highly concentrated Hovenia dulcis fruit extract. Nature's gift to restore daily vigor and relieve fatigue.",
        hero_cta_products: "View Products",
        hero_cta_booking: "Book Visit",

        story_subtitle: "TRUSTED HERITAGE",
        story_title: "Hogandan Brand Story",
        story_h3: "Protecting Liver Health Scientifically",
        story_p1: "Korea Hogandan is a specialized liver health brand launched on the basis of the R&D and processing technology of Dong Hwang To San. We help detoxify and recover the body exhausted by daily work, stress, and travel fatigue.",
        story_p2: "By excluding artificial ingredients and combining premium plant extracts with traditional fermentation, we maximize active ingredients for liver protection. Synergy with Korea's 6-year-old red ginseng provides outstanding nutrition.",
        story_badge_txt: "Certified by Dong Hwang To San R&D",

        ingredients_subtitle: "NATURAL ACTIVE INGREDIENTS",
        ingredients_title: "Hogandan Core Ingredients",
        ing1_title: "Highly Concentrated Hovenia Fruit Extract",
        ing1_desc: "Active polysaccharide extracted from Hovenia dulcis fruits grown in deep clean mountains enhances liver metabolism and accelerates alcohol clearance, quickly eliminating chronic fatigue and hangover sources.",
        ing2_title: "Selected 6-Year Korean Red Ginseng",
        ing2_desc: "Abundant ginsenosides (saponins) from 6-year-old red ginseng grown in premium yellow clay soil boost metabolic rates and immune cells, strengthening the body's entire defense system.",

        features_subtitle: "SCIENTIFIC WELLNESS",
        features_title: "3 Core Benefits of Hogandan",
        feat1_title: "Liver Cell Protection & Rejuvenation",
        feat1_desc: "Induces antioxidant enzymes in the liver to firmly protect liver cell membranes damaged by drugs, waste products, and alcohol, assisting cell recovery.",
        feat2_title: "Detoxification & Hangover Clearance",
        feat2_desc: "Quickly lowers blood alcohol concentration and clears hepatotoxic fatigue caused by excessive drinking, opening a light and clear morning.",
        feat3_title: "Fatigue Reduction & Energy Boost",
        feat3_desc: "Active ginsenosides and Hovenia elements inject vitality energy into tired tissues, liberating you from fatigue caused by travel and overwork.",

        products_subtitle: "HOGANDAN SELECTIONS",
        products_title: "Our Selections",
        prod1_cat: "Health Capsule",
        prod1_title: "Ho Gan Dan Powder Capsule (TIS)",
        prod1_features: "Powder-filled capsule maximizing portability and convenience. Keep your liver healthy anytime, anywhere, even during busy schedules or travel.",
        prod1_ingredients: "Concentrated Hovenia fruit powder 70%, 6-year Korean red ginseng powder 20%, natural botanical extracts.",
        prod1_directions: "Take 1 capsule twice daily with plenty of water.",

        prod2_cat: "Ultra Premium",
        prod2_title: "Korea Hogandan Platinum",
        prod2_features: "Luxurious wellness gift set crafted with high-density extraction of the absolute finest grade ingredients. Ideal for presenting to VIPs and professional intensive liver care.",
        prod2_ingredients: "Heaven-grade red ginseng extract powder 40%, special-grade Hovenia fruit concentrate 50%, fermented milk thistle extract 10%.",
        prod2_directions: "Take 1 pouch (or 2 capsules) once daily, consume directly and slowly.",

        prod3_cat: "Signature Package",
        prod3_title: "Ho Gan Dan Premium (120 Capsules / 2-Month Supply)",
        prod3_features: "The representative signature product of Dong Hwang To San's subsidiary, Ho Gan Dan. A popular wellness pack designed for a steady 2-month regime to relieve chronic fatigue and protect liver from alcohol toxicity.",
        prod3_ingredients: "Concentrated Hovenia fruit extract powder, 6-year Korean ginseng saponin concentrate, Vitamin B complex.",
        prod3_directions: "Take 2 capsules once daily (or 1 capsule twice daily) with water, either in the morning or before bedtime.",

        market_subtitle: "PREMIUM SHOPPING EXPERIENCE",
        market_title: "Shopping Market",
        market_ext: "Store Exterior",
        market_ext_desc: "Comfortable, prestigious detached store exterior welcoming global travelers.",
        market_2f: "2F VIP Consultation Lounge",
        market_2f_desc: "Premium space dedicated to 1:1 tea tasting and professional consultation for pre-booked guests.",
        market_farm: "Eco-Friendly Ginseng Farm",
        market_farm_desc: "Strictly selected clean farm cultivating 6-year-old ginseng under optimal clay soil and natural climate.",

        spec_features: "Features",
        spec_ingredients: "Ingredients",
        spec_directions: "Directions",

        book_pane_title: "Store Visit & Purchase Reservation",
        book_pane_desc: "Pre-book your visit to receive instant 1:1 multilingual guidance with zero queueing, plus free tasting sets and an extra 5% onsite VIP discount coupon.",
        book_b1: "Complimentary welcome drink and tasting samples upon arrival",
        book_b2: "Extra 5% instant discount voucher for all pre-registered guests",
        book_b3: "1:1 personal guide assigned with preferred language",
        loc_info_title: "Hogandan Customer Service Center",
        loc_info_sub: "* Preparing the product names and quantities beforehand will help speed up the process.",

        form_lbl_name: "Full Name",
        form_lbl_lang: "Preferred Language",
        form_lbl_branch: "Target Branch",
        form_lbl_date: "Visit Date",
        form_lbl_count: "Number of Guests",
        form_lbl_contact: "Contact (Email/Messenger/Phone)",
        form_lbl_req: "Special Request",
        form_btn_submit: "Submit Booking",
        form_opt_goyang: "Goyang HQ (Gyeonggi-do)",
        form_opt_busan: "Busan Branch",
        form_opt_jeju: "Jeju Branch",
        form_plh_name: "Enter name as shown in passport",
        form_plh_contact: "Email address or Line/WeChat ID",
        form_plh_req: "E.g., request hotel delivery, stock availability inquiries",

        foot_desc: "As a subsidiary of Dong Hwang To San, we deliver well-being solutions that relieve fatigue and strengthen liver functions based on traditional Korean herbal expertise.",
        foot_title_links: "Quick Links",
        foot_title_addr: "Corporate & Service Info",
        foot_lbl_comp: "Company Name:",

        toast_success_title: "Reservation Successful",
        toast_success_msg: "Your visit reservation has been registered. An advisor will contact you via email/messenger shortly.",
        toast_error_title: "Registration Error",
        toast_error_msg: "Please check your inputs."
    },
    zh: {
        logo_name: "高丽护肝丹 (株)",
        logo_sub: "KOREA HOGANDAN",
        nav_story: "品牌故事",
        nav_ingredients: "核心成分",
        nav_efficacy: "健康功效",
        nav_products: "产品介绍",
        nav_market: "免税商场",
        nav_booking: "预约到店",
        nav_parent: "<i class='fa-solid fa-house'></i> 东黄土山商城",

        hero_badge: "PREMIUM LIVER PROTECTION",
        hero_title: "为疲惫的现代人与游客<br>量身定制的护肝良药",
        hero_desc: "严选6년根红参和高浓缩枳椇子（拐枣）提取物的黄金配比。这是大自然赠予您恢复日常活力、摆脱疲劳的恩赐。",
        hero_cta_products: "浏览产品",
        hero_cta_booking: "预约咨询",

        story_subtitle: "TRUSTED HERITAGE",
        story_title: "护肝丹品牌故事",
        story_h3: "科学配比守护肝脏健康",
        story_p1: "高丽护肝丹是基于具有深厚研发实力与人参加工技术背景的 (株)东黄土山 R&D 科技而创立的肝脏健康专业品牌。能帮您从忙碌日常、频繁劳累、精神压力和长途旅行的疲惫中，实现根本性的排毒与活力恢复。",
        story_p2: "排除了任何人工合成添加物，将天然优质植物原料与传统发酵工艺完美结合，最大程度浓缩了保护肝细胞的核心活性成分。与韩国特产6年根红参的协同作用，为您提供差异化的顶级营养滋补。",
        story_badge_txt: "东黄土山 R&D 技术认证",

        ingredients_subtitle: "NATURAL ACTIVE INGREDIENTS",
        ingredients_title: "护肝丹核心成分",
        ing1_title: "高浓缩枳椇子（拐枣）果实提取物",
        ing1_desc: "从生长在韩国深山中的枳椇子果实中提取的活性多糖成分，能激活肝脏的解毒代谢，加速乙醛分解，迅速消除宿醉与慢性疲劳的根源。",
        ing2_title: "严选6年根高丽红参",
        ing2_desc: "种植于得天独厚黄土地中的6年根红参，含有丰富的人参皂苷。能够提高机体新陈代谢率，促进免疫细胞增殖，不仅关爱肝脏健康，更能强健身体整体防线与体能。",

        features_subtitle: "SCIENTIFIC WELLNESS",
        features_title: "护肝丹三大代表功效",
        feat1_title: "保护肝细胞及促进自愈再生",
        feat1_desc: "诱导肝脏内抗氧化酶的分泌，牢固防御因药物、疲劳毒素和酒精而受损的肝细胞膜，并帮助细胞再生与修复。",
        feat2_title: "强效解毒排毒及快速缓解宿醉",
        feat2_desc: "迅速降低血液中的酒精浓度，消除因饮酒过量蓄积的肝脏毒性疲劳，为您带来轻松清爽的早晨。",
        feat3_title: "改善慢性疲劳及迅速充沛精力",
        feat3_desc: "注入活力成分于疲惫的机体组织中。人参皂苷与枳椇子的共同作用，让您彻底摆脱长途旅行和过度劳累带来的沉重疲乏感。",

        products_subtitle: "HOGANDAN SELECTIONS",
        products_title: "产品介绍",
        prod1_cat: "健康胶囊",
        prod1_title: "护肝丹粉末胶囊 (TIS)",
        prod1_features: "将便携度与服用方便度最大化的粉末填充胶囊产品。即使在繁忙的日常生活与旅途中，也能随时随地轻松呵护肝脏健康。",
        prod1_ingredients: "高浓缩枳椇子（拐枣）果实粉末 70%，6年根高丽红参粉末 20%，天然植物提取物粉末",
        prod1_directions: "每日2次，每次1粒，用温水送服。",

        prod2_cat: "尊贵奢华款",
        prod2_title: "高丽护肝丹 尊享白金版 (PLATINUM)",
        prod2_features: "仅严选最高等级原材料进行高密度浓缩加工而成的奢华健康礼盒。是赠送给尊贵贵宾的至臻礼品，也是进行高品质集中调理的理想选择。",
        prod2_ingredients: "天参等级红参提取浓缩粉末 40%，特级枳椇子果实浓缩液 50%，发酵水飞蓟提取物 10%",
        prod2_directions: "每日1次，每次1袋（或2粒），直接口服或温水送服。",

        prod3_cat: "经典星级装",
        prod3_title: "护肝丹经典特惠装 (120粒 / 2个月量)",
        prod3_features: "东黄土山子公司护肝丹最具代表性的星级经典商品。建议连续服用2个月，可有效改善慢性疲劳，保护肝脏免受酒精毒性伤害，是广受欢迎的高性价比健康装。",
        prod3_ingredients: "高浓缩枳椇子（拐枣）果实提取物粉末，6年根高丽人参皂苷浓缩液，维生素B族复合体",
        prod3_directions: "每日1次，每次2粒（或每日2次，每次1粒），温水送服。可在清晨或睡前Client端服用。",

        market_subtitle: "PREMIUM SHOPPING EXPERIENCE",
        market_title: "免税商场指南",
        market_ext: "旗舰店外观",
        market_ext_desc: "迎接全球游客的高雅、舒适的独栋免税旗舰店外观。",
        market_2f: "二楼 VIP 咨询休息厅",
        market_2f_desc: "专为预约到店贵宾提供的 1对1 迎宾茶试饮及专业咨询的豪华专属空间。",
        market_farm: "绿色人参种植基地",
        market_farm_desc: "在绝佳的黄土热能与天然气候下，种植特级6年根新鲜人参的严格选拔的纯净农场。",

        spec_features: "产品特点",
        spec_ingredients: "主要成分",
        spec_directions: "服用方法",

        book_pane_title: "到店访问及预购预约",
        book_pane_desc: "提前预约到店，即可享受尊贵 1:1 导购服务，无需排队，并获赠免费试饮机会及VIP额外5%折扣券。",
        book_b1: "到店即赠迎宾参茶与护肝丹试饮装",
        book_b2: "为预约贵宾特别提供现场额外5%立减优惠",
        book_b3: "专配相应语种的 1对1 资深健康导购经理",
        loc_info_title: "护肝丹客户服务咨询中心",
        loc_info_sub: "※ 提前确认您想咨询的产品名称和希望数量，可以更快地为您办理。",

        form_lbl_name: "姓名",
        form_lbl_lang: "沟通语言",
        form_lbl_branch: "预约到访店面",
        form_lbl_date: "访问日期",
        form_lbl_count: "到店人数",
        form_lbl_contact: "联系方式 (邮箱/微信/Line/电话)",
        form_lbl_req: "特殊要求或咨询事项",
        form_btn_submit: "提交预约",
        form_opt_goyang: "京畿道高阳总部 (HQ)",
        form_opt_busan: "釜山店",
        form_opt_jeju: "济州店",
        form_plh_name: "请输入护照上的姓名",
        form_plh_contact: "邮箱或微信/Line ID",
        form_plh_req: "例如：希望送货至酒店、咨询商品库存等",

        foot_desc: "作为东黄土山的子公司，依托韩国传统天然原材料与中草药配比心得，致力于为全球顾客提供对抗慢性疲劳、强化肝脏功能的综合健康方案。",
        foot_title_links: "快速导航",
        foot_title_addr: "服务与总部信息",
        foot_lbl_comp: "公司名:",

        toast_success_title: "预约提交成功",
        toast_success_msg: "到店访问预约已成功登记。客服经理将尽快向您预留的联系方式发送确认邮件。",
        toast_error_title: "提交失败",
        toast_error_msg: "请检查您的输入项是否正确。"
    },
    ja: {
        logo_name: "高麗ホガンダン (株)",
        logo_sub: "KOREA HOGANDAN",
        nav_story: "ブランドストーリー",
        nav_ingredients: "主な成分",
        nav_efficacy: "健康効能",
        nav_products: "商品案内",
        nav_market: "免税店舗",
        nav_booking: "来店予約",
        nav_parent: "<i class='fa-solid fa-house'></i> 東黄土山へ",

        hero_badge: "PREMIUM LIVER PROTECTION",
        hero_title: "現代人と旅行者の<br>肝臓のための最適な処方",
        hero_desc: "厳選された6年根紅参と高濃縮の枳椇子（ひげの木）果実エキスの黄金比配合.疲労と日常の活力を取り戻す自然からの贈り物です.",
        hero_cta_products: "商品案内",
        hero_cta_booking: "来店予約",

        story_subtitle: "TRUSTED HERITAGE",
        story_title: "ホガンダンブランドストーリー",
        story_h3: "科学的な配合で守る肝臓の健康",
        story_p1: "高麗ホガンダンは、長年の研究と人参加工ノウハウを持つ(株)東黄土山のR&D技術をベースに誕生した肝臓健康専門ブランドです.忙しい日常、蓄積した疲労、ストレス、旅行の移動で重くなった体の根本的な解毒と回復をサポートします.",
        story_p2: "人工合成成分を排除し、自然由来のプレミアム植物原料と伝統的な発酵技術を融合させ、肝細胞保護に効果的な核心成分を最大限濃縮しました.大韓民国特産の6年根紅参とのシナジーで、格別な栄養を供給します.",
        story_badge_txt: "東黄土山R&D技術保証",

        ingredients_subtitle: "NATURAL ACTIVE INGREDIENTS",
        ingredients_title: "ホガンダンの主要成分",
        ing1_title: "高濃縮枳椇子果実エキス",
        ing1_desc: "韓国の深山で育った枳椇子の果実からのみ抽出された多糖体成分が、肝臓の解毒代謝を活性化し、アセトアルデヒドの分解を促進して、二日酔いや慢性疲労の原因を速やかに洗い流します.",
        ing2_title: "厳選された 6年根 高麗紅参",
        ing2_desc: "恵まれた黄土で栽培された6年根紅参の豊富なジンセノサイド（サポニン）が、身体の新陳代謝を活性化し、免疫細胞を増殖させて、肝臓だけでなく体全体の防衛システムと体力を強化します.",

        features_subtitle: "SCIENTIFIC WELLNESS",
        features_title: "ホガンダンの3大代表効能",
        feat1_title: "肝細胞保護および再生促進",
        feat1_desc: "肝臓の抗酸化酵素分泌を促し、薬物、疲労物質、アルコールによって損傷する肝細胞膜を強固に防御し、細胞の再生をサポートします.",
        feat2_title: "強力な解毒作用と二日酔い解消",
        feat2_desc: "血中アルコール濃度を速やかに低下させ、過飲によって蓄積される肝毒性疲労を解消し、すっきりとした爽やかな朝を迎えます.",
        feat3_title: "慢性疲労の改善とエネルギーチャージ",
        feat3_desc: "疲れた身体組織に活力エネルギーを注入するジンセノサイドと枳椇子の相乗効果で、旅行や過労による重い疲労から解放します.",

        products_subtitle: "HOGANDAN SELECTIONS",
        products_title: "商品のご案内",
        prod1_cat: "健康カプセル",
        prod1_title: "ホガンダン粉末カプセル (TIS)",
        prod1_features: "携帯と摂取のしやすさを極大化した粉末カプセル製品で、忙しい日常や旅行中でも、いつでもどこでも手軽に肝臓の健康を守ることができます.",
        prod1_ingredients: "高濃縮枳椇子果実粉末 70%、6年根高麗紅参粉末 20%、天然植物抽出粉末",
        prod1_directions: "1日2回、1回1カプセルを十分な水と一緒にお召し上がりください.",

        prod2_cat: "最高級プレミアム",
        prod2_title: "高麗ホガンダン プラチナ (PLATINUM)",
        prod2_features: "最高等級の原料だけを厳選し、高密度で濃縮加工した名品健康セットです.大切な方への贈り物や、本格的な集中ケアに最適です.",
        prod2_ingredients: "天参等級紅参抽出濃縮粉末 40%、特等級枳椇子果実濃縮液 50%、発酵ミルクシスル抽出物 10%",
        prod2_directions: "1日1回、1回1包(または2カプセル)を直接ゆっくりとお召し上がりください.",

        prod3_cat: "シグニチャーパッケージ",
        prod3_title: "ホガンダン プレミアム (120カプセル / 2ヶ月分)",
        prod3_features: "東黄土山の子会社ホガンダンの代表的なシグニチャー商品です.2ヶ月間継続して服用することで、慢性的な疲労回復とアルコール毒性から肝臓をいたわる、人気のあるウェルネスパッケージです.",
        prod3_ingredients: "高濃縮枳椇子果実エキス粉末、6年根高麗人参サポニン濃縮液、ビタミンB群複合体",
        prod3_directions: "1日1回2カプセル(または1日2回、1回1カプセル)を水と一緒にて、朝または就寝前にお召し上がりください.",

        market_subtitle: "PREMIUM SHOPPING EXPERIENCE",
        market_title: "免税店舗のご案内",
        market_ext: "店舗外観",
        market_ext_desc: "グローバル観光客を歓迎する、快適で気品ある店舗の外観です.",
        market_2f: "2階 VIP相談ラウンジ",
        market_2f_desc: "来店予約のお客様に提供される、1対1のお茶の試飲と専門カウンセリング専用のプレミアム空間です.",
        market_farm: "環境に優しい人参栽培地",
        market_farm_desc: "最適な黄土の気運と自然条件の中で、6年根水参を栽培する、厳格に管理されたクリーンな農場です.",

        spec_features: "商品の特徴",
        spec_ingredients: "主な成分",
        spec_directions: "お召し上がり方",

        book_pane_title: "来店およびご購入の予約",
        book_pane_desc: "事前にご予約のうえご来店いただきますと、待ち時間なしで通訳・カウンセリングサービスをご案内いたします.また、当日その場で使える5%追加VIP割引クーポンと試飲セットを無料進呈いたします.",
        book_b1: "ご来店時にウェルカムドリンクとホガンダンお試し用を無料進呈",
        book_b2: "事前予約のお客様限定で、当日のお会計からさらに5%即時割引",
        book_b3: "多言語対応の専門カウンセラーによる1対1のサポート",
        loc_info_title: "ホガンダンカスタマーセンター",
        loc_info_sub: "※ 商品名とご希望の数量をあらかじめご確認のうえお問い合わせいただきますと、スムーズに対応可能です.",

        form_lbl_name: "お名前",
        form_lbl_lang: "対応言語",
        form_lbl_branch: "ご来店予定店舗",
        form_lbl_date: "ご来店予定日",
        form_lbl_count: "ご来店人数",
        form_lbl_contact: "ご連絡先 (Eメール/LINE等)",
        form_lbl_req: "ご要望・お問い合わせ",
        form_btn_submit: "来店およびご購入を予約する",
        form_opt_goyang: "京畿道高陽本店 (HQ)",
        form_opt_busan: "釜山支店",
        form_opt_jeju: "済州支店",
        form_plh_name: "パスポートと同じ表記のお名前を入力してください",
        form_plh_contact: "メールアドレスまたはLINE IDなど",
        form_plh_req: "例：ホテルへの配送希望、特定商品の在庫問い合わせなど",

        foot_desc: "(株)東黄土山の子会社として、大韓民国の伝統的な原料と薬材配合のノหウをベースに、世界中のお客様に疲労回復と肝機能強化をサポートするウェルネスソリューションをお届けします.",
        foot_title_links: "クイックリンク",
        foot_title_addr: "相談および本社情報",
        foot_lbl_comp: "商号:",

        toast_success_title: "予約完了",
        toast_success_msg: "来店予約が正常に登録されました.担当者から折り返しご案内メールをお送りいたします.",
        toast_error_title: "エラー",
        toast_error_msg: "入力内容를 다시 확인해 주세요."
    }
};

// --- 2. Core Application Setup ---
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
    
    // Form & Toast
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

    // --- 3. Language Switcher Functionality ---
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

    // --- 4. Navigation & Sticky Header ---
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

    // --- 5. Booking Form Submission & Toast ---
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

    // --- 6. Scroll Reveal Animations ---
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

    // Stagger grid cards container-by-container locally
    const gridContainers = document.querySelectorAll(
        ".ingredients-grid, .about-core-grid"
    );
    gridContainers.forEach(container => {
        const gridCards = container.querySelectorAll(
            ".ingredient-card, .about-core-card"
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
        ".story-text, .features-visual, .booking-info-pane"
    );
    leftElements.forEach(el => {
        el.classList.add("reveal-left");
        elementsToReveal.push(el);
    });

    // Right elements (sliding in from the right)
    const rightElements = document.querySelectorAll(
        ".story-visual, .features-list, .booking-form-pane"
    );
    rightElements.forEach(el => {
        el.classList.add("reveal-right");
        elementsToReveal.push(el);
    });

    // Custom reveals pre-declared in HTML
    const customReveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .product-detail-card");
    customReveals.forEach(el => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left") && !el.classList.contains("reveal-right")) {
            el.classList.add("reveal");
        }
        elementsToReveal.push(el);
    });

    // Add load delay to elements in the initial viewport
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

    // --- 7. Premium Scroll JS Effects (Progress Bar, Circular Back-to-Top, Parallax Hero) ---

    // 7a. Inject Scroll Progress Bar
    const progContainer = document.createElement("div");
    progContainer.className = "scroll-progress-container";
    const progBar = document.createElement("div");
    progBar.className = "scroll-progress-bar";
    progContainer.appendChild(progBar);
    document.body.appendChild(progContainer);

    // 7b. Inject Back to Top FAB
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

    // 7c. Back to Top Click Action
    bttBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 7d. Setup Hero Parallax Layers
    const mainHero = document.querySelector(".hero-section");
    let mainHeroBg = null;
    if (mainHero) {
        mainHeroBg = document.createElement("div");
        mainHeroBg.className = "hero-parallax-bg";
        // Override CSS bg-image to make relative path correct from index.html
        mainHeroBg.style.backgroundImage = "linear-gradient(to right, rgba(9, 23, 15, 0.85) 35%, rgba(9, 23, 15, 0.3) 100%), url('../assets/hogandan_hero_bg.png')";
        const overlay = mainHero.querySelector(".hero-bg-overlay");
        if (overlay) {
            mainHero.insertBefore(mainHeroBg, overlay);
        } else {
            mainHero.prepend(mainHeroBg);
        }
        mainHero.style.backgroundImage = "none";
    }

    // 7e. Scroll Calculation & RequestAnimationFrame Execution
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
    const hVisual = document.querySelector(".hero-visual");
    if (hVisual) {
        setTimeout(() => {
            hVisual.classList.add("loaded");
        }, 150);
    }
});
