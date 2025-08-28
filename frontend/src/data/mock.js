// Mock data for cat game - Enhanced Version
export const gameScenarios = {
  easy: {
    name: "Ev Kedisi",
    description: "Sevimli ev kedisi olarak sahibinle mutlu yaşam!",
    personality: ["Tembel", "Sevimli", "Yaramaz"],
    scenarios: [
      {
        id: 1,
        title: "Sabah Uyanışı",
        description: "Güneş yüzüne vuruyor. Sahibin henüz uyuyor. Evde sessizlik var.",
        mood: "happy",
        actionType: "choice",
        options: [
          { text: "Yüzüne pati ile nazikçe dokun", points: 10, ownerLove: 5, consequence: "Sahibin gülümseyerek uyanıyor ve seni okşuyor!" },
          { text: "Miyavlayarak uyandır", points: 5, ownerLove: 2, consequence: "Biraz rahatsız ama yine de seni seviyor" },
          { text: "Karnına çık ve ronron yap", points: 15, ownerLove: 8, consequence: "En sevdiği uyanma şekli! Çok mutlu oluyor" }
        ]
      },
      {
        id: 2,
        title: "Vazo Fırsatı",
        description: "Masada güzel kristal bir vazo var. Kimse etrafta yok. Bu fırsat!",
        mood: "mischievous",
        actionType: "action",
        options: [
          { text: "Vazoyu masadan aşağı it!", points: 25, ownerLove: -3, consequence: "ÇATAK! Vazo paramparça! Sahibin koşarak geliyor..." },
          { text: "Vazonun etrafında dikkatli dolaş", points: 10, ownerLove: 1, consequence: "Vazoyu hafifçe salladın, küçük heyecan!" },
          { text: "Vazoya burnunu sür ve kokla", points: 8, ownerLove: 0, consequence: "Çiçeklerin kokusu güzel ama sıkıcı..." }
        ]
      },
      {
        id: 3,
        title: "Sahibin İşe Gidiyor",
        description: "Sahibin kapıya doğru gidiyor. Ayakkabılarını giyiyor. EV BOŞALIYOR!",
        mood: "excited",
        actionType: "adventure",
        options: [
          { text: "Mutfağa koş ve dolaplara tırman!", points: 30, ownerLove: -2, consequence: "Dolap kapılarını açtın! İçindeki her şey yerde!" },
          { text: "Koltukları tırmala", points: 20, ownerLove: -1, consequence: "Koltuk yüzeyinde güzel iz bıraktın!" },
          { text: "Pencerede kuşları izle", points: 5, ownerLove: 3, consequence: "Sakin ama kuşlar çok eğlenceli!" }
        ]
      },
      {
        id: 4,
        title: "Oyuncak Bulma",
        description: "Kanepenin altında unutulmuş bir fare oyuncağı keşfettin!",
        mood: "playful",
        actionType: "play",
        options: [
          { text: "Fareyi ağzına al ve sahibine getir", points: 12, ownerLove: 6, consequence: "Sahibin çok şaşırdı ve seni kutladı!" },
          { text: "Fareyle tek başına oyna", points: 15, ownerLove: 2, consequence: "Harika avlama seansı geçirdin!" },
          { text: "Fareyi gizli yerine sakla", points: 8, ownerLove: 0, consequence: "Gelecek için güzel bir hazine sakladın" }
        ]
      },
      {
        id: 5,
        title: "Yemek Zamanı Diplomasisi",
        description: "Sahibin yemek hazırlıyor. Mutfakta leziz kokular var!",
        mood: "hungry",
        actionType: "social",
        options: [
          { text: "Ayaklarının etrafında dolaş ve miyavla", points: 10, ownerLove: 4, consequence: "Sahibin sana özel lezzet verdi!" },
          { text: "Tezgaha çık ve yemeği gözetle", points: 5, ownerLove: -1, consequence: "Kovuldun ama manzara güzeldi!" },
          { text: "Sabırla bekle ve göz teması kur", points: 18, ownerLove: 7, consequence: "Sahibin seni çok tatlı buldu ve ekstra yemek verdi!" }
        ]
      }
    ]
  },
  medium: {
    name: "Sokak Kedisi",
    description: "Sokakta hayatta kalmaya çalışan cesur kedi",
    personality: ["Cesur", "Akıllı", "Temkinli"],
    scenarios: [
      {
        id: 1,
        title: "Yemek Arayışı",
        description: "Açlık seviyesi artıyor. Çevrede yemek aramalısın.",
        mood: "neutral",
        actionType: "survival",
        hunger: -10,
        options: [
          { text: "Çöp konteynırını karıştır", points: 8, hunger: 15, health: -5, adoptionChance: 2, consequence: "Biraz bayat ekmek buldun ama pis kokuyorsun!" },
          { text: "Market önünde bekle", points: 15, hunger: 20, health: 0, adoptionChance: 8, consequence: "İyi kalpli biri sana yemek verdi!" },
          { text: "Fare avla", points: 25, hunger: 25, health: 5, adoptionChance: 0, consequence: "Mükemmel av! Doğal becerilerin gelişti" }
        ]
      },
      {
        id: 2,
        title: "Tehlikeli Köpek Sürüsü",
        description: "3 büyük köpek seni fark etti! Hızla yaklaşıyorlar!",
        mood: "danger",
        actionType: "escape",
        options: [
          { text: "En yakın ağaca çık!", points: 20, health: -5, adoptionChance: 0, consequence: "Güvendesin ama pençelerin yaralandı" },
          { text: "Çok hızlı kaç!", points: 15, health: -15, adoptionChance: 0, consequence: "Kaçtın ama çok yoruldun ve nefes nefese kaldın" },
          { text: "Büyük tıs çıkar ve saldırgan dur!", points: 30, health: -2, adoptionChance: 3, consequence: "Köpekler şaşırdı ve geri çekildi! Sen gerçek bir savaşçısın!" }
        ]
      },
      {
        id: 3,
        title: "İyi Kalpli İnsan Karşılaşması",
        description: "Yaşlı bir kadın elinde yemekle sana yaklaşıyor. Güvenilir görünüyor.",
        mood: "hopeful",
        actionType: "trust",
        options: [
          { text: "Güvenle yaklaş ve yemeği ye", points: 20, hunger: 30, health: 5, adoptionChance: 25, consequence: "Lezzetli yemek! Bu insan seni seviyor gibi" },
          { text: "Temkinli yaklaş, biraz ye ve kaç", points: 12, hunger: 15, health: 0, adoptionChance: 8, consequence: "Biraz yemek yedin ama güvenlik önce!" },
          { text: "Uzaktan izle ama yaklaşma", points: 3, hunger: -5, health: 0, adoptionChance: 0, consequence: "Güvenli ama aç kaldın ve fırsat kaçtı" }
        ]
      },
      {
        id: 4,
        title: "Veteriner Kliniği Kapısı",
        description: "Veteriner kliniğinin önündesin. İçeriden çıkan insanlar seni görüyor.",
        mood: "curious",
        actionType: "opportunity",
        options: [
          { text: "Kapının önünde otur ve üzgün görün", points: 25, health: 15, adoptionChance: 35, consequence: "Veteriner seni içeri aldı ve muayene etti!" },
          { text: "Pencereye tırman ve içeriyi izle", points: 10, health: 0, adoptionChance: 5, consequence: "İlginç şeyler gördün ama kimse fark etmedi" },
          { text: "Hızla oradan uzaklaş", points: 5, health: -2, adoptionChance: 0, consequence: "Güvenli mesafede kaldın ama fırsat kaçtı" }
        ]
      },
      {
        id: 5,
        title: "Soğuk Kış Gecesi",
        description: "Kar yağıyor ve çok soğuk. Sıcak bir yer bulman gerekiyor.",
        mood: "cold",
        actionType: "shelter",
        options: [
          { text: "Market kapısının altına sığın", points: 15, health: -5, adoptionChance: 12, consequence: "Biraz sıcak ama nemli. Sabahleyin market sahibi seni buldu" },
          { text: "Arabaların altına gir", points: 8, health: -10, adoptionChance: 0, consequence: "Motor ısısı yardımcı oldu ama tehlikeliydi" },
          { text: "Apartman girişinde bekle", points: 20, health: 0, adoptionChance: 20, consequence: "Apartman sakini sana battaniye verdi!" }
        ]
      }
    ]
  },
  hard: {
    name: "Anne Kedi",
    description: "3 yavru kediye bakmakla sorumlu anne kedi",
    personality: ["Koruyucu", "Fedakar", "Güçlü"],
    scenarios: [
      {
        id: 1,
        title: "Yavrular İçin Yemek Avı",
        description: "3 yavrun çok aç. Sütün azalıyor. Acil yemek bulmalısın.",
        mood: "worried",
        actionType: "hunt",
        kittens: [
          { name: "Minnoş", hunger: 20 },
          { name: "Pamuk", hunger: 15 },
          { name: "Karamel", hunger: 25 }
        ],
        options: [
          { text: "Tehlikeli bölgeye git, çok yemek var", points: 35, danger: 60, kittenHunger: 40, consequence: "Çok yemek buldun ama yaralandın. Yavrular doydu!" },
          { text: "Güvenli alanda küçük av yap", points: 20, danger: 10, kittenHunger: 20, consequence: "Az yemek buldun ama güvendesin" },
          { text: "Diğer anne kedilerle iş birliği yap", points: 25, danger: 0, kittenHunger: 30, consequence: "Birlikte avlandınız, herkes kazandı!" }
        ]
      },
      {
        id: 2,
        title: "Yavru Kaybı Krizi",
        description: "Minnoş yuvadan kaybolmuş! Onu bulman çok önemli!",
        mood: "panic",
        actionType: "rescue",
        options: [
          { text: "Tüm bölgeyi didik didik ara", points: 30, health: -20, kittenSafety: 90, consequence: "Minnoş'u buldun! Bir delikte saklanıyormuş" },
          { text: "Komşu kedilerle arama ekibi kur", points: 25, health: -5, kittenSafety: 85, consequence: "Beraber aradınız ve buldunuz!" },
          { text: "Yuvada bekle, belki döner", points: 5, health: 0, kittenSafety: 30, consequence: "Çok riskli! Minnoş hala kayıp!" }
        ]
      },
      {
        id: 3,
        title: "Hastalık Alarmı",
        description: "Pamuk hasta görünüyor. Nefes alması zor ve ateşi var.",
        mood: "sad",
        actionType: "medical",
        options: [
          { text: "Hemen veterinere koş!", points: 45, health: -10, kittenHealth: 50, adoptionChance: 60, consequence: "Veteriner Pamuk'u tedavi etti! Hepinizi sahiplendi!" },
          { text: "Şifalı otlar bul ve uygula", points: 25, health: -5, kittenHealth: 20, adoptionChance: 10, consequence: "Biraz yardım etti ama hala hasta" },
          { text: "Sıcak tutup doğal iyileşmesini bekle", points: 10, health: 0, kittenHealth: 10, adoptionChance: 0, consequence: "Durum kötüleşiyor..." }
        ]
      },
      {
        id: 4,
        title: "Yuva Taşıma Operasyonu",
        description: "Mevcut yuva tehlikeli hale geldi. Yavruları güvenli yere taşımalısın.",
        mood: "determined",
        actionType: "relocation",
        options: [
          { text: "Teker teker taşı, 3 sefer yap", points: 40, health: -25, kittenSafety: 95, consequence: "Tüm yavrular güvende! Sen çok yoruldun ama başardın" },
          { text: "İki yavruyu birden taşımaya çalış", points: 25, health: -15, kittenSafety: 70, consequence: "Riskli ama daha hızlı oldu" },
          { text: "Başka anne kedilerden yardım iste", points: 35, health: -5, kittenSafety: 90, consequence: "Topluluk halinde taşındınız!" }
        ]
      },
      {
        id: 5,
        title: "Sahiplenme Fırsatı",
        description: "Bir aile sizinle ilgileniyor. Ama tüm aileyi alsalar mı emin değiller.",
        mood: "hopeful",
        actionType: "adoption",
        options: [
          { text: "En sevimli halini sergi", points: 50, adoptionChance: 80, consequence: "Aile sizi çok sevdi! Hepinizi birden aldılar!" },
          { text: "Yavrulara odaklan, kendin geri planda kal", points: 30, adoptionChance: 60, consequence: "Yavrular sahiplendi ama sen sokakta kaldın..." },
          { text: "Temkinli davran, gözlem yap", points: 15, adoptionChance: 40, consequence: "Aile kararsız kaldı, başka zaman gelebilirler" }
        ]
      }
    ]
  }
};

export const gameStats = {
  easy: { points: 0, mood: 'happy', ownerLove: 50 },
  medium: { points: 0, hunger: 50, health: 100, mood: 'neutral', adoptionChance: 10 },
  hard: { points: 0, health: 100, mood: 'protective', adoptionChance: 5, kittens: [
    { name: "Minnoş", hunger: 50, health: 100 },
    { name: "Pamuk", hunger: 50, health: 100 },
    { name: "Karamel", hunger: 50, health: 100 }
  ]}
};

export const playerProfiles = [
  {
    id: 1,
    name: "Kedi Ustası",
    totalGames: 15,
    bestScore: 245,
    favoriteDifficulty: "hard",
    achievements: ["İlk Oyun", "Vazo Kırıcı", "Anne Kedi Kahramanı", "Sokak Savaşçısı"],
    lastPlayed: "2 saat önce"
  },
  {
    id: 2,
    name: "Yeni Oyuncu",
    totalGames: 3,
    bestScore: 89,
    favoriteDifficulty: "easy", 
    achievements: ["İlk Oyun", "Vazo Kırıcı"],
    lastPlayed: "1 gün önce"
  }
];

export const gameHistory = [
  { date: "Bugün", difficulty: "Ev Kedisi", score: 156, duration: "8 dk", result: "Başarılı" },
  { date: "Dün", difficulty: "Sokak Kedisi", score: 203, duration: "12 dk", result: "Sahiplendim!" },
  { date: "2 gün önce", difficulty: "Anne Kedi", score: 245, duration: "15 dk", result: "Tüm Yavrular Kurtuldu!" },
  { date: "3 gün önce", difficulty: "Sokak Kedisi", score: 89, duration: "6 dk", result: "Açlıktan öldüm" },
  { date: "1 hafta önce", difficulty: "Ev Kedisi", score: 134, duration: "9 dk", result: "Sahibim mutlu!" }
];

export const achievements = [
  { 
    id: "first_game", 
    name: "İlk Oyun", 
    description: "İlk oyununu tamamladın!", 
    icon: "🎮",
    unlocked: true 
  },
  { 
    id: "vase_breaker", 
    name: "Vazo Kırıcı", 
    description: "5 vazo kırdın", 
    icon: "💥",
    unlocked: true 
  },
  { 
    id: "street_warrior", 
    name: "Sokak Savaşçısı", 
    description: "Sokak kedisi modunu 100+ puanla bitir", 
    icon: "⚔️",
    unlocked: true 
  },
  { 
    id: "mother_hero", 
    name: "Anne Kedi Kahramanı", 
    description: "Tüm yavruları kurtararak oyunu bitir", 
    icon: "👑",
    unlocked: true 
  },
  { 
    id: "adoption_master", 
    name: "Sahiplenme Ustası", 
    description: "5 kez başarıyla sahiplenildin", 
    icon: "🏠",
    unlocked: false 
  },
  { 
    id: "survival_expert", 
    name: "Hayatta Kalma Uzmanı", 
    description: "Açlık seviyesi 10'un altına düşmeden oyunu bitir", 
    icon: "🎯",
    unlocked: false 
  }
];

export const themes = {
  colorful: {
    name: "Renkli",
    backgrounds: {
      happy: "bg-gradient-to-br from-green-50 to-emerald-100",
      sad: "bg-gradient-to-br from-blue-50 to-sky-100",
      danger: "bg-gradient-to-br from-red-50 to-rose-100",
      worried: "bg-gradient-to-br from-orange-50 to-amber-100",
      panic: "bg-gradient-to-br from-red-100 to-pink-100",
      excited: "bg-gradient-to-br from-yellow-50 to-orange-100",
      default: "bg-gradient-to-br from-gray-50 to-slate-100"
    },
    menuBg: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
  },
  dark: {
    name: "Karanlık",
    backgrounds: {
      happy: "bg-gradient-to-br from-gray-800 to-gray-900",
      sad: "bg-gradient-to-br from-slate-800 to-slate-900",
      danger: "bg-gradient-to-br from-red-900 to-black",
      worried: "bg-gradient-to-br from-amber-900 to-black",
      panic: "bg-gradient-to-br from-red-800 to-black",
      excited: "bg-gradient-to-br from-yellow-900 to-black",
      default: "bg-gradient-to-br from-gray-900 to-black"
    },
    menuBg: "bg-gradient-to-br from-gray-900 to-black"
  },
  light: {
    name: "Aydınlık", 
    backgrounds: {
      happy: "bg-gradient-to-br from-white to-gray-50",
      sad: "bg-gradient-to-br from-gray-50 to-gray-100",
      danger: "bg-gradient-to-br from-red-50 to-gray-100",
      worried: "bg-gradient-to-br from-orange-50 to-gray-100", 
      panic: "bg-gradient-to-br from-red-100 to-gray-100",
      excited: "bg-gradient-to-br from-yellow-50 to-gray-100",
      default: "bg-gradient-to-br from-white to-gray-100"
    },
    menuBg: "bg-gradient-to-br from-white to-gray-100"
  }
};

export const weatherEffects = [
  { type: "sunny", effect: "Güneşli - Dışarıda oynamak güzel!", mood: "happy" },
  { type: "rainy", effect: "Yağmurlu - Dışarı çıkmak tehlikeli", mood: "sad" },
  { type: "snowy", effect: "Karlı - Çok soğuk, sıcak yer bul!", mood: "cold" },
  { type: "windy", effect: "Rüzgarlı - Kokular çok güçlü!", mood: "alert" }
];

export const timeOfDay = [
  { time: "morning", effect: "Sabah - İnsanlar uyanıyor", activity: "high" },
  { time: "afternoon", effect: "Öğleden sonra - Her yer sessiz", activity: "low" },
  { time: "evening", effect: "Akşam - Yemek saati!", activity: "high" },
  { time: "night", effect: "Gece - Sessizce dolaşma zamanı", activity: "stealth" }
];

export const personalities = {
  brave: { name: "Cesur", bonus: "Tehlikeli durumlarda +5 puan" },
  smart: { name: "Akıllı", bonus: "Strateji seçeneklerinde +5 puan" },
  lazy: { name: "Tembel", bonus: "Uyuma seçeneklerinde +3 puan" },
  cute: { name: "Sevimli", bonus: "İnsanlarla etkileşimde +5 puan" },
  mischievous: { name: "Yaramaz", bonus: "Karışıklık çıkarmada +7 puan" }
};