export const COURSES_DATA = [
  { 
    id: '1', 
    title: 'Les Fondamentaux du Moteur',
    description: 'Introduction aux principes de base du moteur automobile',
    duration: '120',
    image: require('../assets/courses/moteur.png'),
    modules: [
      { id: 'm1-1', title: 'Les Fondamentaux du Moteur à Combustion', duration: '30min' },
      { id: 'm1-2', title: 'Les Différents Types de Moteurs', duration: '45min' },
      { id: 'm1-3', title: 'Maintenance Préventive du Moteur', duration: '45min' },
    ]
  },
  { 
    id: '2', 
    title: 'Systèmes de Freinage : Théorie et Pratique',
description: 'Apprenez tout sur les systèmes de freinage automobile, des principes de base aux composants, en passant par l\'inspection et l\'entretien courant.',
    duration: '3h', 
    level: 'Intermédiaire',
    modules: [
      { id: 'm2-1', title: 'Principes de Base du Freinage', duration: '25min' },
      { id: 'm2-2', title: 'Composants du Système de Freinage', duration: '50min' },
      { id: 'm2-3', title: 'Inspection et Entretien des Freins', duration: '65min' },
    ]
  },
  { 
    id: '3', 
    title: 'Diagnostic Électronique Automobile',
    description: 'Ce cours avancé vous initie au diagnostic électronique des véhicules modernes, incluant la lecture des schémas et le dépannage des pannes courantes.',
    duration: '4h', 
    level: 'Avancé',
    modules: [
      { id: 'm3-1', title: 'Introduction aux Circuits Électriques', duration: '40min' },
      { id: 'm3-2', title: 'Lecture des Schémas Électriques', duration: '60min' },
      { id: 'm3-3', title: 'Dépannage des Pannes Électriques Courantes', duration: '80min' },
    ]
  },
  { 
    id: '4', 
     title: 'Entretien de la Transmission',
    description: 'Découvrez les différents types de transmissions, le fonctionnement de l\_embrayage et les meilleures pratiques pour l\_entretien des boîtes de vitesses.',
    duration: '2.5h', 
    level: 'Intermédiaire',
    modules: [
      { id: 'm4-1', title: 'Types de Transmissions (Manuelle, Auto)', duration: '35min' },
      { id: 'm4-2', title: 'Fonctionnement de l\'Embrayage', duration: '40min' },
      { id: 'm4-3', title: 'Entretien de la Boîte de Vitesses', duration: '50min' },
    ]
  },
];

export const LESSON_CONTENT = {
  'm1-1': {
    title: 'Les Fondamentaux du Moteur à Combustion',
    textContent: `Un moteur à combustion interne est un type de moteur qui tire son énergie de la combustion d'un carburant à l'intérieur d'une chambre de combustion. Les composants clés incluent les cylindres, les pistons, les soupapes, et le vilebrequin.\n\nPrincipes clés du cycle à quatre temps :\n1. **Admission** : Le piston descend, la soupape d'admission s'ouvre, et le mélange air-carburant est aspiré dans le cylindre.\n2. **Compression** : Les soupapes se ferment, le piston remonte et comprime le mélange.\n3. **Combustion/Détente (Temps moteur)** : La bougie d'allumage enflamme le mélange comprimé. L'expansion des gaz repousse violemment le piston vers le bas.\n4. **Échappement** : Le piston remonte, la soupape d'échappement s'ouvre, et les gaz brûlés sont expulsés du cylindre.\n\nCe cycle se répète continuellement pour générer de la puissance. Comprendre chaque étape est crucial pour diagnostiquer les problèmes moteur.`,
    videoUrl: 'https://www.youtube.com/embed/exampleVideoID1',
    imageUrl: 'https://www.mecatechnic.com/img/cms/images_schema_moteur_thermique_automobile.jpg',
  },
  'm1-2': {
    title: 'Les Différents Types de Moteurs',
    textContent: `Il existe plusieurs types de moteurs à combustion, chacun avec ses propres caractéristiques :\n\n- **Moteurs à essence (cycle Otto)** : Utilisent une bougie d'allumage pour enflammer le mélange air-carburant. Courants dans les voitures particulières.\n- **Moteurs diesel (cycle Diesel)** : Compriment l'air si fortement qu'il s'échauffe suffisamment pour enflammer le carburant injecté, sans bougie d'allumage. Appréciés pour leur couple et leur rendement.\n- **Moteurs à deux temps** : Accomplissent le cycle en deux mouvements de piston (une révolution du vilebrequin). Plus simples mais souvent plus polluants.\n- **Moteurs rotatifs (Wankel)** : Utilisent un rotor triangulaire au lieu de pistons. Plus compacts et moins de vibrations, mais peuvent avoir des problèmes d'étanchéité et de consommation.`,
    videoUrl: null,
    imageUrl: 'https://www.automobile-propre.com/wp-content/uploads/2018/08/moteur-electrique-automobile-01.jpg',
  },
  'm1-3': {
    title: 'Maintenance Préventive du Moteur',
    textContent: `Une maintenance régulière est essentielle pour la longévité et la performance de votre moteur. Les points clés incluent :\n\n- **Vidange d'huile** : Remplacer l'huile moteur et le filtre à huile selon les préconisations du constructeur.\n- **Remplacement des filtres** : Filtre à air, filtre à carburant.\n- **Vérification des courroies** : Courroie de distribution (critique !) et courroies d'accessoires.\n- **Contrôle des bougies d'allumage** (moteurs essence) ou des bougies de préchauffage (moteurs diesel).\n- **Surveillance du système de refroidissement** : Niveau de liquide de refroidissement, état des durites.`,
    videoUrl: 'https://www.youtube.com/embed/exampleVideoID2',
    imageUrl: 'https://lemagdelauto.ouest-france.fr/wp-content/uploads/2022/01/entretien-moteur-diesel.jpeg',
  },
  'm2-1': {
    title: 'Principes de Base du Freinage',    textContent: 'Le système de freinage transforme l\'énergie cinétique du véhicule en chaleur par friction. Les principes hydrauliques sont fondamentaux : la pression exercée sur la pédale de frein est multipliée et transmise via le liquide de frein aux freins des roues.',    videoUrl: null,
    imageUrl: 'https://www.auto-moto.com/wp-content/uploads/2023/02/systeme-freinage-voiture-750x410.jpg',
  }
};

export const QUIZ_DATA = {
  'm1-1': [
    {
      id: 'q1m1-1',
      question: 'Quel est le rôle principal de la soupape d\'admission ?',
      options: [ 'Expulser les gaz brûlés', 'Comprimer le mélange air-carburant', 'Aspirer le mélange air-carburant dans le cylindre', 'Enflammer le mélange' ],
      correctAnswer: 'Aspirer le mélange air-carburant dans le cylindre',
    },
    {
      id: 'q2m1-1',
      question: 'Combien de temps (mouvements de piston) compte un cycle moteur à 4 temps ?',
      options: [ '1 temps', '2 temps', '3 temps', '4 temps' ],
      correctAnswer: '4 temps',
    },
    {
      id: 'q3m1-1',
      question: 'Quel composant enflamme le mélange air-carburant dans un moteur à essence ?',
      options: [ 'L\'injecteur', 'La soupape d\'échappement', 'Le piston', 'La bougie d\'allumage' ],
      correctAnswer: 'La bougie d\'allumage',
    },
  ],
  'm1-2': [
    {
      id: 'q1m1-2',
      question: 'Quel type de moteur n\'utilise PAS de bougie d\'allumage ?',
      options: [ 'Moteur à essence', 'Moteur diesel', 'Moteur Wankel (essence)', 'Moteur à deux temps (essence)' ],
      correctAnswer: 'Moteur diesel',
    },
  ],
};

export const USER_DATA = {
  name: 'Jean Apprenant',
  email: 'jean.apprenant@example.com',
  avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  coursesEnrolled: [
    { id: '1', title: 'Introduction à la Mécanique Moteur', progress: 75, course: COURSES_DATA.find(c => c.id === '1') },
    { id: '2', title: 'Systèmes de Freinage : Théorie et Pratique', progress: 40, course: COURSES_DATA.find(c => c.id === '2') },
  ],
  badges: [
    { id: 'b1', name: 'Pro du Moteur', icon: '🏆', description: 'Terminé le cours sur les moteurs avec succès !' },
    { id: 'b2', name: 'As du Freinage', icon: '🛠️', description: 'Maîtrise des systèmes de freinage acquise !' },
  ],
};
