export const COURSES_DATA = [
    {
      id: '1',
      title: 'Les Fondamentaux du Moteur',
      description: 'Introduction aux principes de base du moteur automobile, de son fonctionnement aux techniques de maintenance préventive',
      duration: '120min',
      level: 'Débutant',
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
      duration: '180min',
      level: 'Intermédiaire',
      image: require('../assets/courses/freinage.jpg'),
      modules: [
        { id: 'm2-1', title: 'Principes de Base du Freinage', duration: '25min' },
        { id: 'm2-2', title: 'Composants des Systèmes de Freinage', duration: '35min' },
        { id: 'm2-3', title: 'Diagnostic des Problèmes de Freinage', duration: '60min' },
        { id: 'm2-4', title: 'Maintenance et Réparation des Freins', duration: '60min' },
      ]
    },
    {
      id: '3',
      title: 'Diagnostic Électronique Embarqué',
      description: 'Formation avancée sur les systèmes électroniques embarqués et les techniques de diagnostic modernes pour véhicules automobiles',
      duration: '240min',
      level: 'Avancé',
      image: require('../assets/courses/electronique.jpg'),
      modules: [
        { id: 'm3-1', title: 'Introduction aux Systèmes Électroniques Embarqués', duration: '30min' },
        { id: 'm3-2', title: 'Outils de Diagnostic et Leur Utilisation', duration: '45min' },
        { id: 'm3-3', title: 'Protocoles de Communication (CAN, LIN, MOST)', duration: '45min' },
        { id: 'm3-4', title: 'Diagnostic des Calculateurs Moteur', duration: '60min' },
        { id: 'm3-5', title: 'Reprogrammation des Calculateurs', duration: '60min' },
      ]
    },
    {
      id: '4',
      title: 'Systèmes Électriques Automobile',
      description: 'Cours complet sur les circuits électriques automobiles, du fonctionnement de base à l\'analyse et la réparation de pannes complexes',
      duration: '180min',
      level: 'Intermédiaire',
      image: require('../assets/courses/electrique.jpg'),
      modules: [
        { id: 'm4-1', title: 'Principes Fondamentaux de l\'Électricité Automobile', duration: '30min' },
        { id: 'm4-2', title: 'Circuits d\'Éclairage, Alimentation et Démarrage', duration: '40min' },
        { id: 'm4-3', title: 'Lecture et Utilisation des Schémas Électriques', duration: '35min' },
        { id: 'm4-4', title: 'Diagnostic des Pannes Électriques', duration: '45min' },
        { id: 'm4-5', title: 'Utilisation des Appareils de Mesure', duration: '30min' },
      ]
    },
    {
      id: '5',
      title: 'Systèmes de Suspension et Direction',
      description: 'Étude approfondie des systèmes de suspension et de direction, leur diagnostic et leur maintenance pour assurer sécurité et confort',
      duration: '150min',
      level: 'Intermédiaire',
      image: require('../assets/courses/suspension.jpg'),
      modules: [
        { id: 'm5-1', title: 'Principes de la Suspension Automobile', duration: '30min' },
        { id: 'm5-2', title: 'Types de Systèmes de Direction', duration: '30min' },
        { id: 'm5-3', title: 'Diagnostic des Problèmes de Suspension', duration: '45min' },
        { id: 'm5-4', title: 'Géométrie et Alignement des Roues', duration: '45min' },
      ]
    },
    {
      id: '6',
      title: 'Climatisation Automobile',
      description: 'Formation complète sur les systèmes de climatisation automobile : fonctionnement, diagnostic, maintenance et réparation conforme aux normes environnementales',
      duration: '150min',
      level: 'Intermédiaire',
      image: require('../assets/courses/climatisation.jpg'),
      modules: [
        { id: 'm6-1', title: 'Principes de la Climatisation Automobile', duration: '30min' },
        { id: 'm6-2', title: 'Composants du Circuit de Climatisation', duration: '30min' },
        { id: 'm6-3', title: 'Diagnostic des Pannes de Climatisation', duration: '45min' },
        { id: 'm6-4', title: 'Maintenance et Recharge des Systèmes', duration: '45min' },
      ]
    },
    {
      id: '7',
      title: 'Transmission et Boîte de Vitesses',
      description: 'Étude des différents systèmes de transmission et boîtes de vitesses, leur fonctionnement et les techniques de maintenance et réparation',
      duration: '210min',
      level: 'Avancé',
      image: require('../assets/courses/transmission.jpg'),
      modules: [
        { id: 'm7-1', title: 'Types de Transmissions Automobiles', duration: '30min' },
        { id: 'm7-2', title: 'Boîtes de Vitesses Manuelles', duration: '45min' },
        { id: 'm7-3', title: 'Boîtes de Vitesses Automatiques', duration: '45min' },
        { id: 'm7-4', title: 'Diagnostic des Problèmes de Transmission', duration: '45min' },
        { id: 'm7-5', title: 'Maintenance et Réparation', duration: '45min' },
      ]
    },
    {
      id: '8',
      title: 'Diagnostic et Réparation des Moteurs Diesel',
      description: 'Formation spécialisée sur les moteurs diesel, leur fonctionnement spécifique, les systèmes d\'injection et les techniques de diagnostic avancées',
      duration: '180min',
      level: 'Avancé',
      image: require('../assets/courses/diesel.jpg'),
      modules: [
        { id: 'm8-1', title: 'Principes de Fonctionnement des Moteurs Diesel', duration: '30min' },
        { id: 'm8-2', title: 'Systèmes d\'Injection Diesel', duration: '45min' },
        { id: 'm8-3', title: 'Diagnostic des Problèmes Spécifiques Diesel', duration: '60min' },
        { id: 'm8-4', title: 'Maintenance et Réparation des Moteurs Diesel', duration: '45min' },
      ]
    },
    {
      id: '9',
      title: 'Systèmes de Confort et Sécurité Automobile',
      description: 'Découvrez les systèmes modernes de confort et de sécurité, leur fonctionnement et les méthodes de diagnostic et réparation',
      duration: '150min',
      level: 'Avancé',
      image: require('../assets/courses/securite.jpg'),
      modules: [
        { id: 'm9-1', title: 'Systèmes d\'Aide à la Conduite (ADAS)', duration: '30min' },
        { id: 'm9-2', title: 'Systèmes de Sécurité Passive et Active', duration: '30min' },
        { id: 'm9-3', title: 'Systèmes de Confort (GPS, Multimédia)', duration: '30min' },
        { id: 'm9-4', title: 'Diagnostic des Systèmes de Confort et Sécurité', duration: '60min' },
      ]
    },
    {
      id: '10',
      title: 'Véhicules Hybrides et Électriques',
      description: 'Formation essentielle sur les technologies des véhicules hybrides et électriques, leur maintenance spécifique et les précautions de sécurité',
      duration: '210min',
      level: 'Expert',
      image: require('../assets/courses/hybride.jpg'),
      modules: [
        { id: 'm10-1', title: 'Introduction aux Véhicules Hybrides', duration: '30min' },
        { id: 'm10-2', title: 'Technologie des Véhicules Électriques', duration: '45min' },
        { id: 'm10-3', title: 'Systèmes de Batterie et Recharge', duration: '45min' },
        { id: 'm10-4', title: 'Sécurité lors des Interventions', duration: '45min' },
        { id: 'm10-5', title: 'Diagnostic et Maintenance Spécifique', duration: '45min' },
      ]
    },
    {
      id: '11',
      title: 'Gestion d\'Atelier et Service Client',
      description: 'Apprenez à gérer efficacement un atelier de maintenance automobile et à offrir un service client de qualité',
      duration: '120min',
      level: 'Intermédiaire',
      image: require('../assets/courses/gestion.jpg'),
      modules: [
        { id: 'm11-1', title: 'Organisation et Gestion d\'un Atelier', duration: '30min' },
        { id: 'm11-2', title: 'Relation et Communication Client', duration: '30min' },
        { id: 'm11-3', title: 'Gestion des Stocks et Approvisionnements', duration: '30min' },
        { id: 'm11-4', title: 'Normes et Réglementations', duration: '30min' },
      ]
    },
    {
      id: '12',
      title: 'Méthodes de Recherche d\'Emploi en Secteur Automobile',
      description: 'Préparez votre insertion professionnelle dans le secteur automobile avec des outils et méthodes efficaces',
      duration: '90min',
      level: 'Tous niveaux',
      image: require('../assets/courses/emploi.jpg'),
      modules: [
        { id: 'm12-1', title: 'Exploration du Marché de l\'Emploi Automobile', duration: '20min' },
        { id: 'm12-2', title: 'CV et Lettre de Motivation Spécialisés', duration: '25min' },
        { id: 'm12-3', title: 'Préparation aux Entretiens d\'Embauche', duration: '25min' },
        { id: 'm12-4', title: 'Développement de Carrière', duration: '20min' },
      ]
    }
  ];
  export const LESSON_CONTENT = {
    'm1-1': {
      title: 'Les Fondamentaux du Moteur à Combustion',
      textContent: `Le moteur à combustion interne est l'un des principaux composants d'une automobile, chargé de transformer l'énergie chimique du carburant en énergie mécanique pour déplacer le véhicule. Le principe de fonctionnement de ce moteur repose sur quatre temps : admission, compression, explosion et échappement.

Lors du premier temps, la soupape d'admission s'ouvre et le piston descend, permettant à l'air et au carburant d'entrer dans la chambre de combustion. Dans le deuxième temps, la soupape d'admission se ferme et le piston se déplace vers le haut, comprimant le mélange air-carburant. À ce moment, la bougie émet une étincelle qui fait exploser le mélange et pousse le piston vers le bas au troisième temps.

Ce mouvement du piston est responsable de la génération de l'énergie mécanique qui sera transmise aux roues du véhicule. Au quatrième temps, la soupape d'échappement s'ouvre et les gaz de combustion résultants sont expulsés du moteur.

Ce cycle se répète plusieurs fois par minute, en fonction de la puissance du moteur, et est contrôlé par le système d'injection électronique, qui régule la quantité de carburant et d'air qui entre dans la chambre de combustion, garantissant un fonctionnement plus efficace et économique.`,
      videoUrl: 'https://www.youtube.com/watch?v=ZcnOLEvj9IY&t=1148s&pp=ygUdYXV0b21vdGl2ZSt0cm91Ymxlc2hvb3RpbmcrYWk%3D',
      imageUrl: 'https://unsplash.com/photos/stainless-steel-engine-bay-6rF_Du5cn1Y'
    },
    'm1-2': {
      title: 'Les Différents Types de Moteurs',
      textContent: `Il existe plusieurs types de moteurs automobiles, chacun avec ses caractéristiques, avantages et inconvénients spécifiques.

**Moteur à essence**
Un moteur à essence est un moteur à combustion interne qui fonctionne avec de l'essence comme carburant principal. Il convertit l'énergie libérée par la combustion de l'essence en énergie mécanique qui entraîne les roues du véhicule. Le moteur suit un cycle à quatre temps : admission, compression, combustion et échappement, pour produire de la puissance efficacement.

Composants principaux :
- Bloc-cylindres : structure centrale du moteur abritant les cylindres
- Pistons : se déplacent de haut en bas dans les cylindres
- Vilebrequin : convertit le mouvement des pistons en mouvement rotatif
- Arbre à cames : contrôle l'ouverture et la fermeture des soupapes
- Soupapes : régulent l'entrée du mélange air-carburant et l'évacuation des gaz d'échappement
- Bougies d'allumage : créent l'étincelle qui enflamme le mélange
- Injecteurs de carburant : pulvérisent l'essence dans les cylindres

**Moteur diesel**
Un moteur diesel est un moteur à combustion interne qui fonctionne au carburant diesel. Contrairement aux moteurs à essence, les moteurs diesel n'utilisent pas de bougies d'allumage pour l'allumage. Ils s'appuient sur la chaleur générée par la compression de l'air dans le cylindre pour enflammer le carburant diesel. Ce processus est connu sous le nom d'allumage par compression.

Avantages :
- Meilleur rendement énergétique que les moteurs à essence
- Couple plus élevé et meilleures capacités de remorquage
- Disponibilité du carburant diesel

Inconvénients :
- Coût initial et frais d'entretien plus élevés
- Bruit et vibrations
- Préoccupations environnementales concernant les émissions

**Moteur hybride**
Un moteur hybride est un système de propulsion qui combine deux sources d'énergie ou plus pour propulser un véhicule. L'objectif principal est d'optimiser l'efficacité énergétique, de réduire les émissions et d'améliorer les performances globales. Les composants principaux comprennent généralement un moteur à combustion interne (souvent à essence), un moteur électrique et une batterie.

Types de systèmes hybrides :
- Hybride parallèle : le moteur à combustion interne et le moteur électrique peuvent propulser le véhicule indépendamment ou ensemble
- Hybride série : le moteur à combustion interne génère de l'électricité pour alimenter le moteur électrique, qui propulse le véhicule
- Hybride rechargeable : dispose d'une batterie plus grande qui peut être rechargée en branchant le véhicule sur une source d'électricité externe`,
      videoUrl: null,
      imageUrl: null,
    },
    'm1-3': {
      title: 'Maintenance Préventive du Moteur',
      textContent: `La maintenance préventive du moteur est essentielle pour assurer la longévité et les performances optimales du véhicule. Elle comprend une série d'inspections et de remplacements réguliers qui aident à prévenir les pannes coûteuses et à maintenir l'efficacité du moteur.

**Changement d'huile et de filtre**
L'huile moteur lubrifie les pièces mobiles du moteur, réduisant la friction et l'usure. Le filtre à huile élimine les contaminants de l'huile. Un changement régulier de l'huile et du filtre est crucial pour :
- Maintenir une lubrification adéquate
- Prévenir l'accumulation de boues et de dépôts
- Prolonger la durée de vie du moteur
- Améliorer l'efficacité énergétique

Fréquence recommandée : tous les 5 000 à 10 000 km, selon le type d'huile et les conditions de conduite.

**Remplacement du filtre à air**
Le filtre à air empêche la poussière, les débris et autres contaminants d'entrer dans le moteur. Un filtre à air propre est important pour :
- Maintenir un bon rapport air-carburant
- Optimiser la consommation de carburant
- Réduire les émissions
- Prévenir l'usure prématurée du moteur

Fréquence recommandée : tous les 15 000 à 30 000 km, ou plus fréquemment dans des conditions poussiéreuses.

**Inspection et remplacement des bougies d'allumage**
Les bougies d'allumage créent l'étincelle nécessaire pour enflammer le mélange air-carburant dans les cylindres. Des bougies en bon état sont essentielles pour :
- Assurer un démarrage facile
- Maintenir une combustion efficace
- Optimiser la consommation de carburant
- Réduire les émissions

Fréquence recommandée : tous les 30 000 à 100 000 km, selon le type de bougies.

**Vérification et remplacement des courroies**
Les courroies du moteur transmettent la puissance à divers composants, comme l'alternateur, la pompe à eau et le compresseur de climatisation. L'inspection et le remplacement réguliers des courroies permettent de :
- Prévenir les pannes inattendues
- Éviter les dommages collatéraux en cas de rupture
- Maintenir le bon fonctionnement des systèmes auxiliaires

Fréquence recommandée : inspection tous les 20 000 km, remplacement selon les recommandations du fabricant (généralement entre 60 000 et 100 000 km).

**Vérification du système de refroidissement**
Le système de refroidissement maintient la température du moteur dans une plage optimale. Une maintenance régulière comprend :
- Vérification du niveau et de la qualité du liquide de refroidissement
- Inspection des fuites
- Test de la pression du système
- Nettoyage du radiateur

Fréquence recommandée : inspection visuelle à chaque changement d'huile, remplacement du liquide de refroidissement tous les 2 à 5 ans.`,
      videoUrl: 'https://www.youtube.com/embed/exampleVideoID3',
      imageUrl: 'https://www.vroomly.com/media/images/entretien-moteur-voiture.2e16d0ba.fill-1200x630.jpg',
    },
    'm2-1': {
      title: 'Principes de Base du Freinage',
      textContent: `Le système de freinage est l'un des éléments de sécurité les plus importants d'un véhicule. Il permet de ralentir ou d'arrêter le véhicule en convertissant l'énergie cinétique (mouvement) en énergie thermique (chaleur) par le biais de la friction.

**Principe fondamental du freinage**
Lorsque le conducteur appuie sur la pédale de frein, une force est transmise via un système hydraulique aux dispositifs de freinage situés au niveau des roues. Ces dispositifs exercent une pression sur des éléments rotatifs (disques ou tambours) liés aux roues, créant une friction qui ralentit ou arrête la rotation des roues.

**Types de systèmes de freinage**
1. Freins à disque : composés d'un disque métallique et d'un étrier contenant des plaquettes de frein. Lorsque les freins sont actionnés, l'étrier presse les plaquettes contre le disque, créant une friction.
2. Freins à tambour : constitués d'un tambour métallique et de mâchoires de frein à l'intérieur. Lorsque les freins sont actionnés, les mâchoires s'écartent et pressent contre l'intérieur du tambour.

**Système hydraulique**
Le système hydraulique est composé de :
- Maître-cylindre : convertit la force mécanique appliquée sur la pédale en pression hydraulique
- Conduites de frein : transportent le liquide de frein sous pression
- Cylindres de roue : reçoivent la pression hydraulique et actionnent les mécanismes de freinage

**Assistance au freinage**
Pour réduire l'effort nécessaire pour actionner les freins, la plupart des véhicules sont équipés d'un système d'assistance au freinage, généralement un servofrein à dépression qui utilise la dépression créée par le moteur pour amplifier la force appliquée sur la pédale.

**Systèmes de sécurité avancés**
Les véhicules modernes sont équipés de systèmes électroniques qui améliorent l'efficacité et la sécurité du freinage :
- ABS (système antiblocage des roues) : empêche le blocage des roues lors d'un freinage d'urgence
- Répartiteur électronique de freinage : distribue la force de freinage entre les essieux avant et arrière
- Assistance au freinage d'urgence : détecte un freinage d'urgence et applique automatiquement la force maximale

**Importance de l'entretien**
Un entretien régulier du système de freinage est essentiel pour garantir sa fiabilité et son efficacité. Cela comprend la vérification du niveau et de la qualité du liquide de frein, l'inspection de l'usure des plaquettes et disques, et le test de l'efficacité globale du système.`,
      videoUrl: 'https://www.youtube.com/embed/exampleVideoID4',
      imageUrl: 'https://www.vroomly.com/media/images/systeme-freinage-voiture.2e16d0ba.fill-1200x630.jpg',
    },
    'm2-2':{
      id: 'm2-2',
      title: 'Composants des Systèmes de Freinage',
      duration: '35min',
      textContent: `Le système de freinage est composé de plusieurs éléments essentiels qui travaillent ensemble pour ralentir ou arrêter le véhicule en toute sécurité.
    
    **1. Pédale de frein**
    Point de contact initial entre le conducteur et le système. En appuyant dessus, le conducteur initie le processus de freinage.
    
    **2. Maître-cylindre**
    Convertit la force exercée sur la pédale en pression hydraulique, qui est ensuite transmise aux freins des roues.
    
    **3. Liquide de frein**
    Fluide incompressible qui transmet la pression du maître-cylindre vers les cylindres de roue. Il doit être régulièrement contrôlé et changé selon les recommandations du constructeur.
    
    **4. Étriers (pour les freins à disque)**
    Ils contiennent les pistons qui, poussés par la pression hydraulique, compriment les plaquettes de frein contre le disque.
    
    **5. Plaquettes de frein**
    Éléments de friction qui appuient contre les disques pour créer le freinage. Elles s’usent avec le temps et doivent être remplacées périodiquement.
    
    **6. Disques de frein**
    Solidaires des roues, ils reçoivent la pression des plaquettes. Plus ils sont ventilés ou perforés, plus ils dissipent la chaleur efficacement.
    
    **7. Tambours et mâchoires (pour les freins à tambour)**
    Le tambour tourne avec la roue ; les mâchoires appuient de l’intérieur pour ralentir la rotation.
    
    **8. Cylindres de roue**
    Ils poussent les mâchoires ou plaquettes vers le tambour ou le disque respectivement.
    
    **9. Servofrein**
    Amplifie la pression exercée sur la pédale, facilitant le freinage sans grand effort.
    
    **10. Capteurs électroniques**
    Utilisés dans les systèmes ABS, ESP, etc., ils mesurent la vitesse des roues et d'autres paramètres pour adapter automatiquement la force de freinage.
    
    Ces composants doivent fonctionner en harmonie pour un freinage efficace. Toute défaillance d'un des éléments peut affecter gravement la sécurité du véhicule.`,
      videoUrl: 'https://www.youtube.com/embed/exampleVideoID5',
      imageUrl: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/5/c/c/5ccae3f4e0_50154063_systeme-freinage.jpg',
    },
    'm2-3':{
      id: 'm2-3',
      title: 'Diagnostic des Problèmes de Freinage',
      duration: '60min',
      textContent: `Savoir reconnaître les signes de dysfonctionnement d’un système de freinage est crucial pour prévenir les accidents et éviter des réparations coûteuses.
    
    **Signes courants de problèmes de freinage**
    - Bruits anormaux : grincements, sifflements ou claquements indiquent souvent une usure des plaquettes ou des disques.
    - Pédale de frein molle ou spongieuse : peut être causée par de l’air dans le circuit hydraulique ou une fuite de liquide.
    - Vibrations lors du freinage : souvent causées par des disques voilés.
    - Temps d'arrêt allongé : peut indiquer des plaquettes usées ou un liquide de frein inefficace.
    - Voiture qui tire d’un côté : peut être dû à une usure inégale ou à un étrier grippé.
    
    **Méthodes de diagnostic**
    1. **Inspection visuelle** des plaquettes, disques, tambours, conduites et fuites.
    2. **Test de la pédale de frein** pour vérifier la pression et la réactivité.
    3. **Vérification du liquide de frein** : niveau, couleur (brun = à changer), et présence d'air.
    4. **Utilisation de la valise de diagnostic** pour les véhicules modernes afin de lire les codes d’erreur (ABS, ESP...).
    5. **Test de route** : permet d’évaluer le comportement général du système sous différentes conditions.
    
    Un diagnostic précoce permet d’éviter les pannes graves et d’augmenter la longévité des composants.`,
      videoUrl: 'https://www.youtube.com/embed/exampleVideoID6',
      imageUrl: 'https://www.autobacs.fr/bundles/website/images/freinage.jpg',
    },
    'm3-1': {
  title: 'Introduction aux Systèmes Électroniques Embarqués',
  textContent: `Les systèmes électroniques embarqués sont au cœur des véhicules modernes. Ils permettent de gérer les fonctions de sécurité, de confort, de motorisation et bien plus encore.

**Définition**
Un système embarqué est un système informatique intégré dans un dispositif pour contrôler une ou plusieurs fonctions spécifiques. Dans les véhicules, il s’agit de microcontrôleurs ou de calculateurs électroniques.

**Exemples de systèmes embarqués**
- Calculateur moteur (ECU)
- Système de freinage ABS
- Airbags
- Contrôle de stabilité (ESP)
- Systèmes multimédia embarqués

**Architecture**
Les systèmes embarqués reposent sur une architecture centralisée ou distribuée avec une interconnexion via des bus de communication (ex. : CAN, LIN). Chaque calculateur reçoit des données de capteurs, les traite, puis envoie des ordres à des actionneurs.

**Importance croissante**
Avec l'évolution de l'industrie automobile, la proportion de l’électronique embarquée ne cesse de croître, rendant les connaissances en diagnostic électronique indispensables pour les techniciens.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID1',
  imageUrl: 'https://cdn.pixabay.com/photo/2020/02/19/19/14/electronic-4860821_1280.jpg',
},
'm3-2': {
  title: 'Outils de Diagnostic et Leur Utilisation',
  textContent: `Le diagnostic électronique nécessite des outils spécialisés pour communiquer avec les calculateurs du véhicule.

**Types d'outils**
- **Valise de diagnostic (OBD)** : appareil qui se connecte au port OBD-II pour lire les codes défaut, visualiser les données en temps réel et effacer les erreurs.
- **Multimètre numérique** : utilisé pour mesurer tension, résistance, et continuité.
- **Oscilloscope** : utile pour visualiser les signaux électriques, particulièrement pour les capteurs et actuateurs.
- **Scanner professionnel (ex : Bosch, Delphi)** : offrent des fonctions avancées comme le codage ou la reprogrammation.

**Utilisation pratique**
1. Brancher l'outil sur le port OBD-II
2. Sélectionner le véhicule (marque, modèle, année)
3. Lancer une lecture des DTC (Diagnostic Trouble Codes)
4. Interpréter les codes et analyser les données de capteurs en temps réel

**Avantages**
Un bon outil permet de gagner du temps, d'éviter les remplacements inutiles de pièces, et d’assurer une intervention efficace.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID2',
  imageUrl: 'https://diag-auto.fr/cdn/shop/articles/meilleur-valise-diagnostic-auto-1024x640.jpg',
},
'm3-3': {
  title: 'Protocoles de Communication (CAN, LIN, MOST)',
  textContent: `Les calculateurs d’un véhicule communiquent entre eux grâce à des protocoles normalisés.

**CAN (Controller Area Network)**
- Le plus répandu
- Haute vitesse (jusqu’à 1 Mbps)
- Utilisé pour le moteur, l’ABS, l’ESP
- Communication hiérarchisée, avec messages prioritaires

**LIN (Local Interconnect Network)**
- Basse vitesse (jusqu’à 20 kbps)
- Utilisé pour les fonctions simples (ex. : vitres électriques, rétroviseurs)
- Moins coûteux, structure maître-esclave

**MOST (Media Oriented Systems Transport)**
- Utilisé pour les systèmes multimédia et d’infodivertissement
- Transfert haut débit de données audio/vidéo
- Communication en anneau

**Utilité pour le diagnostic**
Connaître ces protocoles permet :
- D’interpréter les trames de données
- De détecter des conflits ou pannes sur les réseaux
- D'utiliser les bons outils compatibles (ex. : analyseur de bus CAN)

**Exemple pratique**
L’analyse des trames CAN peut révéler un problème de communication entre le calculateur moteur et l’ABS.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID3',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Automotive_Bus_Systems.png',
},
'm3-4': {
  title: 'Diagnostic des Calculateurs Moteur',
  textContent: `Le calculateur moteur (ECU) contrôle de nombreux paramètres essentiels au fonctionnement du véhicule.

**Fonctions principales**
- Gestion de l’injection
- Allumage
- Contrôle de l’air et des gaz d’échappement
- Gestion des capteurs et actuateurs (sondes lambda, débitmètre, actuateurs EGR...)

**Étapes du diagnostic**
1. Lecture des codes défaut moteur (DTC)
2. Vérification des données en temps réel (température, pression, débit d’air...)
3. Analyse des historiques de panne
4. Test des actionneurs (ventilateur, injecteurs…)

**Exemples de pannes**
- Capteur de position du vilebrequin défectueux
- Injecteur bouché
- Mélange air/carburant incorrect

**Outils utilisés**
- Valise de diagnostic OBD-II
- Oscilloscope pour vérifier les signaux
- Logiciels de visualisation de courbes

**Objectif**
Identifier rapidement l’origine d’un dysfonctionnement moteur et éviter le remplacement inutile de pièces.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2018/09/Calculateur-moteur.png',
},
'm3-5': {
  title: 'Reprogrammation des Calculateurs',
  textContent: `La reprogrammation consiste à modifier ou mettre à jour le logiciel interne d’un calculateur.

**Objectifs de la reprogrammation**
- Corriger des bugs logiciels
- Optimiser les performances moteur
- Adapter le calculateur à un nouveau composant
- Activer des fonctions supplémentaires

**Méthodes**
1. **Reprogrammation constructeur (flashing)** : via des outils d’origine (ex. : pass-thru)
2. **Reprogrammation personnalisée (remap)** : modification des courbes (couple, pression turbo, injection)

**Précautions**
- Toujours sauvegarder la cartographie d’origine
- Utiliser un chargeur de batterie pour éviter les coupures pendant le flashage
- Vérifier la compatibilité du fichier

**Exemples**
- Mise à jour d’un calculateur après un rappel constructeur
- Optimisation pour réduire la consommation

**Responsabilités légales**
Toute modification non homologuée peut entraîner des problèmes de garantie ou de conformité.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID5',
  imageUrl: 'https://www.br-performance.be/images/reprogrammation_calculateur.png',
},
'm4-1': {
  title: "Principes Fondamentaux de l'Électricité Automobile",
  textContent: `Avant de diagnostiquer une panne ou d'intervenir sur un système, il est essentiel de comprendre les bases de l'électricité.

**Concepts clés**
- **Tension (V)** : la force qui pousse le courant électrique.
- **Intensité (A)** : le débit du courant dans un circuit.
- **Résistance (Ω)** : opposition au passage du courant.
- **Loi d’Ohm** : V = R x I (relation fondamentale pour les calculs électriques)

**Types de courant**
- **Courant continu (DC)** : utilisé dans l’automobile (batterie 12V/24V).
- **Courant alternatif (AC)** : utilisé dans certains systèmes de recharge de véhicules électriques.

**Composants de base**
- Batterie
- Alternateur
- Fusibles et relais
- Interrupteurs et connecteurs
- Moteurs électriques

**Importance**
Comprendre ces bases permet d’intervenir efficacement sur tous les circuits d’un véhicule.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID6',
  imageUrl: 'https://www.actia.com/wp-content/uploads/2021/02/electricite-automobile.jpg',
},
'm4-2': {
  title: "Circuits d'Éclairage, Alimentation et Démarrage",
  textContent: `Ces circuits sont essentiels au fonctionnement et à la sécurité du véhicule.

**Circuit d’éclairage**
- Inclut feux avant/arrière, clignotants, feux stop, etc.
- Utilise des interrupteurs, relais, et ampoules LED ou halogènes.
- Problèmes fréquents : ampoule grillée, faux contact, masse défectueuse.

**Circuit d’alimentation**
- Alimente les calculateurs, capteurs, injecteurs...
- Protégé par des fusibles et relais.
- Toute coupure peut entraîner une panne complète du véhicule.

**Circuit de démarrage**
- Composé de la batterie, démarreur, relais, et du Neiman.
- Le relais enclenche le démarreur qui fait tourner le moteur thermique.
- Symptômes de panne : clic sans démarrage, bruit anormal, pas de réaction.

**Méthode de diagnostic**
1. Vérifier l’état de la batterie
2. Contrôler la continuité du circuit
3. Tester les relais et connecteurs`,
videoUrl: 'https://www.youtube.com/embed/exampleVideoID6',
imageUrl: 'https://www.actia.com/wp-content/uploads/2021/02/electricite-automobile.jpg',
},
'm4-3': {
  title: 'Lecture et Utilisation des Schémas Électriques',
  textContent: `Lire et interpréter les schémas électriques est essentiel pour tout technicien en électricité automobile.

**Objectifs**
- Comprendre les conventions normalisées
- Identifier les composants et leurs connexions
- Suivre le cheminement d’un circuit

**Éléments d’un schéma**
- Symboles normalisés (interrupteurs, résistances, relais…)
- Liaisons filaires avec codage couleur
- Numérotation des broches et composants

**Étapes de lecture**
1. Identifier l’alimentation et la masse
2. Suivre les connexions du circuit
3. Localiser les composants
4. Analyser les points de mesure

**Applications**
- Dépannage de circuits électriques
- Modification ou ajout d’un circuit
- Vérification de la conformité d’une installation

**Outils recommandés**
- Schémas constructeurs (PDF ou papier)
- Tablette ou PC avec logiciel de lecture
- Marqueurs ou surligneurs pour tracer les circuits`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m4_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/10/schema-electrique-voiture.jpg',
},
'm4-4': {
  title: 'Diagnostic des Pannes Électriques',
  textContent: `Le diagnostic électrique permet de localiser rapidement les défauts dans un circuit.

**Sources de pannes fréquentes**
- Connexions défectueuses (oxydation, desserrage)
- Fusibles grillés
- Fils coupés ou en court-circuit
- Masse non connectée

**Méthodologie**
1. Observer les symptômes (composant ne fonctionne pas, clignotement…)
2. Vérifier l’alimentation et la masse
3. Utiliser un multimètre pour tester la continuité et la tension
4. Isoler la section fautive du circuit

**Étapes clés**
- Inspection visuelle
- Contrôle des tensions d’alimentation
- Test de continuité avec bip sonore
- Contrôle des relais et interrupteurs

**Outils nécessaires**
- Multimètre numérique
- Lampe témoin
- Schéma électrique
- Pinces crocodiles

**Objectif**
Identifier et réparer rapidement les dysfonctionnements électriques sans remplacer inutilement de pièces.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m4_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/02/diagnostic-electrique-auto.jpg',
},
'm4-5': {
  title: 'Utilisation des Appareils de Mesure',
  textContent: `Les appareils de mesure sont indispensables pour tout diagnostic en électricité automobile.

**Appareils principaux**
- Multimètre : tension, résistance, continuité, courant
- Pince ampèremétrique : mesure de courant sans couper le circuit
- Oscilloscope : analyse des signaux rapides (injecteurs, capteurs...)
- Testeur de fusibles et relais

**Bonnes pratiques**
- Toujours commencer par mesurer la tension batterie
- Sélectionner le bon calibre sur le multimètre
- Ne jamais mesurer la résistance sur un circuit sous tension
- Manipuler les sondes avec précaution

**Exemples d’utilisation**
- Vérification d’un capteur de température moteur
- Test de la continuité d’un câble
- Contrôle du signal d’un injecteur avec l’oscilloscope

**Consignes de sécurité**
- Porter des gants isolants si nécessaire
- Ne pas manipuler de circuits haute tension sans précaution
- Travailler moteur arrêté sauf si la mesure exige l’inverse

**Objectif**
Utiliser correctement les appareils pour diagnostiquer efficacement et en toute sécurité.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m4_5',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2019/06/multimetre-auto.jpg',
},
'm5-1': {
  title: 'Principes de la Suspension Automobile',
  textContent: `Le système de suspension assure le confort de conduite et maintient la stabilité du véhicule.

**Fonctions principales**
- Absorber les chocs dus aux irrégularités de la route
- Maintenir le contact des roues avec le sol
- Stabiliser le véhicule en virage ou au freinage

**Composants clés**
- Ressorts (hélicoïdaux, à lames)
- Amortisseurs (hydrauliques, à gaz)
- Bras de suspension
- Silentblocs et rotules

**Types de suspensions**
- Suspension indépendante (avant et arrière)
- Suspension semi-indépendante
- Suspension rigide (essieu rigide)

**Entretien et inspection**
- Vérification des fuites d’amortisseurs
- Contrôle du jeu dans les rotules et bras
- Usure irrégulière des pneus

**Objectif**
Comprendre le rôle du système de suspension pour anticiper l'usure et assurer la sécurité du véhicule.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m5_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/02/systeme-suspension.jpg',
},
'm5-2': {
  title: 'Types de Systèmes de Direction',
  textContent: `La direction permet de contrôler la trajectoire du véhicule. Elle doit être précise, souple et sécurisée.

**Fonctions**
- Diriger les roues avant (et parfois arrière)
- Offrir une bonne sensation au volant
- Assurer un retour automatique en ligne droite

**Types de direction**
- Direction mécanique à crémaillère
- Direction assistée hydraulique (DAH)
- Direction assistée électrique (DAE)
- Direction à assistance variable

**Composants principaux**
- Volant, colonne de direction
- Crémaillère
- Biellettes de direction
- Pompe hydraulique ou moteur électrique

**Symptômes de défaillance**
- Jeu dans le volant
- Dureté de la direction
- Bruits en tournant
- Fuite d’huile (DAH)

**Objectif**
Identifier les différents types de systèmes de direction et comprendre leur fonctionnement pour mieux diagnostiquer les anomalies.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m5_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2019/04/direction-assistee.jpg',
},
'm5-3': {
  title: 'Diagnostic des Problèmes de Suspension',
  textContent: `Un bon diagnostic de suspension permet d’améliorer le confort et la sécurité du véhicule.

**Symptômes fréquents**
- Claquements ou bruits anormaux
- Véhicule penché d’un côté
- Tenue de route instable
- Usure irrégulière des pneus

**Méthodologie**
1. Inspection visuelle sous pont
2. Test des amortisseurs (rebond, fuites)
3. Contrôle du jeu dans les rotules et silentblocs
4. Analyse du comportement routier

**Outils utilisés**
- Pied-de-biche pour vérifier les jeux
- Appareil de test d’amortisseurs
- Banc de suspension
- Caméras thermiques (pour fuites invisibles)

**Causes fréquentes**
- Amortisseurs usés
- Silentblocs déchirés
- Bras de suspension déformé
- Ressort cassé

**Objectif**
Identifier avec précision les éléments défectueux pour garantir une conduite sûre et confortable.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m5_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/07/diagnostic-suspension.jpg',
},
'm5-4': {
  title: 'Géométrie et Alignement des Roues',
  textContent: `La géométrie des roues joue un rôle crucial dans la tenue de route, l’usure des pneus et la sécurité.

**Paramètres de géométrie**
- Parallélisme (ou toe)
- Carrossage (ou camber)
- Chasse (ou caster)
- Angle de pivot

**Conséquences d’un mauvais alignement**
- Usure rapide ou irrégulière des pneus
- Tirage du véhicule d’un côté
- Volant non centré
- Mauvaise tenue de route

**Quand vérifier la géométrie ?**
- Après un choc (trottoir, nid-de-poule)
- Lors d’un remplacement de pièces de direction/suspension
- Si anomalie au comportement routier

**Équipements utilisés**
- Banc de géométrie 3D
- Cibles et caméras de mesure
- Logiciels de calibrage constructeurs

**Objectif**
Maintenir un alignement optimal pour maximiser la durée de vie des pneus et améliorer la sécurité.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m5_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/05/geometrie-roues.jpg',
},
'm6-1': {
  title: 'Principes de la Climatisation Automobile',
  textContent: `Le système de climatisation automobile assure le confort thermique des passagers en régulant la température et l’humidité de l’air dans l’habitacle.

**Fonctionnement général**
- Basé sur le cycle de compression-détente d’un fluide frigorigène
- Absorption de la chaleur dans l’habitacle et rejet vers l’extérieur
- Assèchement de l’air ambiant

**Étapes du cycle**
1. Compression du gaz par le compresseur
2. Condensation dans le condenseur (chaleur évacuée)
3. Détente dans le détendeur
4. Évaporation dans l’évaporateur (absorption de la chaleur)

**Avantages**
- Confort de conduite accru
- Dégivrage rapide des vitres
- Réduction de la fatigue du conducteur

**Objectif**
Comprendre le principe de base du fonctionnement d’un circuit de climatisation pour mieux appréhender les diagnostics et la maintenance.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m6_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/04/principe-clim-auto.jpg',
},
'm6-2': {
  title: 'Composants du Circuit de Climatisation',
  textContent: `Le circuit de climatisation est composé de plusieurs éléments essentiels permettant le refroidissement et la régulation de l’air dans l’habitacle.

**Composants principaux**
- **Compresseur** : pompe le fluide frigorigène sous haute pression
- **Condenseur** : échangeur qui libère la chaleur à l’extérieur du véhicule
- **Détendeur** : fait baisser la pression du fluide avant l’évaporateur
- **Évaporateur** : absorbe la chaleur de l’air ambiant
- **Filtre déshydrateur** : élimine l’humidité et les impuretés
- **Ventilateur habitacle** : distribue l’air frais dans l’habitacle

**Autres éléments**
- Capteurs de température
- Pressostats de sécurité
- Tuyauteries haute et basse pression

**Objectif**
Identifier et comprendre le rôle de chaque composant pour faciliter le diagnostic et la réparation du système.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m6_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/04/composants-clim.jpg',
},
'm6-3': {
  title: 'Diagnostic des Pannes de Climatisation',
  textContent: `Un diagnostic efficace permet de rétablir rapidement le fonctionnement optimal de la climatisation.

**Symptômes courants**
- Air non refroidi
- Bruits anormaux lors de l’activation
- Fuite de fluide frigorigène
- Mauvaise odeur dans l’habitacle
- Système qui s’enclenche puis s’arrête

**Méthodologie**
1. Vérification de la pression (haute/basse) à l’aide de manomètres
2. Détection de fuites avec traceur UV ou détecteur électronique
3. Test de fonctionnement des capteurs et actuateurs
4. Contrôle des connexions électriques du compresseur et de la ventilation

**Causes fréquentes**
- Manque de fluide frigorigène
- Compresseur HS ou embrayage défectueux
- Détendeur ou évaporateur obstrué
- Sonde de température défaillante

**Objectif**
Diagnostiquer les pannes avec précision pour éviter les réparations inutiles et garantir un confort durable.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m6_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/12/diagnostic-clim.jpg',
},
'm6-4': {
  title: 'Maintenance et Recharge des Systèmes',
  textContent: `Un entretien régulier du système de climatisation prolonge sa durée de vie et garantit son efficacité.

**Entretien préventif**
- Vérification annuelle de la pression du circuit
- Changement du filtre habitacle tous les 15 000 km
- Nettoyage de l’évaporateur pour éliminer les bactéries

**Recharge de fluide frigorigène**
- Nécessaire tous les 2 à 4 ans selon l’usage
- Réalisée avec une station de recharge automatique
- Contrôle des fuites avant la recharge

**Précautions**
- Utilisation de fluide adapté (R134a ou R1234yf selon les véhicules)
- Port de lunettes et gants de protection
- Respect des normes environnementales

**Objectif**
Maintenir un système performant, fiable et respectueux de l’environnement.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m6_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/06/recharge-clim-auto.jpg',
},
'm7-1': {
  title: 'Types de Transmissions Automobiles',
  textContent: `La transmission permet de transférer la puissance du moteur vers les roues motrices.

**Principaux types de transmission**
- **Manuelle** : changement de rapport par le conducteur à l’aide d’un levier d’embrayage
- **Automatique** : passage automatique des vitesses (boîte hydraulique, CVT, double embrayage)
- **Semi-automatique / robotisée** : boîte manuelle pilotée électroniquement sans pédale d’embrayage

**Différences clés**
- Confort de conduite
- Consommation de carburant
- Coût de maintenance
- Comportement dynamique

**Objectif**
Identifier les types de transmissions afin de comprendre leurs avantages, inconvénients et applications.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m7_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/07/types-transmissions.jpg',
},
'm7-2': {
  title: 'Boîtes de Vitesses Manuelles',
  textContent: `La boîte manuelle est un système mécanique permettant au conducteur de sélectionner manuellement les rapports de vitesse.

**Constitution**
- Embrayage (disque, mécanisme, butée)
- Arbres primaire, secondaire, baladeur
- Pignons et synchros

**Fonctionnement**
- L’embrayage sépare moteur/transmission
- Le conducteur engage un rapport via le levier
- Le couple moteur est transmis selon le rapport sélectionné

**Avantages**
- Simplicité mécanique
- Moins coûteuse à entretenir
- Meilleur contrôle du véhicule

**Objectif**
Comprendre la structure et le fonctionnement d’une boîte manuelle pour détecter les anomalies et assurer l’entretien.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m7_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/12/boite-manuelle.jpg',
},
'm7-3': {
  title: 'Boîtes de Vitesses Automatiques',
  textContent: `Les boîtes automatiques assurent le passage des vitesses sans intervention du conducteur.

**Types de boîtes automatiques**
- **Classique à convertisseur de couple**
- **CVT (à variation continue)**
- **Double embrayage (DSG, EDC...)**

**Composants**
- Convertisseur de couple
- Train épicycloïdal
- Modules électrohydrauliques ou électroniques

**Avantages**
- Confort de conduite
- Idéal en circulation urbaine
- Réduction de la fatigue

**Inconvénients**
- Entretien spécifique
- Réparations parfois coûteuses

**Objectif**
Identifier le type de boîte automatique et comprendre son fonctionnement pour un bon diagnostic.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m7_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/03/boite-auto.jpg',
},
'm7-4': {
  title: 'Diagnostic des Problèmes de Transmission',
  textContent: `Un bon diagnostic permet de localiser rapidement l’origine d’un dysfonctionnement dans la transmission.

**Symptômes fréquents**
- Difficulté à passer les vitesses
- Bruits de craquement ou de frottement
- Patinage de l’embrayage
- À-coups ou vibrations en conduite

**Méthodologie**
1. Vérification visuelle (fuites, usure, jeu)
2. Essai routier pour identifier les symptômes
3. Lecture des codes défaut (boîtes automatiques)
4. Contrôle des niveaux et de l’état de l’huile

**Outils utilisés**
- Valise de diagnostic
- Pont élévateur pour contrôle mécanique
- Mesure de pression pour boîte auto

**Objectif**
Éviter les erreurs de diagnostic et cibler précisément les composants défectueux.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m7_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/04/diagnostic-transmission.jpg',
},
'm7-5': {
  title: 'Maintenance et Réparation',
  textContent: `Une transmission bien entretenue garantit longévité et performance du véhicule.

**Entretien courant**
- Vidange d’huile de boîte (tous les 60 000 à 100 000 km)
- Vérification du jeu des arbres et pignons
- Contrôle et réglage du câble d’embrayage (si présent)
- Remplacement des joints d’étanchéité

**Réparations courantes**
- Remplacement d’un embrayage
- Révision d’une boîte de vitesses
- Réparation d’un convertisseur ou d’un module hydraulique

**Bonnes pratiques**
- Ne jamais forcer une vitesse
- Utiliser l’huile préconisée par le constructeur
- Éviter les surcharges et les démarrages brutaux

**Objectif**
Assurer la fiabilité de la transmission et limiter les pannes coûteuses.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m7_5',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/08/entretien-boite.jpg',
},
'm8-1': {
  title: 'Principes de Fonctionnement des Moteurs Diesel',
  textContent: `Les moteurs diesel sont largement utilisés dans les véhicules utilitaires et industriels en raison de leur rendement élevé.

**Caractéristiques principales**
- Allumage par compression (pas de bougie d’allumage)
- Utilisation du gazole comme carburant
- Couple élevé à bas régime

**Cycle de fonctionnement (Cycle Diesel)**
1. Admission d’air
2. Compression de l’air (haute température)
3. Injection du carburant (auto-inflammation)
4. Détente
5. Échappement

**Avantages**
- Meilleure consommation de carburant
- Longévité du moteur
- Moins de CO2 (mais plus de NOx et particules)

**Objectif**
Comprendre les bases du fonctionnement pour mieux diagnostiquer les problèmes liés aux moteurs diesel.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m8_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/10/moteur-diesel-fonctionnement.jpg',
},
'm8-2': {
  title: 'Systèmes d\'Injection Diesel',
  textContent: `Le système d’injection est essentiel au bon fonctionnement des moteurs diesel.

**Types d’injection**
- Injection indirecte : carburant injecté dans une préchambre
- Injection directe : carburant injecté directement dans la chambre de combustion

**Systèmes modernes**
- Common Rail (rampe commune)
- Injecteurs électromagnétiques ou piezoélectriques
- Pompe haute pression (jusqu’à 2000 bars)

**Composants**
- Pompe d’injection
- Injecteurs
- Capteurs (pression, température, régime)
- Calculateur moteur

**Objectif**
Comprendre le fonctionnement des systèmes d’injection pour détecter rapidement une panne ou une défaillance.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m8_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/02/systeme-injection-diesel.jpg',
},
'm8-3': {
  title: 'Diagnostic des Problèmes Spécifiques Diesel',
  textContent: `Les moteurs diesel ont des pannes spécifiques liées à la haute pression et à la combustion.

**Symptômes fréquents**
- Démarrage difficile à froid
- Fumée noire, bleue ou blanche
- Perte de puissance
- Bruits de cliquetis moteur

**Pannes fréquentes**
- Injecteurs encrassés ou grippés
- Pompe haute pression défaillante
- Capteurs défectueux (pression rail, débitmètre)
- Filtre à gasoil colmaté

**Méthodologie de diagnostic**
1. Lecture des codes défaut
2. Vérification de la pression rail
3. Contrôle du retour injecteurs
4. Inspection visuelle des conduites et connecteurs

**Objectif**
Identifier avec précision les pannes diesel pour éviter les remplacements inutiles et optimiser les réparations.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m8_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/06/diagnostic-diesel.jpg',
},
'm8-4': {
  title: 'Maintenance et Réparation des Moteurs Diesel',
  textContent: `L’entretien des moteurs diesel est essentiel pour garantir leur longévité et leur bon fonctionnement.

**Opérations courantes**
- Vidange et remplacement des filtres (huile, air, gasoil)
- Nettoyage des injecteurs
- Contrôle du système EGR et du filtre à particules (FAP)
- Vérification des durites et de la pompe à vide

**Réparations fréquentes**
- Remplacement des injecteurs ou de la pompe
- Révision du turbo ou du FAP
- Changement des bougies de préchauffage

**Bonnes pratiques**
- Utiliser un carburant de qualité
- Respecter les intervalles d’entretien
- Faire tourner le moteur quelques secondes avant coupure (turbo)

**Objectif**
Assurer la fiabilité et la performance des moteurs diesel sur le long terme.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m8_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2020/11/entretien-moteur-diesel.jpg',
},
'm9-1': {
  title: 'Systèmes d\'Aide à la Conduite (ADAS)',
  textContent: `Les systèmes ADAS (Advanced Driver Assistance Systems) augmentent la sécurité et le confort du conducteur.

**Exemples de systèmes ADAS**
- Alerte de franchissement de ligne (LDW)
- Régulateur de vitesse adaptatif (ACC)
- Freinage d’urgence automatique (AEB)
- Assistance au stationnement
- Caméras 360° et capteurs de recul

**Fonctionnement**
- Utilisation de capteurs (radars, caméras, lidars)
- Traitement par l’unité centrale ADAS
- Interaction avec les freins, la direction, l’accélérateur

**Avantages**
- Réduction des accidents
- Aide à la conduite sur autoroute
- Confort accru

**Objectif**
Comprendre le fonctionnement de base des systèmes ADAS et leur rôle dans la conduite assistée.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m9_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/09/ADAS-schéma.jpg',
},
'm9-2': {
  title: 'Systèmes de Sécurité Passive et Active',
  textContent: `Les systèmes de sécurité sont essentiels pour protéger les occupants avant, pendant et après un accident.

**Sécurité passive**
- Airbags
- Ceintures de sécurité
- Zones de déformation programmées
- Appuie-têtes actifs

**Sécurité active**
- ABS (antiblocage des roues)
- ESP (contrôle de stabilité)
- ASR (antipatinage)
- Aide au freinage d’urgence

**Interaction entre systèmes**
Les systèmes actifs préviennent les accidents, tandis que les systèmes passifs minimisent les blessures en cas de collision.

**Objectif**
Identifier les composants de sécurité d’un véhicule et comprendre leur fonctionnement en situation réelle.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m9_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/01/securite-auto.jpg',
},
'm9-3': {
  title: 'Systèmes de Confort (GPS, Multimédia)',
  textContent: `Les systèmes de confort améliorent l’expérience de conduite et la connectivité à bord.

**Principaux systèmes**
- GPS avec navigation intégrée
- Systèmes multimédia (radio, Bluetooth, Android Auto, Apple CarPlay)
- Climatisation automatique multizone
- Éclairage d’ambiance
- Sièges chauffants et massants

**Technologies intégrées**
- Écrans tactiles multifonctions
- Reconnaissance vocale
- Connexions USB, Wi-Fi embarqué

**Tendances actuelles**
- Véhicules connectés
- Commandes via smartphone
- Assistants vocaux embarqués

**Objectif**
Découvrir les systèmes modernes de confort embarqué et comprendre leur fonctionnement électronique et logiciel.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m9_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2021/06/systeme-confort.jpg',
},
'm9-4': {
  title: 'Diagnostic des Systèmes de Confort et Sécurité',
  textContent: `Les systèmes de confort et sécurité embarqués sont de plus en plus complexes et interconnectés.

**Méthodes de diagnostic**
1. Lecture des codes défaut via valise OBD-II
2. Vérification de l’intégrité des réseaux (CAN, LIN, FlexRay)
3. Contrôle des capteurs et actionneurs (radars, caméras, capteurs d’angle)
4. Test des modules électroniques (BCM, ECU, ADAS)

**Problèmes fréquents**
- Dysfonctionnement du radar ou de la caméra
- Bug logiciel dans le GPS/multimédia
- Capteur d’angle de braquage déréglé
- Connecteurs défectueux ou coupures réseau

**Outils nécessaires**
- Interface de diagnostic constructeur
- Logiciel de lecture de trame CAN
- Oscilloscope pour analyse de signaux

**Objectif**
Maîtriser les outils et méthodes pour diagnostiquer rapidement les pannes liées au confort et à la sécurité.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m9_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/07/diagnostic-adas.jpg',
},
'm10-1': {
  title: 'Introduction aux Véhicules Hybrides',
  textContent: `Les véhicules hybrides combinent un moteur thermique et un moteur électrique pour optimiser la consommation de carburant et réduire les émissions.

**Types de véhicules hybrides**
- Hybride parallèle
- Hybride série
- Hybride rechargeable (PHEV)

**Composants principaux**
- Moteur thermique
- Moteur électrique
- Batterie haute tension
- Inverseur de puissance
- Unité de commande hybride (HCU)

**Avantages**
- Réduction de la consommation
- Moins d’émissions polluantes
- Transition douce vers l’électrification

**Objectif**
Comprendre le fonctionnement général des véhicules hybrides et les raisons de leur adoption croissante.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m10_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/03/hybride-fonctionnement.png',
},
'm10-2': {
  title: 'Technologie des Véhicules Électriques',
  textContent: `Les véhicules 100% électriques (VE) utilisent uniquement l’énergie électrique pour la propulsion.

**Composants clés**
- Moteur électrique (synchrones ou asynchrones)
- Batterie lithium-ion
- Convertisseur DC/AC
- Réducteur
- Unité de gestion de la batterie (BMS)

**Fonctionnement**
- L’énergie stockée dans la batterie alimente le moteur via un convertisseur
- Le couple est transmis directement aux roues
- Récupération d’énergie au freinage (freinage régénératif)

**Avantages**
- Aucune émission à l’usage
- Moins de pièces mobiles = moins d’entretien
- Conduite silencieuse et fluide

**Objectif**
Acquérir une vision technique des éléments qui composent un véhicule électrique et leur interaction.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m10_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/03/schema-vehicule-electrique.jpg',
},
'm10-3': {
  title: 'Systèmes de Batterie et Recharge',
  textContent: `Les batteries sont le cœur des véhicules électriques et hybrides rechargeables.

**Types de batteries**
- Lithium-ion (le plus courant)
- LiFePO4
- Nickel-métal-hydrure (pour certains hybrides)

**Paramètres importants**
- Capacité (kWh)
- Tension nominale
- Température de fonctionnement
- Durée de vie (cycles de charge)

**Systèmes de recharge**
- Prise domestique (niveau 1)
- Borne AC (niveau 2)
- Borne DC rapide (niveau 3)

**Gestion électronique**
- BMS (Battery Management System) : surveillance tension, température, équilibrage des cellules

**Objectif**
Comprendre les caractéristiques techniques des batteries et les différentes méthodes de recharge sécurisées.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m10_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/01/batterie-recharge.jpg',
},
'm10-4': {
  title: 'Sécurité lors des Interventions',
  textContent: `L’intervention sur des véhicules électriques ou hybrides nécessite des précautions strictes.

**Risques principaux**
- Chocs électriques (jusqu’à 400-800V)
- Arc électrique
- Brûlures chimiques

**Équipements de sécurité**
- Gants isolants certifiés
- Tapis isolant
- Piquet de consignation
- Multimètre CAT III/IV

**Procédures obligatoires**
1. Identification du système haute tension
2. Consignation (coupure et vérification absence de tension)
3. Signalisation de la zone de travail
4. Suivi des procédures du constructeur

**Objectif**
Garantir la sécurité de l’intervenant et du véhicule en maîtrisant les gestes et outils adaptés.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m10_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/05/securite-vehicule-electrique.jpg',
},
'm10-5': {
  title: 'Diagnostic et Maintenance Spécifique',
  textContent: `Le diagnostic des véhicules électrifiés demande des outils et des connaissances spécifiques.

**Procédures courantes**
- Lecture des DTC haute tension
- Vérification de l’état de la batterie via le BMS
- Test de l’isolement électrique
- Contrôle de l’électronique de puissance

**Outils spécialisés**
- Valises de diagnostic compatibles VE
- Testeurs d’isolement haute tension
- Logiciels de supervision batterie

**Entretien spécifique**
- Refroidissement batterie (liquide ou air)
- Contrôle du système de recharge
- Mises à jour logicielles (ECU, BMS)

**Objectif**
Maîtriser les techniques de diagnostic et les opérations d’entretien propres aux véhicules hybrides et électriques.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m10_5',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2022/09/diagnostic-vehicule-electrique.jpg',
},
'm11-1': {
  title: 'Organisation et Gestion d\'un Atelier',
  textContent: `La bonne organisation d’un atelier est essentielle pour garantir l’efficacité, la sécurité et la rentabilité.

**Zones d’un atelier bien organisé**
- Zone d’accueil
- Zone de diagnostic
- Postes de travail spécialisés
- Stockage des pièces
- Bureau administratif

**Clés de la gestion**
- Planification des tâches et des rendez-vous
- Répartition du travail entre techniciens
- Suivi des délais et productivité
- Respect des normes de sécurité et propreté

**Outils numériques**
- Logiciels de gestion d’atelier (GMAO)
- Systèmes de planification

**Objectif**
Savoir structurer l’espace et les processus pour une activité fluide et efficace.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m11_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/03/organisation-atelier.jpg',
},
'm11-2': {
  title: 'Relation et Communication Client',
  textContent: `La relation client est un pilier de la fidélisation et de la réputation d’un atelier.

**Accueil et écoute**
- Écoute active du besoin
- Explication claire des interventions
- Reformulation pour éviter les malentendus

**Communication efficace**
- Utilisation d’un langage accessible
- Transparence sur les délais et coûts
- Suivi après intervention

**Gestion des conflits**
- Réponses professionnelles aux réclamations
- Proposition de solutions concrètes
- Importance de l’attitude calme et empathique

**Objectif**
Maîtriser les bonnes pratiques de communication pour renforcer la confiance du client.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m11_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/03/accueil-client-atelier.jpg',
},
'm11-3': {
  title: 'Gestion des Stocks et Approvisionnements',
  textContent: `Une bonne gestion des stocks permet d’éviter les ruptures, les pertes et les surcoûts.

**Catégorisation des pièces**
- Pièces à rotation rapide
- Pièces spécifiques
- Produits consommables

**Méthodes de gestion**
- Stock minimum / maximum
- Réassort automatique
- Inventaire régulier

**Suivi**
- Logiciel de gestion de stock
- Codification et étiquetage
- Suivi des fournisseurs

**Objectif**
Optimiser la disponibilité des pièces tout en maîtrisant les coûts de stockage.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m11_3',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/03/stock-atelier.jpg',
},
'm11-4': {
  title: 'Normes et Réglementations',
  textContent: `L’activité d’un atelier est encadrée par des normes de sécurité, d’environnement et de qualité.

**Réglementation en vigueur**
- Recyclage des huiles usagées
- Tri des déchets dangereux
- Traçabilité des interventions

**Sécurité du personnel**
- Port des EPI obligatoires
- Signalisation des zones à risques
- Plan d’évacuation

**Conformité administrative**
- Affichages obligatoires
- Registres de sécurité
- Suivi des habilitations du personnel

**Objectif**
Garantir que l’atelier fonctionne en toute légalité et sécurité, pour les employés comme pour l’environnement.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m11_4',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/03/normes-atelier.jpg',
},
'm12-1': {
  title: 'Exploration du Marché de l\'Emploi Automobile',
  textContent: `Comprendre les opportunités professionnelles du secteur automobile est une étape cruciale pour s’orienter efficacement.

**Secteurs clés**
- Réparation et maintenance
- Véhicules électriques et hybrides
- Diagnostic électronique
- Carrosserie-peinture, vente de pièces, etc.

**Types d’entreprises**
- Concessions automobiles
- Centres auto (Norauto, Feu Vert…)
- Garages indépendants
- Constructeurs et équipementiers

**Tendances actuelles**
- Recrutement orienté vers les compétences numériques
- Hausse de la demande dans la mobilité électrique

**Objectif**
Identifier les débouchés en lien avec son profil et ses compétences.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m12_1',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/04/marche-emploi-automobile.jpg',
},
'm12-2': {
  title: 'CV et Lettre de Motivation Spécialisés',
  textContent: `Le CV et la lettre de motivation sont vos premiers outils pour vous démarquer.

**CV automobile efficace**
- Mentionner les compétences techniques spécifiques (ex : diagnostic OBD-II, climatisation…)
- Détail des stages ou expériences en atelier
- Certifications ou habilitations (électricité, sécurité…)

**Lettre de motivation**
- Adapter à l’entreprise visée
- Montrer sa passion pour l’automobile
- Mettre en avant sa rigueur et sa polyvalence

**Objectif**
Créer un dossier de candidature clair, professionnel et ciblé pour le secteur auto.`,
  videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m12_2',
  imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/04/cv-auto.jpg',
},
'm12-3': {
  title: 'Préparation aux Entretiens d\'Embauche',
  textContent: `L’entretien est l’occasion de valoriser vos compétences et votre savoir-être.

**Avant l’entretien**
- Rechercher des infos sur l’entreprise
- Préparer des réponses aux questions classiques
- S’entraîner à parler de ses expériences

**Pendant l’entretien**
- Posture professionnelle et ponctualité
- Mettre en avant son savoir-faire technique
- Exemples concrets de situations vécues

**Après l’entretien**
- Relancer poliment par e-mail si besoin

**Objectif**
Convaincre le recruteur que vous êtes le bon candidat pour l’atelier ou le garage.`,
videoUrl: 'https://www.youtube.com/embed/exampleVideoID_m12_2',
imageUrl: 'https://www.auto-technique.fr/wp-content/uploads/2023/04/cv-auto.jpg',
},

   } ;
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
        question: 'Quel est le principe de fonctionnement d\'un moteur à combustion interne?',
        options: [ 'Transformation de l\'énergie électrique en énergie mécanique', 'Transformation de l\'énergie chimique en énergie mécanique', 'Transformation de l\'énergie solaire en énergie mécanique', 'Transformation de l\'énergie hydraulique en énergie mécanique' ],
        correctAnswer: 'Transformation de l\'énergie chimique en énergie mécanique',
      },
      {
        id: 'q3m1-1',
        question: 'Quels sont les quatre temps du cycle d\'un moteur à combustion interne?',
        options: [ 'Admission, compression, explosion, échappement', 'Démarrage, accélération, décélération, arrêt', 'Injection, combustion, refroidissement, lubrification', 'Allumage, propulsion, freinage, stationnement' ],
        correctAnswer: 'Admission, compression, explosion, échappement',
      },
      {
        id: 'q4m1-1',
        question: 'Pendant quel temps du cycle moteur la bougie d\'allumage émet-elle une étincelle?',
        options: [ 'Admission', 'Compression', 'Explosion', 'Échappement' ],
        correctAnswer: 'Compression',
      },
      {
        id: 'q5m1-1',
        question: 'Quel système contrôle la quantité de carburant et d\'air qui entre dans la chambre de combustion?',
        options: [ 'Système de freinage', 'Système de refroidissement', 'Système d\'injection électronique', 'Système de transmission' ],
        correctAnswer: 'Système d\'injection électronique',
      },
    ],
    'm1-2': [
      {
        id: 'q1m1-2',
        question: 'Quelle est la principale différence entre un moteur diesel et un moteur à essence?',
        options: [ 'Le moteur diesel utilise des bougies d\'allumage, contrairement au moteur à essence', 'Le moteur diesel utilise l\'allumage par compression, tandis que le moteur à essence utilise des bougies d\'allumage', 'Le moteur diesel fonctionne uniquement avec de l\'électricité', 'Le moteur diesel n\'a pas de pistons' ],
        correctAnswer: 'Le moteur diesel utilise l\'allumage par compression, tandis que le moteur à essence utilise des bougies d\'allumage',
      },
      {
        id: 'q2m1-2',
        question: 'Quels sont les composants principaux d\'un moteur hybride?',
        options: [ 'Uniquement un moteur électrique et une batterie', 'Un moteur à combustion interne, un moteur électrique et une batterie', 'Uniquement un moteur à combustion interne et un générateur', 'Deux moteurs à combustion interne différents' ],
        correctAnswer: 'Un moteur à combustion interne, un moteur électrique et une batterie',
      },
      {
        id: 'q3m1-2',
        question: 'Quel type de moteur offre généralement un meilleur rendement énergétique?',
        options: [ 'Moteur à essence', 'Moteur diesel', 'Moteur à gaz', 'Moteur à vapeur' ],
        correctAnswer: 'Moteur diesel',
      },
      {
        id: 'q4m1-2',
        question: 'Dans un système hybride parallèle, comment fonctionnent les moteurs?',
        options: [ 'Le moteur électrique fonctionne uniquement quand le moteur thermique est éteint', 'Le moteur thermique génère uniquement de l\'électricité pour le moteur électrique', 'Les deux moteurs peuvent propulser le véhicule indépendamment ou ensemble', 'Le moteur électrique fonctionne uniquement en marche arrière' ],
        correctAnswer: 'Les deux moteurs peuvent propulser le véhicule indépendamment ou ensemble',
      },
      {
        id: 'q5m1-2',
        question: 'Quel composant convertit le mouvement des pistons en mouvement rotatif?',
        options: [ 'Arbre à cames', 'Vilebrequin', 'Soupapes', 'Bougies d\'allumage' ],
        correctAnswer: 'Vilebrequin',
      },
    ],
    'm1-3': [
      {
        id: 'q1m1-3',
        question: 'À quelle fréquence est-il généralement recommandé de changer l\'huile moteur?',
        options: [ 'Tous les 1 000 km', 'Tous les 5 000 à 10 000 km', 'Tous les 50 000 km', 'Une fois par an, quelle que soit la distance parcourue' ],
        correctAnswer: 'Tous les 5 000 à 10 000 km',
      },
      {
        id: 'q2m1-3',
        question: 'Pourquoi est-il important de remplacer régulièrement le filtre à air?',
        options: [ 'Pour améliorer la puissance de freinage', 'Pour maintenir un bon rapport air-carburant et optimiser la consommation', 'Pour réduire le bruit du moteur', 'Pour augmenter la vitesse maximale du véhicule' ],
        correctAnswer: 'Pour maintenir un bon rapport air-carburant et optimiser la consommation',
      },
      {
        id: 'q3m1-3',
        question: 'Quelle est la fonction principale des bougies d\'allumage?',
        options: [ 'Refroidir le moteur', 'Créer l\'étincelle nécessaire pour enflammer le mélange air-carburant', 'Filtrer l\'huile moteur', 'Lubrifier les pistons' ],
        correctAnswer: 'Créer l\'étincelle nécessaire pour enflammer le mélange air-carburant',
      },
      {
        id: 'q4m1-3',
        question: 'Quelles peuvent être les conséquences d\'une rupture de courroie de distribution?',
        options: [ 'Simplement une panne mineure facilement réparable', 'Des dommages graves au moteur nécessitant des réparations coûteuses', 'Uniquement une perte de puissance temporaire', 'Aucun impact sur le fonctionnement du moteur' ],
        correctAnswer: 'Des dommages graves au moteur nécessitant des réparations coûteuses',
      },
      {
        id: 'q5m1-3',
        question: 'À quelle fréquence devrait-on vérifier le niveau du liquide de refroidissement?',
        options: [ 'Uniquement lors de l\'achat du véhicule', 'À chaque changement d\'huile', 'Uniquement en été', 'Uniquement quand le moteur surchauffe' ],
        correctAnswer: 'À chaque changement d\'huile',
      },
    ],
    'm2-1': [
      {
        id: 'q1m2-1',
        question: 'Quel est le principe fondamental du freinage automobile?',
        options: [ 'Convertir l\'énergie électrique en énergie mécanique', 'Convertir l\'énergie cinétique en énergie thermique par friction', 'Convertir l\'énergie chimique en énergie électrique', 'Convertir l\'énergie solaire en énergie mécanique' ],
        correctAnswer: 'Convertir l\'énergie cinétique en énergie thermique par friction',
      },
      {
        id: 'q2m2-1',
        question: 'Quels sont les deux principaux types de systèmes de freinage utilisés dans les véhicules?',
        options: [ 'Freins à disque et freins à tambour', 'Freins à main et freins à pied', 'Freins ABS et freins conventionnels', 'Freins hydrauliques et freins pneumatiques' ],
        correctAnswer: 'Freins à disque et freins à tambour',
      },
      {
        id: 'q3m2-1',
        question: 'Quel composant convertit la force mécanique appliquée sur la pédale en pression hydraulique?',
        options: [ 'L\'étrier de frein', 'Le maître-cylindre', 'Le servofrein', 'Le répartiteur de freinage' ],
        correctAnswer: 'Le maître-cylindre',
      },
      {
        id: 'q4m2-1',
        question: 'Quelle est la fonction principale du système ABS?',
        options: [ 'Augmenter la puissance de freinage', 'Réduire l\'usure des plaquettes de frein', 'Empêcher le blocage des roues lors d\'un freinage d\'urgence', 'Améliorer l\'accélération du véhicule' ],
        correctAnswer: 'Empêcher le blocage des roues lors d\'un freinage d\'urgence',
      },
      {
        id: 'q5m2-1',
        question: 'Pourquoi la plupart des véhicules sont-ils équipés d\'un servofrein?',
        options: [ 'Pour augmenter la vitesse maximale', 'Pour réduire l\'effort nécessaire pour actionner les freins', 'Pour améliorer la consommation de carburant', 'Pour réduire le bruit lors du freinage' ],
        correctAnswer: 'Pour réduire l\'effort nécessaire pour actionner les freins',
      },
    ],
  };
