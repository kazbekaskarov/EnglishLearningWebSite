export type Lang = 'en' | 'ru' | 'kk' | 'tr'

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '' },
  { code: 'ru', label: 'RU', flag: '' },
  { code: 'kk', label: 'KZ', flag: '' },
  { code: 'tr', label: 'TR', flag: '' },
]

type Dict = Record<string, Record<Lang, string>>

export const T: Dict = {
  /* ===== NAV ===== */
  'nav.start':   { en: 'Start',   ru: 'Старт',   kk: 'Старт',   tr: 'Başlat' },
  'nav.games':   { en: 'Games',   ru: 'Игры',    kk: 'Ойындар', tr: 'Oyunlar' },
  'nav.manager': { en: 'Manager', ru: 'Менеджер', kk: 'Менеджер', tr: 'Yönetici' },
  'nav.about':   { en: 'About',   ru: 'О проекте', kk: 'Жоба туралы', tr: 'Hakkında' },

  /* ===== HERO ===== */
  'hero.pretitle': {
    en: 'PRESS START · LOAD GAME',
    ru: 'НАЖМИ START · ЗАГРУЗИ ИГРУ',
    kk: 'START БАС · ОЙЫНДЫ ЖҮКТЕ',
    tr: 'START\'A BAS · OYUNU YÜKLE',
  },
  'hero.title.l1': { en: 'B1 Vocabulary',   ru: 'B1 Лексика',    kk: 'B1 Лексика',     tr: 'B1 Kelime' },
  'hero.title.l2': { en: 'Quest Mode:',     ru: 'Режим Квеста:', kk: 'Тапсырма Режимі:', tr: 'Görev Modu:' },
  'hero.title.l3': { en: 'Engaged.',        ru: 'Включено.',     kk: 'Қосылды.',       tr: 'Aktif.' },
  'hero.sub': {
    en: '15 ready-to-play games, rhythms and quests for English lessons. One handbook, one companion site, zero risk of boring drills.',
    ru: '15 готовых игр, ритмов и квестов для уроков английского. Один хэндбук, один спутник-сайт и нулевой риск скучных drill-сессий.',
    kk: 'Ағылшын тілі сабақтары үшін 15 дайын ойын, ырғақ және тапсырма. Бір қолданба, бір серіктес сайт және жалықтыратын тапсырмалардың нөлдік қаупі.',
    tr: 'İngilizce dersleri için 15 hazır oyun, ritim ve görev. Tek bir el kitabı, tek bir yardımcı site ve sıkıcı tekrarlardan sıfır risk.',
  },
  'hero.cta.play':    { en: 'Play All Games', ru: 'Все игры',       kk: 'Барлық ойын',      tr: 'Tüm Oyunlar' },
  'hero.cta.manager': { en: 'Open Manager',   ru: 'Открыть Менеджер', kk: 'Менеджерді Ашу',  tr: 'Yöneticiyi Aç' },

  'hero.stat.games':    { en: 'GAMES',    ru: 'ИГР',       kk: 'ОЙЫН',      tr: 'OYUN' },
  'hero.stat.students': { en: 'STUDENTS', ru: 'УЧЕНИКИ',   kk: 'ОҚУШЫ',     tr: 'ÖĞRENCİ' },
  'hero.stat.cefr':     { en: 'CEFR LVL', ru: 'УРОВЕНЬ',   kk: 'ДЕҢГЕЙ',    tr: 'SEVİYE' },

  /* ===== QUOTE ===== */
  'quote.text': {
    en: '"Tell me and I forget, teach me and I may remember, involve me and I learn."',
    ru: '«Скажи мне — и я забуду, научи меня — и я запомню, вовлеки меня — и я научусь.»',
    kk: '«Маған айт — ұмытамын, үйрет — есте сақтаймын, тарт — үйренемін.»',
    tr: '"Bana söyle unuturum, öğret hatırlarım, dahil et öğrenirim."',
  },
  'quote.author': { en: '— Benjamin Franklin · 1750-ish', ru: '— Бенджамин Франклин · ~1750', kk: '— Бенджамин Франклин · ~1750', tr: '— Benjamin Franklin · ~1750' },

  /* ===== FEATURED ===== */
  'featured.eyebrow': { en: 'FEATURED CARTRIDGES', ru: 'РЕКОМЕНДУЕМЫЕ КАРТРИДЖИ', kk: 'ҰСЫНЫЛАТЫН КАРТРИДЖДЕР', tr: 'ÖNE ÇIKAN KARTUŞLAR' },
  'featured.title':   { en: 'Choose Your Quest',   ru: 'Выбери свой квест',        kk: 'Тапсырмаңды таңда',        tr: 'Görevini Seç' },
  'featured.all':     { en: 'All 15 games',        ru: 'Все 15 игр',               kk: 'Барлық 15 ойын',           tr: 'Tüm 15 oyun' },

  /* ===== WHY ===== */
  'why.eyebrow': { en: 'DESIGN PHILOSOPHY', ru: 'ФИЛОСОФИЯ ДИЗАЙНА', kk: 'ДИЗАЙН ФИЛОСОФИЯСЫ', tr: 'TASARIM FELSEFESİ' },
  'why.title':   { en: 'Why Pixels?',       ru: 'Почему пиксели?',   kk: 'Неліктен пиксельдер?', tr: 'Neden Pikseller?' },

  'why.game.title': { en: 'Game UI', ru: 'Игровой UI', kk: 'Ойын UI', tr: 'Oyun Arayüzü' },
  'why.game.text': {
    en: 'Each game is a "cartridge": HP bars, XP, respawns. The student doesn\'t learn vocabulary — they clear a level.',
    ru: 'Каждая игра — «картридж»: HP-бары, очки опыта, респаун. Ученик не учит лексику — он проходит уровень.',
    kk: 'Әр ойын — «картридж»: HP-жолақтар, тәжірибе ұпайлары, қайта тірілу. Оқушы лексиканы үйренбейді — деңгейден өтеді.',
    tr: 'Her oyun bir "kartuş": HP barları, XP, yeniden doğma. Öğrenci kelime öğrenmez — bir seviyeyi geçer.',
  },
  'why.body.title': { en: 'Body & Voice', ru: 'Тело и голос', kk: 'Дене мен Дауыс', tr: 'Vücut ve Ses' },
  'why.body.text': {
    en: 'Movement, rhythm, voice. Students stand up, slap cards, shout "Treasure!" — context locks the memory.',
    ru: 'Кинестетика, ритм, голос. Ученик встаёт, шлёпает карточки, кричит «Treasure!» — мозг запоминает контекстом.',
    kk: 'Қозғалыс, ырғақ, дауыс. Оқушы тұрады, карталарды соғады, «Treasure!» деп айқайлайды — ми контекст арқылы есте сақтайды.',
    tr: 'Hareket, ritim, ses. Öğrenci ayağa kalkar, kartlara vurur, "Treasure!" diye bağırır — beyin bağlamla hatırlar.',
  },
  'why.team.title': { en: 'Team Loops', ru: 'Командные циклы', kk: 'Команда циклдары', tr: 'Takım Döngüleri' },
  'why.team.text': {
    en: 'Pair duels, teams of 3-5, the whole class at once. Social pressure powers natural repetition.',
    ru: 'Парные дуэли, команды по 3-5, вся группа разом. Социальное давление работает на повторение.',
    kk: 'Жұптық жекпе-жек, 3-5 адамнан тұратын топтар, бүкіл сынып бірден. Әлеуметтік қысым қайталауға күш береді.',
    tr: 'İkili düellolar, 3-5 kişilik takımlar, tüm sınıf birlikte. Sosyal baskı tekrarı doğal hale getirir.',
  },
  'why.zero.title': { en: 'Zero Setup', ru: 'Без настройки', kk: 'Дайындықсыз', tr: 'Sıfır Kurulum' },
  'why.zero.text': {
    en: 'Handbook plus companion site. Noise, timer, randomizer, printables — one click, no installation.',
    ru: 'Хэндбук + сайт-спутник. Шум, таймер, рандомайзер, печать — за один клик, без установки.',
    kk: 'Қолданба + серіктес сайт. Шу, таймер, рандомайзер, басып шығару — бір рет басу арқылы.',
    tr: 'El kitabı + yardımcı site. Gürültü, zamanlayıcı, rastgele, yazdırma — tek tıkla, kurulum yok.',
  },
  'divider.demo': { en: 'END OF DEMO · INSERT COIN', ru: 'КОНЕЦ ДЕМО · ВСТАВЬ МОНЕТУ', kk: 'ДЕМО АЯҚТАЛДЫ · ТИЫН САЛ', tr: 'DEMO BİTTİ · JETON AT' },

  /* ===== GAMES PAGE ===== */
  'games.eyebrow': { en: 'SELECT MISSION · 15 / 15', ru: 'ВЫБЕРИ МИССИЮ · 15 / 15', kk: 'ТАПСЫРМАНЫ ТАҢДА · 15 / 15', tr: 'GÖREV SEÇ · 15 / 15' },
  'games.title':   { en: 'Game Library', ru: 'Библиотека игр', kk: 'Ойындар кітапханасы', tr: 'Oyun Kütüphanesi' },
  'games.sub': {
    en: 'Each "game" is a self-contained lesson module. Click a cartridge for the full script, vocabulary and timer.',
    ru: 'Каждая «игра» — самодостаточный модуль урока. Кликни по картриджу для полного сценария, лексики и таймера.',
    kk: 'Әр «ойын» — өзін-өзі қамтамасыз ететін сабақ модулі. Толық сценарий, лексика және таймер үшін картриджді басыңыз.',
    tr: 'Her "oyun" bağımsız bir ders modülüdür. Tam senaryo, kelime ve zamanlayıcı için bir kartuşa tıklayın.',
  },
  'games.search':   { en: 'search by title, topic or word...', ru: 'поиск по названию, теме или слову...', kk: 'атау, тақырып немесе сөз бойынша іздеу...', tr: 'başlık, konu veya kelimeye göre ara...' },
  'games.f.all':    { en: 'ALL',         ru: 'ВСЕ',         kk: 'БАРЛЫҒЫ',     tr: 'TÜMÜ' },
  'games.f.team':   { en: 'TEAM',        ru: 'КОМАНДЫ',     kk: 'КОМАНДА',     tr: 'TAKIM' },
  'games.f.pair':   { en: 'PAIR',        ru: 'ПАРЫ',        kk: 'ЖҰП',         tr: 'İKİLİ' },
  'games.f.whole':  { en: 'WHOLE CLASS', ru: 'ВЕСЬ КЛАСС',  kk: 'БАРЛЫҚ СЫНЫП', tr: 'TÜM SINIF' },
  'games.f.short':  { en: 'SHORT (≤15)', ru: 'КОРОТКИЕ (≤15)', kk: 'ҚЫСҚА (≤15)', tr: 'KISA (≤15)' },
  'games.f.long':   { en: 'LONG (20+)',  ru: 'ДЛИННЫЕ (20+)', kk: 'ҰЗАҚ (20+)',   tr: 'UZUN (20+)' },

  'games.kind.team':  { en: 'TEAM',  ru: 'КОМАНДА', kk: 'КОМАНДА', tr: 'TAKIM' },
  'games.kind.pair':  { en: 'PAIR',  ru: 'ПАРА',    kk: 'ЖҰП',     tr: 'İKİLİ' },
  'games.kind.solo':  { en: 'SOLO',  ru: 'СОЛО',    kk: 'ЖЕКЕ',    tr: 'TEKİL' },
  'games.kind.whole': { en: 'WHOLE CLASS', ru: 'ВЕСЬ КЛАСС', kk: 'БАРЛЫҚ СЫНЫП', tr: 'TÜM SINIF' },

  /* ===== DETAIL ===== */
  'detail.back':       { en: '◂ All Quests', ru: '◂ Все квесты',  kk: '◂ Барлық тапсырмалар', tr: '◂ Tüm Görevler' },
  'detail.quest':      { en: 'QUEST',         ru: 'КВЕСТ',         kk: 'ТАПСЫРМА',           tr: 'GÖREV' },
  'detail.howto':      { en: '▸ How to play', ru: '▸ Как играть',  kk: '▸ Ойнау тәртібі',    tr: '▸ Nasıl oynanır' },
  'detail.vocab':      { en: '▸ Vocabulary loot', ru: '▸ Лексический лут', kk: '▸ Лексикалық олжа', tr: '▸ Kelime ganimeti' },
  'detail.tips':       { en: '▸ Tips & Tweaks', ru: '▸ Советы и хаки', kk: '▸ Кеңестер мен амалдар', tr: '▸ İpuçları ve Püf Noktaları' },
  'detail.print':      { en: '▸ Print pack', ru: '▸ Пакет печати', kk: '▸ Басып шығару пакеті', tr: '▸ Yazdırma paketi' },
  'detail.next':       { en: 'NEXT QUEST', ru: 'СЛЕДУЮЩИЙ КВЕСТ', kk: 'КЕЛЕСІ ТАПСЫРМА', tr: 'SONRAKİ GÖREV' },
  'detail.tip.replace':{ en: 'Pick your own vocab — words can be swapped per topic.', ru: 'Подбери лексику под свою тему — слова можно заменить.', kk: 'Өз тақырыбыңа сай лексика таңда — сөздерді ауыстыруға болады.', tr: 'Kendi kelimelerini seç — kelimeler konuya göre değiştirilebilir.' },
  'detail.tip.timer':  { en: 'Use the Timer in Manager.', ru: 'Засекай время через Timer в Manager.', kk: 'Менеджердегі Таймерді қолдан.', tr: 'Yönetici içindeki Zamanlayıcıyı kullan.' },
  'detail.tip.random': { en: 'Split into teams via Randomizer.', ru: 'Деление на команды — Randomizer.', kk: 'Командаларға бөлу — Randomizer арқылы.', tr: 'Takımlara bölmek için Randomizer\'ı kullan.' },
  'detail.print.note': { en: 'Cards, board and materials are in', ru: 'Карточки, поле и материалы — в', kk: 'Карталар, тақта және материалдар —', tr: 'Kartlar, tahta ve materyaller —' },
  'detail.print.open': { en: 'Open',  ru: 'Открыть', kk: 'Ашу', tr: 'Aç' },

  '404.title': { en: '404 · Quest Not Found', ru: '404 · Квест не найден', kk: '404 · Тапсырма табылмады', tr: '404 · Görev bulunamadı' },
  '404.back':  { en: 'Back to library', ru: 'Назад в библиотеку', kk: 'Кітапханаға қайту', tr: 'Kütüphaneye dön' },

  /* ===== MANAGER ===== */
  'manager.eyebrow': { en: 'UTILITY BELT · CLASSROOM MANAGER', ru: 'НАБОР ИНСТРУМЕНТОВ · CLASSROOM MANAGER', kk: 'ҚҰРАЛДАР ЖИНАҒЫ · CLASSROOM MANAGER', tr: 'ARAÇ KEMERİ · CLASSROOM MANAGER' },
  'manager.title':   { en: 'Live Tools', ru: 'Live-инструменты', kk: 'Live-құралдар', tr: 'Canlı Araçlar' },
  'manager.sub': {
    en: 'Digital companions for the handbook: control noise, split the class, time rounds, run flashcards and print materials.',
    ru: 'Цифровые компаньоны хэндбука: контролируй шум, деление класса, отсчёт раунда, флэшкарты и печать.',
    kk: 'Қолданбаның цифрлық серіктері: шуды бақыла, сыныпты бөл, раунд таймері, флэшкарталар және басып шығару.',
    tr: 'El kitabının dijital yardımcıları: gürültüyü kontrol et, sınıfı böl, tur süresi, flaş kartlar ve yazdırma.',
  },

  'tab.noise':  { en: 'Noise',     ru: 'Шум',       kk: 'Шу',        tr: 'Gürültü' },
  'tab.random': { en: 'Randomizer', ru: 'Рандомайзер', kk: 'Рандомайзер', tr: 'Rastgele' },
  'tab.timer':  { en: 'Timer',     ru: 'Таймер',    kk: 'Таймер',    tr: 'Zamanlayıcı' },
  'tab.flash':  { en: 'Flashcards', ru: 'Флэшкарты', kk: 'Флэшкарталар', tr: 'Flaş Kartlar' },
  'tab.print':  { en: 'Printables', ru: 'Печать',    kk: 'Басып шығару', tr: 'Yazdırılabilir' },

  /* ----- Noise tool ----- */
  'noise.title':  { en: '▸ Noise Controller', ru: '▸ Контроль шума', kk: '▸ Шуды бақылау', tr: '▸ Gürültü Kontrolü' },
  'noise.mic':    { en: 'Use Microphone',     ru: 'Включить микрофон', kk: 'Микрофонды қосу', tr: 'Mikrofonu Kullan' },
  'noise.demo':   { en: 'Demo',               ru: 'Демо',             kk: 'Демо',           tr: 'Demo' },
  'noise.stop':   { en: 'Stop',               ru: 'Стоп',             kk: 'Тоқтату',        tr: 'Durdur' },
  'noise.calm':   { en: 'CALM',               ru: 'ТИХО',             kk: 'ТЫНЫШ',          tr: 'SAKİN' },
  'noise.busy':   { en: 'BUSY',               ru: 'ШУМНО',            kk: 'ШУЛЫ',           tr: 'YOĞUN' },
  'noise.loud':   { en: 'TOO LOUD!',          ru: 'СЛИШКОМ ГРОМКО!',  kk: 'ӨТЕ ҚАТТЫ!',    tr: 'ÇOK YÜKSEK!' },
  'noise.label':  { en: 'NOISE',              ru: 'ШУМ',              kk: 'ШУ',             tr: 'GÜRÜLTÜ' },
  'noise.desc':   { en: 'Bubbles rise with the classroom noise level. When it gets too loud, the indicator turns red.', ru: 'Шарики поднимаются по уровню звука. Когда становится «too loud» — индикатор краснеет.', kk: 'Шарлар сынып шуының деңгейіне қарай көтеріледі. Тым қатты болса — индикатор қызарады.', tr: 'Baloncuklar sınıfın gürültü düzeyine göre yükselir. Çok yüksek olduğunda — gösterge kırmızıya döner.' },
  'noise.error':  { en: 'Microphone unavailable. You can try Demo mode.', ru: 'Микрофон недоступен. Можно включить Demo-режим.', kk: 'Микрофон қолжетімсіз. Demo режимін қосуға болады.', tr: 'Mikrofon kullanılamıyor. Demo modunu deneyebilirsiniz.' },
  'noise.sens':   { en: 'SENS',  ru: 'ЧУВСТ',  kk: 'СЕЗГ',   tr: 'HASS' },
  'noise.wide':   { en: '⤢ Widescreen', ru: '⤢ Широкий экран', kk: '⤢ Кең экран', tr: '⤢ Geniş Ekran' },
  'noise.dock':   { en: '⤡ Dock',       ru: '⤡ Свернуть',     kk: '⤡ Жинау',     tr: '⤡ Sabitle' },

  /* ----- Random ----- */
  'random.title': { en: '▸ Team Randomizer', ru: '▸ Рандомайзер команд', kk: '▸ Команда рандомайзері', tr: '▸ Takım Rastgele Atıcı' },
  'random.desc':  { en: 'Type names (one per line), set the team count and hit Shuffle.', ru: 'Вбей имена (по одному в строке), укажи число команд и нажми Shuffle.', kk: 'Аттарды енгіз (бір жолға бір), команда санын көрсет және Shuffle бас.', tr: 'İsimleri yaz (her satıra bir tane), takım sayısını belirle ve Karıştır\'a bas.' },
  'random.placeholder': { en: 'One name per line', ru: 'По одному имени в строке', kk: 'Бір жолға бір ат', tr: 'Her satıra bir isim' },
  'random.count': { en: 'Number of teams', ru: 'Число команд', kk: 'Команда саны', tr: 'Takım sayısı' },
  'random.shuffle': { en: 'Shuffle', ru: 'Перемешать', kk: 'Араластыру', tr: 'Karıştır' },
  'random.team': { en: 'TEAM', ru: 'КОМАНДА', kk: 'КОМАНДА', tr: 'TAKIM' },

  /* ----- Timer ----- */
  'timer.title': { en: '▸ Round Timer', ru: '▸ Таймер раунда', kk: '▸ Раунд таймері', tr: '▸ Tur Zamanlayıcısı' },
  'timer.start': { en: '▶ Start', ru: '▶ Старт', kk: '▶ Бастау', tr: '▶ Başlat' },
  'timer.pause': { en: '❚❚ Pause', ru: '❚❚ Пауза', kk: '❚❚ Кідірту', tr: '❚❚ Duraklat' },
  'timer.reset': { en: '↺ Reset', ru: '↺ Сброс', kk: '↺ Қалпына келтіру', tr: '↺ Sıfırla' },
  'timer.min':   { en: 'MIN', ru: 'МИН', kk: 'МИН', tr: 'DK' },
  'timer.tip':   { en: 'Tip: 5–10 min for "Grab It First", 20–30 min for "Academic Journey".', ru: 'Совет: для «Grab It First» — 5–10 минут, для «Academic Journey» — 20–30.', kk: 'Кеңес: «Grab It First» үшін — 5–10 минут, «Academic Journey» үшін — 20–30.', tr: 'İpucu: "Grab It First" için 5–10 dk, "Academic Journey" için 20–30 dk.' },

  /* ----- Flash ----- */
  'flash.title': { en: '▸ Digital Flashcards', ru: '▸ Цифровые флэшкарты', kk: '▸ Цифрлық флэшкарталар', tr: '▸ Dijital Flaş Kartlar' },
  'flash.flip':  { en: 'FLIP', ru: 'ПОВЕРНУТЬ', kk: 'АУДАРУ', tr: 'ÇEVİR' },
  'flash.next':  { en: 'Next ▸', ru: 'Дальше ▸', kk: 'Келесі ▸', tr: 'Sonraki ▸' },
  'flash.prev':  { en: '◂ Prev', ru: '◂ Назад',  kk: '◂ Алдыңғы', tr: '◂ Önceki' },
  'flash.word':  { en: 'WORD', ru: 'СЛОВО', kk: 'СӨЗ', tr: 'KELİME' },
  'flash.def':   { en: 'DEFINITION', ru: 'ОПРЕДЕЛЕНИЕ', kk: 'АНЫҚТАМА', tr: 'TANIM' },

  /* ----- Print ----- */
  'print.title': { en: '▸ Printables', ru: '▸ Печать', kk: '▸ Басып шығару', tr: '▸ Yazdırılabilir' },
  'print.desc': {
    en: 'All Appendix materials, ready to print. The Print button opens the system dialog — pick a real printer or "Save as PDF".',
    ru: 'Все материалы Appendix, готовые к печати. Кнопка Print открывает системный диалог — выбери принтер или «Save as PDF».',
    kk: 'Барлық Appendix материалдары, басып шығаруға дайын. Print түймесі жүйелік терезені ашады — принтерді немесе «Save as PDF» таңда.',
    tr: 'Tüm Appendix malzemeleri, yazdırmaya hazır. Yazdır düğmesi sistem iletişim kutusunu açar — gerçek bir yazıcı veya "PDF olarak kaydet" seç.',
  },
  'print.print':   { en: 'Print', ru: 'Печать', kk: 'Басып шығару', tr: 'Yazdır' },
  'print.preview': { en: 'Preview', ru: 'Предпросмотр', kk: 'Алдын ала қарау', tr: 'Önizleme' },
  'print.this':    { en: 'Print this', ru: 'Печатать это', kk: 'Осыны басып шығару', tr: 'Bunu yazdır' },
  'print.close':   { en: 'Close', ru: 'Закрыть', kk: 'Жабу', tr: 'Kapat' },
  'print.preview_label': { en: 'Preview', ru: 'Предпросмотр', kk: 'Алдын ала қарау', tr: 'Önizleme' },

  /* ===== ABOUT ===== */
  'about.eyebrow': { en: 'README.TXT', ru: 'README.TXT', kk: 'README.TXT', tr: 'README.TXT' },
  'about.title':   { en: 'About the Quest', ru: 'О проекте', kk: 'Жоба туралы', tr: 'Görev Hakkında' },
  'about.intro1.html': {
    en: '<b>"Gamification: B1 Vocabulary Handbook for Teachers"</b> is a methodological guide bringing together <b>15 thematic games</b> for the B1 level. Each game develops lexical competence through communication, movement and teamwork.',
    ru: '<b>«Gamification: B1 Vocabulary Handbook for Teachers»</b> — методическое руководство, объединяющее <b>15 тематических игр</b> для уровня B1. Каждая игра развивает лексическую компетенцию через коммуникацию, движение и командную работу.',
    kk: '<b>«Gamification: B1 Vocabulary Handbook for Teachers»</b> — B1 деңгейіне арналған <b>15 тақырыптық ойынды</b> біріктіретін әдістемелік нұсқаулық. Әр ойын лексикалық құзыретті қарым-қатынас, қозғалыс және командалық жұмыс арқылы дамытады.',
    tr: '<b>"Gamification: B1 Vocabulary Handbook for Teachers"</b>, B1 seviyesi için <b>15 temalı oyunu</b> bir araya getiren metodolojik bir rehberdir. Her oyun, kelime yetkinliğini iletişim, hareket ve takım çalışması ile geliştirir.',
  },
  'about.intro2.html': {
    en: 'The <b>ENGAGE.exe</b> site is the digital companion of the handbook. Here you\'ll find interactive game cards, teacher tools (noise meter, timer, randomizer) and printable materials.',
    ru: 'Сайт <b>ENGAGE.exe</b> — цифровой компаньон хэндбука. Здесь вы найдёте интерактивные карточки игр, инструменты учителя (шумомер, таймер, рандомайзер) и материалы для печати.',
    kk: '<b>ENGAGE.exe</b> сайты — қолданбаның цифрлық серіктесі. Мұнда сіз интерактивті ойын карталарын, мұғалім құралдарын (шу өлшегіш, таймер, рандомайзер) және басып шығарылатын материалдарды табасыз.',
    tr: '<b>ENGAGE.exe</b> sitesi, el kitabının dijital yardımcısıdır. Burada interaktif oyun kartları, öğretmen araçları (gürültü ölçer, zamanlayıcı, rastgele) ve yazdırılabilir materyaller bulacaksınız.',
  },
  'about.pillars':   { en: '▸ The Pillars', ru: '▸ Опоры', kk: '▸ Тіректер', tr: '▸ Temel Direkler' },
  'about.quote':     { en: '▸ Quote', ru: '▸ Цитата', kk: '▸ Дәйексөз', tr: '▸ Alıntı' },
  'about.cta1':      { en: 'Explore the Library', ru: 'Открыть библиотеку', kk: 'Кітапхананы ашу', tr: 'Kütüphaneyi Keşfet' },
  'about.cta2':      { en: 'Open Manager', ru: 'Открыть Менеджер', kk: 'Менеджерді Ашу', tr: 'Yöneticiyi Aç' },
  'about.engagement.title': { en: 'Engagement', ru: 'Вовлечение', kk: 'Қызығушылық', tr: 'Katılım' },
  'about.engagement.text':  { en: 'Game over exercise. Engagement is the main engine of memory.', ru: 'Игра вместо упражнения. Вовлечение — главный двигатель памяти.', kk: 'Жаттығудың орнына ойын. Қызығушылық — естің басты қозғалтқышы.', tr: 'Egzersiz yerine oyun. Katılım, hafızanın ana motorudur.' },
  'about.communication.title': { en: 'Communication', ru: 'Коммуникация', kk: 'Қарым-қатынас', tr: 'İletişim' },
  'about.communication.text':  { en: 'Every game requires speaking and listening — vocabulary grows through dialogue.', ru: 'Каждая игра требует говорения и слушания — лексика прорастает через диалог.', kk: 'Әр ойын сөйлеуді және тыңдауды талап етеді — лексика диалог арқылы өседі.', tr: 'Her oyun konuşma ve dinleme gerektirir — kelime diyalog yoluyla büyür.' },
  'about.movement.title': { en: 'Movement', ru: 'Движение', kk: 'Қозғалыс', tr: 'Hareket' },
  'about.movement.text':  { en: 'Kinesthetics: students stand up, catch cards, slap, shout.', ru: 'Кинестетика: ученики встают, ловят карточки, шлёпают, кричат.', kk: 'Кинестетика: оқушылар тұрады, карталарды ұстайды, соғады, айқайлайды.', tr: 'Kinestetik: öğrenciler ayağa kalkar, kartları yakalar, vurur, bağırır.' },
  'about.repetition.title': { en: 'Repetition', ru: 'Повторение', kk: 'Қайталау', tr: 'Tekrar' },
  'about.repetition.text':  { en: 'Words repeat naturally through gameplay, not by drilling.', ru: 'Слова повторяются естественно через геймплей, а не через зубрёжку.', kk: 'Сөздер ойын барысында табиғи түрде қайталанады, жаттаудан емес.', tr: 'Kelimeler ezbere değil, oyun yoluyla doğal olarak tekrar eder.' },
  'about.context.title': { en: 'Context', ru: 'Контекст', kk: 'Контекст', tr: 'Bağlam' },
  'about.context.text':  { en: 'Each word is introduced in a situation, not in an isolated list.', ru: 'Каждое слово введено в ситуации, а не в изолированном списке.', kk: 'Әр сөз тізімде емес, жағдайда енгізіледі.', tr: 'Her kelime yalıtılmış bir listede değil, bir durumda tanıtılır.' },

  /* ===== FOOTER ===== */
  'footer.tagline': { en: 'MADE WITH', ru: 'СДЕЛАНО С', kk: 'ЖАСАЛДЫ', tr: 'YAPILDI' },
  'footer.and':     { en: '& PIXELS',   ru: 'И ПИКСЕЛЯМИ', kk: 'ЖӘНЕ ПИКСЕЛЬДЕРМЕН', tr: 'VE PİKSELLERLE' },
  'footer.authors': { en: 'AUTHORS', ru: 'АВТОРЫ', kk: 'АВТОРЛАРЫ', tr: 'YAZARLAR' },
  'footer.rights':  { en: 'ALL RIGHTS RESERVED', ru: 'ВСЕ ПРАВА ЗАЩИЩЕНЫ', kk: 'БАРЛЫҚ ҚҰҚЫҚТАР ҚОРҒАЛҒАН', tr: 'TÜM HAKLARI SAKLIDIR' },
  'footer.companion': { en: 'A COMPANION TO «GAMIFICATION: B1 VOCABULARY HANDBOOK FOR TEACHERS»', ru: 'СПУТНИК ХЭНДБУКА «GAMIFICATION: B1 VOCABULARY HANDBOOK FOR TEACHERS»', kk: '«GAMIFICATION: B1 VOCABULARY HANDBOOK FOR TEACHERS» ҚОЛДАНБАСЫНЫҢ СЕРІКТЕСІ', tr: '«GAMIFICATION: B1 VOCABULARY HANDBOOK FOR TEACHERS» EL KİTABININ YOLDAŞI' },

  /* ===== MARQUEE ===== */
  'marquee.1': { en: 'ENGAGE ME AND I LEARN', ru: 'ВОВЛЕКИ МЕНЯ — И Я НАУЧУСЬ', kk: 'МЕНІ ҚЫЗЫҚТЫР — ҮЙРЕНЕМІН', tr: 'BENİ DAHİL ET — ÖĞRENİRİM' },
  'marquee.2': { en: '15 GAMES · B1 LEVEL · CEFR', ru: '15 ИГР · УРОВЕНЬ B1 · CEFR', kk: '15 ОЙЫН · B1 ДЕҢГЕЙ · CEFR', tr: '15 OYUN · B1 SEVİYE · CEFR' },
  'marquee.3': { en: 'NO BORING DRILLS',           ru: 'НИКАКОЙ СКУЧНОЙ ЗУБРЁЖКИ', kk: 'ЖАЛЫҚТЫРАТЫН ЖАТТЫҒУ ЖОҚ', tr: 'SIKICI ALIŞTIRMA YOK' },
  'marquee.4': { en: 'POWERED BY PIXELS',          ru: 'НА ПИКСЕЛЬНОМ ДВИЖКЕ',     kk: 'ПИКСЕЛЬ ҚОЗҒАЛТҚЫШЫНДА',   tr: 'PİKSELLERLE GÜÇLÜ' },

  /* ===== THEME ===== */
  'theme.day':   { en: 'Switch to day mode',   ru: 'Включить дневной режим',  kk: 'Күндізгі режимге ауысу',  tr: 'Gündüz moduna geç' },
  'theme.night': { en: 'Switch to night mode', ru: 'Включить ночной режим',   kk: 'Түнгі режимге ауысу',     tr: 'Gece moduna geç' },
}

export function tr(key: string, lang: Lang): string {
  const entry = T[key]
  if (!entry) return key
  return entry[lang] ?? entry.en ?? key
}

