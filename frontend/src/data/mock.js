// Mock data for cat game
export const gameScenarios = {
  easy: {
    name: "Ev Kedisi",
    description: "Sevimli ev kedisi olarak sahibinle mutlu yaşam!",
    personality: ["Tembel", "Sevimli", "Yaramaz"],
    scenarios: [
      {
        id: 1,
        title: "Sabah Uyanışı",
        description: "Güneş yüzüne vuruyor. Sahibin henüz uyuyor. Ne yaparsın?",
        mood: "happy",
        options: [
          { text: "Yüzüne pati ile dokun", points: 10, consequence: "Sahibin gülümseyerek uyanıyor!" },
          { text: "Miyavlayarak uyandır", points: 5, consequence: "Biraz rahatsız ama seni seviyor" },
          { text: "Biraz daha uyu", points: 3, consequence: "Huzurlu bir sabah geçiriyorsun" }
        ]
      },
      {
        id: 2,
        title: "Vazo Fırsatı",
        description: "Masada güzel bir vazo var. Kimse yok.",
        mood: "mischievous",
        options: [
          { text: "Vazoyu düşür!", points: 25, consequence: "ÇATAK! +25 yaramazlık puanı!" },
          { text: "Vazonun etrafında dolaş", points: 10, consequence: "Dikkatli oyun, küçük puan" },
          { text: "Vazoya dokunma", points: -5, consequence: "Çok uslusun, sıkıcı..." }
        ]
      },
      {
        id: 3,
        title: "Sahibin İşe Gidiyor",
        description: "Sahibin kapıya doğru gidiyor. Bu fırsat anı!",
        mood: "excited",
        options: [
          { text: "Hemen mutfağa koş!", points: 20, consequence: "Mutfakta harika karışıklık çıkarıyorsun!" },
          { text: "Pencerede bekle", points: 5, consequence: "Sakin ama biraz sıkıcı" },
          { text: "Uyumaya devam et", points: 0, consequence: "Fırsat kaçtı!" }
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
        title: "Çöp Aramak",
        description: "Açlık seviyesi: Orta. Çöp tenekesinde yemek arayabilirsin.",
        mood: "neutral",
        hunger: -10,
        options: [
          { text: "Çöpü karıştır", points: 5, hunger: 15, consequence: "Biraz bayat ekmek buldun!" },
          { text: "Başka yer ara", points: 0, hunger: -5, consequence: "Hiçbir şey bulamadın" },
          { text: "Bekle ve gözlemle", points: 10, hunger: -2, consequence: "Güvenli ama aç kaldın" }
        ]
      },
      {
        id: 2,
        title: "Tehlikeli Köpek",
        description: "Büyük bir köpek seni fark etti ve yaklaşıyor!",
        mood: "danger",
        options: [
          { text: "Ağaca tırman", points: 15, health: -5, consequence: "Güvendesin ama pençen yaralandı" },
          { text: "Kaçmaya çalış", points: 10, health: -10, consequence: "Kaçtın ama yoruldun" },
          { text: "Tıs çıkar ve dik dur", points: 20, health: 0, consequence: "Köpek geri çekildi! Cesur davrandın" }
        ]
      },
      {
        id: 3,
        title: "İyi Kalpli İnsan",
        description: "Yaşlı bir kadın sana yemek veriyor. Bu güvenilir mi?",
        mood: "hopeful",
        options: [
          { text: "Yemeği ye", points: 25, hunger: 30, consequence: "Lezzetli! Belki yeni bir ev?" },
          { text: "Temkinli yaklaş", points: 15, hunger: 15, consequence: "Biraz yemek yedin, güvenli" },
          { text: "Uzak dur", points: 5, hunger: -5, consequence: "Güvenli ama aç kaldın" }
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
        title: "Yavrular İçin Yemek",
        description: "3 yavrun çok aç. Onlar için yemek bulman lazım.",
        mood: "worried",
        kittens: [
          { name: "Minnoş", hunger: 20 },
          { name: "Pamuk", hunger: 15 },
          { name: "Karamel", hunger: 25 }
        ],
        options: [
          { text: "Tehlikeli yere git, ama çok yemek var", points: 30, danger: 50, consequence: "Çok yemek buldun ama yaralandın" },
          { text: "Güvenli yemek ara", points: 15, danger: 10, consequence: "Az yemek buldun ama güvendesin" },
          { text: "Komşu kedilerden yardım iste", points: 20, danger: 0, consequence: "Başka anne kediler yardım etti" }
        ]
      },
      {
        id: 2,
        title: "Yavru Kaybı",
        description: "Minnoş görünmüyor! Onu bulmak zorundasın.",
        mood: "panic",
        options: [
          { text: "Her yeri ara", points: 25, health: -15, consequence: "Minnoş'u buldun ama çok yoruldun" },
          { text: "Diğer kedilerden yardım iste", points: 20, health: -5, consequence: "Beraber aradınız ve buldunuz" },
          { text: "Bekle, belki döner", points: 5, health: 0, consequence: "Çok riskli! Yavru tehlikede olabilir" }
        ]
      },
      {
        id: 3,
        title: "Sağlık Problemi",
        description: "Pamuk hasta görünüyor. Ateşi var.",
        mood: "sad",
        options: [
          { text: "Veteriner ara", points: 40, consequence: "İyi insan bulup Pamuk'u iyileştirdin!" },
          { text: "Şifalı otlar ara", points: 20, consequence: "Kısmen yardım etti, ama hala hasta" },
          { text: "Sıcak tut ve bekle", points: 10, consequence: "Durum değişmedi, endişeliysin" }
        ]
      }
    ]
  }
};

export const gameStats = {
  easy: { points: 0, mood: 'happy' },
  medium: { points: 0, hunger: 50, health: 100, mood: 'neutral' },
  hard: { points: 0, health: 100, mood: 'protective', kittens: [
    { name: "Minnoş", hunger: 50, health: 100 },
    { name: "Pamuk", hunger: 50, health: 100 },
    { name: "Karamel", hunger: 50, health: 100 }
  ]}
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

export const inventory = {
  toys: ["Fare oyuncağı", "Top", "Tüy değneği"],
  food: ["Kedi maması", "Balık", "Süt"],
  treasures: ["Parlak taş", "Renkli tüy", "Küçük zil"]
};