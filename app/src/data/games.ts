export type GameDuration = 'short' | 'medium' | 'long'
export type GameKind = 'team' | 'pair' | 'solo' | 'whole-class'

export interface Game {
  id: string
  number: string         // "01"
  topic: string          // "Food and Cooking"
  title: string          // "Kitchen Quest"
  tagline: string        // short hook
  duration: GameDuration
  durationMin: string    // "15-20 min"
  kind: GameKind
  difficulty: 1 | 2 | 3
  palette: {
    sky: string
    ground: string
    accent: string
    accent2: string
  }
  steps: string[]
  vocabulary: string[]
  artId:
    | 'kitchen' | 'gear' | 'cash' | 'cinema' | 'tower'
    | 'academic' | 'house' | 'work' | 'crime' | 'travel'
    | 'shop' | 'transport' | 'social' | 'pyramid' | 'star'
}

export const GAMES: Game[] = [
  {
    id: 'kitchen-quest', number: '01',
    topic: 'Food & Cooking', title: 'Kitchen Quest',
    tagline: 'Командный квест по поиску ингредиентов и сборке рецепта.',
    duration: 'medium', durationMin: '20-30 min', kind: 'team', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#a7f070', accent: '#ef7d57', accent2: '#ffcd75' },
    artId: 'kitchen',
    steps: [
      'Раздайте каждой группе карточку блюда (Beshbarmak, Pasta with chicken, и т.д.).',
      'Спрячьте карточки продуктов по классу: horse meat, onion, mushrooms, cream...',
      'Команды находят ингредиенты, правильно их называют и приносят на «кухню».',
      'Группа собирает рецепт, используя глаголы готовки: chop, whisk, simmer, fry.',
      'Презентация рецепта классу — побеждает команда с самой связной инструкцией.',
    ],
    vocabulary: ['chop','whisk','simmer','fry','boil','grate','dough','onion','mushroom','cream','recipe','ingredient'],
  },
  {
    id: 'guess-your-gear', number: '02',
    topic: 'Sport', title: 'Guess Your Gear',
    tagline: 'Логическая дедукция: угадай свою спортивную роль и найди пару.',
    duration: 'short', durationMin: '10-15 min', kind: 'whole-class', difficulty: 2,
    palette: { sky: '#73eff7', ground: '#38b764', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'gear',
    steps: [
      'На спину каждому ученику клеится карточка: либо роль (referee), либо инвентарь (whistle), либо место (court).',
      'Ученики ходят по классу и задают только Yes/No вопросы: "Do I work outdoors?", "Do I use a ball?".',
      'Цель — определить своё слово и найти партнёра, чьё слово связано с твоим.',
      'Финал: каждая пара объясняет связку (referee ↔ whistle, tennis player ↔ court).',
    ],
    vocabulary: ['referee','whistle','court','racket','goalkeeper','net','coach','helmet','arena','spectator'],
  },
  {
    id: 'fast-cash', number: '03',
    topic: 'Money', title: 'Fast Cash',
    tagline: 'Гонка на скорость: схвати правильную «купюру» по определению.',
    duration: 'short', durationMin: '5-10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#5d275d', ground: '#a7f070', accent: '#ffcd75', accent2: '#38b764' },
    artId: 'cash',
    steps: [
      'Расклейте по классу «купюры» со словами: mortgage, loan, salary, refund, debt.',
      'Учитель зачитывает определение: "Money you borrow from a bank to buy a house".',
      'Двое игроков с присосками — кто первый «выстрелил» в правильную купюру.',
      'Победитель строит предложение со словом, иначе очко уходит сопернику.',
    ],
    vocabulary: ['mortgage','loan','salary','refund','debt','income','tax','deposit','cash','currency'],
  },
  {
    id: 'roll-and-write', number: '04',
    topic: 'Cinema', title: 'Roll & Write',
    tagline: 'Кубик решает, кто описывает термин под давлением времени.',
    duration: 'medium', durationMin: '15 min', kind: 'team', difficulty: 2,
    palette: { sky: '#0f1020', ground: '#29274c', accent: '#ffcd75', accent2: '#41a6f6' },
    artId: 'cinema',
    steps: [
      'Группа сидит в кругу, в центре — лист, ручка и кубик.',
      'Все по очереди бросают кубик. Выпало 5 или 6 — хватаешь ручку и пишешь определение слова из списка.',
      'Остальные продолжают бросать. Если у них тоже выпадает 5/6 — отбирают ручку.',
      'Игра идёт 5 минут. Команда с большим количеством корректных описаний побеждает.',
    ],
    vocabulary: ['plot','sequel','soundtrack','cast','director','script','trailer','review','genre','actor','scene'],
  },
  {
    id: 'tallest-tower', number: '05',
    topic: 'The Body', title: 'The Tallest Tower',
    tagline: 'Объясни слово — получи стаканчик. Построй самую высокую башню.',
    duration: 'medium', durationMin: '15-20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#ef7d57', accent: '#a7f070', accent2: '#f4b4c5' },
    artId: 'tower',
    steps: [
      'Каждой команде — стопка пластиковых стаканчиков и карточки с лексикой.',
      'Один игрок объясняет слово (без перевода и однокоренных). Команда угадывает.',
      'За каждое угаданное слово — один стаканчик в башню.',
      'Через 10 минут — у кого башня выше, тот победил.',
    ],
    vocabulary: ['nod','whistle','stomach','ankle','wrist','knee','shoulder','elbow','sneeze','blink','frown'],
  },
  {
    id: 'academic-journey', number: '06',
    topic: 'Education', title: 'Academic Journey',
    tagline: 'Настольная бродилка: пройди путь от детсада до выпускной речи.',
    duration: 'long', durationMin: '20-30 min', kind: 'team', difficulty: 3,
    palette: { sky: '#73eff7', ground: '#a7f070', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'academic',
    steps: [
      'Разложите игровое поле: kindergarten → primary → secondary → college.',
      'Игроки бросают кубик и двигают фишки. На каждой клетке — задание (назови 3 предмета).',
      'События-ловушки: "Overslept" → -2 клетки. "Caught Cheating" → пропуск хода.',
      'На финише выпускник произносит короткую речь — без неё не победить.',
    ],
    vocabulary: ['kindergarten','primary','secondary','college','degree','exam','tuition','scholarship','graduation','semester'],
  },
  {
    id: 'speak-and-score', number: '07',
    topic: 'House', title: 'Speak & Score',
    tagline: 'Викторина с разноуровневыми карточками: рискуй ради очков.',
    duration: 'medium', durationMin: '20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#5d275d', ground: '#ef7d57', accent: '#ffcd75', accent2: '#a7f070' },
    artId: 'house',
    steps: [
      'Положите три стопки карточек: Role Play (5 очков), Situational (3), Understanding (2).',
      'Команда выбирает карточку: например, "Опиши дом мечты на 90 секунд".',
      'Жюри (другая команда) оценивает: засчитан / не засчитан.',
      'Очки суммируются. Побеждает команда с наибольшим суммарным счётом.',
    ],
    vocabulary: ['terrace','patio','realtor','mortgage','tenant','landlord','attic','basement','balcony','cottage'],
  },
  {
    id: 'grab-it-first', number: '08',
    topic: 'Work', title: 'Grab It First!',
    tagline: 'Дуэль один-на-один: схвати стакан и шагай к победе.',
    duration: 'short', durationMin: '5-10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#0f1020', ground: '#5d275d', accent: '#ffcd75', accent2: '#41a6f6' },
    artId: 'work',
    steps: [
      'Двое игроков стоят по разные стороны стола. В центре — пластиковый стакан.',
      'Учитель читает определение: "to leave a job voluntarily".',
      'Кто первый схватил стакан — отвечает. Правильно (resign) — шаг к сопернику.',
      'Кто первым «дошёл» до соперника — выиграл дуэль.',
    ],
    vocabulary: ['resign','promote','fire','hire','salary','overtime','intern','colleague','deadline','contract'],
  },
  {
    id: 'case-file-x', number: '09',
    topic: 'Crime', title: 'Case File X',
    tagline: 'Кража из Лувра. Расшифруй улики, найди преступника.',
    duration: 'long', durationMin: '30-40 min', kind: 'team', difficulty: 3,
    palette: { sky: '#0f1020', ground: '#29274c', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'crime',
    steps: [
      'Станция №1: расшифровать перевёрнутое аудио-показание свидетеля.',
      'Станция №2: найти скрытое послание в тексте (акростих, выделение букв).',
      'Анализ досье подозреваемых: Hugh Jass (охранник), Cruella la Grande (историк), Jackie Bon (уборщик).',
      'Команда обвиняет — обосновывая лексикой: alibi, motive, witness, suspect.',
    ],
    vocabulary: ['alibi','motive','witness','suspect','evidence','clue','robbery','theft','arrest','interrogate'],
  },
  {
    id: 'boom-boom-clap', number: '10',
    topic: 'Travel', title: 'Boom Boom Clap',
    tagline: 'Ритмическая игра: лови карточку в такт «бум-бум-хлоп».',
    duration: 'short', durationMin: '10 min', kind: 'whole-class', difficulty: 2,
    palette: { sky: '#41a6f6', ground: '#ffcd75', accent: '#ef7d57', accent2: '#73eff7' },
    artId: 'travel',
    steps: [
      'Все стучат по столу: «бум — бум — хлоп», «бум — бум — хлоп».',
      'На «хлопе» учитель в ритме говорит часть определения.',
      'На следующем «хлопе» ученики должны успеть схватить нужную карточку.',
      'Сбился с ритма — карточка возвращается, ход переходит дальше.',
    ],
    vocabulary: ['boarding pass','luggage','passport','customs','itinerary','hostel','jet lag','souvenir','currency','departure'],
  },
  {
    id: 'shopping-slap', number: '11',
    topic: 'Shopping', title: 'Shopping Slap',
    tagline: 'Руки на голову — и шлёпай по правильной категории!',
    duration: 'short', durationMin: '10 min', kind: 'team', difficulty: 1,
    palette: { sky: '#f4b4c5', ground: '#ef7d57', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'shop',
    steps: [
      'На столе — карточки товаров и категорий. Игроки кладут руки на голову.',
      'Учитель кричит: «Receipt!» или «Something you can return».',
      'Кто первый шлёпает по нужной карточке — забирает её себе.',
      'Победитель — у кого больше карточек после раунда.',
    ],
    vocabulary: ['receipt','refund','sale','discount','bargain','retail','warranty','cashier','aisle','exchange'],
  },
  {
    id: 'trash-or-treasure', number: '12',
    topic: 'Transport', title: 'Trash or Treasure',
    tagline: 'Анализируй фразу: ошибка — кричи Trash, верно — Treasure.',
    duration: 'short', durationMin: '10-15 min', kind: 'team', difficulty: 2,
    palette: { sky: '#257179', ground: '#73eff7', accent: '#ffcd75', accent2: '#b13e53' },
    artId: 'transport',
    steps: [
      'Карточки с предложениями раскладываются на столе.',
      'Игрок берёт карточку, читает вслух. Команда обсуждает.',
      'Если фраза верна по смыслу/грамматике — кричат «TREASURE».',
      'Если ошибка (например, неверное использование rush hour) — «TRASH», и нужно исправить.',
    ],
    vocabulary: ['rush hour','pedestrian crossing','traffic jam','commute','fare','platform','pavement','overtake','intersection','roundabout'],
  },
  {
    id: 'tic-tac-toe', number: '13',
    topic: 'Social Media', title: 'Tic-Tac-Toe',
    tagline: 'Крестики-нолики: сначала определение, потом ход.',
    duration: 'short', durationMin: '10 min', kind: 'pair', difficulty: 1,
    palette: { sky: '#41a6f6', ground: '#73eff7', accent: '#b13e53', accent2: '#ffcd75' },
    artId: 'social',
    steps: [
      'Нарисуйте сетку 3×3. В каждую ячейку впишите слово: vlog, influencer, feed...',
      'Игрок выбирает ячейку и даёт точное определение её слова.',
      'Если определение верное — ставит свой знак (X / O).',
      'Классический выигрыш по линии — три в ряд.',
    ],
    vocabulary: ['vlog','influencer','feed','hashtag','livestream','meme','subscribe','trending','comment','viral'],
  },
  {
    id: 'pyramid', number: '14',
    topic: 'Relationships', title: 'Pyramid',
    tagline: 'Парная дуэль: опиши снизу вверх и крикни «Pyramid!».',
    duration: 'medium', durationMin: '15 min', kind: 'pair', difficulty: 2,
    palette: { sky: '#5d275d', ground: '#f4b4c5', accent: '#ffcd75', accent2: '#a7f070' },
    artId: 'pyramid',
    steps: [
      'На доске — пирамида слов: classmate / partner / propose / wedding...',
      'Один игрок стоит спиной, второй описывает слова снизу вверх.',
      'Угадал — описывают следующее. Не угадал — пропуск, идёт следующее.',
      'Дошли до вершины — крик «PYRAMID!». Время фиксируется.',
    ],
    vocabulary: ['classmate','partner','propose','wedding','divorce','engagement','crush','date','breakup','spouse'],
  },
  {
    id: 'two-truths-lie', number: '15',
    topic: 'Personality', title: 'Two Truths & a Lie',
    tagline: 'Найди ложь среди трёх характеристик знаменитости.',
    duration: 'medium', durationMin: '15-20 min', kind: 'team', difficulty: 2,
    palette: { sky: '#0f1020', ground: '#5d275d', accent: '#ffcd75', accent2: '#73eff7' },
    artId: 'star',
    steps: [
      'Команды получают карточки звёзд: Elon Musk, Ariana Grande, Wednesday Addams.',
      'Готовят 2 правдивых прилагательных + 1 ложное (Wednesday: serious, rebellious, sociable).',
      'Презентуют классу. Соперники голосуют — какая характеристика — ложь.',
      'Очки за угадывание + бонус, если ложь была неочевидной.',
    ],
    vocabulary: ['ambitious','rebellious','generous','reserved','outgoing','stubborn','witty','cautious','arrogant','humble'],
  },
]

