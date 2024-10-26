// src/data/questions.ts
import { Question } from '../types/question';

export const questions: Question[] = [
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
  }
];