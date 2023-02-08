const mockData = 
[
  {
    title:
      "Ukraine: Chris Parry and Andrew Bagshaw killed in Soledar rescue attempt",
    summary:
      "Chris Parry and Andrew Bagshaw were killed in Soledar, eastern Ukraine, family members say.",
    vaderTitle: { neg: 0.268, neu: 0.536, pos: 0.196, compound: -0.296 },
    vaderSummary: { neg: 0.257, neu: 0.743, pos: 0, compound: -0.6705 },
    id: "https://www.bbc.co.uk/news/uk-64394105",
    published: [2023, 1, 24, 21, 33, 59, 1, 24, 0],
  },
  {
    title:
      "Fears missing couple and baby are sleeping in tent in icy temperatures",
    summary:
      "CCTV shows Constance Marten and Mark Gordon, who are missing with their baby, shopping in London.",
    vaderTitle: { neg: 0.333, neu: 0.667, pos: 0, compound: -0.6124 },
    vaderSummary: { neg: 0.128, neu: 0.872, pos: 0, compound: -0.296 },
    id: "https://www.bbc.co.uk/news/uk-england-london-64388545",
    published: [2023, 1, 24, 16, 59, 51, 1, 24, 0],
  },
  {
    title: "Zara Aleena killer wrongly assessed as medium risk by probation",
    summary:
      "The law graduate's killer could have been recalled to prison before the attack, a report has found.",
    vaderTitle: { neg: 0.444, neu: 0.556, pos: 0, compound: -0.7506 },
    vaderSummary: { neg: 0.451, neu: 0.549, pos: 0, compound: -0.8934 },
    id: "https://www.bbc.co.uk/news/uk-england-london-64370211",
    published: [2023, 1, 24, 18, 26, 52, 1, 24, 0],
  },
  {
    title: "Salford rape: New DNA sparks appeal hope for 2003 conviction",
    summary:
      "Andrew Malkinson spent 17 years in jail for raping a woman but has always maintained his innocence.",
    vaderTitle: { neg: 0.301, neu: 0.513, pos: 0.186, compound: -0.4215 },
    vaderSummary: { neg: 0.143, neu: 0.69, pos: 0.167, compound: 0.128 },
    id: "https://www.bbc.co.uk/news/uk-england-manchester-64384132",
    published: [2023, 1, 24, 15, 46, 41, 1, 24, 0],
  },
  {
    title: "Christopher Hughes: Gang killed man wrongly suspected of rape",
    summary:
      "Christopher Hughes was repeatedly stabbed after being kidnapped and driven to his death.",
    vaderTitle: { neg: 0.649, neu: 0.351, pos: 0, compound: -0.9022 },
    vaderSummary: { neg: 0.382, neu: 0.618, pos: 0, compound: -0.7783 },
    id: "https://www.bbc.co.uk/news/uk-england-manchester-64385668",
    published: [2023, 1, 24, 15, 41, 25, 1, 24, 0],
  },
  {
    title: "Cody Fisher stab death nightclub loses licence",
    summary:
      'Birmingham City Council acts after police cite "terrifying risks" at the venue where Cody Fisher died.',
    vaderTitle: { neg: 0.714, neu: 0.286, pos: 0, compound: -0.875 },
    vaderSummary: { neg: 0.42, neu: 0.58, pos: 0, compound: -0.8555 },
    id: "https://www.bbc.co.uk/news/uk-england-birmingham-64385934",
    published: [2023, 1, 24, 19, 11, 10, 1, 24, 0],
  },
  {
    title: "Pop star's interest piqued by 'granny pants' stunt",
    summary:
      'The women said throwing "big pants" at the singer on stage during a concert had "changed their lives".',
    vaderTitle: { neg: 0, neu: 0.594, pos: 0.406, compound: 0.4767 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-lincolnshire-64390540",
    published: [2023, 1, 24, 21, 15, 21, 1, 24, 0],
  },
  {
    title:
      "Bournemouth e-scooter row: Home Office to investigate circumstances of the murder",
    summary:
      'The immigration minister says an asylum seeker who killed two in Serbia was "a threat to society".',
    vaderTitle: { neg: 0.32, neu: 0.68, pos: 0, compound: -0.6908 },
    vaderSummary: { neg: 0.345, neu: 0.655, pos: 0, compound: -0.836 },
    id: "https://www.bbc.co.uk/news/uk-england-dorset-64390113",
    published: [2023, 1, 24, 17, 49, 3, 1, 24, 0],
  },
  {
    title: "Bristol: Airbnb 'party house' to end current use",
    summary:
      'Neighbours said the Airbnb on a residential road in Bristol had "made their lives a misery".',
    vaderTitle: { neg: 0, neu: 0.722, pos: 0.278, compound: 0.4019 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-bristol-64390693",
    published: [2023, 1, 24, 19, 7, 51, 1, 24, 0],
  },
  {
    title: "Jared O'Mara: Fraud accused MP ran a dysfunctional office - court",
    summary:
      "Jared O'Mara. 41, is alleged to have submitted fraudulent expenses claims worth nearly £30,000.",
    vaderTitle: { neg: 0.462, neu: 0.538, pos: 0, compound: -0.7184 },
    vaderSummary: { neg: 0.187, neu: 0.702, pos: 0.111, compound: -0.3182 },
    id: "https://www.bbc.co.uk/news/uk-england-south-yorkshire-64393756",
    published: [2023, 1, 24, 21, 3, 5, 1, 24, 0],
  },
  {
    title: "Human skull found during Sennen beach clean",
    summary:
      "Emily Stevenson was hosting a beach clean on Sennen beach when she came across a skull in the dunes.",
    vaderTitle: { neg: 0, neu: 0.69, pos: 0.31, compound: 0.4019 },
    vaderSummary: { neg: 0, neu: 0.856, pos: 0.144, compound: 0.4019 },
    id: "https://www.bbc.co.uk/news/uk-england-cornwall-64388306",
    published: [2023, 1, 24, 13, 36, 26, 1, 24, 0],
  },
  {
    title: "Lost seal pup found in field miles away from sea",
    summary:
      "The puzzled pup is thought to have followed a food source more than 15 miles up a river.",
    vaderTitle: { neg: 0.204, neu: 0.796, pos: 0, compound: -0.3182 },
    vaderSummary: { neg: 0.102, neu: 0.898, pos: 0, compound: -0.1779 },
    id: "https://www.bbc.co.uk/news/uk-england-lancashire-64376002",
    published: [2023, 1, 24, 14, 7, 19, 1, 24, 0],
  },
  {
    title: "Film-maker captures wonder of starling murmuration",
    summary:
      "The birds were filmed by the seafront in Blackpool and at Leighton Moss RSPB nature reserve.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-lancashire-64391203",
    published: [2023, 1, 24, 17, 1, 42, 1, 24, 0],
  },
  {
    title: "Norfolk naturalist cycles 1,000 miles to follow geese",
    summary:
      'Naturalist Nick Acheson says the "great migrations" of pink-footed geese are humbling.',
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 0.728, pos: 0.272, compound: 0.6249 },
    id: "https://www.bbc.co.uk/news/uk-england-norfolk-64377754",
    published: [2023, 1, 24, 6, 15, 18, 1, 24, 0],
  },
  {
    title: "Cornwall sheepdog is 'the ultimate diva'",
    summary:
      "A sheepdog from Cornwall is the UK's Top Dog All Breeds; but, at home, she's just one of the gang.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 0.928, pos: 0.072, compound: 0.1027 },
    id: "https://www.bbc.co.uk/news/uk-england-cornwall-64377902",
    published: [2023, 1, 23, 16, 22, 18, 0, 23, 0],
  },
  {
    title: "Disabled adventurer from Shropshire in seven-continent challenge",
    summary:
      "Darren Edwards is aiming to complete seven marathons over seven days for charity.",
    vaderTitle: { neg: 0, neu: 0.588, pos: 0.412, compound: 0.3612 },
    vaderSummary: { neg: 0, neu: 0.811, pos: 0.189, compound: 0.4215 },
    id: "https://www.bbc.co.uk/news/uk-england-shropshire-64376633",
    published: [2023, 1, 23, 20, 30, 11, 0, 23, 0],
  },
  {
    title:
      "Fatima Cates: Victorian woman who helped set up UK's first mosque honoured",
    summary:
      "Fatima Cates, who helped set up the UK's first mosque. is described as a 'trailblazer'.",
    vaderTitle: { neg: 0, neu: 0.775, pos: 0.225, compound: 0.4939 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-merseyside-64365093",
    published: [2023, 1, 22, 16, 8, 46, 6, 22, 0],
  },
  {
    title: "Hit-and-run cyclist victims were father and son",
    summary:
      "Dean Jones, 45, and Lewis Daines,16, died at the scene of the crash in Cudworth on Friday.",
    vaderTitle: { neg: 0.277, neu: 0.723, pos: 0, compound: -0.3182 },
    vaderSummary: { neg: 0.296, neu: 0.704, pos: 0, compound: -0.743 },
    id: "https://www.bbc.co.uk/news/uk-england-south-yorkshire-64389109",
    published: [2023, 1, 24, 15, 22, 49, 1, 24, 0],
  },
  {
    title: "Murderer who strangled girlfriend could see sentence increased",
    summary:
      "Ross McCullam was jailed for a minimum of 23 years for murdering 23-year-old Megan Newborough.",
    vaderTitle: { neg: 0.523, neu: 0.258, pos: 0.219, compound: -0.7717 },
    vaderSummary: { neg: 0.385, neu: 0.615, pos: 0, compound: -0.8176 },
    id: "https://www.bbc.co.uk/news/uk-england-leicestershire-64384725",
    published: [2023, 1, 24, 14, 10, 30, 1, 24, 0],
  },
  {
    title: "Milton Keynes bus stolen by drunken passenger, say police",
    summary:
      "Other passengers were on board the bus as it was being taken, and it then hit multiple vehicles.",
    vaderTitle: { neg: 0.286, neu: 0.714, pos: 0, compound: -0.4939 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-64388119",
    published: [2023, 1, 24, 13, 58, 27, 1, 24, 0],
  },
  {
    title: "Rolling Stones: Jagger and Richards statues planned for Dartford",
    summary:
      "The bronze figures of Mick Jagger and Keith Richards will be installed in Dartford, their home town.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/news/uk-england-kent-64377849",
    published: [2023, 1, 24, 13, 13, 48, 1, 24, 0],
  },
  {
    title: "Sir Elton John sends concert tickets to Telford students",
    summary:
      "Telford Priory pupils were praised by the singer for their lockdown version of I'm Still Standing.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 0.824, pos: 0.176, compound: 0.4939 },
    id: "https://www.bbc.co.uk/news/uk-england-shropshire-64383261",
    published: [2023, 1, 24, 9, 26, 0, 1, 24, 0],
  },
  {
    title:
      "Southampton 0-1 Newcastle: Joelinton goal gives Newcastle EFL Cup semi-final advantage",
    summary:
      "Joelinton scores in the second half as Newcastle edge Southampton in the first leg of their EFL Cup semi-final at St Mary's.",
    vaderTitle: { neg: 0, neu: 0.833, pos: 0.167, compound: 0.25 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/sport/football/64299708",
    published: [2023, 1, 24, 22, 27, 43, 1, 24, 0],
  },
  {
    title:
      "Ben Stokes: 'Door open' for England all-rounder to end ODI retirement and play at World Cup",
    summary:
      'The "door is open" for Ben Stokes to come out of 50-over retirement and play at the World Cup in India later this year, says England coach Matthew Mott.',
    vaderTitle: { neg: 0, neu: 0.862, pos: 0.138, compound: 0.34 },
    vaderSummary: { neg: 0, neu: 0.921, pos: 0.079, compound: 0.34 },
    id: "https://www.bbc.co.uk/sport/cricket/64390284",
    published: [2023, 1, 24, 17, 35, 23, 1, 24, 0],
  },
  {
    title:
      "Everton manager: Who will the Toffees turn to as their next boss after Frank Lampard's sacking?",
    summary:
      "After Frank Lampard's sacking as Everton manager, who will be next at Goodison Park? BBC Sport looks at the potential candidates.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/sport/football/64391160",
    published: [2023, 1, 24, 16, 46, 24, 1, 24, 0],
  },
  {
    title: "Anthony Gordon: Chelsea and Newcastle keen on Everton forward",
    summary:
      "Chelsea and Newcastle are keen on signing Everton forward Anthony Gordon before next Tuesday's transfer deadline.",
    vaderTitle: { neg: 0, neu: 0.762, pos: 0.238, compound: 0.3612 },
    vaderSummary: { neg: 0, neu: 0.857, pos: 0.143, compound: 0.3612 },
    id: "https://www.bbc.co.uk/sport/football/64394158",
    published: [2023, 1, 24, 20, 8, 3, 1, 24, 0],
  },
  {
    title:
      "England Six Nations squad: Elliot Daly and Jamie George withdraw from training camp",
    summary:
      "Elliot Daly and Jamie George withdraw from England's training camp before the Six Nations opener against Scotland next month.",
    vaderTitle: { neg: 0, neu: 1, pos: 0, compound: 0 },
    vaderSummary: { neg: 0, neu: 1, pos: 0, compound: 0 },
    id: "https://www.bbc.co.uk/sport/rugby-union/64385196",
    published: [2023, 1, 24, 12, 23, 11, 1, 24, 0],
  },
]

export default mockData
