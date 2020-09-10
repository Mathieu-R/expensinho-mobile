type Transactions = {
  name: string;
  description?: string;
  category: string;
  value: number;
  date: Date;
  type: 'income' | 'expense';
};

type categories = [
  'Music',
  'Food',
  'Sport',
  'Sneakers',
  'Clothes',
  'Entertainement',
  'Transport',
  'Utilitary',
  'Gift',
  'Salaray',
  'Refund',
  'Extra income',
  'Transfert'
];

const transactions: Transactions[] = [
  {
    name: "Pizza Domino's",
    category: 'Refund',
    value: 48,
    date: new Date('2020-03-31'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-04-05'),
    type: 'income'
  },
  {
    name: "Cartouches d'imprimante",
    category: 'Refund',
    value: 30,
    date: new Date('2020-04-07'),
    type: 'income'
  },
  {
    name: 'Cadeau Arnaud + Remboursement cadeau Mbombo (carte son)',
    category: 'Gift',
    value: 180,
    date: new Date('2020-04-16'),
    type: 'income'
  },
  {
    name: 'Remboursement cadeau Mbombo (carte son) - Darons',
    category: 'Refund',
    value: 75,
    date: new Date('2020-04-17'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-05-05'),
    type: 'income'
  },
  {
    name: 'Remboursement chargeur Mbombo',
    category: 'Refund',
    value: 56,
    date: new Date('2020-05-18'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-06-05'),
    type: 'income'
  },
  {
    name: 'Remboursement Coque GSM Papa',
    category: 'Refund',
    value: 7,
    date: new Date('2020-06-18'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-07-05'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-08-05'),
    type: 'income'
  },
  {
    name: 'Argent de poche',
    category: 'Extra income',
    value: 50,
    date: new Date('2020-09-05'),
    type: 'income'
  },
  {
    name: 'Transfert économies pour Logic Pro',
    category: 'Music',
    value: 230,
    date: new Date('2020-08-01'),
    type: 'income'
  },
  {
    name: 'Home Béthanie',
    description: 'Salaire job étudiant',
    category: 'Salary',
    value: 1663.33,
    date: new Date('2020-08-05'),
    type: 'income'
  },
  {
    name: 'Remboursement Thomann',
    description: 'Remboursement pour achat du mauvais câble USB',
    category: 'Music',
    value: 9.9,
    date: new Date('2020-08-19'),
    type: 'income'
  },
  {
    name: 'Plugin Halftime',
    category: 'Music',
    value: 10,
    date: new Date('2020-03-23'),
    type: 'expense'
  },
  {
    name: 'Carrefour Express',
    category: 'Food',
    value: 4.38,
    date: new Date('2020-03-25'),
    type: 'expense'
  },
  {
    name: 'Cymatic sample pack - Don COVID',
    category: 'Gift',
    value: 23.74,
    date: new Date('2020-03-27'),
    type: 'expense'
  },
  {
    name: "Pizza Domino's",
    category: 'Food',
    value: 48,
    date: new Date('2020-03-31'),
    type: 'expense'
  },
  {
    name: "Cartouches d'imprimante",
    category: 'Utilitary',
    value: 30,
    date: new Date('2020-04-07'),
    type: 'expense'
  },
  {
    name: 'Cadeau Mbombo (carte son)',
    category: 'Gift',
    value: 157,
    date: new Date('2020-04-16'),
    type: 'expense'
  },
  {
    name: 'Abonnement Freeletics (6 mois)',
    category: 'Sport',
    value: 30,
    date: new Date('2020-04-20'),
    type: 'expense'
  },
  {
    name: 'Chargeur Mac Mbombo',
    category: 'Utilitary',
    value: 55.65,
    date: new Date('2020-05-01'),
    type: 'expense'
  },
  {
    name: 'Tapis de sport',
    category: 'Sport',
    value: 37.9,
    date: new Date('2020-05-26'),
    type: 'expense'
  },
  {
    name: 'Don association Black Lives Matter',
    category: 'Gift',
    value: 23.25,
    date: new Date('2020-06-03'),
    type: 'expense'
  },
  {
    name: 'Cadeau Papa (GSM)',
    category: 'Gift',
    value: 30,
    date: new Date('2020-06-17'),
    type: 'expense'
  },
  {
    name: 'Clavier Ordinateur + Coque GSM',
    category: 'Utilitary',
    value: 28.98,
    date: new Date('2020-06-18'),
    type: 'expense'
  },
  {
    name: 'Cadeau Arnaud (Bibliothéque IKEA)',
    category: 'Gift',
    value: 34.98,
    date: new Date('2020-06-18'),
    type: 'expense'
  },
  {
    name: "O'tacos",
    category: 'Food',
    value: 7,
    date: new Date('2020-06-22'),
    type: 'expense'
  },
  {
    name: 'Mex & Go',
    category: 'Food',
    value: 8.5,
    date: new Date('2020-06-29'),
    type: 'expense'
  },
  {
    name: 'The Rise of The Tomb Raider',
    category: 'Entertainment',
    value: 7.49,
    date: new Date('2020-07-02'),
    type: 'expense'
  },
  {
    name: 'Sac Livraison Uber Eats',
    category: 'Utilitary',
    value: 76.74,
    date: new Date('2020-07-06'),
    type: 'expense'
  },
  {
    name: 'Waves Plugin',
    description: 'Rverb, Deesser, Hdelay',
    category: 'Music',
    value: 60,
    date: new Date('2020-07-07'),
    type: 'expense'
  },
  {
    name: 'BBQ (Carrefour Market)',
    category: 'Food',
    value: 26.58,
    date: new Date('2020-07-13'),
    type: 'expense'
  },
  {
    name: 'BBQ (Carrefour Market)',
    category: 'Food',
    value: 8.09,
    date: new Date('2020-07-13'),
    type: 'expense'
  },
  {
    name: 'Essence (Texaco)',
    category: 'Transport',
    value: 30.37,
    date: new Date('2020-07-20'),
    type: 'expense'
  },
  {
    name: 'Balle de Foot (SportDirect)',
    category: 'Sport',
    value: 28,
    date: new Date('2020-07-20'),
    type: 'expense'
  },
  {
    name: 'Moniteurs Eris E5 XT + Pieds',
    category: 'Music',
    value: 455.3,
    date: new Date('2020-08-08'),
    type: 'expense'
  },
  {
    name: "Transfert vers compte d'épargne",
    category: 'Transfert',
    value: 750,
    date: new Date('2020-08-13'),
    type: 'expense'
  },
  {
    name: 'Crucial 500 Gb SSD + Cable USB',
    category: 'Utilitary',
    value: 79.85,
    date: new Date('2020-08-20'),
    type: 'expense'
  },
  {
    name: 'Chaussures CK (Zalando Lounge)',
    category: 'Sneakers',
    value: 50.9,
    date: new Date('2020-08-28'),
    type: 'expense'
  }
];

export default transactions;
