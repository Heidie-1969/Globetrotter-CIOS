const QUESTIONS = {
  nederland: {
    title: "Nederland",
    questions: [
      {
        question: "Hoe wordt feedback in de Nederlandse sportcultuur doorgaans gegeven?",
        options: {
          A: "Heel indirect, om de gevoelens van de sporter te sparen.",
          B: "Direct en confronterend, gericht op de taak en taakverbetering.",
          C: "Via de aanvoerder, rechtstreeks contact met de coach is zeldzaam."
        },
        correct: "B",
        explanation: "Nederlanders zijn erg direct in hun communicatie. Dit kan in het buitenland soms als onbeleefd of bot worden ervaren."
      },
      {
        question: "Wat typeert de omgang tussen een MBO-stagiair en een hoofdtrainer in Nederland?",
        options: {
          A: "Er is een strikte hiërarchie; je spreekt de trainer altijd met 'u' aan.",
          B: "De hiërarchie is plat; je noemt de trainer vaak bij de voornaam en overlegt informeel.",
          C: "Stagiaires mogen niet rechtstreeks met de hoofdtrainer praten."
        },
        correct: "B",
        explanation: "Nederland heeft een lage machtsafstand. Informele omgang en tutoyeren zijn heel gebruikelijk."
      },
      {
        question: "Wat is het 'poldermodel' in de context van een sportvereniging?",
        options: {
          A: "De club wordt volledig geleid door één dictatoriale voorzitter.",
          B: "Er is veel overleg met commissies, trainers en ouders om consensus te bereiken.",
          C: "Het trainen op drassige velden onder de zeespiegel."
        },
        correct: "B",
        explanation: "Het poldermodel staat voor samenwerking en consensus. Besluiten worden genomen na overleg met alle betrokkenen."
      },
      {
        question: "Hoe belangrijk is stiptheid (tijd) bij Nederlandse sportclubs?",
        options: {
          A: "Tijd is flexibel; 15 minuten te laat is geen enkel probleem.",
          B: "Tijd is geld; als je 5 minuten te laat bent, start je op de reservebank.",
          C: "Alleen de trainer hoeft op tijd te zijn."
        },
        correct: "B",
        explanation: "Nederland heeft een monochrone tijdsbeleving. Afspraak is afspraak en op tijd komen is de norm."
      },
      {
        question: "Welke waarde staat centraal bij jeugdsport in Nederland?",
        options: {
          A: "Winnen ten koste van alles.",
          B: "Plezier, brede motorische ontwikkeling en gelijke kansen voor elk kind.",
          C: "Strikte militaire discipline vanaf 6 jaar."
        },
        correct: "B",
        explanation: "In Nederland ligt de focus bij jeugdsport sterk op breedtemotorische ontwikkeling, plezier en participatie."
      }
    ]
  },
  spanje: {
    title: "Spanje",
    questions: [
      {
        question: "Je wilt om 14:00 uur een buitensportactiviteit plannen voor jongeren in Spanje. Waarom is dit geen goed idee?",
        options: {
          A: "Het is dan te donker in Spanje.",
          B: "Het is de tijd van de siësta; winkels zijn dicht en het is te heet om te sporten.",
          C: "Spaanse jongeren sporten alleen in de vroege ochtend."
        },
        correct: "B",
        explanation: "Tussen 14:00 en 17:00 uur ligt het openbare leven in Spanje grotendeels stil vanwege de warmte en de siësta."
      },
      {
        question: "Hoe verschilt de Spaanse feedbackmethode van de Nederlandse directheid?",
        options: {
          A: "Spanjaarden zijn nóg directer en harder in hun feedback.",
          B: "Spanjaarden geven feedback subtieler en vaak een-op-een om gezichtsverlies te voorkomen.",
          C: "Feedback wordt in Spanje altijd schriftelijk gegeven."
        },
        correct: "B",
        explanation: "Spanje heeft een meer indirecte communicatiecultuur waarin persoonlijke relaties en respect erg belangrijk zijn."
      },
      {
        question: "Wat is cruciaal voordat je met een Spaanse sportorganisatie zaken gaat doen of afspraken maakt?",
        options: {
          A: "Direct het contract op tafel leggen.",
          B: "Tijd nemen voor een praatje, koffie drinken en een persoonlijke relatie opbouwen.",
          C: "Formeel buigen en cadeaus uitwisselen."
        },
        correct: "B",
        explanation: "De Spaanse cultuur is relatiegericht (relation-oriented). Vertrouwen en persoonlijk contact gaan voor de inhoud van de afspraak."
      },
      {
        question: "Hoe laat beginnen avondtrainingen voor volwassenen in Spanje doorgaans?",
        options: {
          A: "Om 17:00 uur direct na school/werk.",
          B: "Veel later dan in Nederland, vaak pas tussen 20:00 en 22:00 uur.",
          C: "Altijd exact om 19:00 uur."
        },
        correct: "B",
        explanation: "Vanwege het warmere klimaat en de siësta schuift de avond in Spanje op. Het avondeten en sporttrainingen vinden veel later plaats."
      },
      {
        question: "Hoe begroeten mannelijke en vrouwelijke collega's elkaar op een Spaanse sportclub?",
        options: {
          A: "Met een formele buiging zonder fysiek contact.",
          B: "Vrouwen geven elkaar en mannen vaak twee kussen op de wangen; mannen geven elkaar een hand of omhelzing.",
          C: "Fysiek contact is strikt verboden."
        },
        correct: "B",
        explanation: "De Spaanse cultuur is warmer en fysieker in begroetingen dan de Nederlandse afstandelijke handdruk."
      }
    ]
  },
  duitsland: {
    title: "Duitsland",
    questions: [
      {
        question: "Wat betekent 'pünktlich' zijn bij een Duitse sportvereniging?",
        options: {
          A: "Binnenkomen rond de afgesproken tijd (5 tot 10 minuten speling).",
          B: "Minimaal 5 tot 10 minuten vóór de afgesproken tijd speelklaar aanwezig zijn.",
          C: "Als de training om 19:00 uur begint, vertrek je om 19:00 uur van huis."
        },
        correct: "B",
        explanation: "In Duitsland is punctualiteit een teken van respect. Te laat komen wordt als zeer onprofessioneel gezien."
      },
      {
        question: "Hoe spreek je de hoofdtrainer van een Duitse club aan als stagiair?",
        options: {
          A: "Direct bij zijn voornaam, net als in Nederland.",
          B: "Met 'Herr' of 'Frau' gevolgd door de achternaam en de beleefdheidsvorm 'Sie'.",
          C: "Met de titel 'Chef' of 'Meister'."
        },
        correct: "B",
        explanation: "Duitsland heeft een hogere machtsafstand en formelere omgangsvormen. Je gebruikt 'Sie' (u) totdat men expliciet aanbiedt te tutoyeren."
      },
      {
        question: "Wat typeert de Duitse werk- en sportcultuur als het gaat om regels?",
        options: {
          A: "Regels zijn er om flexibel mee om te gaan.",
          B: "Er is een sterke voorkeur voor structuur, duidelijke protocollen en het strikt naleven van regels.",
          C: "Er zijn vrijwel geen regels, alles wordt ter plekke bedacht."
        },
        correct: "B",
        explanation: "Duitsland scoort hoog op onzekerheidsvermijding. Duidelijke afspraken, wetten en regels geven houvast en structuur."
      },
      {
        question: "Hoe scheid je werk/stage en privéleven in Duitsland?",
        options: {
          A: "Je nodigt je Duitse collega's direct in de eerste week uit voor een barbecue thuis.",
          B: "Er is een duidelijke scheidslijn; collegiaal op de club, maar privézaken worden zelden direct gedeeld.",
          C: "Je bespreekt al je relatieproblemen tijdens de eerste warming-up."
        },
        correct: "B",
        explanation: "Duitsers houden werk en privé over het algemeen strikt gescheiden. Vriendschappen op de werkvloer groeien langzamer."
      },
      {
        question: "Als Duitse sporters kritiek krijgen van de coach, hoe reageren zij dan?",
        options: {
          A: "Ze gaan direct in discussie over de tactiek (polderen).",
          B: "Ze accepteren de feedback van de expert (de coach) gedisciplineerd en gaan aan het werk.",
          C: "Ze weigeren verder te trainen."
        },
        correct: "B",
        explanation: "In Duitsland wordt de expertise van de coach gerespecteerd. Feedback wordt professioneel en taakgericht geaccepteerd."
      }
    ]
  },
  frankrijk: {
    title: "Frankrijk",
    questions: [
      {
        question: "Hoe spreek je een Franse sportdocent of coach aan tijdens je stage?",
        options: {
          A: "Met 'tu' (jij) en zijn voornaam.",
          B: "Met 'Monsieur' of 'Madame' en je gebruikt de beleefdheidsvorm 'vous' (u).",
          C: "Je zwaait en roept 'Salut!'"
        },
        correct: "B",
        explanation: "In Frankrijk is de hiërarchie op scholen en sportclubs formeler. De 'vous'-vorm is de standaard voor stagiaires."
      },
      {
        question: "Je spreekt geen vloeiend Frans. Wat is de beste houding tijdens je stage in Frankrijk?",
        options: {
          A: "Direct in het Engels beginnen en verwachten dat iedereen Engels spreekt.",
          B: "Altijd beginnen met een poging in het Frans (groeten en excuseren), waarna men vaak graag overschakelt naar Engels.",
          C: "Helemaal niets zeggen en alles non-verbaal uitbeelden."
        },
        correct: "B",
        explanation: "Fransen zijn trots op hun taal. Een oprechte poging om Frans te spreken opent deuren en dwingt respect af."
      },
      {
        question: "Hoe wordt de rol van de sportcoach in Frankrijk gezien?",
        options: {
          A: "Als een gelijke die gezellig meedoet met de groep.",
          B: "Als een autoriteit (directeur de jeu) wiens beslissingen niet openlijk in twijfel worden getrokken.",
          C: "Als een vrijwilliger die weinig te vertellen heeft."
        },
        correct: "B",
        explanation: "Frankrijk heeft een hogere machtsafstand. De coach heeft de leiding en er is duidelijk respect voor deze positie."
      },
      {
        question: "Wat is 'la bise' in de Franse sportcontext?",
        options: {
          A: "Een tactische voetbalopstelling.",
          B: "De informele begroeting met wangkussen tussen bekende collega's of teamgenoten.",
          C: "Een strafopdracht na te laat komen."
        },
        correct: "B",
        explanation: "'La bise' is het kussen op de wangen (meestal 2, soms 3 of 4 afhankelijk van de regio) als begroeting tussen bekenden."
      },
      {
        question: "Hoe strak verloopt de planning van een sportevenement in Frankrijk?",
        options: {
          A: "Extreem flexibel; men start als iedereen er is.",
          B: "Er is een strak draaiboek, maar besluitvorming bij wijzigingen verloopt top-down via de leidinggevende.",
          C: "Iedereen mag zelf beslissen hoe het evenement verloopt."
        },
        correct: "B",
        explanation: "Besluitvorming is in Frankrijk gecentraliseerd. Zelfs bij een strakke planning beslist de baas over de wijzigingen."
      }
    ]
  },
  italie: {
    title: "Italië",
    questions: [
      {
        question: "Wat valt op aan de communicatiestijl van een Italiaanse sportcoach?",
        options: {
          A: "Zeer gereserveerd en monotoon.",
          B: "Expressief, met veel handgebaren, stemverheffing en emotie.",
          C: "Zij spreken uitsluitend via geschreven instructies."
        },
        correct: "B",
        explanation: "Italianen communiceren met veel passie en non-verbale ondersteuning (gebaren). Dit is een teken van betrokkenheid, niet van woede."
      },
      {
        question: "Welke sport heeft een bijna religieuze status in de Italiaanse cultuur?",
        options: {
          A: "Honkbal.",
          B: "Voetbal (Il Calcio).",
          C: "Veldhockey."
        },
        correct: "B",
        explanation: "Voetbal is veruit de populairste sport in Italië en speelt een enorme rol in de nationale identiteit en media."
      },
      {
        question: "Hoe belangrijk is uiterlijke presentatie ('Bella Figura') op een Italiaanse sportclub?",
        options: {
          A: "Totaal onbelangrijk; je mag in je pyjama training geven.",
          B: "Heel belangrijk; representatieve, schone clubkleding en een verzorgd uiterlijk dwingen respect af.",
          C: "Alleen belangrijk voor de sporters, niet voor de coach."
        },
        correct: "B",
        explanation: "'Fare bella figura' betekent een goede indruk maken. Kleding, uitstraling en gedrag moeten verzorgd en professioneel zijn."
      },
      {
        question: "Wat is de Italiaanse houding ten opzichte van kloktijd bij trainingen?",
        options: {
          A: "Militair stipt; te laat is direct naar huis.",
          B: "Relatief flexibel; een paar minuten marge is normaal, zolang de passie en inzet er maar zijn.",
          C: "Trainingen beginnen wanneer het de sporters uitkomt."
        },
        correct: "B",
        explanation: "Italië heeft een meer polychrone tijdsbeleving dan Nederland. Relaties en het moment zijn belangrijker dan de exacte minuut."
      },
      {
        question: "Hoe bouw je als Nederlandse stagiair krediet op bij een Italiaanse club?",
        options: {
          A: "Door direct kritiek te leveren op de cluborganisatie.",
          B: "Door respect te tonen voor de clubgeschiedenis en interesse te tonen in de Italiaanse keuken en cultuur.",
          C: "Door alleen maar Engels te praten."
        },
        correct: "B",
        explanation: "Persoonlijke relaties en respect voor de lokale tradities zijn in Italië de sleutel tot een succesvolle samenwerking."
      }
    ]
  },
  verenigd_koninkrijk: {
    title: "Verenigd Koninkrijk",
    questions: [
      {
        question: "Wat betekent het als een Britse sportcoach zegt: 'I would suggest you try this option'?",
        options: {
          A: "Het is een vrijblijvende tip; je mag zelf kiezen wat je doet.",
          B: "Het is een beleefde instructie; je wordt geacht dit direct te gaan doen.",
          C: "Hij weet het zelf ook niet en vraagt jou om hulp."
        },
        correct: "B",
        explanation: "Britten communiceren erg indirect en beleefd. Een 'suggestie' is in de praktijk vaak een vriendelijk verpakt commando."
      },
      {
        question: "Welk concept staat historisch aan de basis van de Britse sportethiek?",
        options: {
          A: "Winnen ten koste van alles.",
          B: "Fair Play en sportiviteit (gentlemanly conduct).",
          C: "Strikte tactische systemen zonder individuele vrijheid."
        },
        correct: "B",
        explanation: "Het concept van 'Fair Play' is diep geworteld in de Britse sportgeschiedenis (oorspronkelijk uit de public schools)."
      },
      {
        question: "Wat is de Britse traditie na afloop van een sportwedstrijd op clubniveau?",
        options: {
          A: "Iedereen gaat direct zonder te douchen naar huis.",
          B: "Samen met de tegenstander een drankje doen in het clubhuis ('the pub' / bar) en napraten.",
          C: "De verliezers moeten de kleedkamer van de winnaars schoonmaken."
        },
        correct: "B",
        explanation: "Socialiseren na de wedstrijd (socializing in the clubhouse) is een essentieel onderdeel van de Britse sportcultuur."
      },
      {
        question: "Hoe reageert een Britse sporter als hij/zij pijn heeft tijdens een training?",
        options: {
          A: "Met luid geschreeuw en klagen.",
          B: "Met de 'stiff upper lip': niet zeuren, verbijten en doorgaan.",
          C: "Direct stoppen en een schadeclaim indienen."
        },
        correct: "B",
        explanation: "De 'stiff upper lip' staat voor het niet tonen van emoties of pijn onder moeilijke omstandigheden."
      },
      {
        question: "Hoe is de hiërarchie binnen Britse sportverenigingen geregeld?",
        options: {
          A: "Er is geen bestuur; iedereen beslist mee.",
          B: "Formeel en traditioneel; er zijn duidelijke rollen (Chairman, Secretary) en protocollen.",
          C: "Alleen de trainer beslist alles."
        },
        correct: "B",
        explanation: "Britse clubs hebben vaak een traditionele en formele organisatiestructuur met veel respect voor rollen en commissies."
      }
    ]
  },
  aruba: {
    title: "Aruba",
    questions: [
      {
        question: "Welke talen spreekt men op Aruba en hoe beïnvloedt dit je sportstage?",
        options: {
          A: "Uitsluitend Nederlands.",
          B: "Papiamento is de thuistaal, maar de meeste mensen spreken ook vloeiend Nederlands, Engels en Spaans.",
          C: "Alleen Spaans en Engels."
        },
        correct: "B",
        explanation: "Arubanen zijn meertalig. Dit maakt communicatie makkelijk, maar respect tonen door een paar woorden Papiamento te spreken wordt zeer gewaardeerd."
      },
      {
        question: "Welke sport heeft een extreem hoge status en levert veel Arubaanse topsporters op?",
        options: {
          A: "Schaatsen.",
          B: "Honkbal (Baseball).",
          C: "Veldhockey."
        },
        correct: "B",
        explanation: "Honkbal is de nationale sport op Aruba. Veel Arubanen spelen in de Amerikaanse Major League of het Koninkrijksteam."
      },
      {
        question: "Hoe ga je om met de 'eiland-tijd' (island time) op Aruba?",
        options: {
          A: "Je wordt boos als sporters 10 minuten te laat komen.",
          B: "Je houdt zelf strak de tijd aan, maar toont flexibiliteit en begrip als deelnemers iets later zijn door hitte of transport.",
          C: "Je komt zelf ook structureel een half uur te laat."
        },
        correct: "B",
        explanation: "Het tempo op de eilanden ligt vaak lager. Geduld en flexibiliteit zijn belangrijk, zonder je eigen professionaliteit te verliezen."
      },
      {
        question: "Wat typeert de Arubaanse houding ten opzichte van familie en ouderen?",
        options: {
          A: "Familie speelt een kleine rol; ouderen wonen apart.",
          B: "Familie is centraal en ouderen genieten veel respect; dit zie je terug in beleefde omgangsvormen.",
          C: "Kinderen beslissen alles binnen het gezin."
        },
        correct: "B",
        explanation: "Aruba heeft een collectivistische cultuur waarin familiebanden en respect voor senioren erg belangrijk zijn."
      },
      {
        question: "Vanwege het warme klimaat op Aruba: wanneer plannen sportclubs hun buitenactiviteiten?",
        options: {
          A: "Tussen 12:00 en 14:00 uur.",
          B: "In de vroege ochtend of de koelere namiddag/avond (vaak onder kunstlicht).",
          C: "Uitsluitend in overdekte airco-hallen."
        },
        correct: "B",
        explanation: "Om oververhitting te voorkomen, vinden sporttrainingen buiten het heetste deel van de dag plaats."
      }
    ]
  },
  bonaire: {
    title: "Bonaire",
    questions: [
      {
        question: "Bonaire staat wereldwijd bekend om een specifieke sporttak. Welke is dit?",
        options: {
          A: "Alpineskiën.",
          B: "Duiken en wind-/kitesurfen (watersporten).",
          C: "IJshockey."
        },
        correct: "B",
        explanation: "Bonaire is een paradijs voor duikers en windsurfers (Lac Bay) vanwege de constante passaatwinden en beschermde koraalriffen."
      },
      {
        question: "Wat is de status van natuurbescherming op Bonaire en wat betekent dit voor sportcoaches?",
        options: {
          A: "Natuur is ondergeschikt aan sport; je mag overal sporten.",
          B: "Zeer streng; de STINAPA-regels beschermen het mariene park en studenten moeten milieubewust handelen.",
          C: "Alleen toeristen moeten zich aan milieuregels houden."
        },
        correct: "B",
        explanation: "Bonaire hecht veel waarde aan natuurbehoud. Als sportcoach in de watersport moet je de STINAPA-richtlijnen strikt volgen."
      },
      {
        question: "Hoe begroet je mensen op Bonaire als je ze tegenkomt op straat of op de sportclub?",
        options: {
          A: "Negeren en snel doorlopen.",
          B: "Altijd vriendelijk groeten met 'Bon dia' (goedemorgen) of 'Bon tardi' (goedemiddag).",
          C: "Met een formele militaire groet."
        },
        correct: "B",
        explanation: "Beleefdheid en elkaar groeten is een belangrijk onderdeel van de Bonairiaanse cultuur en gemeenschap."
      },
      {
        question: "Wat is het voordeel van de kleinschaligheid van Bonaire voor jouw BPV-stage?",
        options: {
          A: "Je hoeft geen POK te regelen.",
          B: "Iedereen kent elkaar; netwerken en korte lijnen met scholen en sportorganisaties zijn makkelijk te leggen.",
          C: "Er zijn geen regels op het eiland."
        },
        correct: "B",
        explanation: "De gemeenschap is hecht. Een goede reputatie en vriendelijkheid zorgen snel voor ingangen bij verschillende organisaties."
      },
      {
        question: "Wat betekent het woord 'Trankilo' op Bonaire?",
        options: {
          A: "Snel doorwerken.",
          B: "Rustig aan, geen stress. Het typeert de relaxte levensstijl op het eiland.",
          C: "Een type sportdrank."
        },
        correct: "B",
        explanation: "'Trankilo' staat voor rust, kalmte en genieten. Het is belangrijk om je aan dit tempo aan te passen zonder laks te worden."
      }
    ]
  },
  curacao: {
    title: "Curaçao",
    questions: [
      {
        question: "Wat betekent het woord 'Dushi' in de Curaçaose cultuur?",
        options: {
          A: "Een scheldwoord voor een luie sporter.",
          B: "Schatje, lekker, fijn of lief. Het wordt gebruikt voor eten, mensen en situaties.",
          C: "De naam van een traditionele honkbalknuppel."
        },
        correct: "B",
        explanation: "'Dushi' is het meest veelzijdige en positieve woord in het Papiamento en weerspiegelt de warme cultuur."
      },
      {
        question: "Hoe uit non-verbale communicatie zich op Curaçao tijdens sportlessen?",
        options: {
          A: "Mensen zijn erg stijf en tonen geen emoties.",
          B: "Zeer expressief; handgebaren, gezichtsuitdrukkingen en stemvolume horen bij de natuurlijke manier van praten.",
          C: "Fysiek contact is taboe."
        },
        correct: "B",
        explanation: "Curaçaoënaars communiceren met veel lichaamstaal en expressie. Dit is een teken van betrokkenheid en passie."
      },
      {
        question: "Hoe reageer je als een sporter op Curaçao de term 'Awor af' (straks/nu) gebruikt?",
        options: {
          A: "Je verwacht dat het binnen 1 seconde gebeurt.",
          B: "Je begrijpt dat 'awor' (nu) of 'aworikí' (zo meteen) flexibele begrippen zijn en toont geduld.",
          C: "Je stelt direct een sanctie in."
        },
        correct: "B",
        explanation: "Tijdsbeleving is op Curaçao polychroon. Relaties en het huidige moment gaan vaak voor de exacte kloktijd."
      },
      {
        question: "Waarom is honkbal (baseball) zo succesvol op Curaçao?",
        options: {
          A: "Omdat er geen andere sporten worden gespeeld.",
          B: "Door uitstekende talentontwikkeling, fysieke aanleg en rolmodellen in de Major League Baseball (MLB).",
          C: "Honkbal is verplicht op alle scholen."
        },
        correct: "B",
        explanation: "Curaçao levert per hoofd van de bevolking de meeste MLB-spelers ter wereld dankzij een sterke honkbalinfrastructuur."
      },
      {
        question: "Wat is een belangrijk cultureel aspect bij het aanspreken van ouderen of docenten op Curaçao?",
        options: {
          A: "Je mag ze direct tutoyeren en grappen maken.",
          B: "Je toont respect door beleefd te praten en hen met 'meneer' (Señor) of 'mevrouw' (Señora) aan te spreken.",
          C: "Je mag hen niet aankijken tijdens het praten."
        },
        correct: "B",
        explanation: "Respect voor autoriteit en ouderen is diep geworteld in de Curaçaose samenleving (hoge machtsafstand)."
      }
    ]
  },
  brazilie: {
    title: "Brazilië",
    questions: [
      {
        question: "Welk handgebaar dat in Nederland 'OK' of 'perfect' betekent, is in Brazilië een zware belediging?",
        options: {
          A: "Een duim omhoog.",
          B: "Een cirkel maken met duim en wijsvinger.",
          C: "Een v-teken met de wijs- en middelvinger."
        },
        correct: "B",
        explanation: "Het maken van een cirkel met duim en wijsvinger duidt in Brazilië een lichaamsopening aan en is zeer obsceen."
      },
      {
        question: "Wat typeert de groepsdynamiek en teamcohesie in de Braziliaanse sportcultuur?",
        options: {
          A: "Spelers zijn erg individualistisch en praten weinig.",
          B: "Sterk collectivistisch; het team voelt als een familie en er is veel fysiek contact (knuffels, schouderklopjes).",
          C: "Er is een strikte scheiding tussen verschillende spelersniveaus."
        },
        correct: "B",
        explanation: "Brazilië heeft een collectivistische cultuur. Teamgeest, emotie en hechte onderlinge relaties zijn essentieel voor prestaties."
      },
      {
        question: "Wat is de Braziliaanse 'Jeitinho' op het sportveld?",
        options: {
          A: "Een speciale dribbeltechniek bij voetbal.",
          B: "De creatieve, informele manier om onder regels of problemen uit te komen en een oplossing te vinden.",
          C: "Het zingen van het volkslied voor de wedstrijd."
        },
        correct: "B",
        explanation: "'O jeitinho brasileiro' is de kunst om creatief en flexibel met regels en obstakels om te gaan om toch je doel te bereiken."
      },
      {
        question: "Hoe ga je als Nederlandse sportcoach om met tijd en afspraken in Brazilië?",
        options: {
          A: "Je start stipt op de minuut en straft iedereen die 5 minuten te laat is.",
          B: "Je houdt zelf de structuur aan, maar toont begrip; flexibiliteit met tijd is de norm (10-15 minuten marge).",
          C: "Je laat de trainingstijden volledig los."
        },
        correct: "B",
        explanation: "Tijd is elastisch in Brazilië. Relaties en het moment zijn belangrijker dan een rigide tijdsplanning."
      },
      {
        question: "Welke sportvorm, ontstaan op de stranden van Rio, combineert volleybal en voetbal?",
        options: {
          A: "Futsal.",
          B: "Futevôlei (Footvolley).",
          C: "Capoeira."
        },
        correct: "B",
        explanation: "Futevôlei is enorm populair in Brazilië. Het vereist een fantastische baltechniek omdat de bal niet met de handen aangeraakt mag worden."
      }
    ]
  },
  suriname: {
    title: "Suriname",
    questions: [
      {
        question: "Hoe toon je als jongere respect in de Surinaamse cultuur bij het praten met ouderen of je stagebegeleider?",
        options: {
          A: "Door hen intensief in de ogen te blijven aankijken.",
          B: "Door een bescheiden houding aan te nemen en hen netjes aan te spreken met 'u', 'tante' of 'oom' (respecttitels).",
          C: "Door direct een grap te maken om het ijs te breken."
        },
        correct: "B",
        explanation: "Suriname heeft een respectcultuur met een hoge machtsafstand. Ouderen en leidinggevenden worden met veel egards behandeld."
      },
      {
        question: "Welke sport heeft historisch gezien de sterkste band tussen Suriname en Nederland?",
        options: {
          A: "Schaatsen.",
          B: "Voetbal (veel Nederlandse topvoetballers hebben Surinaamse roots).",
          C: "Korfbal."
        },
        correct: "B",
        explanation: "Suriname en Nederland delen een rijke voetbalgeschiedenis. Talloze topspelers in Oranje hebben een Surinaamse achtergrond."
      },
      {
        question: "Wat is een belangrijk kenmerk van de communicatiestijl in Suriname?",
        options: {
          A: "Men is extreem direct en bot, net als in Nederland.",
          B: "Men communiceert indirecter en hecht veel waarde aan beleefdheid en het behouden van de goede sfeer.",
          C: "Men praat uitsluitend in gebarentaal."
        },
        correct: "B",
        explanation: "Surinamers zijn over het algemeen zeer gastvrij en beleefd. Directe confrontaties of harde kritiek worden vermeden."
      },
      {
        question: "Wat is 'Sranantongo' in de sportcontext in Suriname?",
        options: {
          A: "Een traditioneel Surinaams sportgerecht.",
          B: "De Surinaamse taal die op het sportveld vaak informeel naast het Nederlands wordt gesproken.",
          C: "Een speciale warming-up oefening."
        },
        correct: "B",
        explanation: "Hoewel Nederlands de officiële taal is, spreken mensen onderling vaak Sranantongo. Enkele sporttermen kennen hierin hun eigen dynamiek."
      },
      {
        question: "Hoe ga je om met trainingstijden tijdens het regenseizoen in Suriname?",
        options: {
          A: "Je dwingt de groep om tijdens een tropische regenbui (sibibusi) buiten te trainen.",
          B: "Je past de training flexibel aan of verhuist naar binnen; tropische buien kunnen sportvelden snel onbegaanbaar maken.",
          C: "Je gelooft niet dat het gaat regenen."
        },
        correct: "B",
        explanation: "Het weer en de infrastructuur vragen om aanpassingsvermogen. Tropische buien kunnen trainingen tijdelijk stilleggen."
      }
    ]
  },
  colombia: {
    title: "Colombia",
    questions: [
      {
        question: "Hoe spreken sporters hun trainer of coach respectvol aan in Colombia?",
        options: {
          A: "Bij zijn voornaam.",
          B: "Met de eretitel 'Profe' (kort voor Profesor).",
          C: "Met 'Hey amigo!'"
        },
        correct: "B",
        explanation: "In Colombia is 'Profe' de standaard respectvolle aanspreekvorm voor sportleraren en trainers op elk niveau."
      },
      {
        question: "Naast voetbal is er nog een sport razend populair in Colombia, mede door de bergen. Welke is dit?",
        options: {
          A: "Wielrennen (Ciclismo).",
          B: "Langebaanschaatsen.",
          C: "Veldhockey."
        },
        correct: "B",
        explanation: "Colombia heeft een rijke wielergeschiedenis en levert wereldtop klimmers (de 'escarabajos') dankzij het Andesgebergte."
      },
      {
        question: "Hoe verloopt de begroeting tussen mannen en vrouwen op een Colombiaanse sportclub?",
        options: {
          A: "Met een strakke handdruk en 1.5 meter afstand.",
          B: "Vrouwen en mannen begroeten elkaar vaak met één kus op de rechterwang en een lichte aanraking van de schouder.",
          C: "Er wordt niet gegroet om tijd te besparen."
        },
        correct: "B",
        explanation: "De Colombiaanse cultuur is fysiek en warm. Begroetingen bevatten vaak aanraking en een enkele kus op de rechterwang."
      },
      {
        question: "Wat is 'Tejo' in Colombia?",
        options: {
          A: "Een traditionele Colombiaanse sport waarbij je met metalen schijven naar explosief buskruit gooit.",
          B: "Een tactisch verdedigingssysteem bij voetbal.",
          C: "De naam van de Colombiaanse sportbond."
        },
        correct: "A",
        explanation: "Tejo is de nationale inheemse sport van Colombia. Het doel is om een metalen schijf (tejo) in een lemen bak te werpen en buskruit-pakketjes (mechas) te laten ontploffen."
      },
      {
        question: "Hoe reageer je als Colombiaanse deelnemers te laat komen voor een wijkactiviteit?",
        options: {
          A: "Je annuleert direct de hele activiteit.",
          B: "Je toont flexibiliteit; de 'Hora Colombiana' betekent dat activiteiten vaak 15-30 minuten later starten dan gepland.",
          C: "Je geeft hen een fysieke strafopdracht."
        },
        correct: "B",
        explanation: "Tijd is minder rigide in Colombia. Flexibiliteit en geduld zijn noodzakelijk om een goede relatie met de buurt te behouden."
      }
    ]
  },
  kenia: {
    title: "Kenia",
    questions: [
      {
        question: "Wat is de betekenis van de Keniaanse filosofie 'Harambee' op het sportveld?",
        options: {
          A: "Winnen is het allerbelangrijkste.",
          B: "Samenwerking en gemeenschapszin; 'laten we met z'n allen de schouders eronder zetten'.",
          C: "Een traditioneel hardloopschema."
        },
        correct: "B",
        explanation: "'Harambee' is het nationale motto van Kenia en staat voor collectivisme en samen de klus klaren."
      },
      {
        question: "In welke sportdiscipline is Kenia al decennia lang een wereldwijde grootmacht?",
        options: {
          A: "Lange- en middellangeafstandslopen (atletiek).",
          B: "IJshockey.",
          C: "Schoonspringen."
        },
        correct: "A",
        explanation: "Kenia (met name de regio Iten/Eldoret) is wereldberoemd om haar hardlopers die de Olympische Spelen en marathons domineren."
      },
      {
        question: "Hoe begroet je een Keniaanse oudere of sportbegeleider respectvol?",
        options: {
          A: "Met een snelle boks of high-five.",
          B: "Met een stevige handdruk, waarbij je met je linkerhand je eigen rechteronderarm ondersteunt als teken van respect.",
          C: "Met een buiging zonder oogcontact."
        },
        correct: "B",
        explanation: "Het ondersteunen van de rechterarm tijdens de handdruk is een traditioneel teken van diep respect voor ouderen en autoriteiten."
      },
      {
        question: "Wat betekent de uitdrukking 'Pole Pole' in de Keniaanse cultuur?",
        options: {
          A: "Ren zo snel als je kunt.",
          B: "Rustig aan, stap voor stap. Tijd is flexibel.",
          C: "De paal van het doel."
        },
        correct: "B",
        explanation: "'Pole pole' is Swahili voor 'rustig aan'. Het weerspiegelt de ontspannen houding ten opzichte van tijd in Kenia."
      },
      {
        question: "Waarom is sportmateriaal (zoals ballen en pionnen) een extra grote verantwoordelijkheid in Kenia?",
        options: {
          A: "Omdat materialen vaak schaars en duur zijn; zorgvuldig beheer en creatief improviseren is noodzakelijk.",
          B: "Omdat de Keniaanse douane ballen verbiedt.",
          C: "Omdat materialen snel smelten in de zon."
        },
        correct: "A",
        explanation: "In veel Keniaanse wijkprojecten is er een tekort aan ballen en pionnen. Als coach leer je improviseren met lokale materialen."
      }
    ]
  },
  zuid_afrika: {
    title: "Zuid-Afrika",
    questions: [
      {
        question: "Wat is de betekenis van de Zuid-Afrikaanse filosofie 'Ubuntu'?",
        options: {
          A: "Een tactisch spelsysteem.",
          B: "Medemenselijkheid en verbondenheid: 'Ik ben omdat wij zijn'.",
          C: "De naam van een traditionele dans."
        },
        correct: "B",
        explanation: "Ubuntu is de essentie van menselijkheid en benadrukt dat we alleen via anderen onszelf kunnen zijn. Dit stimuleert extreme teamcohesie."
      },
      {
        question: "Welk historisch sportmoment bracht Zuid-Afrika na de Apartheid samen?",
        options: {
          A: "De winst van het WK Rugby in 1995 onder leiding van Nelson Mandela.",
          B: "De Olympische marathon van 2012.",
          C: "Een vriendschappelijke cricketwedstrijd."
        },
        correct: "A",
        explanation: "Mandela gebruikte het WK Rugby 1995 (en de Springboks) om het verdeelde land te verenigen achter één gemeenschappelijk symbool."
      },
      {
        question: "Hoeveel officiële talen heeft Zuid-Afrika en hoe beïnvloedt dit de coaching?",
        options: {
          A: "Alleen Engels.",
          B: "11 officiële talen; je moet flexibel zijn en vaak non-verbale signalen of Engels als basistaal gebruiken.",
          C: "Uitsluitend Afrikaans."
        },
        correct: "B",
        explanation: "Zuid-Afrika is de 'Rainbow Nation' met 11 officiële talen. Engels wordt op sportclubs het meest als voertaal gebruikt."
      },
      {
        question: "Hoe toon je respect naar autoriteiten of ouderen in traditionele Zuid-Afrikaanse culturen (zoals Xhosa of Zulu)?",
        options: {
          A: "Door hen indringend in de ogen te kijken.",
          B: "Door intensief oogcontact juist te vermijden en je blik iets te verlagen tijdens het praten.",
          C: "Door hen direct bij de voornaam te noemen."
        },
        correct: "B",
        explanation: "In veel Afrikaanse culturen is direct, aanhoudend oogcontact met een meerdere of oudere respectloos. Ooghoogte verlagen toont beleefdheid."
      },
      {
        question: "Welke drie sporten zijn het populairst in Zuid-Afrika?",
        options: {
          A: "Voetbal, Rugby en Cricket.",
          B: "Korfbal, Veldhockey en Tennis.",
          C: "Handbal, Basketbal en Turnen."
        },
        correct: "A",
        explanation: "Voetbal, Rugby en Cricket domineren de Zuid-Afrikaanse sportwereld en hebben elk hun eigen historische en culturele achtergrond."
      }
    ]
  },
  oeganda: {
    title: "Oeganda",
    questions: [
      {
        question: "Hoe is de machtsverhouding tussen sportleraren en leerlingen in Oeganda?",
        options: {
          A: "Zeer informeel; leerlingen bepalen de les.",
          B: "Formeel; docenten en coaches genieten veel respect en instructies worden zonder discussie opgevolgd.",
          C: "Er is geen hiërarchie."
        },
        correct: "B",
        explanation: "Oeganda heeft een cultuur met een hoge machtsafstand. Autoriteit en leraren worden met veel respect en discipline behandeld."
      },
      {
        question: "Wat is de Oegandese houding ten opzichte van trainingstijden (tijd)?",
        options: {
          A: "Militair stipt.",
          B: "Polychroon en elastisch; transportproblemen en regenbuien zorgen vaak voor vertragingen.",
          C: "Er worden geen tijden afgesproken."
        },
        correct: "B",
        explanation: "De infrastructuur en het tropische klimaat maken flexibiliteit noodzakelijk. De klok is ondergeschikt aan de situatie."
      },
      {
        question: "Hoe begroet je formeel iemand in Oeganda op een respectvolle manier?",
        options: {
          A: "Met een snelle handdruk en directe blik.",
          B: "Met een rustige, soms langere handdruk waarbij je je linkerhand op je rechteronderarm legt.",
          C: "Met een knuffel."
        },
        correct: "B",
        explanation: "Net als in Kenia is het ondersteunen van de rechterarm tijdens de begroeting een teken van diep respect en goede manieren."
      },
      {
        question: "Welke waarde is cruciaal binnen de Oegandese gemeenschapsprogramma's?",
        options: {
          A: "Individueel succes en competitie.",
          B: "Samenwerking, delen en zorg dragen voor elkaar binnen de community.",
          C: "Commercieel winstoogmerk."
        },
        correct: "B",
        explanation: "Oeganda is een collectivistische samenleving. Succes wordt gedeeld en de groep (community) staat altijd boven het individu."
      },
      {
        question: "Wat is een veelvoorkomende uitdaging voor een buurtsportcoach in Oegandese wijken?",
        options: {
          A: "Een tekort aan gemotiveerde kinderen.",
          B: "Slechte sportvelden (hobbelig gras of zand) en weinig ballen; improvisatie is de belangrijkste vaardigheid.",
          C: "Strikte overheidsregels voor sport."
        },
        correct: "B",
        explanation: "Infrastructuur is vaak basic. Als MBO-coach leer je creatief gebruik te maken van de beschikbare ruimte en middelen."
      }
    ]
  },
  indonesie: {
    title: "Indonesië",
    questions: [
      {
        question: "Wat betekent de term 'Jam Karet' (elastische tijd) in Indonesië?",
        options: {
          A: "De tijd die je nodig hebt om een elastiek te spannen.",
          B: "Tijd is flexibel; afspraken starten vaak later dan gepland en haast wordt als onbeleefd gezien.",
          C: "De duur van een badmintonwedstrijd."
        },
        correct: "B",
        explanation: "'Jam Karet' (rubberen tijd) is een bekend concept. Geduld en flexibiliteit zijn essentieel in de Indonesische cultuur."
      },
      {
        question: "Welke sport heeft een absolute status en is de nationale trots van Indonesië?",
        options: {
          A: "Badminton (Bulu Tangkis).",
          B: "Veldhockey.",
          C: "Rugby."
        },
        correct: "A",
        explanation: "Badminton is de nationale sport. Indonesische spelers behoren al decennia tot de absolute wereldtop en winnen veel Olympische medailles."
      },
      {
        question: "Hoe geef je als Nederlandse coach respectvol feedback aan een Indonesische sporter?",
        options: {
          A: "Direct en hard voor de hele groep, zodat iedereen leert.",
          B: "Indirect, een-op-een en verpakt in complimenten om gezichtsverlies (malu) te voorkomen.",
          C: "Schriftelijk via een officieel formulier."
        },
        correct: "B",
        explanation: "Gezichtsverlies ('malu') is een groot taboe in Aziatische collectivistische culturen. Kritiek geef je subtiel en privé."
      },
      {
        question: "Wat is de betekenis van 'Gotong Royong' op het sportveld?",
        options: {
          A: "Een type vechtsport.",
          B: "Wederzijdse hulp en samenwerking; samen de materialen opruimen en elkaar ondersteunen.",
          C: "De naam van de scheidsrechter."
        },
        correct: "B",
        explanation: "'Gotong royong' is de traditionele Indonesische waarde van gemeenschappelijke samenwerking en solidariteit."
      },
      {
        question: "Hoe spreek je je Indonesische stagebegeleider of hoofddocent respectvol aan?",
        options: {
          A: "Bij zijn of haar voornaam.",
          B: "Met 'Bapak' (voor een man) of 'Ibu' (voor een vrouw) gevolgd door de naam.",
          C: "Met 'Hey bro!'"
        },
        correct: "B",
        explanation: "'Bapak' (vader/meneer) en 'Ibu' (moeder/mevrouw) zijn de verplichte respecttitels voor ouderen en leidinggevenden."
      }
    ]
  },
  australie: {
    title: "Australië",
    questions: [
      {
        question: "Wat betekent het begrip 'Mateship' in de Australische sportcultuur?",
        options: {
          A: "De scheidsrechter is altijd je vriend.",
          B: "Gelijkheid, loyaliteit en intense steun aan je teamgenoten ('mates').",
          C: "Een verplichte zeiltocht voor sporters."
        },
        correct: "B",
        explanation: "'Mateship' is een kernwaarde in Australië en staat voor broederschap, gelijkwaardigheid en elkaar door dik en dun steunen."
      },
      {
        question: "Hoe is de hiërarchie tussen de coach en de sporter in Australië?",
        options: {
          A: "Heel formeel; de coach beslist alles zonder overleg.",
          B: "Informeel en plat; communicatie is direct, joviaal en op basis van gelijkwaardigheid.",
          C: "Er is geen coach, de groep beslist."
        },
        correct: "B",
        explanation: "Australiërs houden niet van overdreven formaliteit of hiërarchie (lage machtsafstand). Iedereen is gelijk."
      },
      {
        question: "Welke twee sporten domineren de Australische wintermaanden?",
        options: {
          A: "Australisch Voetbal (AFL / Aussie Rules) en Rugby.",
          B: "Veldhockey en Korfbal.",
          C: "Schaatsen en Langlaufen."
        },
        correct: "A",
        explanation: "Aussie Rules (AFL) en Rugby (League/Union) zijn mateloos populair en trekken wekelijks tienduizenden fans naar de stadions."
      },
      {
        question: "Wat is 'No worries' in de communicatiestijl van een Australische coach?",
        options: {
          A: "Je hoeft je nergens zorgen over te maken, we lossen het flexibel op.",
          B: "Het is verboden om je zorgen te maken.",
          C: "Een tactisch verdedigingssysteem."
        },
        correct: "A",
        explanation: "'No worries' is de nationale Australische slogan en weerspiegelt de relaxte, optimistische en pragmatische instelling."
      },
      {
        question: "Hoe belangrijk is de zwem- en strandsportcultuur in Australië?",
        options: {
          A: "Totaal onbelangrijk; zwemmen is alleen voor toeristen.",
          B: "Enorm belangrijk; zwemmen is een basisvaardigheid en 'Surf Life Saving' clubs zijn legendarische wijkcentra.",
          C: "Alleen populair in de winter."
        },
        correct: "B",
        explanation: "Vanwege het klimaat en de kustlijn is waterveiligheid en strandsport (surf lifesaving) een essentieel onderdeel van de cultuur."
      }
    ]
  }
};
