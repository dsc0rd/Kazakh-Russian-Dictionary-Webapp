export const Kazakh = {
    termins: "Шарттар",
    community: "Қауымдастық",
    faq: "Жиі қойылатын сұрақтар",
    new_word: "Сөз ұcызу",
    settings: "Баптаулар",
    support: "Қолдау",
    sectors: "Салаларының тізімі",
    translate: "Аудару",
    similar_words: "Ұқсас сөздер",
    ru_kz: "орысша-қазақша",
    kz_ru: "қазақша-орысша",

    general_vocabulary: "Жалпы лексика",
    physical_culture_and_sport: "дене шынықтыру және спорт",
    office_work: "Іс жүргізу",
    history: "Тарих",
    literature: "Әдебиет",
    agriculture: "Ауыл шаруашылығы",
    livestock: "Мал шаруашылығы",
    oil_and_gas_industry: "Мұнай және газ өнеркәсібі",
    light_industry: "Жеңіл өнеркәсіп",
    heavy_industry: "Ауыр өнеркәсіп",
    culture_and_art: "Мәдениет және Өнер",
    pedagogy: "Педагогика",
    philosophy: "Философия",
    political_science: "Саясаттану",
    food_industry: "Тағам өнеркәсібі",
    jurisprudence: "Юриспруденция",
    geography: "География",
    geodesy_geology: "Геодезия, геология",
    astronomy: "Астрономия",
    mathematics: "Математика",
    information_technology: "Ақпараттық технологиялар",
    mining_metallurgy: "Тау-кен өндіру, металлургия",
    ecology: "Экология",
    water_industry: "Су шаруашылығы",
    medicine: "Дәрі",
    biology: "Биология",
    mechanical_engineering: "Машина жасау",
    transport: "Көлік",
    architecture_and_construction: "Сәулет және құрылыс",
    warfare: "Әскери іс",
    chemistry: "Химия",
    electronics_and_communications: "Электроника және байланыс",
    energy: "Энергетика",
    mechanics_and_engineering: "Механика және инженерия",
    mathematics: "Математика",
    physics: "Физика",
    school_terminology: "Мектеп терминологиясы",

}

export const Russian = {
    termins: "Термины",
    community: "Сообщество",
    faq: "Часто задаваемые вопросы",
    new_word: "Предложить слово",
    settings: "Настройки",
    support: "Поддержка",
    sectors: "Список отраслей",
    translate: "Перевести",
    similar_words: "Схожие слова",
    ru_kz: "Русско-Казахский",
    kz_ru: "Казахско-Русский",

    general_vocabulary: "Общая лексика",
    physical_culture_and_sport: "Физическая культура и спорт",
    office_work: "Делопроизводство",
    history: "История",
    literature: "Литература",
    agriculture: "Сельское хозяйство",
    livestock: "Животноводство",
    oil_and_gas_industry: "Нефтегазовая промышленность",
    light_industry: "Легкая промышленность",
    heavy_industry: "Тяжелая промышленность",
    culture_and_art: "Культура и Искусство",
    pedagogy: "Педагогика",
    philosophy: "Философия",
    political_science: "Политология",
    food_industry: "Пищевая промышленность",
    jurisprudence: "Юриспруденция",
    geography: "География",
    geodesy_geology: "Геодезия, геология",
    astronomy: "Астрономия",
    mathematics: "Математика",
    information_technology: "Информационные технологии",
    mining_metallurgy: "Добыча, металлургия",
    ecology: "Экология",
    water_industry: "Водная промышленность",
    medicine: "Медицина",
    biology: "Биология",
    mechanical_engineering: "Машиностроение",
    transport: "Транспорт",
    architecture_and_construction: "Архитектура и строительство",
    warfare: "Военное дело",
    chemistry: "Химия",
    electronics_and_communications: "Электроника и связь",
    energy: "Энергетика",
    mechanics_and_engineering: "Механика и инженерия",
    mathematics: "Математика",
    physics: "Физика",
    school_terminology: "Школьная терминология",


}


const Default = Russian;

export const getTranslations = (langCode) => {
    if (langCode === 'kz') return Kazakh;
    if (langCode === 'ru') return Russian;
    // === add conditionals here for additional languages here === //
};


export const localize = (langCode, phraseKey) => {
    const lang = getTranslations(langCode);
    return lang[phraseKey] ? lang[phraseKey] : Default[phraseKey];
};