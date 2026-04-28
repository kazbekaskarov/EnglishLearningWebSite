import type { Lang } from '../i18n/dict'

export type GameDuration = 'short' | 'medium' | 'long'
export type GameKind = 'team' | 'pair' | 'solo' | 'whole-class'
export type LText = Record<Lang, string>
export type LSteps = Record<Lang, string[]>

export interface Game {
  id: string
  number: string
  topic: string
  title: string
  tagline: LText
  duration: GameDuration
  durationMin: string
  kind: GameKind
  difficulty: 1 | 2 | 3
  palette: { sky: string; ground: string; accent: string; accent2: string }
  steps: LSteps
  vocabulary: string[]
  artId:
    | 'kitchen' | 'gear' | 'cash' | 'cinema' | 'tower'
    | 'academic' | 'house' | 'work' | 'crime' | 'travel'
    | 'shop' | 'transport' | 'social' | 'pyramid' | 'star'
}

const t = (en: string, ru: string, kk: string, tr: string): LText => ({ en, ru, kk, tr })
const s = (en: string[], ru: string[], kk: string[], tr: string[]): LSteps => ({ en, ru, kk, tr })

export const GAMES: Game[] = [
  {
    id: 'kitchen-quest', number: '01', topic: 'Food & Cooking', title: 'Kitchen Quest',
    tagline: t(
      'Team quest to find ingredients and assemble a recipe.',
      'Командный квест по поиску ингредиентов и сборке рецепта.',
      'Ингредиенттерді тауып, рецепт құрастыру бойынша командалық тапсырма.',
      'Malzemeleri bulup tarif oluşturmaya yönelik takım görevi.'
    ),
    duration: 'medium', durationMin: '20-30 min', kind: 'team', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#a7f070', accent: '#ef7d57', accent2: '#ffcd75' },
    artId: 'kitchen',
    steps: s(
      [
        'Hand each team a dish card (Beshbarmak, Pasta with chicken, etc.).',
        'Hide ingredient cards around the room: horse meat, onion, mushrooms, cream...',
        'Teams find the ingredients, name them correctly and bring them to the "kitchen".',
        'The team assembles a recipe using cooking verbs: chop, whisk, simmer, fry.',
        'Each team presents their recipe — the most coherent instruction wins.',
      ],
      [
        'Раздайте каждой группе карточку блюда (Beshbarmak, Pasta with chicken и т.д.).',
        'Спрячьте карточки продуктов по классу: horse meat, onion, mushrooms, cream...',
        'Команды находят ингредиенты, правильно их называют и приносят на «кухню».',
        'Группа собирает рецепт, используя глаголы готовки: chop, whisk, simmer, fry.',
        'Презентация рецепта классу — побеждает команда с самой связной инструкцией.',
      ],
      [
        'Әр топқа тағам картасын беріңіз (Beshbarmak, Pasta with chicken т.б.).',
        'Сынып бойынша өнім карталарын жасырыңыз: horse meat, onion, mushrooms, cream...',
        'Топтар ингредиенттерді тауып, дұрыс атап, «асүйге» әкеледі.',
        'Топ chop, whisk, simmer, fry етістіктерін қолдана отырып рецепт құрайды.',
        'Рецептті сыныпқа таныстыру — ең тиянақты топ жеңеді.',
      ],
      [
        'Her takıma bir yemek kartı verin (Beshbarmak, Pasta with chicken vb.).',
        'Sınıfa malzeme kartları saklayın: horse meat, onion, mushrooms, cream...',
        'Takımlar malzemeleri bulur, doğru adlandırır ve "mutfağa" getirir.',
        'Takım pişirme fiilleriyle tarif oluşturur: chop, whisk, simmer, fry.',
        'Tarif sunumu — en tutarlı yönergeyi sunan takım kazanır.',
      ]
    ),
    vocabulary: ['chop','whisk','simmer','fry','boil','grate','dough','onion','mushroom','cream','recipe','ingredient'],
  },
  {
    id: 'guess-your-gear', number: '02', topic: 'Sport', title: 'Guess Your Gear',
    tagline: t(
      'Logical deduction: guess your sports role and find your pair.',
      'Логическая дедукция: угадай свою спортивную роль и найди пару.',
      'Логикалық дедукция: спорттық рөліңді тауып, жұбыңды тап.',
      'Mantıksal çıkarım: spor rolünü tahmin et ve eşini bul.'
    ),
    duration: 'short', durationMin: '10-15 min', kind: 'whole-class', difficulty: 2,
    palette: { sky: '#73eff7', ground: '#38b764', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'gear',
    steps: s(
      [
        'Stick a card on each student\'s back: a role (referee), gear (whistle) or place (court).',
        'Students walk around asking only Yes/No questions: "Do I work outdoors?", "Do I use a ball?".',
        'The goal is to discover your word and find a partner whose word relates to yours.',
        'Final: each pair explains the link (referee ↔ whistle, tennis player ↔ court).',
      ],
      [
        'На спину каждому ученику клеится карточка: роль (referee), инвентарь (whistle) или место (court).',
        'Ученики ходят и задают только Yes/No вопросы: "Do I work outdoors?", "Do I use a ball?".',
        'Цель — определить своё слово и найти партнёра, чьё слово связано с твоим.',
        'Финал: каждая пара объясняет связку (referee ↔ whistle, tennis player ↔ court).',
      ],
      [
        'Әр оқушының арқасына карта жапсырылады: рөл (referee), құрал (whistle) немесе орын (court).',
        'Оқушылар тек Yes/No сұрақтар қояды: "Do I work outdoors?", "Do I use a ball?".',
        'Мақсат — өз сөзіңді анықтап, оған байланысты сөзі бар жұп табу.',
        'Қорытынды: әр жұп байланысты түсіндіреді (referee ↔ whistle, tennis player ↔ court).',
      ],
      [
        'Her öğrencinin sırtına bir kart yapıştırılır: rol (referee), ekipman (whistle) veya yer (court).',
        'Öğrenciler dolaşıp yalnızca Evet/Hayır sorar: "Do I work outdoors?", "Do I use a ball?".',
        'Amaç — kendi kelimeni bulmak ve kelimenle ilişkili bir partner bulmak.',
        'Final: her çift bağlantıyı açıklar (referee ↔ whistle, tennis player ↔ court).',
      ]
    ),
    vocabulary: ['referee','whistle','court','racket','goalkeeper','net','coach','helmet','arena','spectator'],
  },
  {
    id: 'fast-cash', number: '03', topic: 'Money', title: 'Fast Cash',
    tagline: t(
      'Speed race: grab the right "banknote" by definition.',
      'Гонка на скорость: схвати правильную «купюру» по определению.',
      'Жылдамдық жарысы: анықтама бойынша дұрыс «купюраны» іл.',
      'Hız yarışı: tanıma göre doğru "banknotu" kap.'
    ),
    duration: 'short', durationMin: '5-10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#5d275d', ground: '#a7f070', accent: '#ffcd75', accent2: '#38b764' },
    artId: 'cash',
    steps: s(
      [
        'Stick "banknote" cards around the room: mortgage, loan, salary, refund, debt.',
        'Read a definition: "Money you borrow from a bank to buy a house".',
        'Two players with sticky-cup launchers — first to "shoot" the right note wins.',
        'The winner makes a sentence with the word, otherwise the point goes to the rival.',
      ],
      [
        'Расклейте по классу «купюры» со словами: mortgage, loan, salary, refund, debt.',
        'Учитель зачитывает определение: "Money you borrow from a bank to buy a house".',
        'Двое игроков с присосками — кто первый «выстрелил» в правильную купюру.',
        'Победитель строит предложение со словом, иначе очко уходит сопернику.',
      ],
      [
        'Сынып бойынша «купюраларды» жапсырыңыз: mortgage, loan, salary, refund, debt.',
        'Мұғалім анықтама оқиды: "Money you borrow from a bank to buy a house".',
        'Сорғыштары бар екі ойыншы — кім бірінші дұрыс купюраны «атып» алады.',
        'Жеңімпаз сөзбен сөйлем құрайды, әйтпесе ұпай қарсыласқа кетеді.',
      ],
      [
        'Sınıfa "banknotları" yapıştırın: mortgage, loan, salary, refund, debt.',
        'Öğretmen tanım okur: "Money you borrow from a bank to buy a house".',
        'Vantuzlu iki oyuncu — doğru banknotu ilk "vuran" kazanır.',
        'Kazanan kelimeyle bir cümle kurar, kuramazsa puan rakibe gider.',
      ]
    ),
    vocabulary: ['mortgage','loan','salary','refund','debt','income','tax','deposit','cash','currency'],
  },
  {
    id: 'roll-and-write', number: '04', topic: 'Cinema', title: 'Roll & Write',
    tagline: t(
      'Dice decides who describes the term under time pressure.',
      'Кубик решает, кто описывает термин под давлением времени.',
      'Кубик кімнің терминді сипаттайтынын шешеді.',
      'Zar, kimin baskı altında terimi tanımlayacağına karar verir.'
    ),
    duration: 'medium', durationMin: '15 min', kind: 'team', difficulty: 2,
    palette: { sky: '#0f1020', ground: '#29274c', accent: '#ffcd75', accent2: '#41a6f6' },
    artId: 'cinema',
    steps: s(
      [
        'Group sits in a circle with a sheet, a pen and a die in the middle.',
        'Each takes turns rolling. On a 5 or 6 — grab the pen and write a definition.',
        'Others keep rolling. If they roll 5/6 — they steal the pen.',
        'The game runs 5 minutes. The team with most correct definitions wins.',
      ],
      [
        'Группа сидит в кругу: лист, ручка и кубик в центре.',
        'Все по очереди бросают кубик. Выпало 5 или 6 — хватаешь ручку и пишешь определение.',
        'Остальные продолжают бросать. Если выпадает 5/6 — отбирают ручку.',
        'Игра идёт 5 минут. Команда с большим числом корректных описаний побеждает.',
      ],
      [
        'Топ шеңберде отырады: ортада парақ, қалам және кубик.',
        'Кезекпен кубик лақтырылады. 5 немесе 6 түсті — қаламды ал, анықтама жаз.',
        'Қалғандары лақтыруды жалғастырады. 5/6 түссе — қаламды тартып алады.',
        'Ойын 5 минут жүреді. Көп дұрыс анықтама жазған топ жеңеді.',
      ],
      [
        'Grup daire şeklinde oturur: ortada kağıt, kalem ve zar.',
        'Sırayla zar atılır. 5 veya 6 gelirse — kalemi kap ve tanım yaz.',
        'Diğerleri atmaya devam eder. 5/6 gelirse — kalemi alırlar.',
        'Oyun 5 dakika sürer. En çok doğru tanım yapan takım kazanır.',
      ]
    ),
    vocabulary: ['plot','sequel','soundtrack','cast','director','script','trailer','review','genre','actor','scene'],
  },
  {
    id: 'tallest-tower', number: '05', topic: 'The Body', title: 'The Tallest Tower',
    tagline: t(
      'Explain a word — get a cup. Build the tallest tower.',
      'Объясни слово — получи стаканчик. Построй самую высокую башню.',
      'Сөзді түсіндір — стакан ал. Ең биік мұнара тұрғыз.',
      'Bir kelimeyi açıkla — bardak kazan. En yüksek kuleyi inşa et.'
    ),
    duration: 'medium', durationMin: '15-20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#ef7d57', accent: '#a7f070', accent2: '#f4b4c5' },
    artId: 'tower',
    steps: s(
      [
        'Each team gets plastic cups and vocabulary cards.',
        'One player explains a word (no translation, no cognates). The team guesses.',
        'For each correct guess — one cup added to the tower.',
        'After 10 minutes, the tallest tower wins.',
      ],
      [
        'Каждой команде — стопка пластиковых стаканчиков и карточки лексики.',
        'Один игрок объясняет слово (без перевода и однокоренных). Команда угадывает.',
        'За каждое угаданное слово — один стаканчик в башню.',
        'Через 10 минут — у кого башня выше, тот победил.',
      ],
      [
        'Әр командаға пластик стакандар және лексика карталары беріледі.',
        'Бір ойыншы сөзді түсіндіреді (аудармасыз, түбірлес сөзсіз). Команда табады.',
        'Әр дұрыс табылған сөз үшін — мұнараға бір стакан.',
        '10 минуттан кейін мұнарасы биігі — жеңімпаз.',
      ],
      [
        'Her takıma plastik bardak ve kelime kartı verilir.',
        'Bir oyuncu kelimeyi açıklar (çeviri ve kök kelime yok). Takım tahmin eder.',
        'Her doğru tahmin için kuleye bir bardak eklenir.',
        '10 dakika sonra en yüksek kule kazanır.',
      ]
    ),
    vocabulary: ['nod','whistle','stomach','ankle','wrist','knee','shoulder','elbow','sneeze','blink','frown'],
  },
  {
    id: 'academic-journey', number: '06', topic: 'Education', title: 'Academic Journey',
    tagline: t(
      'Board game: travel from kindergarten to graduation speech.',
      'Настольная бродилка: пройди путь от детсада до выпускной речи.',
      'Үстел ойыны: балабақшадан бітіру сөзіне дейін жол жүр.',
      'Masa oyunu: anaokulundan mezuniyet konuşmasına yolculuk.'
    ),
    duration: 'long', durationMin: '20-30 min', kind: 'team', difficulty: 3,
    palette: { sky: '#73eff7', ground: '#a7f070', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'academic',
    steps: s(
      [
        'Lay out the board: kindergarten → primary → secondary → college.',
        'Players roll the die and move tokens. Each square has a task (name 3 subjects).',
        'Trap events: "Overslept" → -2 squares. "Caught Cheating" → skip turn.',
        'At the finish, the graduate gives a short speech — without it, no win.',
      ],
      [
        'Разложите игровое поле: kindergarten → primary → secondary → college.',
        'Игроки бросают кубик и двигают фишки. На каждой клетке — задание (назови 3 предмета).',
        'События-ловушки: "Overslept" → -2 клетки. "Caught Cheating" → пропуск хода.',
        'На финише выпускник произносит короткую речь — без неё не победить.',
      ],
      [
        'Ойын тақтасын жайыңыз: kindergarten → primary → secondary → college.',
        'Ойыншылар кубик лақтырып, фишкаларды жылжытады. Әр шаршыда тапсырма (3 пәнді ата).',
        'Қақпан-оқиғалар: "Overslept" → -2 шаршы. "Caught Cheating" → жүрісті өткізу.',
        'Аяғында түлек қысқа сөз сөйлейді — онсыз жеңіс жоқ.',
      ],
      [
        'Oyun tahtasını kurun: kindergarten → primary → secondary → college.',
        'Oyuncular zar atıp pul oynatır. Her karede bir görev (3 ders adı söyle).',
        'Tuzaklar: "Overslept" → -2 kare. "Caught Cheating" → tur atla.',
        'Bitişte mezun kısa bir konuşma yapar — onsuz kazanılmaz.',
      ]
    ),
    vocabulary: ['kindergarten','primary','secondary','college','degree','exam','tuition','scholarship','graduation','semester'],
  },
  {
    id: 'speak-and-score', number: '07', topic: 'House', title: 'Speak & Score',
    tagline: t(
      'Quiz with multi-level cards: risk for points.',
      'Викторина с разноуровневыми карточками: рискуй ради очков.',
      'Әртүрлі деңгейлі карталармен викторина: ұпай үшін тәуекел ет.',
      'Çok seviyeli kartlarla bilgi yarışması: puan için risk al.'
    ),
    duration: 'medium', durationMin: '20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#5d275d', ground: '#ef7d57', accent: '#ffcd75', accent2: '#a7f070' },
    artId: 'house',
    steps: s(
      [
        'Place three card piles: Role Play (5 pts), Situational (3), Understanding (2).',
        'A team picks a card: e.g. "Describe your dream house in 90 seconds".',
        'The opposing team judges: passed / not passed.',
        'Points add up. The team with the highest score wins.',
      ],
      [
        'Положите три стопки карточек: Role Play (5 очков), Situational (3), Understanding (2).',
        'Команда выбирает карточку: например, "Опиши дом мечты на 90 секунд".',
        'Жюри (другая команда) оценивает: засчитано / не засчитано.',
        'Очки суммируются. Побеждает команда с наибольшим счётом.',
      ],
      [
        'Үш үйме карта қойыңыз: Role Play (5 ұпай), Situational (3), Understanding (2).',
        'Команда карта таңдайды: мысалы, "Армандағы үйді 90 секундта сипаттаңыз".',
        'Қарсы команда бағалайды: есепке алынды / алынбады.',
        'Ұпайлар қосылады. Ұпайы көп команда жеңеді.',
      ],
      [
        'Üç kart destesi koyun: Role Play (5 puan), Situational (3), Understanding (2).',
        'Takım kart seçer: örneğin "Hayalindeki evi 90 saniyede anlat".',
        'Karşı takım değerlendirir: geçti / geçmedi.',
        'Puanlar toplanır. En çok puanı olan takım kazanır.',
      ]
    ),
    vocabulary: ['terrace','patio','realtor','mortgage','tenant','landlord','attic','basement','balcony','cottage'],
  },
  {
    id: 'grab-it-first', number: '08', topic: 'Work', title: 'Grab It First!',
    tagline: t(
      'One-on-one duel: grab the cup and step toward victory.',
      'Дуэль один-на-один: схвати стакан и шагай к победе.',
      'Жеке жекпе-жек: стаканды іліп ал, жеңіске қарай адымда.',
      'Bire bir düello: bardağı kap ve zafere doğru adım at.'
    ),
    duration: 'short', durationMin: '5-10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#0f1020', ground: '#5d275d', accent: '#ffcd75', accent2: '#41a6f6' },
    artId: 'work',
    steps: s(
      [
        'Two players stand on either side of a table. A plastic cup sits in the middle.',
        'The teacher reads a definition: "to leave a job voluntarily".',
        'The first to grab the cup answers. Correct (resign) — one step toward the rival.',
        'The first to "reach" the rival wins the duel.',
      ],
      [
        'Двое игроков стоят по разные стороны стола. В центре — пластиковый стакан.',
        'Учитель читает определение: "to leave a job voluntarily".',
        'Кто первый схватил стакан — отвечает. Правильно (resign) — шаг к сопернику.',
        'Кто первым «дошёл» до соперника — выиграл дуэль.',
      ],
      [
        'Екі ойыншы үстелдің екі жағында тұрады. Ортада — пластик стакан.',
        'Мұғалім анықтама оқиды: "to leave a job voluntarily".',
        'Кім бірінші стаканды ілді — жауап береді. Дұрыс (resign) — қарсыласқа қарай қадам.',
        'Кім бірінші қарсыласқа «жетті» — жекпе-жекті жеңді.',
      ],
      [
        'İki oyuncu masanın iki tarafında durur. Ortada plastik bardak vardır.',
        'Öğretmen bir tanım okur: "to leave a job voluntarily".',
        'Bardağı ilk kapan cevap verir. Doğruysa (resign) — rakibe doğru bir adım.',
        'Rakibe ilk "ulaşan" düelloyu kazanır.',
      ]
    ),
    vocabulary: ['resign','promote','fire','hire','salary','overtime','intern','colleague','deadline','contract'],
  },
  {
    id: 'case-file-x', number: '09', topic: 'Crime', title: 'Case File X',
    tagline: t(
      'A theft from the Louvre. Decode the clues, find the thief.',
      'Кража из Лувра. Расшифруй улики, найди преступника.',
      'Луврдан ұрлық. Іздерді шеш, қылмыскерді тап.',
      'Louvre\'dan hırsızlık. İpuçlarını çöz, hırsızı bul.'
    ),
    duration: 'long', durationMin: '30-40 min', kind: 'team', difficulty: 3,
    palette: { sky: '#0f1020', ground: '#29274c', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'crime',
    steps: s(
      [
        'Station #1: decode a reversed audio testimony from a witness.',
        'Station #2: find a hidden message in a text (acrostic, highlighted letters).',
        'Analyse suspect dossiers: Hugh Jass (guard), Cruella la Grande (historian), Jackie Bon (cleaner).',
        'The team accuses — using vocabulary: alibi, motive, witness, suspect.',
      ],
      [
        'Станция №1: расшифровать перевёрнутое аудио-показание свидетеля.',
        'Станция №2: найти скрытое послание в тексте (акростих, выделение букв).',
        'Анализ досье подозреваемых: Hugh Jass (охранник), Cruella la Grande (историк), Jackie Bon (уборщик).',
        'Команда обвиняет — обосновывая лексикой: alibi, motive, witness, suspect.',
      ],
      [
        '№1 станция: куәгердің кері айналған аудио-куәлігін шеш.',
        '№2 станция: мәтіндегі жасырын хабарды тап (акростих, әріптерді бөлектеу).',
        'Күдіктілердің досьесін талда: Hugh Jass (күзетші), Cruella la Grande (тарихшы), Jackie Bon (тазалаушы).',
        'Команда айыптайды — лексиканы пайдалана отырып: alibi, motive, witness, suspect.',
      ],
      [
        'İstasyon 1: bir tanığın tersine çevrilmiş ses ifadesini çöz.',
        'İstasyon 2: bir metinde gizli mesaj bul (akrostiş, harf vurgulama).',
        'Şüpheli dosyalarını analiz et: Hugh Jass (güvenlik), Cruella la Grande (tarihçi), Jackie Bon (temizlikçi).',
        'Takım suçlama yapar — kelime kullanarak: alibi, motive, witness, suspect.',
      ]
    ),
    vocabulary: ['alibi','motive','witness','suspect','evidence','clue','robbery','theft','arrest','interrogate'],
  },
  {
    id: 'boom-boom-clap', number: '10', topic: 'Travel', title: 'Boom Boom Clap',
    tagline: t(
      'Rhythm game: catch the card on beat with "boom-boom-clap".',
      'Ритмическая игра: лови карточку в такт «бум-бум-хлоп».',
      'Ырғақ ойыны: «бум-бум-шапалақ» ырғағында картаны ұста.',
      'Ritim oyunu: "boom-boom-clap" ritminde kartı yakala.'
    ),
    duration: 'short', durationMin: '10 min', kind: 'whole-class', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#ffcd75', accent: '#ef7d57', accent2: '#73eff7' },
    artId: 'travel',
    steps: s(
      [
        'Everyone taps the table: "boom — boom — clap", "boom — boom — clap".',
        'On the "clap", the teacher says part of a definition in rhythm.',
        'On the next "clap", students must grab the matching card.',
        'Lost the rhythm — the card returns, the turn moves on.',
      ],
      [
        'Все стучат по столу: «бум — бум — хлоп», «бум — бум — хлоп».',
        'На «хлопе» учитель в ритме говорит часть определения.',
        'На следующем «хлопе» ученики должны успеть схватить нужную карточку.',
        'Сбился с ритма — карточка возвращается, ход переходит дальше.',
      ],
      [
        'Бәрі үстелге соғады: «бум — бум — шапалақ», «бум — бум — шапалақ».',
        '«Шапалақта» мұғалім ырғақпен анықтама бөлшегін айтады.',
        'Келесі «шапалақта» оқушылар тиісті картаны іліп үлгеру керек.',
        'Ырғақтан адасты — карта қайтып, кезек жалғасады.',
      ],
      [
        'Herkes masaya vurur: "boom — boom — clap", "boom — boom — clap".',
        '"Clap"te öğretmen ritimde tanımın bir kısmını söyler.',
        'Sonraki "clap"te öğrenciler doğru kartı kapmalı.',
        'Ritmi kaybettiyse — kart geri döner, sıra ilerler.',
      ]
    ),
    vocabulary: ['boarding pass','luggage','passport','customs','itinerary','hostel','jet lag','souvenir','currency','departure'],
  },
  {
    id: 'shopping-slap', number: '11', topic: 'Shopping', title: 'Shopping Slap',
    tagline: t(
      'Hands on head — slap the right category!',
      'Руки на голову — и шлёпай по правильной категории!',
      'Қолды басқа қой — дұрыс санатты соқ!',
      'Eller başta — doğru kategoriye vur!'
    ),
    duration: 'short', durationMin: '10 min', kind: 'team', difficulty: 1,
    palette: { sky: '#f4b4c5', ground: '#ef7d57', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'shop',
    steps: s(
      [
        'Item and category cards on the table. Players put hands on their heads.',
        'The teacher shouts: "Receipt!" or "Something you can return".',
        'First to slap the right card keeps it.',
        'The winner has the most cards after the round.',
      ],
      [
        'На столе — карточки товаров и категорий. Игроки кладут руки на голову.',
        'Учитель кричит: «Receipt!» или «Something you can return».',
        'Кто первый шлёпнет по нужной карточке — забирает её себе.',
        'Победитель — у кого больше карточек после раунда.',
      ],
      [
        'Үстелде — өнім және санат карталары. Ойыншылар қолын басқа қояды.',
        'Мұғалім айқайлайды: «Receipt!» немесе «Something you can return».',
        'Кім алдымен дұрыс картаны соғады — соған тиеді.',
        'Раунд соңында карта саны көп ойыншы — жеңімпаз.',
      ],
      [
        'Masada öğe ve kategori kartları. Oyuncular ellerini başlarına koyar.',
        'Öğretmen bağırır: "Receipt!" veya "Something you can return".',
        'Doğru karta ilk vuran kartı alır.',
        'Tur sonunda en çok kartı olan kazanır.',
      ]
    ),
    vocabulary: ['receipt','refund','sale','discount','bargain','retail','warranty','cashier','aisle','exchange'],
  },
  {
    id: 'trash-or-treasure', number: '12', topic: 'Transport', title: 'Trash or Treasure',
    tagline: t(
      'Analyse the phrase: error — shout Trash, correct — Treasure.',
      'Анализируй фразу: ошибка — кричи Trash, верно — Treasure.',
      'Сөз тіркесін талда: қате — Trash, дұрыс — Treasure деп айқайла.',
      'İfadeyi analiz et: hata — Trash, doğru — Treasure diye bağır.'
    ),
    duration: 'short', durationMin: '10-15 min', kind: 'team', difficulty: 2,
    palette: { sky: '#257179', ground: '#73eff7', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'transport',
    steps: s(
      [
        'Cards with sentences are spread on the table.',
        'A player picks one and reads it aloud. The team discusses.',
        'If the phrase is correct in meaning/grammar — they shout "TREASURE".',
        'If it\'s wrong (e.g. wrong use of rush hour) — "TRASH", and they must fix it.',
      ],
      [
        'Карточки с предложениями раскладываются на столе.',
        'Игрок берёт карточку, читает вслух. Команда обсуждает.',
        'Если фраза верна по смыслу/грамматике — кричат «TREASURE».',
        'Если ошибка (напр., неверное использование rush hour) — «TRASH», и нужно исправить.',
      ],
      [
        'Сөйлемі бар карталар үстелге жайылады.',
        'Ойыншы карта алып, дауыстап оқиды. Команда талқылайды.',
        'Сөз тіркесі мағыналық/грамматикалық тұрғыдан дұрыс болса — «TREASURE» деп айқайлайды.',
        'Қате болса (мысалы, rush hour-ды қате қолдану) — «TRASH», және түзету керек.',
      ],
      [
        'Cümleli kartlar masaya yayılır.',
        'Bir oyuncu kart alıp yüksek sesle okur. Takım tartışır.',
        'İfade anlam/dilbilgisi açısından doğruysa — "TREASURE" diye bağırırlar.',
        'Yanlışsa (ör. rush hour\'un yanlış kullanımı) — "TRASH" ve düzeltmek gerekir.',
      ]
    ),
    vocabulary: ['rush hour','pedestrian crossing','traffic jam','commute','fare','platform','pavement','overtake','intersection','roundabout'],
  },
  {
    id: 'tic-tac-toe', number: '13', topic: 'Social Media', title: 'Tic-Tac-Toe',
    tagline: t(
      'Tic-tac-toe: definition first, move second.',
      'Крестики-нолики: сначала определение, потом ход.',
      'Кресттер мен нөлдер: алдымен анықтама, содан кейін жүріс.',
      'X-O-X: önce tanım, sonra hamle.'
    ),
    duration: 'short', durationMin: '10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#41a6f6', ground: '#73eff7', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'social',
    steps: s(
      [
        'Draw a 3×3 grid. Fill each cell with a word: vlog, influencer, feed...',
        'A player picks a cell and gives the exact definition of its word.',
        'If correct — they place their mark (X / O).',
        'Classic three-in-a-row wins.',
      ],
      [
        'Нарисуйте сетку 3×3. В каждую ячейку впишите слово: vlog, influencer, feed...',
        'Игрок выбирает ячейку и даёт точное определение её слова.',
        'Если определение верное — ставит свой знак (X / O).',
        'Классический выигрыш по линии — три в ряд.',
      ],
      [
        '3×3 тор сызыңыз. Әр ұяшыққа сөз жазыңыз: vlog, influencer, feed...',
        'Ойыншы ұяшықты таңдап, оның сөзіне нақты анықтама береді.',
        'Дұрыс болса — өз белгісін қояды (X / O).',
        'Классикалық жеңіс — қатарға үшеу.',
      ],
      [
        '3×3 ızgara çiz. Her hücreye bir kelime yaz: vlog, influencer, feed...',
        'Oyuncu bir hücre seçer ve kelimenin tam tanımını verir.',
        'Doğruysa — işaretini koyar (X / O).',
        'Klasik üç-üç-üç kazanır.',
      ]
    ),
    vocabulary: ['vlog','influencer','feed','hashtag','livestream','meme','subscribe','trending','comment','viral'],
  },
  {
    id: 'pyramid', number: '14', topic: 'Relationships', title: 'Pyramid',
    tagline: t(
      'Pair duel: describe bottom-up and shout "Pyramid!".',
      'Парная дуэль: опиши снизу вверх и крикни «Pyramid!».',
      'Жұптық жекпе-жек: төменнен жоғары қарай сипаттап, «Pyramid!» деп айқайла.',
      'İkili düello: aşağıdan yukarıya tanımla ve "Pyramid!" diye bağır.'
    ),
    duration: 'medium', durationMin: '15 min', kind: 'pair', difficulty: 2,
    palette: { sky: '#5d275d', ground: '#f4b4c5', accent: '#ffcd75', accent2: '#a7f070' },
    artId: 'pyramid',
    steps: s(
      [
        'On the board — a pyramid of words: classmate / partner / propose / wedding...',
        'One player stands with their back, the other describes words bottom-up.',
        'Guessed — move on. Missed — skip, next word.',
        'Reach the top — shout "PYRAMID!". Time is recorded.',
      ],
      [
        'На доске — пирамида слов: classmate / partner / propose / wedding...',
        'Один игрок стоит спиной, второй описывает слова снизу вверх.',
        'Угадал — описывают следующее. Не угадал — пропуск.',
        'Дошли до вершины — крик «PYRAMID!». Время фиксируется.',
      ],
      [
        'Тақтада — сөздер пирамидасы: classmate / partner / propose / wedding...',
        'Бір ойыншы артын беріп тұрады, екіншісі сөздерді төменнен жоғары сипаттайды.',
        'Тапты — келесі. Таппады — өткізеді.',
        'Шыңға жетті — «PYRAMID!» айқайы. Уақыт жазылады.',
      ],
      [
        'Tahtada — kelime piramidi: classmate / partner / propose / wedding...',
        'Bir oyuncu sırtı dönük, diğeri kelimeleri aşağıdan yukarıya tanımlar.',
        'Bildiyse — sonraki. Bilmediyse — atla.',
        'Tepeye ulaştıysa — "PYRAMID!" diye bağırır. Süre kaydedilir.',
      ]
    ),
    vocabulary: ['classmate','partner','propose','wedding','divorce','engagement','crush','date','breakup','spouse'],
  },
  {
    id: 'two-truths-lie', number: '15', topic: 'Personality', title: 'Two Truths & a Lie',
    tagline: t(
      'Find the lie among three traits of a celebrity.',
      'Найди ложь среди трёх характеристик знаменитости.',
      'Танымал тұлғаның үш сипатының ішінен өтірікті тап.',
      'Bir ünlünün üç özelliği arasından yalanı bul.'
    ),
    duration: 'medium', durationMin: '15-20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#0f1020', ground: '#5d275d', accent: '#ffcd75', accent2: '#73eff7' },
    artId: 'star',
    steps: s(
      [
        'Teams get celebrity cards: Elon Musk, Ariana Grande, Wednesday Addams.',
        'Prepare 2 true adjectives + 1 false one (Wednesday: serious, rebellious, sociable).',
        'Present to the class. Opponents vote — which trait is the lie.',
        'Points for correct guesses + bonus if the lie was clever.',
      ],
      [
        'Команды получают карточки знаменитостей: Elon Musk, Ariana Grande, Wednesday Addams.',
        'Готовят 2 правдивых прилагательных + 1 ложное (Wednesday: serious, rebellious, sociable).',
        'Презентуют классу. Соперники голосуют — какая характеристика — ложь.',
        'Очки за угадывание + бонус, если ложь была неочевидной.',
      ],
      [
        'Командалар атақты тұлғалардың карталарын алады: Elon Musk, Ariana Grande, Wednesday Addams.',
        '2 шынайы сын есім + 1 жалған дайындайды (Wednesday: serious, rebellious, sociable).',
        'Сыныпқа таныстырады. Қарсыластар дауыс береді — қай сипат жалған.',
        'Дұрыс табу үшін ұпайлар + жалғаны айқын болмаса бонус.',
      ],
      [
        'Takımlar ünlü kartları alır: Elon Musk, Ariana Grande, Wednesday Addams.',
        '2 doğru sıfat + 1 yanlış hazırlar (Wednesday: serious, rebellious, sociable).',
        'Sınıfa sunarlar. Rakipler oy verir — hangi özellik yalan.',
        'Doğru tahmin için puan + yalan akıllıca ise bonus.',
      ]
    ),
    vocabulary: ['ambitious','rebellious','generous','reserved','outgoing','stubborn','witty','cautious','arrogant','humble'],
  },
]


/* ============================================================
   Localized titles & topic labels (keyed for lookup).
   The `title` and `topic` fields above stay in English for
   stable identity / search; helpers below pick the right
   language for display.
   ============================================================ */

export const GAME_TITLES: Record<string, LText> = {
  'kitchen-quest':     t('Kitchen Quest',       'Кухонный квест',          'Асүй тапсырмасы',           'Mutfak Görevi'),
  'guess-your-gear':   t('Guess Your Gear',     'Угадай свой инвентарь',   'Құралыңды тап',             'Ekipmanını Tahmin Et'),
  'fast-cash':         t('Fast Cash',           'Быстрые деньги',          'Жылдам ақша',               'Hızlı Para'),
  'roll-and-write':    t('Roll & Write',        'Брось и напиши',          'Лақтыр да жаз',             'Zar At ve Yaz'),
  'tallest-tower':     t('The Tallest Tower',   'Самая высокая башня',     'Ең биік мұнара',            'En Yüksek Kule'),
  'academic-journey':  t('Academic Journey',    'Академический путь',      'Академиялық жол',           'Akademik Yolculuk'),
  'speak-and-score':   t('Speak & Score',       'Говори и набирай',        'Сөйле де ұпай жина',        'Konuş ve Puan Al'),
  'grab-it-first':     t('Grab It First!',      'Схвати первым!',          'Бірінші іліп ал!',          'Önce Kap!'),
  'case-file-x':       t('Case File X',         'Дело №X',                 'Іс №X',                     'Dosya X'),
  'boom-boom-clap':    t('Boom Boom Clap',      'Бум-бум-хлоп',            'Бум-бум-шапалақ',           'Boom Boom Clap'),
  'shopping-slap':     t('Shopping Slap',       'Шоппинг-шлёп',            'Сауда-соғу',                'Alışveriş Tokadı'),
  'trash-or-treasure': t('Trash or Treasure',   'Мусор или сокровище',     'Қоқыс па, қазына ма',       'Çöp mü Hazine mi'),
  'tic-tac-toe':       t('Tic-Tac-Toe',         'Крестики-нолики',         'Кресттер мен нөлдер',       'X-O-X'),
  'pyramid':           t('Pyramid',             'Пирамида',                'Пирамида',                  'Piramit'),
  'two-truths-lie':    t('Two Truths & a Lie',  'Две правды и ложь',       'Екі шындық пен өтірік',     'İki Doğru Bir Yalan'),
}

export const TOPIC_LABELS: Record<string, LText> = {
  'Food & Cooking': t('Food & Cooking', 'Еда и кулинария',  'Тағам және ас үй', 'Yemek ve Pişirme'),
  'Sport':          t('Sport',          'Спорт',            'Спорт',            'Spor'),
  'Money':          t('Money',          'Деньги',           'Ақша',             'Para'),
  'Cinema':         t('Cinema',         'Кино',             'Кино',             'Sinema'),
  'The Body':       t('The Body',       'Тело',             'Дене',             'Vücut'),
  'Education':      t('Education',      'Образование',      'Білім',            'Eğitim'),
  'House':          t('House',          'Дом',              'Үй',               'Ev'),
  'Work':           t('Work',           'Работа',           'Жұмыс',            'İş'),
  'Crime':          t('Crime',          'Преступление',     'Қылмыс',           'Suç'),
  'Travel':         t('Travel',         'Путешествия',      'Саяхат',           'Seyahat'),
  'Shopping':       t('Shopping',       'Шоппинг',          'Сауда',            'Alışveriş'),
  'Transport':      t('Transport',      'Транспорт',        'Көлік',            'Ulaşım'),
  'Social Media':   t('Social Media',   'Соцсети',          'Әлеуметтік желі',  'Sosyal Medya'),
  'Relationships':  t('Relationships',  'Отношения',        'Қарым-қатынас',    'İlişkiler'),
  'Personality':    t('Personality',    'Характер',         'Мінез',            'Kişilik'),
}

export function gameTitle(g: Game, lang: Lang): string {
  return GAME_TITLES[g.id]?.[lang] ?? g.title
}
export function gameTopic(g: Game, lang: Lang): string {
  return TOPIC_LABELS[g.topic]?.[lang] ?? g.topic
}
