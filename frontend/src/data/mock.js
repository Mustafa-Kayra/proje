// Mock data for cat game - Ultra Enhanced Version with 20+ Details
export const catDetails = {
  sounds: {
    happy: ["Mırr mırr", "Miyav~", "Prrrr", "Miau miau"],
    sad: ["Miyaauuu...", "Hırrr...", "Mıyav...", "Öff..."],
    angry: ["MIYAV!", "HISSSS!", "GRRR!", "HRRRR!"],
    hungry: ["Miyav miyav!", "MIYAAAAV!", "Mır mır?", "Açım miyav!"],
    sleepy: ["Haaammm...", "*Esner*", "Mrrr...", "Zzz..."]
  },
  bodyLanguage: {
    happy: "Kuyruk dik, kulaklar ileri, gözler yarı kapalı",
    sad: "Kuyruk aşağıda, kulaklar geriye, küçülmüş",
    angry: "Tüyler diken diken, kuyruk şişkin, kulaklar arkada",
    curious: "Kulaklar dik, gözler büyük, burun titreyerek",
    sleepy: "Gözler yarık, kuyruk gevşek, vücut rahat"
  },
  seasons: {
    spring: { description: "İlkbahar - Kuşlar ötüyor, çiçek kokuları var", energy: 5 },
    summer: { description: "Yaz - Çok sıcak, gölge arıyorsun", energy: -2 },
    autumn: { description: "Sonbahar - Yapraklar düşüyor, harika oyuncaklar", energy: 3 },
    winter: { description: "Kış - Soğuk ve kar, sıcaklık gerekli", energy: -5 }
  },
  timeEffects: {
    dawn: { description: "Şafak - Kuşlar uyanıyor, avlama zamanı", huntBonus: 10 },
    morning: { description: "Sabah - İnsanlar koşturuyor, dikkat çekme zamanı", adoptionBonus: 5 },
    noon: { description: "Öğle - Herkes iş yerinde, sessizlik", stealthBonus: 10 },
    afternoon: { description: "İkindi - Çocuklar okuldan dönüyor", playBonus: 5 },
    evening: { description: "Akşam - Yemek saati, en iyi fırsat", foodBonus: 10 },
    night: { description: "Gece - Kedi zamanı, özgürlük", freedomBonus: 15 }
  },
  weatherMoods: {
    sunny: { mood: "energetic", description: "Güneşte tembellik yapma isteği" },
    rainy: { mood: "melancholic", description: "Camdan damlacıkları izleme isteği" },
    snowy: { mood: "playful", description: "Kar tanelerini kovalama isteği" },
    windy: { mood: "alert", description: "Savrulan yaprakları takip etme isteği" }
  }
};

export const gameScenarios = {
  easy: {
    name: "Ev Kedisi",
    description: "Sevimli ev kedisi olarak sahibinle mutlu yaşam!",
    personality: ["Tembel", "Sevimli", "Yaramaz"],
    infiniteMode: true,
    scenarios: [
      {
        id: 1,
        title: "Sabah Uyanışı - İlk Işık",
        description: "Güneş yüzüne vuruyor. Sahibin henüz uyuyor. Sen de hafif uykulu ama enerjilisin. *Karnın hafif gurulduyor*",
        mood: "happy",
        actionType: "choice",
        catSound: "Mırr mırr... *Geriniyor*",
        bodyLanguage: "Kulakların ileri dönük, kuyruk yavaşça sallanıyor",
        options: [
          { text: "Yüzüne pati ile nazikçe dokun", points: 10, ownerLove: 5, consequence: "Sahibin gülümseyerek uyanıyor: 'Günaydın tatlım' diyor ve seni okşuyor. Sen memnun mırıldanıyorsun." },
          { text: "Miyavlayarak nazikçe uyandır", points: 5, ownerLove: 2, consequence: "Sahibin gözlerini açıyor: 'Aman tanrım kaç saat oldu?' Der ve saat bakıyor. Sen sabırsızca bekleyip duruyorsun." },
          { text: "Karnına çık ve ağırlığınla uyanmasını sağla", points: 15, ownerLove: 8, consequence: "Sahibin gülerek: 'Benim küçük alarmım' diyor. Sen onun üstünde memnunca uzanıp mırıldanıyorsun." }
        ]
      },
      {
        id: 2,
        title: "Kahvaltı Diplomatı",
        description: "Sahibin mutfakta kahvaltı hazırlıyor. Tezgahta yumurta, peynir ve... balık konservesi var! *Burnun titreyerek kokuları alıyor*",
        mood: "hungry", 
        actionType: "social",
        catSound: "Miyav miyav! *Umutla*",
        bodyLanguage: "Kuyruk dik, gözler balık konservesinə odaklanmış",
        options: [
          { text: "Ayaklarının etrafında dolaşıp sevimli ses çıkar", points: 12, ownerLove: 6, consequence: "'Ayyy ne tatlısın sen!' diyor ve balık konservesini açıyor. Sen mutlulukla ronron yapıyorsun." },
          { text: "Tezgaha çıkıp doğrudan balık konservesine yürü", points: 8, ownerLove: -1, consequence: "'Hayır hayır, inersin şimdi!' diyor ama gülümsüyor. Sen inatla kalıp ona bakıyorsun." },
          { text: "Sessizce otur ve göz teması kurarak rica et", points: 18, ownerLove: 10, consequence: "'Bu bakış ne ya! Karşı duramıyorum' diyor ve sana özel porsiyon hazırlıyor. Sen zaferini kutluyorsun." }
        ]
      },
      {
        id: 3,
        title: "Vazo vs Kedi - Kadim Savaş",
        description: "Salonda güzel kristal vazo var. Güneş ışığı ona vuruyor ve ışık parıltıları duvarda oynuyor. *İçindeki avcı içgüdülerin devreye giriyor*",
        mood: "mischievous",
        actionType: "action", 
        catSound: "*Tıs tıs* Hırrrr... *Oyuncu*",
        bodyLanguage: "Kuyruk salllanıyor, gözler hedef üzerinde sabit",
        options: [
          { text: "Vazoyu yavaşça masa kenarına doğru it", points: 20, ownerLove: -2, consequence: "Vazo tehlikeli bir şekilde sallanıyor! Kalbin hızlanıyor, bu heyecan çok güzel!" },
          { text: "Vazonun yanından hızla geçerek sadece hafif dokun", points: 15, ownerLove: 0, consequence: "Vazo hafifçe titriyor. Sen de heyecanlı bir şekilde kaçıp güvenli mesafeden izliyorsun." },
          { text: "Vazoyu tamamen masa kenarından aşağı it!", points: 35, ownerLove: -5, consequence: "ÇATAK! Ses çok güzel! Sahibin koşarak geliyor: 'NEEE YAPTIIIIN!' Sen hızla saklanıyorsun." }
        ]
      },
      {
        id: 4,
        title: "Ev Boş - Özgürlük Zamanı",
        description: "Sahibin işe gitti. Ev tamamen senin! Sessizlik var ama bu kötü değil... Bu FIRSAT! *Kulaklarını dikip çevreyi dinliyorsun*",
        mood: "excited",
        actionType: "adventure",
        catSound: "Miau! *Heyecanlı*", 
        bodyLanguage: "Tüm vücut gergin, kuyruk dik ve titrek",
        options: [
          { text: "Yatak odasına git ve sahibinin giysilerinde yuvarlan", points: 15, ownerLove: 3, consequence: "Sahibinin kokusu çok güzel! Çarşafları biraz karıştırıyorsun ve onun üstünde uyukluyorsun." },
          { text: "Mutfak dolaplarını keşfe çık", points: 25, ownerLove: -3, consequence: "Dolap kapılarını açmayı başarıyorsun! İçinden çeşitli şeyler düşüyor. Ne kadar eğlenceli!" },
          { text: "Pencerelere çık ve dış dünyayı izle", points: 10, ownerLove: 2, consequence: "Pencereden kuşları, arabaları ve diğer kedileri izliyorsun. Çok sakinleştirici!" }
        ]
      },
      {
        id: 5,
        title: "Gizli Oyuncak Hazinesi",
        description: "Kanepenin altından eski fare oyuncağın çıktı! Bir de top ve tüy değneği var. *Avcı içgüdülerin kabariyor*",
        mood: "playful",
        actionType: "play",
        catSound: "*Çık çık* Mıyav! *Heyecanlı*",
        bodyLanguage: "Poposu havada, ön taraf alçakta, kuyruk hızla sallanıyor",
        options: [
          { text: "Fareyi ağzına alıp sahibine götürme görevini üstlen", points: 18, ownerLove: 8, consequence: "Sahibin eve geldiğinde hediyeni görüp çok şaşırıyor: 'Bana mı getirdin bunu?' Sen gurur duyuyorsun." },
          { text: "Üç oyuncakla da çılgınca oyna", points: 25, ownerLove: 5, consequence: "Harika avcı seansı! Tüm oyuncakları öldürüyorsun. Sonunda yorgun ama mutlusun." },
          { text: "Oyuncakları güvenli yerine sakla", points: 12, ownerLove: 2, consequence: "Akıllı davranış! Oyuncaklarını gizli hazine yerine koyuyorsun. Gelecek için güzel!" }
        ]
      },
      {
        id: 6,
        title: "Pencere Kenarında Kuş Gözlemi",
        description: "Pencere kenarında oturuyorsun. Dışarıda bir sürü kuş var! Serçeler, güvercinler... *Çeneni titreterek tıklama sesi çıkarıyorsun*",
        mood: "curious",
        actionType: "observation",
        catSound: "*Tık tık tık* Çık çık çık",
        bodyLanguage: "Gözler hedef odaklı, kuyruk sinirli şekilde titriyor",
        options: [
          { text: "Çeneni titreterek avcı sesleri çıkar", points: 15, ownerLove: 3, consequence: "Kuşlar senin sesini duysalar da tepki vermiyorlar. Sen frustre oluyorsun ama bu çok doğal!" },
          { text: "Camdaki yansımanla oyun oyna", points: 12, ownerLove: 2, consequence: "Kendi yansımanla eğlenceli oyunlar oynuyorsun. Çok eğlenceli!" },
          { text: "Pencereye pençeleri koyup tırmalama yap", points: 8, ownerLove: -1, consequence: "Pencerede tırmalama izleri bırakıyorsun. Sahibin bunu görmez umarım..." }
        ]
      },
      {
        id: 7,
        title: "Çamaşır Sepetiyle Karşılaşma",
        description: "Temiz çamaşır sepeti orada duruyor. İçinde yumuşacık havlular var... *İrkilmez bir şekilde yaklaşıyorsun*",
        mood: "happy", 
        actionType: "comfort",
        catSound: "Prrrrr... *Memnun*",
        bodyLanguage: "Rahat duruş, gözler yarı kapalı",
        options: [
          { text: "Çamaşır sepetine atla ve içinde yuvarlan", points: 20, ownerLove: -2, consequence: "PERFECT! Temiz çamaşırlar artık senin kokunu taşıyor. Çok rahat uyuyorsun." },
          { text: "Sadece sepet kenarından kokla", points: 8, ownerLove: 1, consequence: "Güzel kokular... Ama dokunmamak zor geliyor. İyi dayanıklılık!" },
          { text: "Sepeti devirip içindeki çamaşırları etrafa dağıt", points: 30, ownerLove: -4, consequence: "MUHTEŞEM! Tüm ev senin oyun alanın oldu. Çamaşırların arasında koşturuyorsun!" }
        ]
      },
      {
        id: 8,
        title: "Kedi Tuvaleti Dramı",
        description: "Tuvaletini kullanma zamanı geldi. Ama kum biraz eskimiş... *Burnunu kırıştırıyorsun*",
        mood: "disgusted",
        actionType: "necessity",
        catSound: "*Burnunu çeker* Öff...",
        bodyLanguage: "Burun kırışık, bir ayak havada, tereddütlü",
        options: [
          { text: "Sahibine seslenip temiz kum iste", points: 15, ownerLove: 5, consequence: "'Tabii canım, hemen temizleyeyim' diyor sahibin. Sen memnuniyetle bekliyorsun." },
          { text: "Mecbur kullan ama sonrasında pençelerini uzun uzun temizle", points: 10, ownerLove: 0, consequence: "İş halledildi ama çok hijyenik değildi. Uzun temizlik seansı yapıyorsun." },
          { text: "Sahibinin ayakkabısını alternatif olarak değerlendir", points: 25, ownerLove: -8, consequence: "İntikam tatlıdır! Sahibin şaşıracak bu sürprize. Sen rahatlıyorsun." }
        ]
      },
      {
        id: 9,
        title: "Ziyaretçi Alarmı",
        description: "Kapı zili çalıyor! Sahibinin arkadaşı geliyor. Yabancı insan kokusu alıyorsun... *Kulakların dikleşiyor*",
        mood: "alert",
        actionType: "social",
        catSound: "*Dikkatli miyav*",
        bodyLanguage: "Kulaklar dik, vücut gergin, hazır pozisyon",
        options: [
          { text: "Ziyaretçiye yaklaş ve tanışmak iste", points: 18, ownerLove: 6, consequence: "'Vay be ne sosyal kedi!' diyor misafir. Sen iltifatları kabul ediyorsun." },
          { text: "Uzaktan gözlemle, güvenli mesafede kal", points: 12, ownerLove: 2, consequence: "Akıllıca davranış. Ziyaretçiyi tanıyorsun ama risk almıyorsun." },
          { text: "Yatak altına saklan", points: 8, ownerLove: 0, consequence: "Güvenli alan! Ziyaretçi gidene kadar orada bekliyorsun." }
        ]
      },
      {
        id: 10,
        title: "Gece Yaramazlığı",
        description: "Gece yarısı. Herkes uyuyor ama sen çok enerjiksin! *İçindeki gece avcısı uyanıyor*",
        mood: "energetic",
        actionType: "adventure", 
        catSound: "*Sessiz miyav* Hehe...",
        bodyLanguage: "Sinsi duruş, gözler büyük ve parlak",
        options: [
          { text: "Evde gizli gece devriyesi yap", points: 20, ownerLove: 1, consequence: "Evin her köşesini kontrol ediyorsun. Her şey güvenli! Sen iyi bir bekçisin." },
          { text: "Sahibinin ayaklarına saldırı düzenle", points: 25, ownerLove: -1, consequence: "'AAAAHHH!' Sahibin uyanıyor. Sen de kaçıyorsun ama çok eğlenceliydi!" },
          { text: "Gece çılgınlığı yap - koş, zıpla, oyna", points: 30, ownerLove: -2, consequence: "GECE MOD AÇIK! Evin her yerinde çılgınca koşturuyorsun. En doğal halinde olmak çok güzel!" }
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
        title: "Soğuk Sabah Uyanışı",
        description: "Karton kutunda uyuyordun. Sabah çiy seni ıslatmış, vücudun titriyor. Karnın gurulduyup duruyor... *Zorla gözlerini açıyorsun*",
        mood: "cold",
        actionType: "survival", 
        catSound: "*Titrek miyav* Üşşş...",
        bodyLanguage: "Vücut büzülmüş, kuyruk bacakların arasında",
        hunger: -15,
        options: [
          { text: "Güneşli bir yer bul, ısınmaya odaklan", points: 12, hunger: -5, health: 5, adoptionChance: 3, consequence: "Güneşte ısınıyorsun ama açlığın artıyor. En azından hipotermiden korunuyorsun." },
          { text: "Hareket ederek vücudunu ısıt ve yemek ara", points: 18, hunger: 10, health: -5, adoptionChance: 8, consequence: "Aktif kalmak seni hem ısıttı hem de market önünde yemek bulmanı sağladı!" },
          { text: "Başka kedilerin sıcaklığından faydalanmaya çalış", points: 15, hunger: -2, health: 8, adoptionChance: 5, consequence: "Diğer kedilerle kış ittifakı kurdun. Birlikte daha sıcaksınız." }
        ]
      },
      {
        id: 2,
        title: "Çöp Konteyneri Keşfi", 
        description: "Büyük mavi çöp konteyneri var. İçinden yemek kokusu geliyor ama aynı zamanda tehlikeli olabilir... *Dikkatice yaklaşıyorsun*",
        mood: "cautious",
        actionType: "survival",
        catSound: "*Dikkatli koklama* Hımm...",
        bodyLanguage: "Vücut alçak, kulaklar dönen, çok dikkatli",
        hunger: -10,
        options: [
          { text: "Konteynere tırmanıp içeri gir", points: 20, hunger: 25, health: -10, adoptionChance: 2, consequence: "Bayat hamburger buldun! Ama çöp suyuna düştün ve pis kokuyorsun." },
          { text: "Konteynerin etrafında dökülen artıkları topla", points: 15, hunger: 15, health: -2, adoptionChance: 5, consequence: "Güvenli seçim! Biraz ekmek kırıntısı ve peynir parçası buldun." },
          { text: "Başka kedilerin yemek bulmasını bekle ve paylaş", points: 12, hunger: 8, health: 0, adoptionChance: 8, consequence: "Yaşlı kedi Mestan sana biraz balık verdi. Kedi dayanışması güzel!" }
        ]
      },
      {
        id: 3,
        title: "Tehlikeli Köpek Çetesi",
        description: "Üç büyük köpek sokak başında! Aralarında büyük Alman çobanı var. Seni fark ettiler... *Kalbin hızla çarpıyor*",
        mood: "danger",
        actionType: "escape", 
        catSound: "*Tıs çıkarır* HISSSS!",
        bodyLanguage: "Tüyler diken diken, kavis yapmış sırt, kuyruk şişkin",
        options: [
          { text: "Hemen en yakın ağaca tırman!", points: 25, health: -8, adoptionChance: 0, consequence: "Güvendesin ama pençelerin zarar gördü. Köpekler aşağıda havlıyor." },
          { text: "Çok büyük tıs çıkar ve kendini büyük göster", points: 30, health: -3, adoptionChance: 5, consequence: "İnanılmaz cesaretin köpekleri şaşırttı! Geri çekildiler. Sen gerçek bir savaşçısın!" },
          { text: "Dar sokağa doğru hızla kaç", points: 20, health: -15, adoptionChance: 0, consequence: "Kaçtın ama çok yoruldun. Nefes nefesesin ve ayağın hafif sakatlandı." }
        ]
      },
      {
        id: 4,
        title: "İyi Kalpli Nineden Yardım",
        description: "Yaşlı nine balkonda sana bakıyor. Elinde tabak var ve 'pissi pissi' diyor. Güvenilir görünüyor... *Temkinli yaklaşıyorsun*",
        mood: "hopeful", 
        actionType: "trust",
        catSound: "*Şüpheli miyav* Mıyav?",
        bodyLanguage: "Bir adım ileri, bir adım geri, kuyruk düşük",
        options: [
          { text: "Güvenle yaklaş ve yemeği kabul et", points: 25, hunger: 35, health: 10, adoptionChance: 30, consequence: "Harika pilav ve tavuk! Nine: 'Ne kadar zayıfsın sen' diyor ve daha çok veriyor." },
          { text: "Temkinli yaklaş, biraz ye sonra çekil", points: 18, hunger: 20, health: 5, adoptionChance: 15, consequence: "Akıllı davranış! Biraz yemek yedin ama güvenliğini koruyorsun." },
          { text: "Uzaktan izle ama yaklaşma", points: 8, hunger: -8, health: 0, adoptionChance: 0, consequence: "Güvenlik öncelik ama güzel fırsatı kaçırdın. Karnın daha çok gurulduyor." }
        ]
      },
      {
        id: 5,
        title: "Yağmurlu Gece Dramı",
        description: "Gök gürültülü yağmur başladı! Islanıyorsun ve çok soğuk. Sığınacak yer bulman şart... *Titreyerek çevreye bakıyorsun*",
        mood: "desperate",
        actionType: "shelter",
        catSound: "*Çaresiz miyav* Üüüshh...",
        bodyLanguage: "Vücut titreyerek, kuyruk bacaklar arası, kulaklar yatık",
        options: [
          { text: "Market kapısının altına sığın", points: 18, health: -8, adoptionChance: 20, consequence: "Biraz korunuyorsun ama nemli. Sabah market sahibi seni bulup süt veriyor!" },
          { text: "Arabaların altına gizlen", points: 12, health: -12, adoptionChance: 5, consequence: "Motor ısısı biraz yardım ediyor ama tehlikeli. Araba hareket etse büyük sorun!" },
          { text: "Apartman girişinde güvenlik görevlisinden yardım dile", points: 22, health: 0, adoptionChance: 35, consequence: "Görevli Mehmet amca sana battaniye veriyor: 'Yazık la sana' diyor." }
        ]
      },
      {
        id: 6,
        title: "Balık Pazarında Fırsat",
        description: "Balık pazarının yanındasın. Her yer balık kokıyor! Balıkçılar temizlik yapıyor... *Ağzın sulanıyor*",
        mood: "excited",
        actionType: "opportunity",
        catSound: "*Heyecanlı miyav* Mıyav mıyav!",
        bodyLanguage: "Kuyruk dik, gözler parıldıyor, burun aktif",
        hunger: -20,
        options: [
          { text: "Balıkçının dikkatini dağıtıp balık çalmaya çalış", points: 30, hunger: 40, health: -5, adoptionChance: 5, consequence: "Harika balık eti! Ama balıkçı seni kovaladı. Çok doyurucuydu!" },
          { text: "Balıkçının ayağına sürtün ve sevimli davran", points: 25, hunger: 30, health: 5, adoptionChance: 25, consequence: "'Ayyy tatlış' diyor ve sana balık artıkları veriyor. İyi taktik!" },
          { text: "Yere düşen balık parçalarını topla", points: 15, hunger: 20, health: 0, adoptionChance: 10, consequence: "Güvenli ama az. En azından temiz balık parçaları buldun." }
        ]
      },
      {
        id: 7,
        title: "Veteriner Hekim Karşılaşması", 
        description: "Veteriner klinik önündesin. Doktor seni fark etti ve yaklaşıyor. 'Gel bakalım' diyor... *Karışık hissediyorsun*",
        mood: "uncertain",
        actionType: "medical",
        catSound: "*Tereddütlü miyav* Mıy... av?",
        bodyLanguage: "Gerilmiş ama meraklı, kuyruk yavaş hareketli",
        options: [
          { text: "Doktora güvenle yaklaş", points: 35, health: 25, hunger: 20, adoptionChance: 45, consequence: "Muayene ediliyor ve aşıların yapılıyor! Doktor: 'Bu kediye sahip çıkmalı' diyor." },
          { text: "Mesafeli kal ama kaçma", points: 20, health: 10, hunger: 0, adoptionChance: 20, consequence: "Doktor sana uzaktan yemek veriyor ve durumunu kontrol ediyor. Güvenli!" },
          { text: "Hemen oradan uzaklaş", points: 10, health: -5, hunger: -5, adoptionChance: 0, consequence: "Güvenlik önce ama belki iyi bir fırsatı kaçırdın." }
        ]
      },
      {
        id: 8,
        title: "Diğer Kedilerle Yer Paylaşımı",
        description: "Favori beslenme noktanda başka kediler var. Yaşlı tekir Pamuk, genç sarman Limon... *Sosyal hiyerarşi zamanı*",
        mood: "social",
        actionType: "diplomacy",
        catSound: "*Sosyal miyav* Miau~",
        bodyLanguage: "Orta boy duruş, dikkatli ama dostane",
        options: [
          { text: "Saygıyla bekle, sıranı koru", points: 18, hunger: 15, health: 0, adoptionChance: 8, consequence: "Yaşlı Pamuk seni onayladı. Kedi kodlarına uygun davrandın!" },
          { text: "Cesaretle yerini al, ama kavga etme", points: 25, hunger: 25, health: -3, adoptionChance: 12, consequence: "Kendi haklarını savundun! Diğer kediler saygı duyuyor." },
          { text: "Başka yer ara, çatışma istemiyorsun", points: 12, hunger: 5, health: 0, adoptionChance: 5, consequence: "Barışçı çözüm. Az yemek bulsan da huzur içindesin." }
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
        title: "Sabah Yavru Kontrolü",
        description: "Yavrular sesli sesli miyavlıyor. Minnoş biraz sıcak geliyor, Pamuk çok aç, Karamel ise oynak... *Anne içgüdülerin devrede*",
        mood: "worried", 
        actionType: "nurturing",
        catSound: "*Koruyucu mırıldama* Mrrrow...",
        bodyLanguage: "Dikkatli duruş, kulaklar sürekli hareket halinde",
        kittens: [
          { name: "Minnoş", hunger: 25, health: 85, mood: "sick" },
          { name: "Pamuk", hunger: 10, health: 90, mood: "hungry" },
          { name: "Karamel", hunger: 40, health: 95, mood: "playful" }
        ],
        options: [
          { text: "Önce Minnoş'u kontrol et, sağlığı endişe verici", points: 25, health: -5, kittenHealth: 15, adoptionChance: 10, consequence: "Minnoş'un ateşi var! Onu yalayarak temizliyorsun ve sıcak tutuyorsun." },
          { text: "Pamuk'a acilen yemek bul, çok zayıf", points: 30, health: -10, kittenHunger: 30, adoptionChance: 8, consequence: "Tehlikeli yere giderek yemek buluyorsun. Pamuk doyuyor ama sen yoruldun." },
          { text: "Üç yavruyu da kontrol et, sistemli davran", points: 35, health: -15, kittenHealth: 10, kittenHunger: 20, adoptionChance: 15, consequence: "Mükemmel anne! Her yavruna ayrı ilgi gösteriyorsun ama çok yoruldun." }
        ]
      },
      {
        id: 2,
        title: "Yemek Avcılığı - Anne Sorumluluğu",
        description: "3 yavrunu beslemen gerekiyor. Kendi açlığın da artıyor. Çevrede tehlikeli köpekler var ama iyi yemek alanları da... *Zor karar*",
        mood: "determined",
        actionType: "hunt",
        catSound: "*Kararlı miyav* MIYAV!",
        bodyLanguage: "Gerilmiş kaslar, kuyruk sıkıca tutulmuş, gözler odaklanmış",
        options: [
          { text: "Tehlikeli ama zengin avcılık bölgesine git", points: 40, danger: 60, kittenHunger: 50, health: -20, consequence: "Harika av! Büyük fare yakaladın ama köpeklerle karşılaştın. Yaralısın ama yavrular tok." },
          { text: "Güvenli bölgede küçük avcılık yap", points: 25, danger: 10, kittenHunger: 25, health: -5, consequence: "Küçük böcekler ve biraz artık buldun. Az ama güvenli." },
          { text: "Diğer anne kedilerle ortak avcılık organize et", points: 35, danger: 20, kittenHunger: 40, health: -8, consequence: "Takım halinde avlandınız! Hem güvenli hem verimli." }
        ]
      },
      {
        id: 3,
        title: "Yavru Kaybı Panik Anı",
        description: "MINNOŞ YOK! Son gördüğünde yuvada uyuyordu. Şimdi hiçbir yerde yok... *Panik ve korku*",
        mood: "panic", 
        actionType: "rescue",
        catSound: "*Panikli miyav* MIYAAAAV! MINNOŞ!",
        bodyLanguage: "Tüm vücut gerilmiş, kuyruk titriyor, gözler büyümüş",
        options: [
          { text: "Çevrenin her yerini çılgınca ara", points: 35, health: -25, kittenSafety: 90, adoptionChance: 5, consequence: "Minnoş'u ağaç deliğinde buluyorsun! Takılıp kalmış. Sen bitkin ama o güvende." },
          { text: "Sistematik arama yap, panik yapma", points: 30, health: -15, kittenSafety: 85, adoptionChance: 10, consequence: "Sakin kalarak metodik arıyorsun. Minnoş komşu bahçede oyunken buluyorsun." },
          { text: "Yardım iste, diğer kedilerle organize ol", points: 28, health: -8, kittenSafety: 95, adoptionChance: 20, consequence: "Kedi topluluğu seferber oluyor! Minnoş çok çabuk bulunuyor." }
        ]
      },
      {
        id: 4,
        title: "Hastalık Krizi - Pamuk'un Durumu",
        description: "Pamuk nefes almakta zorlanıyor. Burun akıntısı var ve halsiz... Veteriner gerekiyor ama nasıl? *Anne kalbinle karar ver*",
        mood: "desperate",
        actionType: "medical",
        catSound: "*Çaresiz inleme* Mıaaauuu...",
        bodyLanguage: "Pamuk'un üstünde koruyucu duruş, kuyruk gergin",
        options: [
          { text: "Pamuk'u ağzında taşıyarak veterinere götür", points: 50, health: -15, kittenHealth: 60, adoptionChance: 70, consequence: "Uzun yolculuk! Veteriner Pamuk'u tedavi ediyor ve hepinizi sahipleniyor!" },
          { text: "İnsanlardan yardım iste, sesli miyavla", points: 35, health: -5, kittenHealth: 40, adoptionChance: 45, consequence: "İyi kalpli insan sizi veterinere götürüyor. Pamuk tedavi ediliyor!" },
          { text: "Doğal yöntemlerle tedavi etmeye çalış", points: 20, health: -3, kittenHealth: 20, adoptionChance: 10, consequence: "Pamuk'u yalayıp sıcak tutuyorsun. Biraz yardımcı oluyor ama yeterli değil." }
        ]
      },
      {
        id: 5,
        title: "Yuva Taşıma Operasyonu",
        description: "Mevcut yuva artık güvenli değil. Büyük makineler geliyor, gürültü var... Yavruları güvenli yere taşımalısın! *Büyük operasyon*",
        mood: "urgent",
        actionType: "relocation", 
        catSound: "*Komut miyavı* MİYAV! (Haydi!)",
        bodyLanguage: "Aksiyon modunda, kaslar gergin, hazır pozisyon",
        options: [
          { text: "3 sefer yap, her yavrunu ayrı ayrı taşı", points: 45, health: -30, kittenSafety: 95, adoptionChance: 15, consequence: "Mükemmel anne! Her yavrunu güvenle taşıdın. Çok yoruldun ama hepsi güvende." },
          { text: "İki yavrunu birden taşımaya çalış", points: 30, health: -20, kittenSafety: 75, adoptionChance: 10, consequence: "Riskli ama hızlı! Bir yavru hafif düştü ama büyük zarar yok." },
          { text: "Yavruları yürümeye teşvik et, peşinden götür", points: 35, health: -10, kittenSafety: 80, adoptionChance: 20, consequence: "Akıllıca! Yavrular kendi yürüyor, sen yönlendiriyorsun." }
        ]
      },
      {
        id: 6,
        title: "Sahiplenme Fırsatı - Aile Ziyareti",
        description: "Genç aile sizi ziyaret ediyor. Çocuklar yavrularla oynuyor, anne baba sizi değerlendiriyor... *Hayatınızı değiştirecek an*",
        mood: "hopeful",
        actionType: "adoption",
        catSound: "*Umutlu miyav* Mıyav... *Nazik*",
        bodyLanguage: "Sakin ama dikkatli, yavrularını koruyucu pozisyonda",
        options: [
          { text: "En iyi halini sergile, tüm aile için mükemmel ol", points: 50, adoptionChance: 85, consequence: "Ailə hayran kaldı! 'Hepsini alıyoruz' diyorlar. Mutlu son!" },
          { text: "Sadece yavrulara odaklan, onların mutluluğu önce", points: 35, adoptionChance: 70, consequence: "Yavrular sahipleniyor ama sen sokakta kalabilirsin..." },
          { text: "Temkinli davran, aileyi test et", points: 25, adoptionChance: 50, consequence: "Aile kararsız. 'Düşünmemiz lazım' diyorlar." }
        ]
      }
    ]
  }
};

export const gameStats = {
  easy: { points: 0, mood: 'happy', ownerLove: 50, currentSeason: 'spring', energy: 80 },
  medium: { points: 0, hunger: 50, health: 100, mood: 'neutral', adoptionChance: 10, reputation: 20, currentSeason: 'spring' },
  hard: { points: 0, health: 100, mood: 'protective', adoptionChance: 5, maternalBond: 90, currentSeason: 'spring', kittens: [
    { name: "Minnoş", hunger: 50, health: 100, mood: 'playful', personality: 'curious' },
    { name: "Pamuk", hunger: 50, health: 100, mood: 'sleepy', personality: 'gentle' },
    { name: "Karamel", hunger: 50, health: 100, mood: 'energetic', personality: 'brave' }
  ]}
};

export const playerProfiles = [
  {
    id: 1,
    name: "Kedi Ustası",
    totalGames: 45,
    bestScore: 890,
    longestSurvival: "2 saat 15 dakika",
    favoriteDifficulty: "hard",
    achievements: ["İlk Oyun", "Vazo Kırıcı", "Anne Kedi Kahramanı", "Sokak Savaşçısı", "Gece Avcısı", "Sahiplenme Uzmanı"],
    lastPlayed: "2 saat önce",
    totalPlayTime: "28 saat"
  },
  {
    id: 2, 
    name: "Yeni Oyuncu",
    totalGames: 8,
    bestScore: 234,
    longestSurvival: "45 dakika",
    favoriteDifficulty: "easy",
    achievements: ["İlk Oyun", "Vazo Kırıcı", "Sabır Kedisi"],
    lastPlayed: "1 gün önce", 
    totalPlayTime: "3 saat 20 dakika"
  }
];

export const gameHistory = [
  { date: "Bugün", difficulty: "Ev Kedisi", score: 456, duration: "1 saat 23 dk", result: "Sonsuz Mod Devam Ediyor", survivalTime: "1:23:00" },
  { date: "Bugün", difficulty: "Anne Kedi", score: 890, duration: "2 saat 15 dk", result: "Tüm Aile Sahiplendi!", survivalTime: "2:15:00" },
  { date: "Dün", difficulty: "Sokak Kedisi", score: 567, duration: "1 saat 45 dk", result: "Sahiplendim!", survivalTime: "1:45:00" },
  { date: "2 gün önce", difficulty: "Anne Kedi", score: 234, duration: "58 dk", result: "Yavru Kaybettim", survivalTime: "0:58:00" },
  { date: "3 gün önce", difficulty: "Sokak Kedisi", score: 123, duration: "32 dk", result: "Açlıktan Öldüm", survivalTime: "0:32:00" },
  { date: "1 hafta önce", difficulty: "Ev Kedisi", score: 678, duration: "2 saat 5 dk", result: "Sonsuz Mod - Durdurulan", survivalTime: "2:05:00" }
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
    description: "10 vazo kırdın", 
    icon: "💥",
    unlocked: true 
  },
  { 
    id: "night_hunter", 
    name: "Gece Avcısı", 
    description: "Gece senaryolarında 100+ puan topla", 
    icon: "🌙",
    unlocked: true 
  },
  { 
    id: "street_warrior", 
    name: "Sokak Savaşçısı", 
    description: "Sokak kedisi modunu 200+ puanla bitir", 
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
    name: "Sahiplenme Uzmanı", 
    description: "5 kez başarıyla sahiplenildin", 
    icon: "🏠",
    unlocked: true 
  },
  { 
    id: "survival_expert", 
    name: "Hayatta Kalma Uzmanı", 
    description: "Sokak kedisi modunda 2+ saat yaşa", 
    icon: "🎯",
    unlocked: false 
  },
  { 
    id: "patience_master", 
    name: "Sabır Kedisi", 
    description: "Ev kedisi modunda 3+ saat oyna", 
    icon: "⏰",
    unlocked: false 
  },
  { 
    id: "social_butterfly", 
    name: "Sosyal Kedi", 
    description: "Tüm sosyal seçenekleri dene", 
    icon: "🦋",
    unlocked: false 
  },
  { 
    id: "weather_master", 
    name: "Hava Durumu Ustası", 
    description: "Tüm hava koşullarında başarı göster", 
    icon: "🌦️",
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
      cold: "bg-gradient-to-br from-blue-100 to-indigo-100",
      hopeful: "bg-gradient-to-br from-green-100 to-teal-100",
      curious: "bg-gradient-to-br from-purple-50 to-indigo-100",
      determined: "bg-gradient-to-br from-indigo-50 to-blue-100",
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
      cold: "bg-gradient-to-br from-blue-900 to-black",
      hopeful: "bg-gradient-to-br from-green-900 to-black", 
      curious: "bg-gradient-to-br from-purple-900 to-black",
      determined: "bg-gradient-to-br from-indigo-900 to-black",
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
      cold: "bg-gradient-to-br from-blue-50 to-gray-100",
      hopeful: "bg-gradient-to-br from-green-50 to-gray-100", 
      curious: "bg-gradient-to-br from-purple-50 to-gray-100",
      determined: "bg-gradient-to-br from-indigo-50 to-gray-100",
      default: "bg-gradient-to-br from-white to-gray-100"
    },
    menuBg: "bg-gradient-to-br from-white to-gray-100"
  }
};

export const weatherEffects = [
  { type: "sunny", effect: "Güneşli - Tembellik moduna geçme isteği", mood: "lazy", bonus: { ownerLove: 2, points: 3 } },
  { type: "rainy", effect: "Yağmurlu - İçeride kalmak daha güvenli", mood: "cautious", bonus: { health: 5 } },
  { type: "snowy", effect: "Karlı - Oyuncu hisler uyanıyor", mood: "playful", bonus: { points: 5 } },
  { type: "windy", effect: "Rüzgarlı - Av içgüdüleri tetikleniyor", mood: "alert", bonus: { huntBonus: 10 } },
  { type: "foggy", effect: "Sisli - Gizlilik avantajı var", mood: "mysterious", bonus: { stealthBonus: 15 } }
];

export const timeOfDay = [
  { time: "dawn", effect: "Şafak - Kuşlar uyanıyor, av zamanı", activity: "hunting", bonus: { huntBonus: 15, points: 5 } },
  { time: "morning", effect: "Sabah - İnsanlar aktif, dikkat çekme fırsatı", activity: "social", bonus: { adoptionChance: 8, ownerLove: 3 } },
  { time: "noon", effect: "Öğle - Sessizlik, dinlenme zamanı", activity: "rest", bonus: { health: 5, energy: 10 } },
  { time: "afternoon", effect: "İkindi - Çocuklar dışarıda, oyun zamanı", activity: "play", bonus: { points: 5, ownerLove: 5 } },
  { time: "evening", effect: "Akşam - Yemek saati, en iyi fırsat!", activity: "feeding", bonus: { hunger: 10, adoptionChance: 10 } },
  { time: "night", effect: "Gece - Kedi zamanı, tam özgürlük", activity: "freedom", bonus: { points: 10, energy: 15 } }
];

export const personalities = {
  brave: { name: "Cesur", bonus: "Tehlikeli durumlarda +10 puan", description: "Risk almaktan korkmuyor" },
  smart: { name: "Akıllı", bonus: "Strateji seçeneklerinde +8 puan", description: "Her durumu analiz ediyor" },
  lazy: { name: "Tembel", bonus: "Uyuma seçeneklerinde +5 puan", description: "Enerji korumayı biliyor" },
  cute: { name: "Sevimli", bonus: "İnsanlarla etkileşimde +10 puan", description: "Karşı konulamaz çekiciliği var" },
  mischievous: { name: "Yaramaz", bonus: "Karışıklık çıkarmada +12 puan", description: "Hayat onun için bir oyun" },
  curious: { name: "Meraklı", bonus: "Keşif seçeneklerinde +7 puan", description: "Her şeyi merak ediyor" },
  social: { name: "Sosyal", bonus: "Diğer kedilerle etkileşimde +8 puan", description: "İletişim uzmanı" }
};

export const specialEvents = {
  catInHeat: {
    name: "Çiftleşme Dönemi",
    description: "Hormonal değişimler seni farklı davranmaya itiyor...",
    effects: { energy: 20, restlessness: 15, vocalness: 25 }
  },
  fullMoon: {
    name: "Dolunay Gecesi", 
    description: "Gece çok aydınlık, içindeki vahşi kedi uyanıyor...",
    effects: { energy: 30, huntBonus: 20, points: 10 }
  },
  catnipFound: {
    name: "Kedi Otu Bulma",
    description: "İnanılmaz! Kedi otu buldun! Sarhoş olma zamanı...",
    effects: { happiness: 50, energy: -10, silly: 30 }
  }
};

// Random event system
export const randomEvents = [
  {
    name: "Yabancı Kedi İnvazyonu",
    description: "Bölgene yabancı kediler geldi!",
    probability: 0.1,
    effects: { territorialBonus: true }
  },
  {
    name: "İnsan Yemek Festivali", 
    description: "Yakında festival var, yemek kokuları her yerde!",
    probability: 0.15,
    effects: { foodBonus: 20, adoptionChance: 15 }
  },
  {
    name: "Veteriner Kampanyası",
    description: "Ücretsiz aşı kampanyası başladı!",
    probability: 0.08, 
    effects: { healthBonus: 30, adoptionChance: 25 }
  }
];

export const memorySystem = {
  rememberedLocations: [],
  favoriteHumans: [],
  enemyAnimals: [],
  safePlaces: [],
  dangerousAreas: []
};