type Transactions = {
  incomes: {
    name: string;
    category: string;
    value: number;
    date: Date;
  };
  expenses: {
    name: string;
    category: string;
    value: number;
    date: Date;
  };
};

const categories = [
  'Music',
  'Food',
  'Sport',
  'Sneakers',
  'Clothes',
  'Entertainement',
  'Transport',
  'Utility',
  'Gift',
  'Job',
  'Refund',
  'Extra income',
  'Transfert'
];

const transactions = {
  incomes: [
    {
      name: "Pizza Domino's",
      category: 'Refund',
      value: 48,
      date: new Date('2020-03-31')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-04-05')
    },
    {
      name: "Cartouches d'imprimante",
      category: 'Refund',
      value: 30,
      date: new Date('2020-04-07')
    },
    {
      name: 'Cadeau Arnaud + Remboursement cadeau Mbombo (carte son)',
      category: 'Gift',
      value: 180,
      date: new Date('2020-04-16')
    },
    {
      name: 'Remboursement cadeau Mbombo (carte son) - Darons',
      category: 'Refund',
      value: 75,
      date: new Date('2020-04-17')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-05-05')
    },
    {
      name: 'Remboursement chargeur Mbombo',
      category: 'Refund',
      value: 56,
      date: new Date('2020-18-05')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-06-05')
    },
    {
      name: 'Remboursement Coque GSM Papa',
      category: 'Refund',
      value: 7,
      date: new Date('2020-06-18')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-07-05')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-08-05')
    },
    {
      name: 'Argent de poche',
      category: 'Extra income',
      value: 50,
      date: new Date('2020-09-05')
    },
    {
      name: 'Transfert économies pour Logic Pro',
      category: 'Music',
      value: 230,
      date: new Date('2020-08-01')
    },
    {
      name: 'Revenues Home Béthanie (Job étudiant)',
      category: 'Job',
      value: 1663.33,
      date: new Date('2020-08-05')
    },
    {
      name: 'Remboursement Thomman (mauvais câble USB)',
      category: 'Music',
      value: 9.9,
      date: new Date('2020-08-19')
    }
  ],
  expenses: [
    {
      name: 'Plugin Halftime',
      category: 'Music',
      value: 10,
      date: new Date('2020-03-23')
    },
    {
      name: 'Carrefour Express',
      category: 'Food',
      value: 4.38,
      date: new Date('2020-03-25')
    },
    {
      name: 'Cymatic sample pack - Don COVID',
      category: 'Gift',
      value: 23.74,
      date: new Date('2020-03-27')
    },
    {
      name: "Pizza Domino's",
      category: 'Food',
      value: 48,
      date: new Date('2020-03-31')
    },
    {
      name: "Cartouches d'imprimante",
      category: 'Utility',
      value: 30,
      date: new Date('2020-04-07')
    },
    {
      name: 'Cadeau Mbombo (carte son)',
      category: 'Gift',
      value: 157,
      date: new Date('2020-04-16')
    },
    {
      name: 'Abonnement Freeletics (6 mois)',
      category: 'Sport',
      value: 30,
      date: new Date('2020-04-20')
    },
    {
      name: 'Chargeur Mac Mbombo',
      category: 'Utilitary',
      value: 55.65,
      date: new Date('2020-05-01')
    },
    {
      name: 'Tapis de sport',
      category: 'Sport',
      value: 37.9,
      date: new Date('2020-05-26')
    },
    {
      name: 'Don association Black Lives Matter',
      category: 'Gift',
      value: 23.25,
      date: new Date('2020-06-03')
    },
    {
      name: 'Cadeau Papa (GSM)',
      category: 'Gift',
      value: 30,
      date: new Date('2020-06-17')
    },
    {
      name: 'Clavier Ordinateur + Coque GSM',
      category: 'Utilitary',
      value: 28.98,
      date: new Date('2020-06-18')
    },
    {
      name: 'Cadeau Arnaud (Bibliothéque IKEA)',
      category: 'Gift',
      value: 34.98,
      date: new Date('2020-06-18')
    },
    {
      name: "O'tacos",
      category: 'Food',
      value: 7,
      date: new Date('2020-06-22')
    },
    {
      name: 'Mex & Go',
      category: 'Food',
      value: 8.5,
      date: new Date('2020-06-29')
    },
    {
      name: 'The Rise of The Tomb Raider',
      category: 'Entertainment',
      value: 7.49,
      date: new Date('2020-07-02')
    },
    {
      name: 'Sac Livraison Uber Eats',
      category: 'Utilitary',
      value: 76.74,
      date: new Date('2020-07-06')
    },
    {
      name: 'Waves Plugin (Rverb, Deesser, HDelay)',
      category: 'Music',
      value: 60,
      date: new Date('2020-07-07')
    },
    {
      name: 'BBQ (Carrefour Market)',
      category: 'Food',
      value: 26.58,
      date: new Date('2020-07-13')
    },
    {
      name: 'BBQ (Carrefour Market)',
      category: 'Food',
      value: 8.09,
      date: new Date('2020-07-13')
    },
    {
      name: 'Essence (Texaco)',
      category: 'Transport',
      value: 30.37,
      date: new Date('2020-07-20')
    },
    {
      name: 'Balle de Foot (SportDirect)',
      category: 'Sport',
      value: 28,
      date: new Date('2020-07-20')
    },
    {
      name: 'Moniteurs Eris E5 XT + Pieds',
      category: 'Music',
      value: 455.3,
      date: new Date('2020-08-08')
    },
    {
      name: "Transfert vers compte d'épargne",
      category: 'Transfert',
      value: 750,
      date: new Date('2020-08-13')
    },
    {
      name: 'Crucial 500 Gb SSD + Cable USB',
      category: 'Utilitary',
      value: 79.85,
      date: new Date('2020-08-20')
    },
    {
      name: 'Chaussures CK (Zalando Lounge)',
      category: 'Sneakers',
      value: 50.9,
      date: new Date('2020-08-28')
    }
  ]
};

export default transactions;
