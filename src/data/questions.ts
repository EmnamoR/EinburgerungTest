// src/data/questions.ts
import { Question } from '../types/question';

export const questions: Question[] = [
    {
        id: '1',
        question: {
            de: ' In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …',
            en: 'In Germany, people are allowed to openly say something against the government because …',
            ar: 'في ألمانيا، يُسمح للناس بالتعبير علنًا ضد الحكومة لأن ...',
            tr: 'Almanya\'da insanlar hükümete karşı açıkça konuşabilir, çünkü ...',
            uk: 'У Німеччині людям дозволено відкрито висловлюватися проти уряду, тому що ...',
            ru: 'В Германии людям разрешено открыто высказываться против правительства, потому что ...',
            pl: 'W Niemczech ludzie mogą otwarcie mówić coś przeciwko rządowi, ponieważ ...',
            fa: 'در آلمان، مردم اجازه دارند آزادانه علیه دولت صحبت کنند، زیرا ...'
        },
        answers: [
            {
                id: 0,
                text: {
                    de: 'Hier gilt Religionsfreiheit.',
                    en: 'Freedom of religion is upheld here.',
                    ar: 'حرية الدين تُحترم هنا.',
                    tr: 'Burada din özgürlüğü vardır.',
                    uk: 'Тут дотримується свобода віросповідання.',
                    ru: 'Здесь соблюдается свобода вероисповедания.',
                    pl: 'Tutaj panuje wolność religijna.',
                    fa: 'اینجا آزادی دین رعایت می‌شود.'
                }
            },
            {
                id: 1,
                text: {
                    de: 'Die Menschen zahlen Steuern.',
                    en: 'People pay taxes.',
                    ar: 'الناس يدفعون الضرائب.',
                    tr: 'İnsanlar vergi öder.',
                    uk: 'Люди сплачують податки.',
                    ru: 'Люди платят налоги.',
                    pl: 'Ludzie płacą podatki.',
                    fa: 'مردم مالیات می‌پردازند.'
                }
            },
            {
                id: 2,
                text: {
                    de: 'Die Menschen haben das Wahlrecht.',
                    en: 'People have the right to vote.',
                    ar: 'للناس الحق في التصويت.',
                    tr: 'İnsanların oy hakkı vardır.',
                    uk: 'Люди мають право голосу.',
                    ru: 'Люди имеют право голоса.',
                    pl: 'Ludzie mają prawo do głosowania.',
                    fa: 'مردم حق رأی دارند.'
                }
            },
            {
                id: 3,
                text: {
                    de: 'Hier gilt Meinungsfreiheit.',
                    en: 'Freedom of expression is upheld here.',
                    ar: 'حرية التعبير تُحترم هنا.',
                    tr: 'Burada ifade özgürlüğü vardır.',
                    uk: 'Тут дотримується свобода слова.',
                    ru: 'Здесь соблюдается свобода слова.',
                    pl: 'Tutaj panuje wolność słowa.',
                    fa: 'اینجا آزادی بیان رعایت می‌شود.'
                }
            }
        ],
        correctAnswer: 3,
        category: 'society'
    },
    {
        id: '2',
        question: {
          de: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am...',
          en: 'In Germany, parents can decide until their child is 14 years old whether they participate in school...',
          ar: 'في ألمانيا، يمكن للوالدين أن يقررا حتى سن 14 عامًا ما إذا كان طفلهما سيشارك في...',
          tr: 'Almanya\'da, ebeveynler çocukları 14 yaşına gelene kadar okulda... katılıp katılmayacağına karar verebilirler',
          uk: 'У Німеччині батьки можуть вирішувати до 14 років своєї дитини, чи братиме вона участь у...',
          ru: 'В Германии родители могут решать до 14-летнего возраста своего ребенка, будет ли он участвовать в...',
          pl: 'W Niemczech rodzice mogą decydować do 14 roku życia swojego dziecka, czy będzie ono uczestniczyć w...',
          fa: 'در آلمان، والدین می‌توانند تا سن 14 سالگی فرزندشان تصمیم بگیرند که آیا در... مدرسه شرکت کنند'
        },
        answers: [
          {
            id: 0,
            text: {
              de: 'Geschichtsunterricht teilnimmt',
              en: 'history lessons',
              ar: 'دروس التاريخ',
              tr: 'tarih dersleri',
              uk: 'уроки історії',
              ru: 'уроки истории',
              pl: 'lekcje historii',
              fa: 'کلاس‌های تاریخ'
            }
          },
          {
            id: 1,
            text: {
              de: 'Religionsunterricht teilnimmt',
              en: 'religious education',
              ar: 'التعليم الديني',
              tr: 'din eğitimi',
              uk: 'релігійна освіта',
              ru: 'религиозное образование',
              pl: 'edukacja religijna',
              fa: 'آموزش مذهبی'
            }
          },
          {
            id: 2,
            text: {
              de: 'Politikunterricht teilnimmt',
              en: 'political education',
              ar: 'التعليم السياسي',
              tr: 'siyasi eğitim',
              uk: 'політична освіта',
              ru: 'политическое образование',
              pl: 'edukacja polityczna',
              fa: 'آموزش سیاسی'
            }
          },
          {
            id: 3,
            text: {
              de: 'Sprachunterricht teilnimmt',
              en: 'language lessons',
              ar: 'دروس اللغة',
              tr: 'dil dersleri',
              uk: 'уроки мови',
              ru: 'уроки языка',
              pl: 'lekcje języka',
              fa: 'کلاس‌های زبان'
            }
          }
        ],
        correctAnswer: 1,
        category: 'education'
    },
    {
        "id": "3",
        "question": {
            "de": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
            "en": "Germany is a constitutional state. What does that mean?",
            "ar": "ألمانيا دولة قانونية. ماذا يعني ذلك؟",
            "tr": "Almanya bir hukuk devletidir. Bunun anlamı nedir?",
            "uk": "Німеччина є правовою державою. Що це означає?",
            "ru": "Германия — правовое государство. Что это значит?",
            "pl": "Niemcy są państwem prawnym. Co to znaczy?",
            "fa": "آلمان یک کشور قانونی است. این چه معنایی دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                    "en": "All residents and the state must adhere to the laws.",
                    "ar": "يجب على جميع السكان والدولة الالتزام بالقوانين.",
                    "tr": "Tüm sakinler ve devlet yasalara uymalıdır.",
                    "uk": "Всі мешканці та держава повинні дотримуватись законів.",
                    "ru": "Все жители и государство должны соблюдать законы.",
                    "pl": "Wszyscy mieszkańcy i państwo muszą przestrzegać prawa.",
                    "fa": "همه ساکنان و دولت باید به قوانین پایبند باشند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Der Staat muss sich nicht an die Gesetze halten.",
                    "en": "The state does not have to follow the laws.",
                    "ar": "لا يتعين على الدولة الالتزام بالقوانين.",
                    "tr": "Devletin yasalara uyması gerekmez.",
                    "uk": "Державі не потрібно дотримуватися законів.",
                    "ru": "Государство не обязано соблюдать законы.",
                    "pl": "Państwo nie musi przestrzegać prawa.",
                    "fa": "دولت نیازی به پیروی از قوانین ندارد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Nur Deutsche müssen die Gesetze befolgen.",
                    "en": "Only Germans must follow the laws.",
                    "ar": "يجب على الألمان فقط الالتزام بالقوانين.",
                    "tr": "Sadece Almanların yasalara uyması gerekir.",
                    "uk": "Лише німці повинні дотримуватися законів.",
                    "ru": "Только немцы должны соблюдать законы.",
                    "pl": "Tylko Niemcy muszą przestrzegać prawa.",
                    "fa": "فقط آلمانی‌ها باید به قوانین پایبند باشند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Die Gerichte machen die Gesetze.",
                    "en": "The courts make the laws.",
                    "ar": "تضع المحاكم القوانين.",
                    "tr": "Mahkemeler yasaları yapar.",
                    "uk": "Суди створюють закони.",
                    "ru": "Суды принимают законы.",
                    "pl": "Sądy tworzą prawa.",
                    "fa": "دادگاه‌ها قوانین را وضع می‌کنند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "4",
        "question": {
            "de": "Welches Recht gehört zu den Grundrechten in Deutschland?",
            "en": "Which right is part of the fundamental rights in Germany?",
            "ar": "أي حق هو جزء من الحقوق الأساسية في ألمانيا؟",
            "tr": "Almanya'daki temel haklardan hangisi bir haktır?",
            "uk": "Яке право є частиною основних прав у Німеччині?",
            "ru": "Какое право является частью основных прав в Германии?",
            "pl": "Które prawo należy do praw podstawowych w Niemczech?",
            "fa": "کدام حق بخشی از حقوق بنیادی در آلمان است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Waffenbesitz",
                    "en": "Possession of firearms",
                    "ar": "امتلاك الأسلحة",
                    "tr": "Silah bulundurma",
                    "uk": "Володіння вогнепальною зброєю",
                    "ru": "Владение оружием",
                    "pl": "Posiadanie broni",
                    "fa": "مالکیت سلاح"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Faustrecht",
                    "en": "Right of the strongest",
                    "ar": "حق الأقوى",
                    "tr": "Güçlünün hakkı",
                    "uk": "Право сильного",
                    "ru": "Право сильнейшего",
                    "pl": "Prawo silniejszego",
                    "fa": "حق قوی‌ترین"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Meinungsfreiheit",
                    "en": "Freedom of expression",
                    "ar": "حرية التعبير",
                    "tr": "İfade özgürlüğü",
                    "uk": "Свобода слова",
                    "ru": "Свобода слова",
                    "pl": "Wolność słowa",
                    "fa": "آزادی بیان"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Selbstjustiz",
                    "en": "Self-justice",
                    "ar": "العدالة الذاتية",
                    "tr": "Kendine adalet",
                    "uk": "Самосуд",
                    "ru": "Самосуд",
                    "pl": "Samozwańcza sprawiedliwość",
                    "fa": "عدالت خودسرانه"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "society"
    },
    {
        "id": "5",
        "question": {
            "de": "Wahlen in Deutschland sind frei. Was bedeutet das?",
            "en": "Elections in Germany are free. What does that mean?",
            "ar": "الانتخابات في ألمانيا حرة. ماذا يعني ذلك؟",
            "tr": "Almanya'daki seçimler serbesttir. Bunun anlamı nedir?",
            "uk": "Вибори в Німеччині вільні. Що це означає?",
            "ru": "Выборы в Германии свободны. Что это значит?",
            "pl": "Wybory w Niemczech są wolne. Co to znaczy?",
            "fa": "انتخابات در آلمان آزاد است. این چه معنایی دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.",
                    "en": "One may accept money for voting for a specific candidate.",
                    "ar": "يجوز قبول المال مقابل التصويت لصالح مرشح معين.",
                    "tr": "Belirli bir adaya oy vermek için para kabul edilebilir.",
                    "uk": "Можна приймати гроші за голосування за конкретного кандидата.",
                    "ru": "Можно принимать деньги за голосование за конкретного кандидата.",
                    "pl": "Można przyjmować pieniądze za głosowanie na konkretnego kandydata.",
                    "fa": "می‌توان پولی را در ازای رأی دادن به یک نامزد خاص پذیرفت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
                    "en": "The voter must not be influenced or forced to vote a certain way and must not suffer any disadvantages from the election.",
                    "ar": "يجب ألا يتأثر الناخب أو يُجبر على التصويت بطريقة معينة، ويجب ألا يتعرض لأي عواقب سلبية بسبب الانتخابات.",
                    "tr": "Seçmen, seçimde etki altında kalmamalı veya belirli bir şekilde oy vermeye zorlanmamalı ve seçimden dolayı herhangi bir dezavantaj yaşamamalıdır.",
                    "uk": "Виборець не повинен зазнавати впливу чи бути змушеним голосувати певним чином, і не повинен зазнавати жодних негативних наслідків від виборів.",
                    "ru": "Избирателя не следует ни подталкивать, ни принуждать к голосованию определенным образом, и он не должен испытывать никаких негативных последствий от выборов.",
                    "pl": "Wyborca nie powinien być pod wpływem ani zmuszony do głosowania w określony sposób i nie powinien ponosić żadnych strat w wyniku wyborów.",
                    "fa": "رای‌دهنده نباید تحت تأثیر قرار گیرد یا مجبور به رأی‌گیری به روشی خاص شود و نباید به دلیل انتخابات با هیچ ضرری مواجه شود."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
                    "en": "Only people who have never been to prison may vote.",
                    "ar": "يمكن فقط للأشخاص الذين لم يدخلوا السجن أبدًا التصويت.",
                    "tr": "Sadece daha önce hapse girmemiş kişiler oy verebilir.",
                    "uk": "Лише люди, які ніколи не були у в'язниці, можуть голосувати.",
                    "ru": "Голосовать могут только те, кто никогда не был в тюрьме.",
                    "pl": "Tylko osoby, które nigdy nie były w więzieniu, mogą głosować.",
                    "fa": "فقط افرادی که هرگز در زندان نبوده‌اند می‌توانند رأی بدهند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Alle wahlberechtigten Personen müssen wählen.",
                    "en": "All eligible voters must vote.",
                    "ar": "يجب على جميع الأشخاص الذين يحق لهم التصويت المشاركة في الانتخابات.",
                    "tr": "Tüm seçmenler oy kullanmak zorundadır.",
                    "uk": "Усі особи, які мають право голосувати, повинні голосувати.",
                    "ru": "Все избиратели должны голосовать.",
                    "pl": "Wszyscy uprawnieni do głosowania muszą głosować.",
                    "fa": "تمام افرادی که حق رأی دارند باید رأی بدهند."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    },
    {
        "id": "6",
        "question": {
            "de": "Wie heißt die deutsche Verfassung?",
            "en": "What is the name of the German constitution?",
            "ar": "ما اسم الدستور الألماني؟",
            "tr": "Almanya'nın anayasası nedir?",
            "uk": "Як називається німецька конституція?",
            "ru": "Как называется немецкая конституция?",
            "pl": "Jak nazywa się niemiecka konstytucja?",
            "fa": "نام قانون اساسی آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Volksgesetz",
                    "en": "People's law",
                    "ar": "قانون الشعب",
                    "tr": "Halk yasası",
                    "uk": "Закон народу",
                    "ru": "Закон народа",
                    "pl": "Prawo ludowe",
                    "fa": "قانون مردم"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bundesgesetz",
                    "en": "Federal law",
                    "ar": "القانون الفيدرالي",
                    "tr": "Federal yasa",
                    "uk": "Федеральний закон",
                    "ru": "Федеральный закон",
                    "pl": "Prawo federalne",
                    "fa": "قانون فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Deutsches Gesetz",
                    "en": "German law",
                    "ar": "القانون الألماني",
                    "tr": "Alman yasası",
                    "uk": "Німецький закон",
                    "ru": "Немецкий закон",
                    "pl": "Niemieckie prawo",
                    "fa": "قانون آلمان"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Grundgesetz",
                    "en": "Basic Law",
                    "ar": "القانون الأساسي",
                    "tr": "Temel yasa",
                    "uk": "Основний закон",
                    "ru": "Основной закон",
                    "pl": "Ustawa zasadnicza",
                    "fa": "قانون اساسی"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "society"
    },
    {
        "id": "7",
        "question": {
            "de": "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
            "en": "Which right is part of the fundamental rights guaranteed by the German constitution? The right to …",
            "ar": "أي حق هو جزء من الحقوق الأساسية المضمونة بموجب الدستور الألماني؟ الحق في ...",
            "tr": "Alman anayasasıyla güvence altına alınan temel haklardan hangisi? Hak ...",
            "uk": "Яке право є частиною основних прав, гарантованих німецькою конституцією? Право на ...",
            "ru": "Какое право является частью основных прав, гарантированных немецкой конституцией? Право на ...",
            "pl": "Które prawo należy do praw podstawowych, gwarantowanych przez niemiecką konstytucję? Prawo do ...",
            "fa": "کدام حق بخشی از حقوق بنیادی است که طبق قانون اساسی آلمان تضمین شده است؟ حق ... "
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Glaubens- und Gewissensfreiheit.",
                    "en": "Freedom of belief and conscience.",
                    "ar": "حرية الاعتقاد والضمير.",
                    "tr": "İnanç ve vicdan özgürlüğü.",
                    "uk": "Свобода віросповідання та совісті.",
                    "ru": "Свобода вероисповедания и совести.",
                    "pl": "Wolność wyznania i sumienia.",
                    "fa": "آزادی عقیده و وجدان."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Unterhaltung.",
                    "en": "Entertainment.",
                    "ar": "التسلية.",
                    "tr": "Eğlence.",
                    "uk": "Розваги.",
                    "ru": "Развлечения.",
                    "pl": "Rozrywka.",
                    "fa": "سرگرمی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Arbeit.",
                    "en": "Work.",
                    "ar": "العمل.",
                    "tr": "Çalışma.",
                    "uk": "Робота.",
                    "ru": "Работа.",
                    "pl": "Praca.",
                    "fa": "کار."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Wohnung.",
                    "en": "Housing.",
                    "ar": "الإسكان.",
                    "tr": "Konut.",
                    "uk": "Житло.",
                    "ru": "Жилище.",
                    "pl": "Mieszkanie.",
                    "fa": "مسکن."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "8",
        "question": {
            "de": "Was steht nicht im Grundgesetz von Deutschland?",
            "en": "What is not stated in the Basic Law of Germany?",
            "ar": "ماذا لا ينص عليه القانون الأساسي في ألمانيا؟",
            "tr": "Almanya'nın Temel Kanunu'nda ne yazmıyor?",
            "uk": "Що не сказано в Основному законі Німеччини?",
            "ru": "Что не сказано в Основном законе Германии?",
            "pl": "Co nie jest zapisane w Ustawie Zasadniczej Niemiec?",
            "fa": "چه چیزی در قانون اساسی آلمان نیامده است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Die Würde des Menschen ist unantastbar.",
                    "en": "The dignity of man is inviolable.",
                    "ar": "كرامة الإنسان مصونة.",
                    "tr": "İnsanın onuru dokunulmazdır.",
                    "uk": "Гідність людини є недоторканною.",
                    "ru": "Достоинство человека неприкосновенно.",
                    "pl": "Godność człowieka jest nienaruszalna.",
                    "fa": "کرامت انسان غیرقابل‌تخلف است."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Alle sollen gleich viel Geld haben.",
                    "en": "Everyone should have the same amount of money.",
                    "ar": "يجب أن يكون لدى الجميع نفس المبلغ من المال.",
                    "tr": "Herkesin eşit miktarda parası olmalıdır.",
                    "uk": "У всіх має бути однакова кількість грошей.",
                    "ru": "У всех должно быть одинаковое количество денег.",
                    "pl": "Wszyscy powinni mieć taką samą ilość pieniędzy.",
                    "fa": "همه باید مقدار یکسانی پول داشته باشند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Jeder Mensch darf seine Meinung sagen.",
                    "en": "Everyone is allowed to express their opinion.",
                    "ar": "يُسمح لكل إنسان بالتعبير عن رأيه.",
                    "tr": "Her insan görüşünü ifade etme hakkına sahiptir.",
                    "uk": "Кожен має право висловлювати свою думку.",
                    "ru": "Каждый имеет право высказывать свое мнение.",
                    "pl": "Każdy ma prawo do wyrażania swojej opinii.",
                    "fa": "هر شخص حق دارد نظر خود را بیان کند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Alle sind vor dem Gesetz gleich.",
                    "en": "Everyone is equal before the law.",
                    "ar": "الجميع سواسية أمام القانون.",
                    "tr": "Herkes yasalar önünde eşittir.",
                    "uk": "Всі рівні перед законом.",
                    "ru": "Все равны перед законом.",
                    "pl": "Wszyscy są równi wobec prawa.",
                    "fa": "همه در برابر قانون برابرند."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    },
    {
        "id": "9",
        "question": {
            "de": "Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …",
            "en": "Which fundamental right applies in Germany only to foreigners? The fundamental right to …",
            "ar": "أي حق أساسي ينطبق في ألمانيا فقط على الأجانب؟ الحق الأساسي في ...",
            "tr": "Almanya'da yalnızca yabancılar için geçerli olan temel hak hangisidir? Temel hak ...",
            "uk": "Яке основне право в Німеччині застосовується лише до іноземців? Основне право на ...",
            "ru": "Какое основное право в Германии применяется только к иностранцам? Основное право на ...",
            "pl": "Które podstawowe prawo w Niemczech dotyczy tylko obcokrajowców? Podstawowe prawo do ...",
            "fa": "کدام حق بنیادی در آلمان فقط برای خارجی‌ها صدق می‌کند؟ حق بنیادی در ... "
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Schutz der Familie",
                    "en": "Protection of the family.",
                    "ar": "حماية الأسرة.",
                    "tr": "Ailenin korunması.",
                    "uk": "Захист родини.",
                    "ru": "Защита семьи.",
                    "pl": "Ochrona rodziny.",
                    "fa": "حفاظت از خانواده."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Menschenwürde",
                    "en": "Human dignity.",
                    "ar": "كرامة الإنسان.",
                    "tr": "İnsan onuru.",
                    "uk": "Гідність людини.",
                    "ru": "Достоинство человека.",
                    "pl": "Godność człowieka.",
                    "fa": "کرامت انسانی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Asyl",
                    "en": "Asylum.",
                    "ar": "اللجوء.",
                    "tr": "Sığınma.",
                    "uk": "Притулок.",
                    "ru": "Убежище.",
                    "pl": "Azyl.",
                    "fa": "پناهندگی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Meinungsfreiheit",
                    "en": "Freedom of opinion.",
                    "ar": "حرية الرأي.",
                    "tr": "Düşünce özgürlüğü.",
                    "uk": "Свобода думки.",
                    "ru": "Свобода мнения.",
                    "pl": "Wolność wyrażania opinii.",
                    "fa": "آزادی بیان."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "society"
    },
    {
        "id": "10",
        "question": {
            "de": "Was ist mit dem deutschen Grundgesetz vereinbar?",
            "en": "What is compatible with the German Basic Law?",
            "ar": "ما الذي يتوافق مع القانون الأساسي الألماني؟",
            "tr": "Alman Temel Yasası ile ne uyumludur?",
            "uk": "Що є сумісним з Основним законом Німеччини?",
            "ru": "Что совместимо с Основным законом Германии?",
            "pl": "Co jest zgodne z niemiecką Ustawą Zasadniczą?",
            "fa": "چه چیزی با قانون اساسی آلمان سازگار است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Prügelstrafe",
                    "en": "corporal punishment.",
                    "ar": "العقوبة الجسدية.",
                    "tr": "bedensel ceza.",
                    "uk": "тілесне покарання.",
                    "ru": "телесное наказание.",
                    "pl": "kara cielesna.",
                    "fa": "مجازات بدنی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Folter",
                    "en": "torture.",
                    "ar": "التعذيب.",
                    "tr": "işkence.",
                    "uk": "катування.",
                    "ru": "пытки.",
                    "pl": "tortury.",
                    "fa": "شکنجه."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Todesstrafe",
                    "en": "the death penalty.",
                    "ar": "عقوبة الإعدام.",
                    "tr": "ölüm cezası.",
                    "uk": "смертна кара.",
                    "ru": "смертная казнь.",
                    "pl": "kara śmierci.",
                    "fa": "مجازات اعدام."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Geldstrafe",
                    "en": "the fine.",
                    "ar": "الغرامة.",
                    "tr": "para cezası.",
                    "uk": "штраф.",
                    "ru": "штраф.",
                    "pl": "grzywna.",
                    "fa": "جریمه."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "society"
    },
    {
        "id": "11",
        "question": {
            "de": "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
            "en": "What is the constitution of the Federal Republic of Germany called?",
            "ar": "كيف يسمى دستور جمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti'nin anayasası ne olarak adlandırılır?",
            "uk": "Як називається конституція Федеративної Республіки Німеччина?",
            "ru": "Как называется конституция Федеративной Республики Германии?",
            "pl": "Jak nazywa się konstytucja Federalnej Republiki Niemiec?",
            "fa": "قانون اساسی جمهوری فدرال آلمان چگونه نامیده می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Grundgesetz",
                    "en": "Basic Law.",
                    "ar": "القانون الأساسي.",
                    "tr": "Temel Kanun.",
                    "uk": "Основний закон.",
                    "ru": "Основной закон.",
                    "pl": "Ustawa Zasadnicza.",
                    "fa": "قانون اساسی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bundesverfassung",
                    "en": "Federal Constitution.",
                    "ar": "الدستور الفيدرالي.",
                    "tr": "Federal Anayasa.",
                    "uk": "Федеральна конституція.",
                    "ru": "Федеральная конституция.",
                    "pl": "Konstytucja federalna.",
                    "fa": "قانون اساسی فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Gesetzbuch",
                    "en": "Code of laws.",
                    "ar": "مجموعة القوانين.",
                    "tr": "Hukuk kitabı.",
                    "uk": "Кодекс законів.",
                    "ru": "Кодекс законов.",
                    "pl": "Kodeks prawny.",
                    "fa": "کتاب قانون."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Verfassungsvertrag",
                    "en": "Constitutional contract.",
                    "ar": "عقد الدستور.",
                    "tr": "Anayasa sözleşmesi.",
                    "uk": "Конституційний контракт.",
                    "ru": "Конституционный договор.",
                    "pl": "Umowa konstytucyjna.",
                    "fa": "قرارداد اساسی."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "12",
        "question": {
            "de": "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
            "en": "A party in the German Bundestag wants to abolish press freedom. Is that possible?",
            "ar": "تريد حزب في البوندستاغ الألماني إلغاء حرية الصحافة. هل ذلك ممكن؟",
            "tr": "Alman Bundestag'ında bir parti basın özgürlüğünü kaldırmak istiyor. Bu mümkün mü?",
            "uk": "Партія в німецькому Бундестазі хоче скасувати свободу преси. Це можливо?",
            "ru": "Партия в немецком Бундестаге хочет отменить свободу прессы. Это возможно?",
            "pl": "Partia w niemieckim Bundestagu chce zniesienia wolności prasy. Czy to możliwe?",
            "fa": "یک حزب در بوندستاگ آلمان می‌خواهد آزادی مطبوعات را لغو کند. آیا این ممکن است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
                    "en": "Yes, if more than half of the members of the Bundestag are in favor.",
                    "ar": "نعم، إذا كان أكثر من نصف الأعضاء في البوندستاغ يؤيدون ذلك.",
                    "tr": "Evet, eğer Bundestag'daki üyelerin yarısından fazlası buna destekliyorsa.",
                    "uk": "Так, якщо більше половини членів Бундестагу за це.",
                    "ru": "Да, если более половины депутатов Бундестага за это.",
                    "pl": "Tak, jeśli więcej niż połowa członków Bundestagu się za tym opowiada.",
                    "fa": "بله، اگر بیش از نیمی از اعضای بوندستاگ موافق باشند."
    }
            },
            {
                "id": 1,
                "text": {
                    "de": "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
                    "en": "Yes, but two-thirds of the members of the Bundestag must be in favor.",
                    "ar": "نعم، ولكن يجب أن يكون ثلثا الأعضاء في البوندستاغ مؤيدين لذلك.",
                    "tr": "Evet, ancak Bundestag'daki üyelerin üçte ikisinin buna desteklemesi gerekiyor.",
                    "uk": "Так, але дві третини членів Бундестагу повинні бути за це.",
                    "ru": "Да, но для этого нужно, чтобы две трети депутатов Бундестага поддержали это.",
                    "pl": "Tak, ale dwie trzecie członków Bundestagu musi być za tym.",
                    "fa": "بله، اما باید دو سوم اعضای بوندستاگ با آن موافق باشند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
                    "en": "No, because press freedom is a fundamental right. It cannot be abolished.",
                    "ar": "لا، لأن حرية الصحافة حق أساسي. لا يمكن إلغاؤها.",
                    "tr": "Hayır, çünkü basın özgürlüğü temel bir haktır. Kaldırılamaz.",
                    "uk": "Ні, тому що свобода преси є основним правом. Її не можна скасувати.",
                    "ru": "Нет, потому что свобода прессы является основным правом. Ее нельзя отменить.",
                    "pl": "Nie, ponieważ wolność prasy jest prawem podstawowym. Nie można jej zniesić.",
                    "fa": "خیر، زیرا آزادی مطبوعات یک حق بنیادی است. نمی‌توان آن را لغو کرد."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.",
                    "en": "No, because only the Federal Council can abolish press freedom.",
                    "ar": "لا، لأن المجلس الفيدرالي فقط يمكنه إلغاء حرية الصحافة.",
                    "tr": "Hayır, çünkü basın özgürlüğünü yalnızca Federal Konsey kaldırabilir.",
                    "uk": "Ні, тому що тільки Федеральна рада може скасувати свободу преси.",
                    "ru": "Нет, потому что только Федеральный совет может отменить свободу прессы.",
                    "pl": "Nie, ponieważ tylko Federalna Rada może zniesić wolność prasy.",
                    "fa": "خیر، زیرا تنها شورای فدرال می‌تواند آزادی مطبوعات را لغو کند."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "society"
    },
    {
        "id": "13",
        "question": {
            "de": "Im Parlament steht der Begriff „Opposition“ für…",
            "en": "In Parliament, the term 'opposition' refers to…",
            "ar": "في البرلمان، يشير مصطلح \"المعارضة\" إلى...",
            "tr": "Parlamentte 'muhalefet' terimi... için kullanılır.",
            "uk": "У парламенті термін 'опозиція' означає...",
            "ru": "В парламенте термин 'оппозиция' означает...",
            "pl": "W parlamencie termin 'opozycja' odnosi się do...",
            "fa": "در پارلمان، اصطلاح \"مقابله\" به ... اشاره دارد."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die regierenden Parteien.",
                    "en": "the governing parties.",
                    "ar": "الأحزاب الحاكمة.",
                    "tr": "hükümetteki partiler.",
                    "uk": "урядові партії.",
                    "ru": "правящие партии.",
                    "pl": "partie rządzące.",
                    "fa": "احزاب حاکم."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
                    "en": "all members who do not belong to the governing party/parties.",
                    "ar": "جميع الأعضاء الذين لا ينتمون إلى الحزب / الأحزاب الحاكمة.",
                    "tr": "hükümet partisine/partilerine ait olmayan tüm üyeler.",
                    "uk": "усі члени, які не належать до урядової партії/партій.",
                    "ru": "все члены, не относящиеся к правящей партии/партиям.",
                    "pl": "wszyscy członkowie, którzy nie należą do partii rządzącej/partii.",
                    "fa": "تمام اعضایی که به حزب/احزاب حاکم تعلق ندارند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Fraktion mit den meisten Abgeordneten.",
                    "en": "the faction with the most members.",
                    "ar": "الكتلة ذات أكبر عدد من الأعضاء.",
                    "tr": "en fazla üyesi olan fraksiyon.",
                    "uk": "фракція з найбільшою кількістю членів.",
                    "ru": "фракция с наибольшим количеством членов.",
                    "pl": "frakcja z największą liczbą członków.",
                    "fa": "گروه با بیشترین اعضا."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
                    "en": "all parties that reached the 5% threshold in the last election.",
                    "ar": "جميع الأحزاب التي وصلت إلى عتبة 5% في الانتخابات الأخيرة.",
                    "tr": "son seçimde %5 eşiğini geçen tüm partiler.",
                    "uk": "всі партії, які досягли 5% порогу на останніх виборах.",
                    "ru": "все партии, которые преодолели 5%-ный барьер на последних выборах.",
                    "pl": "wszystkie partie, które w ostatnich wyborach osiągnęły próg 5%.",
                    "fa": "تمام احزابی که در انتخابات آخر به آستانه 5 درصد رسیده‌اند."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    },
    {
        "id": "14",
        "question": {
            "de": "Meinungsfreiheit in Deutschland heißt zum Beispiel, dass ich …",
            "en": "Freedom of expression in Germany means, for example, that I …",
            "ar": "تعني حرية التعبير في ألمانيا، على سبيل المثال، أنني ...",
            "tr": "Almanya'da ifade özgürlüğü, örneğin, benim ... demektir.",
            "uk": "Свобода висловлювання в Німеччині означає, наприклад, що я ...",
            "ru": "Свобода выражения мнений в Германии, например, означает, что я ...",
            "pl": "Wolność wypowiedzi w Niemczech oznacza na przykład, że ...",
            "fa": "در آلمان، آزادی بیان به این معنی است که من ... "
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Passanten auf der Straße beschimpfen darf.",
                    "en": "can insult passersby on the street.",
                    "ar": "يمكنني إهانة المارة في الشارع.",
                    "tr": "sokakta geçenlere hakaret edebilirim.",
                    "uk": "можу ображати перехожих на вулиці.",
                    "ru": "могу оскорблять прохожих на улице.",
                    "pl": "mogę obrażać przechodniów na ulicy.",
                    "fa": "می‌توانم به عابران در خیابان توهین کنم."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "meine Meinung im Internet äußern kann.",
                    "en": "can express my opinion on the internet.",
                    "ar": "يمكنني التعبير عن رأيي على الإنترنت.",
                    "tr": "internette fikrimi belirtebilirim.",
                    "uk": "можу висловлювати свою думку в Інтернеті.",
                    "ru": "могу высказать свое мнение в Интернете.",
                    "pl": "mogę wyrażać swoją opinię w Internecie.",
                    "fa": "می‌توانم نظر خود را در اینترنت بیان کنم."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.",
                    "en": "can publicly display Nazi, Hamas, or Islamic State symbols.",
                    "ar": "يمكنني عرض رموز النازيين أو حماس أو الدولة الإسلامية علنًا.",
                    "tr": "Nazi, Hamas veya IŞİD sembollerini kamuya açık olarak taşıyabilirim.",
                    "uk": "можу публічно носити символи нацистів, ХАМАС або Ісламської держави.",
                    "ru": "могу публично носить символику нацистов, ХАМАС или Исламского государства.",
                    "pl": "mogę publicznie nosić symbole nazistów, Hamasu lub Pańства Islamskiego.",
                    "fa": "می‌توانم علائم نازی، حماس یا دولت اسلامی را به‌طور علنی حمل کنم."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.",
                    "en": "can only express my opinion as long as I do not contradict the government.",
                    "ar": "يمكنني التعبير عن رأيي فقط طالما أنني لا أعارض الحكومة.",
                    "tr": "hükümete karşı gelmediğim sürece fikrimi ifade edebilirim.",
                    "uk": "можу висловлювати свою думку лише до тих пір, поки не суперечу уряду.",
                    "ru": "могу высказывать свое мнение только в том случае, если не противоречу правительству.",
                    "pl": "mogę wyrażać swoją opinię tylko wtedy, gdy nie sprzeciwiam się rządowi.",
                    "fa": "می‌توانم نظر خود را فقط به شرطی بیان کنم که به دولت مخالفت نکنم."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    },
    {
        "id": "15",
        "question": {
            "de": "Was verbietet das deutsche Grundgesetz?",
            "en": "What does the German Constitution prohibit?",
            "ar": "ماذا يمنع الدستور الألماني؟",
            "tr": "Alman Anayasası neyi yasaklar?",
            "uk": "Що забороняє німецька конституція?",
            "ru": "Что запрещает немецкая конституция?",
            "pl": "Co zabrania niemiecka konstytucja?",
            "fa": "دستور آلمان چه چیزی را ممنوع می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Militärdienst.",
                    "en": "military service.",
                    "ar": "الخدمة العسكرية.",
                    "tr": "askeri hizmet.",
                    "uk": "військова служба.",
                    "ru": "военная служба.",
                    "pl": "służba wojskowa.",
                    "fa": "خدمت نظامی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Zwangsarbeit.",
                    "en": "forced labor.",
                    "ar": "العمل القسري.",
                    "tr": "zorla çalıştırma.",
                    "uk": "примусова праця.",
                    "ru": "принудительный труд.",
                    "pl": "praca przymusowa.",
                    "fa": "کار اجباری."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "freie Berufswahl.",
                    "en": "free choice of profession.",
                    "ar": "الحرية في اختيار المهنة.",
                    "tr": "serbest meslek seçimi.",
                    "uk": "вільний вибір професії.",
                    "ru": "свободный выбор профессии.",
                    "pl": "wolny wybór zawodu.",
                    "fa": "انتخاب آزاد شغل."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Arbeit im Ausland.",
                    "en": "work abroad.",
                    "ar": "العمل في الخارج.",
                    "tr": "yurtdışında çalışma.",
                    "uk": "робота за кордоном.",
                    "ru": "работа за границей.",
                    "pl": "praca za granicą.",
                    "fa": "کار در خارج از کشور."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    },
    {
        "id": "16",
        "question": {
            "de": "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
            "en": "When is freedom of expression restricted in Germany?",
            "ar": "متى يتم تقييد حرية التعبير في ألمانيا؟",
            "tr": "Almanya'da ifade özgürlüğü ne zaman kısıtlanır?",
            "uk": "Коли свобода висловлювання обмежується в Німеччині?",
            "ru": "Когда свобода слова ограничивается в Германии?",
            "pl": "Kiedy wolność wypowiedzi jest ograniczana w Niemczech?",
            "fa": "آزادی بیان در آلمان چه زمانی محدود می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen.",
                    "en": "when publicly spreading false claims about individuals.",
                    "ar": "عند نشر ادعاءات كاذبة عن الأفراد علنًا.",
                    "tr": "bireyler hakkında yanlış iddialar kamuya açık olarak yayıldığında.",
                    "uk": "коли публічно поширюють неправдиві твердження про окремих осіб.",
                    "ru": "при публичном распространении ложных утверждений о конкретных лицах.",
                    "pl": "gdy publicznie rozpowszechniane są fałszywe twierdzenia o poszczególnych osobach.",
                    "fa": "وقتی ادعاهای نادرست درباره افراد به‌طور عمومی منتشر می‌شود."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "bei Meinungsäußerungen über die Bundesregierung.",
                    "en": "when expressing opinions about the federal government.",
                    "ar": "عند التعبير عن الآراء بشأن الحكومة الفيدرالية.",
                    "tr": "federal hükümet hakkında görüş bildirdiğinde.",
                    "uk": "при висловленні думок про федеральний уряд.",
                    "ru": "при выражении мнений о федеральном правительстве.",
                    "pl": "przy wyrażaniu opinii na temat rządu federalnego.",
                    "fa": "در بیان نظرات درباره دولت فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "bei Diskussionen über Religionen.",
                    "en": "when discussing religions.",
                    "ar": "عند مناقشة الأديان.",
                    "tr": "dinler hakkında tartışmalarda.",
                    "uk": "при обговоренні релігій.",
                    "ru": "при обсуждении религий.",
                    "pl": "w dyskusjach o religiach.",
                    "fa": "در بحث در مورد ادیان."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "bei Kritik am Staat.",
                    "en": "when criticizing the state.",
                    "ar": "عند انتقاد الدولة.",
                    "tr": "devletin eleştirisi sırasında.",
                    "uk": "при критиці держави.",
                    "ru": "при критике государства.",
                    "pl": "przy krytyce państwa.",
                    "fa": "در انتقاد از دولت."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "17",
        "question": {
            "de": "Die deutschen Gesetze verbieten …",
            "en": "German laws prohibit …",
            "ar": "تحظر القوانين الألمانية ...",
            "tr": "Alman yasaları ... yasaklar.",
            "uk": "Німецькі закони забороняють ...",
            "ru": "Немецкие законы запрещают ...",
            "pl": "Niemieckie prawo zabrania ...",
            "fa": "قوانین آلمان ... را ممنوع می‌کنند."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Meinungsfreiheit der Einwohner und Einwohnerinnen.",
                    "en": "freedom of expression of the residents.",
                    "ar": "حرية التعبير للسكان.",
                    "tr": "sakinlerin ifade özgürlüğü.",
                    "uk": "свобода слова жителів.",
                    "ru": "свобода слова жителей.",
                    "pl": "wolność wypowiedzi mieszkańców.",
                    "fa": "آزادی بیان ساکنان."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Petitionen der Bürger und Bürgerinnen.",
                    "en": "petitions of the citizens.",
                    "ar": "عريضة المواطنين.",
                    "tr": "vatandaşların dilekçeleri.",
                    "uk": "петиції громадян.",
                    "ru": "петиции граждан.",
                    "pl": "petycje obywateli.",
                    "fa": "درخواست‌های شهروندان."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Versammlungsfreiheit der Einwohner und Einwohnerinnen.",
                    "en": "freedom of assembly of the residents.",
                    "ar": "حرية التجمع للسكان.",
                    "tr": "sakinlerin toplanma özgürlüğü.",
                    "uk": "свобода зборів жителів.",
                    "ru": "свобода собраний жителей.",
                    "pl": "wolność zgromadzeń mieszkańców.",
                    "fa": "آزادی تجمع ساکنان."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat.",
                    "en": "discrimination of citizens by the state.",
                    "ar": "تمييز المواطنين من قبل الدولة.",
                    "tr": "devlet tarafından vatandaşlara yapılan ayrımcılık.",
                    "uk": "дискримінація громадян з боку держави.",
                    "ru": "дискриминация граждан со стороны государства.",
                    "pl": "dyskryminacja obywateli przez państwo.",
                    "fa": "تبعیض نسبت به شهروندان توسط دولت."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "society"
    },
    {
        "id": "18",
        "question": {
            "de": "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
            "en": "Which fundamental right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?",
            "ar": "ما هو الحق الأساسي المضمون في المادة 1 من القانون الأساسي لجمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti Anayasası'nın 1. maddesinde hangi temel hak güvence altına alınmıştır?",
            "uk": "Яке основне право гарантовано в статті 1 Основного закону Федеративної Республіки Німеччина?",
            "ru": "Какое основное право гарантировано в статье 1 Основного закона Федеративной Республики Германия?",
            "pl": "Jakie prawo podstawowe jest gwarantowane w artykule 1 podstawowej ustawy Republiki Federalnej Niemiec?",
            "fa": "کدام حق اساسی در ماده 1 قانون اساسی جمهوری فدرال آلمان تضمین شده است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Unantastbarkeit der Menschenwürde.",
                    "en": "the inviolability of human dignity.",
                    "ar": "عدم انتهاك كرامة الإنسان.",
                    "tr": "insan onurunun dokunulmazlığı.",
                    "uk": "незнищеність людської гідності.",
                    "ru": "неприкосновенность человеческого достоинства.",
                    "pl": "nienaruszalność godności człowieka.",
                    "fa": "عدم تعرض به کرامت انسانی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "das Recht auf Leben.",
                    "en": "the right to life.",
                    "ar": "الحق في الحياة.",
                    "tr": "yaşam hakkı.",
                    "uk": "право на життя.",
                    "ru": "право на жизнь.",
                    "pl": "prawo do życia.",
                    "fa": "حق زندگی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Religionsfreiheit.",
                    "en": "freedom of religion.",
                    "ar": "حرية الدين.",
                    "tr": "din özgürlüğü.",
                    "uk": "свобода віросповідання.",
                    "ru": "свобода вероисповедания.",
                    "pl": "wolność wyznania.",
                    "fa": "آزادی مذهب."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Meinungsfreiheit.",
                    "en": "freedom of expression.",
                    "ar": "حرية التعبير.",
                    "tr": "ifade özgürlüğü.",
                    "uk": "свобода слова.",
                    "ru": "свобода слова.",
                    "pl": "wolność wypowiedzi.",
                    "fa": "آزادی بیان."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "19",
        "question": {
            "de": "Was ist der Zweck der Europäischen Union?",
            "en": "What is the purpose of the European Union?",
            "ar": "ما هو هدف الاتحاد الأوروبي؟",
            "tr": "Avrupa Birliği'nin amacı nedir?",
            "uk": "Яка мета Європейського Союзу?",
            "ru": "Какова цель Европейского Союза?",
            "pl": "Jaki jest cel Unii Europejskiej?",
            "fa": "هدف اتحادیه اروپا چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Förderung des Friedens und der Stabilität.",
                    "en": "Promotion of peace and stability.",
                    "ar": "تعزيز السلام والاستقرار.",
                    "tr": "Barış ve istikrarı teşvik etmek.",
                    "uk": "Сприяння миру та стабільності.",
                    "ru": "Содействие миру и стабильности.",
                    "pl": "Promowanie pokoju i stabilności.",
                    "fa": "ترویج صلح و ثبات."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Wirtschaftliche Zusammenarbeit.",
                    "en": "Economic cooperation.",
                    "ar": "التعاون الاقتصادي.",
                    "tr": "Ekonomik iş birliği.",
                    "uk": "Економічна співпраця.",
                    "ru": "Экономическое сотрудничество.",
                    "pl": "Współpraca gospodarcza.",
                    "fa": "همکاری اقتصادی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Schutz der Menschenrechte.",
                    "en": "Protection of human rights.",
                    "ar": "حماية حقوق الإنسان.",
                    "tr": "İnsan haklarının korunması.",
                    "uk": "Захист прав людини.",
                    "ru": "Защита прав человека.",
                    "pl": "Ochrona praw człowieka.",
                    "fa": "حفاظت از حقوق بشر."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Erhalt der kulturellen Vielfalt.",
                    "en": "Preservation of cultural diversity.",
                    "ar": "الحفاظ على التنوع الثقافي.",
                    "tr": "Kültürel çeşitliliğin korunması.",
                    "uk": "Збереження культурного різноманіття.",
                    "ru": "Сохранение культурного разнообразия.",
                    "pl": "Zachowanie różnorodności kulturowej.",
                    "fa": "حفظ تنوع فرهنگی."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "politics"
    },

    {
        "id": "20",
        "question": {
            "de": "Welches Dokument legte die Gründung der Europäischen Union fest?",
            "en": "Which document established the founding of the European Union?",
            "ar": "أي وثيقة أسست إنشاء الاتحاد الأوروبي؟",
            "tr": "Hangi belge Avrupa Birliği'nin kuruluşunu belirlemiştir?",
            "uk": "Який документ встановив заснування Європейського Союзу?",
            "ru": "Какой документ утвердил основание Европейского Союза?",
            "pl": "Jaki dokument ustanowił założenie Unii Europejskiej?",
            "fa": "کدام سند تأسیس اتحادیه اروپا را تعیین کرده است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Der Vertrag von Maastricht.",
                    "en": "The Maastricht Treaty.",
                    "ar": "معاهدة ماستريخت.",
                    "tr": "Maastricht Anlaşması.",
                    "uk": "Маастрихтська угода.",
                    "ru": "Маастрихтский договор.",
                    "pl": "Traktat z Maastricht.",
                    "fa": "معاهده ماستریخت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Die Verfassung der EU.",
                    "en": "The Constitution of the EU.",
                    "ar": "دستور الاتحاد الأوروبي.",
                    "tr": "AB Anayasası.",
                    "uk": "Конституція ЄС.",
                    "ru": "Конституция ЕС.",
                    "pl": "Konstytucja UE.",
                    "fa": "قانون اساسی اتحادیه اروپا."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Der Vertrag von Lissabon.",
                    "en": "The Lisbon Treaty.",
                    "ar": "معاهدة لشبونة.",
                    "tr": "Lizbon Anlaşması.",
                    "uk": "Лісабонська угода.",
                    "ru": "Лиссабонский договор.",
                    "pl": "Traktat lizboński.",
                    "fa": "معاهده لیسبون."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Die Charta der Grundrechte.",
                    "en": "The Charter of Fundamental Rights.",
                    "ar": "ميثاق الحقوق الأساسية.",
                    "tr": "Temel Haklar Şartı.",
                    "uk": "Хартія основних прав.",
                    "ru": "Хартия основных прав.",
                    "pl": "Karta praw podstawowych.",
                    "fa": "میثاق حقوق بنیادی."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "politics"
    },
    {
        "id": "21",
        "question": {
            "de": "Welches ist das Wappen der Bundesrepublik Deutschland?",
            "en": "Which is the coat of arms of the Federal Republic of Germany?",
            "ar": "ما هو شعار جمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti'nin arması hangisidir?",
            "uk": "Який герб Федеративної Республіки Німеччина?",
            "ru": "Какой герб Федеративной Республики Германия?",
            "pl": "Jaki jest herb Republiki Federalnej Niemiec?",
            "fa": "آرم جمهوری فدرال آلمان چیست؟"
        },
        image: require('../assets/images/021.png'),
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "einköpfiger Adler auf einem (gelben) Schild.",
                    "en": "single-headed eagle on a (yellow) shield.",
                    "ar": "نسر أحادي الرأس على درع (أصفر).",
                    "tr": "sarı bir kalkan üzerinde tek başlı kartal.",
                    "uk": "одноголовий орел на (жовтому) щиті.",
                    "ru": "одноголовый орел на (желтом) щите.",
                    "pl": "jednogłowy orzeł na (żółtej) tarczy.",
                    "fa": "عقاب تک‌سر بر روی یک سپر (زرد)."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Zwei vereinigte Symbole.",
                    "en": "Two united symbols.",
                    "ar": "رمزين موحدين.",
                    "tr": "Birleşmiş iki sembol.",
                    "uk": "Два об'єднаних символи.",
                    "ru": "Два объединенных символа.",
                    "pl": "Dwa zjednoczone symbole.",
                    "fa": "دو نماد متحد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "stilisiertes Tatzenkreuz.",
                    "en": "stylized paw cross.",
                    "ar": "صليب مخلب مُنسّق.",
                    "tr": "stilize edilmiş pençe haçı.",
                    "uk": "стилізований лапковий хрест.",
                    "ru": "стилизованный лапковый крест.",
                    "pl": "styliz krzyż łap.",
                    "fa": "صلیب پنجه‌ای سبک‌شده."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Ährenkranz mit Hammer und Zirkel.",
                    "en": "wreath of ears with hammer and sickle.",
                    "ar": "إكليل من السنابل مع مطرقة ومنجل.",
                    "tr": "çekiç ve orak ile başak çelengi.",
                    "uk": "вінок із колоссям з молотом і серпом.",
                    "ru": "венок из колосьев с молотом и серпом.",
                    "pl": "wianek z kłosów z młotem i sierpem.",
                    "fa": "گلابی از خوشه با چکش و داس."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    },
    {
        "id": "22",
        "question": {
            "de": "Was für eine Staatsform hat Deutschland?",
            "en": "What form of government does Germany have?",
            "ar": "ما هي شكل الحكومة في ألمانيا؟",
            "tr": "Almanya'nın hükümet biçimi nedir?",
            "uk": "Яка форма правління в Німеччині?",
            "ru": "Какая форма правления в Германии?",
            "pl": "Jaka forma rządów panuje w Niemczech?",
            "fa": "شکل حکومت در آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Monarchie.",
                    "en": "Monarchy.",
                    "ar": "ملكية.",
                    "tr": "Monarşi.",
                    "uk": "Монархія.",
                    "ru": "Монархия.",
                    "pl": "Monarchia.",
                    "fa": "سلطنت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Diktatur.",
                    "en": "Dictatorship.",
                    "ar": "ديكتاتورية.",
                    "tr": "Diktatörlük.",
                    "uk": "Диктатура.",
                    "ru": "Диктатура.",
                    "pl": "Dyktatura.",
                    "fa": "دیکتاتوری."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Republik.",
                    "en": "Republic.",
                    "ar": "جمهورية.",
                    "tr": "Cumhuriyet.",
                    "uk": "Республіка.",
                    "ru": "Республика.",
                    "pl": "Republika.",
                    "fa": "جمهوری."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Fürstentum.",
                    "en": "Principality.",
                    "ar": "إمارة.",
                    "tr": "Prenslik.",
                    "uk": "Князівство.",
                    "ru": "Княжество.",
                    "pl": "Księstwo.",
                    "fa": "امارت."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "politics"
    }
    ,
    {
        "id": "23",
        "question": {
            "de": "In Deutschland sind die meisten Erwerbstätigen …",
            "en": "In Germany, most employees are …",
            "ar": "في ألمانيا، معظم العاملين ...",
            "tr": "Almanya'da, çoğu çalışan ...",
            "uk": "В Німеччині більшість працюючих ...",
            "ru": "В Германии большинство работников ...",
            "pl": "W Niemczech większość pracujących ...",
            "fa": "در آلمان، بیشتر کارکنان ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "bei einer Firma oder Behörde beschäftigt.",
                    "en": "employed by a company or authority.",
                    "ar": "موظفون لدى شركة أو جهة حكومية.",
                    "tr": "bir firma veya kamu kurumunda çalışmaktadır.",
                    "uk": "працюють у компанії або державному органі.",
                    "ru": "заняты в компании или государственном учреждении.",
                    "pl": "zatrudnieni w firmie lub urzędzie.",
                    "fa": "در یک شرکت یا نهاد دولتی مشغول به کار هستند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "in kleinen Familienunternehmen beschäftigt.",
                    "en": "employed in small family businesses.",
                    "ar": "موظفون في الشركات العائلية الصغيرة.",
                    "tr": "küçük aile işletmelerinde çalışmaktadır.",
                    "uk": "працюють у малих сімейних підприємствах.",
                    "ru": "заняты в малых семейных предприятиях.",
                    "pl": "zatrudnieni w małych rodzinnych firmach.",
                    "fa": "در کسب‌وکارهای خانوادگی کوچک مشغول به کار هستند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "ehrenamtlich für ein Bundesland tätig.",
                    "en": "volunteering for a federal state.",
                    "ar": "يعملون طواعية في ولاية فدرالية.",
                    "tr": "bir eyalette gönüllü olarak çalışmaktadır.",
                    "uk": "волонтерять для федеральної землі.",
                    "ru": "работают добровольно для федеральной земли.",
                    "pl": "wolontariusze w jednym z landów.",
                    "fa": "به صورت داوطلبانه در یک ایالت فدرال مشغول به کار هستند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "selbständig mit einer eigenen Firma tätig.",
                    "en": "self-employed with their own business.",
                    "ar": "يعملون لحسابهم الخاص مع شركتهم الخاصة.",
                    "tr": "kendi işlerini yapan serbest meslek sahibidir.",
                    "uk": "самозайняті зі своїм власним бізнесом.",
                    "ru": "самозанятые со своим бизнесом.",
                    "pl": "prowadzą własny biznes.",
                    "fa": "با یک شرکت شخصی خود مشغول به کار هستند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "economy"
    }
    ,
    {
        "id": "24",
        "question": {
            "de": "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
            "en": "How many federal states does the Federal Republic of Germany have?",
            "ar": "كم عدد الولايات الفيدرالية في جمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti'nde kaç eyalet vardır?",
            "uk": "Скільки федеральних земель має Федеративна Республіка Німеччина?",
            "ru": "Сколько федеральных земель в Федеративной Республике Германия?",
            "pl": "Ile landów ma Republika Federalna Niemiec?",
            "fa": "جمهوری فدرال آلمان چند ایالت دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "14",
                  
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "15",
                   
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "16",
                  
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "17"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "politics"
    }
    ,
    {
        "id": "25",
        "question": {
            "de": "Was ist kein Bundesland der Bundesrepublik Deutschland?",
            "en": "Which is not a federal state of the Federal Republic of Germany?",
            "ar": "ما هو ليس ولاية من الولايات الفيدرالية لجمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti'nin eyaleti olmayan hangisidir?",
            "uk": "Що не є федеральною землею Федеративної Республіки Німеччина?",
            "ru": "Что не является федеральной землей Федеративной Республики Германия?",
            "pl": "Co nie jest landem Republiki Federalnej Niemiec?",
            "fa": "چه چیزی ایالت جمهوری فدرال آلمان نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Nordrhein-Westfalen.",
                    "en": "North Rhine-Westphalia.",
                    "ar": "شمال الراين - ويستفاليا.",
                    "tr": "Kuzey Ren-Vestfalya.",
                    "uk": "Північний Рейн-Вестфалія.",
                    "ru": "Северный Рейн-Вестфалия.",
                    "pl": "Nadrenia Północna-Westfalia.",
                    "fa": "شمال راین - وستفالی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Elsass-Lothringen.",
                    "en": "Alsace-Lorraine.",
                    "ar": "الألزاس - لورين.",
                    "tr": "Alsas-Loren.",
                    "uk": "Ельзас-Лотарингія.",
                    "ru": "Эльзас-Лотарингия.",
                    "pl": "Alzacja-Lotaryngia.",
                    "fa": "الزاس - لورن."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Mecklenburg-Vorpommern.",
                    "en": "Mecklenburg-Vorpommern.",
                    "ar": "مكلنبورغ-فوربومرن.",
                    "tr": "Mecklenburg-Vorpommern.",
                    "uk": "Мекленбург-Передня Померанія.",
                    "ru": "Мекленбург-Передняя Померания.",
                    "pl": "Mecklenburg-Vorpommern.",
                    "fa": "مکلنبورگ-فورپومرن."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Sachsen-Anhalt.",
                    "en": "Saxony-Anhalt.",
                    "ar": "ساكسونيا-أنهالت.",
                    "tr": "Saksonya-Anhalt.",
                    "uk": "Саксонія-Ангальт.",
                    "ru": "Саксония-Анхальт.",
                    "pl": "Saksonia-Anhalt.",
                    "fa": "ساکسن-آنهالت."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
    {
        "id": "26",
        "question": {
            "de": "Deutschland ist …",
            "en": "Germany is ...",
            "ar": "ألمانيا هي ...",
            "tr": "Almanya ...",
            "uk": "Німеччина ...",
            "ru": "Германия ...",
            "pl": "Niemcy to ...",
            "fa": "آلمان ... است."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "eine kommunistische Republik.",
                    "en": "a communist republic.",
                    "ar": "جمهورية شيوعية.",
                    "tr": "komünist bir cumhuriyet.",
                    "uk": "комуністична республіка.",
                    "ru": "коммунистическая республика.",
                    "pl": "komunistyczna republika.",
                    "fa": "جمهوری کمونیستی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "ein demokratischer und sozialer Bundesstaat.",
                    "en": "a democratic and social federal state.",
                    "ar": "دولة اتحادية ديمقراطية واجتماعية.",
                    "tr": "demokratik ve sosyal bir federal devlet.",
                    "uk": "демократична та соціальна федеративна держава.",
                    "ru": "демократическое и социальное федеральное государство.",
                    "pl": "demokratyczne i społeczne państwo federalne.",
                    "fa": "یک دولت فدرال دموکراتیک و اجتماعی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "eine kapitalistische und soziale Monarchie.",
                    "en": "a capitalist and social monarchy.",
                    "ar": "ملكية رأسمالية واجتماعية.",
                    "tr": "kapitalist ve sosyal bir monarşi.",
                    "uk": "капіталістична та соціальна монархія.",
                    "ru": "капиталистическая и социальная монархия.",
                    "pl": "kapitalistyczna i społeczna monarchia.",
                    "fa": "یک سلطنت سرمایه‌داری و اجتماعی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "ein sozialer und sozialistischer Bundesstaat.",
                    "en": "a social and socialist federal state.",
                    "ar": "دولة اتحادية اجتماعية واشتراكية.",
                    "tr": "sosyal ve sosyalist bir federal devlet.",
                    "uk": "соціальна та соціалістична федеративна держава.",
                    "ru": "социальное и социалистическое федеральное государство.",
                    "pl": "społeczne i socjalistyczne państwo federalne.",
                    "fa": "یک دولت فدرال اجتماعی و سوسیالیستی."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
    {
        "id": "27",
        "question": {
            "de": "Deutschland ist …",
            "en": "Germany is ...",
            "ar": "ألمانيا هي ...",
            "tr": "Almanya ...",
            "uk": "Німеччина ...",
            "ru": "Германия ...",
            "pl": "Niemcy to ...",
            "fa": "آلمان ... است."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "ein sozialistischer Staat.",
                    "en": "a socialist state.",
                    "ar": "دولة اشتراكية.",
                    "tr": "sosyalist bir devlet.",
                    "uk": "соціалістична держава.",
                    "ru": "социалистическое государство.",
                    "pl": "państwo socjalistyczne.",
                    "fa": "یک دولت سوسیالیستی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "ein Bundesstaat.",
                    "en": "a federal state.",
                    "ar": "دولة اتحادية.",
                    "tr": "federal bir devlet.",
                    "uk": "федеративна держава.",
                    "ru": "федеративное государство.",
                    "pl": "państwo federalne.",
                    "fa": "یک دولت فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "eine Diktatur.",
                    "en": "a dictatorship.",
                    "ar": "ديكتاتورية.",
                    "tr": "bir diktatörlük.",
                    "uk": "диктатура.",
                    "ru": "диктатура.",
                    "pl": "dyktatura.",
                    "fa": "یک دیکتاتوری."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "eine Monarchie.",
                    "en": "a monarchy.",
                    "ar": "ملكية.",
                    "tr": "bir monarşi.",
                    "uk": "монархія.",
                    "ru": "монархия.",
                    "pl": "monarchia.",
                    "fa": "یک سلطنت."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    },
    {
        "id": "28",
        "question": {
            "de": "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
            "en": "Who elects the representatives to the Bundestag in Germany?",
            "ar": "من ينتخب النواب في البرلمان الألماني؟",
            "tr": "Almanya'da Bundestag'a temsilcileri kim seçer?",
            "uk": "Хто обирає депутатів до Бундестагу в Німеччині?",
            "ru": "Кто выбирает депутатов в Бундестаг в Германии?",
            "pl": "Kto wybiera posłów do Bundestagu w Niemczech?",
            "fa": "کی در آلمان نمایندگان را به بوندستاگ انتخاب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "das Militär.",
                    "en": "the military.",
                    "ar": "الجيش.",
                    "tr": "ordu.",
                    "uk": "армія.",
                    "ru": "армия.",
                    "pl": "wojsko.",
                    "fa": "ارتش."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Wirtschaft.",
                    "en": "the economy.",
                    "ar": "الاقتصاد.",
                    "tr": "ekonomi.",
                    "uk": "економіка.",
                    "ru": "экономика.",
                    "pl": "gospodarka.",
                    "fa": "اقتصاد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das wahlberechtigte Volk.",
                    "en": "the eligible voters.",
                    "ar": "الشعب المؤهل للتصويت.",
                    "tr": "seçme hakkına sahip halk.",
                    "uk": "виборче населення.",
                    "ru": "избирательный народ.",
                    "pl": "wyborcy.",
                    "fa": "مردم واجد شرایط رأی‌گیری."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Verwaltung.",
                    "en": "the administration.",
                    "ar": "الإدارة.",
                    "tr": "idare.",
                    "uk": "адміністрація.",
                    "ru": "администрация.",
                    "pl": "administracja.",
                    "fa": "اداره."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "politics"
    },
    {
        "id": "29",
        "question": {
            "de": "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
            "en": "Which animal is the emblematic animal of the Federal Republic of Germany?",
            "ar": "أي حيوان هو الحيوان الرمزي لجمهورية ألمانيا الاتحادية؟",
            "tr": "Almanya Federal Cumhuriyeti'nin sembolik hayvanı hangisidir?",
            "uk": "Яка тварина є емблематичною твариною Федеративної Республіки Німеччина?",
            "ru": "Какое животное является эмблематическим животным Федеративной Республики Германия?",
            "pl": "Jakie zwierzę jest zwierzęciem emblematycznym Republiki Federalnej Niemiec?",
            "fa": "کدام حیوان، حیوان نمادین جمهوری فدرال آلمان است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Löwe.",
                    "en": "lion.",
                    "ar": "أسد.",
                    "tr": "aslan.",
                    "uk": "лев.",
                    "ru": "лев.",
                    "pl": "lew.",
                    "fa": "شیر."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Adler.",
                    "en": "eagle.",
                    "ar": "نسر.",
                    "tr": "kartal.",
                    "uk": "орел.",
                    "ru": "орел.",
                    "pl": "orzeł.",
                    "fa": "عقاب."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Bär.",
                    "en": "bear.",
                    "ar": "دب.",
                    "tr": "ayı.",
                    "uk": "ведмідь.",
                    "ru": "медведь.",
                    "pl": "niedźwiedź.",
                    "fa": "خرس."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Pferd.",
                    "en": "horse.",
                    "ar": "حصان.",
                    "tr": "at.",
                    "uk": "кінь.",
                    "ru": "лошадь.",
                    "pl": "koń.",
                    "fa": "اسب."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "symbols"
    }
    ,
    {
        "id": "30",
        "question": {
            "de": "Was ist kein Merkmal unserer Demokratie?",
            "en": "What is not a feature of our democracy?",
            "ar": "ما هي الميزة التي ليست من ميزات ديمقراطيتنا؟",
            "tr": "Demokrasimizin özelliği olmayan nedir?",
            "uk": "Що не є ознакою нашої демократії?",
            "ru": "Что не является признаком нашей демократии?",
            "pl": "Co nie jest cechą naszej demokracji?",
            "fa": "کدام یک از ویژگی‌ها، ویژگی دموکراسی ما نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "regelmäßige Wahlen.",
                    "en": "regular elections.",
                    "ar": "انتخابات منتظمة.",
                    "tr": "düzenli seçimler.",
                    "uk": "регулярні вибори.",
                    "ru": "регулярные выборы.",
                    "pl": "regularne wybory.",
                    "fa": "انتخابات منظم."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Pressezensur.",
                    "en": "press censorship.",
                    "ar": "رقابة الصحافة.",
                    "tr": "basın sansürü.",
                    "uk": "цензура преси.",
                    "ru": "цензура прессы.",
                    "pl": "cenzura prasy.",
                    "fa": "سانسور مطبوعات."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Meinungsfreiheit.",
                    "en": "freedom of expression.",
                    "ar": "حرية التعبير.",
                    "tr": "ifade özgürlüğü.",
                    "uk": "свобода слова.",
                    "ru": "свобода слова.",
                    "pl": "wolność wypowiedzi.",
                    "fa": "آزادی بیان."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "verschiedene Parteien.",
                    "en": "various parties.",
                    "ar": "أحزاب مختلفة.",
                    "tr": "çeşitli partiler.",
                    "uk": "різні партії.",
                    "ru": "разные партии.",
                    "pl": "różne partie.",
                    "fa": "احزاب مختلف."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
    {
        "id": "31",
        "question": {
            "de": "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
            "en": "The collaboration of parties to form a government is called in Germany …",
            "ar": "تسمى تعاون الأحزاب لتشكيل حكومة في ألمانيا …",
            "tr": "Partilerin bir hükümet kurmak için iş birliği yapmasına Almanya'da … denir.",
            "uk": "Співпраця партій для формування уряду в Німеччині називається …",
            "ru": "Сотрудничество партий для формирования правительства в Германии называется …",
            "pl": "W Niemczech współpraca partii w celu utworzenia rządu nazywa się …",
            "fa": "همکاری احزاب برای تشکیل یک دولت در آلمان … نامیده می‌شود."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Einheit.",
                    "en": "unity.",
                    "ar": "الوحدة.",
                    "tr": "birlik.",
                    "uk": "єдність.",
                    "ru": "единство.",
                    "pl": "jedność.",
                    "fa": "وحدت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Koalition.",
                    "en": "coalition.",
                    "ar": "الائتلاف.",
                    "tr": "koalisyon.",
                    "uk": "коаліція.",
                    "ru": "коалиция.",
                    "pl": "koalicja.",
                    "fa": "ائتلاف."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Ministerium.",
                    "en": "ministry.",
                    "ar": "وزارة.",
                    "tr": "bakanlık.",
                    "uk": "міністерство.",
                    "ru": "министерство.",
                    "pl": "ministerstwo.",
                    "fa": "وزارت."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Fraktion.",
                    "en": "faction.",
                    "ar": "فصيل.",
                    "tr": "grup.",
                    "uk": "фракція.",
                    "ru": "фракция.",
                    "pl": "frakcja.",
                    "fa": "گروه."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
    {
        "id": "32",
        "question": {
            "de": "Was ist keine staatliche Gewalt in Deutschland?",
            "en": "What is not a state power in Germany?",
            "ar": "ما هي القوة التي ليست قوة حكومية في ألمانيا؟",
            "tr": "Almanya'da hangi güç devlet gücü değildir?",
            "uk": "Що не є державною владою в Німеччині?",
            "ru": "Что не является государственной властью в Германии?",
            "pl": "Co nie jest władzą państwową w Niemczech?",
            "fa": "کدام یک از آن‌ها، قدرت دولتی در آلمان نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Gesetzgebung.",
                    "en": "legislation.",
                    "ar": "التشريع.",
                    "tr": "yasama.",
                    "uk": "законодавство.",
                    "ru": "законодательство.",
                    "pl": "ustawodawstwo.",
                    "fa": "قانون‌گذاری."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Regierung.",
                    "en": "government.",
                    "ar": "الحكومة.",
                    "tr": "hükümet.",
                    "uk": "уряд.",
                    "ru": "правительство.",
                    "pl": "rząd.",
                    "fa": "دولت."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Presse.",
                    "en": "press.",
                    "ar": "الصحافة.",
                    "tr": "basın.",
                    "uk": "преса.",
                    "ru": "пресса.",
                    "pl": "prasa.",
                    "fa": "رسانه."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Rechtsprechung.",
                    "en": "jurisdiction.",
                    "ar": "السلطة القضائية.",
                    "tr": "yargı.",
                    "uk": "судочинство.",
                    "ru": "юрисдикция.",
                    "pl": "sąd.",
                    "fa": "قضاوت."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "politics"
    }
    ,
    {
        "id": "33",
        "question": {
            "de": "Welche Aussage ist richtig? In Deutschland …",
            "en": "Which statement is correct? In Germany …",
            "ar": "أي من العبارات التالية صحيحة؟ في ألمانيا …",
            "tr": "Hangi ifade doğrudur? Almanya'da …",
            "uk": "Яке з висловлювань правильне? У Німеччині …",
            "ru": "Какое утверждение верно? В Германии …",
            "pl": "Które stwierdzenie jest prawdziwe? W Niemczech …",
            "fa": "کدام یک از این عبارات درست است؟ در آلمان …"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "sind Staat und Religionsgemeinschaften voneinander getrennt.",
                    "en": "the state and religious communities are separated from each other.",
                    "ar": "الدولة والجماعات الدينية مفصولة عن بعضها البعض.",
                    "tr": "devlet ve dini topluluklar birbirinden ayrıdır.",
                    "uk": "держава і релігійні громади відокремлені один від одного.",
                    "ru": "государство и религиозные общины отделены друг от друга.",
                    "pl": "państwo i wspólnoty religijne są od siebie oddzielone.",
                    "fa": "دولت و جامعه‌های دینی از هم جدا هستند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "bilden die Religionsgemeinschaften den Staat.",
                    "en": "the religious communities form the state.",
                    "ar": "تكوّن الجماعات الدينية الدولة.",
                    "tr": "dini topluluklar devleti oluşturur.",
                    "uk": "релігійні громади формують державу.",
                    "ru": "религиозные общины формируют государство.",
                    "pl": "wspólnoty religijne tworzą państwo.",
                    "fa": "جامعه‌های دینی دولت را تشکیل می‌دهند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "ist der Staat abhängig von den Religionsgemeinschaften.",
                    "en": "the state is dependent on the religious communities.",
                    "ar": "تكون الدولة معتمدة على الجماعات الدينية.",
                    "tr": "devlet dini topluluklara bağlıdır.",
                    "uk": "держава залежить від релігійних громад.",
                    "ru": "государство зависит от религиозных общин.",
                    "pl": "państwo jest zależne od wspólnot religijnych.",
                    "fa": "دولت به جامعه‌های دینی وابسته است."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "bilden Staat und Religionsgemeinschaften eine Einheit.",
                    "en": "the state and religious communities form a unit.",
                    "ar": "تشكل الدولة والجماعات الدينية وحدة.",
                    "tr": "devlet ve dini topluluklar bir bütün oluşturur.",
                    "uk": "держава і релігійні громади формують єдність.",
                    "ru": "государство и религиозные общины образуют единое целое.",
                    "pl": "państwo i wspólnoty religijne tworzą jedność.",
                    "fa": "دولت و جامعه‌های دینی یک واحد را تشکیل می‌دهند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "politics"
    }
    ,
    {
        "id": "34",
        "question": {
            "de": "Was ist Deutschland nicht?",
            "en": "What is Germany not?",
            "ar": "ما هو الشيء الذي ليست ألمانيا عليه؟",
            "tr": "Almanya ne değildir?",
            "uk": "Що не є Німеччиною?",
            "ru": "Чем Германия не является?",
            "pl": "Czym Niemcy nie są?",
            "fa": "آلمان چه چیزی نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "eine Demokratie.",
                    "en": "a democracy.",
                    "ar": "ديمقراطية.",
                    "tr": "bir demokrasi.",
                    "uk": "демократія.",
                    "ru": "демократия.",
                    "pl": "demokracja.",
                    "fa": "دموکراسی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "ein Rechtsstaat.",
                    "en": "a rule of law.",
                    "ar": "دولة قانون.",
                    "tr": "bir hukuk devleti.",
                    "uk": "правова держава.",
                    "ru": "правовое государство.",
                    "pl": "państwo prawa.",
                    "fa": "دولت قانون."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "eine Monarchie.",
                    "en": "a monarchy.",
                    "ar": "ملكية.",
                    "tr": "bir monarşi.",
                    "uk": "монархія.",
                    "ru": "монархия.",
                    "pl": "monarchia.",
                    "fa": "سلطنت."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "ein Sozialstaat.",
                    "en": "a social state.",
                    "ar": "دولة اجتماعية.",
                    "tr": "bir sosyal devlet.",
                    "uk": "соціальна держава.",
                    "ru": "социальное государство.",
                    "pl": "państwo socjalne.",
                    "fa": "دولت اجتماعی."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "politics"
    }
    ,
    {
        "id": "35",
        "question": {
            "de": "Womit finanziert der deutsche Staat die Sozialversicherung?",
            "en": "How does the German state finance social insurance?",
            "ar": "كيف تمول الدولة الألمانية التأمين الاجتماعي؟",
            "tr": "Alman devleti sosyal sigortayı nasıl finanse ediyor?",
            "uk": "Як фінансує німецька держава соціальне страхування?",
            "ru": "Как немецкое государство финансирует социальное страхование?",
            "pl": "Jak niemieckie państwo finansuje ubezpieczenie społeczne?",
            "fa": "دولت آلمان چگونه به تأمین اجتماعی مالی می‌پردازد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Kirchensteuern.",
                    "en": "Church taxes.",
                    "ar": "ضرائب الكنيسة.",
                    "tr": "Kilise vergileri.",
                    "uk": "Церковні податки.",
                    "ru": "Церковные налоги.",
                    "pl": "Podatki kościelne.",
                    "fa": "مالیات کلیسا."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Sozialabgaben.",
                    "en": "Social contributions.",
                    "ar": "مساهمات اجتماعية.",
                    "tr": "Sosyal katkılar.",
                    "uk": "Соціальні внески.",
                    "ru": "Социальные взносы.",
                    "pl": "Składki na ubezpieczenie społeczne.",
                    "fa": "مشارکت‌های اجتماعی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Spendengeldern.",
                    "en": "Donations.",
                    "ar": "تبرعات.",
                    "tr": "Bağışlar.",
                    "uk": "Пожертвування.",
                    "ru": "Пожертвования.",
                    "pl": "Darowizny.",
                    "fa": "اهدائات."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Vereinsbeiträgen.",
                    "en": "Association fees.",
                    "ar": "رسوم الأندية.",
                    "tr": "Dernek aidatları.",
                    "uk": "Внески асоціацій.",
                    "ru": "Взносы ассоциаций.",
                    "pl": "Składki członkowskie.",
                    "fa": "حق عضویت انجمن‌ها."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "society"
    }
    ,
    {
        "id": "36",
        "question": {
            "de": "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
            "en": "Which measure creates social security in Germany?",
            "ar": "ما هي الإجراءات التي تخلق الأمان الاجتماعي في ألمانيا؟",
            "tr": "Almanya'da sosyal güvenliği sağlayan önlem nedir?",
            "uk": "Який захід створює соціальну безпеку в Німеччині?",
            "ru": "Какая мера создает социальную безопасность в Германии?",
            "pl": "Jaka miara zapewnia bezpieczeństwo społeczne w Niemczech?",
            "fa": "کدام اقدام در آلمان امنیت اجتماعی را ایجاد می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Krankenversicherung.",
                    "en": "health insurance.",
                    "ar": "التأمين الصحي.",
                    "tr": "sağlık sigortası.",
                    "uk": "медичне страхування.",
                    "ru": "медицинская страховка.",
                    "pl": "ubezpieczenie zdrowotne.",
                    "fa": "بیمه سلامت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Autoversicherung.",
                    "en": "car insurance.",
                    "ar": "تأمين السيارات.",
                    "tr": "araç sigortası.",
                    "uk": "страхування автомобілів.",
                    "ru": "страхование автомобиля.",
                    "pl": "ubezpieczenie samochodowe.",
                    "fa": "بیمه خودرو."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Gebäudeversicherung.",
                    "en": "property insurance.",
                    "ar": "تأمين الممتلكات.",
                    "tr": "gayrimenkul sigortası.",
                    "uk": "страхування нерухомості.",
                    "ru": "страхование недвижимости.",
                    "pl": "ubezpieczenie nieruchomości.",
                    "fa": "بیمه املاک."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Haftpflichtversicherung.",
                    "en": "liability insurance.",
                    "ar": "تأمين المسؤولية.",
                    "tr": "sorumluluk sigortası.",
                    "uk": "страхування відповідальності.",
                    "ru": "страхование ответственности.",
                    "pl": "ubezpieczenie odpowiedzialności.",
                    "fa": "بیمه مسئولیت."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "society"
    }
    ,
    {
        "id": "37",
        "question": {
            "de": "Wie werden die Regierungschefs / Regierungschefinnen der meisten Bundesländer in Deutschland genannt?",
            "en": "What are the heads of government of most German federal states called?",
            "ar": "ما اسم رؤساء حكومات معظم الولايات الألمانية؟",
            "tr": "Almanya'daki çoğu eyaletin hükümet başkanlarına ne denir?",
            "uk": "Як називаються голови урядів більшості федеральних земель Німеччини?",
            "ru": "Как называются главы правительств большинства федеральных земель Германии?",
            "pl": "Jak nazywani są szefowie rządów większości landów niemieckich?",
            "fa": "سران دولت بیشتر ایالات آلمان چه نامیده می‌شوند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Erster Minister / Erste Ministerin.",
                    "en": "First Minister.",
                    "ar": "الوزير الأول / الوزيرة الأولى.",
                    "tr": "Birinci Bakan.",
                    "uk": "Перший міністр.",
                    "ru": "Первый министр.",
                    "pl": "Pierwszy minister.",
                    "fa": "وزیر اول."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Premierminister / Premierministerin.",
                    "en": "Prime Minister.",
                    "ar": "رئيس الوزراء.",
                    "tr": "Başbakan.",
                    "uk": "Прем'єр-міністр.",
                    "ru": "Премьер-министр.",
                    "pl": "Premier.",
                    "fa": "نخست‌وزیر."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Senator / Senatorin.",
                    "en": "Senator.",
                    "ar": "سيناتور.",
                    "tr": "Senatör.",
                    "uk": "Сенатор.",
                    "ru": "Сенатор.",
                    "pl": "Senator.",
                    "fa": "سناتور."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Ministerpräsident / Ministerpräsidentin.",
                    "en": "Minister President.",
                    "ar": "رئيس الوزراء.",
                    "tr": "Bakan Başkanı.",
                    "uk": "Міністр-президент.",
                    "ru": "Министр-президент.",
                    "pl": "Minister-prezydent.",
                    "fa": "رئیس‌الوزرا."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "government"
    }
    ,
    {
        "id": "38",
        "question": {
            "de": "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
            "en": "The Federal Republic of Germany is a democratic and social ...",
            "ar": "جمهورية ألمانيا الاتحادية هي دولة ديمقراطية واجتماعية ...",
            "tr": "Almanya Federal Cumhuriyeti demokratik ve sosyal bir ...",
            "uk": "Федеративна Республіка Німеччина — це демократична і соціальна ...",
            "ru": "Федеративная Республика Германия является демократическим и социальным ...",
            "pl": "Republika Federalna Niemiec jest demokratycznym i socjalnym ...",
            "fa": "جمهوری فدرال آلمان یک دولت دموکراتیک و اجتماعی است ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Staatenverbund.",
                    "en": "association of states.",
                    "ar": "اتحاد دول.",
                    "tr": "devletler birliği.",
                    "uk": "асоціація держав.",
                    "ru": "ассоциация государств.",
                    "pl": "związek państw.",
                    "fa": "اتحادیه‌ای از دولت‌ها."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bundesstaat.",
                    "en": "federal state.",
                    "ar": "دولة اتحادية.",
                    "tr": "federal bir devlet.",
                    "uk": "федеративна держава.",
                    "ru": "федеративное государство.",
                    "pl": "państwo federalne.",
                    "fa": "یک دولت فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Staatenbund.",
                    "en": "confederation.",
                    "ar": "اتحاد كونفدرالي.",
                    "tr": "konfederasyon.",
                    "uk": "конфедерація.",
                    "ru": "конфедерация.",
                    "pl": "konfederacja.",
                    "fa": "یک کنفدراسیون."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Zentralstaat.",
                    "en": "central state.",
                    "ar": "دولة مركزية.",
                    "tr": "merkezi bir devlet.",
                    "uk": "централізована держава.",
                    "ru": "централизованное государство.",
                    "pl": "państwo centralne.",
                    "fa": "یک دولت متمرکز."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "39",
        "question": {
            "de": "Was hat jedes deutsche Bundesland?",
            "en": "What does each German federal state have?",
            "ar": "ما الذي تمتلكه كل ولاية ألمانية؟",
            "tr": "Her Alman eyaletinin neyi vardır?",
            "uk": "Що має кожна німецька федеральна земля?",
            "ru": "Что есть у каждой немецкой федеральной земли?",
            "pl": "Co posiada każdy niemiecki kraj związkowy?",
            "fa": "هر ایالت آلمان چه چیزی دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "einen eigenen Außenminister / eine eigene Außenministerin.",
                    "en": "its own foreign minister.",
                    "ar": "وزير خارجية خاص.",
                    "tr": "kendi dışişleri bakanı.",
                    "uk": "свого міністра закордонних справ.",
                    "ru": "своего министра иностранных дел.",
                    "pl": "własnego ministra spraw zagranicznych.",
                    "fa": "وزیر خارجه مخصوص."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "eine eigene Währung.",
                    "en": "its own currency.",
                    "ar": "عملة خاصة.",
                    "tr": "kendi para birimi.",
                    "uk": "власну валюту.",
                    "ru": "собственную валюту.",
                    "pl": "własną walutę.",
                    "fa": "پول ملی مخصوص."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "eine eigene Armee.",
                    "en": "its own army.",
                    "ar": "جيش خاص.",
                    "tr": "kendi ordusu.",
                    "uk": "власну армію.",
                    "ru": "собственную армию.",
                    "pl": "własną armię.",
                    "fa": "ارتش مخصوص."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "eine eigene Regierung.",
                    "en": "its own government.",
                    "ar": "حكومة خاصة.",
                    "tr": "kendi hükümeti.",
                    "uk": "власний уряд.",
                    "ru": "собственное правительство.",
                    "pl": "własny rząd.",
                    "fa": "دولت مخصوص."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "government"
    }
    ,
    {
        "id": "40",
        "question": {
            "de": "Mit welchen Worten beginnt die deutsche Nationalhymne?",
            "en": "With which words does the German national anthem begin?",
            "ar": "بأي كلمات تبدأ النشيد الوطني الألماني؟",
            "tr": "Almanya milli marşı hangi sözlerle başlar?",
            "uk": "З яких слів починається німецький національний гімн?",
            "ru": "С каких слов начинается немецкий национальный гимн?",
            "pl": "Jakimi słowami zaczyna się niemiecki hymn narodowy?",
            "fa": "سرود ملی آلمان با چه کلماتی آغاز می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Völker, hört die Signale …",
                    "en": "Nations, hear the signals ...",
                    "ar": "يا شعوب، اسمعوا الإشارات...",
                    "tr": "Milletler, sinyalleri duyun ...",
                    "uk": "Народи, чуйте сигнали ...",
                    "ru": "Народы, слушайте сигналы ...",
                    "pl": "Narody, usłyszcie sygnały ...",
                    "fa": "ملت‌ها، به علائم گوش کنید ..."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Einigkeit und Recht und Freiheit …",
                    "en": "Unity and justice and freedom ...",
                    "ar": "وحدة وعدالة وحرية ...",
                    "tr": "Birlik, adalet ve özgürlük ...",
                    "uk": "Єдність, право і свобода ...",
                    "ru": "Единство, право и свобода ...",
                    "pl": "Jedność, prawo i wolność ...",
                    "fa": "وحدت و عدالت و آزادی ..."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Freude schöner Götterfunken …",
                    "en": "Joy, beautiful spark of divinity ...",
                    "ar": "يا فرحة، شرارة الجمال الإلهي ...",
                    "tr": "Sevinç, tanrısal güzelliğin kıvılcımı ...",
                    "uk": "Радість, божественна іскра краси ...",
                    "ru": "Радость, красивая искра божества ...",
                    "pl": "Radość, piękna iskro boska ...",
                    "fa": "شادی، جرقه زیبای الهی ..."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Deutschland einig Vaterland …",
                    "en": "Germany, united fatherland ...",
                    "ar": "ألمانيا، الوطن الموحد ...",
                    "tr": "Almanya, birleşik vatan ...",
                    "uk": "Німеччина, єдина батьківщина ...",
                    "ru": "Германия, единое отечество ...",
                    "pl": "Niemcy, zjednoczona ojczyzna ...",
                    "fa": "آلمان، وطن متحد ..."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "culture"
    }
    ,
    {
        "id": "41",
        "question": {
            "de": "Warum gibt es in einer Demokratie mehr als eine Partei?",
            "en": "Why are there more than one party in a democracy?",
            "ar": "لماذا يوجد في الديمقراطية أكثر من حزب؟",
            "tr": "Demokraside neden birden fazla parti vardır?",
            "uk": "Чому в демократії є більше однієї партії?",
            "ru": "Почему в демократии больше одной партии?",
            "pl": "Dlaczego w demokracji jest więcej niż jedna partia?",
            "fa": "چرا در دموکراسی بیش از یک حزب وجود دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden.",
                    "en": "because it represents the diverse opinions of citizens.",
                    "ar": "لأن ذلك يمثل الآراء المختلفة للمواطنين.",
                    "tr": "çünkü bu, vatandaşların farklı görüşlerini temsil eder.",
                    "uk": "тому що це представляє різноманітні думки громадян.",
                    "ru": "потому что это представляет разные мнения граждан.",
                    "pl": "ponieważ to reprezentuje różnorodne opinie obywateli.",
                    "fa": "زیرا نظرات مختلف شهروندان را نمایندگی می‌کند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "damit Bestechung in der Politik begrenzt wird.",
                    "en": "to limit bribery in politics.",
                    "ar": "لكي يتم الحد من الرشوة في السياسة.",
                    "tr": "siyasette rüşveti sınırlamak için.",
                    "uk": "щоб обмежити хабарництво в політиці.",
                    "ru": "чтобы ограничить взяточничество в политике.",
                    "pl": "aby ograniczyć korupcję w polityce.",
                    "fa": "برای محدود کردن رشوه‌خواری در سیاست."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "um politische Demonstrationen zu verhindern.",
                    "en": "to prevent political demonstrations.",
                    "ar": "لمنع المظاهرات السياسية.",
                    "tr": "siyasi gösterileri önlemek için.",
                    "uk": "щоб запобігти політичним демонстраціям.",
                    "ru": "чтобы предотвратить политические демонстрации.",
                    "pl": "aby zapobiec demonstracjom politycznym.",
                    "fa": "برای جلوگیری از تظاهرات سیاسی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "um wirtschaftlichen Wettbewerb anzuregen.",
                    "en": "to stimulate economic competition.",
                    "ar": "لتحفيز المنافسة الاقتصادية.",
                    "tr": "ekonomik rekabeti teşvik etmek için.",
                    "uk": "щоб стимулювати економічну конкуренцію.",
                    "ru": "чтобы стимулировать экономическую конкуренцию.",
                    "pl": "aby pobudzać konkurencję gospodarczą.",
                    "fa": "برای تحریک رقابت اقتصادی."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "government"
    }
    ,
    {
        "id": "42",
        "question": {
            "de": "Wer beschließt in Deutschland ein neues Gesetz?",
            "en": "Who enacts a new law in Germany?",
            "ar": "من يصدر قانونًا جديدًا في ألمانيا؟",
            "tr": "Almanya'da yeni bir yasayı kim çıkarır?",
            "uk": "Хто ухвалює новий закон в Німеччині?",
            "ru": "Кто принимает новый закон в Германии?",
            "pl": "Kto uchwala nowe prawo w Niemczech?",
            "fa": "چه کسی در آلمان قانون جدیدی را تصویب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Regierung.",
                    "en": "the government.",
                    "ar": "الحكومة.",
                    "tr": "hükümet.",
                    "uk": "уряд.",
                    "ru": "правительство.",
                    "pl": "rząd.",
                    "fa": "دولت."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "das Parlament.",
                    "en": "the parliament.",
                    "ar": "البرلمان.",
                    "tr": "parlamento.",
                    "uk": "парламент.",
                    "ru": "парламент.",
                    "pl": "parlament.",
                    "fa": "پارلمان."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Gerichte.",
                    "en": "the courts.",
                    "ar": "المحاكم.",
                    "tr": "mahkemeler.",
                    "uk": "суди.",
                    "ru": "суды.",
                    "pl": "sądy.",
                    "fa": "دادگاه‌ها."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Polizei.",
                    "en": "the police.",
                    "ar": "الشرطة.",
                    "tr": "polis.",
                    "uk": "поліція.",
                    "ru": "полиция.",
                    "pl": "policja.",
                    "fa": "پلیس."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "43",
        "question": {
            "de": "Wann kann in Deutschland eine Partei verboten werden?",
            "en": "When can a party be banned in Germany?",
            "ar": "متى يمكن حظر حزب في ألمانيا؟",
            "tr": "Almanya'da bir parti ne zaman yasaklanabilir?",
            "uk": "Коли в Німеччині можна заборонити партію?",
            "ru": "Когда в Германии может быть запрещена партия?",
            "pl": "Kiedy partia może być zakazana w Niemczech?",
            "fa": "چه زمانی می‌توان یک حزب را در آلمان ممنوع کرد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "wenn ihr Wahlkampf zu teuer ist.",
                    "en": "if their election campaign is too expensive.",
                    "ar": "إذا كانت حملتها الانتخابية مكلفة للغاية.",
                    "tr": "seçim kampanyası çok pahalıysa.",
                    "uk": "якщо її виборча кампанія занадто дорога.",
                    "ru": "если их предвыборная кампания слишком дорогая.",
                    "pl": "jeśli ich kampania wyborcza jest zbyt droga.",
                    "fa": "اگر کارزار انتخاباتی آنها بسیار گران باشد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "wenn sie gegen die Verfassung kämpft.",
                    "en": "if it fights against the constitution.",
                    "ar": "إذا كانت تحارب ضد الدستور.",
                    "tr": "anayasaya karşı mücadele ediyorsa.",
                    "uk": "якщо вона бореться проти конституції.",
                    "ru": "если она борется против конституции.",
                    "pl": "jeśli walczy przeciwko konstytucji.",
                    "fa": "اگر علیه قانون اساسی مبارزه کند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "wenn sie Kritik am Staatsoberhaupt äußert.",
                    "en": "if it criticizes the head of state.",
                    "ar": "إذا كانت تنتقد رئيس الدولة.",
                    "tr": "devlet başkanını eleştiriyorsa.",
                    "uk": "якщо вона критикує главу держави.",
                    "ru": "если она критикует главу государства.",
                    "pl": "jeśli krytykuje głowę państwa.",
                    "fa": "اگر از رئیس دولت انتقاد کند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "wenn ihr Programm eine neue Richtung vorschlägt.",
                    "en": "if its program suggests a new direction.",
                    "ar": "إذا اقترح برنامجها توجهاً جديداً.",
                    "tr": "programı yeni bir yön öneriyorsa.",
                    "uk": "якщо її програма пропонує новий напрям.",
                    "ru": "если её программа предлагает новое направление.",
                    "pl": "jeśli jej program proponuje nowy kierunek.",
                    "fa": "اگر برنامه آن جهت جدیدی را پیشنهاد دهد."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "44",
        "question": {
            "de": "Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen?",
            "en": "Whom can a citizen not directly elect in Germany?",
            "ar": "من الذي لا يمكن للمواطن انتخابه مباشرة في ألمانيا؟",
            "tr": "Almanya'da bir vatandaş kime doğrudan oy veremez?",
            "uk": "Кого громадянин не може обирати напряму в Німеччині?",
            "ru": "Кого гражданин не может выбирать напрямую в Германии?",
            "pl": "Kogo obywatel nie może bezpośrednio wybrać w Niemczech?",
            "fa": "شهروند در آلمان نمی‌تواند چه کسی را به‌طور مستقیم انتخاب کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Abgeordnete des EU-Parlaments.",
                    "en": "Members of the EU Parliament.",
                    "ar": "أعضاء البرلمان الأوروبي.",
                    "tr": "AB Parlamentosu üyeleri.",
                    "uk": "Депутатів Європарламенту.",
                    "ru": "Депутатов Европейского парламента.",
                    "pl": "Posłów do Parlamentu Europejskiego.",
                    "fa": "نمایندگان پارلمان اتحادیه اروپا."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "den Bundespräsidenten / die Bundespräsidentin.",
                    "en": "the Federal President.",
                    "ar": "رئيس الدولة الاتحادية.",
                    "tr": "Federal Başkan.",
                    "uk": "Федерального президента.",
                    "ru": "Федерального президента.",
                    "pl": "Prezydenta Federalnego.",
                    "fa": "رئیس‌جمهور فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Landtagsabgeordnete.",
                    "en": "State parliament members.",
                    "ar": "أعضاء البرلمان الإقليمي.",
                    "tr": "Eyalet parlamento üyeleri.",
                    "uk": "Депутатів земельних парламентів.",
                    "ru": "Депутатов земельных парламентов.",
                    "pl": "Posłów do parlamentu krajowego.",
                    "fa": "نمایندگان پارلمان ایالتی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bundestagsabgeordnete.",
                    "en": "Members of the Bundestag.",
                    "ar": "أعضاء البوندستاغ.",
                    "tr": "Bundestag üyeleri.",
                    "uk": "Депутатів Бундестагу.",
                    "ru": "Депутатов Бундестага.",
                    "pl": "Posłów do Bundestagu.",
                    "fa": "نمایندگان بوندستاگ."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "45",
        "question": {
            "de": "Zu welcher Versicherung gehört die Pflegeversicherung?",
            "en": "To which type of insurance does long-term care insurance belong?",
            "ar": "إلى أي نوع من التأمين تنتمي التأمين على الرعاية الطويلة الأمد؟",
            "tr": "Bakım sigortası hangi sigorta türüne aittir?",
            "uk": "До якого виду страхування належить страхування на догляд?",
            "ru": "К какому виду страхования относится страхование по уходу?",
            "pl": "Do jakiego rodzaju ubezpieczenia należy ubezpieczenie pielęgnacyjne?",
            "fa": "بیمه مراقبت طولانی مدت متعلق به کدام نوع بیمه است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Sozialversicherung.",
                    "en": "Social insurance.",
                    "ar": "التأمين الاجتماعي.",
                    "tr": "Sosyal sigorta.",
                    "uk": "Соціальне страхування.",
                    "ru": "Социальное страхование.",
                    "pl": "Ubezpieczenie społeczne.",
                    "fa": "بیمه اجتماعی."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Unfallversicherung.",
                    "en": "Accident insurance.",
                    "ar": "التأمين ضد الحوادث.",
                    "tr": "Kaza sigortası.",
                    "uk": "Страхування від нещасних випадків.",
                    "ru": "Страхование от несчастных случаев.",
                    "pl": "Ubezpieczenie od wypadków.",
                    "fa": "بیمه حوادث."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Hausratversicherung.",
                    "en": "Household insurance.",
                    "ar": "التأمين على الممتلكات المنزلية.",
                    "tr": "Ev eşyası sigortası.",
                    "uk": "Страхування домашнього майна.",
                    "ru": "Страхование домашнего имущества.",
                    "pl": "Ubezpieczenie mienia domowego.",
                    "fa": "بیمه اموال خانگی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Haftpflicht- und Feuerversicherung.",
                    "en": "Liability and fire insurance.",
                    "ar": "التأمين ضد الحريق والمسؤولية.",
                    "tr": "Sorumluluk ve yangın sigortası.",
                    "uk": "Страхування відповідальності та від пожежі.",
                    "ru": "Страхование ответственности и от пожара.",
                    "pl": "Ubezpieczenie od odpowiedzialności cywilnej i od ognia.",
                    "fa": "بیمه مسئولیت و آتش‌سوزی."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "insurance"
    }
    ,
    {
        "id": "46",
        "question": {
            "de": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
            "en": "The German state has many responsibilities. Which of the following is one of them?",
            "ar": "للدولة الألمانية العديد من المهام. ما هي إحدى هذه المهام؟",
            "tr": "Alman devletinin birçok görevi vardır. Bunlardan biri hangisidir?",
            "uk": "Німецька держава має багато обов'язків. Який з них?",
            "ru": "У немецкого государства много задач. Какая из них?",
            "pl": "Państwo niemieckie ma wiele zadań. Które z nich należy do tych zadań?",
            "fa": "دولت آلمان وظایف زیادی دارد. یکی از این وظایف کدام است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Er baut Straßen und Schulen.",
                    "en": "It builds roads and schools.",
                    "ar": "تبني طرقاً ومدارس.",
                    "tr": "Yollar ve okullar inşa eder.",
                    "uk": "Воно будує дороги та школи.",
                    "ru": "Оно строит дороги и школы.",
                    "pl": "Buduje drogi i szkoły.",
                    "fa": "جاده‌ها و مدارس می‌سازد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Er verkauft Lebensmittel und Kleidung.",
                    "en": "It sells food and clothing.",
                    "ar": "تبيع المواد الغذائية والملابس.",
                    "tr": "Gıda ve giysi satar.",
                    "uk": "Воно продає продукти харчування та одяг.",
                    "ru": "Оно продает продукты и одежду.",
                    "pl": "Sprzedaje żywność i ubrania.",
                    "fa": "غذا و لباس می‌فروشد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Er versorgt alle Einwohner und Einwohnerinnen kostenlos mit Zeitungen.",
                    "en": "It provides free newspapers to all residents.",
                    "ar": "تقدم الصحف مجاناً لجميع السكان.",
                    "tr": "Tüm sakinlere ücretsiz gazete sağlar.",
                    "uk": "Воно забезпечує всіх жителів безкоштовними газетами.",
                    "ru": "Оно предоставляет всем жителям бесплатные газеты.",
                    "pl": "Zapewnia wszystkim mieszkańcom darmowe gazety.",
                    "fa": "روزنامه‌های رایگان به همه ساکنان ارائه می‌کند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Er produziert Autos und Busse.",
                    "en": "It produces cars and buses.",
                    "ar": "تنتج السيارات والحافلات.",
                    "tr": "Araba ve otobüs üretir.",
                    "uk": "Воно виробляє автомобілі та автобуси.",
                    "ru": "Оно производит автомобили и автобусы.",
                    "pl": "Produkuje samochody i autobusy.",
                    "fa": "اتومبیل و اتوبوس تولید می‌کند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "government"
    }
    ,
    {
        "id": "47",
        "question": {
            "de": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
            "en": "The German state has many responsibilities. Which of the following is not one of them?",
            "ar": "للدولة الألمانية العديد من المهام. ما هي ليست إحدى هذه المهام؟",
            "tr": "Alman devletinin birçok görevi vardır. Bunlardan hangisi değildir?",
            "uk": "Німецька держава має багато обов'язків. Який з них не входить до них?",
            "ru": "У немецкого государства много задач. Какая из них не относится к ним?",
            "pl": "Państwo niemieckie ma wiele zadań. Które z nich nie należy do tych zadań?",
            "fa": "دولت آلمان وظایف زیادی دارد. کدام یک از اینها جزو وظایف آن نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
                    "en": "It pays for holidays for all citizens.",
                    "ar": "تدفع تكاليف الرحلات لجميع المواطنين.",
                    "tr": "Tüm vatandaşlar için tatil masraflarını karşılar.",
                    "uk": "Воно оплачує відпустки для всіх громадян.",
                    "ru": "Оно оплачивает отпуска для всех граждан.",
                    "pl": "Opłaca wakacje dla wszystkich obywateli.",
                    "fa": "هزینه تعطیلات همه شهروندان را پرداخت می‌کند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Er zahlt Kindergeld.",
                    "en": "It pays child benefits.",
                    "ar": "تدفع إعانات الأطفال.",
                    "tr": "Çocuk yardımı öder.",
                    "uk": "Воно виплачує дитячі допомоги.",
                    "ru": "Оно выплачивает детские пособия.",
                    "pl": "Płaci zasiłki na dzieci.",
                    "fa": "مزایای کودک را پرداخت می‌کند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Er unterstützt Museen.",
                    "en": "It supports museums.",
                    "ar": "تدعم المتاحف.",
                    "tr": "Müzeleri destekler.",
                    "uk": "Воно підтримує музеї.",
                    "ru": "Оно поддерживает музеи.",
                    "pl": "Wspiera muzea.",
                    "fa": "از موزه‌ها حمایت می‌کند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Er fördert Sportler und Sportlerinnen.",
                    "en": "It promotes athletes.",
                    "ar": "تعزز الرياضيين والرياضيات.",
                    "tr": "Sporcuları teşvik eder.",
                    "uk": "Воно підтримує спортсменів.",
                    "ru": "Оно поддерживает спортсменов.",
                    "pl": "Wspiera sportowców.",
                    "fa": "از ورزشکاران حمایت می‌کند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "government"
    }
    ,
    {
        "id": "48",
        "question": {
            "de": "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
            "en": "Which body is not one of Germany's constitutional bodies?",
            "ar": "أي من الأجهزة التالية ليست من الأجهزة الدستورية لألمانيا؟",
            "tr": "Hangi organ Almanya'nın anayasal organlarından biri değildir?",
            "uk": "Який з органів не є конституційним органом Німеччини?",
            "ru": "Какой орган не является конституционным органом Германии?",
            "pl": "Który organ nie jest organem konstytucyjnym Niemiec?",
            "fa": "کدام نهاد از نهادهای قانون اساسی آلمان نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der Bundesrat",
                    "en": "the Federal Council",
                    "ar": "المجلس الاتحادي",
                    "tr": "Federal Konsey",
                    "uk": "Федеральна рада",
                    "ru": "Федеральный совет",
                    "pl": "Rada Federalna",
                    "fa": "شورای فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Bundespräsident / die Bundespräsidentin",
                    "en": "the Federal President",
                    "ar": "رئيس الدولة الاتحادية",
                    "tr": "Federal Başkan",
                    "uk": "Федеральний президент",
                    "ru": "Федеральный президент",
                    "pl": "Prezydent Federalny",
                    "fa": "رئیس‌جمهور فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Bürgerversammlung",
                    "en": "the citizens' assembly",
                    "ar": "جمعية المواطنين",
                    "tr": "Vatandaşlar meclisi",
                    "uk": "громадські збори",
                    "ru": "собрание граждан",
                    "pl": "zgromadzenie obywatelskie",
                    "fa": "مجمع شهروندان"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Regierung",
                    "en": "the government",
                    "ar": "الحكومة",
                    "tr": "hükümet",
                    "uk": "уряд",
                    "ru": "правительство",
                    "pl": "rząd",
                    "fa": "دولت"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "government"
    }
    ,
    {
        "id": "49",
        "question": {
            "de": "Wer bestimmt in Deutschland die Schulpolitik?",
            "en": "Who determines educational policy in Germany?",
            "ar": "من يحدد سياسة التعليم في ألمانيا؟",
            "tr": "Almanya'da eğitim politikasını kim belirler?",
            "uk": "Хто визначає освітню політику в Німеччині?",
            "ru": "Кто определяет образовательную политику в Германии?",
            "pl": "Kto decyduje o polityce edukacyjnej w Niemczech?",
            "fa": "چه کسی سیاست آموزشی را در آلمان تعیین می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Lehrer und Lehrerinnen",
                    "en": "the teachers",
                    "ar": "المعلمون والمعلمات",
                    "tr": "öğretmenler",
                    "uk": "вчителі",
                    "ru": "учителя",
                    "pl": "nauczyciele",
                    "fa": "معلمان"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Bundesländer",
                    "en": "the federal states",
                    "ar": "الولايات الفيدرالية",
                    "tr": "federal eyaletler",
                    "uk": "федеральні землі",
                    "ru": "федеральные земли",
                    "pl": "landy",
                    "fa": "ایالت‌های فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das Familienministerium",
                    "en": "the Ministry of Family Affairs",
                    "ar": "وزارة شؤون الأسرة",
                    "tr": "Aile İşleri Bakanlığı",
                    "uk": "Міністерство сімейних справ",
                    "ru": "Министерство по делам семьи",
                    "pl": "Ministerstwo ds. Rodziny",
                    "fa": "وزارت امور خانواده"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Universitäten",
                    "en": "the universities",
                    "ar": "الجامعات",
                    "tr": "üniversiteler",
                    "uk": "університети",
                    "ru": "университеты",
                    "pl": "uniwersytety",
                    "fa": "دانشگاه‌ها"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "education"
    }
    ,
    {
        "id": "50",
        "question": {
            "de": "Die Wirtschaftsform in Deutschland nennt man …",
            "en": "The economic system in Germany is called...",
            "ar": "النظام الاقتصادي في ألمانيا يسمى...",
            "tr": "Almanya'daki ekonomik sistem ... olarak adlandırılır.",
            "uk": "Економічну систему в Німеччині називають...",
            "ru": "Экономическая система в Германии называется...",
            "pl": "System gospodarczy w Niemczech nazywa się...",
            "fa": "سیستم اقتصادی در آلمان به نام ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "freie Zentralwirtschaft.",
                    "en": "free central economy",
                    "ar": "اقتصاد مركزي حر",
                    "tr": "serbest merkezi ekonomi",
                    "uk": "вільна центральна економіка",
                    "ru": "свободная центральная экономика",
                    "pl": "wolna gospodarka centralna",
                    "fa": "اقتصاد مرکزی آزاد"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "soziale Marktwirtschaft.",
                    "en": "social market economy",
                    "ar": "اقتصاد السوق الاجتماعي",
                    "tr": "sosyal piyasa ekonomisi",
                    "uk": "соціальна ринкова економіка",
                    "ru": "социальная рыночная экономика",
                    "pl": "społeczna gospodarka rynkowa",
                    "fa": "اقتصاد بازار اجتماعی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "gelenkte Zentralwirtschaft.",
                    "en": "controlled central economy",
                    "ar": "اقتصاد مركزي موجّه",
                    "tr": "kontrollü merkezi ekonomi",
                    "uk": "контрольована центральна економіка",
                    "ru": "управляемая центральная экономика",
                    "pl": "sterowana gospodarka centralna",
                    "fa": "اقتصاد مرکزی هدایت شده"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Planwirtschaft.",
                    "en": "planned economy",
                    "ar": "اقتصاد مخطط",
                    "tr": "planlı ekonomi",
                    "uk": "планова економіка",
                    "ru": "плановая экономика",
                    "pl": "gospodarka planowa",
                    "fa": "اقتصاد برنامه‌ریزی شده"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "economics"
    }
    ,
    {
        "id": "51",
        "question": {
            "de": "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
            "en": "In a democratic constitutional state, it is not included that...",
            "ar": "في دولة دستورية ديمقراطية، لا يتم تضمين...",
            "tr": "Demokratik bir hukuk devletinde şunlar yer almaz...",
            "uk": "У демократичній правовій державі не включається...",
            "ru": "В демократическом правовом государстве не включено...",
            "pl": "W demokratycznym państwie prawa nie zawiera się...",
            "fa": "در یک دولت دموکراتیک قانونمند، شامل نمی‌شود که..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Menschen sich kritisch über die Regierung äußern können.",
                    "en": "people can criticize the government.",
                    "ar": "يمكن للناس انتقاد الحكومة.",
                    "tr": "insanlar hükümeti eleştirebilir.",
                    "uk": "люди можуть критикувати уряд.",
                    "ru": "люди могут критиковать правительство.",
                    "pl": "ludzie mogą krytykować rząd.",
                    "fa": "مردم می‌توانند دولت را نقد کنند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bürger friedlich demonstrieren gehen dürfen.",
                    "en": "citizens are allowed to demonstrate peacefully.",
                    "ar": "يُسمح للمواطنين بالتظاهر السلمي.",
                    "tr": "vatandaşlar barışçıl bir şekilde gösteri yapabilirler.",
                    "uk": "громадяни мають право на мирні демонстрації.",
                    "ru": "граждане имеют право на мирные демонстрации.",
                    "pl": "obywatele mają prawo do pokojowych demonstracji.",
                    "fa": "شهروندان مجاز به تظاهرات مسالمت‌آمیز هستند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
                    "en": "people are arrested by a private police without reason.",
                    "ar": "يتم اعتقال الناس من قبل شرطة خاصة بدون سبب.",
                    "tr": "özel bir polis tarafından sebepsiz yere tutuklanır.",
                    "uk": "людей заарештовують приватною поліцією без причини.",
                    "ru": "людей арестовывают частной полицией без причины.",
                    "pl": "ludzie są aresztowani przez prywatną policję bez powodu.",
                    "fa": "افراد توسط پلیس خصوصی بدون دلیل بازداشت می‌شوند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "jemand ein Verbrechen begeht und deshalb verhaftet wird.",
                    "en": "someone commits a crime and is arrested as a result.",
                    "ar": "يرتكب شخص جريمة ويتم اعتقاله نتيجة لذلك.",
                    "tr": "biri bir suç işler ve bu yüzden tutuklanır.",
                    "uk": "хтось скоює злочин і тому заарештовується.",
                    "ru": "кто-то совершает преступление и поэтому арестовывается.",
                    "pl": "ktoś popełnia przestępstwo i zostaje aresztowany.",
                    "fa": "کسی مرتکب جرم می‌شود و در نتیجه دستگیر می‌شود."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "law"
    }
    ,
    {
        "id": "52",
        "question": {
            "de": "Was bedeutet „Volkssouveränität“? Alle Staatsgewalt geht vom …",
            "en": "What does 'popular sovereignty' mean? All state authority emanates from the...",
            "ar": "ماذا تعني 'سيادة الشعب'؟ كل السلطة في الدولة تنبع من ...",
            "tr": "'Halk egemenliği' ne anlama gelir? Tüm devlet otoritesi ...'den kaynaklanır.",
            "uk": "Що означає 'народний суверенітет'? Вся державна влада виходить від...",
            "ru": "Что означает 'народный суверенитет'? Вся государственная власть исходит от...",
            "pl": "Co oznacza 'suwerenność ludu'? Cała władza państwowa pochodzi od...",
            "fa": "حاکمیت مردمی به چه معناست؟ تمام قدرت دولتی از ... سرچشمه می‌گیرد."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Volke aus.",
                    "en": "the people.",
                    "ar": "الشعب.",
                    "tr": "halk.",
                    "uk": "народу.",
                    "ru": "народа.",
                    "pl": "ludu.",
                    "fa": "مردم."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bundestag aus.",
                    "en": "the Bundestag.",
                    "ar": "البوندستاغ.",
                    "tr": "Bundestag.",
                    "uk": "бундестагу.",
                    "ru": "Бундестага.",
                    "pl": "Bundestagu.",
                    "fa": "بوندستاگ."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "preußischen König aus.",
                    "en": "the Prussian king.",
                    "ar": "الملك البروسي.",
                    "tr": "Prusya kralı.",
                    "uk": "прусського короля.",
                    "ru": "прусского короля.",
                    "pl": "króla Prus.",
                    "fa": "پادشاه پروس."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bundesverfassungsgericht aus.",
                    "en": "the Federal Constitutional Court.",
                    "ar": "المحكمة الدستورية الاتحادية.",
                    "tr": "Federal Anayasa Mahkemesi.",
                    "uk": "Федерального конституційного суду.",
                    "ru": "Федерального конституционного суда.",
                    "pl": "Federalnego Trybunału Konstytucyjnego.",
                    "fa": "دیوان قانون اساسی فدرال."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "politics"
    }
    ,
    {
        "id": "53",
        "question": {
            "de": "Was bedeutet „Rechtsstaat“ in Deutschland?",
            "en": "What does 'rule of law' mean in Germany?",
            "ar": "ماذا يعني 'دولة القانون' في ألمانيا؟",
            "tr": "Almanya'da 'hukuk devleti' ne anlama gelir?",
            "uk": "Що означає 'правова держава' в Німеччині?",
            "ru": "Что означает 'правовое государство' в Германии?",
            "pl": "Co oznacza 'państwo prawa' w Niemczech?",
            "fa": "حاکمیت قانون در آلمان به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Der Staat hat Recht.",
                    "en": "The state is always right.",
                    "ar": "الدولة دائماً على حق.",
                    "tr": "Devlet her zaman haklıdır.",
                    "uk": "Держава завжди має рацію.",
                    "ru": "Государство всегда право.",
                    "pl": "Państwo ma zawsze rację.",
                    "fa": "دولت همیشه حق دارد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Es gibt nur rechte Parteien.",
                    "en": "There are only right-wing parties.",
                    "ar": "توجد فقط أحزاب يمينية.",
                    "tr": "Sadece sağ partiler vardır.",
                    "uk": "Є тільки праві партії.",
                    "ru": "Существуют только правые партии.",
                    "pl": "Istnieją tylko partie prawicowe.",
                    "fa": "فقط احزاب راست وجود دارد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Die Bürger und Bürgerinnen entscheiden über Gesetze.",
                    "en": "The citizens decide on laws.",
                    "ar": "يقرر المواطنون القوانين.",
                    "tr": "Vatandaşlar kanunlar hakkında karar verir.",
                    "uk": "Громадяни вирішують щодо законів.",
                    "ru": "Граждане решают о законах.",
                    "pl": "Obywatele decydują o ustawach.",
                    "fa": "مردم درباره قوانین تصمیم می‌گیرند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Der Staat muss die Gesetze einhalten.",
                    "en": "The state must follow the laws.",
                    "ar": "يجب على الدولة اتباع القوانين.",
                    "tr": "Devlet kanunlara uymalıdır.",
                    "uk": "Держава повинна дотримуватись законів.",
                    "ru": "Государство должно соблюдать законы.",
                    "pl": "Państwo musi przestrzegać prawa.",
                    "fa": "دولت باید قوانین را رعایت کند."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "law"
    }
    ,
    {
        "id": "54",
        "question": {
            "de": "Was ist keine staatliche Gewalt in Deutschland?",
            "en": "What is not a branch of government in Germany?",
            "ar": "ما هي السلطة التي ليست ضمن السلطات الحكومية في ألمانيا؟",
            "tr": "Almanya'da devletin bir kuvveti olmayan nedir?",
            "uk": "Що не є гілкою влади в Німеччині?",
            "ru": "Что не является государственной властью в Германии?",
            "pl": "Która z poniższych nie jest władzą państwową w Niemczech?",
            "fa": "کدام یک از قوای دولتی در آلمان نیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Legislative",
                    "en": "Legislative",
                    "ar": "السلطة التشريعية",
                    "tr": "Yasama",
                    "uk": "Законодавча",
                    "ru": "Законодательная",
                    "pl": "Władza ustawodawcza",
                    "fa": "قوه مقننه"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Judikative",
                    "en": "Judiciary",
                    "ar": "السلطة القضائية",
                    "tr": "Yargı",
                    "uk": "Судова",
                    "ru": "Судебная",
                    "pl": "Władza sądownicza",
                    "fa": "قوه قضاییه"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Exekutive",
                    "en": "Executive",
                    "ar": "السلطة التنفيذية",
                    "tr": "Yürütme",
                    "uk": "Виконавча",
                    "ru": "Исполнительная",
                    "pl": "Władza wykonawcza",
                    "fa": "قوه مجریه"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Direktive",
                    "en": "Directive",
                    "ar": "السلطة التوجيهية",
                    "tr": "Direktif",
                    "uk": "Директивна",
                    "ru": "Директивная",
                    "pl": "Dyrektywa",
                    "fa": "قوه مستقیمه"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "government"
    }
    ,
    {
        "id": "55",
        "question": {
            "de": "Was zeigt dieses Bild? Gebäude mit zwei Türmen rechts und links der Fassade, und einer Glaskuppel auf dem Dach mittig",
            "en": "What does this picture show? A building with two towers on the right and left sides of the facade, and a glass dome in the center of the roof.",
            "ar": "ماذا يظهر هذا الصورة؟ مبنى ذو برجين على الجانبين الأيمن والأيسر من الواجهة، وقبة زجاجية في وسط السقف.",
            "tr": "Bu resim neyi gösteriyor? Cephede sağda ve solda iki kuleye sahip, çatı ortasında bir cam kubbe bulunan bina.",
            "uk": "Що показує це зображення? Будівля з двома вежами праворуч і ліворуч від фасаду, та скляним куполом посередині даху.",
            "ru": "Что изображено на этом изображении? Здание с двумя башнями справа и слева от фасада, со стеклянным куполом в центре крыши.",
            "pl": "Co przedstawia ten obraz? Budynek z dwoma wieżami po prawej i lewej stronie fasady oraz szklaną kopułą pośrodku dachu.",
            "fa": "این تصویر چه چیزی را نشان می‌دهد؟ ساختمانی با دو برج در سمت چپ و راست نمای اصلی و یک گنبد شیشه‌ای در وسط سقف."
        },
        image: require('../assets/images/055.png'),
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "den Bundestagssitz in Berlin",
                    "en": "the Bundestag building in Berlin",
                    "ar": "مقر البرلمان الألماني في برلين",
                    "tr": "Berlin'deki Bundestag binası",
                    "uk": "Будівля Бундестагу в Берліні",
                    "ru": "Здание Бундестага в Берлине",
                    "pl": "Budynek Bundestagu w Berlinie",
                    "fa": "ساختمان بوندستاگ در برلین"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "das Bundesverfassungsgericht in Karlsruhe",
                    "en": "the Federal Constitutional Court in Karlsruhe",
                    "ar": "المحكمة الدستورية الاتحادية في كارلسروه",
                    "tr": "Karlsruhe'deki Federal Anayasa Mahkemesi",
                    "uk": "Федеральний конституційний суд у Карлсруе",
                    "ru": "Федеральный Конституционный Суд в Карлсруэ",
                    "pl": "Federalny Trybunał Konstytucyjny w Karlsruhe",
                    "fa": "دیوان قانون اساسی فدرال در کارلسروهه"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das Bundesratsgebäude in Berlin",
                    "en": "the Federal Council building in Berlin",
                    "ar": "مبنى المجلس الاتحادي في برلين",
                    "tr": "Berlin'deki Federal Konsey binası",
                    "uk": "Будівля Федеральної ради в Берліні",
                    "ru": "Здание Бундесрата в Берлине",
                    "pl": "Budynek Bundesratu w Berlinie",
                    "fa": "ساختمان شورای فدرال در برلین"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "das Bundeskanzleramt in Berlin",
                    "en": "the Federal Chancellery in Berlin",
                    "ar": "مكتب المستشارية الاتحادية في برلين",
                    "tr": "Berlin'deki Federal Başbakanlık",
                    "uk": "Федеральне відомство канцлера в Берліні",
                    "ru": "Канцелярия федерального канцлера в Берлине",
                    "pl": "Kancelaria Federalna w Berlinie",
                    "fa": "دفتر صدارت فدرال در برلین"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "architecture"
    }
    ,
    {
        "id": "56",
        "question": {
            "de": "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
            "en": "Which office is part of the municipal administration in Germany?",
            "ar": "أي دائرة تنتمي إلى إدارة البلدية في ألمانيا؟",
            "tr": "Almanya'da hangi daire belediye yönetimine dahildir?",
            "uk": "Який офіс належить до муніципальної адміністрації в Німеччині?",
            "ru": "Какое учреждение входит в состав муниципальной администрации в Германии?",
            "pl": "Które biuro należy do administracji gminnej w Niemczech?",
            "fa": "کدام دفتر در آلمان جزو مدیریت شهرداری است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Pfarramt",
                    "en": "Parish Office",
                    "ar": "مكتب الرعية",
                    "tr": "Parish Ofisi",
                    "uk": "Парафіяльна адміністрація",
                    "ru": "Приходской офис",
                    "pl": "Urząd parafialny",
                    "fa": "دفتر کلیسا"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Ordnungsamt",
                    "en": "Public Order Office",
                    "ar": "مكتب النظام العام",
                    "tr": "Kamu Düzeni Ofisi",
                    "uk": "Відділ громадського порядку",
                    "ru": "Управление общественного порядка",
                    "pl": "Urząd porządku publicznego",
                    "fa": "دفتر نظم عمومی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Finanzamt",
                    "en": "Tax Office",
                    "ar": "مكتب الضرائب",
                    "tr": "Vergi Dairesi",
                    "uk": "Податкове управління",
                    "ru": "Налоговое управление",
                    "pl": "Urząd skarbowy",
                    "fa": "اداره مالیات"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Auswärtiges Amt",
                    "en": "Foreign Office",
                    "ar": "مكتب الشؤون الخارجية",
                    "tr": "Dışişleri Ofisi",
                    "uk": "Міністерство закордонних справ",
                    "ru": "Министерство иностранных дел",
                    "pl": "Ministerstwo Spraw Zagranicznych",
                    "fa": "دفتر امور خارجه"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "57",
        "question": {
            "de": "Wer wird meistens zum Präsidenten / zur Präsidentin des Deutschen Bundestages gewählt?",
            "en": "Who is usually elected as President of the German Bundestag?",
            "ar": "من يتم انتخابه غالبًا رئيسًا للبوندستاغ الألماني؟",
            "tr": "Alman Bundestag Başkanı genellikle kim seçilir?",
            "uk": "Хто зазвичай обирається президентом німецького Бундестагу?",
            "ru": "Кто обычно избирается председателем Бундестага Германии?",
            "pl": "Kto zazwyczaj jest wybierany na przewodniczącego Bundestagu w Niemczech?",
            "fa": "چه کسی معمولاً به عنوان رئیس بوندستاگ آلمان انتخاب می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der / die älteste Abgeordnete im Parlament",
                    "en": "the oldest member of parliament",
                    "ar": "أكبر نائب سنًا في البرلمان",
                    "tr": "Parlamentteki en yaşlı üye",
                    "uk": "найстарший депутат у парламенті",
                    "ru": "самый старший депутат парламента",
                    "pl": "najstarszy poseł w parlamencie",
                    "fa": "قدیمی‌ترین عضو پارلمان"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Ministerpräsident / die Ministerpräsidentin des größten Bundeslandes",
                    "en": "the Prime Minister of the largest federal state",
                    "ar": "رئيس وزراء الولاية الأكبر",
                    "tr": "En büyük eyaletin başbakanı",
                    "uk": "прем’єр-міністр найбільшої федеральної землі",
                    "ru": "глава правительства самого большого федерального региона",
                    "pl": "Premier największego landu",
                    "fa": "نخست‌وزیر بزرگترین ایالت فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "ein Abgeordneter / eine Abgeordnete der stärksten Fraktion",
                    "en": "a member of the strongest parliamentary group",
                    "ar": "نائب من أكبر كتلة برلمانية",
                    "tr": "En güçlü parti grubundan bir milletvekili",
                    "uk": "депутат від найсильнішої фракції",
                    "ru": "депутат от самой крупной фракции",
                    "pl": "poseł z najsilniejszej frakcji",
                    "fa": "یک نماینده از قوی‌ترین جناح پارلمانی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "ein ehemaliger Bundeskanzler / eine ehemalige Bundeskanzlerin",
                    "en": "a former Federal Chancellor",
                    "ar": "مستشار اتحادي سابق",
                    "tr": "Eski bir Federal Şansölye",
                    "uk": "колишній федеральний канцлер",
                    "ru": "бывший федеральный канцлер",
                    "pl": "były kanclerz federalny",
                    "fa": "یک صدر اعظم فدرال سابق"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "government"
    }
    ,
    {
        "id": "58",
        "question": {
            "de": "Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?",
            "en": "Who appoints the ministers of the federal government in Germany?",
            "ar": "من يعين الوزراء في الحكومة الفيدرالية في ألمانيا؟",
            "tr": "Almanya'da federal hükümetin bakanlarını kim atar?",
            "uk": "Хто призначає міністрів федерального уряду в Німеччині?",
            "ru": "Кто назначает министров федерального правительства в Германии?",
            "pl": "Kto mianuje ministrów rządu federalnego w Niemczech?",
            "fa": "چه کسی وزرای دولت فدرال در آلمان را منصوب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der Präsident / die Präsidentin des Bundesverfassungsgerichtes",
                    "en": "the President of the Federal Constitutional Court",
                    "ar": "رئيس المحكمة الدستورية الفيدرالية",
                    "tr": "Federal Anayasa Mahkemesi Başkanı",
                    "uk": "президент Федерального Конституційного Суду",
                    "ru": "председатель Федерального Конституционного суда",
                    "pl": "Prezes Federalnego Trybunału Konstytucyjnego",
                    "fa": "رئیس دادگاه قانون اساسی فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Bundespräsident / die Bundespräsidentin",
                    "en": "the Federal President",
                    "ar": "رئيس الاتحاد",
                    "tr": "Federal Başkan",
                    "uk": "Федеральний президент",
                    "ru": "Федеральный президент",
                    "pl": "Prezydent Federalny",
                    "fa": "رئیس‌جمهور فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "der Bundesratspräsident / die Bundesratspräsidentin",
                    "en": "the President of the Federal Council",
                    "ar": "رئيس المجلس الاتحادي",
                    "tr": "Federal Konsey Başkanı",
                    "uk": "президент Федеральної ради",
                    "ru": "председатель Федерального совета",
                    "pl": "Prezes Rady Federalnej",
                    "fa": "رئیس شورای فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "der Bundestagspräsident / die Bundestagspräsidentin",
                    "en": "the President of the Bundestag",
                    "ar": "رئيس البرلمان الاتحادي",
                    "tr": "Bundestag Başkanı",
                    "uk": "президент Бундестагу",
                    "ru": "председатель Бундестага",
                    "pl": "Prezes Bundestagu",
                    "fa": "رئیس بوندستاگ"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "59",
        "question": {
            "de": "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
            "en": "How many years ago did the first Jewish community exist on the territory of present-day Germany?",
            "ar": "منذ كم سنة وُجدت أول جالية يهودية على أراضي ألمانيا الحالية؟",
            "tr": "Günümüz Almanya topraklarında ilk Yahudi topluluğu ne kadar önce vardı?",
            "uk": "Скільки років тому існувала перша єврейська громада на території сучасної Німеччини?",
            "ru": "Сколько лет назад существовала первая еврейская община на территории современной Германии?",
            "pl": "Ile lat temu istniała pierwsza społeczność żydowska na terenie dzisiejszych Niemiec?",
            "fa": "چند سال پیش اولین جامعه یهودی در سرزمین آلمان امروزی وجود داشت؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "vor etwa 300 Jahren",
                    "en": "about 300 years ago",
                    "ar": "منذ حوالي 300 عام",
                    "tr": "yaklaşık 300 yıl önce",
                    "uk": "близько 300 років тому",
                    "ru": "около 300 лет назад",
                    "pl": "około 300 lat temu",
                    "fa": "حدود 300 سال پیش"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "vor etwa 700 Jahren",
                    "en": "about 700 years ago",
                    "ar": "منذ حوالي 700 عام",
                    "tr": "yaklaşık 700 yıl önce",
                    "uk": "близько 700 років тому",
                    "ru": "около 700 лет назад",
                    "pl": "około 700 lat temu",
                    "fa": "حدود 700 سال پیش"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "vor etwa 1150 Jahren",
                    "en": "about 1150 years ago",
                    "ar": "منذ حوالي 1150 عام",
                    "tr": "yaklaşık 1150 yıl önce",
                    "uk": "близько 1150 років тому",
                    "ru": "около 1150 лет назад",
                    "pl": "około 1150 lat temu",
                    "fa": "حدود 1150 سال پیش"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "vor etwa 1700 Jahren",
                    "en": "about 1700 years ago",
                    "ar": "منذ حوالي 1700 عام",
                    "tr": "yaklaşık 1700 yıl önce",
                    "uk": "близько 1700 років тому",
                    "ru": "около 1700 лет назад",
                    "pl": "około 1700 lat temu",
                    "fa": "حدود 1700 سال پیش"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "history"
    }
    ,
    {
        "id": "60",
        "question": {
            "de": "In Deutschland gehören der Bundestag und der Bundesrat zur …",
            "en": "In Germany, the Bundestag and Bundesrat belong to the …",
            "ar": "في ألمانيا، ينتمي البوندستاغ والبوندسرات إلى ...",
            "tr": "Almanya'da Bundestag ve Bundesrat ... aittir.",
            "uk": "У Німеччині Бундестаг і Бундесрат належать до …",
            "ru": "В Германии Бундестаг и Бундесрат относятся к …",
            "pl": "W Niemczech Bundestag i Bundesrat należą do …",
            "fa": "در آلمان، بوندستاگ و بوندسرات به ... تعلق دارند."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Exekutive",
                    "en": "Executive",
                    "ar": "السلطة التنفيذية",
                    "tr": "Yürütme",
                    "uk": "виконавча влада",
                    "ru": "исполнительная власть",
                    "pl": "Władza wykonawcza",
                    "fa": "قوه مجریه"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Legislative",
                    "en": "Legislative",
                    "ar": "السلطة التشريعية",
                    "tr": "Yasama",
                    "uk": "законодавча влада",
                    "ru": "законодательная власть",
                    "pl": "Władza ustawodawcza",
                    "fa": "قوه مقننه"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Direktive",
                    "en": "Directive",
                    "ar": "السلطة التوجيهية",
                    "tr": "Yönerge",
                    "uk": "директива",
                    "ru": "директива",
                    "pl": "Dyrektywa",
                    "fa": "دستورالعمل"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Judikative",
                    "en": "Judiciary",
                    "ar": "السلطة القضائية",
                    "tr": "Yargı",
                    "uk": "судова влада",
                    "ru": "судебная власть",
                    "pl": "Władza sądownicza",
                    "fa": "قوه قضاییه"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "61",
        "question": {
            "de": "Was bedeutet „Volkssouveränität“?",
            "en": "What does 'popular sovereignty' mean?",
            "ar": "ماذا يعني \"سيادة الشعب\"؟",
            "tr": "\"Halk egemenliği\" ne anlama geliyor?",
            "uk": "Що означає «народний суверенітет»?",
            "ru": "Что означает «народный суверенитет»?",
            "pl": "Co oznacza „suwerenność ludu”?",
            "fa": "حاکمیت مردمی به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Der König / die Königin herrscht über das Volk.",
                    "en": "The king/queen rules over the people.",
                    "ar": "الملك / الملكة يحكم الشعب.",
                    "tr": "Kral/Kraliçe halkın üzerinde hüküm sürer.",
                    "uk": "Король / королева править народом.",
                    "ru": "Король / королева правит народом.",
                    "pl": "Król / królowa rządzi nad ludem.",
                    "fa": "پادشاه / ملکه بر مردم حاکم است."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Das Bundesverfassungsgericht steht über der Verfassung.",
                    "en": "The Federal Constitutional Court stands above the constitution.",
                    "ar": "المحكمة الدستورية الفيدرالية أعلى من الدستور.",
                    "tr": "Federal Anayasa Mahkemesi anayasadan üstündür.",
                    "uk": "Федеральний конституційний суд стоїть над конституцією.",
                    "ru": "Федеральный конституционный суд стоит выше конституции.",
                    "pl": "Federalny Trybunał Konstytucyjny stoi ponad konstytucją.",
                    "fa": "دادگاه قانون اساسی فدرال بالاتر از قانون اساسی است."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
                    "en": "Interest groups exercise sovereignty together with the government.",
                    "ar": "تمارس المجموعات ذات المصالح السيادة مع الحكومة.",
                    "tr": "Çıkar grupları hükümetle birlikte egemenlik uygular.",
                    "uk": "Інтереси груп здійснюють суверенітет разом з урядом.",
                    "ru": "Группы интересов осуществляют суверенитет вместе с правительством.",
                    "pl": "Grupy interesu sprawują suwerenność razem z rządem.",
                    "fa": "گروه‌های ذی‌نفع به همراه دولت حاکمیت را اعمال می‌کنند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Die Staatsgewalt geht vom Volke aus.",
                    "en": "The state power emanates from the people.",
                    "ar": "السلطة الحكومية تنبع من الشعب.",
                    "tr": "Devlet gücü halktan kaynaklanır.",
                    "uk": "Державна влада виходить від народу.",
                    "ru": "Государственная власть исходит от народа.",
                    "pl": "Władza państwowa pochodzi od ludu.",
                    "fa": "قدرت دولتی از مردم نشات می‌گیرد."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "politics"
    }
    ,
    {
        "id": "62",
        "question": {
            "de": "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
            "en": "When the parliament of a German federal state is elected, it is called a …",
            "ar": "عندما يتم انتخاب برلمان ولاية ألمانية، يُطلق عليه اسم ...",
            "tr": "Bir Alman eyaletinin parlamentosu seçildiğinde, buna ... denir.",
            "uk": "Коли обирають парламент німецької федеральної землі, це називається …",
            "ru": "Когда избирается парламент одной из федеральных земель Германии, это называется …",
            "pl": "Gdy wybierany jest parlament niemieckiego landu, nazywa się to …",
            "fa": "هنگامی که پارلمان یکی از ایالت‌های فدرال آلمان انتخاب می‌شود، به آن ... گفته می‌شود."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Kommunalwahl",
                    "en": "Municipal election",
                    "ar": "انتخابات بلدية",
                    "tr": "Belediye seçimi",
                    "uk": "місцеві вибори",
                    "ru": "муниципальные выборы",
                    "pl": "wybory samorządowe",
                    "fa": "انتخابات محلی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Landtagswahl",
                    "en": "State parliament election",
                    "ar": "انتخابات برلمان الولاية",
                    "tr": "Eyalet parlamentosu seçimi",
                    "uk": "вибори до парламенту федеральної землі",
                    "ru": "выборы в парламент федеральной земли",
                    "pl": "wybory do landtagu",
                    "fa": "انتخابات پارلمان ایالتی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Europawahl",
                    "en": "European election",
                    "ar": "انتخابات أوروبية",
                    "tr": "Avrupa seçimi",
                    "uk": "вибори до Європарламенту",
                    "ru": "выборы в Европейский парламент",
                    "pl": "wybory europejskie",
                    "fa": "انتخابات اروپایی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bundestagswahl",
                    "en": "Federal parliament election",
                    "ar": "انتخابات البوندستاغ",
                    "tr": "Federal parlamento seçimi",
                    "uk": "вибори до Бундестагу",
                    "ru": "выборы в Бундестаг",
                    "pl": "wybory do Bundestagu",
                    "fa": "انتخابات پارلمان فدرال"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "elections"
    }
    ,
    {
        "id": "63",
        "question": {
            "de": "Was gehört in Deutschland nicht zur Exekutive?",
            "en": "What does not belong to the executive branch in Germany?",
            "ar": "ما الذي لا ينتمي إلى السلطة التنفيذية في ألمانيا؟",
            "tr": "Almanya'da yürütme organına ait olmayan nedir?",
            "uk": "Що не належить до виконавчої влади в Німеччині?",
            "ru": "Что не относится к исполнительной власти в Германии?",
            "pl": "Co nie należy do władzy wykonawczej w Niemczech?",
            "fa": "چه چیزی به قوه اجراییه در آلمان تعلق ندارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Polizei",
                    "en": "the police",
                    "ar": "الشرطة",
                    "tr": "polis",
                    "uk": "поліція",
                    "ru": "полиция",
                    "pl": "policja",
                    "fa": "پلیس"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Gerichte",
                    "en": "the courts",
                    "ar": "المحاكم",
                    "tr": "mahkemeler",
                    "uk": "суди",
                    "ru": "суды",
                    "pl": "sądy",
                    "fa": "دادگاه‌ها"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das Finanzamt",
                    "en": "the tax office",
                    "ar": "مكتب الضرائب",
                    "tr": "vergi dairesi",
                    "uk": "податкова служба",
                    "ru": "налоговая служба",
                    "pl": "urząd skarbowy",
                    "fa": "اداره مالیات"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Ministerien",
                    "en": "the ministries",
                    "ar": "الوزارات",
                    "tr": "bakanlıklar",
                    "uk": "міністерства",
                    "ru": "министерства",
                    "pl": "ministerstwa",
                    "fa": "وزارتخانه‌ها"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "government"
    }
    ,
    {
        "id": "64",
        "question": {
            "de": "Die Bundesrepublik Deutschland ist heute gegliedert in …",
            "en": "Today, the Federal Republic of Germany is divided into …",
            "ar": "اليوم، جمهورية ألمانيا الاتحادية مقسمة إلى ...",
            "tr": "Bugün, Almanya Federal Cumhuriyeti ... olarak bölünmüştür.",
            "uk": "Сьогодні Федеративна Республіка Німеччина поділена на …",
            "ru": "Сегодня Федеративная Республика Германия разделена на …",
            "pl": "Dziś Republika Federalna Niemiec jest podzielona na …",
            "fa": "امروز، جمهوری فدرال آلمان به ... تقسیم شده است."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "vier Besatzungszonen",
                    "en": "four occupation zones",
                    "ar": "أربع مناطق احتلال",
                    "tr": "dört işgal bölgesi",
                    "uk": "чотири зони окупації",
                    "ru": "четыре зоны оккупации",
                    "pl": "cztery strefy okupacyjne",
                    "fa": "چهار منطقه اشغالی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "einen Oststaat und einen Weststaat",
                    "en": "an eastern state and a western state",
                    "ar": "دولة شرقية ودولة غربية",
                    "tr": "bir doğu ve bir batı devleti",
                    "uk": "східний та західний штати",
                    "ru": "восточное и западное государство",
                    "pl": "stan wschodni i zachodni",
                    "fa": "یک ایالت شرقی و یک ایالت غربی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "16 Kantone",
                    "en": "16 cantons",
                    "ar": "16 كانتونًا",
                    "tr": "16 kanton",
                    "uk": "16 кантонів",
                    "ru": "16 кантонов",
                    "pl": "16 kantonów",
                    "fa": "۱۶ کانتون"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bund, Länder und Kommunen",
                    "en": "federal, state, and local governments",
                    "ar": "اتحاد، ولايات وبلديات",
                    "tr": "federal, eyalet ve yerel yönetimler",
                    "uk": "федеральний рівень, землі та громади",
                    "ru": "федеральные, земельные и местные органы",
                    "pl": "związek, kraje związkowe i gminy",
                    "fa": "اتحادیه، ایالت‌ها و شهرداری‌ها"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "government_structure"
    }
    ,
    {
        "id": "65",
        "question": {
            "de": "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
            "en": "It is not one of the duties of the German Bundestag to …",
            "ar": "ليس من مهام البوندستاغ الألماني أن …",
            "tr": "Alman Bundestag'ının görevlerinden biri değildir ...",
            "uk": "Це не є одним із завдань німецького Бундестагу …",
            "ru": "Это не относится к обязанностям немецкого Бундестага …",
            "pl": "Nie jest zadaniem niemieckiego Bundestagu …",
            "fa": "این جزو وظایف بوندستاگ آلمان نیست که …"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Gesetze zu entwerfen",
                    "en": "draft laws",
                    "ar": "صياغة القوانين",
                    "tr": "yasaları tasarlamak",
                    "uk": "розробляти закони",
                    "ru": "разрабатывать законы",
                    "pl": "projektować ustawy",
                    "fa": "طرح قوانین"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Bundesregierung zu kontrollieren",
                    "en": "supervise the federal government",
                    "ar": "مراقبة الحكومة الاتحادية",
                    "tr": "federal hükümeti denetlemek",
                    "uk": "контролювати федеральний уряд",
                    "ru": "контролировать федеральное правительство",
                    "pl": "kontrolować rząd federalny",
                    "fa": "نظارت بر دولت فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "den Bundeskanzler / die Bundeskanzlerin zu wählen",
                    "en": "elect the Chancellor",
                    "ar": "انتخاب المستشار الاتحادي",
                    "tr": "Şansölye'yi seçmek",
                    "uk": "обирати канцлера",
                    "ru": "избирать канцлера",
                    "pl": "wybierać kanclerza",
                    "fa": "انتخاب صدراعظم"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "das Bundeskabinett zu bilden",
                    "en": "form the federal cabinet",
                    "ar": "تشكيل مجلس الوزراء الاتحادي",
                    "tr": "federal kabineyi oluşturmak",
                    "uk": "формувати федеральний кабінет",
                    "ru": "формировать федеральный кабинет",
                    "pl": "tworzyć rząd federalny",
                    "fa": "تشکیل کابینه فدرال"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "government_duties"
    }
    ,
    {
        "id": "66",
        "question": {
            "de": "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
            "en": "Which cities have the largest Jewish communities in Germany?",
            "ar": "أي المدن بها أكبر الجاليات اليهودية في ألمانيا؟",
            "tr": "Almanya'da en büyük Yahudi topluluklarına sahip şehirler hangileridir?",
            "uk": "Які міста мають найбільші єврейські громади в Німеччині?",
            "ru": "Какие города имеют крупнейшие еврейские общины в Германии?",
            "pl": "Które miasta mają największe społeczności żydowskie w Niemczech?",
            "fa": "کدام شهرها بزرگترین جوامع یهودی را در آلمان دارند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Berlin und München",
                    "en": "Berlin and Munich",
                    "ar": "برلين وميونيخ",
                    "tr": "Berlin ve Münih",
                    "uk": "Берлін і Мюнхен",
                    "ru": "Берлин и Мюнхен",
                    "pl": "Berlin i Monachium",
                    "fa": "برلین و مونیخ"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Hamburg und Essen",
                    "en": "Hamburg and Essen",
                    "ar": "هامبورغ وإسن",
                    "tr": "Hamburg ve Essen",
                    "uk": "Гамбург та Ессен",
                    "ru": "Гамбург и Эссен",
                    "pl": "Hamburg i Essen",
                    "fa": "هامبورگ و اسن"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Nürnberg und Stuttgart",
                    "en": "Nuremberg and Stuttgart",
                    "ar": "نورنبرغ وشتوتغارت",
                    "tr": "Nürnberg ve Stuttgart",
                    "uk": "Нюрнберг і Штутгарт",
                    "ru": "Нюрнберг и Штутгарт",
                    "pl": "Norymberga i Stuttgart",
                    "fa": "نورنبرگ و اشتوتگارت"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Worms und Speyer",
                    "en": "Worms and Speyer",
                    "ar": "فورمس وسباير",
                    "tr": "Worms ve Speyer",
                    "uk": "Вормс і Шпаєр",
                    "ru": "Вормс и Шпайер",
                    "pl": "Worms i Speyer",
                    "fa": "ورمز و اسپایر"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "cultural_communities"
    }
    ,
    {
        "id": "67",
        "question": {
            "de": "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
            "en": "What is primarily a responsibility of the federal states in Germany?",
            "ar": "ما هي المهمة الرئيسية للولايات الفيدرالية في ألمانيا؟",
            "tr": "Almanya'da eyaletlerin başlıca sorumluluğu nedir?",
            "uk": "Що є основним обов'язком федеральних земель у Німеччині?",
            "ru": "Какова основная задача федеральных земель в Германии?",
            "pl": "Co jest głównym zadaniem krajów związkowych w Niemczech?",
            "fa": "مسئولیت اصلی ایالت‌های فدرال در آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Verteidigungspolitik",
                    "en": "defense policy",
                    "ar": "سياسة الدفاع",
                    "tr": "savunma politikası",
                    "uk": "оборона",
                    "ru": "политика обороны",
                    "pl": "polityka obronna",
                    "fa": "سیاست دفاعی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Außenpolitik",
                    "en": "foreign policy",
                    "ar": "السياسة الخارجية",
                    "tr": "dış politika",
                    "uk": "зовнішня політика",
                    "ru": "внешняя политика",
                    "pl": "polityka zagraniczna",
                    "fa": "سیاست خارجی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Wirtschaftspolitik",
                    "en": "economic policy",
                    "ar": "السياسة الاقتصادية",
                    "tr": "ekonomi politikası",
                    "uk": "економічна політика",
                    "ru": "экономическая политика",
                    "pl": "polityka gospodarcza",
                    "fa": "سیاست اقتصادی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Schulpolitik",
                    "en": "education policy",
                    "ar": "سياسة التعليم",
                    "tr": "eğitim politikası",
                    "uk": "освітня політика",
                    "ru": "образовательная политика",
                    "pl": "polityka szkolna",
                    "fa": "سیاست آموزشی"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "state_responsibilities"
    }
    ,
    {
        "id": "68",
        "question": {
            "de": "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
            "en": "Why does the state in Germany control the school system?",
            "ar": "لماذا يسيطر الدولة في ألمانيا على نظام التعليم؟",
            "tr": "Almanya'da devlet neden eğitim sistemini kontrol eder?",
            "uk": "Чому держава в Німеччині контролює шкільну систему?",
            "ru": "Почему государство в Германии контролирует школьную систему?",
            "pl": "Dlaczego państwo w Niemczech kontroluje system szkolny?",
            "fa": "چرا دولت در آلمان سیستم آموزشی را کنترل می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "weil es in Deutschland nur staatliche Schulen gibt",
                    "en": "because there are only state schools in Germany",
                    "ar": "لأنه في ألمانيا توجد مدارس حكومية فقط",
                    "tr": "çünkü Almanya'da sadece devlet okulları vardır",
                    "uk": "тому що в Німеччині є тільки державні школи",
                    "ru": "потому что в Германии есть только государственные школы",
                    "pl": "ponieważ w Niemczech są tylko szkoły państwowe",
                    "fa": "زیرا در آلمان فقط مدارس دولتی وجود دارد"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "weil alle Schüler und Schülerinnen einen Schulabschluss haben müssen",
                    "en": "because all students must have a school diploma",
                    "ar": "لأن جميع الطلاب يجب أن يحصلوا على شهادة مدرسية",
                    "tr": "çünkü tüm öğrencilerin bir okul diplomasına sahip olması gerekir",
                    "uk": "тому що всі учні повинні мати атестат",
                    "ru": "потому что все ученики должны иметь аттестат",
                    "pl": "ponieważ wszyscy uczniowie muszą mieć świadectwo szkolne",
                    "fa": "زیرا همه دانش‌آموزان باید مدرک تحصیلی داشته باشند"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "weil es in den Bundesländern verschiedene Schulen gibt",
                    "en": "because there are different types of schools in the federal states",
                    "ar": "لأن هناك أنواع مختلفة من المدارس في الولايات الفيدرالية",
                    "tr": "çünkü eyaletlerde farklı okul türleri vardır",
                    "uk": "тому що в федеральних землях є різні школи",
                    "ru": "потому что в федеральных землях есть разные школы",
                    "pl": "ponieważ w krajach związkowych istnieją różne typy szkół",
                    "fa": "زیرا در ایالات فدرال انواع مختلفی از مدارس وجود دارد"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "weil es nach dem Grundgesetz seine Aufgabe ist",
                    "en": "because it is its responsibility according to the Basic Law",
                    "ar": "لأنه من مسؤولياته وفقًا للقانون الأساسي",
                    "tr": "çünkü Temel Kanuna göre sorumluluğudur",
                    "uk": "тому що це його обов'язок згідно з Основним законом",
                    "ru": "потому что это его обязанность по Основному закону",
                    "pl": "ponieważ jest to jego obowiązek zgodnie z konstytucją",
                    "fa": "زیرا این مسئولیت آن طبق قانون اساسی است"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "education_control"
    }
    ,
    {
        "id": "69",
        "question": {
            "de": "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
            "en": "The Federal Republic of Germany has a three-tier administrative structure. What is the lowest political level called?",
            "ar": "جمهورية ألمانيا الاتحادية لديها هيكل إداري ثلاثي المستويات. ما هو اسم أدنى مستوى سياسي؟",
            "tr": "Alman Federal Cumhuriyeti'nin üç aşamalı bir yönetim yapısı vardır. En alt siyasi seviye nedir?",
            "uk": "Федеративна Республіка Німеччина має трирівневу адміністративну структуру. Як називається найнижчий політичний рівень?",
            "ru": "Федеративная Республика Германия имеет трехуровневую административную структуру. Как называется самый низкий политический уровень?",
            "pl": "Niemiecka Republika Federalna ma trójstopniową strukturę administracyjną. Jak nazywa się najniższy poziom polityczny?",
            "fa": "جمهوری فدرال آلمان دارای ساختار اداری سه سطحی است. پایین‌ترین سطح سیاسی چه نام دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Stadträte",
                    "en": "city councils",
                    "ar": "مجالس المدن",
                    "tr": "şehir meclisleri",
                    "uk": "міські ради",
                    "ru": "городские советы",
                    "pl": "rady miejskie",
                    "fa": "شورای شهرها"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Landräte",
                    "en": "district administrators",
                    "ar": "مديرو المناطق",
                    "tr": "ilçe yöneticileri",
                    "uk": "адміністратори округу",
                    "ru": "администраторы округов",
                    "pl": "starostowie",
                    "fa": "مدیران ناحیه"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Gemeinden",
                    "en": "municipalities",
                    "ar": "البلديات",
                    "tr": "belediyeler",
                    "uk": "муніципалітети",
                    "ru": "муниципалитеты",
                    "pl": "gminy",
                    "fa": "شهرستان‌ها"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bezirksämter",
                    "en": "district offices",
                    "ar": "المكاتب الإدارية",
                    "tr": "ilçe ofisleri",
                    "uk": "районні адміністрації",
                    "ru": "районные управления",
                    "pl": "urzędy dzielnicowe",
                    "fa": "دفترهای منطقه‌ای"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "administration"
    }
    ,
    {
        "id": "70",
        "question": {
            "de": "Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?",
            "en": "What are the responsibilities of the German Federal President?",
            "ar": "ما هي مسؤوليات الرئيس الفيدرالي الألماني؟",
            "tr": "Alman Federal Başkanı'nın görevleri nelerdir?",
            "uk": "Які обов'язки має федеральний президент Німеччини?",
            "ru": "Каковы обязанности федерального президента Германии?",
            "pl": "Jakie są obowiązki niemieckiego prezydenta federalnego?",
            "fa": "مسئولیت‌های رئیس‌جمهور فدرال آلمان چیست؟"
        },
        image: require('../assets/images/070.png'),
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Gustav Heinemann überreicht Helmut Schmidt die Ernennungsurkunde zum deutschen Bundeskanzler",
                    "en": "Gustav Heinemann presents Helmut Schmidt with the appointment certificate as German Chancellor",
                    "ar": "غوستاف هاينمان يسلم هلموت شميت شهادة التعيين كمستشار ألماني",
                    "tr": "Gustav Heinemann, Helmut Schmidt'e Alman Şansölyesi olarak atama belgesini sunar",
                    "uk": "Густав Гайнеман вручає Хельмуту Шмідту посвідчення про призначення канцлером Німеччини",
                    "ru": "Густав Хайнеман вручил Хельмуту Шмидту удостоверение о назначении канцлером Германии",
                    "pl": "Gustav Heinemann wręcza Helmutowi Schmidtowi certyfikat powołania na kanclerza Niemiec",
                    "fa": "گوستاو هاینمان به هلموت شمیند گواهی انتصاب به عنوان صدراعظم آلمان را ارائه می‌دهد"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Er / Sie führt die Regierungsgeschäfte.",
                    "en": "He / She conducts government business.",
                    "ar": "هو / هي يدير الأعمال الحكومية.",
                    "tr": "O / O hükümet işlerini yürütür.",
                    "uk": "Він / Вона веде державні справи.",
                    "ru": "Он / Она ведет государственные дела.",
                    "pl": "On / Ona prowadzi sprawy rządowe.",
                    "fa": "او/او کارهای دولتی را انجام می‌دهد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Er / Sie kontrolliert die Regierungspartei.",
                    "en": "He / She controls the ruling party.",
                    "ar": "هو / هي يسيطر على الحزب الحاكم.",
                    "tr": "O / O iktidar partisini kontrol eder.",
                    "uk": "Він / Вона контролює правлячу партію.",
                    "ru": "Он / Она контролирует правящую партию.",
                    "pl": "On / Ona kontroluje rządzącą partię.",
                    "fa": "او/او بر حزب حاکم کنترل دارد."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Er / Sie wählt die Minister / Ministerinnen aus.",
                    "en": "He / She selects the ministers.",
                    "ar": "هو / هي يختار الوزراء.",
                    "tr": "O / O bakanları seçer.",
                    "uk": "Він / Вона обирає міністрів.",
                    "ru": "Он / Она выбирает министров.",
                    "pl": "On / Ona wybiera ministrów.",
                    "fa": "او/او وزیران را انتخاب می‌کند."
                }
            },
            {
                "id": 4,
                "text": {
                    "de": "Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor.",
                    "en": "He / She nominates the chancellor for election.",
                    "ar": "هو / هي يرشح المستشار للانتخاب.",
                    "tr": "O / O şansölyeyi seçim için önerir.",
                    "uk": "Він / Вона висуває кандидата на пост канцлера.",
                    "ru": "Он / Она выдвигает канцлера на выборы.",
                    "pl": "On / Ona proponuje kanclerza do wyborів.",
                    "fa": "او/او صدراعظم را برای انتخاب پیشنهاد می‌دهد."
                }
            }
        ],
        "correctAnswer": 4,
        "category": "presidential_tasks"
    }
    ,
    {
        "id": "71",
        "question": {
            "de": "Wo hält sich der deutsche Bundeskanzler / die deutsche Bundeskanzlerin am häufigsten auf?",
            "en": "Where does the German Chancellor spend most of their time?",
            "ar": "أين يقضي المستشار الألماني معظم وقته؟",
            "tr": "Alman Şansölyesi en sık nerede bulunur?",
            "uk": "Де найчастіше перебуває німецький канцлер?",
            "ru": "Где чаще всего находится немецкий канцлер?",
            "pl": "Gdzie najczęściej przebywa niemiecki kanclerz?",
            "fa": "کجا بیشترین زمان را صدراعظم آلمان می‌گذراند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
                    "en": "in Bonn, because the Federal Chancellery and the Bundestag are located there.",
                    "ar": "في بون، حيث يقع المكتب الفيدرالي للوزير ورابطة البوندستاغ هناك.",
                    "tr": "Bonn'da, çünkü burada Federal Şansölyelik ve Bundestag bulunmaktadır.",
                    "uk": "у Бонні, тому що там розташовані Федеральна канцлерська резиденція та Бундестаг.",
                    "ru": "в Бонне, потому что там находятся Федеральная канцлерская резиденция и Бундестаг.",
                    "pl": "w Bonn, ponieważ znajdują się tam Kancelaria Federalna i Bundestag.",
                    "fa": "در بُن، زیرا دفتر فدرال و بوندستاگ در آنجا قرار دارند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
                    "en": "in Berlin, because the Federal Chancellery and the Bundestag are located there.",
                    "ar": "في برلين، حيث يقع المكتب الفيدرالي للوزير ورابطة البوندستاغ هناك.",
                    "tr": "Berlin'de, çünkü burada Federal Şansölyelik ve Bundestag bulunmaktadır.",
                    "uk": "у Берліні, тому що там розташовані Федеральна канцлерська резиденція та Бундестаг.",
                    "ru": "в Берлине, потому что там находятся Федеральная канцлерская резиденция и Бундестаг.",
                    "pl": "w Berlinie, ponieważ znajdują się tam Kancelaria Federalna i Bundestag.",
                    "fa": "در برلین، زیرا دفتر فدرال و بوندستاگ در آنجا قرار دارند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
                    "en": "at Schloss Meseberg, the guesthouse of the federal government, to receive state guests.",
                    "ar": "في قلعة ميسبرغ، بيت الضيافة للحكومة الفيدرالية، لاستقبال الضيوف الرسميين.",
                    "tr": "Meseberg Kalesi'nde, hükümetin misafirhanesinde, devlet misafirlerini ağırlamak için.",
                    "uk": "в замку Мезеберг, гостьовому будинку федерального уряду, щоб приймати державних гостей.",
                    "ru": "в замке Мезеберг, гостевом доме федерального правительства, для приема госгостей.",
                    "pl": "w zamku Meseberg, gościnnej rezydencji rządu federalnego, w celu przyjmowania gości państwowych.",
                    "fa": "در قلعه مزیبرگ، مهمانخانه دولت فدرال، برای پذیرایی از مهمانان دولتی."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der Bundespräsidentin, um Staatsgäste zu empfangen.",
                    "en": "at Schloss Bellevue, the official residence of the Federal President, to receive state guests.",
                    "ar": "في قلعة بيلفيو، المقر الرسمي للرئيس الفيدرالي، لاستقبال الضيوف الرسميين.",
                    "tr": "Bellevue Sarayı'nda, Federal Cumhurbaşkanı'nın resmi konutunda, devlet misafirlerini ağırlamak için.",
                    "uk": "в замку Белевю, офіційній резиденції федерального президента, щоб приймати державних гостей.",
                    "ru": "в замке Белевю, официальной резиденции федерального президента, для приема госгостей.",
                    "pl": "w zamku Bellevue, oficjalnej rezydencji prezydenta federalnego, w celu przyjmowania gości państwowych.",
                    "fa": "در قلعه بله‌ویو، اقامتگاه رسمی رئیس‌جمهور فدرال، برای پذیرایی از مهمانان دولتی."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "chancellor_location"
    },
    {
        "id": "72",
        "question": {
            "de": "Wie heißt der jetzige Bundeskanzler / die jetzige Bundeskanzlerin von Deutschland?",
            "en": "What is the name of the current Chancellor of Germany?",
            "ar": "ما اسم المستشار الحالي لألمانيا؟",
            "tr": "Almanya'nın mevcut şansölyesinin adı nedir?",
            "uk": "Яке ім'я нинішнього канцлера Німеччини?",
            "ru": "Как зовут нынешнего канцлера Германии?",
            "pl": "Jak nazywa się obecny kanclerz Niemiec?",
            "fa": "نام صدراعظم کنونی آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Gerhard Schröder",
                    "en": "Gerhard Schröder",
                    "ar": "غيرهارد شرودر",
                    "tr": "Gerhard Schröder",
                    "uk": "Герхард Шрьодер",
                    "ru": "Герд Шрёдер",
                    "pl": "Gerhard Schröder",
                    "fa": "جرهارد شرودر"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Angela Merkel",
                    "en": "Angela Merkel",
                    "ar": "أنجيلا ميركل",
                    "tr": "Angela Merkel",
                    "uk": "Анґела Меркель",
                    "ru": "Аннегрет Крамп-Карренбауэр",
                    "pl": "Angela Merkel",
                    "fa": "آنگلا مرکل"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Franziska Giffey",
                    "en": "Franziska Giffey",
                    "ar": "فرانزيسكا جيفي",
                    "tr": "Franziska Giffey",
                    "uk": "Франциска Гіффей",
                    "ru": "Франциска Гиффей",
                    "pl": "Franziska Giffey",
                    "fa": "فرانزيسکا گیفای"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Olaf Scholz",
                    "en": "Olaf Scholz",
                    "ar": "أولاف شولتس",
                    "tr": "Olaf Scholz",
                    "uk": "Олаф Шольц",
                    "ru": "Олаф Шольц",
                    "pl": "Olaf Scholz",
                    "fa": "اولاف شولتس"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "chancellor_name"
    }
    ,
    {
        "id": "73",
        "question": {
            "de": "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
            "en": "What are currently the two largest factions in the German Bundestag?",
            "ar": "ما هما أكبر كتلتين في البرلمان الألماني حاليًا؟",
            "tr": "Alman Bundestag'daki en büyük iki fraksiyon şu anda nedir?",
            "uk": "Які дві найбільші фракції в Німецькому Бундестазі зараз?",
            "ru": "Какие две крупнейшие фракции в немецком Бундестаге на данный момент?",
            "pl": "Jakie są obecnie dwie największe frakcje w Niemieckim Bundestagu?",
            "fa": "دو بزرگ‌ترین فراکسیون‌ها در بوندستاگ آلمان در حال حاضر چه نام دارند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "CDU/CSU und SPD.",
                    "en": "CDU/CSU and SPD.",
                    "ar": "CDU/CSU و SPD.",
                    "tr": "CDU/CSU ve SPD.",
                    "uk": "CDU/CSU та SPD.",
                    "ru": "CDU/CSU и SPD.",
                    "pl": "CDU/CSU i SPD.",
                    "fa": "CDU/CSU و SPD."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Die Linke und Bündnis 90/Die Grünen.",
                    "en": "The Left and Alliance 90/The Greens.",
                    "ar": "اليسار و 90/الخضر.",
                    "tr": "Sol ve Yeşiller İttifakı 90.",
                    "uk": "Ліва та Альянс 90/Зелені.",
                    "ru": "Левые и Альянс 90/Зеленые.",
                    "pl": "Lewica i Sojusz 90/Zieloni.",
                    "fa": "چپ و ائتلاف 90/سبزها."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "FDP und SPD.",
                    "en": "FDP and SPD.",
                    "ar": "FDP و SPD.",
                    "tr": "FDP ve SPD.",
                    "uk": "FDP та SPD.",
                    "ru": "FDP и SPD.",
                    "pl": "FDP i SPD.",
                    "fa": "FDP و SPD."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Die Linke und FDP.",
                    "en": "The Left and FDP.",
                    "ar": "اليسار و FDP.",
                    "tr": "Sol ve FDP.",
                    "uk": "Ліва та FDP.",
                    "ru": "Левые и FDP.",
                    "pl": "Lewica i FDP.",
                    "fa": "چپ و FDP."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "bundestag_factions"
    },
    {
        "id": "74",
        "question": {
            "de": "Wie heißt das Parlament für ganz Deutschland?",
            "en": "What is the name of the parliament for all of Germany?",
            "ar": "ما اسم البرلمان الخاص بألمانيا بالكامل؟",
            "tr": "Almanya'nın tümü için parlamentonun adı nedir?",
            "uk": "Яка назва парламенту для всієї Німеччини?",
            "ru": "Как называется парламент всей Германии?",
            "pl": "Jak nazywa się parlament dla całych Niemiec?",
            "fa": "نام پارلمان کل آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Bundesversammlung",
                    "en": "Federal Assembly",
                    "ar": "الهيئة الفيدرالية",
                    "tr": "Federal Meclis",
                    "uk": "Федеральна асамблея",
                    "ru": "Федеральное собрание",
                    "pl": "Zgromadzenie Federalne",
                    "fa": "مجمع فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Volkskammer",
                    "en": "People's Chamber",
                    "ar": "غرفة الشعب",
                    "tr": "Halk Odası",
                    "uk": "Народна палата",
                    "ru": "Народная палата",
                    "pl": "Izba Ludowa",
                    "fa": "اتاق مردم"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Bundestag",
                    "en": "Bundestag",
                    "ar": "بوندستاغ",
                    "tr": "Bundestag",
                    "uk": "Бундестаг",
                    "ru": "Бундестаг",
                    "pl": "Bundestag",
                    "fa": "بوندستاگ"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bundesgerichtshof",
                    "en": "Federal Court of Justice",
                    "ar": "المحكمة الفيدرالية العليا",
                    "tr": "Federal Yüksek Mahkeme",
                    "uk": "Федеральний суд справедливості",
                    "ru": "Федеральный суд",
                    "pl": "Federalny Sąd Najwyższy",
                    "fa": "دادگاه فدرال"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "parliament_name"
    }
    ,
    {
        "id": "75",
        "question": {
            "de": "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
            "en": "What is the name of Germany's current head of state?",
            "ar": "ما اسم رئيس الدولة الحالي في ألمانيا؟",
            "tr": "Almanya'nın mevcut devlet başkanının adı nedir?",
            "uk": "Як звати нинішнього голову держави Німеччини?",
            "ru": "Как зовут нынешнего главу государства Германии?",
            "pl": "Jak nazywa się obecny głowa państwa Niemiec?",
            "fa": "نام رئیس‌جمهور فعلی آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Frank-Walter Steinmeier",
                    "en": "Frank-Walter Steinmeier",
                    "ar": "فرانك-فالتر شتاينماير",
                    "tr": "Frank-Walter Steinmeier",
                    "uk": "Франк-Вальтер Штайнмаєр",
                    "ru": "Франк-Вальтер Штайнмайер",
                    "pl": "Frank-Walter Steinmeier",
                    "fa": "فرانک-والتر اشتاین مایر"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bärbel Bas",
                    "en": "Bärbel Bas",
                    "ar": "باربل باس",
                    "tr": "Bärbel Bas",
                    "uk": "Бärbel Bas",
                    "ru": "Бärbel Bas",
                    "pl": "Bärbel Bas",
                    "fa": "باربل باس"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Bodo Ramelow",
                    "en": "Bodo Ramelow",
                    "ar": "بودو راملو",
                    "tr": "Bodo Ramelow",
                    "uk": "Бодо Рамелов",
                    "ru": "Бодо Рамелов",
                    "pl": "Bodo Ramelow",
                    "fa": "بودو راملو"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Joachim Gauck",
                    "en": "Joachim Gauck",
                    "ar": "يواكيم غوك",
                    "tr": "Joachim Gauck",
                    "uk": "Йоахім Гаука",
                    "ru": "Йоахим Гаук",
                    "pl": "Joachim Gauck",
                    "fa": "یواخیم گاک"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "head_of_state"
    },
    {
        "id": "76",
        "question": {
            "de": "Was bedeutet die Abkürzung CDU in Deutschland?",
            "en": "What does the abbreviation CDU stand for in Germany?",
            "ar": "ماذا تعني اختصار CDU في ألمانيا؟",
            "tr": "Almanya'da CDU kısaltması ne anlama geliyor?",
            "uk": "Що означає абревіатура CDU в Німеччині?",
            "ru": "Что означает аббревиатура CDU в Германии?",
            "pl": "Co oznacza skrót CDU w Niemczech?",
            "fa": "اختصار CDU در آلمان به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Christliche Deutsche Union",
                    "en": "Christian German Union",
                    "ar": "الاتحاد الألماني المسيحي",
                    "tr": "Hristiyan Alman Birliği",
                    "uk": "Християнський Німецький Союз",
                    "ru": "Христианский германский союз",
                    "pl": "Chrześcijański Związek Niemiecki",
                    "fa": "اتحادیه آلمانی مسیحی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Club Deutscher Unternehmer",
                    "en": "Club of German Entrepreneurs",
                    "ar": "نادي رجال الأعمال الألمان",
                    "tr": "Alman Girişimciler Kulübü",
                    "uk": "Клуб німецьких підприємців",
                    "ru": "Клуб немецких предпринимателей",
                    "pl": "Klub Niemieckich Przedsiębiorców",
                    "fa": "باشگاه کارآفرینان آلمانی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Christlicher Deutscher Umweltschutz",
                    "en": "Christian German Environmental Protection",
                    "ar": "حماية البيئة الألمانية المسيحية",
                    "tr": "Hristiyan Alman Çevre Koruma",
                    "uk": "Християнський німецький захист навколишнього середовища",
                    "ru": "Христианская защита окружающей среды в Германии",
                    "pl": "Chrześcijańska Niemiecka Ochrona Środowiska",
                    "fa": "حفاظت از محیط زیست آلمان مسیحی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Christlich Demokratische Union",
                    "en": "Christian Democratic Union",
                    "ar": "الاتحاد الديمقراطي المسيحي",
                    "tr": "Hristiyan Demokrat Birliği",
                    "uk": "Християнсько-демократичний союз",
                    "ru": "Христианско-демократический союз",
                    "pl": "Chrześcijańsko-Demokratyczna Unia",
                    "fa": "اتحادیه دموکرات مسیحی"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "abbreviation_meaning"
    }
    ,
    {
        "id": "77",
        "question": {
            "de": "Was ist die Bundeswehr?",
            "en": "What is the Bundeswehr?",
            "ar": "ما هي البوندسفير؟",
            "tr": "Bundeswehr nedir?",
            "uk": "Що таке Бундесвер?",
            "ru": "Что такое Бундесвер?",
            "pl": "Co to jest Bundeswehr?",
            "fa": "بوندسور چه بود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die deutsche Polizei",
                    "en": "the German police",
                    "ar": "الشرطة الألمانية",
                    "tr": "Alman polisi",
                    "uk": "німецька поліція",
                    "ru": "немецкая полиция",
                    "pl": "niemiecka policja",
                    "fa": "پلیس آلمان"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "ein deutscher Hafen",
                    "en": "a German port",
                    "ar": "ميناء ألماني",
                    "tr": "Alman limanı",
                    "uk": "німецький порт",
                    "ru": "немецкий порт",
                    "pl": "niemiecki port",
                    "fa": "یک بندر آلمانی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "eine deutsche Bürgerinitiative",
                    "en": "a German citizen initiative",
                    "ar": "مبادرة المواطنين الألمان",
                    "tr": "Alman vatandaş girişimi",
                    "uk": "німецька громадська ініціатива",
                    "ru": "немецкая гражданская инициатива",
                    "pl": "niemiecka inicjatywa obywatelska",
                    "fa": "یک ابتکار عمل شهروندی آلمانی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die deutsche Armee",
                    "en": "the German army",
                    "ar": "الجيش الألماني",
                    "tr": "Alman ordusu",
                    "uk": "німецька армія",
                    "ru": "немецкая армия",
                    "pl": "niemiecka armia",
                    "fa": "ارتش آلمان"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "bundeswehr"
    },
    {
        "id": "78",
        "question": {
            "de": "Was bedeutet die Abkürzung SPD?",
            "en": "What does the abbreviation SPD stand for?",
            "ar": "ماذا تعني اختصار SPD؟",
            "tr": "SPD kısaltması ne anlama geliyor?",
            "uk": "Що означає абревіатура SPD?",
            "ru": "Что означает аббревиатура SPD?",
            "pl": "Co oznacza skrót SPD?",
            "fa": "اختصار SPD به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Sozialistische Partei Deutschlands",
                    "en": "Socialist Party of Germany",
                    "ar": "الحزب الاشتراكي الألماني",
                    "tr": "Almanya Sosyalist Partisi",
                    "uk": "Соціалістична партія Німеччини",
                    "ru": "Социалистическая партия Германии",
                    "pl": "Socjalistyczna Partia Niemiec",
                    "fa": "حزب سوسیالیست آلمان"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Sozialpolitische Partei Deutschlands",
                    "en": "Social Policy Party of Germany",
                    "ar": "الحزب السياسي الاجتماعي الألماني",
                    "tr": "Almanya Sosyal Politika Partisi",
                    "uk": "Партія соціальної політики Німеччини",
                    "ru": "Партия социальной политики Германии",
                    "pl": "Partia Polityki Społecznej Niemiec",
                    "fa": "حزب سیاست اجتماعی آلمان"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Sozialdemokratische Partei Deutschlands",
                    "en": "Social Democratic Party of Germany",
                    "ar": "الحزب الديمقراطي الاجتماعي الألماني",
                    "tr": "Almanya Sosyal Demokrat Partisi",
                    "uk": "Соціал-демократична партія Німеччини",
                    "ru": "Социал-демократическая партия Германии",
                    "pl": "Socjaldemokratyczna Partia Niemiec",
                    "fa": "حزب سوسیال دموکرات آلمان"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Sozialgerechte Partei Deutschlands",
                    "en": "Socially Just Party of Germany",
                    "ar": "الحزب العادل اجتماعيًا في ألمانيا",
                    "tr": "Almanya Sosyal Adalet Partisi",
                    "uk": "Соціально справедлива партія Німеччини",
                    "ru": "Социально справедливая партия Германии",
                    "pl": "Sprawiedliwa Partia Niemiec",
                    "fa": "حزب عدالت اجتماعی آلمان"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "abbreviation_meaning"
    }
    ,
    {
        "id": "79",
        "question": {
            "de": "Was bedeutet die Abkürzung FDP in Deutschland?",
            "en": "What does the abbreviation FDP stand for in Germany?",
            "ar": "ماذا تعني اختصار FDP في ألمانيا؟",
            "tr": "Almanya'da FDP kısaltması ne anlama geliyor?",
            "uk": "Що означає абревіатура FDP в Німеччині?",
            "ru": "Что означает аббревиатура FDP в Германии?",
            "pl": "Co oznacza skrót FDP w Niemczech?",
            "fa": "اختصار FDP در آلمان به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Friedliche Demonstrative Partei",
                    "en": "Peaceful Demonstrative Party",
                    "ar": "الحزب الديموقراطي السلمي",
                    "tr": "Barışçıl Gösterici Parti",
                    "uk": "Мирна Демонстративна Партія",
                    "ru": "Мирная Демонстративная Партия",
                    "pl": "Partia Pokoju Demonstracyjnego",
                    "fa": "حزب تظاهرات صلح آمیز"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Freie Deutschland Partei",
                    "en": "Free Germany Party",
                    "ar": "حزب ألمانيا الحرة",
                    "tr": "Özgür Almanya Partisi",
                    "uk": "Партія Вільної Німеччини",
                    "ru": "Партия Свободной Германии",
                    "pl": "Partia Wolnych Niemiec",
                    "fa": "حزب آلمان آزاد"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Führende Demokratische Partei",
                    "en": "Leading Democratic Party",
                    "ar": "الحزب الديمقراطي الرائد",
                    "tr": "Önde Gelen Demokratik Parti",
                    "uk": "Партія Провідних Демократів",
                    "ru": "Ведущая Демократическая Партия",
                    "pl": "Wiodąca Partia Demokratyczna",
                    "fa": "حزب دموکراتیک پیشرو"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Freie Demokratische Partei",
                    "en": "Free Democratic Party",
                    "ar": "الحزب الديمقراطي الحر",
                    "tr": "Özgür Demokratik Parti",
                    "uk": "Вільна Демократична Партія",
                    "ru": "Свободная Демократическая Партия",
                    "pl": "Wolna Partia Demokratyczna",
                    "fa": "حزب دموکراتیک آزاد"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "abbreviation_meaning"
    },
    {
        "id": "80",
        "question": {
            "de": "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
            "en": "Which court in Germany is responsible for interpreting the Basic Law?",
            "ar": "أي محكمة في ألمانيا مسؤولة عن تفسير القانون الأساسي؟",
            "tr": "Almanya'da Anayasa'yı yorumlamaktan sorumlu mahkeme hangisidir?",
            "uk": "Який суд у Німеччині відповідає за тлумачення Основного Закону?",
            "ru": "Какой суд в Германии отвечает за интерпретацию Основного Закона?",
            "pl": "Który sąd w Niemczech jest odpowiedzialny za interpretację Ustawy Zasadniczej?",
            "fa": "کدام دادگاه در آلمان مسئول تفسیر قانون اساسی است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Oberlandesgericht",
                    "en": "Higher Regional Court",
                    "ar": "المحكمة الإقليمية العليا",
                    "tr": "Bölge Mahkemesi",
                    "uk": "Вищий регіональний суд",
                    "ru": "Высший региональный суд",
                    "pl": "Wyższy Sąd Krajowy",
                    "fa": "دادگاه عالی منطقه‌ای"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Amtsgericht",
                    "en": "Local Court",
                    "ar": "المحكمة المحلية",
                    "tr": "Yerel Mahkeme",
                    "uk": "Місцевий суд",
                    "ru": "Местный суд",
                    "pl": "Sąd Rejonowy",
                    "fa": "دادگاه محلی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Bundesverfassungsgericht",
                    "en": "Federal Constitutional Court",
                    "ar": "المحكمة الفيدرالية للدستور",
                    "tr": "Federal Anayasa Mahkemesi",
                    "uk": "Федеральний конституційний суд",
                    "ru": "Федеральный конституционный суд",
                    "pl": "Federalny Trybunał Konstytucyjny",
                    "fa": "دادگاه قانون اساسی فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Verwaltungsgericht",
                    "en": "Administrative Court",
                    "ar": "المحكمة الإدارية",
                    "tr": "İdare Mahkemesi",
                    "uk": "Адміністративний суд",
                    "ru": "Административный суд",
                    "pl": "Sąd Administracyjny",
                    "fa": "دادگاه اداری"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "court_responsibility"
    }
    ,
    {
        "id": "81",
        "question": {
            "de": "Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?",
            "en": "Who elects the Federal Chancellor in Germany?",
            "ar": "من ينتخب المستشار الفيدرالي في ألمانيا؟",
            "tr": "Almanya'da Federal Şansölyeyi kim seçer?",
            "uk": "Хто обирає федерального канцлера в Німеччині?",
            "ru": "Кто выбирает федерального канцлера в Германии?",
            "pl": "Kto wybiera kanclerza federalnego w Niemczech?",
            "fa": "چه کسی صدراعظم فدرال را در آلمان انتخاب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der Bundesrat",
                    "en": "the Federal Council",
                    "ar": "مجلس الفيدرالية",
                    "tr": "Federal Konsey",
                    "uk": "Федеральна рада",
                    "ru": "Федеральный совет",
                    "pl": "Rada Federalna",
                    "fa": "شورای فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Bundesversammlung",
                    "en": "the Federal Assembly",
                    "ar": "الهيئة الفيدرالية",
                    "tr": "Federal Meclis",
                    "uk": "Федеральні збори",
                    "ru": "Федеральное собрание",
                    "pl": "Zgromadzenie Federalne",
                    "fa": "مجمع فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das Volk",
                    "en": "the people",
                    "ar": "الشعب",
                    "tr": "halk",
                    "uk": "народ",
                    "ru": "народ",
                    "pl": "lud",
                    "fa": "مردم"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "der Bundestag",
                    "en": "the Federal Diet",
                    "ar": "البرلمان الفيدرالي",
                    "tr": "Federal Meclis",
                    "uk": "Федеральний парламент",
                    "ru": "Федеральное собрание",
                    "pl": "Bundestag",
                    "fa": "مجلس فدرال"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "chancellor_election"
    },
    {
        "id": "82",
        "question": {
            "de": "Wer leitet das deutsche Bundeskabinett?",
            "en": "Who leads the German Federal Cabinet?",
            "ar": "من يقود الحكومة الفيدرالية الألمانية؟",
            "tr": "Alman Federal Kabinesine kim liderlik ediyor?",
            "uk": "Хто очолює німецький федеральний кабінет?",
            "ru": "Кто возглавляет немецкий федеральный кабинет?",
            "pl": "Kto kieruje niemieckim rządem federalnym?",
            "fa": "چه کسی رهبری کابینه فدرال آلمان را بر عهده دارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der Bundestagspräsident / die Bundestagspräsidentin",
                    "en": "the President of the Bundestag",
                    "ar": "رئيس / رئيسة البوندستاغ",
                    "tr": "Bundestag Başkanı",
                    "uk": "Президент Бундестагу",
                    "ru": "Президент Бундестага",
                    "pl": "Prezydent Bundestagu",
                    "fa": "رئیس بوندستاگ"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Bundespräsident / die Bundespräsidentin",
                    "en": "the Federal President",
                    "ar": "الرئيس الفيدرالي",
                    "tr": "Federal Başkan",
                    "uk": "Федеральний президент",
                    "ru": "Федеральный президент",
                    "pl": "Prezydent Federalny",
                    "fa": "رئیس‌جمهور فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "der Bundeskanzler / die Bundeskanzlerin",
                    "en": "the Federal Chancellor",
                    "ar": "المستشار الفيدرالي",
                    "tr": "Federal Şansölye",
                    "uk": "Федеральний канцлер",
                    "ru": "Федеральный канцлер",
                    "pl": "Kanclerz Federalny",
                    "fa": "صدراعظم فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "der Bundesratspräsident / die Bundesratspräsidentin",
                    "en": "the President of the Federal Council",
                    "ar": "رئيس / رئيسة مجلس الفيدرالية",
                    "tr": "Federal Konsey Başkanı",
                    "uk": "Президент Федеральної ради",
                    "ru": "Президент Федерального совета",
                    "pl": "Prezydent Rady Federalnej",
                    "fa": "رئیس شورای فدرال"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "cabinet_leader"
    }
    ,
    {
        "id": "83",
        "question": {
            "de": "Wer wählt den deutschen Bundeskanzler / die deutsche Bundeskanzlerin?",
            "en": "Who elects the German Federal Chancellor?",
            "ar": "من ينتخب المستشار الفيدرالي الألماني؟",
            "tr": "Alman Federal Şansölyesini kim seçer?",
            "uk": "Хто обирає німецького федерального канцлера?",
            "ru": "Кто выбирает немецкого федерального канцлера?",
            "pl": "Kto wybiera niemieckiego kanclerza federalnego?",
            "fa": "چه کسی صدراعظم فدرال آلمان را انتخاب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "das Volk",
                    "en": "the people",
                    "ar": "الشعب",
                    "tr": "halk",
                    "uk": "народ",
                    "ru": "народ",
                    "pl": "lud",
                    "fa": "مردم"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Bundesversammlung",
                    "en": "the Federal Assembly",
                    "ar": "الهيئة الفيدرالية",
                    "tr": "Federal Meclis",
                    "uk": "Федеральні збори",
                    "ru": "Федеральное собрание",
                    "pl": "Zgromadzenie Federalne",
                    "fa": "مجمع فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "der Bundestag",
                    "en": "the Federal Diet",
                    "ar": "البرلمان الفيدرالي",
                    "tr": "Federal Meclis",
                    "uk": "Федеральний парламент",
                    "ru": "Федеральное собрание",
                    "pl": "Bundestag",
                    "fa": "مجلس فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Bundesregierung",
                    "en": "the Federal Government",
                    "ar": "الحكومة الفيدرالية",
                    "tr": "Federal Hükümet",
                    "uk": "Федеральний уряд",
                    "ru": "Федеральное правительство",
                    "pl": "Rząd federalny",
                    "fa": "دولت فدرال"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "chancellor_election"
    },
    {
        "id": "84",
        "question": {
            "de": "Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie …",
            "en": "What is the main task of the German Federal President?",
            "ar": "ما هي المهمة الرئيسية للرئيس الفيدرالي الألماني؟",
            "tr": "Alman Federal Başkanının / Başkanının ana görevi nedir?",
            "uk": "Яка головна задача федерального президента Німеччини?",
            "ru": "Какова главная задача федерального президента Германии?",
            "pl": "Jakie jest główne zadanie niemieckiego prezydenta federalnego?",
            "fa": "وظیفه اصلی رئیس‌جمهور فدرال آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "regiert das Land.",
                    "en": "governs the country.",
                    "ar": "يدير البلاد.",
                    "tr": "Ülkeyi yönetiyor.",
                    "uk": "Керує країною.",
                    "ru": "Управляет страной.",
                    "pl": "Rządzi krajem.",
                    "fa": "کشور را اداره می‌کند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "entwirft die Gesetze.",
                    "en": "drafts the laws.",
                    "ar": "يضع القوانين.",
                    "tr": "Kanunları taslağını oluşturuyor.",
                    "uk": "Розробляє закони.",
                    "ru": "Разрабатывает законы.",
                    "pl": "Tworzy przepisy.",
                    "fa": "قوانین را تدوین می‌کند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "repräsentiert das Land.",
                    "en": "represents the country.",
                    "ar": "يمثل البلاد.",
                    "tr": "Ülkeyi temsil ediyor.",
                    "uk": "Представляє країну.",
                    "ru": "Представляет страну.",
                    "pl": "Reprezentuje kraj.",
                    "fa": "کشور را نمایندگی می‌کند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "überwacht die Einhaltung der Gesetze.",
                    "en": "monitors compliance with the laws.",
                    "ar": "يراقب الامتثال للقوانين.",
                    "tr": "Yasalara uyulmasını denetliyor.",
                    "uk": "Контролює дотримання законів.",
                    "ru": "Контролирует соблюдение законов.",
                    "pl": "Nadzoruje przestrzeganie przepisów.",
                    "fa": "نظارت بر اجرای قوانین."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "presidential_tasks"
    }
    ,
    {
        "id": "85",
        "question": {
            "de": "Wer bildet den deutschen Bundesrat?",
            "en": "Who constitutes the German Federal Council?",
            "ar": "من يشكل مجلس الاتحاد الألماني؟",
            "tr": "Alman Federal Konseyi'ni kim oluşturur?",
            "uk": "Хто формує Німецьку федеральну раду?",
            "ru": "Кто составляет немецкий федеральный совет?",
            "pl": "Kto tworzy niemiecki Bundesrat?",
            "fa": "چه کسی شورای فدرال آلمان را تشکیل می‌دهد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Abgeordneten des Bundestages",
                    "en": "the members of the Bundestag",
                    "ar": "أعضاء البوندستاغ",
                    "tr": "Bundestag üyeleri",
                    "uk": "Члени Бундестагу",
                    "ru": "Члены Бундестага",
                    "pl": "Członkowie Bundestagu",
                    "fa": "اعضای بوندستاگ"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Minister und Ministerinnen der Bundesregierung",
                    "en": "the ministers of the Federal Government",
                    "ar": "وزراء الحكومة الفيدرالية",
                    "tr": "Federal Hükümetin bakanları",
                    "uk": "Міністри федерального уряду",
                    "ru": "Министры федерального правительства",
                    "pl": "Ministrowie rządu federalnego",
                    "fa": "وزرای دولت فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Regierungsvertreter der Bundesländer",
                    "en": "the representatives of the federal states",
                    "ar": "ممثلوا الولايات الفيدرالية",
                    "tr": "Eyaletlerin hükümet temsilcileri",
                    "uk": "Представники федеральних земель",
                    "ru": "Представители федеральных земель",
                    "pl": "Przedstawiciele krajów związkowych",
                    "fa": "نمایندگان ایالت‌های فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Parteimitglieder",
                    "en": "the party members",
                    "ar": "أعضاء الحزب",
                    "tr": "Parti üyeleri",
                    "uk": "Члени партії",
                    "ru": "Члены партии",
                    "pl": "Członkowie partii",
                    "fa": "اعضای حزب"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "federal_council"
    },
    {
        "id": "86",
        "question": {
            "de": "Wer wählt in Deutschland den Bundespräsidenten / die Bundespräsidentin?",
            "en": "Who elects the Federal President in Germany?",
            "ar": "من ينتخب الرئيس الفيدرالي في ألمانيا؟",
            "tr": "Almanya'da federal başkanı kim seçer?",
            "uk": "Хто обирає федерального президента в Німеччині?",
            "ru": "Кто выбирает федерального президента в Германии?",
            "pl": "Kto wybiera prezydenta federalnego w Niemczech?",
            "fa": "چه کسی رئیس‌جمهور فدرال را در آلمان انتخاب می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die Bundesversammlung",
                    "en": "the Federal Assembly",
                    "ar": "الهيئة الفيدرالية",
                    "tr": "Federal Meclis",
                    "uk": "Федеральні збори",
                    "ru": "Федеральное собрание",
                    "pl": "Zgromadzenie Federalne",
                    "fa": "مجمع فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Bundesrat",
                    "en": "the Federal Council",
                    "ar": "مجلس الاتحاد",
                    "tr": "Federal Konsey",
                    "uk": "Федеральна рада",
                    "ru": "Федеральный совет",
                    "pl": "Bundesrat",
                    "fa": "شورای فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "das Bundesparlament",
                    "en": "the Federal Parliament",
                    "ar": "البرلمان الفيدرالي",
                    "tr": "Federal Parlamento",
                    "uk": "Федеральний парламент",
                    "ru": "Федеральный парламент",
                    "pl": "Parlament federalny",
                    "fa": "پارلمان فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "das Bundesverfassungsgericht",
                    "en": "the Federal Constitutional Court",
                    "ar": "المحكمة الدستورية الفيدرالية",
                    "tr": "Federal Anayasa Mahkemesi",
                    "uk": "Федеральний конституційний суд",
                    "ru": "Федеральный конституционный суд",
                    "pl": "Federalny Trybunał Konstytucyjny",
                    "fa": "دیوان عالی کشور فدرال"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "presidential_election"
    }
    ,
    {
        "id": "87",
        "question": {
            "de": "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
            "en": "Who is the head of state of the Federal Republic of Germany?",
            "ar": "من هو رأس الدولة في جمهورية ألمانيا الاتحادية؟",
            "tr": "Alman Federal Cumhuriyeti'nin devlet başkanı kimdir?",
            "uk": "Хто є главою держави Федеральної Республіки Німеччина?",
            "ru": "Кто является главой государства Федеративной Республики Германия?",
            "pl": "Kto jest głową państwa Federalnej Republiki Niemiec?",
            "fa": "رئیس‌جمهور جمهوری فدرال آلمان کیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "der Bundeskanzler / die Bundeskanzlerin",
                    "en": "the Federal Chancellor",
                    "ar": "المستشار الفيدرالي",
                    "tr": "Federal Şansölye",
                    "uk": "Федеральний канцлер",
                    "ru": "Федеральный канцлер",
                    "pl": "Kanclerz federalny",
                    "fa": "صدر اعظم فدرال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "der Bundespräsident / die Bundespräsidentin",
                    "en": "the Federal President",
                    "ar": "الرئيس الفيدرالي",
                    "tr": "Federal Başkan",
                    "uk": "Федеральний президент",
                    "ru": "Федеральный президент",
                    "pl": "Prezydent federalny",
                    "fa": "رئیس‌جمهور فدرال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "der Bundesratspräsident / die Bundesratspräsidentin",
                    "en": "the President of the Federal Council",
                    "ar": "رئيس مجلس الاتحاد",
                    "tr": "Federal Konsey Başkanı",
                    "uk": "Президент Федеральної ради",
                    "ru": "Президент Федерального совета",
                    "pl": "Przewodniczący Bundesratu",
                    "fa": "رئیس شورای فدرال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "der Bundestagspräsident / die Bundestagspräsidentin",
                    "en": "the President of the Bundestag",
                    "ar": "رئيس البوندستاغ",
                    "tr": "Bundestag Başkanı",
                    "uk": "Президент Бундестагу",
                    "ru": "Президент Бундестага",
                    "pl": "Przewodniczący Bundestagu",
                    "fa": "رئیس بوندستاگ"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "head_of_state"
    },
    {
        "id": "88",
        "question": {
            "de": "Die parlamentarische Opposition im Deutschen Bundestag …",
            "en": "The parliamentary opposition in the German Bundestag ...",
            "ar": "المعارضة البرلمانية في البوندستاغ الألماني ...",
            "tr": "Alman Bundestag'daki parlamenter muhalefet ...",
            "uk": "Парламентська опозиція в Німецькому Бундестазі ...",
            "ru": "Парламентская оппозиция в немецком Бундестаге ...",
            "pl": "Parlamentarna opozycja w niemieckim Bundestagu ...",
            "fa": "مخالفان پارلمانی در بوندستاگ آلمان ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "kontrolliert die Regierung.",
                    "en": "controls the government.",
                    "ar": "تتحكم في الحكومة.",
                    "tr": "hükümeti kontrol eder.",
                    "uk": "контролює уряд.",
                    "ru": "контролирует правительство.",
                    "pl": "kontroluje rząd.",
                    "fa": "دولت را کنترل می‌کند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "entscheidet, wer Bundesminister / Bundesministerin wird.",
                    "en": "decides who becomes Federal Minister.",
                    "ar": "يقرر من يصبح وزيرًا فيدراليًا.",
                    "tr": "federal bakan kim olacağına karar verir.",
                    "uk": "вирішує, хто стане федеральним міністром.",
                    "ru": "решает, кто станет федеральным министром.",
                    "pl": "decyduje, kto zostanie ministrem federalnym.",
                    "fa": "تصمیم می‌گیرد که چه کسی وزیر فدرال شود."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "bestimmt, wer im Bundesrat sitzt.",
                    "en": "determines who sits in the Federal Council.",
                    "ar": "يحدد من يجلس في مجلس الاتحاد.",
                    "tr": "Federal Konsey'de kimin oturacağını belirler.",
                    "uk": "визначає, хто сидить у Федеральній раді.",
                    "ru": "определяет, кто сидит в Федеральном совете.",
                    "pl": "określa, kto zasiada w Bundesracie.",
                    "fa": "تعیین می‌کند چه کسی در شورای فدرال نشسته است."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "schlägt die Regierungschefs / Regierungschefinnen der Länder vor.",
                    "en": "proposes the heads of government of the states.",
                    "ar": "يقترح رؤساء حكومات الولايات.",
                    "tr": "eyaletlerin hükümet başkanlarını önerir.",
                    "uk": "пропонує голів урядів штатів.",
                    "ru": "предлагает глав правительств земель.",
                    "pl": "proponuje szefów rządów krajów.",
                    "fa": "سران دولت‌های ایالتی را پیشنهاد می‌دهد."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "parliamentary_opposition"
    }
    ,
    {
        "id": "89",
        "question": {
            "de": "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
            "en": "What do you call the association of representatives of a party in the parliament in Germany?",
            "ar": "كيف تُسمى في ألمانيا جمعية الممثلين لحزب في البرلمان؟",
            "tr": "Almanya'da bir partinin parlamentodaki temsilcilerinin birliğine ne denir?",
            "uk": "Як називається в Німеччині об'єднання представників партії в парламенті?",
            "ru": "Как называется в Германии объединение депутатов партии в парламенте?",
            "pl": "Jak nazywa się w Niemczech zrzeszenie przedstawicieli partii w parlamencie?",
            "fa": "در آلمان به اتحاد نمایندگان یک حزب در پارلمان چه می‌گویند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Verband",
                    "en": "association",
                    "ar": "رابطة",
                    "tr": "dernek",
                    "uk": "асоціація",
                    "ru": "ассоциация",
                    "pl": "stowarzyszenie",
                    "fa": "انجمن"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Ältestenrat",
                    "en": "Council of Elders",
                    "ar": "مجلس الشيوخ",
                    "tr": "Yaşlılar Konseyi",
                    "uk": "Рада старійшин",
                    "ru": "Совет старейшин",
                    "pl": "Rada starszych",
                    "fa": "شورای سالخوردگان"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Fraktion",
                    "en": "faction",
                    "ar": "فصيل",
                    "tr": "fraksiyon",
                    "uk": "фракція",
                    "ru": "фракция",
                    "pl": "frakcja",
                    "fa": "جناح"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Opposition",
                    "en": "opposition",
                    "ar": "معارضة",
                    "tr": "muhalefet",
                    "uk": "опозиція",
                    "ru": "оппозиция",
                    "pl": "opozycja",
                    "fa": "مخالفان"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "parliamentary_faction"
    },
    {
        "id": "90",
        "question": {
            "de": "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
            "en": "The German federal states participate in federal legislation through ...",
            "ar": "تشارك الولايات الألمانية في التشريع الفيدرالي من خلال ...",
            "tr": "Alman eyaletleri federal yasama sürecine ... katılır.",
            "uk": "Німецькі федеральні землі беруть участь у федеральному законодавстві через ...",
            "ru": "Немецкие федеральные земли участвуют в федеральном законодательстве через ...",
            "pl": "Niemieckie kraje związkowe uczestniczą w federalnym ustawodawstwie poprzez ...",
            "fa": "ایالت‌های آلمان از طریق ... در قانون‌گذاری فدرال شرکت می‌کنند."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "den Bundesrat.",
                    "en": "the Federal Council.",
                    "ar": "مجلس الاتحاد.",
                    "tr": "Federal Konsey.",
                    "uk": "Федеральну раду.",
                    "ru": "Федеральный совет.",
                    "pl": "Bundesrat.",
                    "fa": "شورای فدرال."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Bundesversammlung.",
                    "en": "the Federal Assembly.",
                    "ar": "الجمعية الفيدرالية.",
                    "tr": "Federal Meclis.",
                    "uk": "Федеральні збори.",
                    "ru": "Федеральное собрание.",
                    "pl": "Zgromadzenie Federalne.",
                    "fa": "مجمع فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "den Bundestag.",
                    "en": "the Bundestag.",
                    "ar": "البوندستاغ.",
                    "tr": "Bundestag.",
                    "uk": "Бундестаг.",
                    "ru": "Бундестаг.",
                    "pl": "Bundestag.",
                    "fa": "بوندستاگ."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Bundesregierung.",
                    "en": "the Federal Government.",
                    "ar": "الحكومة الفيدرالية.",
                    "tr": "Federal Hükümet.",
                    "uk": "Федеральний уряд.",
                    "ru": "Федеральное правительство.",
                    "pl": "Rząd federalny.",
                    "fa": "دولت فدرال."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "federal_legislation"
    }
    ,
    {
        "id": "91",
        "question": {
            "de": "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
            "en": "In Germany, a change of government in a federal state can have an impact on federal politics. Governing will be ...",
            "ar": "في ألمانيا، يمكن أن يؤثر تغيير الحكومة في ولاية على السياسة الفيدرالية. ستكون الحكومة ...",
            "tr": "Almanya'da bir eyaletteki hükümet değişikliği federal politikayı etkileyebilir. Yönetim ... olacak.",
            "uk": "В Німеччині зміна уряду в федеральній землі може вплинути на федеральну політику. Управління буде ...",
            "ru": "В Германии смена правительства в федеральной земле может повлиять на федеральную политику. Управление будет ...",
            "pl": "W Niemczech zmiana rządu w kraju związkowym może wpłynąć na politykę federalną. Rządzenie będzie ...",
            "fa": "در آلمان، تغییر دولت در یک ایالت می‌تواند بر سیاست فدرال تأثیر بگذارد. اداره کردن ... خواهد بود."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
                    "en": "more difficult if this changes the majority in the Bundestag.",
                    "ar": "سوف يكون أكثر صعوبة إذا أدى ذلك إلى تغيير الأغلبية في البوندستاغ.",
                    "tr": "Bundestag'daki çoğunluğu değiştirirse, daha zor olacaktır.",
                    "uk": "складніше, якщо це змінює більшість у Бундестазі.",
                    "ru": "более сложным, если это изменит большинство в Бундестаге.",
                    "pl": "trudniejsze, jeśli zmienia to większość w Bundestagu.",
                    "fa": "اگر این امر به تغییر اکثریت در بوندستاغ منجر شود، سخت‌تر خواهد شد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
                    "en": "easier if this brings new parties into the Federal Council.",
                    "ar": "سيكون أسهل إذا أدت هذه الخطوة إلى دخول أحزاب جديدة إلى مجلس الاتحاد.",
                    "tr": "Bu yeni partilerin Federal Konsey'e girmesi durumunda, daha kolay olacaktır.",
                    "uk": "легше, якщо це призводить до появи нових партій у Федеральній раді.",
                    "ru": "легче, если это приведет к появлению новых партий в Федеральном совете.",
                    "pl": "łatwiejsze, jeśli nowe partie wejdą do Bundesratu.",
                    "fa": "اگر این باعث ورود احزاب جدید به شورای فدرال شود، آسان‌تر خواهد بود."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
                    "en": "more difficult if this changes the majority in the Federal Council.",
                    "ar": "سيكون أكثر صعوبة إذا أدى ذلك إلى تغيير الأغلبية في مجلس الاتحاد.",
                    "tr": "Federal Konsey'deki çoğunluğu değiştirirse, daha zor olacaktır.",
                    "uk": "складніше, якщо це змінює більшість у Федеральній раді.",
                    "ru": "более сложным, если это изменит большинство в Федеральном совете.",
                    "pl": "trudniejsze, jeśli zmienia to większość w Bundesracie.",
                    "fa": "اگر این باعث تغییر اکثریت در شورای فدرال شود، سخت‌تر خواهد شد."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "leichter, wenn es sich um ein reiches Bundesland handelt.",
                    "en": "easier if it is a wealthy federal state.",
                    "ar": "سيكون أسهل إذا كانت الولاية غنية.",
                    "tr": "Zengin bir eyaletse, daha kolay olacaktır.",
                    "uk": "легше, якщо це багатий федеральний штат.",
                    "ru": "легче, если это богатая федеральная земля.",
                    "pl": "łatwiejsze, jeśli to bogaty kraj związkowy.",
                    "fa": "اگر این ایالت ثروتمندی باشد، آسان‌تر خواهد بود."
                }
            }
        ],
        "correctAnswer": 2,
        "category": "government_impact"
    },
    {
        "id": "92",
        "question": {
            "de": "Was bedeutet die Abkürzung CSU in Deutschland?",
            "en": "What does the abbreviation CSU stand for in Germany?",
            "ar": "ماذا تعني اختصار CSU في ألمانيا؟",
            "tr": "Almanya'da CSU kısaltması ne anlama geliyor?",
            "uk": "Що означає абревіатура CSU в Німеччині?",
            "ru": "Что означает аббревиатура CSU в Германии?",
            "pl": "Co oznacza skrót CSU w Niemczech?",
            "fa": "اختصار CSU در آلمان به چه معناست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Christlich Sichere Union",
                    "en": "Christian Secure Union",
                    "ar": "الاتحاد المسيحي الآمن",
                    "tr": "Hristiyan Güvenli Birlik",
                    "uk": "Християнський безпечний союз",
                    "ru": "Христианский безопасный союз",
                    "pl": "Chrześcijański Związek Bezpieczeństwa",
                    "fa": "اتحادیه مسیحی امن"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Christlich Süddeutsche Union",
                    "en": "Christian South German Union",
                    "ar": "الاتحاد المسيحي لجنوب ألمانيا",
                    "tr": "Hristiyan Güney Almanya Birliği",
                    "uk": "Християнський союз Південної Німеччини",
                    "ru": "Христианский союз Южной Германии",
                    "pl": "Chrześcijański Związek Południowych Niemiec",
                    "fa": "اتحادیه مسیحی آلمان جنوبی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Christlich Sozialer Unternehmerverband",
                    "en": "Christian Social Entrepreneur Association",
                    "ar": "رابطة رواد الأعمال المسيحيين الاجتماعيين",
                    "tr": "Hristiyan Sosyal Girişimciler Derneği",
                    "uk": "Християнська асоціація соціальних підприємців",
                    "ru": "Христианская ассоциация социальных предпринимателей",
                    "pl": "Chrześcijańskie Stowarzyszenie Przedsiębiorców Społecznych",
                    "fa": "انجمن کارآفرینان اجتماعی مسیحی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Christlich Soziale Union",
                    "en": "Christian Social Union",
                    "ar": "الاتحاد المسيحي الاجتماعي",
                    "tr": "Hristiyan Sosyal Birlik",
                    "uk": "Християнський соціальний союз",
                    "ru": "Христианский социальный союз",
                    "pl": "Chrześcijański Związek Społeczny",
                    "fa": "اتحادیه اجتماعی مسیحی"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "political_parties"
    }
    ,
    {
        "id": "93",
        "question": {
            "de": "Je mehr „Zweitstimmen“ eine Partei bei einer Bundestagswahl bekommt, desto …",
            "en": "The more 'second votes' a party receives in a federal election, the ...",
            "ar": "كلما حصلت حزب على المزيد من \"الأصوات الثانية\" في الانتخابات الفيدرالية، كلما ...",
            "tr": "Bir parti federal seçimlerde daha fazla \"ikinci oy\" alırsa, ...",
            "uk": "Чим більше «других голосів» отримує партія на федеральних виборах, тим ...",
            "ru": "Чем больше «вторых голосов» партия получает на федеральных выборах, тем ...",
            "pl": "Im więcej „drugich głosów” partia zdobywa w wyborach federalnych, tym ...",
            "fa": "هر چه یک حزب در انتخابات فدرال بیشتر \"صوت دوم\" دریافت کند، ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "mehr Sitze erhält die Partei im Parlament.",
                    "en": "the more seats the party receives in parliament.",
                    "ar": "تحصل الحزب على المزيد من المقاعد في البرلمان.",
                    "tr": "parti parlamentte daha fazla koltuk alır.",
                    "uk": "тим більше місць партія отримує в парламенті.",
                    "ru": "тем больше мест партия получает в парламенте.",
                    "pl": "tym więcej miejsc partia otrzymuje w parlamencie.",
                    "fa": "هر چه حزب بیشتر صندلی در پارلمان به دست می‌آورد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "weniger Erststimmen kann sie haben.",
                    "en": "the fewer first votes it can have.",
                    "ar": "يمكن أن تحصل على عدد أقل من الأصوات الأولى.",
                    "tr": "daha az birinci oy alabilir.",
                    "uk": "тим менше перших голосів вона може мати.",
                    "ru": "тем меньше первых голосов она может иметь.",
                    "pl": "tym mniej pierwszych głosów może mieć.",
                    "fa": "هر چه تعداد کمتری از رأی‌های اول را می‌تواند داشته باشد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
                    "en": "the more direct candidates from the party enter parliament.",
                    "ar": "يدخل المزيد من المرشحين المباشرين من الحزب إلى البرلمان.",
                    "tr": "partinin daha fazla direkt adayı parlamentoya girer.",
                    "uk": "тим більше прямих кандидатів від партії входить до парламенту.",
                    "ru": "тем больше прямых кандидатов от партии попадает в парламент.",
                    "pl": "tym więcej bezpośrednich kandydatów partii wchodzi do parlamentu.",
                    "fa": "هر چه تعداد بیشتری از کاندیداهای مستقیم حزب وارد پارلمان شوند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "größer ist das Risiko, eine Koalition bilden zu müssen.",
                    "en": "the greater the risk of having to form a coalition.",
                    "ar": "يزيد خطر الاضطرار إلى تشكيل ائتلاف.",
                    "tr": "bir koalisyon kurma riski daha büyük olur.",
                    "uk": "тим більше ризик, що потрібно буде формувати коаліцію.",
                    "ru": "тем больше риск необходимости формирования коалиции.",
                    "pl": "tym większe ryzyko konieczności utworzenia koalicji.",
                    "fa": "هر چه خطر تشکیل ائتلاف بیشتر می‌شود."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "election_process"
    },
    {
        "id": "94",
        "question": {
            "de": "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
            "en": "At what age are you allowed to participate in the election to the German Bundestag?",
            "ar": "في أي سن يُسمح لك بالمشاركة في الانتخابات الخاصة بالبوندستاغ الألماني؟",
            "tr": "Almanya'da Alman Bundestag seçimlerine katılmak için hangi yaşta olmalısınız?",
            "uk": "З якого віку дозволяється брати участь у виборах до Німецького Бундестагу?",
            "ru": "С какого возраста вам разрешено участвовать в выборах в Бундестаг Германии?",
            "pl": "W jakim wieku można uczestniczyć w wyborach do Bundestagu w Niemczech?",
            "fa": "در چه سنی اجازه دارید در انتخابات بوندستاگر آلمان شرکت کنید؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "16",
                    "en": "",
                    "ar": "",
                    "tr": "",
                    "uk": "",
                    "ru": "",
                    "pl": "",
                    "fa": ""
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "18",
                    "en": "",
                    "ar": "",
                    "tr": "",
                    "uk": "",
                    "ru": "",
                    "pl": "",
                    "fa": ""
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "21",
                    "en": "",
                    "ar": "",
                    "tr": "",
                    "uk": "",
                    "ru": "",
                    "pl": "",
                    "fa": ""
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "23",
                    "en": "",
                    "ar": "",
                    "tr": "",
                    "uk": "",
                    "ru": "",
                    "pl": "",
                    "fa": ""
                }
            }
        ],
        "correctAnswer": 1,
        "category": "voting_age"
    }
    ,
    {
        "id": "95",
        "question": {
            "de": "Was gilt für die meisten Kinder in Deutschland?",
            "en": "What applies to most children in Germany?",
            "ar": "چه چیزی برای بیشتر کودکان در آلمان صدق می‌کند؟",
            "tr": "Almanya'daki çoğu çocuk için ne geçerlidir?",
            "uk": "Що стосується більшості дітей у Німеччині?",
            "ru": "Что применимо к большинству детей в Германии?",
            "pl": "Co dotyczy większości dzieci w Niemczech?",
            "fa": "چه چیزی برای اکثر کودکان در آلمان معتبر است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Wahlpflicht",
                    "en": "Mandatory voting",
                    "ar": "اجبار به رای‌گیری",
                    "tr": "Zorunlu oy verme",
                    "uk": "Обов'язкове голосування",
                    "ru": "Обязательное голосование",
                    "pl": "Obowiązkowe głosowanie",
                    "fa": "رای‌گیری اجباری"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Schulpflicht",
                    "en": "Mandatory schooling",
                    "ar": "اجبار به تحصیل",
                    "tr": "Zorunlu eğitim",
                    "uk": "Обов'язкова освіта",
                    "ru": "Обязательное образование",
                    "pl": "Obowiązkowa edukacja",
                    "fa": "تحصیل اجباری"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Schweigepflicht",
                    "en": "Confidentiality obligation",
                    "ar": "اجبار به حفظ اسرار",
                    "tr": "Gizlilik yükümlülüğü",
                    "uk": "Зобов'язання до конфіденційності",
                    "ru": "Обязанность о конфиденциальности",
                    "pl": "Obowiązek zachowania poufności",
                    "fa": "تعهد به محرمانگی"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Religionspflicht",
                    "en": "Mandatory religion",
                    "ar": "اجبار به دین",
                    "tr": "Zorunlu din",
                    "uk": "Обов'язкова релігія",
                    "ru": "Обязательная религия",
                    "pl": "Obowiązkowa religia",
                    "fa": "دین اجباری"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "education"
    },
    {
        "id": "96",
        "question": {
            "de": "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
            "en": "How can someone who denies the Holocaust be punished?",
            "ar": "چگونه می‌توان کسی را که هولوکاست را انکار می‌کند، مجازات کرد؟",
            "tr": "Holokostu reddeden birisi nasıl cezalandırılabilir?",
            "uk": "Як можуть покарати когось, хто заперечує Голокост?",
            "ru": "Как можно наказать человека, который отрицает Холокост?",
            "pl": "Jak można ukarać kogoś, kto zaprzecza Holokaustowi?",
            "fa": "چگونه می‌توان کسی را که هولوکاست را انکار می‌کند، مجازات کرد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Kürzung sozialer Leistungen",
                    "en": "Reduction of social benefits",
                    "ar": "کاهش خدمات اجتماعی",
                    "tr": "Sosyal yardımların azaltılması",
                    "uk": "Скорочення соціальних виплат",
                    "ru": "Сокращение социальных пособий",
                    "pl": "Redukcja świadczeń społecznych",
                    "fa": "کاهش خدمات اجتماعی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "bis zu 100 Sozialstunden",
                    "en": "up to 100 community service hours",
                    "ar": "تا 100 ساعت خدمات اجتماعی",
                    "tr": "100 saate kadar toplum hizmeti",
                    "uk": "до 100 годин громадських робіт",
                    "ru": "до 100 часов общественных работ",
                    "pl": "do 100 godzin pracy społecznej",
                    "fa": "تا 100 ساعت خدمات اجتماعی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "gar nicht, Holocaustleugnung ist erlaubt",
                    "en": "not at all, Holocaust denial is allowed",
                    "ar": "اصلاً، انکار هولوکاست مجاز است",
                    "tr": "hiçbir şekilde, Holokostu reddetmek serbesttir",
                    "uk": "взагалі, заперечення Голокосту дозволено",
                    "ru": "совсем, отрицание Холокоста разрешено",
                    "pl": "wcale, zaprzeczenie Holokaustowi jest dozwolone",
                    "fa": "اصلاً، انکار هولوکاست مجاز است"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe",
                    "en": "with imprisonment of up to five years or a fine",
                    "ar": "با حبس تا پنج سال یا جریمه",
                    "tr": "beş yıla kadar hapis cezası veya para cezası",
                    "uk": "з позбавленням волі на термін до п'яти років або штрафом",
                    "ru": "с лишением свободы на срок до пяти лет или штрафом",
                    "pl": "z karą pozbawienia wolności do pięciu lat lub grzywną",
                    "fa": "با حبس تا پنج سال یا جریمه"
                }
            }
        ],
        "correctAnswer": 3,
        "category": "holocaust_denial"
    }
    ,
    {
        "id": "97",
        "question": {
            "de": "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
            "en": "What do you automatically pay in Germany when you are permanently employed?",
            "ar": "چه چیزی به طور خودکار در آلمان پرداخت می‌شود، وقتی که به صورت دائم استخدام شده‌اید؟",
            "tr": "Almanya'da sürekli olarak çalışıyorsanız, otomatik olarak ne ödenir?",
            "uk": "Що ви автоматично сплачуєте в Німеччині, якщо ви постійно працевлаштовані?",
            "ru": "Что вы автоматически платите в Германии, если у вас постоянная работа?",
            "pl": "Co automatycznie płacisz w Niemczech, gdy jesteś na stałe zatrudniony?",
            "fa": "چه چیزی به طور خودکار در آلمان پرداخت می‌شود، وقتی که به صورت دائم استخدام شده‌اید؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Sozialversicherung",
                    "en": "Social insurance",
                    "ar": "بیمه اجتماعی",
                    "tr": "Sosyal sigorta",
                    "uk": "Соціальне страхування",
                    "ru": "Социальное страхование",
                    "pl": "Ubezpieczenie społeczne",
                    "fa": "بیمه اجتماعی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Sozialhilfe",
                    "en": "Social assistance",
                    "ar": "کمک اجتماعی",
                    "tr": "Sosyal yardım",
                    "uk": "Соціальна допомога",
                    "ru": "Социальная помощь",
                    "pl": "Pomoc społeczna",
                    "fa": "کمک اجتماعی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Kindergeld",
                    "en": "Child benefit",
                    "ar": "مساعدت مالی کودک",
                    "tr": "Çocuk yardımı",
                    "uk": "Допомога на дітей",
                    "ru": "Пособие на детей",
                    "pl": "Zasiłek na dzieci",
                    "fa": "مساعدت مالی کودک"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Wohngeld",
                    "en": "Housing benefit",
                    "ar": "کمک هزینه مسکن",
                    "tr": "Kira yardımı",
                    "uk": "Допомога на житло",
                    "ru": "Жилищная помощь",
                    "pl": "Zasiłek na mieszkanie",
                    "fa": "کمک هزینه مسکن"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "employment"
    },
    {
        "id": "98",
        "question": {
            "de": "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, ...",
            "en": "When members of the German Bundestag change their faction, ...",
            "ar": "وقتی نمایندگان در بوندستاگ آلمان گروه خود را تغییر می‌دهند، ...",
            "tr": "Alman Bundestag'ındaki milletvekilleri fraksiyonlarını değiştirdiklerinde ...",
            "uk": "Коли члени Німецького Бундестагу змінюють свою фракцію, ...",
            "ru": "Когда депутаты Немецкого Бундестага меняют свою фракцию, ...",
            "pl": "Kiedy członkowie niemieckiego Bundestagu zmieniają swoją frakcję, ...",
            "fa": "وقتی نمایندگان در بوندستاگ آلمان گروه خود را تغییر می‌دهند، ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "kann die Regierung ihre Mehrheit verlieren.",
                    "en": "the government can lose its majority.",
                    "ar": "دولت می‌تواند اکثریت خود را از دست بدهد.",
                    "tr": "hükümet çoğunluğunu kaybedebilir.",
                    "uk": "уряд може втратити свою більшість.",
                    "ru": "правительство может потерять свое большинство.",
                    "pl": "rząd może stracić swoją większość.",
                    "fa": "دولت می‌تواند اکثریت خود را از دست بدهد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
                    "en": "they may no longer participate in the sessions of Parliament.",
                    "ar": "آنها دیگر نمی‌توانند در جلسات پارلمان شرکت کنند.",
                    "tr": "artık parlamentoda oturumlara katılamazlar.",
                    "uk": "вони більше не можуть брати участь у засіданнях парламенту.",
                    "ru": "они больше не могут участвовать в заседаниях парламента.",
                    "pl": "nie mogą już uczestniczyć w posiedzeniach parlamentu.",
                    "fa": "آنها دیگر نمی‌توانند در جلسات پارلمان شرکت کنند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "muss der Bundespräsident / die Bundespräsidentin zuvor sein / ihr Einverständnis geben.",
                    "en": "the Federal President must give his/her consent beforehand.",
                    "ar": "رئیس فدرال باید قبل از آن موافقت خود را بدهد.",
                    "tr": "Federal Başkan önceden onay vermelidir.",
                    "uk": "Федеральний президент повинен заздалегідь дати свою згоду.",
                    "ru": "Федеральный президент должен предварительно дать свое согласие.",
                    "pl": "Prezydent federalny musi wcześniej wyrazić zgodę.",
                    "fa": "رئیس فدرال باید قبل از آن موافقت خود را بدهد."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "dürfen die Wähler / Wählerinnen dieser Abgeordneten noch einmal wählen.",
                    "en": "the voters of these representatives may vote again.",
                    "ar": "رای‌دهندگان این نمایندگان می‌توانند دوباره رأی دهند.",
                    "tr": "bu milletvekillerinin seçmenleri tekrar oy verebilir.",
                    "uk": "виборці цих представників можуть проголосувати ще раз.",
                    "ru": "избиратели этих депутатов могут снова голосовать.",
                    "pl": "wyborcy tych przedstawicieli mogą głosować ponownie.",
                    "fa": "رای‌دهندگان این نمایندگان می‌توانند دوباره رأی دهند."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "government"
    }
    ,
    {
        "id": "99",
        "question": {
            "de": "Wer bezahlt in Deutschland die Sozialversicherungen?",
            "en": "Who pays for social insurance in Germany?",
            "ar": "چه کسی در آلمان بیمه‌های اجتماعی را پرداخت می‌کند؟",
            "tr": "Almanya'da sosyal sigortaları kim öder?",
            "uk": "Хто в Німеччині сплачує соціальне страхування?",
            "ru": "Кто в Германии оплачивает социальное страхование?",
            "pl": "Kto w Niemczech płaci za ubezpieczenia społeczne?",
            "fa": "چه کسی در آلمان بیمه‌های اجتماعی را پرداخت می‌کند؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen",
                    "en": "Employers and employees",
                    "ar": "کارفرمایان و کارمندان",
                    "tr": "İşverenler ve çalışanlar",
                    "uk": "Роботодавці та працівники",
                    "ru": "Работодатели и работники",
                    "pl": "Pracodawcy i pracownicy",
                    "fa": "کارفرمایان و کارمندان"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "nur Arbeitnehmer / Arbeitnehmerinnen",
                    "en": "only employees",
                    "ar": "فقط کارمندان",
                    "tr": "sadece çalışanlar",
                    "uk": "тільки працівники",
                    "ru": "только работники",
                    "pl": "tylko pracownicy",
                    "fa": "فقط کارمندان"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "alle Staatsangehörigen",
                    "en": "all citizens",
                    "ar": "همه شهروندان",
                    "tr": "tüm vatandaşlar",
                    "uk": "всі громадяни",
                    "ru": "все граждане",
                    "pl": "wszyscy obywatele",
                    "fa": "همه شهروندان"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "nur Arbeitgeber / Arbeitgeberinnen",
                    "en": "only employers",
                    "ar": "فقط کارفرمایان",
                    "tr": "sadece işverenler",
                    "uk": "тільки роботодавці",
                    "ru": "только работодатели",
                    "pl": "tylko pracodawcy",
                    "fa": "فقط کارفرمایان"
                }
            }
        ],
        "correctAnswer": 0,
        "category": "employment"
    },
    {
        "id": "100",
        "question": {
            "de": "Was gehört nicht zur gesetzlichen Sozialversicherung?",
            "en": "What does not belong to the statutory social insurance?",
            "ar": "چه چیزی به بیمه اجتماعی قانونی تعلق ندارد؟",
            "tr": "Yasal sosyal sigortaya ne dahil değildir?",
            "uk": "Що не належить до законного соціального страхування?",
            "ru": "Что не относится к обязательному социальному страхованию?",
            "pl": "Co nie należy do ustawowego ubezpieczenia społecznego?",
            "fa": "چه چیزی به بیمه اجتماعی قانونی تعلق ندارد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die gesetzliche Rentenversicherung",
                    "en": "the statutory pension insurance",
                    "ar": "بیمه بازنشستگی قانونی",
                    "tr": "yasal emeklilik sigortası",
                    "uk": "законне пенсійне страхування",
                    "ru": "обязательное пенсионное страхование",
                    "pl": "ustawowe ubezpieczenie emerytalne",
                    "fa": "بیمه بازنشستگی قانونی"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die Lebensversicherung",
                    "en": "the life insurance",
                    "ar": "بیمه زندگی",
                    "tr": "hayat sigortası",
                    "uk": "страхування життя",
                    "ru": "страхование жизни",
                    "pl": "ubezpieczenie na życie",
                    "fa": "بیمه زندگی"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die Arbeitslosenversicherung",
                    "en": "the unemployment insurance",
                    "ar": "بیمه بیکاری",
                    "tr": "işsizlik sigortası",
                    "uk": "страхування на випадок безробіття",
                    "ru": "страхование по безработице",
                    "pl": "ubezpieczenie na wypadek bezrobocia",
                    "fa": "بیمه بیکاری"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die Pflegeversicherung",
                    "en": "the long-term care insurance",
                    "ar": "بیمه مراقبت طولانی‌مدت",
                    "tr": "uzun vadeli bakım sigortası",
                    "uk": "страхування довгострокового догляду",
                    "ru": "страхование на случай долгосрочного ухода",
                    "pl": "ubezpieczenie na długoterminową opiekę",
                    "fa": "بیمه مراقبت طولانی‌مدت"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "insurance"
    }
    ,
    {
        "id": "101",
        "question": {
            "de": "Gewerkschaften sind Interessenverbände der …",
            "en": "Trade unions are interest groups for …",
            "ar": "اتحادات العمال هي جمعيات مصالح …",
            "tr": "Sendikalar, … için çıkar gruplarıdır.",
            "uk": "Профспілки є інтересами …",
            "ru": "Профсоюзы являются интересами …",
            "pl": "Związki zawodowe są organizacjami interesów …",
            "fa": "اتحادیه‌ها گروه‌های منافع … هستند."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Jugendlichen.",
                    "en": "youth.",
                    "ar": "نوجوانان.",
                    "tr": "gençler.",
                    "uk": "молоді.",
                    "ru": "молодежи.",
                    "pl": "młodzieży.",
                    "fa": "نوجوانان."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Arbeitnehmer und Arbeitnehmerinnen.",
                    "en": "employees.",
                    "ar": "کارمندان.",
                    "tr": "çalışanlar.",
                    "uk": "працівників.",
                    "ru": "работников.",
                    "pl": "pracowników.",
                    "fa": "کارمندان."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Rentner und Rentnerinnen.",
                    "en": "pensioners.",
                    "ar": "بازنشستگان.",
                    "tr": "emekliler.",
                    "uk": "пенсіонерів.",
                    "ru": "пенсионеров.",
                    "pl": "emerytów.",
                    "fa": "بازنشستگان."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Arbeitgeber und Arbeitgeberinnen.",
                    "en": "employers.",
                    "ar": "کارفرمایان.",
                    "tr": "işverenler.",
                    "uk": "роботодавців.",
                    "ru": "работодателей.",
                    "pl": "pracodawców.",
                    "fa": "کارفرمایان."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "unions"
    },
    {
        "id": "102",
        "question": {
            "de": "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat?",
            "en": "What can one be honored with in the Federal Republic of Germany for special achievements in political, economic, cultural, intellectual, or social fields?",
            "ar": "با چه چیزی می‌توان در جمهوری فدرال آلمان برای دستاوردهای ویژه در زمینه‌های سیاسی، اقتصادی، فرهنگی، ذهنی یا اجتماعی مورد تقدیر قرار گرفت؟",
            "tr": "Almanya Federal Cumhuriyeti'nde politik, ekonomik, kültürel, entelektüel veya sosyal alanda özel başarılar için ne ile onurlandırılabilir?",
            "uk": "Чим можна бути нагородженим у Федеративній Республіці Німеччина за особливі досягнення в політичній, економічній, культурній, інтелектуальній або соціальній сферах?",
            "ru": "Чем можно быть награжденным в Федеративной Республике Германии за особые достижения в политической, экономической, культурной, интеллектуальной или социальной сфере?",
            "pl": "Za co można być odznaczonym w Republice Federalnej Niemiec za szczególne osiągnięcia w dziedzinie polityki, gospodarki, kultury, intelektualnej lub społecznej?",
            "fa": "با چه چیزی می‌توان در جمهوری فدرال آلمان برای دستاوردهای ویژه در زمینه‌های سیاسی، اقتصادی، فرهنگی، ذهنی یا اجتماعی مورد تقدیر قرار گرفت؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Bundesadler.",
                    "en": "Federal Eagle.",
                    "ar": "عقاب فدرال.",
                    "tr": "Federal Kartal.",
                    "uk": "Федеральний орел.",
                    "ru": "Федеральный орел.",
                    "pl": "Orzeł federalny.",
                    "fa": "عقاب فدرال."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bundesverdienstkreuz.",
                    "en": "Federal Cross of Merit.",
                    "ar": "صليب الشرف الفدرالي.",
                    "tr": "Federal Hizmet Nişanı.",
                    "uk": "Федеральний хрест заслуги.",
                    "ru": "Федеральный крест заслуг.",
                    "pl": "Federalny Krzyż Zasługi.",
                    "fa": "صلیب شایستگی فدرال."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Vaterländischen Verdienstorden.",
                    "en": "Order of Merit of the Fatherland.",
                    "ar": "نشان شایستگی میهن.",
                    "tr": "Vatan Hizmet Nişanı.",
                    "uk": "Орден заслуг батьківщини.",
                    "ru": "Орден заслуг Отечества.",
                    "pl": "Order Zasługi Ojczyzny.",
                    "fa": "نشان شایستگی میهن."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Ehrentitel „Held der Deutschen Demokratischen Republik“. ",
                    "en": "Honorary title 'Hero of the German Democratic Republic'.",
                    "ar": "عنوان افتخاری «قهرمان جمهوری دموکراتیک آلمان».",
                    "tr": "Onur unvanı 'Alman Demokratik Cumhuriyeti Kahramanı'.",
                    "uk": "Почесне звання «Герой Німецької Демократичної Республіки». ",
                    "ru": "Почетное звание «Герой Германской Демократической Республики».",
                    "pl": "Tytuł honorowy „Bohater Niemieckiej Republiki Demokratycznej”.",
                    "fa": "عنوان افتخاری «قهرمان جمهوری دموکراتیک آلمان». "
                }
            }
        ],
        "correctAnswer": 1,
        "category": "honors"
    }
    ,
    {
        "id": "103",
        "question": {
            "de": "Was wird in Deutschland als „Ampelkoalition“ bezeichnet?",
            "en": "What is referred to in Germany as the 'traffic light coalition'?",
            "ar": "چه چیزی در آلمان به عنوان «ائتلاف چراغ راهنمایی» شناخته می‌شود؟",
            "tr": "Almanya'da 'trafik ışığı koalisyonu' olarak ne adlandırılır?",
            "uk": "Що в Німеччині називається «світлофорним альянсом»?",
            "ru": "Что в Германии называется «светофорной коалицией»?",
            "pl": "Co w Niemczech nazywa się 'koalicją świetlną'?",
            "fa": "چه چیزی در آلمان به عنوان «ائتلاف چراغ راهنمایی» شناخته می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Die Zusammenarbeit der Bundestagsfraktionen von CDU und CSU.",
                    "en": "The cooperation of the parliamentary groups of CDU and CSU.",
                    "ar": "همکاری فراکسیون‌های پارلمان CDU و CSU.",
                    "tr": "CDU ve CSU'nun parlament gruplarının işbirliği.",
                    "uk": "Співпраця парламентських груп CDU та CSU.",
                    "ru": "Сотрудничество парламентских групп CDU и CSU.",
                    "pl": "Współpraca grup parlamentarnych CDU i CSU.",
                    "fa": "همکاری فراکسیون‌های پارلمان CDU و CSU."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung.",
                    "en": "of SPD, FDP, and Alliance 90/The Greens in a government.",
                    "ar": "از SPD، FDP و اتحادیه 90/سبزها در یک دولت.",
                    "tr": "SPD, FDP ve Yeşiller Birliği'nin bir hükümette.",
                    "uk": "SPD, FDP та Альянс 90/Зелені в уряді.",
                    "ru": "SPD, FDP и Альянс 90/Зеленые в правительстве.",
                    "pl": "SPD, FDP i Sojusz 90/Zieloni w rządzie.",
                    "fa": "از SPD، FDP و اتحادیه 90/سبزها در یک دولت."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung.",
                    "en": "of CSU, The Left, and Alliance 90/The Greens in a government.",
                    "ar": "از CSU، چپ و اتحادیه 90/سبزها در یک دولت.",
                    "tr": "CSU, Sol ve Yeşiller Birliği'nin bir hükümette.",
                    "uk": "CSU, Ліва і Альянс 90/Зелені в уряді.",
                    "ru": "CSU, Левые и Альянс 90/Зеленые в правительстве.",
                    "pl": "CSU, Lewica i Sojusz 90/Zieloni w rządzie.",
                    "fa": "از CSU، چپ و اتحادیه 90/سبزها در یک دولت."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "der Bundestagsfraktionen von CDU und SPD.",
                    "en": "of the parliamentary groups of CDU and SPD.",
                    "ar": "از فراکسیون‌های پارلمان CDU و SPD.",
                    "tr": "CDU ve SPD'nin parlament gruplarının işbirliği.",
                    "uk": "Парламентських груп CDU та SPD.",
                    "ru": "Парламентских групп CDU и SPD.",
                    "pl": "Grup parlamentarnych CDU i SPD.",
                    "fa": "از فراکسیون‌های پارلمان CDU و SPD."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "coalitions"
    },
    {
        "id": "104",
        "question": {
            "de": "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
            "en": "A woman in Germany loses her job. What must not be the reason for her dismissal?",
            "ar": "زنی در آلمان کار خود را از دست می‌دهد. چه چیزی نباید دلیل اخراج او باشد؟",
            "tr": "Almanya'da bir kadın işini kaybeder. Hangi durum onun işten çıkarılması için neden olamaz?",
            "uk": "Жінка в Німеччині втрачає роботу. Яка причина не може бути підставою для її звільнення?",
            "ru": "Женщина в Германии теряет свою работу. Какова причина, по которой ее не могут уволить?",
            "pl": "Kobieta w Niemczech traci pracę. Jaki powód nie może być przyczyną jej zwolnienia?",
            "fa": "زنی در آلمان کار خود را از دست می‌دهد. چه چیزی نباید دلیل اخراج او باشد؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Die Frau ist lange krank und arbeitsunfähig.",
                    "en": "The woman has been sick for a long time and is unable to work.",
                    "ar": "زن برای مدت طولانی بیمار است و قادر به کار نیست.",
                    "tr": "Kadın uzun süre hastadır ve çalışamaz.",
                    "uk": "Жінка довго хворіє і не може працювати.",
                    "ru": "Женщина долго болеет и не может работать.",
                    "pl": "Kobieta jest długo chora i niezdolna do pracy.",
                    "fa": "زن برای مدت طولانی بیمار است و قادر به کار نیست."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Die Frau kam oft zu spät zur Arbeit.",
                    "en": "The woman often came to work late.",
                    "ar": "زن اغلب دیر به کار می‌رسید.",
                    "tr": "Kadın sık sık işe geç geliyordu.",
                    "uk": "Жінка часто приходила на роботу пізно.",
                    "ru": "Женщина часто приходила на работу поздно.",
                    "pl": "Kobieta często spóźniała się do pracy.",
                    "fa": "زن اغلب دیر به کار می‌رسید."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Die Frau erledigt private Sachen während der Arbeitszeit.",
                    "en": "The woman is doing private things during work hours.",
                    "ar": "زن در ساعت کار کارهای خصوصی انجام می‌دهد.",
                    "tr": "Kadın çalışma saatleri içinde özel işlerini yapıyor.",
                    "uk": "Жінка займається приватними справами під час роботи.",
                    "ru": "Женщина занимается личными делами во время работы.",
                    "pl": "Kobieta zajmuje się sprawami prywatnymi w godzinach pracy.",
                    "fa": "زن در ساعت کار کارهای خصوصی انجام می‌دهد."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Die Frau bekommt ein Kind und ihr Chef weiß das.",
                    "en": "The woman is having a baby, and her boss knows it.",
                    "ar": "زن صاحب فرزند می‌شود و رئیسش این را می‌داند.",
                    "tr": "Kadın çocuk doğuruyor ve patronu bunu biliyor.",
                    "uk": "Жінка народжує дитину, і її бос про це знає.",
                    "ru": "Женщина рожает ребенка, и ее начальник об этом знает.",
                    "pl": "Kobieta rodzi dziecko, a jej szef o tym wie.",
                    "fa": "زن صاحب فرزند می‌شود و رئیسش این را می‌داند."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "employment"
    }
    ,
    {
        "id": "105",
        "question": {
            "de": "Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland?",
            "en": "What is a task of election helpers in Germany?",
            "ar": "وظيفة المساعدين في الانتخابات في ألمانيا ما هي؟",
            "tr": "Almanya'daki seçim yardımcılarının görevi nedir?",
            "uk": "Яка задача виборчих помічників в Німеччині?",
            "ru": "Какая задача у выборных помощников в Германии?",
            "pl": "Jakie zadanie mają pomocnicy wyborczy w Niemczech?",
            "fa": "وظیفه کمک‌کنندگان در انتخابات در آلمان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
                    "en": "They help elderly people cast their votes in the voting booth.",
                    "ar": "آنها به افراد سالخورده کمک می‌کنند تا در کابین رأی‌گیری رأی خود را بدهند.",
                    "tr": "Yaşlı insanlara oy verme işlemlerinde yardım ederler.",
                    "uk": "Вони допомагають літнім людям голосувати в кабіні для голосування.",
                    "ru": "Они помогают пожилым людям голосовать в избирательной кабинке.",
                    "pl": "Pomagają starszym osobom oddać głos w kabinie do głosowania.",
                    "fa": "آنها به افراد سالخورده کمک می‌کنند تا در کابین رأی‌گیری رأی خود را بدهند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
                    "en": "They write the election notifications before the election.",
                    "ar": "آنها قبل از انتخابات اعلانات رأی‌گیری را می‌نویسند.",
                    "tr": "Seçimden önce seçim bildirimlerini yazarlar.",
                    "uk": "Вони пишуть повідомлення про вибори перед виборами.",
                    "ru": "Они пишут уведомления о выборах перед выборами.",
                    "pl": "Piszą powiadomienia wyborcze przed wyborami.",
                    "fa": "آنها قبل از انتخابات اعلانات رأی‌گیری را می‌نویسند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Sie geben Zwischenergebnisse an die Medien weiter.",
                    "en": "They pass on interim results to the media.",
                    "ar": "آنها نتایج موقتی را به رسانه‌ها گزارش می‌دهند.",
                    "tr": "Ara sonuçları medyaya iletirler.",
                    "uk": "Вони передають проміжні результати ЗМІ.",
                    "ru": "Они передают промежуточные результаты СМИ.",
                    "pl": "Przekazują wyniki pośrednie mediom.",
                    "fa": "آنها نتایج موقتی را به رسانه‌ها گزارش می‌دهند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Sie zählen die Stimmen nach dem Ende der Wahl.",
                    "en": "They count the votes after the election ends.",
                    "ar": "آنها پس از پایان انتخابات آرای را شمارش می‌کنند.",
                    "tr": "Seçim sona erdikten sonra oyları sayarlar.",
                    "uk": "Вони підраховують голоси після закінчення виборів.",
                    "ru": "Они подсчитывают голоса после окончания выборов.",
                    "pl": "Liczą głosy po zakończeniu wyborów.",
                    "fa": "آنها پس از پایان انتخابات آرای را شمارش می‌کنند."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "elections"
    },
    {
        "id": "106",
        "question": {
            "de": "In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den Wahlen. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?",
            "en": "In Germany, volunteer election helpers assist in elections. What is a task of election helpers?",
            "ar": "در آلمان، کمک‌کنندگان داوطلب در انتخابات کمک می‌کنند. وظیفه کمک‌کنندگان چیست؟",
            "tr": "Almanya'da gönüllü seçim yardımcıları seçimlerde yardımcı olurlar. Seçim yardımcılarının görevi nedir?",
            "uk": "В Німеччині волонтери допомагають на виборах. Яка задача виборчих помічників?",
            "ru": "В Германии волонтеры помогают на выборах. Какова задача выборных помощников?",
            "pl": "W Niemczech wolontariusze pomagają w wyborach. Jakie zadanie mają pomocnicy wyborczy?",
            "fa": "در آلمان، کمک‌کنندگان داوطلب در انتخابات کمک می‌کنند. وظیفه کمک‌کنندگان چیست؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Sie helfen Kindern und alten Menschen beim Wählen.",
                    "en": "They help children and elderly people with voting.",
                    "ar": "آنها به کودکان و افراد سالخورده در رأی‌گیری کمک می‌کنند.",
                    "tr": "Çocuklara ve yaşlı insanlara oy vermede yardımcı olurlar.",
                    "uk": "Вони допомагають дітям та літнім людям голосувати.",
                    "ru": "Они помогают детям и пожилым людям голосовать.",
                    "pl": "Pomagają dzieciom i starszym osobom głosować.",
                    "fa": "آنها به کودکان و افراد سالخورده در رأی‌گیری کمک می‌کنند."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
                    "en": "They write cards and letters indicating the polling station.",
                    "ar": "آنها کارت‌ها و نامه‌هایی می‌نویسند که مکان رأی‌گیری را مشخص می‌کند.",
                    "tr": "Oy verme yerini belirten kartlar ve mektuplar yazarlar.",
                    "uk": "Вони пишуть картки та листи, в яких вказано виборчу дільницю.",
                    "ru": "Они пишут карточки и письма с указанием избирательного участка.",
                    "pl": "Piszą karty i listy z informacją o lokalu wyborczym.",
                    "fa": "آنها کارت‌ها و نامه‌هایی می‌نویسند که مکان رأی‌گیری را مشخص می‌کند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Sie geben Zwischenergebnisse an Journalisten weiter.",
                    "en": "They pass on interim results to journalists.",
                    "ar": "آنها نتایج موقتی را به روزنامه‌نگاران گزارش می‌دهند.",
                    "tr": "Ara sonuçları gazetecilere iletirler.",
                    "uk": "Вони передають проміжні результати журналістам.",
                    "ru": "Они передают промежуточные результаты журналистам.",
                    "pl": "Przekazują wyniki pośrednie dziennikarzom.",
                    "fa": "آنها نتایج موقتی را به روزنامه‌نگاران گزارش می‌دهند."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Sie zählen die Stimmen nach dem Ende der Wahl.",
                    "en": "They count the votes after the election ends.",
                    "ar": "آنها پس از پایان انتخابات آرای را شمارش می‌کنند.",
                    "tr": "Seçim sona erdikten sonra oyları sayarlar.",
                    "uk": "Вони підраховують голоси після закінчення виборів.",
                    "ru": "Они подсчитывают голоса после окончания выборов.",
                    "pl": "Liczą głosy po zakończeniu wyborów.",
                    "fa": "آنها پس از پایان انتخابات آرای را شمارش می‌کنند."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "elections"
    }
    ,
    {
        "id": "107",
        "question": {
            "de": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
            "en": "For how many years is the Bundestag elected in Germany?",
            "ar": "برای چند سال در آلمان بوندستاگ انتخاب می‌شود؟",
            "tr": "Almanya'da Bundestag kaç yıl için seçilir?",
            "uk": "На скільки років обирається Бундестаг у Німеччині?",
            "ru": "На сколько лет избирается Бундестаг в Германии?",
            "pl": "Na ile lat wybierany jest Bundestag w Niemczech?",
            "fa": "بوندستاگ در آلمان برای چند سال انتخاب می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "2 Jahre",
                    "en": "2 years",
                    "ar": "۲ سال",
                    "tr": "2 yıl",
                    "uk": "2 роки",
                    "ru": "2 года",
                    "pl": "2 lata",
                    "fa": "۲ سال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "4 Jahre",
                    "en": "4 years",
                    "ar": "۴ سال",
                    "tr": "4 yıl",
                    "uk": "4 роки",
                    "ru": "4 года",
                    "pl": "4 lata",
                    "fa": "۴ سال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "6 Jahre",
                    "en": "6 years",
                    "ar": "۶ سال",
                    "tr": "6 yıl",
                    "uk": "6 років",
                    "ru": "6 лет",
                    "pl": "6 lat",
                    "fa": "۶ سال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "8 Jahre",
                    "en": "8 years",
                    "ar": "۸ سال",
                    "tr": "8 yıl",
                    "uk": "8 років",
                    "ru": "8 лет",
                    "pl": "8 lat",
                    "fa": "۸ سال"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "elections"
    },
    {
        "id": "108",
        "question": {
            "de": "Bei einer Bundestagswahl in Deutschland darf jeder wählen, der …",
            "en": "In a Bundestag election in Germany, anyone may vote who ...",
            "ar": "در انتخابات بوندستاگ در آلمان، هر کس می‌تواند رأی دهد که ...",
            "tr": "Almanya'da Bundestag seçiminde oy verebilen herkes ...",
            "uk": "На виборах до Бундестагу в Німеччині може голосувати кожен, хто ...",
            "ru": "На выборах в Бундестаг в Германии может голосовать каждый, кто ...",
            "pl": "W wyborach do Bundestagu w Niemczech może głosować każdy, kto ...",
            "fa": "در انتخابات بوندستاگ در آلمان، هر کس می‌تواند رأی دهد که ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
                    "en": "lives in the Federal Republic of Germany and wishes to vote.",
                    "ar": "در جمهوری فدرال آلمان زندگی می‌کند و می‌خواهد رأی دهد.",
                    "tr": "Almanya Federal Cumhuriyeti'nde yaşayan ve oy vermek isteyen herkes.",
                    "uk": "проживає в Федеральній Республіці Німеччина та бажає голосувати.",
                    "ru": "проживает в Федеративной Республике Германия и хочет голосовать.",
                    "pl": "mieszka w Republice Federalnej Niemiec i chce głosować.",
                    "fa": "در جمهوری فدرال آلمان زندگی می‌کند و می‌خواهد رأی دهد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
                    "en": "is a citizen of the Federal Republic of Germany and at least 18 years old.",
                    "ar": "شهروند جمهوری فدرال آلمان است و حداقل ۱۸ سال سن دارد.",
                    "tr": "Almanya Federal Cumhuriyeti vatandaşıdır ve en az 18 yaşındadır.",
                    "uk": "є громадянином Федеративної Республіки Німеччина та має не менше 18 років.",
                    "ru": "является гражданином Федеративной Республики Германия и старше 18 лет.",
                    "pl": "jest obywatelem Republiki Federalnej Niemiec i ma co najmniej 18 lat.",
                    "fa": "شهروند جمهوری فدرال آلمان است و حداقل ۱۸ سال سن دارد."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
                    "en": "has lived in the Federal Republic of Germany for at least 3 years.",
                    "ar": "حداقل ۳ سال در جمهوری فدرال آلمان زندگی کرده است.",
                    "tr": "Almanya Federal Cumhuriyeti'nde en az 3 yıldır yaşıyor.",
                    "uk": "прожив у Федеративній Республіці Німеччина протягом щонайменше 3 років.",
                    "ru": "прожил в Федеративной Республике Германия не менее 3 лет.",
                    "pl": "mieszkał w Republice Federalnej Niemiec przez co najmniej 3 lata.",
                    "fa": "حداقل ۳ سال در جمهوری فدرال آلمان زندگی کرده است."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.",
                    "en": "is a citizen of the Federal Republic of Germany and at least 21 years old.",
                    "ar": "شهروند جمهوری فدرال آلمان است و حداقل ۲۱ سال سن دارد.",
                    "tr": "Almanya Federal Cumhuriyeti vatandaşıdır ve en az 21 yaşındadır.",
                    "uk": "є громадянином Федеративної Республіки Німеччина та має не менше 21 років.",
                    "ru": "является гражданином Федеративной Республики Германия и старше 21 года.",
                    "pl": "jest obywatelem Republiki Federalnej Niemiec i ma co najmniej 21 lat.",
                    "fa": "شهروند جمهوری فدرال آلمان است و حداقل ۲۱ سال سن دارد."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "elections"
    }
    ,
    {
        "id": "109",
        "question": {
            "de": "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
            "en": "How often are Bundestag elections normally held in Germany?",
            "ar": "در آلمان انتخابات بوندستاگ معمولاً چه زمانی برگزار می‌شود؟",
            "tr": "Almanya'da Bundestag seçimleri genellikle ne sıklıkla yapılır?",
            "uk": "Як часто зазвичай проводяться вибори до Бундестагу в Німеччині?",
            "ru": "Как часто обычно проходят выборы в Бундестаг в Германии?",
            "pl": "Jak często w Niemczech odbywają się wybory do Bundestagu?",
            "fa": "در آلمان انتخابات بوندستاگ معمولاً چه زمانی برگزار می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "alle drei Jahre",
                    "en": "every three years",
                    "ar": "هر سه سال",
                    "tr": "her üç yılda bir",
                    "uk": "кожні три роки",
                    "ru": "каждые три года",
                    "pl": "co trzy lata",
                    "fa": "هر سه سال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "alle vier Jahre",
                    "en": "every four years",
                    "ar": "هر چهار سال",
                    "tr": "her dört yılda bir",
                    "uk": "кожні чотири роки",
                    "ru": "каждые четыре года",
                    "pl": "co cztery lata",
                    "fa": "هر چهار سال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "alle fünf Jahre",
                    "en": "every five years",
                    "ar": "هر پنج سال",
                    "tr": "her beş yılda bir",
                    "uk": "кожні п'ять років",
                    "ru": "каждые пять лет",
                    "pl": "co pięć lat",
                    "fa": "هر پنج سال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "alle sechs Jahre",
                    "en": "every six years",
                    "ar": "هر شش سال",
                    "tr": "her altı yılda bir",
                    "uk": "кожні шість років",
                    "ru": "каждые шесть лет",
                    "pl": "co sześć lat",
                    "fa": "هر شش سال"
                }
            }
        ],
        "correctAnswer": 1,
        "category": "elections"
    },
    {
        "id": "110",
        "question": {
            "de": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
            "en": "For how many years is the Bundestag elected in Germany?",
            "ar": "بوندستاگ در آلمان برای چند سال انتخاب می‌شود؟",
            "tr": "Almanya'da Bundestag kaç yıl için seçilir?",
            "uk": "На скільки років обирається Бундестаг у Німеччині?",
            "ru": "На сколько лет избирается Бундестаг в Германии?",
            "pl": "Na ile lat wybierany jest Bundestag w Niemczech?",
            "fa": "بوندستاگ در آلمان برای چند سال انتخاب می‌شود؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "2 Jahre",
                    "en": "2 years",
                    "ar": "۲ سال",
                    "tr": "2 yıl",
                    "uk": "2 роки",
                    "ru": "2 года",
                    "pl": "2 lata",
                    "fa": "۲ سال"
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "3 Jahre",
                    "en": "3 years",
                    "ar": "۳ سال",
                    "tr": "3 yıl",
                    "uk": "3 роки",
                    "ru": "3 года",
                    "pl": "3 lata",
                    "fa": "۳ سال"
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "4 Jahre",
                    "en": "4 years",
                    "ar": "۴ سال",
                    "tr": "4 yıl",
                    "uk": "4 роки",
                    "ru": "4 года",
                    "pl": "4 lata",
                    "fa": "۴ سال"
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "5 Jahre",
                    "en": "5 years",
                    "ar": "۵ سال",
                    "tr": "5 yıl",
                    "uk": "5 років",
                    "ru": "5 лет",
                    "pl": "5 lat",
                    "fa": "۵ سال"
                }
            }
        ],
        "correctAnswer": 2,
        "category": "elections"
    }
    ,
    {
        "id": "111",
        "question": {
            "de": "Welche Handlung mit Bezug auf den Staat Israel ist in Deutschland verboten?",
            "en": "Which action regarding the State of Israel is prohibited in Germany?",
            "ar": "کدام عمل مربوط به دولت اسرائیل در آلمان ممنوع است؟",
            "tr": "Almanya'da İsrail Devleti ile ilgili hangi eylem yasaktır?",
            "uk": "Яка дія щодо Держави Ізраїль заборонена в Німеччині?",
            "ru": "Какое действие в отношении Государства Израиль запрещено в Германии?",
            "pl": "Które działanie w odniesieniu do państwa Izrael jest zabronione w Niemczech?",
            "fa": "کدام عمل در ارتباط با دولت اسرائیل در آلمان ممنوع است؟"
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "Die Politik Israels öffentlich kritisieren.",
                    "en": "Publicly criticize Israeli politics.",
                    "ar": "انتقاد علني از سیاست‌های اسرائیل.",
                    "tr": "İsrail politikasını açıkça eleştirmek.",
                    "uk": "Громадське критикування політики Ізраїлю.",
                    "ru": "Публичная критика политики Израиля.",
                    "pl": "Publiczne krytykowanie polityki Izraela.",
                    "fa": "انتقاد عمومی از سیاست‌های اسرائیل."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "Das Aufhängen einer israelischen Flagge auf dem Privatgrundstück.",
                    "en": "Hanging an Israeli flag on private property.",
                    "ar": "آویزان کردن پرچم اسرائیل در ملک خصوصی.",
                    "tr": "Özel mülk üzerinde İsrail bayrağı asmak.",
                    "uk": "Підвішування ізраїльського прапора на приватній власності.",
                    "ru": "Подвешивание израильского флага на частной собственности.",
                    "pl": "Powieszenie izraelskiej flagi na prywatnej posesji.",
                    "fa": "آویزان کردن پرچم اسرائیل در ملک خصوصی."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "Eine Diskussion über die Politik Israels.",
                    "en": "A discussion about Israeli politics.",
                    "ar": "بحث درباره سیاست‌های اسرائیل.",
                    "tr": "İsrail politikası hakkında bir tartışma.",
                    "uk": "Обговорення політики Ізраїлю.",
                    "ru": "Обсуждение политики Израиля.",
                    "pl": "Dyskusja na temat polityki Izraela.",
                    "fa": "بحث در مورد سیاست‌های اسرائیل."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "Der öffentliche Aufruf zur Vernichtung Israels.",
                    "en": "The public call for the destruction of Israel.",
                    "ar": "نداء علني لتدمير إسرائيل.",
                    "tr": "İsrail'in yok edilmesi için kamuya açık çağrı.",
                    "uk": "Публічний заклик до знищення Ізраїлю.",
                    "ru": "Публичный призыв к уничтожению Израиля.",
                    "pl": "Publiczny apel o zniszczenie Izraela.",
                    "fa": "ندای عمومی برای نابودی اسرائیل."
                }
            }
        ],
        "correctAnswer": 3,
        "category": "law"
    }
    ,
    {
        "id": "112",
        "question": {
            "de": "Die Wahlen in Deutschland sind …",
            "en": "Elections in Germany are ...",
            "ar": "انتخابات في ألمانيا ...",
            "tr": "Almanya'daki seçimler ...",
            "uk": "Вибори в Німеччині ...",
            "ru": "Выборы в Германии ...",
            "pl": "Wybory w Niemczech ...",
            "fa": "انتخابات در آلمان ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "speziell.",
                    "en": "special.",
                    "ar": "خاص.",
                    "tr": "özel.",
                    "uk": "особливі.",
                    "ru": "специальные.",
                    "pl": "specjalne.",
                    "fa": "خاص."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "geheim.",
                    "en": "secret.",
                    "ar": "سري.",
                    "tr": "gizli.",
                    "uk": "секретні.",
                    "ru": "секретные.",
                    "pl": "tajne.",
                    "fa": "سری."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "berufsbezogen.",
                    "en": "occupation-related.",
                    "ar": "مرتبطة بالمهنة.",
                    "tr": "meslekle ilgili.",
                    "uk": "пов'язані з професією.",
                    "ru": "связанные с профессией.",
                    "pl": "zawodowe.",
                    "fa": "مرتبط با شغل."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "geschlechtsabhängig.",
                    "en": "gender-dependent.",
                    "ar": "معتمدة على الجنس.",
                    "tr": "cinsiyete bağlı.",
                    "uk": "залежні від статі.",
                    "ru": "зависимые от пола.",
                    "pl": "zależne od płci.",
                    "fa": "وابسته به جنسیت."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
    {
        "id": "113",
        "question": {
            "de": "Wahlen in Deutschland gewinnt die Partei, die …",
            "en": "In Germany, elections are won by the party that ...",
            "ar": "در آلمان، انتخابات را حزبی برنده می‌شود که ...",
            "tr": "Almanya'da seçimleri, partinin ... kazanıyor.",
            "uk": "У Німеччині вибори виграє партія, яка ...",
            "ru": "На выборах в Германии побеждает партия, которая ...",
            "pl": "W wyborach w Niemczech wygrywa partia, która ...",
            "fa": "در انتخابات آلمان، حزبی برنده می‌شود که ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "die meisten Stimmen bekommt.",
                    "en": "receives the most votes.",
                    "ar": "بیشترین رأی را می‌گیرد.",
                    "tr": "en çok oyu alır.",
                    "uk": "отримує найбільше голосів.",
                    "ru": "получает больше всего голосов.",
                    "pl": "otrzymuje najwięcej głosów.",
                    "fa": "بیشترین رأی را می‌آورد."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "die meisten Männer mehrheitlich gewählt haben.",
                    "en": "most men have mostly voted for.",
                    "ar": "بیشتر مردان بیشتر رأی داده‌اند.",
                    "tr": "en çok erkeklerin çoğunlukla oy verdiği.",
                    "uk": "більшість чоловіків проголосували.",
                    "ru": "большинство мужчин проголосовали.",
                    "pl": "większość mężczyzn głosowała.",
                    "fa": "بیشتر مردان به آن رأی داده‌اند."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.",
                    "en": "received the most votes from workers.",
                    "ar": "بیشترین رأی را از کارگران گرفته است.",
                    "tr": "işçilerden en çok oyu almıştır.",
                    "uk": "отримала найбільше голосів від робітників.",
                    "ru": "получила больше всего голосов от рабочих.",
                    "pl": "otrzymała najwięcej głosów od pracowników.",
                    "fa": "بیشترین رأی را از کارگران به‌دست آورده است."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat.",
                    "en": "received the most first votes for their chancellor candidate.",
                    "ar": "بیشترین رأی اول را برای نامزد صدراعظم خود دریافت کرده است.",
                    "tr": "başbakan adayına en çok birinci oyu almıştır.",
                    "uk": "отримала найбільше першорядних голосів за свого кандидата в канцлери.",
                    "ru": "получила больше всего первичных голосов за своего кандидата в канцлеры.",
                    "pl": "otrzymała najwięcej głosów pierwszych dla swojego kandydata na kanclerza.",
                    "fa": "بیشترین رأی اول را برای نامزد صدراعظم خود کسب کرده است."
                }
            }
        ],
        "correctAnswer": 0,
        "category": "politics"
    }
    ,
    {
        "id": "114",
        "question": {
            "de": "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
            "en": "Participating in democratic elections in Germany is ...",
            "ar": "شرکت در انتخابات دموکراتیک در آلمان ...",
            "tr": "Almanya'daki demokratik seçimlere katılmak ...",
            "uk": "Участь у демократичних виборах у Німеччині ...",
            "ru": "Участие в демократических выборах в Германии ...",
            "pl": "Udział w demokratycznych wyborach w Niemczech ...",
            "fa": "شرکت در انتخابات دموکراتیک در آلمان ..."
        },
        "answers": [
            {
                "id": 0,
                "text": {
                    "de": "eine Pflicht.",
                    "en": "a duty.",
                    "ar": "یک وظیفه.",
                    "tr": "bir yükümlülük.",
                    "uk": "обов'язок.",
                    "ru": "обязанность.",
                    "pl": "obowiązek.",
                    "fa": "یک وظیفه."
                }
            },
            {
                "id": 1,
                "text": {
                    "de": "ein Recht.",
                    "en": "a right.",
                    "ar": "یک حق.",
                    "tr": "bir haktır.",
                    "uk": "право.",
                    "ru": "право.",
                    "pl": "prawo.",
                    "fa": "یک حق."
                }
            },
            {
                "id": 2,
                "text": {
                    "de": "ein Zwang.",
                    "en": "an obligation.",
                    "ar": "یک اجبار.",
                    "tr": "bir zorunluluk.",
                    "uk": "примус.",
                    "ru": "принуждение.",
                    "pl": "przymus.",
                    "fa": "یک اجبار."
                }
            },
            {
                "id": 3,
                "text": {
                    "de": "eine Last.",
                    "en": "a burden.",
                    "ar": "یک بار.",
                    "tr": "bir yük.",
                    "uk": "вагомість.",
                    "ru": "бремя.",
                    "pl": "ciężar.",
                    "fa": "یک بار."
                }
            }
        ],
        "correctAnswer": 1,
        "category": "politics"
    }
    ,
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
      {
        id: '1',
        question: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: '',
            },
        answers: [
            {
              id: 0,
              text: {
                de: '',
                en: '',
                ar: '',
                tr: '',
                uk: '',
                ru: '',
                pl: '',
                fa: ''
                }
            },
            {
                id: 1,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 2,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              },
              {
                id: 3,
                text: {
                  de: '',
                  en: '',
                  ar: '',
                  tr: '',
                  uk: '',
                  ru: '',
                  pl: '',
                  fa: ''
                  }
              }
        ],
        correctAnswer: 2,
        category: ''
      },
    {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },
  {
    id: '1',
    question: {
        de: '',
        en: '',
        ar: '',
        tr: '',
        uk: '',
        ru: '',
        pl: '',
        fa: '',
        },
    answers: [
        {
          id: 0,
          text: {
            de: '',
            en: '',
            ar: '',
            tr: '',
            uk: '',
            ru: '',
            pl: '',
            fa: ''
            }
        },
        {
            id: 1,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 2,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          },
          {
            id: 3,
            text: {
              de: '',
              en: '',
              ar: '',
              tr: '',
              uk: '',
              ru: '',
              pl: '',
              fa: ''
              }
          }
    ],
    correctAnswer: 2,
    category: ''
  },

  {
    id: '1',
    question: {
      de: 'Von welchem Recht in Deutschland macht man Gebrauch, wenn man demonstrieren geht?',
      en: 'What right in Germany do you exercise when you go to demonstrate?',
      ar: 'ما هو الحق في ألمانيا الذي تمارسه عندما تذهب للتظاهر؟',
      tr: 'Almanya\'da gösteri yaparken hangi hakkı kullanırsınız?',
      uk: 'Яке право в Німеччині ви використовуєте, коли йдете на демонстрацію?',
      ru: 'Каким правом в Германии вы пользуетесь, когда идете на демонстрацию?',
      pl: 'Z jakiego prawa w Niemczech korzystasz, gdy idziesz na demonstrację?',
      fa: 'وقتی به تظاهرات می‌روید، از کدام حق در آلمان استفاده می‌کنید؟'
    },
    answers: [
      {
        id: 0,
        text: {
          de: 'die Menschen Steuern zahlen',
          en: 'people pay taxes',
          ar: 'الناس يدفعون الضرائب',
          tr: 'insanlar vergi öder',
          uk: 'люди платять податки',
          ru: 'люди платят налоги',
          pl: 'ludzie płacą podatki',
          fa: 'مردم مالیات می پردازند'
        }
      },
      {
        id: 1,
        text: {
          de: 'die Menschen das Wahlrecht haben',
          en: 'people have the right to vote',
          ar: 'الناس لديهم حق التصويت',
          tr: 'insanların oy kullanma hakkı vardır',
          uk: 'люди мають право голосу',
          ru: 'люди имеют право голоса',
          pl: 'ludzie mają prawo głosu',
          fa: 'مردم حق رای دارند'
        }
      },
      {
        id: 2,
        text: {
          de: 'hier Meinungsfreiheit gilt',
          en: 'freedom of expression applies here',
          ar: 'حرية التعبير مطبقة هنا',
          tr: 'burada ifade özgürlüğü geçerlidir',
          uk: 'тут діє свобода слова',
          ru: 'здесь действует свобода слова',
          pl: 'tutaj obowiązuje wolność wypowiedzi',
          fa: 'آزادی بیان در اینجا اعمال می شود'
        }
      }
    ],
    correctAnswer: 2,
    category: 'politics'
  },
  {
    id: '2',
    question: {
      de: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am...',
      en: 'In Germany, parents can decide until their child is 14 years old whether they participate in school...',
      ar: 'في ألمانيا، يمكن للوالدين أن يقررا حتى سن 14 عامًا ما إذا كان طفلهما سيشارك في...',
      tr: 'Almanya\'da, ebeveynler çocukları 14 yaşına gelene kadar okulda... katılıp katılmayacağına karar verebilirler',
      uk: 'У Німеччині батьки можуть вирішувати до 14 років своєї дитини, чи братиме вона участь у...',
      ru: 'В Германии родители могут решать до 14-летнего возраста своего ребенка, будет ли он участвовать в...',
      pl: 'W Niemczech rodzice mogą decydować do 14 roku życia swojego dziecka, czy będzie ono uczestniczyć w...',
      fa: 'در آلمان، والدین می‌توانند تا سن 14 سالگی فرزندشان تصمیم بگیرند که آیا در... مدرسه شرکت کنند'
    },
    answers: [
      {
        id: 0,
        text: {
          de: 'Geschichtsunterricht teilnimmt',
          en: 'history lessons',
          ar: 'دروس التاريخ',
          tr: 'tarih dersleri',
          uk: 'уроки історії',
          ru: 'уроки истории',
          pl: 'lekcje historii',
          fa: 'کلاس‌های تاریخ'
        }
      },
      {
        id: 1,
        text: {
          de: 'Religionsunterricht teilnimmt',
          en: 'religious education',
          ar: 'التعليم الديني',
          tr: 'din eğitimi',
          uk: 'релігійна освіта',
          ru: 'религиозное образование',
          pl: 'edukacja religijna',
          fa: 'آموزش مذهبی'
        }
      },
      {
        id: 2,
        text: {
          de: 'Politikunterricht teilnimmt',
          en: 'political education',
          ar: 'التعليم السياسي',
          tr: 'siyasi eğitim',
          uk: 'політична освіта',
          ru: 'политическое образование',
          pl: 'edukacja polityczna',
          fa: 'آموزش سیاسی'
        }
      },
      {
        id: 3,
        text: {
          de: 'Sprachunterricht teilnimmt',
          en: 'language lessons',
          ar: 'دروس اللغة',
          tr: 'dil dersleri',
          uk: 'уроки мови',
          ru: 'уроки языка',
          pl: 'lekcje języka',
          fa: 'کلاس‌های زبان'
        }
      }
    ],
    correctAnswer: 1,
    category: 'education'
  },
  {
    id: '3',
    question: {
      de: 'Deutschland ist ein Rechtsstaat. Was ist damit gemeint?',
      en: 'Germany is a constitutional state. What does this mean?',
      ar: 'ألمانيا دولة قانون. ماذا يعني هذا؟',
      tr: 'Almanya bir hukuk devletidir. Bu ne anlama geliyor?',
      uk: 'Німеччина є правовою державою. Що це означає?',
      ru: 'Германия - правовое государство. Что это значит?',
      pl: 'Niemcy są państwem prawa. Co to oznacza?',
      fa: 'آلمان یک کشور قانونمند است. این به چه معناست؟'
    },
    answers: [
      {
        id: 0,
        text: {
          de: 'Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten',
          en: 'All residents and the state must abide by the laws',
          ar: 'يجب على جميع المقيمين والدولة الالتزام بالقوانين',
          tr: 'Tüm sakinler ve devlet yasalara uymak zorundadır',
          uk: 'Всі жителі та держава повинні дотримуватися законів',
          ru: 'Все жители и государство должны соблюдать законы',
          pl: 'Wszyscy mieszkańcy i państwo muszą przestrzegać prawa',
          fa: 'همه ساکنان و دولت باید از قوانین پیروی کنند'
        }
      },
      {
        id: 1,
        text: {
          de: 'Der Staat muss sich nicht an die Gesetze halten',
          en: 'The state does not have to abide by the laws',
          ar: 'الدولة ليست ملزمة بالالتزام بالقوانين',
          tr: 'Devletin yasalara uyması gerekmez',
          uk: 'Держава не повинна дотримуватися законів',
          ru: 'Государство не обязано соблюдать законы',
          pl: 'Państwo nie musi przestrzegać prawa',
          fa: 'دولت مجبور به پیروی از قوانین نیست'
        }
      },
      {
        id: 2,
        text: {
          de: 'Nur Deutsche müssen die Gesetze befolgen',
          en: 'Only Germans must follow the laws',
          ar: 'الألمان فقط يجب أن يتبعوا القوانين',
          tr: 'Sadece Almanlar yasalara uymak zorundadır',
          uk: 'Тільки німці повинні дотримуватися законів',
          ru: 'Только немцы должны соблюдать законы',
          pl: 'Tylko Niemcy muszą przestrzegać prawa',
          fa: 'فقط آلمانی‌ها باید از قوانین پیروی کنند'
        }
      },
      {
        id: 3,
        text: {
          de: 'Die Gerichte machen die Gesetze',
          en: 'The courts make the laws',
          ar: 'المحاكم تصنع القوانين',
          tr: 'Mahkemeler yasaları yapar',
          uk: 'Суди створюють закони',
          ru: 'Суды создают законы',
          pl: 'Sądy tworzą prawo',
          fa: 'دادگاه‌ها قوانین را می‌سازند'
        }
      }
    ],
    correctAnswer: 0,
    category: 'law'
  },
  {
    id: '4',
    question: {
      de: 'Welches Recht gehört zu den Grundrechten in Deutschland?',
      en: 'Which right is one of the fundamental rights in Germany?',
      ar: 'أي حق من الحقوق الأساسية في ألمانيا؟',
      tr: 'Almanya\'da temel haklardan hangisi vardır?',
      uk: 'Яке право належить до основних прав у Німеччині?',
      ru: 'Какое право относится к основным правам в Германии?',
      pl: 'Które prawo należy do praw podstawowych w Niemczech?',
      fa: 'کدام حق جزو حقوق اساسی در آلمان است؟'
    },
    answers: [
      {
        id: 0,
        text: {
          de: 'Waffenbesitz',
          en: 'Possession of weapons',
          ar: 'حيازة الأسلحة',
          tr: 'Silah bulundurma',
          uk: 'Володіння зброєю',
          ru: 'Владение оружием',
          pl: 'Posiadanie broni',
          fa: 'مالکیت اسلحه'
        }
      },
      {
        id: 1,
        text: {
          de: 'Faustrecht',
          en: 'Law of the strongest',
          ar: 'قانون الأقوى',
          tr: 'Kuvvet hakkı',
          uk: 'Право сильного',
          ru: 'Право сильного',
          pl: 'Prawo pięści',
          fa: 'قانون جنگل'
        }
      },
      {
        id: 2,
        text: {
          de: 'Meinungsfreiheit',
          en: 'Freedom of expression',
          ar: 'حرية التعبير',
          tr: 'İfade özgürlüğü',
          uk: 'Свобода слова',
          ru: 'Свобода слова',
          pl: 'Wolność wypowiedzi',
          fa: 'آزادی بیان'
        }
      },
      {
        id: 3,
        text: {
          de: 'Selbstjustiz',
          en: 'Vigilante justice',
          ar: 'العدالة الذاتية',
          tr: 'Kişisel adalet',
          uk: 'Самосуд',
          ru: 'Самосуд',
          pl: 'Samosąd',
          fa: 'عدالت شخصی'
        }
      }
    ],
    correctAnswer: 2,
    category: 'basic_rights'
  },
  {
    id: '5',
    question: {
      de: 'Wahlen in Deutschland sind frei. Was bedeutet das?',
      en: 'Elections in Germany are free. What does this mean?',
      ar: 'الانتخابات في ألمانيا حرة. ماذا يعني هذا؟',
      tr: 'Almanya\'da seçimler özgürdür. Bu ne anlama geliyor?',
      uk: 'Вибори в Німеччині вільні. Що це означає?',
      ru: 'Выборы в Германии свободные. Что это значит?',
      pl: 'Wybory w Niemczech są wolne. Co to oznacza?',
      fa: 'انتخابات در آلمان آزاد است. این به چه معناست؟'
    },
    answers: [
      {
        id: 0,
        text: {
          de: 'Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt',
          en: 'You can accept money for voting for a specific candidate',
          ar: 'يمكنك قبول المال مقابل التصويت لمرشح معين',
          tr: 'Belirli bir adaya oy vermek için para kabul edebilirsiniz',
          uk: 'Можна приймати гроші за голосування за певного кандидата',
          ru: 'Можно принимать деньги за голосование за определенного кандидата',
          pl: 'Można przyjmować pieniądze za głosowanie na konkretnego kandydata',
          fa: 'می‌توانید در ازای رای دادن به نامزد خاصی پول دریافت کنید'
        }
      },
      {
        id: 1,
        text: {
          de: 'Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben',
          en: 'Voters must not be influenced or forced to vote in a certain way and must not suffer any disadvantages from the election',
          ar: 'يجب ألا يتعرض الناخبون للتأثير أو الإجبار على التصويت بطريقة معينة ويجب ألا يعانوا من أي مساوئ من الانتخابات',
          tr: 'Seçmenler belirli bir şekilde oy kullanmaya etkilenmemeli veya zorlanmamalı ve seçimden dolayı herhangi bir dezavantaj yaşamamalıdır',
          uk: 'Виборці не повинні піддаватися впливу або примусу голосувати певним чином і не повинні зазнавати жодних недоліків від виборів',
          ru: 'Избиратели не должны подвергаться влиянию или принуждению голосовать определенным образом и не должны испытывать никаких недостатков от выборов',
          pl: 'Wyborcy nie mogą być wpływani ani zmuszani do głosowania w określony sposób i nie mogą ponosić żadnych niedogodności z powodu wyborów',
          fa: 'رای‌دهندگان نباید تحت تأثیر قرار گیرند یا مجبور به رای دادن به روشی خاص شوند و نباید از انتخابات متحمل هیچ ضرری شوند'
        }
      },
      {
        id: 2,
        text: {
          de: 'Nur Personen, die noch nie im Gefängnis waren, dürfen wählen',
          en: 'Only people who have never been in prison may vote',
          ar: 'فقط الأشخاص الذين لم يدخلوا السجن من قبل يمكنهم التصويت',
          tr: 'Sadece hiç hapiste olmamış kişiler oy kullanabilir',
          uk: 'Тільки люди, які ніколи не були у в\'язниці, можуть голосувати',
          ru: 'Только люди, которые никогда не были в тюрьме, могут голосовать',
          pl: 'Tylko osoby, które nigdy nie były w więzieniu, mogą głosować',
          fa: 'فقط افرادی که هرگز در زندان نبوده‌اند می‌توانند رای دهند'
        }
      },
      {
        id: 3,
        text: {
          de: 'Alle wahlberechtigten Personen müssen wählen',
          en: 'All eligible persons must vote',
          ar: 'يجب على جميع الأشخاص المؤهلين التصويت',
          tr: 'Tüm oy kullanma hakkına sahip kişiler oy kullanmak zorundadır',
          uk: 'Усі особи, які мають право голосу, повинні голосувати',
          ru: 'Все лица, имеющие право голоса, должны голосовать',
          pl: 'Wszystkie uprawnione osoby muszą głosować',
          fa: 'همه افراد واجد شرایط باید رای دهند'
        }
      }
    ],
    correctAnswer: 1,
    category: 'elections'
  },
  {
    id: '6',
    question: {
        de: 'Was ist die Hauptstadt von Deutschland?',
        en: 'What is the capital of Germany?',
        ar: 'ما هي عاصمة ألمانيا؟',
        tr: "'Almanya'nın başkenti neresidir?'",
        uk: 'Яка столиця Німеччини?',
        ru: 'Какая столица Германии?',
        pl: 'Jaka jest stolica Niemiec?',
        fa: 'پایتخت آلمان چیست؟'
    },
    answers: [
        {
            id: 0,
            text: {
                de: 'München',
                en: 'Munich',
                ar: 'ميونيخ',
                tr: 'Münih',
                uk: 'Мюнхен',
                ru: 'Мюнхен',
                pl: 'Monachium',
                fa: 'مونیخ'
            }
        },
        {
            id: 1,
            text: {
                de: 'Berlin',
                en: 'Berlin',
                ar: 'برلين',
                tr: 'Berlin',
                uk: 'Берлін',
                ru: 'Берлин',
                pl: 'Berlin',
                fa: 'برلین'
            }
        },
        {
            id: 2,
            text: {
                de: 'Frankfurt',
                en: 'Frankfurt',
                ar: 'فرانكفورت',
                tr: 'Frankfurt',
                uk: 'Франкфурт',
                ru: 'Франкфурт',
                pl: 'Frankfurt',
                fa: 'فرانکفورت'
            }
        },
        {
            id: 3,
            text: {
                de: 'Hamburg',
                en: 'Hamburg',
                ar: 'هامبورغ',
                tr: 'Hamburg',
                uk: 'Гамбург',
                ru: 'Гамбург',
                pl: 'Hamburg',
                fa: 'هامبورگ'
            }
        }
    ],
    correctAnswer: 1,
    category: 'geography'
},
{
    id: '7',
    question: {
        de: 'Was symbolisiert die Farbe Schwarz auf der deutschen Flagge?',
        en: 'What does the color black on the German flag symbolize?',
        ar: 'ماذا يرمز اللون الأسود في العلم الألماني؟',
        tr: 'Alman bayrağındaki siyah renk neyi simgeler?',
        uk: 'Що символізує чорний колір на прапорі Німеччини?',
        ru: 'Что символизирует черный цвет на флаге Германии?',
        pl: 'Co symbolizuje czarny kolor na niemieckiej fladze?',
        fa: 'رنگ سیاه روی پرچم آلمان چه نمادی دارد؟'
    },
    answers: [
        {
            id: 0,
            text: {
                de: 'Stärke und Tapferkeit',
                en: 'Strength and bravery',
                ar: 'القوة والشجاعة',
                tr: 'Güç ve cesaret',
                uk: 'Сила і мужність',
                ru: 'Сила и мужество',
                pl: 'Siła i odwaga',
                fa: 'قدرت و شجاعت'
            }
        },
        {
            id: 1,
            text: {
                de: 'Einheit und Freiheit',
                en: 'Unity and freedom',
                ar: 'الوحدة والحرية',
                tr: 'Birlik ve özgürlük',
                uk: 'Єдність і свобода',
                ru: 'Единство и свобода',
                pl: 'Jedność i wolność',
                fa: 'وحدت و آزادی'
            }
        },
        {
            id: 2,
            text: {
                de: 'Erde und Arbeit',
                en: 'Soil and labor',
                ar: 'الأرض والعمل',
                tr: 'Toprak ve emek',
                uk: 'Земля і праця',
                ru: 'Земля и труд',
                pl: 'Ziemia i praca',
                fa: 'خاک و کار'
            }
        },
        {
            id: 3,
            text: {
                de: 'Leid und Wiedergeburt',
                en: 'Suffering and rebirth',
                ar: 'المعاناة والولادة من جديد',
                tr: 'Acı ve yeniden doğuş',
                uk: 'Страждання і відродження',
                ru: 'Страдание и возрождение',
                pl: 'Cierpienie i odrodzenie',
                fa: 'رنج و تجدید حیات'
            }
        }
    ],
    correctAnswer: 0,
    category: 'history'
},
{
    id: '8',
    question: {
        de: 'Wie heißt das Parlament in Deutschland?',
        en: 'What is the name of the parliament in Germany?',
        ar: 'ما اسم البرلمان في ألمانيا؟',
        tr: 'Almanya\'daki parlamentonun adı nedir?',
        uk: 'Як називається парламент у Німеччині?',
        ru: 'Как называется парламент в Германии?',
        pl: 'Jak nazywa się parlament w Niemczech?',
        fa: 'نام پارلمان در آلمان چیست؟'
    },
    answers: [
        {
            id: 0,
            text: {
                de: 'Bundestag',
                en: 'Bundestag',
                ar: 'البوندستاغ',
                tr: 'Bundestag',
                uk: 'Бундестаг',
                ru: 'Бундестаг',
                pl: 'Bundestag',
                fa: 'بوندستاگ'
            }
        },
        {
            id: 1,
            text: {
                de: 'Reichstag',
                en: 'Reichstag',
                ar: 'الرايخستاغ',
                tr: 'Reichstag',
                uk: 'Рейхстаг',
                ru: 'Рейхстаг',
                pl: 'Reichstag',
                fa: 'رایشتاگ'
            }
        },
        {
            id: 2,
            text: {
                de: 'Landtag',
                en: 'Landtag',
                ar: 'لاندتاغ',
                tr: 'Landtag',
                uk: 'Ландтаг',
                ru: 'Ландтаг',
                pl: 'Landtag',
                fa: 'لاندتاگ'
            }
        },
        {
            id: 3,
            text: {
                de: 'Ständerat',
                en: 'Council of States',
                ar: 'مجلس الولايات',
                tr: 'Ständerat',
                uk: 'Рада штатів',
                ru: 'Совет кантонов',
                pl: 'Rada Kantonalna',
                fa: 'شورای ایالات'
            }
        }
    ],
    correctAnswer: 0,
    category: 'politics'
},
{
    id: '9',
    question: {
        de: 'Welches ist das größte Bundesland in Deutschland?',
        en: 'What is the largest federal state in Germany?',
        ar: 'ما هي أكبر ولاية فيدرالية في ألمانيا؟',
        tr: 'Almanya\'daki en büyük eyalet hangisidir?',
        uk: 'Яка найбільша федеральна земля в Німеччині?',
        ru: 'Какая самая большая федеральная земля в Германии?',
        pl: 'Który land jest największy w Niemczech?',
        fa: 'بزرگترین ایالت فدرال در آلمان کدام است؟'
    },
    answers: [
        {
            id: 0,
            text: {
                de: 'Bayern',
                en: 'Bavaria',
                ar: 'بافاريا',
                tr: 'Bavyera',
                uk: 'Баварія',
                ru: 'Бавария',
                pl: 'Bawaria',
                fa: 'بایرن'
            }
        },
        {
            id: 1,
            text: {
                de: 'Hessen',
                en: 'Hesse',
                ar: 'هسن',
                tr: 'Hessen',
                uk: 'Гессен',
                ru: 'Гессен',
                pl: 'Hesja',
                fa: 'هسن'
            }
        },
        {
            id: 2,
            text: {
                de: 'Nordrhein-Westfalen',
                en: 'North Rhine-Westphalia',
                ar: 'شمال الراين - وستفاليا',
                tr: 'Kuzey Ren-Vestfalya',
                uk: 'Північний Рейн-Вестфалія',
                ru: 'Северный Рейн-Вестфалия',
                pl: 'Nadrenia Północna-Westfalia',
                fa: 'نوردراین-وستفالن'
            }
        },
        {
            id: 3,
            text: {
                de: 'Sachsen',
                en: 'Saxony',
                ar: 'ساكسونيا',
                tr: 'Saksonya',
                uk: 'Саксонія',
                ru: 'Саксония',
                pl: 'Saksonia',
                fa: 'زاکسن'
            }
        }
    ],
    correctAnswer: 0,
    category: 'geography'
}

];