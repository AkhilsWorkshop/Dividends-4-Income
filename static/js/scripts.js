/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

        $('#id_ticker').autocomplete({
  source: function(request, response) {
    var data = {
      "success": true,
      "data": [
      {
        "symbol": "AACG",
        "name": "ATA Creativity Global American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "AACI",
        "name": "Armada Acquisition Corp. I Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AACIU",
        "name": "Armada Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "AACIW",
        "name": "Armada Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "AADI",
        "name": "Aadi Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAL",
        "name": "American Airlines Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAME",
        "name": "Atlantic American Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAOI",
        "name": "Applied Optoelectronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAON",
        "name": "AAON Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAPL",
        "name": "Apple Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AATC",
        "name": "Autoscope Technologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AAWW",
        "name": "Atlas Air Worldwide Holdings NEW Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABCB",
        "name": "Ameris Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABCL",
        "name": "AbCellera Biologics Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "ABCM",
        "name": "Abcam plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ABEO",
        "name": "Abeona Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABGI",
        "name": "ABG Acquisition Corp. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ABIO",
        "name": "ARCA biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABMD",
        "name": "ABIOMED Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABNB",
        "name": "Airbnb Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABOS",
        "name": "Acumen Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABSI",
        "name": "Absci Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABST",
        "name": "Absolute Software Corporation Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "ABTX",
        "name": "Allegiance Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ABUS",
        "name": "Arbutus Biopharma Corporation Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "ABVC",
        "name": "ABVC BioPharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACAD",
        "name": "ACADIA Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACAH",
        "name": "Atlantic Coastal Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACAHW",
        "name": "Atlantic Coastal Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ACB",
        "name": "Aurora Cannabis Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "ACBA",
        "name": "Ace Global Business Acquisition Limited Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "ACBAU",
        "name": "Ace Global Business Acquisition Limited Unit",
        "country": "Hong Kong"
      },
      {
        "symbol": "ACBAW",
        "name": "Ace Global Business Acquisition Limited Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "ACBI",
        "name": "Atlantic Capital Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACCD",
        "name": "Accolade Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACER",
        "name": "Acer Therapeutics Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "ACET",
        "name": "Adicet Bio Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "ACEV",
        "name": "ACE Convergence Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ACEVU",
        "name": "ACE Convergence Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ACEVW",
        "name": "ACE Convergence Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ACGL",
        "name": "Arch Capital Group Ltd. Common Stock",
        "country": "Bermuda"
      },
      {
        "symbol": "ACGLN",
        "name": "Arch Capital Group Ltd. Depositary Shares each Representing a 1/1000th Interest in a 4.550% Non-Cumulative Preferred Share Series G",
        "country": "Bermuda"
      },
      {
        "symbol": "ACGLO",
        "name": "Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of 5.45% Non-Cumulative Preferred Shares Series F",
        "country": "Bermuda"
      },
      {
        "symbol": "ACHC",
        "name": "Acadia Healthcare Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACHL",
        "name": "Achilles Therapeutics plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ACHV",
        "name": "Achieve Life Sciences Inc. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "ACIU",
        "name": "AC Immune SA Common Stock",
        "country": "Switzerland"
      },
      {
        "symbol": "ACIW",
        "name": "ACI Worldwide Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACKIT",
        "name": "Ackrell SPAC Partners I Co. Subunits",
        "country": "United States"
      },
      {
        "symbol": "ACKIU",
        "name": "Ackrell SPAC Partners I Co. Units",
        "country": "United States"
      },
      {
        "symbol": "ACKIW",
        "name": "Ackrell SPAC Partners I Co. Warrants",
        "country": "United States"
      },
      {
        "symbol": "ACLS",
        "name": "Axcelis Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACMR",
        "name": "ACM Research Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACNB",
        "name": "ACNB Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACOR",
        "name": "Acorda Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACQR",
        "name": "Independence Holdings Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "ACQRU",
        "name": "Independence Holdings Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "ACQRW",
        "name": "Independence Holdings Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ACRS",
        "name": "Aclaris Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACRX",
        "name": "AcelRx Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACST",
        "name": "Acasti Pharma Inc. Class A Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "ACT",
        "name": "Enact Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACTD",
        "name": "ArcLight Clean Transition Corp. II Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "ACTDU",
        "name": "ArcLight Clean Transition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "ACTDW",
        "name": "ArcLight Clean Transition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "ACTG",
        "name": "Acacia Research Corporation (Acacia Tech) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACVA",
        "name": "ACV Auctions Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ACXP",
        "name": "Acurx Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADAG",
        "name": "Adagene Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "ADAL",
        "name": "Anthemis Digital Acquisitions I Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ADALU",
        "name": "Anthemis Digital Acquisitions I Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "ADALW",
        "name": "Anthemis Digital Acquisitions I Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADAP",
        "name": "Adaptimmune Therapeutics plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ADBE",
        "name": "Adobe Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADER",
        "name": "26 Capital Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADERU",
        "name": "26 Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ADERW",
        "name": "26 Capital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADES",
        "name": "Advanced Emissions Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADGI",
        "name": "Adagio Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADI",
        "name": "Analog Devices Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADIL",
        "name": "Adial Pharmaceuticals Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADILW",
        "name": "Adial Pharmaceuticals Inc Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADMA",
        "name": "ADMA Biologics Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADMP",
        "name": "Adamis Pharmaceuticals Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADN",
        "name": "Advent Technologies Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADNWW",
        "name": "Advent Technologies Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADOC",
        "name": "Edoc Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "ADOCR",
        "name": "Edoc Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "ADOCW",
        "name": "Edoc Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADP",
        "name": "Automatic Data Processing Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADPT",
        "name": "Adaptive Biotechnologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADSE",
        "name": "ADS-TEC ENERGY PLC Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "ADSEW",
        "name": "ADS-TEC ENERGY PLC Warrant",
        "country": "Ireland"
      },
      {
        "symbol": "ADSK",
        "name": "Autodesk Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADTH",
        "name": "AdTheorent Holding Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADTHW",
        "name": "AdTheorent Holding Company Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "ADTN",
        "name": "ADTRAN Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADTX",
        "name": "Aditxt Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADUS",
        "name": "Addus HomeCare Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADV",
        "name": "Advantage Solutions Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADVM",
        "name": "Adverum Biotechnologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ADVWW",
        "name": "Advantage Solutions Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ADXN",
        "name": "Addex Therapeutics Ltd American Depositary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "AEAC",
        "name": "Authentic Equity Acquisition Corp. Class A ordinary share",
        "country": "United States"
      },
      {
        "symbol": "AEACU",
        "name": "Authentic Equity Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "AEACW",
        "name": "Authentic Equity Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AEAE",
        "name": "AltEnergy Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEAEU",
        "name": "AltEnergy Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "AEAEW",
        "name": "AltEnergy Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AEHAW",
        "name": "Aesther Healthcare Acquisition Corp Warrants",
        "country": "United States"
      },
      {
        "symbol": "AEHL",
        "name": "Antelope Enterprise Holdings Limited Common Stock (0.024 par)",
        "country": "China"
      },
      {
        "symbol": "AEHR",
        "name": "Aehr Test Systems Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEI",
        "name": "Alset EHome International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEIS",
        "name": "Advanced Energy Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEMD",
        "name": "Aethlon Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEP",
        "name": "American Electric Power Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEPPL",
        "name": "American Electric Power Company Inc. Corporate Unit",
        "country": "United States"
      },
      {
        "symbol": "AEPPZ",
        "name": "American Electric Power Company Inc. Corporate Units",
        "country": "United States"
      },
      {
        "symbol": "AERC",
        "name": "AeroClean Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AERI",
        "name": "Aerie Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AESE",
        "name": "Allied Esports Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEY",
        "name": "ADDvantage Technologies Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEYE",
        "name": "AudioEye Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AEZS",
        "name": "Aeterna Zentaris Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "AFAC",
        "name": "Arena Fortify Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFACU",
        "name": "Arena Fortify Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "AFACW",
        "name": "Arena Fortify Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AFAQ",
        "name": "AF Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFAQU",
        "name": "AF Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "AFAQW",
        "name": "AF Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "AFBI",
        "name": "Affinity Bancshares Inc. Common Stock (MD)",
        "country": "United States"
      },
      {
        "symbol": "AFCG",
        "name": "AFC Gamma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFIB",
        "name": "Acutus Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFIN",
        "name": "American Finance Trust Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFINO",
        "name": "American Finance Trust Inc. 7.375% Series C Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AFINP",
        "name": "American Finance Trust Inc. 7.50% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AFMD",
        "name": "Affimed N.V.",
        "country": "Germany"
      },
      {
        "symbol": "AFRM",
        "name": "Affirm Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AFYA",
        "name": "Afya Limited Class A Common Shares",
        "country": "Brazil"
      },
      {
        "symbol": "AGBA",
        "name": "AGBA Acquisition Limited Ordinary Share",
        "country": "Hong Kong"
      },
      {
        "symbol": "AGBAR",
        "name": "AGBA Acquisition Limited Right",
        "country": "Hong Kong"
      },
      {
        "symbol": "AGBAW",
        "name": "AGBA Acquisition Limited Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "AGEN",
        "name": "Agenus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGFS",
        "name": "AgroFresh Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGFY",
        "name": "Agrify Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGGR",
        "name": "Agile Growth Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "AGGRU",
        "name": "Agile Growth Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "AGGRW",
        "name": "Agile Growth Corp. Warrant.",
        "country": "United States"
      },
      {
        "symbol": "AGIL",
        "name": "AgileThought Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGILW",
        "name": "AgileThought Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AGIO",
        "name": "Agios Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGLE",
        "name": "Aeglea BioTherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGMH",
        "name": "AGM Group Holdings Inc. Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "AGNC",
        "name": "AGNC Investment Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGNCM",
        "name": "AGNC Investment Corp. Depositary Shares rep 6.875% Series D Fixed-to-Floating Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AGNCN",
        "name": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AGNCO",
        "name": "AGNC Investment Corp. Depositary Shares each representing a 1/1000th interest in a share of 6.50% Series E Fixed-to-Floating Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AGNCP",
        "name": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.125% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "AGRI",
        "name": "AgriFORCE  Growing Systems Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "AGRIW",
        "name": "AgriFORCE  Growing Systems Ltd. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "AGRX",
        "name": "Agile Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGTC",
        "name": "Applied Genetic Technologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AGYS",
        "name": "Agilysys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AHCO",
        "name": "AdaptHealth Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AHG",
        "name": "Akso Health Group ADS",
        "country": "China"
      },
      {
        "symbol": "AHI",
        "name": "Advanced Human Imaging Limited. American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "AHPA",
        "name": "Avista Public Acquisition Corp. II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "AHPAW",
        "name": "Avista Public Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "AHPI",
        "name": "Allied Healthcare Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AHRNU",
        "name": "Ahren Acquisition Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "AIH",
        "name": "Aesthetic Medical International Holdings Group Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "AIHS",
        "name": "Senmiao Technology Limited Common Stock",
        "country": "China"
      },
      {
        "symbol": "AIKI",
        "name": "AIkido Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIMC",
        "name": "Altra Industrial Motion Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AINV",
        "name": "Apollo Investment Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIP",
        "name": "Arteris Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIRG",
        "name": "Airgain Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIRS",
        "name": "AirSculpt Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIRT",
        "name": "Air T Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AIRTP",
        "name": "Air T Inc. Air T Funding Alpha Income Trust Preferred Securities",
        "country": "United States"
      },
      {
        "symbol": "AKAM",
        "name": "Akamai Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AKBA",
        "name": "Akebia Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AKIC",
        "name": "Sports Ventures Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "AKICU",
        "name": "Sports Ventures Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "AKICW",
        "name": "Sports Ventures Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AKRO",
        "name": "Akero Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AKTS",
        "name": "Akoustis Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AKTX",
        "name": "Akari Therapeutics plc ADS",
        "country": "United Kingdom"
      },
      {
        "symbol": "AKU",
        "name": "Akumin Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "AKUS",
        "name": "Akouos Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AKYA",
        "name": "Akoya BioSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALAC",
        "name": "Alberton Acquisition Corporation Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "ALACR",
        "name": "Alberton Acquisition Corporation Rights exp April 26 2021",
        "country": "Hong Kong"
      },
      {
        "symbol": "ALACW",
        "name": "Alberton Acquisition Corporation Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "ALBO",
        "name": "Albireo Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALCO",
        "name": "Alico Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALDX",
        "name": "Aldeyra Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALEC",
        "name": "Alector Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALF",
        "name": "ALFI Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALFIW",
        "name": "ALFI Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ALGM",
        "name": "Allegro MicroSystems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALGN",
        "name": "Align Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALGS",
        "name": "Aligos Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALGT",
        "name": "Allegiant Travel Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALHC",
        "name": "Alignment Healthcare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALIM",
        "name": "Alimera Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALJJ",
        "name": "ALJ Regional Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALKS",
        "name": "Alkermes plc Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "ALKT",
        "name": "Alkami Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALLK",
        "name": "Allakos Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALLO",
        "name": "Allogene Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALLR",
        "name": "Allarity Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALLT",
        "name": "Allot Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ALNA",
        "name": "Allena Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALNY",
        "name": "Alnylam Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALORU",
        "name": "ALSP Orchid Acquisition Corporation I Unit",
        "country": "United States"
      },
      {
        "symbol": "ALOT",
        "name": "AstroNova Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALPA",
        "name": "Alpha Healthcare Acquisition Corp. III Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALPAU",
        "name": "Alpha Healthcare Acquisition Corp. III Units",
        "country": "United States"
      },
      {
        "symbol": "ALPAW",
        "name": "Alpha Healthcare Acquisition Corp. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "ALPN",
        "name": "Alpine Immune Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALPP",
        "name": "Alpine 4 Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALRM",
        "name": "Alarm.com Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALRN",
        "name": "Aileron Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALRS",
        "name": "Alerus Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALSAU",
        "name": "Alpha Star Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "ALT",
        "name": "Altimmune Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALTM",
        "name": "Altus Midstream Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALTO",
        "name": "Alto Ingredients Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALTR",
        "name": "Altair Engineering Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALTU",
        "name": "Altitude Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALTUU",
        "name": "Altitude Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ALTUW",
        "name": "Altitude Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ALVR",
        "name": "AlloVir Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALXO",
        "name": "ALX Oncology Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ALYA",
        "name": "Alithya Group inc. Class A Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "ALZN",
        "name": "Alzamend Neuro Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMAL",
        "name": "Amalgamated Financial Corp. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "AMAO",
        "name": "American Acquisition Opportunity Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMAOU",
        "name": "American Acquisition Opportunity Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "AMAOW",
        "name": "American Acquisition Opportunity Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AMAT",
        "name": "Applied Materials Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMBA",
        "name": "Ambarella Inc. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "AMCI",
        "name": "AMCI Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMCIW",
        "name": "AMCI Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "AMCX",
        "name": "AMC Networks Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMD",
        "name": "Advanced Micro Devices Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMED",
        "name": "Amedisys Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMEH",
        "name": "Apollo Medical Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMGN",
        "name": "Amgen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMKR",
        "name": "Amkor Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMLX",
        "name": "Amylyx Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMNB",
        "name": "American National Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMOT",
        "name": "Allied Motion Technologies Inc.",
        "country": "United States"
      },
      {
        "symbol": "AMPG",
        "name": "Amplitech Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMPH",
        "name": "Amphastar Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMPL",
        "name": "Amplitude Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMRK",
        "name": "A-Mark Precious Metals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMRN",
        "name": "Amarin Corporation plc",
        "country": "Ireland"
      },
      {
        "symbol": "AMRS",
        "name": "Amyris Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMSC",
        "name": "American Superconductor Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMSF",
        "name": "AMERISAFE Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMST",
        "name": "Amesite Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMSWA",
        "name": "American Software Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMTB",
        "name": "Amerant Bancorp Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMTI",
        "name": "Applied Molecular Transport Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMTX",
        "name": "Aemetis Inc. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMWD",
        "name": "American Woodmark Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AMYT",
        "name": "Amryt Pharma plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "AMZN",
        "name": "Amazon.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANAB",
        "name": "AnaptysBio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANAT",
        "name": "American National Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANDE",
        "name": "Andersons Inc. (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANEB",
        "name": "Anebulo Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANGI",
        "name": "Angi Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANGN",
        "name": "Angion Biomedica Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANGO",
        "name": "AngioDynamics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANIK",
        "name": "Anika Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANIP",
        "name": "ANI Pharmaceuticals Inc.",
        "country": "United States"
      },
      {
        "symbol": "ANIX",
        "name": "Anixa Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANNX",
        "name": "Annexon Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANPC",
        "name": "AnPac Bio-Medical Science Co. Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "ANSS",
        "name": "ANSYS Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANTE",
        "name": "AirNet Technology Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "ANY",
        "name": "Sphere 3D Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "ANZU",
        "name": "Anzu Special Acquisition Corp I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ANZUU",
        "name": "Anzu Special Acquisition Corp I Units",
        "country": "United States"
      },
      {
        "symbol": "ANZUW",
        "name": "Anzu Special Acquisition Corp I Warrant",
        "country": "United States"
      },
      {
        "symbol": "AOGOU",
        "name": "Arogo Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "AOSL",
        "name": "Alpha and Omega Semiconductor Limited Common Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "AOUT",
        "name": "American Outdoor Brands Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "APA",
        "name": "APA Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APAC",
        "name": "StoneBridge Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "APACU",
        "name": "StoneBridge Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "APACW",
        "name": "StoneBridge Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "APCX",
        "name": "AppTech Payments Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APCXW",
        "name": "AppTech Payments Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "APDN",
        "name": "Applied DNA Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APEI",
        "name": "American Public Education Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APEN",
        "name": "Apollo Endosurgery Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "API",
        "name": "Agora Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "APLS",
        "name": "Apellis Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APLT",
        "name": "Applied Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APM",
        "name": "Aptorum Group Limited Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "APMI",
        "name": "AxonPrime Infrastructure Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APMIU",
        "name": "AxonPrime Infrastructure Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "APMIW",
        "name": "AxonPrime Infrastructure Acquisition Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "APOG",
        "name": "Apogee Enterprises Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APP",
        "name": "Applovin Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APPF",
        "name": "AppFolio Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APPH",
        "name": "AppHarvest Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APPHW",
        "name": "AppHarvest Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "APPN",
        "name": "Appian Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APPS",
        "name": "Digital Turbine Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APR",
        "name": "Apria Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APRE",
        "name": "Aprea Therapeutics Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "APTM",
        "name": "Alpha Partners Technology Merger Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "APTMW",
        "name": "Alpha Partners Technology Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "APTO",
        "name": "Aptose Biosciences Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "APTX",
        "name": "Aptinyx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APVO",
        "name": "Aptevo Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "APWC",
        "name": "Asia Pacific Wire & Cable Corporation Ltd. Ordinary Shares (Bermuda)",
        "country": "Taiwan"
      },
      {
        "symbol": "APXIU",
        "name": "APx Acquisition Corp. I Unit",
        "country": "Mexico"
      },
      {
        "symbol": "APYX",
        "name": "Apyx Medical Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AQB",
        "name": "AquaBounty Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AQMS",
        "name": "Aqua Metals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AQST",
        "name": "Aquestive Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARAV",
        "name": "Aravive Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARAY",
        "name": "Accuray Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARBE",
        "name": "Arbe Robotics Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ARBEW",
        "name": "Arbe Robotics Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "ARBG",
        "name": "Aequi Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARBGU",
        "name": "Aequi Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ARBGW",
        "name": "Aequi Acquisition Corp. warrants",
        "country": "United States"
      },
      {
        "symbol": "ARBK",
        "name": "Argo Blockchain plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ARBKL",
        "name": "Argo Blockchain plc 8.75% Senior Notes due 2026",
        "country": "United Kingdom"
      },
      {
        "symbol": "ARCB",
        "name": "ArcBest Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARCC",
        "name": "Ares Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARCE",
        "name": "Arco Platform Limited Class A Common Shares",
        "country": "Brazil"
      },
      {
        "symbol": "ARCK",
        "name": "Arbor Rapha Capital Bioholdings Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARCKU",
        "name": "Arbor Rapha Capital Bioholdings Corp. I Units",
        "country": "United States"
      },
      {
        "symbol": "ARCKW",
        "name": "Arbor Rapha Capital Bioholdings Corp. I Warrants",
        "country": "United States"
      },
      {
        "symbol": "ARCT",
        "name": "Arcturus Therapeutics Holdings Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "ARDS",
        "name": "Aridis Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARDX",
        "name": "Ardelyx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AREC",
        "name": "American Resources Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARGU",
        "name": "Argus Capital Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARGUU",
        "name": "Argus Capital Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ARGUW",
        "name": "Argus Capital Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARGX",
        "name": "argenx SE American Depositary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "ARHS",
        "name": "Arhaus Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARIZ",
        "name": "Arisz Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARIZR",
        "name": "Arisz Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "ARIZU",
        "name": "Arisz Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ARIZW",
        "name": "Arisz Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARKO",
        "name": "ARKO Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARKOW",
        "name": "ARKO Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARKR",
        "name": "Ark Restaurants Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARLP",
        "name": "Alliance Resource Partners L.P. Common Units representing Limited Partners Interests",
        "country": "United States"
      },
      {
        "symbol": "ARNA",
        "name": "Arena Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AROW",
        "name": "Arrow Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARQQ",
        "name": "Arqit Quantum Inc. Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ARQQW",
        "name": "Arqit Quantum Inc. Warrants",
        "country": "United Kingdom"
      },
      {
        "symbol": "ARQT",
        "name": "Arcutis Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARRW",
        "name": "Arrowroot Acquisition Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "ARRWU",
        "name": "Arrowroot Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ARRWW",
        "name": "Arrowroot Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARRY",
        "name": "Array Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARTA",
        "name": "Artisan Acquisition Corp. Class A Ordinary Shares ",
        "country": "Cayman Islands"
      },
      {
        "symbol": "ARTAU",
        "name": "Artisan Acquisition Corp. Units",
        "country": "Cayman Islands"
      },
      {
        "symbol": "ARTAW",
        "name": "Artisan Acquisition Corp. Warrants",
        "country": "Cayman Islands"
      },
      {
        "symbol": "ARTEU",
        "name": "Artemis Strategic Investment Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "ARTEW",
        "name": "Artemis Strategic Investment Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARTL",
        "name": "Artelo Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARTLW",
        "name": "Artelo Biosciences Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ARTNA",
        "name": "Artesian Resources Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARTW",
        "name": "Art's-Way Manufacturing Co. Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARVL",
        "name": "Arrival Ordinary Shares",
        "country": "Luxembourg"
      },
      {
        "symbol": "ARVN",
        "name": "Arvinas Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARWR",
        "name": "Arrowhead Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ARYD",
        "name": "ARYA Sciences Acquisition Corp IV Class A Odinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ARYE",
        "name": "ARYA Sciences Acquisition Corp V Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ASAX",
        "name": "Astrea Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASAXU",
        "name": "Astrea Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ASAXW",
        "name": "Astrea Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ASLE",
        "name": "AerSale Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASLN",
        "name": "ASLAN Pharmaceuticals Limited American Depositary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "ASMB",
        "name": "Assembly Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASML",
        "name": "ASML Holding N.V. New York Registry Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "ASND",
        "name": "Ascendis Pharma A/S American Depositary Shares",
        "country": "Denmark"
      },
      {
        "symbol": "ASO",
        "name": "Academy Sports and Outdoors Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASPA",
        "name": "ABRI SPAC I INC. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASPAU",
        "name": "Abri SPAC I Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "ASPAW",
        "name": "ABRI SPAC I INC. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ASPC",
        "name": "Alpha Capital Acquisition Company One Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "ASPCU",
        "name": "Alpha Capital Acquisition Company Unit",
        "country": "United States"
      },
      {
        "symbol": "ASPCW",
        "name": "Alpha Capital Acquisition Company Warrant",
        "country": "United States"
      },
      {
        "symbol": "ASPS",
        "name": "Altisource Portfolio Solutions S.A. Common Stock",
        "country": "Luxembourg"
      },
      {
        "symbol": "ASPU",
        "name": "Aspen Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASRT",
        "name": "Assertio Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASRV",
        "name": "AmeriServ Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASTC",
        "name": "Astrotech Corporation (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASTE",
        "name": "Astec Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASTL",
        "name": "Algoma Steel Group Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "ASTLW",
        "name": "Algoma Steel Group Inc. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "ASTR",
        "name": "Astra Space Inc. Class A Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "ASTS",
        "name": "AST SpaceMobile Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASTSW",
        "name": "AST SpaceMobile Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ASUR",
        "name": "Asure Software Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ASYS",
        "name": "Amtech Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATAI",
        "name": "ATAI Life Sciences N.V. Common Shares",
        "country": "Germany"
      },
      {
        "symbol": "ATAX",
        "name": "America First Multifamily Investors L.P. Beneficial Unit Certificates (BUCs) representing Limited Partnership Interests",
        "country": "United States"
      },
      {
        "symbol": "ATCOL",
        "name": "Atlas Corp. 7.125% Notes due 2027",
        "country": "United Kingdom"
      },
      {
        "symbol": "ATCX",
        "name": "Atlas Technical Consultants Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATEC",
        "name": "Alphatec Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATER",
        "name": "Aterian Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATEX",
        "name": "Anterix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATHA",
        "name": "Athira Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATHE",
        "name": "Alterity Therapeutics Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "ATHX",
        "name": "Athersys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATIF",
        "name": "ATIF Holdings Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "ATLC",
        "name": "Atlanticus Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATLCL",
        "name": "Atlanticus Holdings Corporation 6.125% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "ATLCP",
        "name": "Atlanticus Holdings Corporation 7.625% Series B Cumulative Perpetual Preferred Stock no par value per share",
        "country": "United States"
      },
      {
        "symbol": "ATLO",
        "name": "Ames National Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATNF",
        "name": "180 Life Sciences Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATNFW",
        "name": "180 Life Sciences Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ATNI",
        "name": "ATN International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATNX",
        "name": "Athenex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATOM",
        "name": "Atomera Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATOS",
        "name": "Atossa Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATRA",
        "name": "Atara Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATRC",
        "name": "AtriCure Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATRI",
        "name": "Atrion Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATRO",
        "name": "Astronics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATRS",
        "name": "Antares Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATSG",
        "name": "Air Transport Services Group Inc",
        "country": "United States"
      },
      {
        "symbol": "ATSPT",
        "name": "Archimedes Tech SPAC Partners Co. Subunit",
        "country": "United States"
      },
      {
        "symbol": "ATSPU",
        "name": "Archimedes Tech SPAC Partners Co. Unit",
        "country": "United States"
      },
      {
        "symbol": "ATSPW",
        "name": "Archimedes Tech SPAC Partners Co. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ATVC",
        "name": "Tribe Capital Growth Corp I Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "ATVCU",
        "name": "Tribe Capital Growth Corp I Units",
        "country": "United States"
      },
      {
        "symbol": "ATVCW",
        "name": "Tribe Capital Growth Corp I Warrant",
        "country": "United States"
      },
      {
        "symbol": "ATVI",
        "name": "Activision Blizzard Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATXI",
        "name": "Avenue Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATXS",
        "name": "Astria Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ATY",
        "name": "AcuityAds Holdings Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "AUB",
        "name": "Atlantic Union Bankshares Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUBAP",
        "name": "Atlantic Union Bankshares Corporation Depositary Shares each representing a 1/400th ownership interest in a share of 6.875% Perpetual Non-Cumulative Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "AUBN",
        "name": "Auburn National Bancorporation Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUDC",
        "name": "AudioCodes Ltd. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "AUGX",
        "name": "Augmedix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUID",
        "name": "Ipsidy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUPH",
        "name": "Aurinia Pharmaceuticals Inc Ordinary Shares",
        "country": "Canada"
      },
      {
        "symbol": "AUR",
        "name": "Aurora Innovation Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AURA",
        "name": "Aura Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AURC",
        "name": "Aurora Acquisition Corp. Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "AURCU",
        "name": "Aurora Acquisition Corp. Unit",
        "country": "United Kingdom"
      },
      {
        "symbol": "AURCW",
        "name": "Aurora Acquisition Corp. Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "AUROW",
        "name": "Aurora Innovation Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AUTL",
        "name": "Autolus Therapeutics plc American Depositary Share",
        "country": "United Kingdom"
      },
      {
        "symbol": "AUTO",
        "name": "AutoWeb Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUUD",
        "name": "Auddia Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUUDW",
        "name": "Auddia Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "AUVI",
        "name": "Applied UV Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AUVIP",
        "name": "Applied UV Inc. 10.5% Series A Cumulative Perpetual Preferred Stock $0.0001 par value per share",
        "country": "United States"
      },
      {
        "symbol": "AVAC",
        "name": "Avalon Acquisition Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVACU",
        "name": "Avalon Acquisition Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "AVACW",
        "name": "Avalon Acquisition Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AVAH",
        "name": "Aveanna Healthcare Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVAV",
        "name": "AeroVironment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVCO",
        "name": "Avalon GloboCare Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVCT",
        "name": "American Virtual Cloud Technologies Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "AVCTW",
        "name": "American Virtual Cloud Technologies Inc. Warrant expiring 4/7/2025",
        "country": "United States"
      },
      {
        "symbol": "AVDL",
        "name": "Avadel Pharmaceuticals plc American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "AVDX",
        "name": "AvidXchange Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVEO",
        "name": "AVEO Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVGO",
        "name": "Broadcom Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVGOP",
        "name": "Broadcom Inc. 8.00% Mandatory Convertible Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "AVGR",
        "name": "Avinger Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVHI",
        "name": "Achari Ventures Holdings Corp. I Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVHIU",
        "name": "Achari Ventures Holdings Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "AVHIW",
        "name": "Achari Ventures Holdings Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "AVID",
        "name": "Avid Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVIR",
        "name": "Atea Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVNW",
        "name": "Aviat Networks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVO",
        "name": "Mission Produce Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVPT",
        "name": "AvePoint Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVPTW",
        "name": "AvePoint Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "AVRO",
        "name": "AVROBIO Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVT",
        "name": "Avnet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVTE",
        "name": "Aerovate Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVTX",
        "name": "Avalo Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AVXL",
        "name": "Anavex Life Sciences Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AWH",
        "name": "Aspira Women's Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AWRE",
        "name": "Aware Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXDX",
        "name": "Accelerate Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXGN",
        "name": "Axogen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXLA",
        "name": "Axcella Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXNX",
        "name": "Axonics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXON",
        "name": "Axon Enterprise Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXSM",
        "name": "Axsome Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AXTI",
        "name": "AXT Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AY",
        "name": "Atlantica Sustainable Infrastructure plc Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "AYLA",
        "name": "Ayala Pharmaceuticals Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "AYRO",
        "name": "AYRO Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AYTU",
        "name": "Aytu BioPharma Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AZ",
        "name": "A2Z Smart Technologies Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "AZN",
        "name": "AstraZeneca PLC American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "AZPN",
        "name": "Aspen Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "AZTA",
        "name": "Azenta Inc.",
        "country": "United Sttes"
      },
      {
        "symbol": "AZYO",
        "name": "Aziyo Biologics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BAFN",
        "name": "BayFirst Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BAND",
        "name": "Bandwidth Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BANF",
        "name": "BancFirst Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BANFP",
        "name": "BancFirst Corporation - BFC Capital Trust II Cumulative Trust Preferred Securities",
        "country": "United States"
      },
      {
        "symbol": "BANR",
        "name": "Banner Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BANX",
        "name": "StoneCastle Financial Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BAOS",
        "name": "Baosheng Media Group Holdings Limited Ordinary shares",
        "country": "China"
      },
      {
        "symbol": "BASE",
        "name": "Couchbase Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BATRA",
        "name": "Liberty Media Corporation Series A Liberty Braves Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BATRK",
        "name": "Liberty Media Corporation Series C Liberty Braves Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBBY",
        "name": "Bed Bath & Beyond Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBCP",
        "name": "Concrete Pumping Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBGI",
        "name": "Beasley Broadcast Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBI",
        "name": "Brickell Biotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBIG",
        "name": "Vinco Ventures Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBIO",
        "name": "BridgeBio Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBLG",
        "name": "Bone Biologics Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBLGW",
        "name": "Bone Biologics Corp Warrants",
        "country": "United States"
      },
      {
        "symbol": "BBQ",
        "name": "BBQ Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BBSI",
        "name": "Barrett Business Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCAB",
        "name": "BioAtla Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCAC",
        "name": "Brookline Capital Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCACU",
        "name": "Brookline Capital Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BCACW",
        "name": "Brookline Capital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BCBP",
        "name": "BCB Bancorp Inc. (NJ) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCDA",
        "name": "BioCardia Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCDAW",
        "name": "BioCardia Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BCEL",
        "name": "Atreca Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCLI",
        "name": "Brainstorm Cell Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCML",
        "name": "BayCom Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCOR",
        "name": "Blucora Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCOV",
        "name": "Brightcove Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCOW",
        "name": "1895 Bancorp of Wisconsin Inc. (MD) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCPC",
        "name": "Balchem Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCRX",
        "name": "BioCryst Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BCSA",
        "name": "Blockchain Coinvestors Acquisition Corp. I Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BCSAU",
        "name": "Blockchain Coinvestors Acquisition Corp. I Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BCSAW",
        "name": "Blockchain Coinvestors Acquisition Corp. I Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BCTX",
        "name": "BriaCell Therapeutics Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "BCTXW",
        "name": "BriaCell Therapeutics Corp. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "BCYC",
        "name": "Bicycle Therapeutics plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "BDSI",
        "name": "BioDelivery Sciences International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BDSX",
        "name": "Biodesix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BDTX",
        "name": "Black Diamond Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BEAM",
        "name": "Beam Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BEAT",
        "name": "Heartbeam Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BEATW",
        "name": "Heartbeam Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BECN",
        "name": "Beacon Roofing Supply Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BEEM",
        "name": "Beam Global Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BEEMW",
        "name": "Beam Global Warrant",
        "country": "United States"
      },
      {
        "symbol": "BELFA",
        "name": "Bel Fuse Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BELFB",
        "name": "Bel Fuse Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BENE",
        "name": "Benessere Capital Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BENER",
        "name": "Benessere Capital Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "BENEU",
        "name": "Benessere Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BENEW",
        "name": "Benessere Capital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BFC",
        "name": "Bank First Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BFI",
        "name": "BurgerFi International Inc. Common Stock ",
        "country": "Mexico"
      },
      {
        "symbol": "BFIIW",
        "name": "BurgerFi International Inc. Warrant ",
        "country": "Mexico"
      },
      {
        "symbol": "BFIN",
        "name": "BankFinancial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BFRA",
        "name": "Biofrontera AG American Depositary Shares",
        "country": "Germany"
      },
      {
        "symbol": "BFRI",
        "name": "Biofrontera Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BFRIW",
        "name": "Biofrontera Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BFST",
        "name": "Business First Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BGCP",
        "name": "BGC Partners Inc Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BGFV",
        "name": "Big 5 Sporting Goods Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BGNE",
        "name": "BeiGene Ltd. American Depositary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BGRY",
        "name": "Berkshire Grey Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BGRYW",
        "name": "Berkshire Grey Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BHAC",
        "name": "Crixus BH3 Acquisition Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BHACU",
        "name": "Crixus BH3 Acquisition Company Units",
        "country": "United States"
      },
      {
        "symbol": "BHACW",
        "name": "Crixus BH3 Acquisition Company Warrants",
        "country": "United States"
      },
      {
        "symbol": "BHAT",
        "name": "Blue Hat Interactive Entertainment Technology Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BHF",
        "name": "Brighthouse Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BHFAL",
        "name": "Brighthouse Financial Inc. 6.25% Junior Subordinated Debentures due 2058",
        "country": "United States"
      },
      {
        "symbol": "BHFAM",
        "name": "Brighthouse Financial Inc. Depositary shares each representing a 1/1000th Interest in a Share of 4.625% Non-Cumulative Preferred Stock Series D",
        "country": "United States"
      },
      {
        "symbol": "BHFAN",
        "name": "Brighthouse Financial Inc. Depositary shares each representing a 1/1000th interest in a share of 5.375% Non-Cumulative Preferred Stock Series C",
        "country": "United States"
      },
      {
        "symbol": "BHFAO",
        "name": "Brighthouse Financial Inc. Depositary Shares 6.75% Non-Cumulative Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "BHFAP",
        "name": "Brighthouse Financial Inc. Depositary Shares 6.6% Non-Cumulative Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "BHSE",
        "name": "Bull Horn Holdings Corp. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BHSEU",
        "name": "Bull Horn Holdings Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BHSEW",
        "name": "Bull Horn Holdings Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BIDU",
        "name": "Baidu Inc. ADS",
        "country": "China"
      },
      {
        "symbol": "BIGC",
        "name": "BigCommerce Holdings Inc. Series 1 Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BIIB",
        "name": "Biogen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BILI",
        "name": "Bilibili Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "BIMI",
        "name": "BIMI International Medical Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "BIOC",
        "name": "Biocept Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BIOL",
        "name": "Biolase Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BIOSU",
        "name": "BioPlus Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BIOT",
        "name": "Biotech Acquisition Company Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BIOTU",
        "name": "Biotech Acquisition Company Unit",
        "country": "United States"
      },
      {
        "symbol": "BIOTW",
        "name": "Biotech Acquisition Company Warrant",
        "country": "United States"
      },
      {
        "symbol": "BIOX",
        "name": "Bioceres Crop Solutions Corp. Ordinary Shares",
        "country": "Argentina"
      },
      {
        "symbol": "BIRD",
        "name": "Allbirds Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BITF",
        "name": "Bitfarms Ltd. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "BIVI",
        "name": "BioVie Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BJDX",
        "name": "Bluejay Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BJRI",
        "name": "BJ's Restaurants Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BKCC",
        "name": "BlackRock Capital Investment Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BKEP",
        "name": "Blueknight Energy Partners L.P. Common Units",
        "country": "United States"
      },
      {
        "symbol": "BKEPP",
        "name": "Blueknight Energy Partners L.P. Series A Preferred Units",
        "country": "United States"
      },
      {
        "symbol": "BKNG",
        "name": "Booking Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BKR",
        "name": "Baker Hughes Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BKSC",
        "name": "Bank of South Carolina Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BKYI",
        "name": "BIO-key International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BL",
        "name": "BlackLine Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLBD",
        "name": "Blue Bird Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLBX",
        "name": "Blackboxstocks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLCM",
        "name": "Bellicum Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLCT",
        "name": "BlueCity Holdings Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "BLDE",
        "name": "Blade Air Mobility Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLDEW",
        "name": "Blade Air Mobility Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BLDP",
        "name": "Ballard Power Systems Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "BLEU",
        "name": "bleuacacia ltd Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BLEUR",
        "name": "bleuacacia ltd Rights",
        "country": "United States"
      },
      {
        "symbol": "BLEUU",
        "name": "bleuacacia ltd Unit",
        "country": "United States"
      },
      {
        "symbol": "BLEUW",
        "name": "bleuacacia ltd Warrants",
        "country": "United States"
      },
      {
        "symbol": "BLFS",
        "name": "BioLife Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLFY",
        "name": "Blue Foundry Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLI",
        "name": "Berkeley Lights Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLIN",
        "name": "Bridgeline Digital Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLKB",
        "name": "Blackbaud Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLMN",
        "name": "Bloomin' Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLNG",
        "name": "Belong Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLNGU",
        "name": "Belong Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BLNGW",
        "name": "Belong Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BLNK",
        "name": "Blink Charging Co. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLNKW",
        "name": "Blink Charging Co. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BLPH",
        "name": "Bellerophon Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLRX",
        "name": "BioLineRx Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "BLSA",
        "name": "BCLS Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BLTS",
        "name": "Bright Lights Acquisition Corp. Class A Common Stock",
        "country": ""
      },
      {
        "symbol": "BLTSU",
        "name": "Bright Lights Acquisition Corp. Unit",
        "country": ""
      },
      {
        "symbol": "BLTSW",
        "name": "Bright Lights Acquisition Corp. Warrant",
        "country": ""
      },
      {
        "symbol": "BLU",
        "name": "BELLUS Health Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "BLUE",
        "name": "bluebird bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BLZE",
        "name": "Backblaze Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMAQ",
        "name": "Blockchain Moon Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMAQR",
        "name": "Blockchain Moon Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "BMAQU",
        "name": "Blockchain Moon Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BMAQW",
        "name": "Blockchain Moon Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BMBL",
        "name": "Bumble Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMEA",
        "name": "Biomea Fusion Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMRA",
        "name": "Biomerica Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMRC",
        "name": "Bank of Marin Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BMRN",
        "name": "BioMarin Pharmaceutical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNFT",
        "name": "Benefitfocus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNGO",
        "name": "Bionano Genomics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNGOW",
        "name": "Bionano Genomics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BNIX",
        "name": "Bannix Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNIXW",
        "name": "Bannix Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BNNR",
        "name": "Banner Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNNRU",
        "name": "Banner Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BNNRW",
        "name": "Banner Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BNOX",
        "name": "Bionomics Limited American Depository Shares",
        "country": "United States"
      },
      {
        "symbol": "BNR",
        "name": "Burning Rock Biotech Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "BNSO",
        "name": "Bonso Electronics International Inc. Common Stock",
        "country": "Hong Kong"
      },
      {
        "symbol": "BNTC",
        "name": "Benitec Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BNTX",
        "name": "BioNTech SE American Depositary Share",
        "country": "Germany"
      },
      {
        "symbol": "BOCNU",
        "name": "Blue Ocean Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "BOKF",
        "name": "BOK Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BOLT",
        "name": "Bolt Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BOMN",
        "name": "Boston Omaha Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BON",
        "name": "Bon Natural Life Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BOOM",
        "name": "DMC Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BOSC",
        "name": "B.O.S. Better Online Solutions Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "BOTJ",
        "name": "Bank of the James Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BOXL",
        "name": "Boxlight Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BPACU",
        "name": "Bullpen Parlay Acquisition Company Unit",
        "country": "United States"
      },
      {
        "symbol": "BPMC",
        "name": "Blueprint Medicines Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BPOP",
        "name": "Popular Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BPOPM",
        "name": "Popular Inc. Popular Capital Trust II - 6.125% Cumulative Monthly Income Trust Preferred Securities",
        "country": "United States"
      },
      {
        "symbol": "BPRN",
        "name": "The Bank of Princeton Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BPTH",
        "name": "Bio-Path Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BPTS",
        "name": "Biophytis SA American Depositary Share",
        "country": "France"
      },
      {
        "symbol": "BPYPM",
        "name": "Brookfield Property Partners L.P. 6.25% Class A Cumulative Redeemable Preferred Units Series 1",
        "country": "Bermuda"
      },
      {
        "symbol": "BPYPN",
        "name": "Brookfield Property Partners L.P. 5.750% Class A Cumulative Redeemable Perpetual Preferred Units Series 3",
        "country": "Bermuda"
      },
      {
        "symbol": "BPYPO",
        "name": "Brookfield Property Partners L.P. 6.375% Class A Cumulative Redeemable Perpetual Preferred Units Series 2",
        "country": "Bermuda"
      },
      {
        "symbol": "BPYPP",
        "name": "Brookfield Property Partners L.P. 6.50% Class A Cumulative Redeemable Perpetual Preferred Units",
        "country": "Bermuda"
      },
      {
        "symbol": "BRAG",
        "name": "Bragg Gaming Group Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "BRCN",
        "name": "Burcon NutraScience Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "BREZ",
        "name": "Breeze Holdings Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BREZR",
        "name": "Breeze Holdings Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "BREZW",
        "name": "Breeze Holdings Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BRID",
        "name": "Bridgford Foods Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRIV",
        "name": "B. Riley Principal 250 Merger Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "BRIVU",
        "name": "B. Riley Principal 250 Merger Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BRIVW",
        "name": "B. Riley Principal 250 Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BRKHU",
        "name": "BurTech Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BRKL",
        "name": "Brookline Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRKR",
        "name": "Bruker Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRLI",
        "name": "Brilliant Acquisition Corporation Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BRLIR",
        "name": "Brilliant Acquisition Corporation Rights",
        "country": "China"
      },
      {
        "symbol": "BRLIW",
        "name": "Brilliant Acquisition Corporation Warrants",
        "country": "China"
      },
      {
        "symbol": "BRLT",
        "name": "Brilliant Earth Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BROG",
        "name": "Brooge Energy Limited Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "BROGW",
        "name": "Brooge Holdings Limited Warrant expiring 12/20/2024",
        "country": "United Kingdom"
      },
      {
        "symbol": "BRP",
        "name": "BRP Group Inc. (Insurance Company) Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRPM",
        "name": "B. Riley Principal 150 Merger Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRPMU",
        "name": "B. Riley Principal 150 Merger Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BRPMW",
        "name": "B. Riley Principal 150 Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BRQS",
        "name": "Borqs Technologies Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BRTX",
        "name": "BioRestorative Therapies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRY",
        "name": "Berry Corporation (bry) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BRZE",
        "name": "Braze Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSBK",
        "name": "Bogota Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSET",
        "name": "Bassett Furniture Industries Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSFC",
        "name": "Blue Star Foods Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSGA",
        "name": "Blue Safari Group Acquisition Corp. Class A Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "BSGAR",
        "name": "Blue Safari Group Acquisition Corp. Right",
        "country": "China"
      },
      {
        "symbol": "BSGAU",
        "name": "Blue Safari Group Acquisition Corp. Unit",
        "country": "China"
      },
      {
        "symbol": "BSGM",
        "name": "BioSig Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSKY",
        "name": "Big Sky Growth Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSKYU",
        "name": "Big Sky Growth Partners Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "BSKYW",
        "name": "Big Sky Growth Partners Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BSQR",
        "name": "BSQUARE Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSRR",
        "name": "Sierra Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BSVN",
        "name": "Bank7 Corp. Common stock",
        "country": "United States"
      },
      {
        "symbol": "BSY",
        "name": "Bentley Systems Incorporated Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTAI",
        "name": "BioXcel Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTAQ",
        "name": "Burgundy Technology Acquisition Corporation Class A Ordinary shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BTAQU",
        "name": "Burgundy Technology Acquisition Corporation Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BTAQW",
        "name": "Burgundy Technology Acquisition Corporation Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BTB",
        "name": "Bit Brother Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BTBD",
        "name": "BT Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTBDW",
        "name": "BT Brands Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BTBT",
        "name": "Bit Digital Inc. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BTCS",
        "name": "BTCS Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTCY",
        "name": "Biotricity Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTNB",
        "name": "Bridgetown 2 Holdings Limited Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "BTRS",
        "name": "BTRS Holdings Inc. Class 1 Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTTX",
        "name": "Better Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BTWN",
        "name": "Bridgetown Holdings Limited Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "BTWNU",
        "name": "Bridgetown Holdings Limited Units",
        "country": "Hong Kong"
      },
      {
        "symbol": "BTWNW",
        "name": "Bridgetown Holdings Limited Warrants",
        "country": "Hong Kong"
      },
      {
        "symbol": "BTX",
        "name": "Brooklyn ImmunoTherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BUSE",
        "name": "First Busey Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BVS",
        "name": "Bioventus Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BVXV",
        "name": "BiondVax Pharmaceuticals Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "BWAC",
        "name": "Better World Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BWACU",
        "name": "Better World Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "BWACW",
        "name": "Better World Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BWAY",
        "name": "BrainsWay Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "BWB",
        "name": "Bridgewater Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BWBBP",
        "name": "Bridgewater Bancshares Inc. Depositary Shares Each Representing a 1/100th Interest in a Share of 5.875% Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "BWC",
        "name": "Blue Whale Acquisition Corp I Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BWCAU",
        "name": "Blue Whale Acquisition Corp I Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "BWEN",
        "name": "Broadwind Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BWFG",
        "name": "Bankwell Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BWMN",
        "name": "Bowman Consulting Group Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BWMX",
        "name": "Betterware de Mexico S.A.B. de C.V. Ordinary Shares",
        "country": "Mexico"
      },
      {
        "symbol": "BXRX",
        "name": "Baudax Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BYFC",
        "name": "Broadway Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BYND",
        "name": "Beyond Meat Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BYRN",
        "name": "Byrna Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BYSI",
        "name": "BeyondSpring Inc. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BYTS",
        "name": "BYTE Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "BYTSU",
        "name": "BYTE Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "BYTSW",
        "name": "BYTE Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "BZ",
        "name": "KANZHUN LIMITED American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "BZFD",
        "name": "BuzzFeed Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "BZFDW",
        "name": "BuzzFeed Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "BZUN",
        "name": "Baozun Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "CAAS",
        "name": "China Automotive Systems Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "CABA",
        "name": "Cabaletta Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CAC",
        "name": "Camden National Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CACC",
        "name": "Credit Acceptance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CADL",
        "name": "Candel Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CAKE",
        "name": "Cheesecake Factory Incorporated (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CALA",
        "name": "Calithera Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CALB",
        "name": "California BanCorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CALM",
        "name": "Cal-Maine Foods Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CALT",
        "name": "Calliditas Therapeutics AB American Depositary Shares",
        "country": "Sweden"
      },
      {
        "symbol": "CAMP",
        "name": "CalAmp Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CAMT",
        "name": "Camtek Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CAN",
        "name": "Canaan Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "CAPR",
        "name": "Capricor Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CAR",
        "name": "Avis Budget Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CARA",
        "name": "Cara Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CARE",
        "name": "Carter Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CARG",
        "name": "CarGurus Inc. Class A Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "CARV",
        "name": "Carver Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CASA",
        "name": "Casa Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CASH",
        "name": "Meta Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CASI",
        "name": "CASI Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CASS",
        "name": "Cass Information Systems Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CASY",
        "name": "Casey's General Stores Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CATC",
        "name": "Cambridge Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CATY",
        "name": "Cathay General Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBAN",
        "name": "Colony Bankcorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBAT",
        "name": "CBAK Energy Technology Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "CBAY",
        "name": "CymaBay Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBFV",
        "name": "CB Financial Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBIO",
        "name": "Catalyst Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBNK",
        "name": "Capital Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBRG",
        "name": "Chain Bridge I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CBRGU",
        "name": "Chain Bridge I Units",
        "country": "United States"
      },
      {
        "symbol": "CBRGW",
        "name": "Chain Bridge I Warrants",
        "country": "United States"
      },
      {
        "symbol": "CBRL",
        "name": "Cracker Barrel Old Country Store Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBSH",
        "name": "Commerce Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CBTX",
        "name": "CBTX Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCAI",
        "name": "Cascadia Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCAIU",
        "name": "Cascadia Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CCAIW",
        "name": "Cascadia Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CCAP",
        "name": "Crescent Capital BDC Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "CCB",
        "name": "Coastal Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCBG",
        "name": "Capital City Bank Group Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCCC",
        "name": "C4 Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCD",
        "name": "Calamos Dynamic Convertible & Income Fund Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCEL",
        "name": "Cryo-Cell International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCEP",
        "name": "Coca-Cola Europacific Partners plc Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "CCLP",
        "name": "CSI Compressco LP Common Units",
        "country": "United States"
      },
      {
        "symbol": "CCMP",
        "name": "CMC Materials Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCNC",
        "name": "Code Chain New Continent Limited Common Stock",
        "country": "China"
      },
      {
        "symbol": "CCNE",
        "name": "CNB Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCNEP",
        "name": "CNB Financial Corporation Depositary Shares each representing a 1/40th ownership interest in a share of 7.125% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CCOI",
        "name": "Cogent Communications Holdings Inc.",
        "country": "United States"
      },
      {
        "symbol": "CCRN",
        "name": "Cross Country Healthcare Inc. Common Stock $0.0001 Par Value",
        "country": "United States"
      },
      {
        "symbol": "CCSI",
        "name": "Consensus Cloud Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CCTS",
        "name": "Cactus Acquisition Corp. 1 Limited Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "CCTSW",
        "name": "Cactus Acquisition Corp. 1 Limited Warrant",
        "country": "United States"
      },
      {
        "symbol": "CCXI",
        "name": "ChemoCentryx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CD",
        "name": "Chindata Group Holdings Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "CDAK",
        "name": "Codiak BioSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDAQ",
        "name": "Compass Digital Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CDAQU",
        "name": "Compass Digital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CDAQW",
        "name": "Compass Digital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CDEV",
        "name": "Centennial Resource Development Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDK",
        "name": "CDK Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDLX",
        "name": "Cardlytics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDMO",
        "name": "Avid Bioservices Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDNA",
        "name": "CareDx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDNS",
        "name": "Cadence Design Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDRO",
        "name": "Codere Online Luxembourg S.A. Ordinary Shares",
        "country": "Luxembourg"
      },
      {
        "symbol": "CDROW",
        "name": "Codere Online Luxembourg S.A. Warrants",
        "country": "Luxembourg"
      },
      {
        "symbol": "CDTX",
        "name": "Cidara Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDW",
        "name": "CDW Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDXC",
        "name": "ChromaDex Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDXS",
        "name": "Codexis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDZI",
        "name": "CADIZ Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CDZIP",
        "name": "Cadiz Inc. Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "CECE",
        "name": "CECO Environmental Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CELC",
        "name": "Celcuity Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CELH",
        "name": "Celsius Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CELU",
        "name": "Celularity Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CELUW",
        "name": "Celularity Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CELZ",
        "name": "Creative Medical Technology Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CEMI",
        "name": "Chembio Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CENQ",
        "name": "CENAQ Energy Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CENQW",
        "name": "CENAQ Energy Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CENT",
        "name": "Central Garden & Pet Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CENTA",
        "name": "Central Garden & Pet Company Class A Common Stock Nonvoting",
        "country": "United States"
      },
      {
        "symbol": "CENX",
        "name": "Century Aluminum Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CERE",
        "name": "Cerevel Therapeutics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CERN",
        "name": "Cerner Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CERS",
        "name": "Cerus Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CERT",
        "name": "Certara Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CETX",
        "name": "Cemtrex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CETXP",
        "name": "Cemtrex Inc. Series 1 Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CETXW",
        "name": "Cemtrex Inc. Series 1 Warrant",
        "country": "United States"
      },
      {
        "symbol": "CEVA",
        "name": "CEVA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFB",
        "name": "CrossFirst Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFBK",
        "name": "CF Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFFE",
        "name": "CF Acquisition Corp. VIII Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFFEU",
        "name": "CF Acquisition Corp. VIII Unit",
        "country": "United States"
      },
      {
        "symbol": "CFFEW",
        "name": "CF Acquisition Corp. VIII Warrant",
        "country": "United States"
      },
      {
        "symbol": "CFFI",
        "name": "C&F Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFFN",
        "name": "Capitol Federal Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFFSU",
        "name": "CF Acquisition Corp. VII Unit",
        "country": "United States"
      },
      {
        "symbol": "CFFVW",
        "name": "CF Acquisition Corp. V Warrant",
        "country": "United States"
      },
      {
        "symbol": "CFIV",
        "name": "CF Acquisition Corp. IV Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "CFIVU",
        "name": "CF Acquisition Corp. IV Unit",
        "country": "United States"
      },
      {
        "symbol": "CFIVW",
        "name": "CF Acquisition Corp. IV Warrant",
        "country": "United States"
      },
      {
        "symbol": "CFLT",
        "name": "Confluent Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFMS",
        "name": "Conformis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFRX",
        "name": "ContraFect Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFV",
        "name": "CF Acquisition Corp. V Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFVI",
        "name": "CF Acquisition Corp. VI Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CFVIU",
        "name": "CF Acquisition Corp. VI Unit",
        "country": "United States"
      },
      {
        "symbol": "CFVIW",
        "name": "CF Acquisition Corp. VI Warrant",
        "country": "United States"
      },
      {
        "symbol": "CG",
        "name": "The Carlyle Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGABL",
        "name": "The Carlyle Group Inc. 4.625% Subordinated Notes due 2061",
        "country": "United States"
      },
      {
        "symbol": "CGBD",
        "name": "TCG BDC Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGC",
        "name": "Canopy Growth Corporation Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "CGEM",
        "name": "Cullinan Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGEN",
        "name": "Compugen Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CGNT",
        "name": "Cognyte Software Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CGNX",
        "name": "Cognex Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGO",
        "name": "Calamos Global Total Return Fund Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGRN",
        "name": "Capstone Green Energy Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CGTX",
        "name": "Cognition Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHCI",
        "name": "Comstock Holding Companies Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHCO",
        "name": "City Holding Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHDN",
        "name": "Churchill Downs Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHEF",
        "name": "The Chefs' Warehouse Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHEK",
        "name": "Check-Cap Ltd. Ordinary Share",
        "country": "Israel"
      },
      {
        "symbol": "CHEKZ",
        "name": "Check-Cap Ltd. Series C Warrant",
        "country": "Israel"
      },
      {
        "symbol": "CHI",
        "name": "Calamos Convertible Opportunities and Income Fund Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHK",
        "name": "Chesapeake Energy Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHKEL",
        "name": "Chesapeake Energy Corporation Class C Warrants",
        "country": "United States"
      },
      {
        "symbol": "CHKEW",
        "name": "Chesapeake Energy Corporation Class A Warrants",
        "country": "United States"
      },
      {
        "symbol": "CHKEZ",
        "name": "Chesapeake Energy Corporation Class B Warrants",
        "country": "United States"
      },
      {
        "symbol": "CHKP",
        "name": "Check Point Software Technologies Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CHMG",
        "name": "Chemung Financial Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHNG",
        "name": "Change Healthcare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHNGU",
        "name": "Change Healthcare Inc. Tangible Equity Units",
        "country": "United States"
      },
      {
        "symbol": "CHNR",
        "name": "China Natural Resources Inc. Common Stock",
        "country": "Hong Kong"
      },
      {
        "symbol": "CHPM",
        "name": "CHP Merger Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHPMU",
        "name": "CHP Merger Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CHPMW",
        "name": "CHP Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CHRS",
        "name": "Coherus BioSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHRW",
        "name": "C.H. Robinson Worldwide Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHSCL",
        "name": "CHS Inc Class B Cumulative Redeemable Preferred Stock Series 4",
        "country": "United States"
      },
      {
        "symbol": "CHSCM",
        "name": "CHS Inc Class B Reset Rate Cumulative Redeemable Preferred Stock Series 3",
        "country": "United States"
      },
      {
        "symbol": "CHSCN",
        "name": "CHS Inc Preferred Class B Series 2 Reset Rate",
        "country": "United States"
      },
      {
        "symbol": "CHSCO",
        "name": "CHS Inc. Class B Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CHSCP",
        "name": "CHS Inc. 8%  Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CHTR",
        "name": "Charter Communications Inc. Class A Common Stock New",
        "country": "United States"
      },
      {
        "symbol": "CHUY",
        "name": "Chuy's Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHW",
        "name": "Calamos Global Dynamic Income Fund Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CHWA",
        "name": "CHW Acquisition Corporation Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "CHWAU",
        "name": "CHW Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "CHWAW",
        "name": "CHW Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "CHX",
        "name": "ChampionX Corporation Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "CHY",
        "name": "Calamos Convertible and High Income Fund Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CIDM",
        "name": "Cinedigm Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CIFR",
        "name": "Cipher Mining Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CIFRW",
        "name": "Cipher Mining Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CIGI",
        "name": "Colliers International Group Inc. Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "CIH",
        "name": "China Index Holdings Limited American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "CIIG",
        "name": "CIIG Capital Partners II Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CIIGU",
        "name": "CIIG Capital Partners II Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "CIIGW",
        "name": "CIIG Capital Partners II Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CINC",
        "name": "CinCor Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CINF",
        "name": "Cincinnati Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CING",
        "name": "Cingulate Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CINGW",
        "name": "Cingulate Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "CISO",
        "name": "Cerberus Cyber Sentinel Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CITEU",
        "name": "Cartica Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "CIVB",
        "name": "Civista Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CIZN",
        "name": "Citizens Holding Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CJJD",
        "name": "China Jo-Jo Drugstores Inc. (Cayman Islands) Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "CKPT",
        "name": "Checkpoint Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLAQ",
        "name": "CleanTech Acquisition Corp. Common stock",
        "country": "United States"
      },
      {
        "symbol": "CLAQR",
        "name": "CleanTech Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "CLAQU",
        "name": "CleanTech Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "CLAQW",
        "name": "CleanTech Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CLAR",
        "name": "Clarus Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLAY",
        "name": "Chavant Capital Acquisition Corp. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CLAYU",
        "name": "Chavant Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CLAYW",
        "name": "Chavant Capital Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "CLBK",
        "name": "Columbia Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLBS",
        "name": "Caladrius Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLBT",
        "name": "Cellebrite DI Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CLBTW",
        "name": "Cellebrite DI Ltd. Warrants",
        "country": "Israel"
      },
      {
        "symbol": "CLDX",
        "name": "Celldex Therapeutics Inc.",
        "country": "United States"
      },
      {
        "symbol": "CLEU",
        "name": "China Liberal Education Holdings Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "CLFD",
        "name": "Clearfield Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLGN",
        "name": "CollPlant Biotechnologies Ltd Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CLIR",
        "name": "ClearSign Technologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLLS",
        "name": "Cellectis S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "CLMT",
        "name": "Calumet Specialty Products Partners L.P. Common Units",
        "country": "United States"
      },
      {
        "symbol": "CLNE",
        "name": "Clean Energy Fuels Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLNN",
        "name": "Clene Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLNNW",
        "name": "Clene Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CLOE",
        "name": "Clover Leaf Capital Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLOER",
        "name": "Clover Leaf Capital Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "CLOEU",
        "name": "Clover Leaf Capital Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CLOV",
        "name": "Clover Health Investments Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLPS",
        "name": "CLPS Incorporation Common Stock",
        "country": "China"
      },
      {
        "symbol": "CLPT",
        "name": "ClearPoint Neuro Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLRB",
        "name": "Cellectar Biosciences Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLRM",
        "name": "Clarim Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLRMU",
        "name": "Clarim Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CLRMW",
        "name": "Clarim Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CLRO",
        "name": "ClearOne Inc. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLSD",
        "name": "Clearside Biomedical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLSK",
        "name": "CleanSpark Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLSN",
        "name": "Celsion Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLST",
        "name": "Catalyst Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLVR",
        "name": "Clever Leaves Holdings Inc. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "CLVRW",
        "name": "Clever Leaves Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CLVS",
        "name": "Clovis Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CLWT",
        "name": "Euro Tech Holdings Company Limited Common Stock",
        "country": "Hong Kong"
      },
      {
        "symbol": "CLXT",
        "name": "Calyxt Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMAX",
        "name": "CareMax Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMAXW",
        "name": "CareMax Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CMBM",
        "name": "Cambium Networks Corporation Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "CMCAU",
        "name": "Capitalworks Emerging Markets Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "CMCO",
        "name": "Columbus McKinnon Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMCSA",
        "name": "Comcast Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMCT",
        "name": "CIM Commercial Trust Corporation Common stock",
        "country": "United States"
      },
      {
        "symbol": "CMCTP",
        "name": "CIM Commercial Trust Corporation Series L Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CME",
        "name": "CME Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMLS",
        "name": "Cumulus Media Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMMB",
        "name": "Chemomab Therapeutics Ltd. American Depositary Share",
        "country": "Israel"
      },
      {
        "symbol": "CMPI",
        "name": "Checkmate Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMPO",
        "name": "CompoSecure Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMPOW",
        "name": "CompoSecure Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CMPR",
        "name": "Cimpress plc Ordinary Shares (Ireland)",
        "country": "Netherlands"
      },
      {
        "symbol": "CMPS",
        "name": "COMPASS Pathways Plc American Depository Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "CMPX",
        "name": "Compass Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMRX",
        "name": "Chimerix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CMTL",
        "name": "Comtech Telecommunications Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNCE",
        "name": "Concert Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNDT",
        "name": "Conduent Incorporated Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "CNET",
        "name": "ZW Data Action Technologies Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "CNEY",
        "name": "CN Energy Group Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "CNFR",
        "name": "Conifer Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNFRL",
        "name": "Conifer Holdings Inc. 6.75% Senior Unsecured Notes due 2023",
        "country": "United States"
      },
      {
        "symbol": "CNGLU",
        "name": "Canna-Global Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "CNNB",
        "name": "Cincinnati Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNOB",
        "name": "ConnectOne Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNOBP",
        "name": "ConnectOne Bancorp Inc. Depositary Shares each representing a 1/40th interest in a share of 5.25% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "CNSL",
        "name": "Consolidated Communications Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNSP",
        "name": "CNS Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNTA",
        "name": "Centessa Pharmaceuticals plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "CNTB",
        "name": "Connect Biopharma Holdings Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "CNTG",
        "name": "Centogene N.V. Common Shares",
        "country": "Germany"
      },
      {
        "symbol": "CNTQ",
        "name": "Chardan NexTech Acquisition 2 Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNTQU",
        "name": "Chardan NexTech Acquisition 2 Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CNTQW",
        "name": "Chardan NexTech Acquisition 2 Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CNTX",
        "name": "Context Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNTY",
        "name": "Century Casinos Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNXC",
        "name": "Concentrix Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CNXN",
        "name": "PC Connection Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COCO",
        "name": "The Vita Coco Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COCP",
        "name": "Cocrystal Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CODA",
        "name": "Coda Octopus Group Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "CODX",
        "name": "Co-Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COFS",
        "name": "ChoiceOne Financial Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COGT",
        "name": "Cogent Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COHR",
        "name": "Coherent Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COHU",
        "name": "Cohu Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COIN",
        "name": "Coinbase Global Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COKE",
        "name": "Coca-Cola Consolidated Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COLB",
        "name": "Columbia Banking System Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COLI",
        "name": "Colicity Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COLIU",
        "name": "Colicity Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "COLIW",
        "name": "Colicity Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "COLL",
        "name": "Collegium Pharmaceutical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COLM",
        "name": "Columbia Sportswear Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COMM",
        "name": "CommScope Holding Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COMS",
        "name": "ComSovereign Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COMSP",
        "name": "ComSovereign Holding Corp. 9.25% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "COMSW",
        "name": "ComSovereign Holding Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "CONE",
        "name": "CyrusOne Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CONN",
        "name": "Conn's Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CONX",
        "name": "CONX Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CONXU",
        "name": "CONX Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CONXW",
        "name": "CONX Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "COOL",
        "name": "Corner Growth Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "COOLU",
        "name": "Corner Growth Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "COOLW",
        "name": "Corner Growth Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "COOP",
        "name": "Mr. Cooper Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CORT",
        "name": "Corcept Therapeutics Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COST",
        "name": "Costco Wholesale Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COUP",
        "name": "Coupa Software Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COVA",
        "name": "COVA Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "COVAU",
        "name": "COVA Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "COVAW",
        "name": "COVA Acquisition Corp. Warrants to purchase Class A ordinary shares",
        "country": "United States"
      },
      {
        "symbol": "COWN",
        "name": "Cowen Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "COWNL",
        "name": "Cowen Inc. 7.75% Senior Notes due 2033",
        "country": "United States"
      },
      {
        "symbol": "CPAR",
        "name": "Catalyst Partners Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "CPARU",
        "name": "Catalyst Partners Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "CPARW",
        "name": "Catalyst Partners Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CPHC",
        "name": "Canterbury Park Holding Corporation 'New' Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPIX",
        "name": "Cumberland Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPLP",
        "name": "Capital Product Partners L.P. Common Units",
        "country": "Greece"
      },
      {
        "symbol": "CPOP",
        "name": "Pop Culture Group Co. Ltd Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "CPRT",
        "name": "Copart Inc. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPRX",
        "name": "Catalyst Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPSH",
        "name": "CPS Technologies Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPSI",
        "name": "Computer Programs and Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPSS",
        "name": "Consumer Portfolio Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CPTAG",
        "name": "Capitala Finance Corp. 5.75% Convertible Notes Due 2022",
        "country": "United States"
      },
      {
        "symbol": "CPTAL",
        "name": "Capitala Finance Corp. 6% Notes Due 2022",
        "country": "United States"
      },
      {
        "symbol": "CPZ",
        "name": "Calamos Long/Short Equity & Dynamic Income Trust Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRAI",
        "name": "CRA International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRBP",
        "name": "Corbus Pharmaceuticals Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRBU",
        "name": "Caribou Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRCT",
        "name": "Cricut Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRDF",
        "name": "Cardiff Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRDL",
        "name": "Cardiol Therapeutics Inc. Class A Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "CREC",
        "name": "Crescera Capital Acquisition Corp Class A Ordinary Shares",
        "country": "Brazil"
      },
      {
        "symbol": "CRECU",
        "name": "Crescera Capital Acquisition Corp Unit",
        "country": "Brazil"
      },
      {
        "symbol": "CRECW",
        "name": "Crescera Capital Acquisition Corp Warrant",
        "country": "Brazil"
      },
      {
        "symbol": "CREG",
        "name": "China Recycling Energy Corporation Common Stock",
        "country": "China"
      },
      {
        "symbol": "CRESW",
        "name": "Cresud S.A.C.I.F. y A. Warrant",
        "country": "Argentina"
      },
      {
        "symbol": "CRESY",
        "name": "Cresud S.A.C.I.F. y A. American Depositary Shares",
        "country": "Argentina"
      },
      {
        "symbol": "CREX",
        "name": "Creative Realities Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CREXW",
        "name": "Creative Realities Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CRIS",
        "name": "Curis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRKN",
        "name": "Crown Electrokinetics Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRMD",
        "name": "CorMedix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRMT",
        "name": "America's Car-Mart Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRNC",
        "name": "Cerence Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRNT",
        "name": "Ceragon Networks Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CRNX",
        "name": "Crinetics Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRON",
        "name": "Cronos Group Inc. Common Share",
        "country": "Canada"
      },
      {
        "symbol": "CROX",
        "name": "Crocs Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRSP",
        "name": "CRISPR Therapeutics AG Common Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "CRSR",
        "name": "Corsair Gaming Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRTD",
        "name": "Creatd Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRTDW",
        "name": "Creatd Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CRTO",
        "name": "Criteo S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "CRTX",
        "name": "Cortexyme Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRUS",
        "name": "Cirrus Logic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRVL",
        "name": "CorVel Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRVS",
        "name": "Corvus Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRWD",
        "name": "CrowdStrike Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRWS",
        "name": "Crown Crafts Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRXT",
        "name": "Clarus Therapeutics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CRXTW",
        "name": "Clarus Therapeutics Holdings Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "CRZN",
        "name": "Corazon Capital V838 Monoceros Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CRZNW",
        "name": "Corazon Capital V838 Monoceros Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "CSBR",
        "name": "Champions Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSCO",
        "name": "Cisco Systems Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "CSCW",
        "name": "Color Star Technology Co. Ltd. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CSGP",
        "name": "CoStar Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSGS",
        "name": "CSG Systems International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSII",
        "name": "Cardiovascular Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSIQ",
        "name": "Canadian Solar Inc. Common Shares (BC)",
        "country": "China"
      },
      {
        "symbol": "CSPI",
        "name": "CSP Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSQ",
        "name": "Calamos Strategic Total Return Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSSE",
        "name": "Chicken Soup for the Soul Entertainment Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSSEN",
        "name": "Chicken Soup for the Soul Entertainment Inc. 9.50% Notes due 2025",
        "country": "United States"
      },
      {
        "symbol": "CSSEP",
        "name": "Chicken Soup for the Soul Entertainment Inc. 9.75% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CSTE",
        "name": "Caesarstone Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CSTL",
        "name": "Castle Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSTR",
        "name": "CapStar Financial Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSWC",
        "name": "Capital Southwest Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSWI",
        "name": "CSW Industrials Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CSX",
        "name": "CSX Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTAQ",
        "name": "Carney Technology Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTAQU",
        "name": "Carney Technology Acquisition Corp. II Units",
        "country": "United States"
      },
      {
        "symbol": "CTAQW",
        "name": "Carney Technology Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "CTAS",
        "name": "Cintas Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTBI",
        "name": "Community Trust Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTG",
        "name": "Computer Task Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTHR",
        "name": "Charles & Colvard Ltd Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTIB",
        "name": "Yunhong CTI Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTIC",
        "name": "CTI BioPharma Corp. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTKB",
        "name": "Cytek Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTLP",
        "name": "Cantaloupe Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTMX",
        "name": "CytomX Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTRE",
        "name": "CareTrust REIT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTRM",
        "name": "Castor Maritime Inc. Common Shares",
        "country": "Cyprus"
      },
      {
        "symbol": "CTRN",
        "name": "Citi Trends Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTSH",
        "name": "Cognizant Technology Solutions Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTSO",
        "name": "Cytosorbents Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTXR",
        "name": "Citius Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CTXRW",
        "name": "Citius Pharmaceuticals Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CTXS",
        "name": "Citrix Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CUBA",
        "name": "Herzfeld Caribbean Basin Fund Inc. (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CUE",
        "name": "Cue Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CUEN",
        "name": "Cuentas Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CUENW",
        "name": "Cuentas Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CULL",
        "name": "Cullman Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CURI",
        "name": "CuriosityStream Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CURIW",
        "name": "CuriosityStream Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CUTR",
        "name": "Cutera Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVAC",
        "name": "CureVac N.V. Ordinary Shares",
        "country": "Germany"
      },
      {
        "symbol": "CVBF",
        "name": "CVB Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVCO",
        "name": "Cavco Industries Inc. Common Stock When Issued",
        "country": "United States"
      },
      {
        "symbol": "CVCY",
        "name": "Central Valley Community Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVET",
        "name": "Covetrus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVGI",
        "name": "Commercial Vehicle Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVGW",
        "name": "Calavo Growers Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVLG",
        "name": "Covenant Logistics Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVLT",
        "name": "Commvault Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVLY",
        "name": "Codorus Valley Bancorp Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVRX",
        "name": "CVRx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVT",
        "name": "Cvent Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CVV",
        "name": "CVD Equipment Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CWBC",
        "name": "Community West Bancshares Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CWBR",
        "name": "CohBar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CWCO",
        "name": "Consolidated Water Co. Ltd. Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "CWST",
        "name": "Casella Waste Systems Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CXDO",
        "name": "Crexendo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYAD",
        "name": "Celyad Oncology SA American Depositary Shares",
        "country": "Belgium"
      },
      {
        "symbol": "CYAN",
        "name": "Cyanotech Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYBE",
        "name": "CyberOptics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYBR",
        "name": "CyberArk Software Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "CYCC",
        "name": "Cyclacel Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYCCP",
        "name": "Cyclacel Pharmaceuticals Inc. 6% Convertible Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "CYCN",
        "name": "Cyclerion Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYN",
        "name": "Cyngn Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYRN",
        "name": "CYREN Ltd. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "CYRX",
        "name": "CryoPort Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYT",
        "name": "Cyteir Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYTH",
        "name": "Cyclo Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYTHW",
        "name": "Cyclo Therapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CYTK",
        "name": "Cytokinetics Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYTO",
        "name": "Altamira Therapeutics Ltd. Common Shares 0.01 SF (Bermuda)",
        "country": "Bermuda"
      },
      {
        "symbol": "CYXT",
        "name": "Cyxtera Technologies Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CYXTW",
        "name": "Cyxtera Technologies Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "CZNC",
        "name": "Citizens & Northern Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CZR",
        "name": "Caesars Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "CZWI",
        "name": "Citizens Community Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DADA",
        "name": "Dada Nexus Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "DAIO",
        "name": "Data I/O Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DAKT",
        "name": "Daktronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DALN",
        "name": "DallasNews Corporation Series A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DALS",
        "name": "DA32 Life Science Tech Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DAOOU",
        "name": "Crypto 1 Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "DARE",
        "name": "Dare Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DATS",
        "name": "DatChat Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DATSW",
        "name": "DatChat Inc. Series A Warrant",
        "country": "United States"
      },
      {
        "symbol": "DAVE",
        "name": "Dave Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DAVEW",
        "name": "Dave Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "DAWN",
        "name": "Day One Biopharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DBGI",
        "name": "Digital Brands Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DBGIW",
        "name": "Digital Brands Group Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DBTX",
        "name": "Decibel Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DBVT",
        "name": "DBV Technologies S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "DBX",
        "name": "Dropbox Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DCBO",
        "name": "Docebo Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "DCGO",
        "name": "DocGo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DCGOW",
        "name": "DocGo Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "DCOM",
        "name": "Dime Community Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DCOMP",
        "name": "Dime Community Bancshares Inc. Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "DCPH",
        "name": "Deciphera Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DCRD",
        "name": "Decarbonization Plus Acquisition Corporation IV Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "DCRDU",
        "name": "Decarbonization Plus Acquisition Corporation IV Unit",
        "country": "United States"
      },
      {
        "symbol": "DCRDW",
        "name": "Decarbonization Plus Acquisition Corporation IV Warrant",
        "country": "United States"
      },
      {
        "symbol": "DCRN",
        "name": "Decarbonization Plus Acquisition Corporation II Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "DCRNU",
        "name": "Decarbonization Plus Acquisition Corporation II Unit",
        "country": "United States"
      },
      {
        "symbol": "DCRNW",
        "name": "Decarbonization Plus Acquisition Corporation II Warrant",
        "country": "United States"
      },
      {
        "symbol": "DCT",
        "name": "Duck Creek Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DCTH",
        "name": "Delcath Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DDI",
        "name": "DoubleDown Interactive Co. Ltd. American Depository Shares",
        "country": "South Korea"
      },
      {
        "symbol": "DDOG",
        "name": "Datadog Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DENN",
        "name": "Denny's Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DERM",
        "name": "Journey Medical Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DFFN",
        "name": "Diffusion Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DFH",
        "name": "Dream Finders Homes Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DGHI",
        "name": "Digihost Technology Inc. Common Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "DGICA",
        "name": "Donegal Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DGICB",
        "name": "Donegal Group Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DGII",
        "name": "Digi International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DGLY",
        "name": "Digital Ally Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DGNU",
        "name": "Dragoneer Growth Opportunities Corp. III Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DH",
        "name": "Definitive Healthcare Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DHAC",
        "name": "Digital Health Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DHACU",
        "name": "Digital Health Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DHACW",
        "name": "Digital Health Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DHBC",
        "name": "DHB Capital Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "DHBCU",
        "name": "DHB Capital Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DHBCW",
        "name": "DHB Capital Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DHC",
        "name": "Diversified Healthcare Trust Common Shares of Beneficial Interest",
        "country": "United States"
      },
      {
        "symbol": "DHCA",
        "name": "DHC Acquisition Corp. Class A ordinary share",
        "country": "United States"
      },
      {
        "symbol": "DHCAU",
        "name": "DHC Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DHCAW",
        "name": "DHC Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DHCNI",
        "name": "Diversified Healthcare Trust 5.625% Senior Notes due 2042",
        "country": "United States"
      },
      {
        "symbol": "DHCNL",
        "name": "Diversified Healthcare Trust 6.25% Senior Notes Due 2046",
        "country": "United States"
      },
      {
        "symbol": "DHHC",
        "name": "DiamondHead Holdings Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DHHCU",
        "name": "DiamondHead Holdings Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DHHCW",
        "name": "DiamondHead Holdings Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DHIL",
        "name": "Diamond Hill Investment Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DIBS",
        "name": "1stdibs.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DICE",
        "name": "DICE Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DILAW",
        "name": "DILA Capital Acquisition Corp. Warrant",
        "country": "Mexico"
      },
      {
        "symbol": "DIOD",
        "name": "Diodes Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DISA",
        "name": "Disruptive Acquisition Corporation I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DISAU",
        "name": "Disruptive Acquisition Corporation I Unit",
        "country": "United States"
      },
      {
        "symbol": "DISCA",
        "name": "Discovery Inc. Series A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DISCB",
        "name": "Discovery Inc. Series B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DISCK",
        "name": "Discovery Inc. Series C Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DISH",
        "name": "DISH Network Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DJCO",
        "name": "Daily Journal Corp. (S.C.) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DKDCA",
        "name": "Data Knights Acquisition Corp. Class A Common Stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "DKDCW",
        "name": "Data Knights Acquisition Corp. Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "DKNG",
        "name": "DraftKings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DLCA",
        "name": "Deep Lake Capital Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DLCAU",
        "name": "Deep Lake Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DLCAW",
        "name": "Deep Lake Capital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DLHC",
        "name": "DLH Holdings Corp.",
        "country": "United States"
      },
      {
        "symbol": "DLO",
        "name": "DLocal Limited Class A Common Shares",
        "country": "Uruguay"
      },
      {
        "symbol": "DLPN",
        "name": "Dolphin Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DLTH",
        "name": "Duluth Holdings Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DLTR",
        "name": "Dollar Tree Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DMAC",
        "name": "DiaMedica Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DMAQ",
        "name": "Deep Medicine Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DMAQR",
        "name": "Deep Medicine Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "DMLP",
        "name": "Dorchester Minerals L.P. Common Units Representing Limited Partnership Interests",
        "country": "United States"
      },
      {
        "symbol": "DMRC",
        "name": "Digimarc Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DMTK",
        "name": "DermTech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DNAA",
        "name": "Social Capital Suvretta Holdings Corp. I Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "DNAB",
        "name": "Social Capital Suvretta Holdings Corp. II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DNAC",
        "name": "Social Capital Suvretta Holdings Corp. III Class A ordinary shares",
        "country": "United States"
      },
      {
        "symbol": "DNAD",
        "name": "Social Capital Suvretta Holdings Corp. IV Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DNAY",
        "name": "Codex DNA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DNLI",
        "name": "Denali Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DNUT",
        "name": "Krispy Kreme Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DOCU",
        "name": "DocuSign Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DOGZ",
        "name": "Dogness (International) Corporation Class A Common Stock",
        "country": "China"
      },
      {
        "symbol": "DOMO",
        "name": "Domo Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DOOO",
        "name": "BRP Inc. (Recreational Products) Common Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "DORM",
        "name": "Dorman Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DOX",
        "name": "Amdocs Limited Ordinary Shares",
        "country": "Guernsey"
      },
      {
        "symbol": "DOYU",
        "name": "DouYu International Holdings Limited ADS",
        "country": "China"
      },
      {
        "symbol": "DPCS",
        "name": "DP Cap Acquisition Corp I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DPCSU",
        "name": "DP Cap Acquisition Corp I Unit",
        "country": "United States"
      },
      {
        "symbol": "DPCSW",
        "name": "DP Cap Acquisition Corp I Warrants",
        "country": "United States"
      },
      {
        "symbol": "DPRO",
        "name": "Draganfly Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "DRAY",
        "name": "Macondray Capital Acquisition Corp. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DRAYU",
        "name": "Macondray Capital Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "DRAYW",
        "name": "Macondray Capital Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "DRIO",
        "name": "DarioHealth Corp. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "DRMA",
        "name": "Dermata Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DRMAW",
        "name": "Dermata Therapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DRRX",
        "name": "DURECT Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DRTT",
        "name": "DIRTT Environmental Solutions Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "DRUG",
        "name": "Bright Minds Biosciences Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "DRVN",
        "name": "Driven Brands Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DSAC",
        "name": "Duddell Street Acquisition Corp. Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "DSACW",
        "name": "Duddell Street Acquisition Corp. Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "DSEY",
        "name": "Diversey Holdings Ltd. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "DSGN",
        "name": "Design Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DSGX",
        "name": "Descartes Systems Group Inc. (The) Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "DSKE",
        "name": "Daseke Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DSKEW",
        "name": "Daseke Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DSP",
        "name": "Viant Technology Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DSWL",
        "name": "Deswell Industries Inc. Common Shares",
        "country": "Macau"
      },
      {
        "symbol": "DTEA",
        "name": "DAVIDsTEA Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "DTIL",
        "name": "Precision BioSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DTOC",
        "name": "Digital Transformation Opportunities Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DTOCU",
        "name": "Digital Transformation Opportunities Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "DTOCW",
        "name": "Digital Transformation Opportunities Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DTRT",
        "name": "DTRT Health Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DTRTU",
        "name": "DTRT Health Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "DTRTW",
        "name": "DTRT Health Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "DTSS",
        "name": "Datasea Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "DTST",
        "name": "Data Storage Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DTSTW",
        "name": "Data Storage Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "DUNE",
        "name": "Dune Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DUNEU",
        "name": "Dune Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "DUNEW",
        "name": "Dune Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "DUO",
        "name": "Fangdd Network Group Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "DUOL",
        "name": "Duolingo Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DUOT",
        "name": "Duos Technologies Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DVAX",
        "name": "Dynavax Technologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DWAC",
        "name": "Digital World Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DWACU",
        "name": "Digital World Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "DWACW",
        "name": "Digital World Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "DWSN",
        "name": "Dawson Geophysical Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DXCM",
        "name": "DexCom Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DXLG",
        "name": "Destination XL Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DXPE",
        "name": "DXP Enterprises Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DXYN",
        "name": "Dixie Group Inc. (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DYAI",
        "name": "Dyadic International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DYN",
        "name": "Dyne Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DYNS",
        "name": "Dynamics Special Purpose Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DYNT",
        "name": "Dynatronics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "DZSI",
        "name": "DZS Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EA",
        "name": "Electronic Arts Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EAC",
        "name": "Edify Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EACPU",
        "name": "Edify Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "EACPW",
        "name": "Edify Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EAR",
        "name": "Eargo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EAST",
        "name": "Eastside Distilling Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBAC",
        "name": "European Biotech Acquisition Corp. Class A Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "EBACU",
        "name": "European Biotech Acquisition Corp. Units",
        "country": "Netherlands"
      },
      {
        "symbol": "EBACW",
        "name": "European Biotech Acquisition Corp. Warrant",
        "country": "Netherlands"
      },
      {
        "symbol": "EBAY",
        "name": "eBay Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBC",
        "name": "Eastern Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBET",
        "name": "Esports Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBIX",
        "name": "Ebix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBMT",
        "name": "Eagle Bancorp Montana Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EBON",
        "name": "Ebang International Holdings Inc. Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "EBTC",
        "name": "Enterprise Bancorp Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ECOL",
        "name": "US Ecology Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ECOLW",
        "name": "US Ecology Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ECOR",
        "name": "electroCore Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ECPG",
        "name": "Encore Capital Group Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EDAP",
        "name": "EDAP TMS S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "EDIT",
        "name": "Editas Medicine Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EDNC",
        "name": "Endurance Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "EDNCU",
        "name": "Endurance Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "EDNCW",
        "name": "Endurance Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EDRY",
        "name": "EuroDry Ltd. Common Shares ",
        "country": "Greece"
      },
      {
        "symbol": "EDSA",
        "name": "Edesa Biotech Inc. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "EDTK",
        "name": "Skillful Craftsman Education Technology Limited Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "EDTX",
        "name": "EdtechX Holdings Acquisition Corp. II Class A common stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "EDTXU",
        "name": "EdtechX Holdings Acquisition Corp. II Unit",
        "country": "United Kingdom"
      },
      {
        "symbol": "EDTXW",
        "name": "EdtechX Holdings Acquisition Corp. II Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "EDUC",
        "name": "Educational Development Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EEFT",
        "name": "Euronet Worldwide Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EEIQ",
        "name": "Elite Education Group International Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EFOI",
        "name": "Energy Focus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EFSC",
        "name": "Enterprise Financial Services Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EFSCP",
        "name": "Enterprise Financial Services Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 5% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "EFTR",
        "name": "eFFECTOR Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EFTRW",
        "name": "eFFECTOR Therapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EGAN",
        "name": "eGain Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EGBN",
        "name": "Eagle Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EGLE",
        "name": "Eagle Bulk Shipping Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EGLX",
        "name": "Enthusiast Gaming Holdings Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "EGRX",
        "name": "Eagle Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EH",
        "name": "EHang Holdings Limited ADS",
        "country": "China"
      },
      {
        "symbol": "EHTH",
        "name": "eHealth Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EIGR",
        "name": "Eiger BioPharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EJFA",
        "name": "EJF Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "EJFAU",
        "name": "EJF Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "EJFAW",
        "name": "EJF Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EJH",
        "name": "E-Home Household Service Holdings Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "EKSO",
        "name": "Ekso Bionics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ELDN",
        "name": "Eledon Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ELEV",
        "name": "Elevation Oncology Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "ELMS",
        "name": "Electric Last Mile Solutions Inc. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "ELMSW",
        "name": "Electric Last Mile Solutions Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ELOX",
        "name": "Eloxx Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ELSE",
        "name": "Electro-Sensors Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ELTK",
        "name": "Eltek Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ELYM",
        "name": "Eliem Therapeutics Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ELYS",
        "name": "Elys Game Technology Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "EM",
        "name": "Smart Share Global Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "EMBK",
        "name": "Embark Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EMBKW",
        "name": "Embark Technology Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "EMCF",
        "name": "Emclaire Financial Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EMKR",
        "name": "EMCORE Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EML",
        "name": "Eastern Company (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EMLDU",
        "name": "FTAC Emerald Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ENCP",
        "name": "Energem Corp Class A Ordinary Shares",
        "country": "Malaysia"
      },
      {
        "symbol": "ENCPU",
        "name": "Energem Corp Unit",
        "country": "Malaysia"
      },
      {
        "symbol": "ENCPW",
        "name": "Energem Corp Warrant",
        "country": "Malaysia"
      },
      {
        "symbol": "ENDP",
        "name": "Endo International plc Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "ENER",
        "name": "Accretion Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENERR",
        "name": "Accretion Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "ENERU",
        "name": "Accretion Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ENERW",
        "name": "Accretion Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ENG",
        "name": "ENGlobal Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENJY",
        "name": "Enjoy Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENJYW",
        "name": "Enjoy Technology Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ENLV",
        "name": "Enlivex Therapeutics Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ENNV",
        "name": "ECP Environmental Growth Opportunities Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENNVW",
        "name": "ECP Environmental Growth Opportunities Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "ENOB",
        "name": "Enochian Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENPH",
        "name": "Enphase Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENSC",
        "name": "Ensysce Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENSG",
        "name": "The Ensign Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENTA",
        "name": "Enanta Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENTF",
        "name": "Enterprise 4.0 Technology Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ENTFU",
        "name": "Enterprise 4.0 Technology Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ENTFW",
        "name": "Enterprise 4.0 Technology Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ENTG",
        "name": "Entegris Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENTX",
        "name": "Entera Bio Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ENTXW",
        "name": "Entera Bio Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "ENVB",
        "name": "Enveric Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENVI",
        "name": "Environmental Impact Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ENVIU",
        "name": "Environmental Impact Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ENVIW",
        "name": "Environmental Impact Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ENVX",
        "name": "Enovix Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EOLS",
        "name": "Evolus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EOSE",
        "name": "Eos Energy Enterprises Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EOSEW",
        "name": "Eos Energy Enterprises Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EPAY",
        "name": "Bottomline Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EPHY",
        "name": "Epiphany Technology Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EPHYU",
        "name": "Epiphany Technology Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "EPHYW",
        "name": "Epiphany Technology Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EPIX",
        "name": "ESSA Pharma Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "EPSN",
        "name": "Epsilon Energy Ltd. Common Share",
        "country": "United States"
      },
      {
        "symbol": "EPZM",
        "name": "Epizyme Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EQ",
        "name": "Equillium Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EQBK",
        "name": "Equity Bancshares Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EQIX",
        "name": "Equinix Inc. Common Stock REIT",
        "country": "United States"
      },
      {
        "symbol": "EQOS",
        "name": "EQONEX LIMITED Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "EQRX",
        "name": "EQRx Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EQRXW",
        "name": "EQRx Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ERAS",
        "name": "Erasca Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ERES",
        "name": "East Resources Acquisition Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ERESU",
        "name": "East Resources Acquisition Company Unit",
        "country": "United States"
      },
      {
        "symbol": "ERESW",
        "name": "East Resources Acquisition Company Warrant",
        "country": "United States"
      },
      {
        "symbol": "ERIC",
        "name": "Ericsson American Depositary Shares",
        "country": "Sweden"
      },
      {
        "symbol": "ERIE",
        "name": "Erie Indemnity Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ERII",
        "name": "Energy Recovery Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ERYP",
        "name": "Erytech Pharma S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "ESAC",
        "name": "ESGEN Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ESACU",
        "name": "ESGEN Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "ESACW",
        "name": "ESGEN Acquisition Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "ESBK",
        "name": "Elmira Savings Bank Elmira NY Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ESCA",
        "name": "Escalade Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ESEA",
        "name": "Euroseas Ltd. Common Stock (Marshall Islands)",
        "country": "Greece"
      },
      {
        "symbol": "ESGR",
        "name": "Enstar Group Limited Ordinary Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "ESGRO",
        "name": "Enstar Group Limited Depository Shares 7.00% Perpetual Non-Cumulative Preference Shares Series E",
        "country": "Bermuda"
      },
      {
        "symbol": "ESGRP",
        "name": "Enstar Group Limited Depositary Shares Each Representing 1/1000th of an interest in Preference Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "ESLT",
        "name": "Elbit Systems Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ESPR",
        "name": "Esperion Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ESQ",
        "name": "Esquire Financial Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ESSA",
        "name": "ESSA Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ESSC",
        "name": "East Stone Acquisition Corporation Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ESSCR",
        "name": "East Stone Acquisition Corporation Right",
        "country": "United States"
      },
      {
        "symbol": "ESSCU",
        "name": "East Stone Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "ESSCW",
        "name": "East Stone Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "ESTA",
        "name": "Establishment Labs Holdings Inc. Common Shares",
        "country": "Costa Rica"
      },
      {
        "symbol": "ETAC",
        "name": "E.Merge Technology Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ETACU",
        "name": "E.Merge Technology Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ETACW",
        "name": "E.Merge Technology Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ETNB",
        "name": "89bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ETON",
        "name": "Eton Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ETSY",
        "name": "Etsy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ETTX",
        "name": "Entasis Therapeutics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EUCR",
        "name": "Eucrates Biomedical Acquisition Corp. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "EUCRW",
        "name": "Eucrates Biomedical Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EVAX",
        "name": "Evaxion Biotech A/S American Depositary Share",
        "country": "Denmark"
      },
      {
        "symbol": "EVBG",
        "name": "Everbridge Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVCM",
        "name": "EverCommerce Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVER",
        "name": "EverQuote Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVFM",
        "name": "Evofem Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVGN",
        "name": "Evogene Ltd Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "EVGO",
        "name": "EVgo Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVGOW",
        "name": "EVgo Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "EVK",
        "name": "Ever-Glory International Group Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "EVLO",
        "name": "Evelo Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVLV",
        "name": "Evolv Technologies Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVLVW",
        "name": "Evolv Technologies Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "EVO",
        "name": "Evotec SE American Depositary Shares",
        "country": "Germany"
      },
      {
        "symbol": "EVOJ",
        "name": "Evo Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVOK",
        "name": "Evoke Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVOL",
        "name": "Evolving Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EVOP",
        "name": "EVO Payments Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EWBC",
        "name": "East West Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EWCZ",
        "name": "European Wax Center Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EWTX",
        "name": "Edgewise Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXAI",
        "name": "Exscientia Plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "EXAS",
        "name": "Exact Sciences Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXC",
        "name": "Exelon Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXEL",
        "name": "Exelixis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXFY",
        "name": "Expensify Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXLS",
        "name": "ExlService Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXPD",
        "name": "Expeditors International of Washington Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXPE",
        "name": "Expedia Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXPI",
        "name": "eXp World Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXPO",
        "name": "Exponent Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EXTR",
        "name": "Extreme Networks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EYE",
        "name": "National Vision Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EYEN",
        "name": "Eyenovia Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EYES",
        "name": "Second Sight Medical Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EYESW",
        "name": "Second Sight Medical Products Inc. Warrants expiring 03/14/2024",
        "country": "United States"
      },
      {
        "symbol": "EYPT",
        "name": "EyePoint Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EZFL",
        "name": "EzFill Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "EZGO",
        "name": "EZGO Technologies Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "EZPW",
        "name": "EZCORP Inc. Class A Non Voting Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FA",
        "name": "First Advantage Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FAMI",
        "name": "Farmmi Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "FANG",
        "name": "Diamondback Energy Inc. Commmon Stock",
        "country": "United States"
      },
      {
        "symbol": "FANH",
        "name": "Fanhua Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "FARM",
        "name": "Farmer Brothers Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FARO",
        "name": "FARO Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FAST",
        "name": "Fastenal Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FAT",
        "name": "FAT Brands Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FATBB",
        "name": "FAT Brands Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FATBP",
        "name": "FAT Brands Inc. 8.25% Series B Cumulative Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "FATE",
        "name": "Fate Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FATP",
        "name": "Fat Projects Acquisition Corp Class A Ordinary Share",
        "country": "Singapore"
      },
      {
        "symbol": "FATPU",
        "name": "Fat Projects Acquisition Corp Unit",
        "country": "Singapore"
      },
      {
        "symbol": "FATPW",
        "name": "Fat Projects Acquisition Corp Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "FB",
        "name": "Meta Platforms Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FBIO",
        "name": "Fortress Biotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FBIOP",
        "name": "Fortress Biotech Inc. 9.375% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "FBIZ",
        "name": "First Business Financial Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FBMS",
        "name": "First Bancshares Inc.",
        "country": "United States"
      },
      {
        "symbol": "FBNC",
        "name": "First Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FBRX",
        "name": "Forte Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCAP",
        "name": "First Capital Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCBC",
        "name": "First Community Bankshares Inc. (VA) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCCO",
        "name": "First Community Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCEL",
        "name": "FuelCell Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCFS",
        "name": "FirstCash Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCNCA",
        "name": "First Citizens BancShares Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCNCO",
        "name": "First Citizens BancShares Inc. 5.625% Non-Cumulative Perpetual Preferred Stock Series C",
        "country": "United States"
      },
      {
        "symbol": "FCNCP",
        "name": "First Citizens BancShares Inc. Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "FCRD",
        "name": "First Eagle Alternative Capital BDC Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FCUV",
        "name": "Focus Universal Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FDBC",
        "name": "Fidelity D & D Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FDMT",
        "name": "4D Molecular Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FDUS",
        "name": "Fidus Investment Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FEIM",
        "name": "Frequency Electronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FELE",
        "name": "Franklin Electric Co. Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FEMY",
        "name": "Femasys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FENC",
        "name": "Fennec Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FEXDU",
        "name": "Fintech Ecosystem Development Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "FFBC",
        "name": "First Financial Bancorp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFBW",
        "name": "FFBW Inc. Common Stock (MD)",
        "country": "United States"
      },
      {
        "symbol": "FFHL",
        "name": "Fuwei Films (Holdings) Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "FFIC",
        "name": "Flushing Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFIE",
        "name": "Faraday Future Intelligent Electric Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFIEW",
        "name": "Faraday Future Intelligent Electric Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FFIN",
        "name": "First Financial Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFIV",
        "name": "F5 Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFNW",
        "name": "First Financial Northwest Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FFWM",
        "name": "First Foundation Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FGBI",
        "name": "First Guaranty Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FGBIP",
        "name": "First Guaranty Bancshares Inc. 6.75% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "FGEN",
        "name": "FibroGen Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FGF",
        "name": "FG Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FGFPP",
        "name": "FG Financial Group Inc. 8.00% Cumulative Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "FHB",
        "name": "First Hawaiian Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FHLT",
        "name": "Future Health ESG Corp. Common stock",
        "country": "United States"
      },
      {
        "symbol": "FHLTU",
        "name": "Future Health ESG Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FHLTW",
        "name": "Future Health ESG Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FHTX",
        "name": "Foghorn Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FIAC",
        "name": "Focus Impact Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FIACU",
        "name": "Focus Impact Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FIACW",
        "name": "Focus Impact Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FIBK",
        "name": "First Interstate BancSystem Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FICV",
        "name": "Frontier Investment Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FICVW",
        "name": "Frontier Investment Corp Warrants",
        "country": "United States"
      },
      {
        "symbol": "FINM",
        "name": "Marlin Technology Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "FINMU",
        "name": "Marlin Technology Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "FINMW",
        "name": "Marlin Technology Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "FINW",
        "name": "FinWise Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FISI",
        "name": "Financial Institutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FISV",
        "name": "Fiserv Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FITB",
        "name": "Fifth Third Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FITBI",
        "name": "Fifth Third Bancorp Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "FITBO",
        "name": "Fifth Third Bancorp Depositary Shares each representing a 1/1000th ownership interest in a share of Non-Cumulative Perpetual Preferred Stock Series K",
        "country": "United States"
      },
      {
        "symbol": "FITBP",
        "name": "Fifth Third Bancorp Depositary Shares each representing 1/40th share of Fifth Third 6.00% Non-Cumulative Perpetual Class B Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "FIVE",
        "name": "Five Below Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FIVN",
        "name": "Five9 Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FIXX",
        "name": "Homology Medicines Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FIZZ",
        "name": "National Beverage Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FKWL",
        "name": "Franklin Wireless Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLAC",
        "name": "Frazier Lifesciences Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FLACW",
        "name": "Frazier Lifesciences Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "FLDM",
        "name": "Fluidigm Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLEX",
        "name": "Flex Ltd. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "FLGC",
        "name": "Flora Growth Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "FLGT",
        "name": "Fulgent Genetics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLIC",
        "name": "First of Long Island Corporation (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLL",
        "name": "Full House Resorts Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLMN",
        "name": "Falcon Minerals Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLMNW",
        "name": "Falcon Minerals Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "FLNC",
        "name": "Fluence Energy Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLNT",
        "name": "Fluent Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLUX",
        "name": "Flux Power Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLWS",
        "name": "1-800-FLOWERS.COM Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLXS",
        "name": "Flexsteel Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FLYW",
        "name": "Flywire Corporation Voting Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FMAO",
        "name": "Farmers & Merchants Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FMBH",
        "name": "First Mid Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FMBI",
        "name": "First Midwest Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FMBIO",
        "name": "First Midwest Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series C",
        "country": "United States"
      },
      {
        "symbol": "FMBIP",
        "name": "First Midwest Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "FMIV",
        "name": "Forum Merger IV Corporation Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "FMNB",
        "name": "Farmers National Banc Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FMTX",
        "name": "Forma Therapeutics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNCB",
        "name": "FNCB Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNCH",
        "name": "Finch Therapeutics Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNGR",
        "name": "FingerMotion Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNHC",
        "name": "FedNat Holding Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNKO",
        "name": "Funko Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNLC",
        "name": "First Bancorp Inc  (ME) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNVT",
        "name": "Finnovate Acquisition Corp. Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "FNVTU",
        "name": "Finnovate Acquisition Corp. Units",
        "country": "Cayman Islands"
      },
      {
        "symbol": "FNVTW",
        "name": "Finnovate Acquisition Corp. Warrants",
        "country": "Cayman Islands"
      },
      {
        "symbol": "FNWB",
        "name": "First Northwest Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FNWD",
        "name": "Finward Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOCS",
        "name": "Focus Financial Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOLD",
        "name": "Amicus Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FONR",
        "name": "Fonar Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FORA",
        "name": "Forian Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FORD",
        "name": "Forward Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FORM",
        "name": "FormFactor Inc. FormFactor Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FORR",
        "name": "Forrester Research Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FORTY",
        "name": "Formula Systems (1985) Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "FOSL",
        "name": "Fossil Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOSLL",
        "name": "Fossil Group Inc. 7% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "FOUN",
        "name": "Founder SPAC Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FOUNU",
        "name": "Founder SPAC Units",
        "country": "United States"
      },
      {
        "symbol": "FOUNW",
        "name": "Founder SPAC Warrants",
        "country": "United States"
      },
      {
        "symbol": "FOX",
        "name": "Fox Corporation Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOXA",
        "name": "Fox Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOXF",
        "name": "Fox Factory Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOXW",
        "name": "FoxWayne Enterprises Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FOXWU",
        "name": "FoxWayne Enterprises Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FOXWW",
        "name": "FoxWayne Enterprises Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FPAY",
        "name": "FlexShopper Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRAF",
        "name": "Franklin Financial Services Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRBA",
        "name": "First Bank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRBK",
        "name": "Republic First Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRBNU",
        "name": "Forbion European Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FREE",
        "name": "Whole Earth Brands Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FREEW",
        "name": "Whole Earth Brands Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FREQ",
        "name": "Frequency Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRG",
        "name": "Franchise Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRGAP",
        "name": "Franchise Group Inc. 7.50% Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "FRGI",
        "name": "Fiesta Restaurant Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRHC",
        "name": "Freedom Holding Corp. Common Stock",
        "country": "Kazakhstan"
      },
      {
        "symbol": "FRLA",
        "name": "Fortune Rise Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRLAU",
        "name": "Fortune Rise Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "FRLAW",
        "name": "Fortune Rise Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "FRLN",
        "name": "Freeline Therapeutics Holdings plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "FRME",
        "name": "First Merchants Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FROG",
        "name": "JFrog Ltd. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FRON",
        "name": "Frontier Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FRONU",
        "name": "Frontier Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "FRPH",
        "name": "FRP Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRPT",
        "name": "Freshpet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRSG",
        "name": "First Reserve Sustainable Growth Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRSGU",
        "name": "First Reserve Sustainable Growth Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FRSGW",
        "name": "First Reserve Sustainable Growth Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FRSH",
        "name": "Freshworks Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRST",
        "name": "Primis Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRSX",
        "name": "Foresight Autonomous Holdings Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "FRTA",
        "name": "Forterra Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRW",
        "name": "PWP Forward Acquisition Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FRWAW",
        "name": "PWP Forward Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "FSBC",
        "name": "Five Star Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSBW",
        "name": "FS Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSEA",
        "name": "First Seacoast Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSFG",
        "name": "First Savings Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSLR",
        "name": "First Solar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSRX",
        "name": "FinServ Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSRXU",
        "name": "FinServ Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "FSRXW",
        "name": "FinServ Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "FSSI",
        "name": "Fortistar Sustainable Solutions Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSSIU",
        "name": "Fortistar Sustainable Solutions Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FSSIW",
        "name": "Fortistar Sustainable Solutions Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FSTR",
        "name": "L.B. Foster Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSTX",
        "name": "F-star Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FSV",
        "name": "FirstService Corporation Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "FTAA",
        "name": "FTAC Athena Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "FTAAU",
        "name": "FTAC Athena Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "FTAAW",
        "name": "FTAC Athena Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "FTCI",
        "name": "FTC Solar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTCV",
        "name": "FinTech Acquisition Corp. V Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTCVU",
        "name": "FinTech Acquisition Corp. V Unit",
        "country": "United States"
      },
      {
        "symbol": "FTCVW",
        "name": "FinTech Acquisition Corp. V Warrant",
        "country": "United States"
      },
      {
        "symbol": "FTDR",
        "name": "Frontdoor Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTEK",
        "name": "Fuel Tech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTFT",
        "name": "Future FinTech Group Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "FTHM",
        "name": "Fathom Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTNT",
        "name": "Fortinet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTPA",
        "name": "FTAC Parnassus Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTRP",
        "name": "Field Trip Health Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "FTVI",
        "name": "FinTech Acquisition Corp. VI Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FTVIU",
        "name": "FinTech Acquisition Corp. VI Units",
        "country": "United States"
      },
      {
        "symbol": "FTVIW",
        "name": "FinTech Acquisition Corp. VI Warrants",
        "country": "United States"
      },
      {
        "symbol": "FULC",
        "name": "Fulcrum Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FULT",
        "name": "Fulton Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FULTP",
        "name": "Fulton Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "FUNC",
        "name": "First United Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FUND",
        "name": "Sprott Focus Trust Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FUSB",
        "name": "First US Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FUSN",
        "name": "Fusion Pharmaceuticals Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "FUTU",
        "name": "Futu Holdings Limited American Depositary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "FUV",
        "name": "Arcimoto Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FVAM",
        "name": "5:01 Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FVCB",
        "name": "FVCBankcorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FVE",
        "name": "Five Star Senior Living Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FWAC",
        "name": "Fifth Wall Acquisition Corp. III Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "FWBI",
        "name": "First Wave BioPharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FWONA",
        "name": "Liberty Media Corporation Series A Liberty Formula One Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FWONK",
        "name": "Liberty Media Corporation Series C Liberty Formula One Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FWP",
        "name": "Forward Pharma A/S American Depositary Shares",
        "country": "Denmark"
      },
      {
        "symbol": "FWRD",
        "name": "Forward Air Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FWRG",
        "name": "First Watch Restaurant Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FXCO",
        "name": "Financial Strategies Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FXCOW",
        "name": "Financial Strategies Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "FXNC",
        "name": "First National Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "FYBR",
        "name": "Frontier Communications Parent Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GABC",
        "name": "German American Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GACQ",
        "name": "Global Consumer Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GACQU",
        "name": "Global Consumer Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GACQW",
        "name": "Global Consumer Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GAIA",
        "name": "Gaia Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GAIN",
        "name": "Gladstone Investment Corporation Business Development Company",
        "country": "United States"
      },
      {
        "symbol": "GAINN",
        "name": "Gladstone Investment Corporation 5.00% Notes Due 2026",
        "country": "United States"
      },
      {
        "symbol": "GAINZ",
        "name": "Gladstone Investment Corporation 4.875% Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "GALT",
        "name": "Galectin Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GAMB",
        "name": "Gambling.com Group Limited Ordinary Shares",
        "country": "Jersey"
      },
      {
        "symbol": "GAMC",
        "name": "Golden Arrow Merger Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GAMCW",
        "name": "Golden Arrow Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GAME",
        "name": "Engine Gaming and Media Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "GAN",
        "name": "GAN Limited Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "GANX",
        "name": "Gain Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GASS",
        "name": "StealthGas Inc. Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "GATE",
        "name": "Marblegate Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GATEU",
        "name": "Marblegate Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GATEW",
        "name": "Marblegate Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GBDC",
        "name": "Golub Capital BDC Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GBIO",
        "name": "Generation Bio Co. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GBNH",
        "name": "Greenbrook TMS Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "GBNY",
        "name": "Generations Bancorp NY Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GBOX",
        "name": "Greenbox POS Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GBRG",
        "name": "Goldenbridge Acquisition Limited Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "GBRGR",
        "name": "Goldenbridge Acquisition Limited Right",
        "country": "Hong Kong"
      },
      {
        "symbol": "GBRGU",
        "name": "Goldenbridge Acquisition Limited Unit",
        "country": "Hong Kong"
      },
      {
        "symbol": "GBRGW",
        "name": "Goldenbridge Acquisition Limited Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "GBS",
        "name": "GBS Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GBT",
        "name": "Global Blood Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GCAC",
        "name": "Growth Capital Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GCACU",
        "name": "Growth Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GCACW",
        "name": "Growth Capital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GCBC",
        "name": "Greene County Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GCMG",
        "name": "GCM Grosvenor Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GCMGW",
        "name": "GCM Grosvenor Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GDEN",
        "name": "Golden Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GDEV",
        "name": "Nexters Inc. Ordinary Shares",
        "country": "Cyprus"
      },
      {
        "symbol": "GDEVW",
        "name": "Nexters Inc. Warrant",
        "country": "Cyprus"
      },
      {
        "symbol": "GDNRU",
        "name": "Gardiner Healthcare Acquisitions Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GDRX",
        "name": "GoodRx Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GDS",
        "name": "GDS Holdings Limited ADS",
        "country": "China"
      },
      {
        "symbol": "GDYN",
        "name": "Grid Dynamics Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GECC",
        "name": "Great Elm Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GECCM",
        "name": "Great Elm Capital Corp. 6.75% Notes Due 2025",
        "country": "United States"
      },
      {
        "symbol": "GECCN",
        "name": "Great Elm Capital Corp. 6.5% Notes due 2024",
        "country": "United States"
      },
      {
        "symbol": "GEEXU",
        "name": "Games & Esports Experience Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GEG",
        "name": "Great Elm Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GENC",
        "name": "Gencor Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GENE",
        "name": "Genetic Technologies Ltd ADS",
        "country": "Australia"
      },
      {
        "symbol": "GEOS",
        "name": "Geospace Technologies Corporation Common Stock (Texas)",
        "country": "United States"
      },
      {
        "symbol": "GERN",
        "name": "Geron Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GET",
        "name": "Getnet Adquirencia e Servicos para Meios de Pagamento S.A. American Depositary Shares",
        "country": "Brazil"
      },
      {
        "symbol": "GEVO",
        "name": "Gevo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GFAI",
        "name": "Guardforce AI Co. Limited Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "GFED",
        "name": "Guaranty Federal Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GFGDU",
        "name": "The Growth for Good Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "GFS",
        "name": "GlobalFoundries Inc. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "GGAAU",
        "name": "Genesis Growth Tech Acquisition Corp. Unit",
        "country": "Switzerland"
      },
      {
        "symbol": "GGAL",
        "name": "Grupo Financiero Galicia S.A. American Depositary Shares",
        "country": "Argentina"
      },
      {
        "symbol": "GGGV",
        "name": "G3 VRM Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GGGVR",
        "name": "G3 VRM Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "GGGVU",
        "name": "G3 VRM Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "GGMC",
        "name": "Glenfarne Merger Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GGMCW",
        "name": "Glenfarne Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GGPI",
        "name": "Gores Guggenheim Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GGPIU",
        "name": "Gores Guggenheim Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "GGPIW",
        "name": "Gores Guggenheim Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GH",
        "name": "Guardant Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GHAC",
        "name": "Gaming & Hospitality Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GHACU",
        "name": "Gaming & Hospitality Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GHACW",
        "name": "Gaming & Hospitality Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GHRS",
        "name": "GH Research PLC Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "GHSI",
        "name": "Guardion Health Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIAC",
        "name": "Gesher I Acquisition Corp. Class A Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GIACU",
        "name": "Gesher I Acquisition Corp.Unit",
        "country": "Israel"
      },
      {
        "symbol": "GIACW",
        "name": "Gesher I Acquisition Corp. Warrants",
        "country": "Israel"
      },
      {
        "symbol": "GIFI",
        "name": "Gulf Island Fabrication Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIGM",
        "name": "GigaMedia Limited Ordinary Shares",
        "country": "Taiwan"
      },
      {
        "symbol": "GIII",
        "name": "G-III Apparel Group LTD. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIIX",
        "name": "Gores Holdings VIII Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIIXU",
        "name": "Gores Holdings VIII Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "GIIXW",
        "name": "Gores Holdings VIII Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GILD",
        "name": "Gilead Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GILT",
        "name": "Gilat Satellite Networks Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GIPR",
        "name": "Generation Income Properties Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIPRW",
        "name": "Generation Income Properties Inc Warrant",
        "country": "United States"
      },
      {
        "symbol": "GIW",
        "name": "GigInternational1 Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GIWWW",
        "name": "GigInternational1 Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GLAD",
        "name": "Gladstone Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLAQ",
        "name": "Globis Acquisition Corp. common stock",
        "country": "United States"
      },
      {
        "symbol": "GLAQU",
        "name": "Globis Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GLAQW",
        "name": "Globis Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GLBE",
        "name": "Global-E Online Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GLBL",
        "name": "Cartesian Growth Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "GLBLU",
        "name": "Cartesian Growth Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "GLBLW",
        "name": "Cartesian Growth Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "GLBS",
        "name": "Globus Maritime Limited Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "GLBZ",
        "name": "Glen Burnie Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLDD",
        "name": "Great Lakes Dredge & Dock Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLDI",
        "name": "Credit Suisse X-Links Gold Shares Covered Call ETNs due February 2 2033",
        "country": "Switzerland"
      },
      {
        "symbol": "GLEE",
        "name": "Gladstone Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLEEU",
        "name": "Gladstone Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GLEEW",
        "name": "Gladstone Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GLG",
        "name": "TD Holdings Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "GLHA",
        "name": "Glass Houses Acquisition Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "GLHAW",
        "name": "Glass Houses Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GLLI",
        "name": "Globalink Investment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLLIR",
        "name": "Globalink Investment Inc. Rights",
        "country": "United States"
      },
      {
        "symbol": "GLLIU",
        "name": "Globalink Investment Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "GLLIW",
        "name": "Globalink Investment Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GLMD",
        "name": "Galmed Pharmaceuticals Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GLNG",
        "name": "Golar Lng Ltd",
        "country": "Bermuda"
      },
      {
        "symbol": "GLPG",
        "name": "Galapagos NV American Depositary Shares",
        "country": "Belgium"
      },
      {
        "symbol": "GLPI",
        "name": "Gaming and Leisure Properties Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLRE",
        "name": "Greenlight Capital Re Ltd. Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "GLSI",
        "name": "Greenwich LifeSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLSPT",
        "name": "Global SPAC Partners Co. Subunit ",
        "country": "United States"
      },
      {
        "symbol": "GLSPU",
        "name": "Global SPAC Partners Co. Unit",
        "country": "United States"
      },
      {
        "symbol": "GLSPW",
        "name": "Global SPAC Partners Co. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GLTO",
        "name": "Galecto Inc. Common Stock",
        "country": "Denmark"
      },
      {
        "symbol": "GLUE",
        "name": "Monte Rosa Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GLYC",
        "name": "GlycoMimetics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GMAB",
        "name": "Genmab A/S ADS",
        "country": "Denmark"
      },
      {
        "symbol": "GMBL",
        "name": "Esports Entertainment Group Inc. Common Stock",
        "country": "Malta"
      },
      {
        "symbol": "GMBLP",
        "name": "Esports Entertainment Group Inc. 10.0% Series A Cumulative Redeemable Convertible Preferred Stock",
        "country": "Malta"
      },
      {
        "symbol": "GMBLW",
        "name": "Esports Entertainment Group Inc. Warrant",
        "country": "Malta"
      },
      {
        "symbol": "GMBT",
        "name": "Queen's Gambit Growth Capital Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "GMBTU",
        "name": "Queen's Gambit Growth Capital Unit",
        "country": "United States"
      },
      {
        "symbol": "GMBTW",
        "name": "Queen's Gambit Growth Capital Warrant",
        "country": "United States"
      },
      {
        "symbol": "GMDA",
        "name": "Gamida Cell Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GMFIU",
        "name": "Aetherium Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GMII",
        "name": "Gores Metropoulos II Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GMIIU",
        "name": "Gores Metropoulos II Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "GMIIW",
        "name": "Gores Metropoulos II Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GMTX",
        "name": "Gemini Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GMVD",
        "name": "G Medical Innovations Holdings Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "GMVDW",
        "name": "G Medical Innovations Holdings Ltd. Warrants",
        "country": "Israel"
      },
      {
        "symbol": "GNAC",
        "name": "Group Nine Acquisition Corp. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "GNACU",
        "name": "Group Nine Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "GNACW",
        "name": "Group Nine Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GNCA",
        "name": "Genocea Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNFT",
        "name": "GENFIT S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "GNLN",
        "name": "Greenlane Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNOG",
        "name": "Golden Nugget Online Gaming Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNPX",
        "name": "Genprex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNSS",
        "name": "Genasys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNTA",
        "name": "Genenta Science S.p.A. American Depositary Shares",
        "country": "Italy"
      },
      {
        "symbol": "GNTX",
        "name": "Gentex Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNTY",
        "name": "Guaranty Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GNUS",
        "name": "Genius Brands International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GO",
        "name": "Grocery Outlet Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOBI",
        "name": "Gobi Acquisition Corp. Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "GOCO",
        "name": "GoHealth Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOEV",
        "name": "Canoo Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOEVW",
        "name": "Canoo Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GOGL",
        "name": "Golden Ocean Group Limited Common Stock",
        "country": "Bermuda"
      },
      {
        "symbol": "GOGO",
        "name": "Gogo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOOD",
        "name": "Gladstone Commercial Corporation Real Estate Investment Trust",
        "country": "United States"
      },
      {
        "symbol": "GOODN",
        "name": "Gladstone Commercial Corporation 6.625% Series E Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "GOODO",
        "name": "Gladstone Commercial Corporation 6.00% Series G Cumulative Redeemable Preferred Stock par value $0.001 per share",
        "country": "United States"
      },
      {
        "symbol": "GOOG",
        "name": "Alphabet Inc. Class C Capital Stock",
        "country": "United States"
      },
      {
        "symbol": "GOOGL",
        "name": "Alphabet Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOSS",
        "name": "Gossamer Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOVX",
        "name": "GeoVax Labs Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GOVXW",
        "name": "GeoVax Labs Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GP",
        "name": "GreenPower Motor Company Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "GPAC",
        "name": "Global Partner Acquisition Corp II Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "GPACU",
        "name": "Global Partner Acquisition Corp II Unit",
        "country": "United States"
      },
      {
        "symbol": "GPACW",
        "name": "Global Partner Acquisition Corp II Warrant",
        "country": "United States"
      },
      {
        "symbol": "GPCO",
        "name": "Golden Path Acquisition Corporation Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "GPCOR",
        "name": "Golden Path Acquisition Corporation Rights",
        "country": "United States"
      },
      {
        "symbol": "GPCOU",
        "name": "Golden Path Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "GPCOW",
        "name": "Golden Path Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "GPP",
        "name": "Green Plains Partners LP Common Units",
        "country": "United States"
      },
      {
        "symbol": "GPRE",
        "name": "Green Plains Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GPRO",
        "name": "GoPro Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRAB",
        "name": "Grab Holdings Limited Class A Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "GRABW",
        "name": "Grab Holdings Limited Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "GRAY",
        "name": "Graybug Vision Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRCL",
        "name": "Gracell Biotechnologies Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "GRCY",
        "name": "Greencity Acquisition Corporation Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "GRCYW",
        "name": "Greencity Acquisition Corporation Warrants",
        "country": "China"
      },
      {
        "symbol": "GREE",
        "name": "Greenidge Generation Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GREEL",
        "name": "Greenidge Generation Holdings Inc. 8.50% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "GRFS",
        "name": "Grifols S.A. American Depositary Shares",
        "country": "Spain"
      },
      {
        "symbol": "GRIL",
        "name": "Muscle Maker Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRIN",
        "name": "Grindrod Shipping Holdings Ltd. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "GRNQ",
        "name": "Greenpro Capital Corp. Common Stock",
        "country": "China"
      },
      {
        "symbol": "GROM",
        "name": "Grom Social Enterprises Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GROMW",
        "name": "Grom Social Enterprises Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "GROW",
        "name": "U.S. Global Investors Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRPH",
        "name": "Graphite Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRPN",
        "name": "Groupon Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRTS",
        "name": "Gritstone bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRTX",
        "name": "Galera Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRUB",
        "name": "Just Eat Takeaway.com N.V. American Depositary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "GRVI",
        "name": "Grove Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GRVY",
        "name": "GRAVITY Co. Ltd. American Depository Shares",
        "country": "South Korea"
      },
      {
        "symbol": "GRWG",
        "name": "GrowGeneration Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSAQ",
        "name": "Global Synergy Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "GSAQU",
        "name": "Global Synergy Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "GSAQW",
        "name": "Global Synergy Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GSBC",
        "name": "Great Southern Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSEV",
        "name": "Gores Holdings VII Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSEVU",
        "name": "Gores Holdings VII Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "GSEVW",
        "name": "Gores Holdings VII Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GSHD",
        "name": "Goosehead Insurance Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSIT",
        "name": "GSI Technology Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSKY",
        "name": "GreenSky Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GSM",
        "name": "Ferroglobe PLC Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "GSMG",
        "name": "Glory Star New Media Group Holdings Limited Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "GSMGW",
        "name": "Glory Star New Media Group Holdings Limited Warrant expiring 2/13/2025",
        "country": "China"
      },
      {
        "symbol": "GT",
        "name": "The Goodyear Tire & Rubber Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTAC",
        "name": "Global Technology Acquisition Corp. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "GTACU",
        "name": "Global Technology Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "GTACW",
        "name": "Global Technology Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "GTBP",
        "name": "GT Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTEC",
        "name": "Greenland Technologies Holding Corporation Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "GTH",
        "name": "Genetron Holdings Limited ADS",
        "country": "China"
      },
      {
        "symbol": "GTHX",
        "name": "G1 Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTIM",
        "name": "Good Times Restaurants Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTLB",
        "name": "GitLab Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTPA",
        "name": "Gores Technology Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTPAW",
        "name": "Gores Technology Partners Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GTPB",
        "name": "Gores Technology Partners II Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GTPBU",
        "name": "Gores Technology Partners II Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "GTPBW",
        "name": "Gores Technology Partners II Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GTX",
        "name": "Garrett Motion Inc. Common Stock",
        "country": "Switzerland"
      },
      {
        "symbol": "GTXAP",
        "name": "Garrett Motion Inc. Series A Cumulative Convertible Preferred Stock",
        "country": "Switzerland"
      },
      {
        "symbol": "GTYH",
        "name": "GTY Technology Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GURE",
        "name": "Gulf Resources Inc. (NV) Common Stock",
        "country": "China"
      },
      {
        "symbol": "GVCI",
        "name": "Green Visor Financial Technology Acquisition Corp. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "GVCIU",
        "name": "Green Visor Financial Technology Acquisition Corp. I Units",
        "country": "United States"
      },
      {
        "symbol": "GVCIW",
        "name": "Green Visor Financial Technology Acquisition Corp. I Warrants",
        "country": "United States"
      },
      {
        "symbol": "GVP",
        "name": "GSE Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GWGH",
        "name": "GWG Holdings Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GWII",
        "name": "Good Works II Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GWIIW",
        "name": "Good Works II Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "GWRS",
        "name": "Global Water Resources Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GXII",
        "name": "GX Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "GXIIU",
        "name": "GX Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "GYRO",
        "name": "Gyrodyne LLC Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HA",
        "name": "Hawaiian Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAAC",
        "name": "Health Assurance Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAACU",
        "name": "Health Assurance Acquisition Corp. SAIL Securities",
        "country": "United States"
      },
      {
        "symbol": "HAACW",
        "name": "Health Assurance Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "HAFC",
        "name": "Hanmi Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAIAU",
        "name": "Healthcare AI Acquisition Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "HAIN",
        "name": "Hain Celestial Group Inc. (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HALL",
        "name": "Hallmark Financial Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HALO",
        "name": "Halozyme Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAPP",
        "name": "Happiness Development Group Limited Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "HARP",
        "name": "Harpoon Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAS",
        "name": "Hasbro Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HAYN",
        "name": "Haynes International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBAN",
        "name": "Huntington Bancshares Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBANM",
        "name": "Huntington Bancshares Incorporated Depositary Shares each representing a 1/1000th interest in a share of Huntington Series I Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "HBANP",
        "name": "Huntington Bancshares Incorporated Depositary Shares 4.500% Series H Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "HBCP",
        "name": "Home Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBIO",
        "name": "Harvard Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBMD",
        "name": "Howard Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBNC",
        "name": "Horizon Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBP",
        "name": "Huttig Building Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HBT",
        "name": "HBT Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCAR",
        "name": "Healthcare Services Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCARU",
        "name": "Healthcare Services Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "HCARW",
        "name": "Healthcare Services Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCAT",
        "name": "Health Catalyst Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCCC",
        "name": "Healthcare Capital Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "HCCCU",
        "name": "Healthcare Capital Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "HCCCW",
        "name": "Healthcare Capital Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCCI",
        "name": "Heritage-Crystal Clean Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCDI",
        "name": "Harbor Custom Development Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCDIP",
        "name": "Harbor Custom Development Inc. 8.0% Series A Cumulative Convertible Preferred Stock no par value",
        "country": "United States"
      },
      {
        "symbol": "HCDIW",
        "name": "Harbor Custom Development Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCDIZ",
        "name": "Harbor Custom Development Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCIC",
        "name": "Hennessy Capital Investment Corp. V Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCICU",
        "name": "Hennessy Capital Investment Corp. V Units ",
        "country": "United States"
      },
      {
        "symbol": "HCICW",
        "name": "Hennessy Capital Investment Corp. V Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCII",
        "name": "Hudson Executive Investment Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCIIU",
        "name": "Hudson Executive Investment Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "HCIIW",
        "name": "Hudson Executive Investment Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCKT",
        "name": "Hackett Group Inc (The). Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCM",
        "name": "HUTCHMED (China) Limited American Depositary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "HCNE",
        "name": "Jaws Hurricane Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCNEU",
        "name": "Jaws Hurricane Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "HCNEW",
        "name": "Jaws Hurricane Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCP",
        "name": "HashiCorp Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCSG",
        "name": "Healthcare Services Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCTI",
        "name": "Healthcare Triangle Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCVI",
        "name": "Hennessy Capital Investment Corp. VI Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HCVIU",
        "name": "Hennessy Capital Investment Corp. VI Unit",
        "country": "United States"
      },
      {
        "symbol": "HCVIW",
        "name": "Hennessy Capital Investment Corp. VI Warrant",
        "country": "United States"
      },
      {
        "symbol": "HCWB",
        "name": "HCW Biologics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HDSN",
        "name": "Hudson Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HEAR",
        "name": "Turtle Beach Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HEES",
        "name": "H&E Equipment Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HELE",
        "name": "Helen of Troy Limited Common Stock",
        "country": "Bermuda"
      },
      {
        "symbol": "HEPA",
        "name": "Hepion Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HEPS",
        "name": "D-Market Electronic Services & Trading American Depositary Shares",
        "country": "Turkey"
      },
      {
        "symbol": "HERA",
        "name": "FTAC Hera Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "HERAU",
        "name": "FTAC Hera Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "HERAW",
        "name": "FTAC Hera Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HEXO",
        "name": "HEXO Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "HFBL",
        "name": "Home Federal Bancorp Inc. of Louisiana Common StocK",
        "country": "United States"
      },
      {
        "symbol": "HFFG",
        "name": "HF Foods Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HFWA",
        "name": "Heritage Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HGBL",
        "name": "Heritage Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HGEN",
        "name": "Humanigen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HGSH",
        "name": "China HGS Real Estate Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "HHGC",
        "name": "HHG Capital Corporation Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "HHGCR",
        "name": "HHG Capital Corporation Rights",
        "country": "Hong Kong"
      },
      {
        "symbol": "HHGCW",
        "name": "HHG Capital Corporation Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "HHR",
        "name": "HeadHunter Group PLC American Depositary Shares",
        "country": "Cyprus"
      },
      {
        "symbol": "HHS",
        "name": "Harte-Hanks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HIBB",
        "name": "Hibbett Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HIFS",
        "name": "Hingham Institution for Savings Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HIHO",
        "name": "Highway Holdings Limited Common Stock",
        "country": "Hong Kong"
      },
      {
        "symbol": "HIII",
        "name": "Hudson Executive Investment Corp. III Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HIIIU",
        "name": "Hudson Executive Investment Corp. III Unit",
        "country": "United States"
      },
      {
        "symbol": "HIIIW",
        "name": "Hudson Executive Investment Corp. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "HIMX",
        "name": "Himax Technologies Inc. American Depositary Shares",
        "country": "Taiwan"
      },
      {
        "symbol": "HITI",
        "name": "High Tide Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "HIVE",
        "name": "Hive Blockchain Technologies Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "HLAH",
        "name": "Hamilton Lane Alliance Holdings I Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HLAHU",
        "name": "Hamilton Lane Alliance Holdings I Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "HLAHW",
        "name": "Hamilton Lane Alliance Holdings I Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HLBZ",
        "name": "Helbiz Inc. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "HLBZW",
        "name": "Helbiz Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HLG",
        "name": "Hailiang Education Group Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "HLIT",
        "name": "Harmonic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HLMN",
        "name": "Hillman Solutions Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HLNE",
        "name": "Hamilton Lane Incorporated Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HLTH",
        "name": "Cue Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HLXA",
        "name": "Helix Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "HMCO",
        "name": "HumanCo Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HMCOU",
        "name": "HumanCo Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "HMCOW",
        "name": "HumanCo Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HMHC",
        "name": "Houghton Mifflin Harcourt Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HMNF",
        "name": "HMN Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HMPT",
        "name": "Home Point Capital Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HMST",
        "name": "HomeStreet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HMTV",
        "name": "Hemisphere Media Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HNNA",
        "name": "Hennessy Advisors Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HNNAZ",
        "name": "Hennessy Advisors Inc. 4.875% Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "HNRG",
        "name": "Hallador Energy Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HNST",
        "name": "The Honest Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOFT",
        "name": "Hooker Furnishings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOFV",
        "name": "Hall of Fame Resort & Entertainment Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOFVW",
        "name": "Hall of Fame Resort &amp; Entertainment Company Warrant",
        "country": "United States"
      },
      {
        "symbol": "HOLI",
        "name": "Hollysys Automation Technologies Ltd. Common Shares (British Virgin Islands)",
        "country": "China"
      },
      {
        "symbol": "HOLX",
        "name": "Hologic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HON",
        "name": "Honeywell International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HONE",
        "name": "HarborOne Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOOD",
        "name": "Robinhood Markets Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOOK",
        "name": "HOOKIPA Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOPE",
        "name": "Hope Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HORIU",
        "name": "Emerging Markets Horizon Corp. Unit",
        "country": "Cyprus"
      },
      {
        "symbol": "HOTH",
        "name": "Hoth Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOUR",
        "name": "Hour Loop Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HOVNP",
        "name": "Hovnanian Enterprises Inc Dep Shr Srs A Pfd",
        "country": "United States"
      },
      {
        "symbol": "HOWL",
        "name": "Werewolf Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HPK",
        "name": "HighPeak Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HPKEW",
        "name": "HighPeak Energy Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HPLT",
        "name": "Home Plate Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HPLTU",
        "name": "Home Plate Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "HPLTW",
        "name": "Home Plate Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "HQI",
        "name": "HireQuest Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "HQY",
        "name": "HealthEquity Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HRMY",
        "name": "Harmony Biosciences Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HROW",
        "name": "Harrow Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HROWL",
        "name": "Harrow Health Inc. 8.625% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "HRTX",
        "name": "Heron Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HRZN",
        "name": "Horizon Technology Finance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSAQ",
        "name": "Health Sciences Acquisitions Corporation 2 Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "HSDT",
        "name": "Helius Medical Technologies Inc. Class A Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "HSIC",
        "name": "Henry Schein Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSII",
        "name": "Heidrick & Struggles International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSKA",
        "name": "Heska Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSON",
        "name": "Hudson Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HST",
        "name": "Host Hotels & Resorts Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSTM",
        "name": "HealthStream Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HSTO",
        "name": "Histogen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTBI",
        "name": "HomeTrust Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTBK",
        "name": "Heritage Commerce Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTBX",
        "name": "Heat Biologics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTGM",
        "name": "HTG Molecular Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTHT",
        "name": "Huazhu Group Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "HTIA",
        "name": "Healthcare Trust Inc. 7.375% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "HTIBP",
        "name": "Healthcare Trust Inc. 7.125% Series B Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "HTLD",
        "name": "Heartland Express Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTLF",
        "name": "Heartland Financial USA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTLFP",
        "name": "Heartland Financial USA Inc. Depositary Shares each representing a 1/400th ownership interest in a share of 7.00% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E",
        "country": "United States"
      },
      {
        "symbol": "HTOO",
        "name": "Fusion Fuel Green PLC Class A Ordinary Shares",
        "country": "Portugal"
      },
      {
        "symbol": "HTOOW",
        "name": "Fusion Fuel Green PLC Warrant",
        "country": "Portugal"
      },
      {
        "symbol": "HTZ",
        "name": "Hertz Global Holdings Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HTZWW",
        "name": "Hertz Global Holdings Inc Warrant",
        "country": "United States"
      },
      {
        "symbol": "HUBG",
        "name": "Hub Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HUDI",
        "name": "Huadi International Group Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "HUGE",
        "name": "FSD Pharma Inc. Class B Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "HUIZ",
        "name": "Huize Holding Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "HUMA",
        "name": "Humacyte Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HUMAW",
        "name": "Humacyte Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "HURC",
        "name": "Hurco Companies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HURN",
        "name": "Huron Consulting Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HUSN",
        "name": "Hudson Capital Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "HUT",
        "name": "Hut 8 Mining Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "HVBC",
        "name": "HV Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HWBK",
        "name": "Hawthorn Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HWC",
        "name": "Hancock Whitney Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HWCPZ",
        "name": "Hancock Whitney Corporation 6.25% Subordinated Notes due 2060",
        "country": "United States"
      },
      {
        "symbol": "HWEL",
        "name": "Healthwell Acquisition Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HWELU",
        "name": "Healthwell Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "HWELW",
        "name": "Healthwell Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "HWKN",
        "name": "Hawkins Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYAC",
        "name": "Haymaker Acquisition Corp. III Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "HYACU",
        "name": "Haymaker Acquisition Corp. III Unit",
        "country": "United States"
      },
      {
        "symbol": "HYACW",
        "name": "Haymaker Acquisition Corp. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "HYFM",
        "name": "Hydrofarm Holdings Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYMC",
        "name": "Hycroft Mining Holding Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYMCL",
        "name": "Hycroft Mining Holding Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "HYMCW",
        "name": "Hycroft Mining Holding Corporation  Warrant",
        "country": "United States"
      },
      {
        "symbol": "HYMCZ",
        "name": "Hycroft Mining Holding Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "HYPR",
        "name": "Hyperfine Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYRE",
        "name": "HyreCar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYW",
        "name": "Hywin Holdings Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "HYZN",
        "name": "Hyzon Motors Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "HYZNW",
        "name": "Hyzon Motors Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "HZNP",
        "name": "Horizon Therapeutics Public Limited Company Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "IAC",
        "name": "IAC/InterActiveCorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IART",
        "name": "Integra LifeSciences Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IAS",
        "name": "Integral Ad Science Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IBCP",
        "name": "Independent Bank Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IBEX",
        "name": "IBEX Limited Common Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "IBKR",
        "name": "Interactive Brokers Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IBOC",
        "name": "International Bancshares Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IBRX",
        "name": "ImmunityBio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IBTX",
        "name": "Independent Bank Group Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICAD",
        "name": "iCAD Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICCC",
        "name": "ImmuCell Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICCH",
        "name": "ICC Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICCM",
        "name": "IceCure Medical Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "ICFI",
        "name": "ICF International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICHR",
        "name": "Ichor Holdings Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ICLK",
        "name": "iClick Interactive Asia Group Limited American Depositary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "ICLR",
        "name": "ICON plc Ordinary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "ICMB",
        "name": "Investcorp Credit Management BDC Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICPT",
        "name": "Intercept Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICUI",
        "name": "ICU Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ICVX",
        "name": "Icosavax Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDBA",
        "name": "IDEX Biometrics ASA American Depositary Shares",
        "country": "Norway"
      },
      {
        "symbol": "IDCC",
        "name": "InterDigital Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDEX",
        "name": "Ideanomics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDN",
        "name": "Intellicheck Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDRA",
        "name": "Idera Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDXX",
        "name": "IDEXX Laboratories Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IDYA",
        "name": "IDEAYA Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IEA",
        "name": "Infrastructure and Energy Alternatives Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IEAWW",
        "name": "Infrastructure and Energy Alternatives Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "IEP",
        "name": "Icahn Enterprises L.P. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IESC",
        "name": "IES Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IFBD",
        "name": "Infobird Co. Ltd Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "IFRX",
        "name": "InflaRx N.V. Common Stock",
        "country": "Germany"
      },
      {
        "symbol": "IGAC",
        "name": "IG Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IGACU",
        "name": "IG Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "IGACW",
        "name": "IG Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "IGAP",
        "name": "Integrity Applications Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "IGIC",
        "name": "International General Insurance Holdings Ltd. Ordinary Share",
        "country": "Jordan"
      },
      {
        "symbol": "IGICW",
        "name": "International General Insurance Holdings Ltd. Warrants expiring 03/17/2025",
        "country": "Jordan"
      },
      {
        "symbol": "IGMS",
        "name": "IGM Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IGNY",
        "name": "Ignyte Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IGTAU",
        "name": "Inception Growth Acquisition Limited Unit",
        "country": "United States"
      },
      {
        "symbol": "IHRT",
        "name": "iHeartMedia Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "III",
        "name": "Information Services Group Inc. Information Services Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IIII",
        "name": "INSU Acquisition Corp. III Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IIIIU",
        "name": "INSU Acquisition Corp. III Unit",
        "country": "United States"
      },
      {
        "symbol": "IIIIW",
        "name": "INSU Acquisition Corp. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "IIIV",
        "name": "i3 Verticals Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IIN",
        "name": "Intricon Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IINN",
        "name": "Inspira Technologies Oxy B.H.N. Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "IINNW",
        "name": "Inspira Technologies Oxy B.H.N. Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "IIVI",
        "name": "II-VI Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IIVIP",
        "name": "II-VI Incorporated 6.00% Series A Mandatory Convertible Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "IKNA",
        "name": "Ikena Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IKT",
        "name": "Inhibikase Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ILMN",
        "name": "Illumina Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ILPT",
        "name": "Industrial Logistics Properties Trust Common Shares of Beneficial Interest",
        "country": "United States"
      },
      {
        "symbol": "IMAB",
        "name": "I-MAB American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "IMAC",
        "name": "IMAC Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMAQ",
        "name": "International Media Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMAQU",
        "name": "International Media Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "IMAQW",
        "name": "International Media Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "IMBI",
        "name": "iMedia Brands Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMBIL",
        "name": "iMedia Brands Inc. 8.5% Senior Notes Due 2026",
        "country": "United States"
      },
      {
        "symbol": "IMCC",
        "name": "IM Cannabis Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "IMCR",
        "name": "Immunocore Holdings plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "IMGN",
        "name": "ImmunoGen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMGO",
        "name": "Imago BioSciences Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "IMKTA",
        "name": "Ingles Markets Incorporated Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMMP",
        "name": "Immutep Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "IMMR",
        "name": "Immersion Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMMX",
        "name": "Immix Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMNM",
        "name": "Immunome Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMOS",
        "name": "ChipMOS TECHNOLOGIES INC. American Depositary Shares",
        "country": "Taiwan"
      },
      {
        "symbol": "IMPL",
        "name": "Impel NeuroPharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMPP",
        "name": "Imperial Petroleum Inc. Common Shares",
        "country": "Greece"
      },
      {
        "symbol": "IMPPP",
        "name": "Imperial Petroleum Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Shares",
        "country": "Greece"
      },
      {
        "symbol": "IMRA",
        "name": "IMARA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMRN",
        "name": "Immuron Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "IMRNW",
        "name": "Immuron Limited Warrants",
        "country": "Australia"
      },
      {
        "symbol": "IMRX",
        "name": "Immuneering Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMTE",
        "name": "Integrated Media Technology Limited Ordinary Shares",
        "country": "Australia"
      },
      {
        "symbol": "IMTX",
        "name": "Immatics N.V. Ordinary Shares",
        "country": "Germany"
      },
      {
        "symbol": "IMTXW",
        "name": "Immatics N.V. Warrants",
        "country": "Germany"
      },
      {
        "symbol": "IMUX",
        "name": "Immunic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMV",
        "name": "IMV Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "IMVT",
        "name": "Immunovant Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IMXI",
        "name": "International Money Express Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INAB",
        "name": "IN8bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INBK",
        "name": "First Internet Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INBKZ",
        "name": "First Internet Bancorp 6.0% Fixed-to-Floating Rate Subordinated Notes Due 2029",
        "country": "United States"
      },
      {
        "symbol": "INBX",
        "name": "Inhibrx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INCR",
        "name": "Intercure Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "INCY",
        "name": "Incyte Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INDB",
        "name": "Independent Bank Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INDI",
        "name": "indie Semiconductor Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INDIW",
        "name": "indie Semiconductor Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "INDP",
        "name": "Indaptus Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INDT",
        "name": "INDUS Realty Trust Inc. (MD) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INFI",
        "name": "Infinity Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INFN",
        "name": "Infinera Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INGN",
        "name": "Inogen Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INKA",
        "name": "KludeIn I Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INKAW",
        "name": "KludeIn I Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "INKT",
        "name": "MiNK Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INM",
        "name": "InMed Pharmaceuticals Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "INMB",
        "name": "INmune Bio Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "INMD",
        "name": "InMode Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "INNV",
        "name": "InnovAge Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INO",
        "name": "Inovio Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INOD",
        "name": "Innodata Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INPX",
        "name": "Inpixon Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INSE",
        "name": "Inspired Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INSG",
        "name": "Inseego Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INSM",
        "name": "Insmed Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTA",
        "name": "Intapp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTC",
        "name": "Intel Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTE",
        "name": "Integral Acquisition Corporation 1 Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTEU",
        "name": "Integral Acquisition Corporation 1 Unit",
        "country": "United States"
      },
      {
        "symbol": "INTEW",
        "name": "Integral Acquisition Corporation 1 Warrants",
        "country": "United States"
      },
      {
        "symbol": "INTG",
        "name": "Intergroup Corporation (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTU",
        "name": "Intuit Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INTZ",
        "name": "Intrusion Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INVA",
        "name": "Innoviva Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INVE",
        "name": "Identiv Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INVO",
        "name": "INVO BioScience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "INVZ",
        "name": "Innoviz Technologies Ltd. Ordinary shares",
        "country": "Israel"
      },
      {
        "symbol": "INVZW",
        "name": "Innoviz Technologies Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "INZY",
        "name": "Inozyme Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IOAC",
        "name": "Innovative International Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "IOACU",
        "name": "Innovative International Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "IOACW",
        "name": "Innovative International Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "IOBT",
        "name": "IO Biotech Inc. Common Stock",
        "country": "Denmark"
      },
      {
        "symbol": "IONM",
        "name": "Assure Holdings Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IONS",
        "name": "Ionis Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IOSP",
        "name": "Innospec Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IOVA",
        "name": "Iovance Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPA",
        "name": "ImmunoPrecise Antibodies Ltd. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "IPAR",
        "name": "Inter Parfums Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPAX",
        "name": "Inflection Point Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "IPAXU",
        "name": "Inflection Point Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "IPAXW",
        "name": "Inflection Point Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "IPDN",
        "name": "Professional Diversity Network Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPGP",
        "name": "IPG Photonics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPHA",
        "name": "Innate Pharma S.A. ADS",
        "country": "France"
      },
      {
        "symbol": "IPSC",
        "name": "Century Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPVI",
        "name": "InterPrivate IV InfraTech Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPVIU",
        "name": "InterPrivate IV InfraTech Partners Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "IPW",
        "name": "iPower Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IPWR",
        "name": "Ideal Power Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IQ",
        "name": "iQIYI Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "IQMD",
        "name": "Intelligent Medicine Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IQMDU",
        "name": "Intelligent Medicine Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "IQMDW",
        "name": "Intelligent Medicine Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "IRBT",
        "name": "iRobot Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IRCP",
        "name": "IRSA Propiedades Comerciales S.A. American Depositary Shares",
        "country": "Argentina"
      },
      {
        "symbol": "IRDM",
        "name": "Iridium Communications Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IREN",
        "name": "Iris Energy Limited Ordinary Shares",
        "country": "Australia"
      },
      {
        "symbol": "IRIX",
        "name": "IRIDEX Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IRMD",
        "name": "iRadimed Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IROQ",
        "name": "IF Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IRTC",
        "name": "iRhythm Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IRWD",
        "name": "Ironwood Pharmaceuticals Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISAA",
        "name": "Iron Spark I Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISBC",
        "name": "Investors Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISEE",
        "name": "IVERIC bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISIG",
        "name": "Insignia Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISLE",
        "name": "Isleworth Healthcare Acquisition Corporation Common stock",
        "country": "United States"
      },
      {
        "symbol": "ISLEW",
        "name": "Isleworth Healthcare Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "ISO",
        "name": "IsoPlexis Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISPC",
        "name": "iSpecimen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISRG",
        "name": "Intuitive Surgical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISSC",
        "name": "Innovative Solutions and Support Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISTR",
        "name": "Investar Holding Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ISUN",
        "name": "iSun Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITCI",
        "name": "Intra-Cellular Therapies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITHX",
        "name": "ITHAX Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ITHXU",
        "name": "ITHAX Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ITHXW",
        "name": "ITHAX Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ITI",
        "name": "Iteris Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITIC",
        "name": "Investors Title Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITOS",
        "name": "iTeos Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITQ",
        "name": "Itiquira Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ITQRU",
        "name": "Itiquira Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ITQRW",
        "name": "Itiquira Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ITRI",
        "name": "Itron Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ITRM",
        "name": "Iterum Therapeutics plc Ordinary Share",
        "country": "Ireland"
      },
      {
        "symbol": "ITRN",
        "name": "Ituran Location and Control Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "IVA",
        "name": "Inventiva S.A. American Depository Shares",
        "country": "France"
      },
      {
        "symbol": "IVAC",
        "name": "Intevac Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "IVCBU",
        "name": "Investcorp Europe Acquisition Corp I Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "IVCPU",
        "name": "Swiftmerge Acquisition Corp. Unit",
        "country": "Canada"
      },
      {
        "symbol": "IXAQ",
        "name": "IX Acquisition Corp. Class A Ordinary Share",
        "country": "United Kingdom"
      },
      {
        "symbol": "IXAQU",
        "name": "IX Acquisition Corp. Unit",
        "country": "United Kingdom"
      },
      {
        "symbol": "IXAQW",
        "name": "IX Acquisition Corp. Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "IZEA",
        "name": "IZEA Worldwide Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JACK",
        "name": "Jack In The Box Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JAGX",
        "name": "Jaguar Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JAKK",
        "name": "JAKKS Pacific Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JAMF",
        "name": "Jamf Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JAN",
        "name": "JanOne Inc. Common Stock (NV)",
        "country": "United States"
      },
      {
        "symbol": "JANX",
        "name": "Janux Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JAQC",
        "name": "Jupiter Acquisition Corporation Common stock",
        "country": "United States"
      },
      {
        "symbol": "JAQCU",
        "name": "Jupiter Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "JAQCW",
        "name": "Jupiter Acquisition Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "JAZZ",
        "name": "Jazz Pharmaceuticals plc Common Stock (Ireland)",
        "country": "Ireland"
      },
      {
        "symbol": "JBHT",
        "name": "J.B. Hunt Transport Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JBLU",
        "name": "JetBlue Airways Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JBSS",
        "name": "John B. Sanfilippo & Son Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JCIC",
        "name": "Jack Creek Investment Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "JCICU",
        "name": "Jack Creek Investment Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "JCICW",
        "name": "Jack Creek Investment Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "JCS",
        "name": "Communications Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JCTCF",
        "name": "Jewett-Cameron Trading Company Common Shares",
        "country": "United States"
      },
      {
        "symbol": "JD",
        "name": "JD.com Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JFIN",
        "name": "Jiayin Group Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JFU",
        "name": "9F Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JG",
        "name": "Aurora Mobile Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JJSF",
        "name": "J & J Snack Foods Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JKHY",
        "name": "Jack Henry & Associates Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JMAC",
        "name": "Maxpro Capital Acquisition Corp. Class A Common Stock",
        "country": "Taiwan"
      },
      {
        "symbol": "JMACW",
        "name": "Maxpro Capital Acquisition Corp. Warrants",
        "country": "Taiwan"
      },
      {
        "symbol": "JNCE",
        "name": "Jounce Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JOAN",
        "name": "JOANN Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JOBS",
        "name": "51job Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JOFF",
        "name": "JOFF Fintech Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JOFFU",
        "name": "JOFF Fintech Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "JOFFW",
        "name": "JOFF Fintech Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "JOUT",
        "name": "Johnson Outdoors Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JRJC",
        "name": "China Finance Online Co. Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "JRSH",
        "name": "Jerash Holdings (US) Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JRVR",
        "name": "James River Group Holdings Ltd. Common Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "JSM",
        "name": "Navient Corporation 6% Senior Notes due December 15 2043",
        "country": "United States"
      },
      {
        "symbol": "JSPR",
        "name": "Jasper Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JSPRW",
        "name": "Japer Therapeutics Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "JUGG",
        "name": "Jaws Juggernaut Acquisition Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "JUGGU",
        "name": "Jaws Juggernaut Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "JUGGW",
        "name": "Jaws Juggernaut Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "JUPW",
        "name": "Jupiter Wellness Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JUPWW",
        "name": "Jupiter Wellness Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "JVA",
        "name": "Coffee Holding Co. Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JWAC",
        "name": "Jupiter Wellness Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JWACR",
        "name": "Jupiter Wellness Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "JWEL",
        "name": "Jowell Global Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "JYAC",
        "name": "Jiya Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JYNT",
        "name": "The Joint Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "JZXN",
        "name": "Jiuzi Holdings Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "KACLU",
        "name": "Kairous Acquisition Corp. Limited Unit",
        "country": "Malaysia"
      },
      {
        "symbol": "KAII",
        "name": "Kismet Acquisition Two Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "KAIIW",
        "name": "Kismet Acquisition Two Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KAIR",
        "name": "Kairos Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "KAIRU",
        "name": "Kairos Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "KAIRW",
        "name": "Kairos Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KALA",
        "name": "Kala Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KALU",
        "name": "Kaiser Aluminum Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KALV",
        "name": "KalVista Pharmaceuticals Inc. Common Stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "KARO",
        "name": "Karooooo Ltd. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "KAVL",
        "name": "Kaival Brands Innovations Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KBAL",
        "name": "Kimball International Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KBNT",
        "name": "Kubient Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KBNTW",
        "name": "Kubient Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KC",
        "name": "Kingsoft Cloud Holdings Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "KDNY",
        "name": "Chinook Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KDP",
        "name": "Keurig Dr Pepper Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KE",
        "name": "Kimball Electronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KELYA",
        "name": "Kelly Services Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KELYB",
        "name": "Kelly Services Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KEQU",
        "name": "Kewaunee Scientific Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KERN",
        "name": "Akerna Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KERNW",
        "name": "Akerna Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "KFFB",
        "name": "Kentucky First Federal Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KFRC",
        "name": "Kforce Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KHC",
        "name": "The Kraft Heinz Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KIDS",
        "name": "OrthoPediatrics Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KIII",
        "name": "Kismet Acquisition Three Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "KIIIU",
        "name": "Kismet Acquisition Three Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "KIIIW",
        "name": "Kismet Acquisition Three Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KINS",
        "name": "Kingstone Companies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KINZ",
        "name": "KINS Technology Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KINZU",
        "name": "KINS Technology Group Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "KINZW",
        "name": "KINS Technology Group Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KIRK",
        "name": "Kirkland's Inc. COMMONSTOCK",
        "country": "United States"
      },
      {
        "symbol": "KLAC",
        "name": "KLA Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KLAQ",
        "name": "KL Acquisition Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KLAQW",
        "name": "KL Acquisition Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "KLDO",
        "name": "Kaleido Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KLIC",
        "name": "Kulicke and Soffa Industries Inc. Common Stock",
        "country": "Singapore"
      },
      {
        "symbol": "KLTR",
        "name": "Kaltura Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KLXE",
        "name": "KLX Energy Services Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KMDA",
        "name": "Kamada Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "KMPH",
        "name": "KemPharm Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KNBE",
        "name": "KnowBe4 Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KNDI",
        "name": "Kandi Technologies Group Inc Common Stock",
        "country": "China"
      },
      {
        "symbol": "KNSA",
        "name": "Kiniksa Pharmaceuticals Ltd. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KNTE",
        "name": "Kinnate Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KOD",
        "name": "Kodiak Sciences Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KOPN",
        "name": "Kopin Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KOR",
        "name": "Corvus Gold Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "KOSS",
        "name": "Koss Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KPLT",
        "name": "Katapult Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KPLTW",
        "name": "Katapult Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KPRX",
        "name": "Kiora Pharmaceuticals Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KPTI",
        "name": "Karyopharm Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRBP",
        "name": "Kiromic BioPharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRKR",
        "name": "36Kr Holdings Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "KRMD",
        "name": "Repro Med Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRNL",
        "name": "Kernel Group Holdings Inc. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "KRNLU",
        "name": "Kernel Group Holdings Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "KRNLW",
        "name": "Kernel Group Holdings Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "KRNT",
        "name": "Kornit Digital Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "KRNY",
        "name": "Kearny Financial Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRON",
        "name": "Kronos Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KROS",
        "name": "Keros Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRT",
        "name": "Karat Packaging Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRTX",
        "name": "Karuna Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRUS",
        "name": "Kura Sushi USA Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KRYS",
        "name": "Krystal Biotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KSI",
        "name": "Kadem Sustainable Impact Corporation Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "KSICW",
        "name": "Kadem Sustainable Impact Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "KSPN",
        "name": "Kaspien Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KTCC",
        "name": "Key Tronic Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KTOS",
        "name": "Kratos Defense & Security Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KTRA",
        "name": "Kintara Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KTTA",
        "name": "Pasithea Therapeutics Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KTTAW",
        "name": "Pasithea Therapeutics Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "KURA",
        "name": "Kura Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KVHI",
        "name": "KVH Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KVSA",
        "name": "Khosla Ventures Acquisition Co. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KVSC",
        "name": "Khosla Ventures Acquisition Co. III Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KXIN",
        "name": "Kaixin Auto Holdings Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "KYMR",
        "name": "Kymera Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "KZIA",
        "name": "Kazia Therapeutics Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "KZR",
        "name": "Kezar Life Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAAA",
        "name": "Lakeshore Acquisition I Corp. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "LAAAW",
        "name": "Lakeshore Acquisition I Corp. Warrant",
        "country": "China"
      },
      {
        "symbol": "LABP",
        "name": "Landos Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAKE",
        "name": "Lakeland Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAMR",
        "name": "Lamar Advertising Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LANC",
        "name": "Lancaster Colony Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAND",
        "name": "Gladstone Land Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LANDM",
        "name": "Gladstone Land Corporation 5.00% Series D Cumulative Term Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "LANDO",
        "name": "Gladstone Land Corporation 6.00% Series B Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "LARK",
        "name": "Landmark Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LASR",
        "name": "nLIGHT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAUR",
        "name": "Laureate Education Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAWS",
        "name": "Lawson Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAX",
        "name": "8i Acquisition 2 Corp. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "LAXXR",
        "name": "8i Acquisition 2 Corp. Rights",
        "country": "Singapore"
      },
      {
        "symbol": "LAXXU",
        "name": "8i Acquisition 2 Corp. Unit",
        "country": "Singapore"
      },
      {
        "symbol": "LAXXW",
        "name": "8i Acquisition 2 Corp. Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "LAZR",
        "name": "Luminar Technologies Inc.  Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LAZY",
        "name": "Lazydays Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBAI",
        "name": "Lakeland Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBC",
        "name": "Luther Burbank Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBPH",
        "name": "Longboard Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBPS",
        "name": "4D pharma plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "LBPSW",
        "name": "4D pharma plc Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "LBRDA",
        "name": "Liberty Broadband Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBRDK",
        "name": "Liberty Broadband Corporation Class C Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LBRDP",
        "name": "Liberty Broadband Corporation Series A Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "LBTYA",
        "name": "Liberty Global plc Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "LBTYB",
        "name": "Liberty Global plc Class B Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "LBTYK",
        "name": "Liberty Global plc Class C Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "LCA",
        "name": "Landcadia Holdings IV Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LCAA",
        "name": "L Catterton Asia Acquisition Corp Class A Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "LCAAU",
        "name": "L Catterton Asia Acquisition Corp Units",
        "country": "Singapore"
      },
      {
        "symbol": "LCAAW",
        "name": "L Catterton Asia Acquisition Corp Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "LCAHU",
        "name": "Landcadia Holdings IV Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "LCAHW",
        "name": "Landcadia Holdings IV Inc. Warrant ",
        "country": "United States"
      },
      {
        "symbol": "LCAP",
        "name": "Lionheart Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LCAPU",
        "name": "Lionheart Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "LCAPW",
        "name": "Lionheart Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "LCID",
        "name": "Lucid Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LCNB",
        "name": "LCNB Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LCUT",
        "name": "Lifetime Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LDHA",
        "name": "LDH Growth Corp I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "LDHAU",
        "name": "LDH Growth Corp I Units",
        "country": "United States"
      },
      {
        "symbol": "LDHAW",
        "name": "LDH Growth Corp I Warrant",
        "country": "United States"
      },
      {
        "symbol": "LE",
        "name": "Lands' End Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LECO",
        "name": "Lincoln Electric Holdings Inc. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "LEDS",
        "name": "SemiLEDS Corporation Common Stock",
        "country": "Taiwan"
      },
      {
        "symbol": "LEE",
        "name": "Lee Enterprises Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LEGA",
        "name": "Lead Edge Growth Opportunities Ltd Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "LEGAU",
        "name": "Lead Edge Growth Opportunities Ltd Units",
        "country": "United States"
      },
      {
        "symbol": "LEGAW",
        "name": "Lead Edge Growth Opportunities Ltd Warrant",
        "country": "United States"
      },
      {
        "symbol": "LEGH",
        "name": "Legacy Housing Corporation Common Stock (TX)",
        "country": "United States"
      },
      {
        "symbol": "LEGN",
        "name": "Legend Biotech Corporation American Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "LESL",
        "name": "Leslie's Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LEVL",
        "name": "Level One Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LEXX",
        "name": "Lexaria Bioscience Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "LEXXW",
        "name": "Lexaria Bioscience Corp. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "LFACU",
        "name": "LF Capital Acquisition Corp. II Units",
        "country": "United States"
      },
      {
        "symbol": "LFACW",
        "name": "LF Capital Acquisition Corp. II Warrants",
        "country": "United States"
      },
      {
        "symbol": "LFMD",
        "name": "LifeMD Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LFMDP",
        "name": "LifeMD Inc. 8.875% Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "LFST",
        "name": "LifeStance Health Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LFTR",
        "name": "Lefteris Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LFTRU",
        "name": "Lefteris Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "LFTRW",
        "name": "Lefteris Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LFUS",
        "name": "Littelfuse Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LFVN",
        "name": "Lifevantage Corporation Common Stock (Delaware)",
        "country": "United States"
      },
      {
        "symbol": "LGAC",
        "name": "Lazard Growth Acquisition Corp. I Ordinary Shares",
        "country": ""
      },
      {
        "symbol": "LGACU",
        "name": "Lazard Growth Acquisition Corp. I Units",
        "country": ""
      },
      {
        "symbol": "LGACW",
        "name": "Lazard Growth Acquisition Corp. I Warrants",
        "country": ""
      },
      {
        "symbol": "LGHL",
        "name": "Lion Group Holding Ltd. American Depositary Share",
        "country": "China"
      },
      {
        "symbol": "LGHLW",
        "name": "Lion Group Holding Ltd. Warrant",
        "country": "China"
      },
      {
        "symbol": "LGIH",
        "name": "LGI Homes Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LGND",
        "name": "Ligand Pharmaceuticals Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LGO",
        "name": "Largo Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "LGST",
        "name": "Semper Paratus Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "LGSTU",
        "name": "Semper Paratus Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "LGSTW",
        "name": "Semper Paratus Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "LGTO",
        "name": "Legato Merger Corp. II Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LGTOU",
        "name": "Legato Merger Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "LGTOW",
        "name": "Legato Merger Corp. II Warrants",
        "country": "United States"
      },
      {
        "symbol": "LGVC",
        "name": "LAMF Global Ventures Corp. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "LGVCU",
        "name": "LAMF Global Ventures Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "LGVCW",
        "name": "LAMF Global Ventures Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "LGVN",
        "name": "Longeveron Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LHAA",
        "name": "Lerer Hippeau Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LHCG",
        "name": "LHC Group Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LHDX",
        "name": "Lucira Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LI",
        "name": "Li Auto Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "LIAN",
        "name": "LianBio American Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "LIBY",
        "name": "Liberty Resources Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIBYU",
        "name": "Liberty Resources Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "LIBYW",
        "name": "Liberty Resources Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LIDR",
        "name": "AEye Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIDRW",
        "name": "AEye Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LIFE",
        "name": "aTyr Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LILA",
        "name": "Liberty Latin America Ltd. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LILAK",
        "name": "Liberty Latin America Ltd. Class C Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LILM",
        "name": "Lilium N.V. Class A Ordinary Shares",
        "country": "Germany"
      },
      {
        "symbol": "LILMW",
        "name": "Lilium N.V. Warrants",
        "country": "Germany"
      },
      {
        "symbol": "LINC",
        "name": "Lincoln Educational Services Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIND",
        "name": "Lindblad Expeditions Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LINK",
        "name": "Interlink Electronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LION",
        "name": "Lionheart III Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIONU",
        "name": "Lionheart III Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "LIONW",
        "name": "Lionheart III Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "LIQT",
        "name": "LiqTech International Inc. Common Stock",
        "country": "Denmark"
      },
      {
        "symbol": "LITE",
        "name": "Lumentum Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LITM",
        "name": "Snow Lake Resources Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "LITT",
        "name": "Logistics Innovation Technologies Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LITTU",
        "name": "Logistics Innovation Technologies Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "LITTW",
        "name": "Logistics Innovation Technologies Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LIVE",
        "name": "Live Ventures Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIVN",
        "name": "LivaNova PLC Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "LIXT",
        "name": "Lixte Biotechnology Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LIXTW",
        "name": "Lixte Biotechnology Holdings Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "LIZI",
        "name": "LIZHI INC. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "LJAQ",
        "name": "LightJump Acquisition Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LJAQU",
        "name": "LightJump Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "LJAQW",
        "name": "LightJump Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "LJPC",
        "name": "La Jolla Pharmaceutical Company Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "LKCO",
        "name": "Luokung Technology Corp Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "LKFN",
        "name": "Lakeland Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LKQ",
        "name": "LKQ Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LLL",
        "name": "JX Luxventure Limited Common Stock",
        "country": "China"
      },
      {
        "symbol": "LLNW",
        "name": "Limelight Networks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMACA",
        "name": "Liberty Media Acquisition Corporation Series A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMACU",
        "name": "Liberty Media Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "LMACW",
        "name": "Liberty Media Acquisition Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "LMAO",
        "name": "LMF Acquisition Opportunities Inc. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "LMAOU",
        "name": "LMF Acquisition Opportunities Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "LMAOW",
        "name": "LMF Acquisition Opportunities Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LMAT",
        "name": "LeMaitre Vascular Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMB",
        "name": "Limbach Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMDX",
        "name": "LumiraDx Limited Common Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "LMDXW",
        "name": "LumiraDx Limited Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "LMFA",
        "name": "LM Funding America Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMNL",
        "name": "Liminal BioSciences Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "LMNR",
        "name": "Limoneira Co Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMPX",
        "name": "LMP Automotive Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LMST",
        "name": "Limestone Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LNDC",
        "name": "Landec Corporation Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "LNSR",
        "name": "LENSAR Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LNT",
        "name": "Alliant Energy Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LNTH",
        "name": "Lantheus Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOAN",
        "name": "Manhattan Bridge Capital Inc",
        "country": "United States"
      },
      {
        "symbol": "LOB",
        "name": "Live Oak Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOCO",
        "name": "El Pollo Loco Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOGC",
        "name": "LogicBio Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOGI",
        "name": "Logitech International S.A. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "LOOP",
        "name": "Loop Industries Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "LOPE",
        "name": "Grand Canyon Education Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOTZ",
        "name": "CarLotz Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LOTZW",
        "name": "CarLotz Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LOVE",
        "name": "The Lovesac Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPCN",
        "name": "Lipocine Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPLA",
        "name": "LPL Financial Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPRO",
        "name": "Open Lending Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPSN",
        "name": "LivePerson Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPTH",
        "name": "LightPath Technologies Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LPTX",
        "name": "Leap Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LQDA",
        "name": "Liquidia Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LQDT",
        "name": "Liquidity Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LRCX",
        "name": "Lam Research Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LRFC",
        "name": "Logan Ridge Finance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LRMR",
        "name": "Larimar Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSBK",
        "name": "Lake Shore Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSCC",
        "name": "Lattice Semiconductor Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSEA",
        "name": "Landsea Homes Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSEAW",
        "name": "Landsea Homes Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "LSPRU",
        "name": "Larkspur Health Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "LSTR",
        "name": "Landstar System Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSXMA",
        "name": "Liberty Media Corporation Series A Liberty SiriusXM Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSXMB",
        "name": "Liberty Media Corporation Series B Liberty SiriusXM Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LSXMK",
        "name": "Liberty Media Corporation Series C Liberty SiriusXM Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTBR",
        "name": "Lightbridge Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTCH",
        "name": "Latch Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTCHW",
        "name": "Latch Inc. Warrant expiring 6/4/2026",
        "country": "United States"
      },
      {
        "symbol": "LTRN",
        "name": "Lantern Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTRPA",
        "name": "Liberty TripAdvisor Holdings Inc. Series A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTRPB",
        "name": "Liberty TripAdvisor Holdings Inc. Series B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTRX",
        "name": "Lantronix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTRY",
        "name": "Lottery.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LTRYW",
        "name": "Lottery.com Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "LUCD",
        "name": "Lucid Diagnostics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LULU",
        "name": "lululemon athletica inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "LUMO",
        "name": "Lumos Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LUNA",
        "name": "Luna Innovations Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LUNG",
        "name": "Pulmonx Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LUXA",
        "name": "Lux Health Tech Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LUXAU",
        "name": "Lux Health Tech Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "LUXAW",
        "name": "Lux Health Tech Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "LVAC",
        "name": "LAVA Medtech Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LVACU",
        "name": "LAVA Medtech Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "LVACW",
        "name": "LAVA Medtech Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "LVLU",
        "name": "Lulu's Fashion Lounge Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LVO",
        "name": "LiveOne Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LVOX",
        "name": "LiveVox Holding Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LVOXU",
        "name": "LiveVox Holding Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "LVOXW",
        "name": "LiveVox Holding Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "LVRA",
        "name": "Levere Holdings Corp. Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "LVRAW",
        "name": "Levere Holdings Corp. Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "LVTX",
        "name": "LAVA Therapeutics N.V. Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "LWAY",
        "name": "Lifeway Foods Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LWLG",
        "name": "Lightwave Logic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LX",
        "name": "LexinFintech Holdings Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "LXEH",
        "name": "Lixiang Education Holding Co. Ltd. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "LXRX",
        "name": "Lexicon Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LYEL",
        "name": "Lyell Immunopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LYFT",
        "name": "Lyft Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LYL",
        "name": "Dragon Victory International Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "LYLT",
        "name": "Loyalty Ventures Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LYRA",
        "name": "Lyra Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LYTS",
        "name": "LSI Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "LZ",
        "name": "LegalZoom.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MAAQU",
        "name": "Mana Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MACA",
        "name": "Moringa Acquisition Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MACAU",
        "name": "Moringa Acquisition Corp Units",
        "country": "United States"
      },
      {
        "symbol": "MACAW",
        "name": "Moringa Acquisition Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "MACK",
        "name": "Merrimack Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MACU",
        "name": "Mallard Acquisition Corp. Common stock",
        "country": "United States"
      },
      {
        "symbol": "MACUU",
        "name": "Mallard Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MACUW",
        "name": "Mallard Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MANH",
        "name": "Manhattan Associates Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MANT",
        "name": "ManTech International Corporation Common Stock $0.01 Par Value",
        "country": "United States"
      },
      {
        "symbol": "MAPS",
        "name": "WM Technology Inc. Class A Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "MAPSW",
        "name": "WM Technology Inc. Warrants ",
        "country": "United States"
      },
      {
        "symbol": "MAQC",
        "name": "Maquia Capital Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MAQCU",
        "name": "Maquia Capital Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "MAQCW",
        "name": "Maquia Capital Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "MAR",
        "name": "Marriott International Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MARA",
        "name": "Marathon Digital Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MARK",
        "name": "Remark Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MARPS",
        "name": "Marine Petroleum Trust Units of Beneficial Interest",
        "country": "United States"
      },
      {
        "symbol": "MASI",
        "name": "Masimo Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MASS",
        "name": "908 Devices Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MAT",
        "name": "Mattel Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MATW",
        "name": "Matthews International Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MAXN",
        "name": "Maxeon Solar Technologies Ltd. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "MAYS",
        "name": "J. W. Mays Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBCN",
        "name": "Middlefield Banc Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBII",
        "name": "Marrone Bio Innovations Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBIN",
        "name": "Merchants Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBINN",
        "name": "Merchants Bancorp Depositary Shares Preferred Series C",
        "country": "United States"
      },
      {
        "symbol": "MBINO",
        "name": "Merchants Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of Series B  Fixed-to-Floating Rate",
        "country": "United States"
      },
      {
        "symbol": "MBINP",
        "name": "Merchants Bancorp 7.00% Fixed-to-Floating Rate Series A Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "MBIO",
        "name": "Mustang Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBNKP",
        "name": "Medallion Bank Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F",
        "country": "United States"
      },
      {
        "symbol": "MBOT",
        "name": "Microbot Medical Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "MBRX",
        "name": "Moleculin Biotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBTC",
        "name": "Nocturne Acquisition Corporation Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MBTCR",
        "name": "Nocturne Acquisition Corporation Right",
        "country": "United States"
      },
      {
        "symbol": "MBTCU",
        "name": "Nocturne Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "MBUU",
        "name": "Malibu Boats Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MBWM",
        "name": "Mercantile Bank Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCAA",
        "name": "Mountain & Co. I Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MCAAU",
        "name": "Mountain & Co. I Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MCAAW",
        "name": "Mountain & Co. I Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MCAE",
        "name": "Mountain Crest Acquisition Corp. III Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCAEU",
        "name": "Mountain Crest Acquisition Corp. III Unit",
        "country": "United States"
      },
      {
        "symbol": "MCAF",
        "name": "Mountain Crest Acquisition Corp. IV Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCAFR",
        "name": "Mountain Crest Acquisition Corp. IV Rights",
        "country": "United States"
      },
      {
        "symbol": "MCAFU",
        "name": "Mountain Crest Acquisition Corp. IV Unit",
        "country": "United States"
      },
      {
        "symbol": "MCAG",
        "name": "Mountain Crest Acquisition Corp. V Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCAGR",
        "name": "Mountain Crest Acquisition Corp. V Right",
        "country": "United States"
      },
      {
        "symbol": "MCAGU",
        "name": "Mountain Crest Acquisition Corp. V Unit",
        "country": "United States"
      },
      {
        "symbol": "MCBC",
        "name": "Macatawa Bank Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCBS",
        "name": "MetroCity Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCFE",
        "name": "McAfee Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCFT",
        "name": "MasterCraft Boat Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCHP",
        "name": "Microchip Technology Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCHX",
        "name": "Marchex Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCLD",
        "name": "mCloud Technologies Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "MCMJ",
        "name": "Merida Merger Corp. I Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCMJW",
        "name": "Merida Merger Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "MCRB",
        "name": "Seres Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MCRI",
        "name": "Monarch Casino & Resort Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDB",
        "name": "MongoDB Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDGL",
        "name": "Madrigal Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDGS",
        "name": "Medigus Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MDIA",
        "name": "Mediaco Holding Inc. Class A Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "MDJH",
        "name": "MDJM LTD Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "MDLZ",
        "name": "Mondelez International Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDNA",
        "name": "Medicenna Therapeutics Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "MDRR",
        "name": "Medalist Diversified REIT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDRRP",
        "name": "Medalist Diversified REIT Inc. Series A Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "MDRX",
        "name": "Allscripts Healthcare Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDVL",
        "name": "MedAvail Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDWD",
        "name": "MediWound Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MDWT",
        "name": "Midwest Holding Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDXG",
        "name": "MiMedx Group Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MDXH",
        "name": "MDxHealth SA American Depositary Shares",
        "country": "Belgium"
      },
      {
        "symbol": "ME",
        "name": "23andMe Holding Co. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEAC",
        "name": "Mercury Ecommerce Acquisition Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEACW",
        "name": "Mercury Ecommerce Acquisition Corp Warrants",
        "country": "United States"
      },
      {
        "symbol": "MEDP",
        "name": "Medpace Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEDS",
        "name": "TRxADE HEALTH Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEIP",
        "name": "MEI Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEKA",
        "name": "MELI Kaszek Pioneer Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MELI",
        "name": "MercadoLibre Inc. Common Stock",
        "country": "Argentina"
      },
      {
        "symbol": "MEOA",
        "name": "Minority Equality Opportunities Acquisition Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MEOAU",
        "name": "Minority Equality Opportunities Acquisition Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "MEOAW",
        "name": "Minority Equality Opportunities Acquisition Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "MEOH",
        "name": "Methanex Corporation Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "MERC",
        "name": "Mercer International Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "MESA",
        "name": "Mesa Air Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MESO",
        "name": "Mesoblast Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "METC",
        "name": "Ramaco Resources Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "METCL",
        "name": "Ramaco Resources Inc. 9.00% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "METX",
        "name": "Meten Holding Group Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "METXW",
        "name": "Meten Holding Group Ltd. Warrant",
        "country": "China"
      },
      {
        "symbol": "MF",
        "name": "Missfresh Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "MFH",
        "name": "Mercurity Fintech Holding Inc. ADS",
        "country": "China"
      },
      {
        "symbol": "MFIN",
        "name": "Medallion Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGEE",
        "name": "MGE Energy Inc",
        "country": "United State"
      },
      {
        "symbol": "MGI",
        "name": "Moneygram International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGIC",
        "name": "Magic Software Enterprises Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MGNI",
        "name": "Magnite Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGNX",
        "name": "MacroGenics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGPI",
        "name": "MGP Ingredients Inc.",
        "country": "United States"
      },
      {
        "symbol": "MGRC",
        "name": "McGrath RentCorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGTA",
        "name": "Magenta Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MGTX",
        "name": "MeiraGTx Holdings plc Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MGYR",
        "name": "Magyar Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MHLD",
        "name": "Maiden Holdings Ltd.",
        "country": "Bermuda"
      },
      {
        "symbol": "MICT",
        "name": "MICT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MIDD",
        "name": "Middleby Corporation (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MIGI",
        "name": "Mawson Infrastructure Group Inc. Common Stock",
        "country": "Australia"
      },
      {
        "symbol": "MILE",
        "name": "Metromile Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MILEW",
        "name": "Metromile Inc. Warrant ",
        "country": "United States"
      },
      {
        "symbol": "MIME",
        "name": "Mimecast Limited Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "MIND",
        "name": "MIND Technology Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "MINDP",
        "name": "MIND Technology Inc. Series A 9.00% Series A Cumulative Preferred Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "MINM",
        "name": "Minim Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MIRM",
        "name": "Mirum Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MIRO",
        "name": "Miromatrix Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MIST",
        "name": "Milestone Pharmaceuticals Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "MITA",
        "name": "Coliseum Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "MITAW",
        "name": "Coliseum Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MITC",
        "name": "MeaTech 3D Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MITK",
        "name": "Mitek Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MITO",
        "name": "Stealth BioTherapeutics Corp. ADS",
        "country": "United States"
      },
      {
        "symbol": "MKD",
        "name": "Molecular Data Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "MKSI",
        "name": "MKS Instruments Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MKTW",
        "name": "MarketWise Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MKTWW",
        "name": "MarketWise Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MKTX",
        "name": "MarketAxess Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MLAB",
        "name": "Mesa Laboratories Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MLAC",
        "name": "Malacca Straits Acquisition Company Limited Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "MLACW",
        "name": "Malacca Straits Acquisition Company Limited Warrants",
        "country": "Hong Kong"
      },
      {
        "symbol": "MLAI",
        "name": "McLaren Technology Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MLAIU",
        "name": "McLaren Technology Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MLAIW",
        "name": "McLaren Technology Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MLCO",
        "name": "Melco Resorts & Entertainment Limited American Depositary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "MLKN",
        "name": "MillerKnoll Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MLVF",
        "name": "Malvern Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MMAT",
        "name": "Meta Materials Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MMLP",
        "name": "Martin Midstream Partners L.P. Limited Partnership",
        "country": "United States"
      },
      {
        "symbol": "MMMB",
        "name": "MamaMancini's Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MMSI",
        "name": "Merit Medical Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MMYT",
        "name": "MakeMyTrip Limited Ordinary Shares",
        "country": "India"
      },
      {
        "symbol": "MNDO",
        "name": "MIND C.T.I. Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MNDT",
        "name": "Mandiant Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNDY",
        "name": "monday.com Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "MNKD",
        "name": "MannKind Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNMD",
        "name": "Mind Medicine (MindMed) Inc. Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "MNOV",
        "name": "Medicinova Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNPR",
        "name": "Monopar Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNRO",
        "name": "Monro Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNSB",
        "name": "MainStreet Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNSBP",
        "name": "MainStreet Bancshares Inc. Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "MNST",
        "name": "Monster Beverage Corporation",
        "country": "United States"
      },
      {
        "symbol": "MNTK",
        "name": "Montauk Renewables Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNTS",
        "name": "Momentus Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNTSW",
        "name": "Momentus Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MNTV",
        "name": "Momentive Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MNTX",
        "name": "Manitex International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOBQ",
        "name": "Mobiquity Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOBQW",
        "name": "Mobiquity Technologies Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MODV",
        "name": "ModivCare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOFG",
        "name": "MidWestOne Financial Gp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOGO",
        "name": "Mogo Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "MOHO",
        "name": "ECMOHO Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "MOLN",
        "name": "Molecular Partners AG American Depositary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "MOMO",
        "name": "Hello Group Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "MON",
        "name": "Monument Circle Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MONCU",
        "name": "Monument Circle Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MONCW",
        "name": "Monument Circle Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MOR",
        "name": "MorphoSys AG American Depositary Shares",
        "country": "Germany"
      },
      {
        "symbol": "MORF",
        "name": "Morphic Holding Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MORN",
        "name": "Morningstar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOTS",
        "name": "Motus GI Holdings Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "MOVE",
        "name": "Movano Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MOXC",
        "name": "Moxian (BVI) Inc Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "MPAA",
        "name": "Motorcar Parts  of America Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MPAC",
        "name": "Model Performance Acquisition Corp. Class A Ordinary Share",
        "country": "Hong Kong"
      },
      {
        "symbol": "MPACW",
        "name": "Model Performance Acquisition Corp. Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "MPB",
        "name": "Mid Penn Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MPRA",
        "name": "Mercato Partners Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MPRAU",
        "name": "Mercato Partners Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "MPRAW",
        "name": "Mercato Partners Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "MPWR",
        "name": "Monolithic Power Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MQ",
        "name": "Marqeta Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRAI",
        "name": "Marpai Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRAM",
        "name": "Everspin Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRBK",
        "name": "Meridian Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRCC",
        "name": "Monroe Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRCY",
        "name": "Mercury Systems Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MREO",
        "name": "Mereo BioPharma Group plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "MRIN",
        "name": "Marin Software Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRKR",
        "name": "Marker Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRLN",
        "name": "Marlin Business Services Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRM",
        "name": "MEDIROM Healthcare Technologies Inc. American Depositary Share",
        "country": "Japan"
      },
      {
        "symbol": "MRNA",
        "name": "Moderna Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRNS",
        "name": "Marinus Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRSN",
        "name": "Mersana Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRTN",
        "name": "Marten Transport Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRTX",
        "name": "Mirati Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRUS",
        "name": "Merus N.V. Common Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "MRVI",
        "name": "Maravai LifeSciences Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MRVL",
        "name": "Marvell Technology Inc. Common Stock",
        "country": "Bermuda"
      },
      {
        "symbol": "MSAC",
        "name": "Medicus Sciences Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "MSACW",
        "name": "Medicus Sciences Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MSBI",
        "name": "Midland States Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MSDA",
        "name": "MSD Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "MSDAU",
        "name": "MSD Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "MSDAW",
        "name": "MSD Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MSEX",
        "name": "Middlesex Water Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MSFT",
        "name": "Microsoft Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MSGM",
        "name": "Motorsport Games Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MSTR",
        "name": "MicroStrategy Incorporated Common Stock Class A",
        "country": "United States"
      },
      {
        "symbol": "MSVB",
        "name": "Mid-Southern Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTAC",
        "name": "MedTech Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTACU",
        "name": "MedTech Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "MTACW",
        "name": "MedTech Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "MTBC",
        "name": "CareCloud Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTBCP",
        "name": "CareCloud Inc. 11% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "MTC",
        "name": "MMTec Inc. Common Shares",
        "country": "China"
      },
      {
        "symbol": "MTCH",
        "name": "Match Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTCR",
        "name": "Metacrine Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTEM",
        "name": "Molecular Templates Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTEX",
        "name": "Mannatech Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTLS",
        "name": "Materialise NV American Depositary Shares",
        "country": "Belgium"
      },
      {
        "symbol": "MTP",
        "name": "Midatech Pharma PLC American Depositary Shs",
        "country": "United Kingdom"
      },
      {
        "symbol": "MTRX",
        "name": "Matrix Service Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTRY",
        "name": "Monterey Bio Acquisition Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTRYU",
        "name": "Monterey Bio Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "MTRYW",
        "name": "Monterey Bio Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "MTSI",
        "name": "MACOM Technology Solutions Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTTR",
        "name": "Matterport Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MTTRW",
        "name": "Matterport Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MU",
        "name": "Micron Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MUDS",
        "name": "Mudrick Capital Acquisition Corporation II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MUDSU",
        "name": "Mudrick Capital Acquisition Corporation II Unit",
        "country": "United States"
      },
      {
        "symbol": "MUDSW",
        "name": "Mudrick Capital Acquisition Corporation II Warrant",
        "country": "United States"
      },
      {
        "symbol": "MULN",
        "name": "Mullen Automotive Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MVBF",
        "name": "MVB Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MVIS",
        "name": "MicroVision Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MVST",
        "name": "Microvast Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MVSTW",
        "name": "Microvast Holdings Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "MXCT",
        "name": "MaxCyte Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MXL",
        "name": "MaxLinear Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYFW",
        "name": "First Western Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYGN",
        "name": "Myriad Genetics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYMD",
        "name": "MyMD Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYNA",
        "name": "Mynaric AG American Depository Shares",
        "country": "Germany"
      },
      {
        "symbol": "MYNZ",
        "name": "Mainz Biomed B.V. Ordinary Shares",
        "country": "Germany"
      },
      {
        "symbol": "MYPS",
        "name": "PLAYSTUDIOS Inc.  Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYPSW",
        "name": "PLAYSTUDIOS Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "MYRG",
        "name": "MYR Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "MYSZ",
        "name": "My Size Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "NAAC",
        "name": "North Atlantic Acquisition Corporation Class A Ordinary Share",
        "country": "Malta"
      },
      {
        "symbol": "NAACU",
        "name": "North Atlantic Acquisition Corporation Unit",
        "country": "Malta"
      },
      {
        "symbol": "NAACW",
        "name": "North Atlantic Acquisition Corporation Warrant",
        "country": "Malta"
      },
      {
        "symbol": "NAII",
        "name": "Natural Alternatives International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NAKD",
        "name": "Cenntro Electric Group Limited Ordinary Shares",
        "country": "New Zealand"
      },
      {
        "symbol": "NAOV",
        "name": "NanoVibronix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NARI",
        "name": "Inari Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NATH",
        "name": "Nathan's Famous Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NATI",
        "name": "National Instruments Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NATR",
        "name": "Nature's Sunshine Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NAUT",
        "name": "Nautilus Biotechnolgy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NAVI",
        "name": "Navient Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBEV",
        "name": "NewAge Inc. Common Stock (Delaware)",
        "country": "United States"
      },
      {
        "symbol": "NBIX",
        "name": "Neurocrine Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBN",
        "name": "Northeast Bank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBRV",
        "name": "Nabriva Therapeutics plc Ordinary Shares Ireland",
        "country": "Ireland"
      },
      {
        "symbol": "NBSE",
        "name": "NeuBase Therapeutics Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBST",
        "name": "Newbury Street Acquisition Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBTB",
        "name": "NBT Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NBTX",
        "name": "Nanobiotix S.A. American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "NCAC",
        "name": "Newcourt Acquisition Corp Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "NCACU",
        "name": "Newcourt Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "NCACW",
        "name": "Newcourt Acquisition Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "NCBS",
        "name": "Nicolet Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NCMI",
        "name": "National CineMedia Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NCNA",
        "name": "NuCana plc American Depositary Share",
        "country": "United Kingdom"
      },
      {
        "symbol": "NCNO",
        "name": "nCino Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NCSM",
        "name": "NCS Multistage Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NCTY",
        "name": "The9 Limited American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "NDAC",
        "name": "NightDragon Acquisition Corp. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "NDACU",
        "name": "NightDragon Acquisition Corp. SCALE Units",
        "country": "United States"
      },
      {
        "symbol": "NDACW",
        "name": "NightDragon Acquisition Corp. Warrants to purchase Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "NDAQ",
        "name": "Nasdaq Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NDLS",
        "name": "Noodles & Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NDRA",
        "name": "ENDRA Life Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NDRAW",
        "name": "ENDRA Life Sciences Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "NDSN",
        "name": "Nordson Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NECB",
        "name": "NorthEast Community Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NEGG",
        "name": "Newegg Commerce Inc. Common Shares",
        "country": "China"
      },
      {
        "symbol": "NEO",
        "name": "NeoGenomics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NEOG",
        "name": "Neogen Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NEON",
        "name": "Neonode Inc. Common Stock",
        "country": "Sweden"
      },
      {
        "symbol": "NEPH",
        "name": "Nephros Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NEPT",
        "name": "Neptune Wellness Solutions Inc. Ordinary Shares",
        "country": "Canada"
      },
      {
        "symbol": "NERV",
        "name": "Minerva Neurosciences Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NESR",
        "name": "National Energy Services Reunited Corp. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "NESRW",
        "name": "National Energy Services Reunited Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NEWT",
        "name": "Newtek Business Services Corp. Common Stock (Maryland)",
        "country": "United States"
      },
      {
        "symbol": "NEWTL",
        "name": "Newtek Business Services Corp. 5.75% Notes due 2024",
        "country": "United States"
      },
      {
        "symbol": "NEWTZ",
        "name": "Newtek Business Services Corp. 5.50% Notes Due 2026",
        "country": "United States"
      },
      {
        "symbol": "NEXI",
        "name": "NexImmune Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NEXT",
        "name": "NextDecade Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NFBK",
        "name": "Northfield Bancorp Inc. Common Stock (Delaware)",
        "country": "United States"
      },
      {
        "symbol": "NFE",
        "name": "New Fortress Energy Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NFLX",
        "name": "Netflix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NGM",
        "name": "NGM Biopharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NGMS",
        "name": "NeoGames S.A. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NH",
        "name": "NantHealth Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NHIC",
        "name": "NewHold Investment Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NHICU",
        "name": "NewHold Investment Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "NHTC",
        "name": "Natural Health Trends Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NICE",
        "name": "NICE Ltd American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NICK",
        "name": "Nicholas Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NISN",
        "name": "NiSun International Enterprise Development Group Co. Ltd. Class A Common Shares",
        "country": "China"
      },
      {
        "symbol": "NIU",
        "name": "Niu Technologies American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "NKLA",
        "name": "Nikola Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NKSH",
        "name": "National Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NKTR",
        "name": "Nektar Therapeutics  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NKTX",
        "name": "Nkarta Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NLIT",
        "name": "Northern Lights Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NLITW",
        "name": "Northern Lights Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "NLOK",
        "name": "NortonLifeLock Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NLSP",
        "name": "NLS Pharmaceutics Ltd. Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "NLSPW",
        "name": "NLS Pharmaceutics Ltd. Warrant",
        "country": "Switzerland"
      },
      {
        "symbol": "NLTX",
        "name": "Neoleukin Therapeutics Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "NMFC",
        "name": "New Mountain Finance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NMIH",
        "name": "NMI Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NMMC",
        "name": "North Mountain Merger Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NMMCU",
        "name": "North Mountain Merger Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "NMMCW",
        "name": "North Mountain Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NMRD",
        "name": "Nemaura Medical Inc. Common Stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "NMRK",
        "name": "Newmark Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NMTC",
        "name": "NeuroOne Medical Technologies Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NMTR",
        "name": "9 Meters Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NN",
        "name": "NextNav Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NNAVW",
        "name": "NextNav Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NNBR",
        "name": "NN Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NNDM",
        "name": "Nano Dimension Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NNOX",
        "name": "NANO-X IMAGING LTD Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NOAC",
        "name": "Natural Order Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NOACU",
        "name": "Natural Order Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "NOACW",
        "name": "Natural Order Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NODK",
        "name": "NI Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NOTV",
        "name": "Inotiv Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NOVN",
        "name": "Novan Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NOVT",
        "name": "Novanta Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NOVV",
        "name": "Nova Vision Acquisition Corp. Ordinary share",
        "country": "Hong Kong"
      },
      {
        "symbol": "NOVVR",
        "name": "Nova Vision Acquisition Corp. Rights",
        "country": "Hong Kong"
      },
      {
        "symbol": "NOVVU",
        "name": "Nova Vision Acquisition Corp. Unit",
        "country": "Hong Kong"
      },
      {
        "symbol": "NOVVW",
        "name": "Nova Vision Acquisition Corp. Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "NPABU",
        "name": "New Providence Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "NPABW",
        "name": "New Providence Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "NPCE",
        "name": "Neuropace Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NRAC",
        "name": "Noble Rock Acquisition Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "NRACU",
        "name": "Noble Rock Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "NRACW",
        "name": "Noble Rock Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "NRBO",
        "name": "NeuroBo Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NRC",
        "name": "National Research Corporation Common Stock (Delaware)",
        "country": "United States"
      },
      {
        "symbol": "NRDS",
        "name": "NerdWallet Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NRIM",
        "name": "Northrim BanCorp Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NRIX",
        "name": "Nurix Therapeutics Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "NRSN",
        "name": "NeuroSense Therapeutics Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NRSNW",
        "name": "NeuroSense Therapeutics Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "NRXP",
        "name": "NRX Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NRXPW",
        "name": "NRX Pharmaceuticals Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NSEC",
        "name": "National Security Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NSIT",
        "name": "Insight Enterprises Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NSPR",
        "name": "InspireMD Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "NSPRZ",
        "name": "InspireMD Inc. Series B Warrants",
        "country": "Israel"
      },
      {
        "symbol": "NSSC",
        "name": "NAPCO Security Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NSTG",
        "name": "NanoString Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NSYS",
        "name": "Nortech Systems Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTAP",
        "name": "NetApp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTCT",
        "name": "NetScout Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTES",
        "name": "NetEase Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "NTGR",
        "name": "NETGEAR Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTIC",
        "name": "Northern Technologies International Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTLA",
        "name": "Intellia Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTNX",
        "name": "Nutanix Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTRA",
        "name": "Natera Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTRB",
        "name": "Nutriband Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTRBW",
        "name": "Nutriband Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "NTRS",
        "name": "Northern Trust Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTRSO",
        "name": "Northern Trust Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of Series E Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "NTUS",
        "name": "Natus Medical Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NTWK",
        "name": "NetSol Technologies Inc. Common  Stock",
        "country": "United States"
      },
      {
        "symbol": "NUAN",
        "name": "Nuance Communications Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NURO",
        "name": "NeuroMetrix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NUVA",
        "name": "NuVasive Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NUVL",
        "name": "Nuvalent Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NUWE",
        "name": "Nuwellis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NUZE",
        "name": "NuZee Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVACU",
        "name": "NorthView Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "NVAX",
        "name": "Novavax Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVCN",
        "name": "Neovasc Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "NVCR",
        "name": "NovoCure Limited Ordinary Shares",
        "country": "Jersey"
      },
      {
        "symbol": "NVDA",
        "name": "NVIDIA Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVEC",
        "name": "NVE Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVEE",
        "name": "NV5 Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVEI",
        "name": "Nuvei Corporation Subordinate Voting Shares",
        "country": "Canada"
      },
      {
        "symbol": "NVFY",
        "name": "Nova Lifestyle Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVIV",
        "name": "InVivo Therapeutics Holdings Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVMI",
        "name": "Nova Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "NVNO",
        "name": "enVVeno Medical Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVNOW",
        "name": "enVVeno Medical Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "NVOS",
        "name": "Novo Integrated Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVSA",
        "name": "New Vista Acquisition Corp Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "NVSAU",
        "name": "New Vista Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "NVSAW",
        "name": "New Vista Acquisition Corp. Warrant ",
        "country": "United States"
      },
      {
        "symbol": "NVTS",
        "name": "Navitas Semiconductor Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NVTSW",
        "name": "Navitas Semiconductor Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "NVVE",
        "name": "Nuvve Holding Corp. Common Stock",
        "country": "China"
      },
      {
        "symbol": "NVVEW",
        "name": "Nuvve Holding Corp. Warrant",
        "country": "China"
      },
      {
        "symbol": "NWBI",
        "name": "Northwest Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWE",
        "name": "NorthWestern Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWFL",
        "name": "Norwood Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWL",
        "name": "Newell Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWLI",
        "name": "National Western Life Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWPX",
        "name": "Northwest Pipe Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWS",
        "name": "News Corporation Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NWSA",
        "name": "News Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXGL",
        "name": "NexGel Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXGLW",
        "name": "NexGel Inc Warrant",
        "country": "United States"
      },
      {
        "symbol": "NXGN",
        "name": "NextGen Healthcare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXPI",
        "name": "NXP Semiconductors N.V. Common Stock",
        "country": "Netherlands"
      },
      {
        "symbol": "NXST",
        "name": "Nexstar Media Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXTC",
        "name": "NextCure Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXTD",
        "name": "Nxt-ID Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NXTP",
        "name": "NextPlay Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NYMT",
        "name": "New York Mortgage Trust Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "NYMTL",
        "name": "New York Mortgage Trust Inc. 6.875% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock $0.01 par value per share",
        "country": "United States"
      },
      {
        "symbol": "NYMTM",
        "name": "New York Mortgage Trust Inc. 7.875% Series E Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "NYMTN",
        "name": "New York Mortgage Trust Inc. 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "NYMTZ",
        "name": "New York Mortgage Trust Inc. 7.000% Series G Cumulative Redeemable Preferred Stock $0.01 par value per share",
        "country": "United States"
      },
      {
        "symbol": "NYMX",
        "name": "Nymox Pharmaceutical Corporation Common Stock (Bahamas)",
        "country": "Canada"
      },
      {
        "symbol": "NYXH",
        "name": "Nyxoah SA Ordinary Shares",
        "country": "Belgium"
      },
      {
        "symbol": "OAS",
        "name": "Oasis Petroleum Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OB",
        "name": "Outbrain Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OBAS",
        "name": "Optibase Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "OBCI",
        "name": "Ocean Bio-Chem Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OBLG",
        "name": "Oblong Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OBNK",
        "name": "Origin Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OBSV",
        "name": "ObsEva SA Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "OBT",
        "name": "Orange County Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCAX",
        "name": "OCA Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCAXU",
        "name": "OCA Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "OCAXW",
        "name": "OCA Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OCC",
        "name": "Optical Cable Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCCI",
        "name": "OFS Credit Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCCIN",
        "name": "OFS Credit Company Inc. 5.25% Series E Term Preferred Stock Due 2026",
        "country": "United States"
      },
      {
        "symbol": "OCCIO",
        "name": "OFS Credit Company Inc. 6.125% Series C Term Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "OCDX",
        "name": "Ortho Clinical Diagnostics Holdings plc Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "OCFC",
        "name": "OceanFirst Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCG",
        "name": "Oriental Culture Holding LTD Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "OCGN",
        "name": "Ocugen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCSL",
        "name": "Oaktree Specialty Lending Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCUL",
        "name": "Ocular Therapeutix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCUP",
        "name": "Ocuphire Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OCX",
        "name": "Oncocyte Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ODFL",
        "name": "Old Dominion Freight Line Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ODP",
        "name": "The ODP Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ODT",
        "name": "Odonate Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OEG",
        "name": "Orbital Energy Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OEPW",
        "name": "One Equity Partners Open Water I Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OEPWU",
        "name": "One Equity Partners Open Water I Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "OEPWW",
        "name": "One Equity Partners Open Water I Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OESX",
        "name": "Orion Energy Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OFED",
        "name": "Oconee Federal Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OFIX",
        "name": "Orthofix Medical Inc. Common Stock (DE)",
        "country": "Curacao"
      },
      {
        "symbol": "OFLX",
        "name": "Omega Flex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OFS",
        "name": "OFS Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OFSSH",
        "name": "OFS Capital Corporation 4.95% Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "OGI",
        "name": "Organigram Holdings Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "OHAA",
        "name": "OPY Acquisition Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OHAAU",
        "name": "OPY Acquisition Corp. I Units",
        "country": "United States"
      },
      {
        "symbol": "OHAAW",
        "name": "OPY Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "OHPA",
        "name": "Orion Acquisition Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "OHPAU",
        "name": "Orion Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "OHPAW",
        "name": "Orion Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OIIM",
        "name": "O2Micro International Limited American Depositary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OKTA",
        "name": "Okta Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OLB",
        "name": "The OLB Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OLED",
        "name": "Universal Display Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OLITU",
        "name": "OmniLit Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "OLK",
        "name": "Olink Holding AB (publ) American Depositary Shares",
        "country": "Sweden"
      },
      {
        "symbol": "OLLI",
        "name": "Ollie's Bargain Outlet Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OLMA",
        "name": "Olema Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OLPX",
        "name": "Olaplex Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OM",
        "name": "Outset Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OMAB",
        "name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V. ADS",
        "country": "Mexico"
      },
      {
        "symbol": "OMCL",
        "name": "Omnicell Inc. Common Stock ($0.001 par value)",
        "country": "United States"
      },
      {
        "symbol": "OMEG",
        "name": "Omega Alpha SPAC Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "OMER",
        "name": "Omeros Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OMEX",
        "name": "Odyssey Marine Exploration Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OMGA",
        "name": "Omega Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OMIC",
        "name": "Singular Genomics Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OMP",
        "name": "Oasis Midstream Partners LP Common Units Representing Limited Partner Interests",
        "country": "United States"
      },
      {
        "symbol": "OMQS",
        "name": "OMNIQ Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ON",
        "name": "ON Semiconductor Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONB",
        "name": "Old National Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONCR",
        "name": "Oncorus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONCS",
        "name": "OncoSec Medical Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONCT",
        "name": "Oncternal Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONCY",
        "name": "Oncolytics Biotech Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "ONDS",
        "name": "Ondas Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONEM",
        "name": "1Life Healthcare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONEW",
        "name": "OneWater Marine Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONTX",
        "name": "Onconova Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONVO",
        "name": "Organovo Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ONYX",
        "name": "Onyx Acquisition Co. I Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ONYXU",
        "name": "Onyx Acquisition Co. I Unit",
        "country": "United States"
      },
      {
        "symbol": "ONYXW",
        "name": "Onyx Acquisition Co. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "OP",
        "name": "OceanPal Inc. Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "OPBK",
        "name": "OP Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPCH",
        "name": "Option Care Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPEN",
        "name": "Opendoor Technologies Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPGN",
        "name": "OpGen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPHC",
        "name": "OptimumBank Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPI",
        "name": "Office Properties Income Trust Common Shares of Beneficial Interest",
        "country": "United States"
      },
      {
        "symbol": "OPINL",
        "name": "Office Properties Income Trust 6.375% Senior Notes due 2050",
        "country": "United States"
      },
      {
        "symbol": "OPK",
        "name": "OPKO Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPNT",
        "name": "Opiant Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPOF",
        "name": "Old Point Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPRA",
        "name": "Opera Limited American Depositary Shares",
        "country": "Norway"
      },
      {
        "symbol": "OPRT",
        "name": "Oportun Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPRX",
        "name": "OptimizeRx Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OPT",
        "name": "Opthea Limited American Depositary Shares",
        "country": "Australia"
      },
      {
        "symbol": "OPTN",
        "name": "OptiNose Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORGN",
        "name": "Origin Materials Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORGNW",
        "name": "Origin Materials Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "ORGO",
        "name": "Organogenesis Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORGS",
        "name": "Orgenesis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORIA",
        "name": "Orion Biotech Opportunities Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "ORIC",
        "name": "Oric Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORLY",
        "name": "O'Reilly Automotive Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORMP",
        "name": "Oramed Pharmaceuticals Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "ORPH",
        "name": "Orphazyme A/S American Depositary Shares",
        "country": "Denmark"
      },
      {
        "symbol": "ORRF",
        "name": "Orrstown Financial Services Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ORTX",
        "name": "Orchard Therapeutics plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "OSAT",
        "name": "Orbsat Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSATW",
        "name": "Orbsat Corp Warrants",
        "country": "United States"
      },
      {
        "symbol": "OSBC",
        "name": "Old Second Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSIS",
        "name": "OSI Systems Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "OSMT",
        "name": "Osmotica Pharmaceuticals plc Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "OSPN",
        "name": "OneSpan Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSS",
        "name": "One Stop Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSTK",
        "name": "Overstock.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSTR",
        "name": "Oyster Enterprises Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSTRU",
        "name": "Oyster Enterprises Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "OSTRW",
        "name": "Oyster Enterprises Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OSUR",
        "name": "OraSure Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OSW",
        "name": "OneSpaWorld Holdings Limited Common Shares",
        "country": "Bahamas"
      },
      {
        "symbol": "OTEC",
        "name": "OceanTech Acquisitions I Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OTECW",
        "name": "OceanTech Acquisitions I Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OTEX",
        "name": "Open Text Corporation Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "OTIC",
        "name": "Otonomy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OTLK",
        "name": "Outlook Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OTLKW",
        "name": "Outlook Therapeutics Inc. Series A Warrant Expiring 02/18/2022",
        "country": "United States"
      },
      {
        "symbol": "OTLY",
        "name": "Oatly Group AB American Depositary Shares",
        "country": "Sweden"
      },
      {
        "symbol": "OTMO",
        "name": "Otonomo Technologies Ltd. Ordinary shares",
        "country": "Israel"
      },
      {
        "symbol": "OTMOW",
        "name": "Otonomo Technologies Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "OTRA",
        "name": "OTR Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OTRAU",
        "name": "OTR Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "OTRAW",
        "name": "OTR Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "OTRK",
        "name": "Ontrak Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OTRKP",
        "name": "Ontrak Inc. 9.50% Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "OTTR",
        "name": "Otter Tail Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OVBC",
        "name": "Ohio Valley Banc Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OVID",
        "name": "Ovid Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OVLY",
        "name": "Oak Valley Bancorp (CA) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OXAC",
        "name": "Oxbridge Acquisition Corp. Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OXACU",
        "name": "Oxbridge Acquisition Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OXACW",
        "name": "Oxbridge Acquisition Corp. Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OXBR",
        "name": "Oxbridge Re Holdings Limited Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OXBRW",
        "name": "Oxbridge Re Holdings Limited Warrant expiring 3/26/2024",
        "country": "Cayman Islands"
      },
      {
        "symbol": "OXLC",
        "name": "Oxford Lane Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OXLCL",
        "name": "Oxford Lane Capital Corp. 6.75% Notes due 2031",
        "country": "United States"
      },
      {
        "symbol": "OXLCM",
        "name": "Oxford Lane Capital Corp. 6.75% Series 2024 Term Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "OXLCO",
        "name": "Oxford Lane Capital Corp. Preferred Stock Shares 6.00% Series 2029",
        "country": "United States"
      },
      {
        "symbol": "OXLCP",
        "name": "Oxford Lane Capital Corp. 6.25% Series 2027 Term Preferred Shares",
        "country": "United States"
      },
      {
        "symbol": "OXSQ",
        "name": "Oxford Square Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OXSQG",
        "name": "Oxford Square Capital Corp. 5.50% Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "OXSQL",
        "name": "Oxford Square Capital Corp. 6.50% Notes due 2024",
        "country": "United States"
      },
      {
        "symbol": "OXSQZ",
        "name": "Oxford Square Capital Corp. 6.25% Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "OXUS",
        "name": "Oxus Acquisition Corp. Class A Ordinary Shares",
        "country": "Kazakhstan"
      },
      {
        "symbol": "OXUSU",
        "name": "Oxus Acquisition Corp. Unit",
        "country": "Kazakhstan"
      },
      {
        "symbol": "OXUSW",
        "name": "Oxus Acquisition Corp. Warrant",
        "country": "Kazakhstan"
      },
      {
        "symbol": "OYST",
        "name": "Oyster Point Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OZK",
        "name": "Bank OZK Common Stock",
        "country": "United States"
      },
      {
        "symbol": "OZKAP",
        "name": "Bank OZK 4.625% Series A Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "OZON",
        "name": "Ozon Holdings PLC American Depositary Shares each ADS representing one ordinary share",
        "country": "Cyprus"
      },
      {
        "symbol": "PAA",
        "name": "Plains All American Pipeline L.P. Common Units representing Limited Partner Interests",
        "country": "United States"
      },
      {
        "symbol": "PAAS",
        "name": "Pan American Silver Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "PACB",
        "name": "Pacific Biosciences of California Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PACW",
        "name": "PacWest Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PACX",
        "name": "Pioneer Merger Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PACXU",
        "name": "Pioneer Merger Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PACXW",
        "name": "Pioneer Merger Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PAE",
        "name": "PAE Incorporated Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAEWW",
        "name": "PAE Incorporated Warrants",
        "country": "United States"
      },
      {
        "symbol": "PAFO",
        "name": "Pacifico Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAFOR",
        "name": "Pacifico Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "PAFOU",
        "name": "Pacifico Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "PAGP",
        "name": "Plains GP Holdings L.P. Class A Units representing Limited Partner Interests",
        "country": "United States"
      },
      {
        "symbol": "PAHC",
        "name": "Phibro Animal Health Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAIC",
        "name": "Petra Acquisition Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAICU",
        "name": "Petra Acquisition Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "PAICW",
        "name": "Petra Acquisition Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PALI",
        "name": "Palisade Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PALT",
        "name": "Paltalk Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PANA",
        "name": "Panacea Acquisition Corp. II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "PANL",
        "name": "Pangaea Logistics Solutions Ltd. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "PANW",
        "name": "Palo Alto Networks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAQC",
        "name": "Provident Acquisition Corp. Class A Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "PAQCU",
        "name": "Provident Acquisition Corp. Units",
        "country": "Hong Kong"
      },
      {
        "symbol": "PAQCW",
        "name": "Provident Acquisition Corp. Warrant",
        "country": "Hong Kong"
      },
      {
        "symbol": "PASG",
        "name": "Passage Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PATI",
        "name": "Patriot Transportation Holding Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PATK",
        "name": "Patrick Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAVM",
        "name": "PAVmed Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAVMZ",
        "name": "PAVmed Inc. Series Z Warrant",
        "country": "United States"
      },
      {
        "symbol": "PAX",
        "name": "Patria Investments Limited Class A Common Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "PAYA",
        "name": "Paya Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAYO",
        "name": "Payoneer Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAYOW",
        "name": "Payoneer Global Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PAYS",
        "name": "Paysign Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PAYX",
        "name": "Paychex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBAX",
        "name": "Phoenix Biotech Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBAXU",
        "name": "Phoenix Biotech Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PBAXW",
        "name": "Phoenix Biotech Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "PBBK",
        "name": "PB Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBCT",
        "name": "People's United Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBCTP",
        "name": "People's United Financial Inc. Perpetual Preferred Series A Fixed-to-floating Rate",
        "country": "United States"
      },
      {
        "symbol": "PBFS",
        "name": "Pioneer Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBHC",
        "name": "Pathfinder Bancorp Inc. Common Stock (MD)",
        "country": "United States"
      },
      {
        "symbol": "PBIP",
        "name": "Prudential Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBLA",
        "name": "Panbela Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBPB",
        "name": "Potbelly Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PBTS",
        "name": "Powerbridge Technologies Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "PBYI",
        "name": "Puma Biotechnology Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCAR",
        "name": "PACCAR Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCB",
        "name": "PCB Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCCT",
        "name": "Perception Capital Corp. II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "PCCTU",
        "name": "Perception Capital Corp. II Units",
        "country": "United States"
      },
      {
        "symbol": "PCCTW",
        "name": "Perception Capital Corp. II Warrants",
        "country": "United States"
      },
      {
        "symbol": "PCH",
        "name": "PotlatchDeltic Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCOM",
        "name": "Points.com Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "PCRX",
        "name": "Pacira BioSciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCSA",
        "name": "Processa Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCSB",
        "name": "PCSB Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCT",
        "name": "PureCycle Technologies Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "PCTI",
        "name": "PCTEL Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCTTU",
        "name": "PureCycle Technologies Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "PCTTW",
        "name": "PureCycle Technologies Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PCTY",
        "name": "Paylocity Holding Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCVX",
        "name": "Vaxcyte Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCX",
        "name": "Parsec Capital Acquisitions Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCXCU",
        "name": "Parsec Capital Acquisitions Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "PCXCW",
        "name": "Parsec Capital Acquisitions Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "PCYG",
        "name": "Park City Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PCYO",
        "name": "Pure Cycle Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PDCE",
        "name": "PDC Energy Inc. Common Stock (Delaware)",
        "country": "United States"
      },
      {
        "symbol": "PDCO",
        "name": "Patterson Companies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PDD",
        "name": "Pinduoduo Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "PDEX",
        "name": "Pro-Dex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PDFS",
        "name": "PDF Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PDLB",
        "name": "PDL Community Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PDSB",
        "name": "PDS Biotechnology Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEAR",
        "name": "Pear Therapeutics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEARW",
        "name": "Pear Therapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PEBK",
        "name": "Peoples Bancorp of North Carolina Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEBO",
        "name": "Peoples Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PECO",
        "name": "Phillips Edison & Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEGA",
        "name": "Pegasystems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEGR",
        "name": "Project Energy Reimagined Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PEGRU",
        "name": "Project Energy Reimagined Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PENN",
        "name": "Penn National Gaming Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEP",
        "name": "PepsiCo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PEPL",
        "name": "PepperLime Health Acquisition Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PEPLU",
        "name": "PepperLime Health Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "PEPLW",
        "name": "PepperLime Health Acquisition Corporation Warrrant",
        "country": "United States"
      },
      {
        "symbol": "PERI",
        "name": "Perion Network Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "PESI",
        "name": "Perma-Fix Environmental Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PETQ",
        "name": "PetIQ Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PETS",
        "name": "PetMed Express Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PETV",
        "name": "PetVivo Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PETVW",
        "name": "PetVivo Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PETZ",
        "name": "TDH Holdings Inc. Common Shares",
        "country": "China"
      },
      {
        "symbol": "PFBC",
        "name": "Preferred Bank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFC",
        "name": "Premier Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFDR",
        "name": "Pathfinder Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "PFDRU",
        "name": "Pathfinder Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "PFDRW",
        "name": "Pathfinder Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "PFG",
        "name": "Principal Financial Group Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFHD",
        "name": "Professional Holding Corp. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "PFIE",
        "name": "Profire Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFIN",
        "name": "P & F Industries Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFIS",
        "name": "Peoples Financial Services Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFLT",
        "name": "PennantPark Floating Rate Capital Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFMT",
        "name": "Performant Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFSW",
        "name": "PFSweb Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFTA",
        "name": "Portage Fintech Acquisition Corporation Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PFTAU",
        "name": "Portage Fintech Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "PFTAW",
        "name": "Portage Fintech Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "PFX",
        "name": "PhenixFIN Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PFXNL",
        "name": "PhenixFIN Corporation 6.125% Senior Notes due 2023",
        "country": "United States"
      },
      {
        "symbol": "PFXNZ",
        "name": "PhenixFIN Corporation  5.25% Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "PGC",
        "name": "Peapack-Gladstone Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PGEN",
        "name": "Precigen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PGNY",
        "name": "Progyny Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PGRW",
        "name": "Progress Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PGRWU",
        "name": "Progress Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "PGRWW",
        "name": "Progress Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PHAR",
        "name": "Pharming Group N.V. ADS each representing 10 ordinary shares",
        "country": "Netherlands"
      },
      {
        "symbol": "PHAS",
        "name": "PhaseBio Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PHAT",
        "name": "Phathom Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PHCF",
        "name": "Puhui Wealth Investment Management Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "PHIC",
        "name": "Population Health Investment Co. Inc. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PHICU",
        "name": "Population Health Investment Co. Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "PHICW",
        "name": "Population Health Investment Co. Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PHIO",
        "name": "Phio Pharmaceuticals Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PHUN",
        "name": "Phunware Inc. Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "PHUNW",
        "name": "Phunware Inc. Warrants",
        "country": "Greece"
      },
      {
        "symbol": "PHVS",
        "name": "Pharvaris N.V. Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "PI",
        "name": "Impinj Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PIII",
        "name": "P3 Health Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PIIIW",
        "name": "P3 Health Partners Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PIK",
        "name": "Kidpik Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PINC",
        "name": "Premier Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PIRS",
        "name": "Pieris Pharmaceuticals Inc. Common Stock",
        "country": "Germany"
      },
      {
        "symbol": "PIXY",
        "name": "ShiftPixy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PKBK",
        "name": "Parke Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PKOH",
        "name": "Park-Ohio Holdings Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLAB",
        "name": "Photronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLAY",
        "name": "Dave & Buster's Entertainment Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLBC",
        "name": "Plumas Bancorp",
        "country": "United State"
      },
      {
        "symbol": "PLBY",
        "name": "PLBY Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLCE",
        "name": "Children's Place Inc. (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLIN",
        "name": "China Xiangtai Food Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "PLL",
        "name": "Piedmont Lithium Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLMI",
        "name": "Plum Acquisition Corp. I Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "PLMIU",
        "name": "Plum Acquisition Corp. I Units",
        "country": "United States"
      },
      {
        "symbol": "PLMIW",
        "name": "Plum Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "PLMR",
        "name": "Palomar Holdings Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "PLPC",
        "name": "Preformed Line Products Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLRX",
        "name": "Pliant Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLSE",
        "name": "Pulse Biosciences Inc Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "PLTK",
        "name": "Playtika Holding Corp. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "PLUG",
        "name": "Plug Power Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLUS",
        "name": "ePlus inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLXP",
        "name": "PLx Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLXS",
        "name": "Plexus Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PLYA",
        "name": "Playa Hotels & Resorts N.V. Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "PMCB",
        "name": "PharmaCyte  Biotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PMD",
        "name": "Psychemedics Corporation",
        "country": "United States"
      },
      {
        "symbol": "PME",
        "name": "Pingtan Marine Enterprise Ltd.",
        "country": "China"
      },
      {
        "symbol": "PMGM",
        "name": "Priveterra Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PMGMU",
        "name": "Priveterra Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "PMGMW",
        "name": "Priveterra Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PMTS",
        "name": "CPI Card Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PMVP",
        "name": "PMV Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNBK",
        "name": "Patriot National Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNFP",
        "name": "Pinnacle Financial Partners Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNFPP",
        "name": "Pinnacle Financial Partners Inc. Depositary shares of Pinnacle Financial Partners Inc. each representing a 1/40th Interest in a share of its 6.75% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "PNNT",
        "name": "PennantPark Investment Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNRG",
        "name": "PrimeEnergy Resources Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNT",
        "name": "POINT Biopharma Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PNTG",
        "name": "The Pennant Group Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "POAI",
        "name": "Predictive Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PODD",
        "name": "Insulet Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POLA",
        "name": "Polar Power Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PONO",
        "name": "Pono Capital Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PONOW",
        "name": "Pono Capital Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "POOL",
        "name": "Pool Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POSH",
        "name": "Poshmark Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POW",
        "name": "Powered Brands Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "POWI",
        "name": "Power Integrations Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POWL",
        "name": "Powell Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POWRU",
        "name": "Powered Brands Units",
        "country": "United States"
      },
      {
        "symbol": "POWRW",
        "name": "Powered Brands Warrants",
        "country": "United States"
      },
      {
        "symbol": "POWW",
        "name": "AMMO Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "POWWP",
        "name": "AMMO Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "PPBI",
        "name": "Pacific Premier Bancorp Inc",
        "country": "United States"
      },
      {
        "symbol": "PPBT",
        "name": "Purple Biotech Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "PPC",
        "name": "Pilgrim's Pride Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PPGH",
        "name": "Poema Global Holdings Corp. Class A Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "PPGHU",
        "name": "Poema Global Holdings Corp. Unit",
        "country": "China"
      },
      {
        "symbol": "PPGHW",
        "name": "Poema Global Holdings Corp. Warrant",
        "country": "China"
      },
      {
        "symbol": "PPHP",
        "name": "PHP Ventures Acquisition Corp. Class A Common Stock",
        "country": "Malaysia"
      },
      {
        "symbol": "PPHPR",
        "name": "PHP Ventures Acquisition Corp. Rights",
        "country": "Malaysia"
      },
      {
        "symbol": "PPHPW",
        "name": "PHP Ventures Acquisition Corp. Warrants",
        "country": "Malaysia"
      },
      {
        "symbol": "PPIH",
        "name": "Perma-Pipe International Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PPSI",
        "name": "Pioneer Power Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PPTA",
        "name": "Perpetua Resources Corp. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "PRAA",
        "name": "PRA Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRAX",
        "name": "Praxis Precision Medicines Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRCH",
        "name": "Porch Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRCT",
        "name": "PROCEPT BioRobotics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRDO",
        "name": "Perdoceo Education Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRDS",
        "name": "Pardes Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRFT",
        "name": "Perficient Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRFX",
        "name": "PainReform Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "PRGS",
        "name": "Progress Software Corporation Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "PRIM",
        "name": "Primoris Services Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRLD",
        "name": "Prelude Therapeutics Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRLHU",
        "name": "Pearl Holdings Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "PROC",
        "name": "Procaps Group S.A. Ordinary Shares",
        "country": "Luxembourg"
      },
      {
        "symbol": "PROCW",
        "name": "Procaps Group S.A. Warrants",
        "country": "Luxembourg"
      },
      {
        "symbol": "PROF",
        "name": "Profound Medical Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "PROG",
        "name": "Progenity Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PROV",
        "name": "Provident Financial Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRPH",
        "name": "ProPhase Labs Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "PRPL",
        "name": "Purple Innovation Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRPO",
        "name": "Precipio Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRQR",
        "name": "ProQR Therapeutics N.V. Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "PRSO",
        "name": "Peraso Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRSR",
        "name": "Prospector Capital Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "PRSRU",
        "name": "Prospector Capital Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PRSRW",
        "name": "Prospector Capital Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "PRTA",
        "name": "Prothena Corporation plc Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "PRTC",
        "name": "PureTech Health plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "PRTG",
        "name": "Portage Biotech Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "PRTH",
        "name": "Priority Technology Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRTK",
        "name": "Paratek Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRTS",
        "name": "CarParts.com Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRVA",
        "name": "Privia Health Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PRVB",
        "name": "Provention Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PSAG",
        "name": "Property Solutions Acquisition Corporation II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PSAGU",
        "name": "Property Solutions Acquisition Corporation II Units",
        "country": "United States"
      },
      {
        "symbol": "PSAGW",
        "name": "Property Solutions Acquisition Corporation II Warrant",
        "country": "United States"
      },
      {
        "symbol": "PSEC",
        "name": "Prospect Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PSHG",
        "name": "Performance Shipping Inc. Common Shares",
        "country": "Greece"
      },
      {
        "symbol": "PSMT",
        "name": "PriceSmart Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PSNL",
        "name": "Personalis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PSTI",
        "name": "Pluristem Therapeutics Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "PSTV",
        "name": "PLUS THERAPEUTICS Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "PSTX",
        "name": "Poseida Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PT",
        "name": "Pintec Technology Holdings Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "PTC",
        "name": "PTC Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTCT",
        "name": "PTC Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTE",
        "name": "PolarityTE Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTEN",
        "name": "Patterson-UTI Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTGX",
        "name": "Protagonist Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTIC",
        "name": "PropTech Investment Corporation II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTICU",
        "name": "PropTech Investment Corporation II Unit",
        "country": "United States"
      },
      {
        "symbol": "PTICW",
        "name": "PropTech Investment Corporation II Warrant",
        "country": "United States"
      },
      {
        "symbol": "PTIX",
        "name": "Protagenic Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTIXW",
        "name": "Protagenic Therapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PTLO",
        "name": "Portillo's Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTMN",
        "name": "Portman Ridge Finance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTNR",
        "name": "Partner Communications Company Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "PTOC",
        "name": "Pine Technology Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTOCU",
        "name": "Pine Technology Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PTOCW",
        "name": "Pine Technology Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PTON",
        "name": "Peloton Interactive Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTPI",
        "name": "Petros Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTRA",
        "name": "Proterra Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTRS",
        "name": "Partners Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTSI",
        "name": "P.A.M. Transportation Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PTVE",
        "name": "Pactiv Evergreen Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "PUBM",
        "name": "PubMatic Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PUCK",
        "name": "Goal Acquisitions Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PUCKU",
        "name": "Goal Acquisitions Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "PUCKW",
        "name": "Goal Acquisitions Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "PULM",
        "name": "Pulmatrix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PUYI",
        "name": "Puyi Inc. American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "PVBC",
        "name": "Provident Bancorp Inc. (MD) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PWFL",
        "name": "PowerFleet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PWOD",
        "name": "Penns Woods Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PWP",
        "name": "Perella Weinberg Partners Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PWPPW",
        "name": "Perella Weinberg Partners Warrant",
        "country": "United States"
      },
      {
        "symbol": "PXLW",
        "name": "Pixelworks Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PXS",
        "name": "Pyxis Tankers Inc. Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "PXSAP",
        "name": "Pyxis Tankers Inc. 7.75% Series A Cumulative Convertible Preferred Shares",
        "country": "Greece"
      },
      {
        "symbol": "PXSAW",
        "name": "Pyxis Tankers Inc. Warrant",
        "country": "Greece"
      },
      {
        "symbol": "PYCR",
        "name": "Paycor HCM Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PYPD",
        "name": "PolyPid Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "PYPL",
        "name": "PayPal Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PYR",
        "name": "PyroGenesis Canada Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "PYXS",
        "name": "Pyxis Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "PZZA",
        "name": "Papa John's International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QCOM",
        "name": "QUALCOMM Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QCRH",
        "name": "QCR Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QDEL",
        "name": "Quidel Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QFIN",
        "name": "360 DigiTech Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "QH",
        "name": "Quhuo Limited American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "QIPT",
        "name": "Quipt Home Medical Corp. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "QIWI",
        "name": "QIWI plc American Depositary Shares",
        "country": "Cyprus"
      },
      {
        "symbol": "QK",
        "name": "Q&K International Group Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "QLGN",
        "name": "Qualigen Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QLI",
        "name": "Qilian International Holding Group Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "QLYS",
        "name": "Qualys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QMCO",
        "name": "Quantum Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QNRX",
        "name": "Quoin Pharmaceuticals Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "QNST",
        "name": "QuinStreet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QQQX",
        "name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund Shares of Beneficial Interest",
        "country": "United States"
      },
      {
        "symbol": "QRHC",
        "name": "Quest Resource Holding Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QRTEA",
        "name": "Qurate Retail Inc. Series A Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "QRTEB",
        "name": "Qurate Retail Inc. Series B Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "QRTEP",
        "name": "Qurate Retail Inc. 8.0% Fixed Rate Cumulative Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "QRVO",
        "name": "Qorvo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QSI",
        "name": "Quantum-Si Incorporated Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QSIAW",
        "name": "Quantum-Si Incorporated Warrant",
        "country": "United States"
      },
      {
        "symbol": "QTNT",
        "name": "Quotient Limited Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "QTRX",
        "name": "Quanterix Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QTT",
        "name": "Qutoutiao Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "QUBT",
        "name": "Quantum Computing Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QUIK",
        "name": "QuickLogic Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QUMU",
        "name": "Qumu Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "QURE",
        "name": "uniQure N.V. Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "RACB",
        "name": "Research Alliance Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RADA",
        "name": "RADA Electronic Industries Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "RADI",
        "name": "Radius Global Infrastructure Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RAIL",
        "name": "FreightCar America Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RAIN",
        "name": "Rain Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RAM",
        "name": "Aries I Acquisition Corporation Class A Ordinary Share",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RAMMU",
        "name": "Aries I Acquisition Corporation Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RAMMW",
        "name": "Aries I Acquisition Corporation Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RAND",
        "name": "Rand Capital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RANI",
        "name": "Rani Therapeutics Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RAPT",
        "name": "RAPT Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RARE",
        "name": "Ultragenyx Pharmaceutical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RAVE",
        "name": "Rave Restaurant Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RBB",
        "name": "RBB Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RBBN",
        "name": "Ribbon Communications Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RBCAA",
        "name": "Republic Bancorp Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RBCN",
        "name": "Rubicon Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RBKB",
        "name": "Rhinebeck Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCACU",
        "name": "Revelstone Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "RCAT",
        "name": "Red Cat Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCEL",
        "name": "Avita Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCHG",
        "name": "Recharge Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCHGU",
        "name": "Recharge Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "RCHGW",
        "name": "Recharge Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RCII",
        "name": "Rent-A-Center Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCKT",
        "name": "Rocket Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCKY",
        "name": "Rocky Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCLF",
        "name": "Rosecliff Acquisition Corp I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCLFU",
        "name": "Rosecliff Acquisition Corp I Unit",
        "country": "United States"
      },
      {
        "symbol": "RCLFW",
        "name": "Rosecliff Acquisition Corp I Warrants",
        "country": "United States"
      },
      {
        "symbol": "RCM",
        "name": "R1 RCM Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCMT",
        "name": "RCM Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCON",
        "name": "Recon Technology Ltd. Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "RCRT",
        "name": "Recruiter.com Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RCRTW",
        "name": "Recruiter.com Group Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RDBX",
        "name": "Redbox Entertainment Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDBXW",
        "name": "Redbox Entertainment Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RDCM",
        "name": "Radcom Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "RDFN",
        "name": "Redfin Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDHL",
        "name": "Redhill Biopharma Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "RDI",
        "name": "Reading International Inc Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDIB",
        "name": "Reading International Inc Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDNT",
        "name": "RadNet Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDUS",
        "name": "Radius Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RDVT",
        "name": "Red Violet Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "RDWR",
        "name": "Radware Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "REAL",
        "name": "The RealReal Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REAX",
        "name": "The Real Brokerage Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "REDU",
        "name": "RISE Education Cayman Ltd American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "REE",
        "name": "REE Automotive Ltd. Class A Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "REEAW",
        "name": "REE Automotive Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "REED",
        "name": "Reeds Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REFI",
        "name": "Chicago Atlantic Real Estate Finance Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REFR",
        "name": "Research Frontiers Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REG",
        "name": "Regency Centers Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REGI",
        "name": "Renewable Energy Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REGN",
        "name": "Regeneron Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REKR",
        "name": "Rekor Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RELI",
        "name": "Reliance Global Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RELIW",
        "name": "Reliance Global Group Inc. Series A Warrants",
        "country": "United States"
      },
      {
        "symbol": "RELL",
        "name": "Richardson Electronics Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RELY",
        "name": "Remitly Global Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RENO",
        "name": "Renovare Environmental Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RENT",
        "name": "Rent the Runway Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REPH",
        "name": "Recro Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REPL",
        "name": "Replimune Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RESN",
        "name": "Resonant Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RETA",
        "name": "Reata Pharmaceuticals Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RETO",
        "name": "ReTo Eco-Solutions Inc. Common Shares",
        "country": "China"
      },
      {
        "symbol": "REVE",
        "name": "Alpine Acquisition Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REVEU",
        "name": "Alpine Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "REVEW",
        "name": "Alpine Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "REVH",
        "name": "Revolution Healthcare Acquisition Corp. SAIL Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "REVHU",
        "name": "Revolution Healthcare Acquisition Corp. SAIL Units",
        "country": "United States"
      },
      {
        "symbol": "REVHW",
        "name": "Revolution Healthcare Acquisition Corp. SAIL Warrant.",
        "country": "United States"
      },
      {
        "symbol": "REYN",
        "name": "Reynolds Consumer Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RFIL",
        "name": "RF Industries Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGC",
        "name": "Regencell Bioscience Holdings Limited Ordinary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "RGCO",
        "name": "RGC Resources Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGEN",
        "name": "Repligen Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGF",
        "name": "The Real Good Food Company Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGLD",
        "name": "Royal Gold Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGLS",
        "name": "Regulus Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGNX",
        "name": "REGENXBIO Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RGP",
        "name": "Resources Connection Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RIBT",
        "name": "RiceBran Technologies Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RICK",
        "name": "RCI Hospitality Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RICO",
        "name": "Agrico Acquisition Corp. Class A Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RICOU",
        "name": "Agrico Acquisition Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RICOW",
        "name": "Agrico Acquisition Corp. Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "RIDE",
        "name": "Lordstown Motors Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RIGL",
        "name": "Rigel Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RILY",
        "name": "B. Riley Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RILYG",
        "name": "B. Riley Financial Inc. 5.00% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "RILYK",
        "name": "B. Riley Financial Inc. 5.50% Senior Notes Due 2026",
        "country": "United States"
      },
      {
        "symbol": "RILYL",
        "name": "B. Riley Financial Inc. Depositary Shares each representing 1/1000th in a share of 7.375% Series B Cumulative Perpetual Preferred Stock par value $0.0001",
        "country": "United States"
      },
      {
        "symbol": "RILYM",
        "name": "B. Riley Financial Inc. 6.375% Senior Notes due 2025",
        "country": "United States"
      },
      {
        "symbol": "RILYN",
        "name": "B. Riley Financial Inc. 6.50% Senior Notes Due 2026",
        "country": "United States"
      },
      {
        "symbol": "RILYO",
        "name": "B. Riley Financial Inc. 6.75% Senior Notes due 2024",
        "country": "United States"
      },
      {
        "symbol": "RILYP",
        "name": "B. Riley Financial Inc. Depositary Shares each representing a 1/1000th fractional interest in a share of Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "RILYT",
        "name": "B. Riley Financial Inc. 6.00% Senior Notes Due 2028",
        "country": "United States"
      },
      {
        "symbol": "RILYZ",
        "name": "B. Riley Financial Inc. 5.25% Senior Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "RIOT",
        "name": "Riot Blockchain Inc.  Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "RIVN",
        "name": "Rivian Automotive Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RKDA",
        "name": "Arcadia Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RKLB",
        "name": "Rocket Lab USA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RKLBW",
        "name": "Rocket Lab USA Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RLAY",
        "name": "Relay Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RLMD",
        "name": "Relmada Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RLYB",
        "name": "Rallybio Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMBI",
        "name": "Richmond Mutual Bancorporation Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMBL",
        "name": "RumbleOn Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMBS",
        "name": "Rambus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMCF",
        "name": "Rocky Mountain Chocolate Factory Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMGC",
        "name": "RMG Acquisition Corp. III Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "RMGCU",
        "name": "RMG Acquisition Corp. III Unit",
        "country": "United States"
      },
      {
        "symbol": "RMGCW",
        "name": "RMG Acquisition Corp. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "RMNI",
        "name": "Rimini Street Inc. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMR",
        "name": "The RMR Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RMTI",
        "name": "Rockwell Medical Inc. (DE) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNA",
        "name": "Avidity Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNAZ",
        "name": "TransCode Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNDB",
        "name": "Randolph Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNER",
        "name": "Mount Rainier Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNERU",
        "name": "Mount Rainier Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "RNERW",
        "name": "Mount Rainier Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RNLX",
        "name": "Renalytix plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "RNST",
        "name": "Renasant Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNW",
        "name": "ReNew Energy Global plc Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "RNWK",
        "name": "RealNetworks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RNWWW",
        "name": "ReNew Energy Global plc Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "RNXT",
        "name": "RenovoRx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROAD",
        "name": "Construction Partners Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROC",
        "name": "ROC Energy Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROCAR",
        "name": "ROC Energy Acquisition Corp. Rights",
        "country": "United States"
      },
      {
        "symbol": "ROCAU",
        "name": "ROC Energy Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ROCC",
        "name": "Ranger Oil Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROCG",
        "name": "Roth CH Acquisition IV Co. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROCGW",
        "name": "Roth CH Acquisition IV Co. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ROCK",
        "name": "Gibraltar Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROCL",
        "name": "Roth CH Acquisition V Co. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROCLU",
        "name": "Roth CH Acquisition V Co. Unit",
        "country": "United States"
      },
      {
        "symbol": "ROCLW",
        "name": "Roth CH Acquisition V Co. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ROCR",
        "name": "Roth CH Acquisition III Co. Common stock",
        "country": "United States"
      },
      {
        "symbol": "ROCRU",
        "name": "Roth CH Acquisition III Co. Unit",
        "country": "United States"
      },
      {
        "symbol": "ROCRW",
        "name": "Roth CH Acquisition III Co. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ROIC",
        "name": "Retail Opportunity Investments Corp. Common Stock (MD)",
        "country": "United States"
      },
      {
        "symbol": "ROIV",
        "name": "Roivant Sciences Ltd. Common Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "ROIVW",
        "name": "Roivant Sciences Ltd. Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "ROKU",
        "name": "Roku Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROLL",
        "name": "RBC Bearings Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROLLP",
        "name": "RBC Bearings Incorporated 5.00% Series A Mandatory Convertible Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "ROOT",
        "name": "Root Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROSE",
        "name": "Rose Hill Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "ROSEU",
        "name": "Rose Hill Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "ROSEW",
        "name": "Rose Hill Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "ROST",
        "name": "Ross Stores Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROVR",
        "name": "Rover Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ROVRW",
        "name": "Rover Group Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RPAY",
        "name": "Repay Holdings Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RPD",
        "name": "Rapid7 Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RPHM",
        "name": "Reneo Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RPID",
        "name": "Rapid Micro Biosystems Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RPRX",
        "name": "Royalty Pharma plc Class A Ordinary Shares ",
        "country": "United States"
      },
      {
        "symbol": "RPTX",
        "name": "Repare Therapeutics Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "RRBI",
        "name": "Red River Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RRGB",
        "name": "Red Robin Gourmet Burgers Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RRR",
        "name": "Red Rock Resorts Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RSLS",
        "name": "ReShape Lifesciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RSSS",
        "name": "Research Solutions Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RSVR",
        "name": "Reservoir Media Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RSVRW",
        "name": "Reservoir Media Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RTLR",
        "name": "Rattler Midstream LP Common Units",
        "country": "United States"
      },
      {
        "symbol": "RUBY",
        "name": "Rubius Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RUN",
        "name": "Sunrun Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RUSHA",
        "name": "Rush Enterprises Inc. Common Stock Cl A",
        "country": "United States"
      },
      {
        "symbol": "RUSHB",
        "name": "Rush Enterprises Inc. Class B",
        "country": "United States"
      },
      {
        "symbol": "RUTH",
        "name": "Ruth's Hospitality Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RVAC",
        "name": "Riverview Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RVACU",
        "name": "Riverview Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "RVACW",
        "name": "Riverview Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "RVMD",
        "name": "Revolution Medicines Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RVNC",
        "name": "Revance Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RVPH",
        "name": "Reviva Pharmaceuticals Holdings Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "RVPHW",
        "name": "Reviva Pharmaceuticals Holdings Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "RVSB",
        "name": "Riverview Bancorp Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RWAY",
        "name": "Runway Growth Finance Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RWLK",
        "name": "ReWalk Robotics Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "RXDX",
        "name": "Prometheus Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RXRA",
        "name": "RXR Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RXRAW",
        "name": "RXR Acquisition Corp. Warrants to purchase Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "RXRX",
        "name": "Recursion Pharmaceuticals Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RXST",
        "name": "RxSight Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RXT",
        "name": "Rackspace Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RYAAY",
        "name": "Ryanair Holdings plc American Depositary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "RYTM",
        "name": "Rhythm Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "RZLT",
        "name": "Rezolute Inc. Common Stock (NV)",
        "country": "United States"
      },
      {
        "symbol": "SABR",
        "name": "Sabre Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SABRP",
        "name": "Sabre Corporation 6.50% Series A Mandatory Convertible Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "SABS",
        "name": "SAB Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SABSW",
        "name": "SAB Biotherapeutics Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SAFM",
        "name": "Sanderson Farms Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAFT",
        "name": "Safety Insurance Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAGAU",
        "name": "Sagaliam Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "SAGE",
        "name": "Sage Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAIA",
        "name": "Saia Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAL",
        "name": "Salisbury Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SALM",
        "name": "Salem Media Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAMA",
        "name": "Schultze Special Purpose Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAMAU",
        "name": "Schultze Special Purpose Acquisition Corp. II Units",
        "country": "United States"
      },
      {
        "symbol": "SAMAW",
        "name": "Schultze Special Purpose Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "SAMG",
        "name": "Silvercrest Asset Management Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SANA",
        "name": "Sana Biotechnology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SANB",
        "name": "Sanaby Health Acquisition Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SANBU",
        "name": "Sanaby Health Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "SANBW",
        "name": "Sanaby Health Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "SANG",
        "name": "Sangoma Technologies Corporation Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "SANM",
        "name": "Sanmina Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SANW",
        "name": "S&W Seed Company Common Stock (NV)",
        "country": "United States"
      },
      {
        "symbol": "SASR",
        "name": "Sandy Spring Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SATS",
        "name": "EchoStar  Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SAVA",
        "name": "Cassava Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBAC",
        "name": "SBA Communications Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBCF",
        "name": "Seacoast Banking Corporation of Florida Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBEA",
        "name": "SilverBox Engaged Merger Corp I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBEAU",
        "name": "SilverBox Engaged Merger Corp I Units",
        "country": "United States"
      },
      {
        "symbol": "SBEAW",
        "name": "SilverBox Engaged Merger Corp I Warrant",
        "country": "United States"
      },
      {
        "symbol": "SBET",
        "name": "SharpLink Gaming Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "SBFG",
        "name": "SB Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBGI",
        "name": "Sinclair Broadcast Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBLK",
        "name": "Star Bulk Carriers Corp. Common Shares",
        "country": "Greece"
      },
      {
        "symbol": "SBNY",
        "name": "Signature Bank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBNYP",
        "name": "Signature Bank Depositary shares each representing a 1/40th ownership interest in a share of 5.000% Noncumulative Perpetual Series A Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "SBRA",
        "name": "Sabra Health Care REIT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBSI",
        "name": "Southside Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBT",
        "name": "Sterling Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBTX",
        "name": "Silverback Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SBUX",
        "name": "Starbucks Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCAQ",
        "name": "Stratim Cloud Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCAQU",
        "name": "Stratim Cloud Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SCAQW",
        "name": "Stratim Cloud Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SCHL",
        "name": "Scholastic Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCHN",
        "name": "Schnitzer Steel Industries Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCKT",
        "name": "Socket Mobile Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCLE",
        "name": "Broadscale Acquisition Corp. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "SCLEU",
        "name": "Broadscale Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "SCLEW",
        "name": "Broadscale Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SCMA",
        "name": "Seaport Calibre Materials Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCMAU",
        "name": "Seaport Calibre Materials Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SCMAW",
        "name": "Seaport Calibre Materials Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SCOA",
        "name": "ScION Tech Growth I Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOAU",
        "name": "ScION Tech Growth I Unit",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOAW",
        "name": "ScION Tech Growth I Warrant",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOB",
        "name": "ScION Tech Growth II Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOBU",
        "name": "ScION Tech Growth II Units",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOBW",
        "name": "ScION Tech Growth II Warrants",
        "country": "United Kingdom"
      },
      {
        "symbol": "SCOR",
        "name": "comScore Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCPH",
        "name": "scPharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCPL",
        "name": "SciPlay Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCPS",
        "name": "Scopus BioPharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCRMU",
        "name": "Screaming Eagle Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SCSC",
        "name": "ScanSource Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCVL",
        "name": "Shoe Carnival Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCWX",
        "name": "SecureWorks Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SCYX",
        "name": "SCYNEXIS Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SDAC",
        "name": "Sustainable Development Acquisition I Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SDACU",
        "name": "Sustainable Development Acquisition I Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SDACW",
        "name": "Sustainable Development Acquisition I Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SDC",
        "name": "SmileDirectClub Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SDGR",
        "name": "Schrodinger Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SDH",
        "name": "Global Internet of People Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "SDIG",
        "name": "Stronghold Digital Mining Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEAC",
        "name": "SeaChange International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEAT",
        "name": "Vivid Seats Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEATW",
        "name": "Vivid Seats Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SECO",
        "name": "Secoo Holding Limited ADS",
        "country": "China"
      },
      {
        "symbol": "SEDG",
        "name": "SolarEdge Technologies Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "SEED",
        "name": "Origin Agritech Limited Common Stock",
        "country": "China"
      },
      {
        "symbol": "SEEL",
        "name": "Seelos Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEER",
        "name": "Seer Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEIC",
        "name": "SEI Investments Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SELB",
        "name": "Selecta Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SELF",
        "name": "Global Self Storage Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SENEA",
        "name": "Seneca Foods Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SENEB",
        "name": "Seneca Foods Corp. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SERA",
        "name": "Sera Prognostics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SESN",
        "name": "Sesen Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SEV",
        "name": "Sono Group N.V. Common Shares",
        "country": "Germany"
      },
      {
        "symbol": "SEVN",
        "name": "Seven Hills Realty Trust Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFBC",
        "name": "Sound Financial Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFET",
        "name": "Safe-T Group Ltd. American Depositary Share",
        "country": "Israel"
      },
      {
        "symbol": "SFIX",
        "name": "Stitch Fix Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFM",
        "name": "Sprouts Farmers Market Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFNC",
        "name": "Simmons First National Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFST",
        "name": "Southern First Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SFT",
        "name": "Shift Technologies Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGA",
        "name": "Saga Communications Inc. Class A Common Stock (FL)",
        "country": "United States"
      },
      {
        "symbol": "SGBX",
        "name": "SG Blocks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGC",
        "name": "Superior Group of Companies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGEN",
        "name": "Seagen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGH",
        "name": "SMART Global Holdings Inc. Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SGHT",
        "name": "Sight Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGII",
        "name": "Seaport Global Acquisition II Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGIIU",
        "name": "Seaport Global Acquisition II Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SGLB",
        "name": "Sigma Labs Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGLBW",
        "name": "Sigma Labs Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SGLY",
        "name": "Singularity Future Technology Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGMA",
        "name": "SigmaTron International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGML",
        "name": "Sigma Lithium Corporation Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "SGMO",
        "name": "Sangamo Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGMS",
        "name": "Scientific Games Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGRP",
        "name": "SPAR Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGRY",
        "name": "Surgery Partners Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SGTX",
        "name": "Sigilon Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHAC",
        "name": "SCP & CO Healthcare Acquisition Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHACU",
        "name": "SCP & CO Healthcare Acquisition Company Unit",
        "country": "United States"
      },
      {
        "symbol": "SHACW",
        "name": "SCP & CO Healthcare Acquisition Company Warrant",
        "country": "United States"
      },
      {
        "symbol": "SHBI",
        "name": "Shore Bancshares Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHC",
        "name": "Sotera Health Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHCA",
        "name": "Spindletop Health Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHCAU",
        "name": "Spindletop Health Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SHCAW",
        "name": "Spindletop Health Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SHCR",
        "name": "Sharecare Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHCRW",
        "name": "Sharecare Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SHEN",
        "name": "Shenandoah Telecommunications Co Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHIP",
        "name": "Seanergy Maritime Holdings Corp Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "SHIPZ",
        "name": "Seanergy Maritime Holdings Corp Class B Warrant",
        "country": "Greece"
      },
      {
        "symbol": "SHLS",
        "name": "Shoals Technologies Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHOO",
        "name": "Steven Madden Ltd. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHQA",
        "name": "Shelter Acquisition Corporation I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SHQAU",
        "name": "Shelter Acquisition Corporation I Units",
        "country": "United States"
      },
      {
        "symbol": "SHQAW",
        "name": "Shelter Acquisition Corporation I Warrants",
        "country": "United States"
      },
      {
        "symbol": "SHYF",
        "name": "The Shyft Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIBN",
        "name": "SI-BONE Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIDU",
        "name": "Sidus Space Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIEB",
        "name": "Siebert Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIEN",
        "name": "Sientra Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIER",
        "name": "Sierra Lake Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIERU",
        "name": "Sierra Lake Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SIERW",
        "name": "Sierra Lake Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SIFY",
        "name": "Sify Technologies Limited American Depositary Shares",
        "country": "India"
      },
      {
        "symbol": "SIGA",
        "name": "SIGA Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIGI",
        "name": "Selective Insurance Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIGIP",
        "name": "Selective Insurance Group Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.60% Non-Cumulative Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "SILC",
        "name": "Silicom Ltd Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "SILK",
        "name": "Silk Road Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIMO",
        "name": "Silicon Motion Technology Corporation American Depositary Shares",
        "country": "Taiwan"
      },
      {
        "symbol": "SINT",
        "name": "SiNtx Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIOX",
        "name": "Sio Gene Therapies Inc. Common Stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "SIRI",
        "name": "Sirius XM Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SISI",
        "name": "Shineco Inc. Common Stock",
        "country": "China"
      },
      {
        "symbol": "SITM",
        "name": "SiTime Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIVB",
        "name": "SVB Financial Group Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SIVBP",
        "name": "SVB Financial Group Depositary Shs each representing a 1/40th interest in a share of 5.25% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "SJ",
        "name": "Scienjoy Holding Corporation Class A Ordinary Shares ",
        "country": "China"
      },
      {
        "symbol": "SKIN",
        "name": "The Beauty Health Company Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SKYA",
        "name": "Skydeck Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SKYAU",
        "name": "Skydeck Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "SKYT",
        "name": "SkyWater Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SKYW",
        "name": "SkyWest Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLAB",
        "name": "Silicon Laboratories Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLAM",
        "name": "Slam Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "SLAMU",
        "name": "Slam Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SLAMW",
        "name": "Slam Corp. warrant",
        "country": "United States"
      },
      {
        "symbol": "SLCR",
        "name": "Silver Crest Acquisition Corporation Class A Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "SLCRU",
        "name": "Silver Crest Acquisition Corporation Unit",
        "country": "China"
      },
      {
        "symbol": "SLCRW",
        "name": "Silver Crest Acquisition Corporation Warrant",
        "country": "China"
      },
      {
        "symbol": "SLDB",
        "name": "Solid Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLDP",
        "name": "Solid Power Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLDPW",
        "name": "Solid Power Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SLGC",
        "name": "SomaLogic Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLGCW",
        "name": "SomaLogic Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SLGG",
        "name": "Super League Gaming Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLGL",
        "name": "Sol-Gel Technologies Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "SLGN",
        "name": "Silgan Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLHG",
        "name": "Skylight Health Group Inc. Ordinary Shares",
        "country": "Canada"
      },
      {
        "symbol": "SLHGP",
        "name": "Skylight Health Group Inc. 9.25% Series A Cumulative Redeemable Perpetual Preferred Shares",
        "country": "Canada"
      },
      {
        "symbol": "SLM",
        "name": "SLM Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLMBP",
        "name": "SLM Corporation Floating Rate Non-Cumulative Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "SLN",
        "name": "Silence Therapeutics Plc American Depository Share",
        "country": "United Kingdom"
      },
      {
        "symbol": "SLNG",
        "name": "Stabilis Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLNH",
        "name": "Soluna Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLNHP",
        "name": "Soluna Holdings Inc 9.0% Series A Cumulative Perpetual Preferred Stock ",
        "country": "United States"
      },
      {
        "symbol": "SLNO",
        "name": "Soleno Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLP",
        "name": "Simulations Plus Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLRC",
        "name": "SLR Investment Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLRX",
        "name": "Salarius Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLS",
        "name": "SELLAS Life Sciences Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SLVO",
        "name": "Credit Suisse X-Links Silver Shares Covered Call ETNs due April 21 2033",
        "country": "Switzerland"
      },
      {
        "symbol": "SLVR",
        "name": "SilverSPAC Inc. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "SLVRW",
        "name": "SilverSPAC Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SMAP",
        "name": "SportsMap Tech Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMAPU",
        "name": "SportsMap Tech Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "SMAPW",
        "name": "SportsMap Tech Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "SMBC",
        "name": "Southern Missouri Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMBK",
        "name": "SmartFinancial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMCI",
        "name": "Super Micro Computer Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMED",
        "name": "Sharps Compliance Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMFR",
        "name": "Sema4 Holdings Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMFRW",
        "name": "Sema4 Holdings Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SMID",
        "name": "Smith-Midland Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMIH",
        "name": "Summit Healthcare Acquisition Corp. Class A Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "SMIHU",
        "name": "Summit Healthcare Acquisition Corp. Units",
        "country": "China"
      },
      {
        "symbol": "SMIHW",
        "name": "Summit Healthcare Acquisition Corp. Warrant",
        "country": "China"
      },
      {
        "symbol": "SMIT",
        "name": "Schmitt Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMLR",
        "name": "Semler Scientific Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMMF",
        "name": "Summit Financial Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMMT",
        "name": "Summit Therapeutics Inc. Common Stock ",
        "country": "United Kingdom"
      },
      {
        "symbol": "SMPL",
        "name": "The Simply Good Foods Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMSI",
        "name": "Smith Micro Software Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMTC",
        "name": "Semtech Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SMTI",
        "name": "Sanara MedTech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNAX",
        "name": "Stryve Foods Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNAXW",
        "name": "Stryve Foods Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SNBR",
        "name": "Sleep Number Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNCE",
        "name": "Science 37 Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNCR",
        "name": "Synchronoss Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNCRL",
        "name": "Synchronoss Technologies Inc. 8.375% Senior Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "SNCY",
        "name": "Sun Country Airlines Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SND",
        "name": "Smart Sand Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNDL",
        "name": "Sundial Growers Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "SNDX",
        "name": "Syndax Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNES",
        "name": "SenesTech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNEX",
        "name": "StoneX Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNFCA",
        "name": "Security National Financial Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNGX",
        "name": "Soligenix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNOA",
        "name": "Sonoma Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNPO",
        "name": "Snap One Holdings Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNPS",
        "name": "Synopsys Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNPX",
        "name": "Synaptogenix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNRH",
        "name": "Senior Connect Acquisition Corp. I Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNRHU",
        "name": "Senior Connect Acquisition Corp. I Unit",
        "country": "United States"
      },
      {
        "symbol": "SNRHW",
        "name": "Senior Connect Acquisition Corp. I Warrant",
        "country": "United States"
      },
      {
        "symbol": "SNSE",
        "name": "Sensei Biotherapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SNT",
        "name": "Senstar Technologies Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "SNTG",
        "name": "Sentage Holdings Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "SNY",
        "name": "Sanofi ADS",
        "country": "France"
      },
      {
        "symbol": "SOFI",
        "name": "SoFi Technologies Inc. Common Stock  ",
        "country": "United States"
      },
      {
        "symbol": "SOHO",
        "name": "Sotherly Hotels Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SOHOB",
        "name": "Sotherly Hotels Inc. 8.0% Series B Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "SOHON",
        "name": "Sotherly Hotels Inc. 8.25% Series D Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "SOHOO",
        "name": "Sotherly Hotels Inc. 7.875% Series C Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "SOHU",
        "name": "Sohu.com Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "SOLO",
        "name": "Electrameccanica Vehicles Corp. Ltd. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "SOLOW",
        "name": "Electrameccanica Vehicles Corp. Ltd. Warrants",
        "country": "Canada"
      },
      {
        "symbol": "SONM",
        "name": "Sonim Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SONN",
        "name": "Sonnet BioTherapeutics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SONO",
        "name": "Sonos Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SOPA",
        "name": "Society Pass Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SOPH",
        "name": "SOPHiA GENETICS SA Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "SOTK",
        "name": "Sono-Tek Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SOVO",
        "name": "Sovos Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SP",
        "name": "SP Plus Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPCB",
        "name": "SuperCom Ltd. Ordinary Shares (Israel)",
        "country": "Israel"
      },
      {
        "symbol": "SPFI",
        "name": "South Plains Financial Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPI",
        "name": "SPI Energy Co. Ltd. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "SPK",
        "name": "SPK Acquisition Corp. Common Stock",
        "country": "China"
      },
      {
        "symbol": "SPKB",
        "name": "Silver Spike Acquisition Corp II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SPKBU",
        "name": "Silver Spike Acquisition Corp II Units",
        "country": "United States"
      },
      {
        "symbol": "SPKBW",
        "name": "Silver Spike Acquisition Corp II Warrant",
        "country": "United States"
      },
      {
        "symbol": "SPLK",
        "name": "Splunk Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPNE",
        "name": "SeaSpine Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPNS",
        "name": "Sapiens International Corporation N.V. Common Shares (Cayman Islands)",
        "country": "Curacao"
      },
      {
        "symbol": "SPOK",
        "name": "Spok Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPPI",
        "name": "Spectrum Pharmaceuticals Inc.Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPRB",
        "name": "Spruce Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPRC",
        "name": "SciSparc Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "SPRO",
        "name": "Spero Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPSC",
        "name": "SPS Commerce Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPT",
        "name": "Sprout Social Inc Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPTK",
        "name": "SportsTek Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPTKU",
        "name": "SportsTek Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SPTKW",
        "name": "SportsTek Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SPTN",
        "name": "SpartanNash Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPWH",
        "name": "Sportsman's Warehouse Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SPWR",
        "name": "SunPower Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SQFT",
        "name": "Presidio Property Trust Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SQFTP",
        "name": "Presidio Property Trust Inc. 9.375% Series D Cumulative Redeemable Perpetual Preferred Stock $0.01 par value per share",
        "country": "United States"
      },
      {
        "symbol": "SQL",
        "name": "SeqLL Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "SQLLW",
        "name": "SeqLL Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SRAD",
        "name": "Sportradar Group AG Class A Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "SRAX",
        "name": "SRAX Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRCE",
        "name": "1st Source Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRCL",
        "name": "Stericycle Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRDX",
        "name": "Surmodics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SREV",
        "name": "ServiceSource International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRGA",
        "name": "Surgalign Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRNE",
        "name": "Sorrento Therapeutics Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRPT",
        "name": "Sarepta Therapeutics Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "SRRA",
        "name": "Sierra Oncology Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "SRRK",
        "name": "Scholar Rock Holding Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRSA",
        "name": "Sarissa Capital Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SRSAU",
        "name": "Sarissa Capital Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SRSAW",
        "name": "Sarissa Capital Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "SRTS",
        "name": "Sensus Healthcare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRZN",
        "name": "Surrozen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SRZNW",
        "name": "Surrozen Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SSAA",
        "name": "Science Strategic Acquisition Corp. Alpha Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSAAU",
        "name": "Science Strategic Acquisition Corp. Alpha Unit",
        "country": "United States"
      },
      {
        "symbol": "SSAAW",
        "name": "Science Strategic Acquisition Corp. Alpha Warrant",
        "country": "United States"
      },
      {
        "symbol": "SSB",
        "name": "SouthState Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSBI",
        "name": "Summit State Bank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSBK",
        "name": "Southern States Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSKN",
        "name": "Strata Skin Sciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSNC",
        "name": "SS&C Technologies Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSNT",
        "name": "SilverSun Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSP",
        "name": "E.W. Scripps Company (The) Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSRM",
        "name": "SSR Mining Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "SSSS",
        "name": "SuRo Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSSSL",
        "name": "SuRo Capital Corp. 6.00% Notes due 2026",
        "country": "United States"
      },
      {
        "symbol": "SSTI",
        "name": "ShotSpotter Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SSYS",
        "name": "Stratasys Ltd. Ordinary Shares (Israel)",
        "country": "United States"
      },
      {
        "symbol": "STAA",
        "name": "STAAR Surgical Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STAB",
        "name": "Statera Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STAF",
        "name": "Staffing 360 Solutions Inc. Common Stock (DE)",
        "country": "United States"
      },
      {
        "symbol": "STBA",
        "name": "S&T Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STCN",
        "name": "Steel Connect Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STEP",
        "name": "StepStone Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STER",
        "name": "Sterling Check Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STFC",
        "name": "State Auto Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STGW",
        "name": "Stagwell Inc. Class A Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "STIM",
        "name": "Neuronetics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STKL",
        "name": "SunOpta Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "STKS",
        "name": "The ONE Group Hospitality Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STLD",
        "name": "Steel Dynamics Inc.",
        "country": "United States"
      },
      {
        "symbol": "STNE",
        "name": "StoneCo Ltd. Class A Common Shares",
        "country": "Brazil"
      },
      {
        "symbol": "STOK",
        "name": "Stoke Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRA",
        "name": "Strategic Education Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRC",
        "name": "Sarcos Technology and Robotics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRCW",
        "name": "Sarcos Technology and Robotics Corporation Warrants",
        "country": "United States"
      },
      {
        "symbol": "STRL",
        "name": "Sterling Construction Company Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRM",
        "name": "Streamline Health Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRN",
        "name": "Stran & Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRNW",
        "name": "Stran & Company Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "STRO",
        "name": "Sutro Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRR",
        "name": "Star Equity Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRRP",
        "name": "Star Equity Holdings Inc. Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "STRS",
        "name": "Stratus Properties Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STRT",
        "name": "STRATTEC SECURITY CORPORATION Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STSA",
        "name": "Satsuma Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STTK",
        "name": "Shattuck Labs Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "STX",
        "name": "Seagate Technology Holdings PLC Ordinary Shares (Ireland)",
        "country": "Ireland"
      },
      {
        "symbol": "STXB",
        "name": "Spirit of Texas Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SUMO",
        "name": "Sumo Logic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SUMR",
        "name": "Summer Infant Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SUNS",
        "name": "SLR Senior Investment Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SUNW",
        "name": "Sunworks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SUPN",
        "name": "Supernus Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SURF",
        "name": "Surface Oncology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SURG",
        "name": "SurgePays Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SV",
        "name": "Spring Valley Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "SVC",
        "name": "Service Properties Trust Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SVFA",
        "name": "SVF Investment Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SVFAU",
        "name": "SVF Investment Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SVFAW",
        "name": "SVF Investment Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SVFB",
        "name": "SVF Investment Corp. 2 Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SVFC",
        "name": "SVF Investment Corp. 3 Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SVFD",
        "name": "Save Foods Inc. Common Stock",
        "country": "Israel"
      },
      {
        "symbol": "SVNA",
        "name": "7 Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "SVNAU",
        "name": "7 Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "SVNAW",
        "name": "7 Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "SVRA",
        "name": "Savara Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SVSVU",
        "name": "Spring Valley Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SVSVW",
        "name": "Spring Valley Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SVVC",
        "name": "Firsthand Technology Value Fund Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWAG",
        "name": "Software Acquisition Group Inc. III Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWAGU",
        "name": "Software Acquisition Group Inc. III Unit",
        "country": "United States"
      },
      {
        "symbol": "SWAGW",
        "name": "Software Acquisition Group Inc. III Warrant",
        "country": "United States"
      },
      {
        "symbol": "SWAV",
        "name": "ShockWave Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWBI",
        "name": "Smith & Wesson Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWET",
        "name": "Athlon Acquisition Corp. Class A Common stock",
        "country": "United States"
      },
      {
        "symbol": "SWETU",
        "name": "Athlon Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SWETW",
        "name": "Athlon Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SWIM",
        "name": "Latham Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWIR",
        "name": "Sierra Wireless Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "SWKH",
        "name": "SWK Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWKS",
        "name": "Skyworks Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SWSS",
        "name": "Springwater Special Situations Corp. Common stock",
        "country": "United States"
      },
      {
        "symbol": "SWSSU",
        "name": "Springwater Special Situations Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "SWSSW",
        "name": "Springwater Special Situations Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "SWTX",
        "name": "SpringWorks Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SXTC",
        "name": "China SXT Pharmaceuticals Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "SY",
        "name": "So-Young International Inc. American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "SYBT",
        "name": "Stock Yards Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYBX",
        "name": "Synlogic Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYNA",
        "name": "Synaptics Incorporated Common Stock $0.001 Par Value",
        "country": "United States"
      },
      {
        "symbol": "SYNH",
        "name": "Syneos Health Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYNL",
        "name": "Synalloy Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYPR",
        "name": "Sypris Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYRS",
        "name": "Syros Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "SYTA",
        "name": "Siyata Mobile Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "SYTAW",
        "name": "Siyata Mobile Inc. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "SZZLU",
        "name": "Sizzle Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "TA",
        "name": "TravelCenters of America Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TACO",
        "name": "Del Taco Restaurants Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TACT",
        "name": "TransAct Technologies Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TAIT",
        "name": "Taitron Components Incorporated Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TALK",
        "name": "Talkspace Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TALKW",
        "name": "Talkspace Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TALS",
        "name": "Talaris Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TANH",
        "name": "Tantech Holdings Ltd. Common Stock",
        "country": "China"
      },
      {
        "symbol": "TANNI",
        "name": "TravelCenters of America Inc. 8.25% Senior Notes due 2028",
        "country": "United States"
      },
      {
        "symbol": "TANNL",
        "name": "TravelCenters of America Inc. 8.00% Senior Notes due 2029",
        "country": "United States"
      },
      {
        "symbol": "TANNZ",
        "name": "TravelCenters of America Inc. 8.00% Senior Notes due 2030",
        "country": "United States"
      },
      {
        "symbol": "TAOP",
        "name": "Taoping Inc. Ordinary Shares ",
        "country": "Hong Kong"
      },
      {
        "symbol": "TARA",
        "name": "Protara Therapeutics Inc.  Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TARS",
        "name": "Tarsus Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TASK",
        "name": "TaskUs Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TAST",
        "name": "Carrols Restaurant Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TATT",
        "name": "TAT Technologies Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "TAYD",
        "name": "Taylor Devices Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBBK",
        "name": "The Bancorp Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBCP",
        "name": "Thunder Bridge Capital Partners III Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBCPU",
        "name": "Thunder Bridge Capital Partners III Inc. Units",
        "country": "United States"
      },
      {
        "symbol": "TBCPW",
        "name": "Thunder Bridge Capital Partners III Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TBK",
        "name": "Triumph Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBKCP",
        "name": "Triumph Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 7.125% Series C Fixed-Rate Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "TBLA",
        "name": "Taboola.com Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "TBLAW",
        "name": "Taboola.com Ltd. Warrant",
        "country": "Israel"
      },
      {
        "symbol": "TBLD",
        "name": "Thornburg Income Builder Opportunities Trust Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBLT",
        "name": "ToughBuilt Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBLTW",
        "name": "ToughBuilt Industries Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TBNK",
        "name": "Territorial Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TBPH",
        "name": "Theravance Biopharma Inc. Ordinary Shares",
        "country": "Cayman Islands"
      },
      {
        "symbol": "TBSA",
        "name": "TB SA Acquisition Corp Class A Ordinary Share",
        "country": "Cayman Islands"
      },
      {
        "symbol": "TBSAW",
        "name": "TB SA Acquisition Corp Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "TC",
        "name": "TuanChe Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "TCAC",
        "name": "Tuatara Capital Acquisition Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TCACW",
        "name": "Tuatara Capital Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "TCBC",
        "name": "TC Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCBI",
        "name": "Texas Capital Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCBIO",
        "name": "Texas Capital Bancshares Inc. Depositary Shares 5.75% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "TCBK",
        "name": "TriCo Bancshares Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCBS",
        "name": "Texas Community Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCBX",
        "name": "Third Coast Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCDA",
        "name": "Tricida Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCFC",
        "name": "The Community Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCMD",
        "name": "Tactile Systems Technology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCOM",
        "name": "Trip.com Group Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "TCON",
        "name": "TRACON Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCPC",
        "name": "BlackRock TCP Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCRR",
        "name": "TCR2 Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCRX",
        "name": "TScan Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TCVA",
        "name": "TCV Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TCX",
        "name": "Tucows Inc. Class A Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "TDUP",
        "name": "ThredUp Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TEAM",
        "name": "Atlassian Corporation Plc Class A Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "TECH",
        "name": "Bio-Techne Corp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TECTP",
        "name": "Tectonic Financial Inc. 9.00% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "TEDU",
        "name": "Tarena International Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "TEKK",
        "name": "Tekkorp Digital Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TEKKW",
        "name": "Tekkorp Digital Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TELA",
        "name": "TELA Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TENB",
        "name": "Tenable Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TENX",
        "name": "Tenax Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TER",
        "name": "Teradyne Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TERN",
        "name": "Terns Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TESS",
        "name": "TESSCO Technologies Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TETC",
        "name": "Tech and Energy Transition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TETCU",
        "name": "Tech and Energy Transition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "TETCW",
        "name": "Tech and Energy Transition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "TFFP",
        "name": "TFF Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TFSL",
        "name": "TFS Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TGA",
        "name": "TransGlobe Energy Corporation Ordinary Shares (Canada)",
        "country": "Canada"
      },
      {
        "symbol": "TGAAU",
        "name": "Target Global Acquisition I Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "TGLS",
        "name": "Tecnoglass Inc. Ordinary Shares",
        "country": "Colombia"
      },
      {
        "symbol": "TGTX",
        "name": "TG Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TGVC",
        "name": "TG Venture Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TGVCU",
        "name": "TG Venture Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "TGVCW",
        "name": "TG Venture Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "TH",
        "name": "Target Hospitality Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THAC",
        "name": "Thrive Acquisition Corporation Class A ordinary shares",
        "country": "United States"
      },
      {
        "symbol": "THACW",
        "name": "Thrive Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "THCA",
        "name": "Tuscan Holdings Corp. II Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THCAW",
        "name": "Tuscan Holdings Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "THCP",
        "name": "Thunder Bridge Capital Partners IV Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THCPU",
        "name": "Thunder Bridge Capital Partners IV Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "THFF",
        "name": "First Financial Corporation Indiana Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THMO",
        "name": "ThermoGenesis Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THRM",
        "name": "Gentherm Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THRN",
        "name": "Thorne Healthtech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THRX",
        "name": "Theseus Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THRY",
        "name": "Thryv Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "THTX",
        "name": "Theratechnologies Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "THWWW",
        "name": "Target Hospitality Corp. Warrant expiring 3/15/2024",
        "country": "United States"
      },
      {
        "symbol": "TIG",
        "name": "Trean Insurance Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TIGO",
        "name": "Millicom International Cellular S.A. Common Stock",
        "country": "Luxembourg"
      },
      {
        "symbol": "TIGR",
        "name": "UP Fintech Holding Ltd American Depositary Share representing fifteen Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "TIL",
        "name": "Instil Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TILE",
        "name": "Interface Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TIOA",
        "name": "Tio Tech A Class A Ordinary Share",
        "country": "Germany"
      },
      {
        "symbol": "TIOAU",
        "name": "Tio Tech A Units",
        "country": "Germany"
      },
      {
        "symbol": "TIOAW",
        "name": "Tio Tech A Warrants",
        "country": "Germany"
      },
      {
        "symbol": "TIPT",
        "name": "Tiptree Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TIRX",
        "name": "TIAN RUIXIANG Holdings Ltd Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "TITN",
        "name": "Titan Machinery Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TIVC",
        "name": "Tivic Health Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TKNO",
        "name": "Alpha Teknova Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TLGYU",
        "name": "TLGY Acquisition Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "TLIS",
        "name": "Talis Biomedical Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TLMD",
        "name": "SOC Telemed Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TLMDW",
        "name": "SOC Telemed Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "TLRY",
        "name": "Tilray Inc. Class 2 Common Stock ",
        "country": "Canada"
      },
      {
        "symbol": "TLS",
        "name": "Telos Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TLSA",
        "name": "Tiziana Life Sciences Ltd. Common Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "TMC",
        "name": "TMC the metals company Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "TMCI",
        "name": "Treace Medical Concepts Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TMCWW",
        "name": "TMC the metals company Inc. Warrants",
        "country": "Canada"
      },
      {
        "symbol": "TMDI",
        "name": "Titan Medical Inc. Ordinary Shares",
        "country": "Canada"
      },
      {
        "symbol": "TMDX",
        "name": "TransMedics Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TMKR",
        "name": "Tastemaker Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TMKRU",
        "name": "Tastemaker Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "TMKRW",
        "name": "Tastemaker Acquisition Corp. Warrant to purchase Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "TMPM",
        "name": "Turmeric Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TMPMW",
        "name": "Turmeric Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TMUS",
        "name": "T-Mobile US Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TNDM",
        "name": "Tandem Diabetes Care Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TNGX",
        "name": "Tango Therapeutics Inc.",
        "country": "United States"
      },
      {
        "symbol": "TNXP",
        "name": "Tonix Pharmaceuticals Holding Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TNYA",
        "name": "Tenaya Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TOAC",
        "name": "Talon 1 Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TOACU",
        "name": "Talon 1 Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "TOACW",
        "name": "Talon 1 Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TOI",
        "name": "The Oncology Institute Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TOIIW",
        "name": "The Oncology Institute Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TOMZ",
        "name": "TOMI Environmental Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TOPS",
        "name": "TOP Ships Inc. Common Stock",
        "country": "Greece"
      },
      {
        "symbol": "TOUR",
        "name": "Tuniu Corporation American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "TOWN",
        "name": "TowneBank Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TPBA",
        "name": "TPB Acquisition Corporation I Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "TPBAU",
        "name": "TPB Acquisition Corporation I Unit",
        "country": "United States"
      },
      {
        "symbol": "TPIC",
        "name": "TPI Composites Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TPST",
        "name": "Tempest Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TPTX",
        "name": "Turning Point Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRDA",
        "name": "Entrada Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TREE",
        "name": "LendingTree Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRHC",
        "name": "Tabula Rasa HealthCare Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRIB",
        "name": "Trinity Biotech plc American Depositary Shares",
        "country": "Ireland"
      },
      {
        "symbol": "TRIN",
        "name": "Trinity Capital Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRIP",
        "name": "TripAdvisor Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRIT",
        "name": "Triterras Inc. Class A Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "TRITW",
        "name": "Triterras Inc. Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "TRKA",
        "name": "Troika Media Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRKAW",
        "name": "Troika Media Group Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TRMB",
        "name": "Trimble Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRMD",
        "name": "TORM plc Class A Common Stock",
        "country": "United Kingdom"
      },
      {
        "symbol": "TRMK",
        "name": "Trustmark Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRMR",
        "name": "Tremor International Ltd. American Depository Shares",
        "country": "Israel"
      },
      {
        "symbol": "TRNS",
        "name": "Transcat Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRON",
        "name": "Corner Growth Acquisition Corp. 2 Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "TRONW",
        "name": "Corner Growth Acquisition Corp. 2 Warrants",
        "country": "United States"
      },
      {
        "symbol": "TROO",
        "name": "TROOPS Inc. Ordinary Shares ",
        "country": "China"
      },
      {
        "symbol": "TROW",
        "name": "T. Rowe Price Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRS",
        "name": "TriMas Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRST",
        "name": "TrustCo Bank Corp NY Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRUE",
        "name": "TrueCar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRUP",
        "name": "Trupanion Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRVG",
        "name": "trivago N.V. American Depositary Shares",
        "country": "Germany"
      },
      {
        "symbol": "TRVI",
        "name": "Trevi Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TRVN",
        "name": "Trevena Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSAT",
        "name": "Telesat Corporation Class A Common Shares and Class B Variable Voting Shares ",
        "country": "Canada"
      },
      {
        "symbol": "TSBK",
        "name": "Timberland Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSC",
        "name": "TriState Capital Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSCAP",
        "name": "TriState Capital Holdings Inc. Dep Shs Rep 1/40th Int 6.75% Srs A Non-Cum Pfd Stock",
        "country": "United States"
      },
      {
        "symbol": "TSCBP",
        "name": "TriState Capital Holdings Inc. Depositary Share representing a 1/40th Interest in a Share of 6.375% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "TSCO",
        "name": "Tractor Supply Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSEM",
        "name": "Tower Semiconductor Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "TSHA",
        "name": "Taysha Gene Therapies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSIB",
        "name": "Tishman Speyer Innovation Corp. II Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "TSIBU",
        "name": "Tishman Speyer Innovation Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "TSIBW",
        "name": "Tishman Speyer Innovation Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "TSLA",
        "name": "Tesla Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSP",
        "name": "TuSimple Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSRI",
        "name": "TSR Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TSVT",
        "name": "2seventy bio Inc. Common Stock ",
        "country": "United States"
      },
      {
        "symbol": "TTCF",
        "name": "Tattooed Chef Inc Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTD",
        "name": "The Trade Desk Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTEC",
        "name": "TTEC Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTEK",
        "name": "Tetra Tech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTGT",
        "name": "TechTarget Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTMI",
        "name": "TTM Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTNP",
        "name": "Titan Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTOO",
        "name": "T2 Biosystems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTSH",
        "name": "Tile Shop Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TTWO",
        "name": "Take-Two Interactive Software Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TUEM",
        "name": "Tuesday Morning Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TUGC",
        "name": "TradeUP Global Corporation Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "TUGCU",
        "name": "TradeUP Global Corporation Unit",
        "country": "United States"
      },
      {
        "symbol": "TUGCW",
        "name": "TradeUP Global Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "TURN",
        "name": "180 Degree Capital Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TUSK",
        "name": "Mammoth Energy Services Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TVAC",
        "name": "Thayer Ventures Acquisition Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TVACU",
        "name": "Thayer Ventures Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "TVACW",
        "name": "Thayer Ventures Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "TVTX",
        "name": "Travere Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TVTY",
        "name": "Tivity Health Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TW",
        "name": "Tradeweb Markets Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWCB",
        "name": "Bilander Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWCBW",
        "name": "Bilander Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "TWIN",
        "name": "Twin Disc Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWKS",
        "name": "Thoughtworks Holding Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWLV",
        "name": "Twelve Seas Investment Company II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWLVU",
        "name": "Twelve Seas Investment Company II Unit",
        "country": "United States"
      },
      {
        "symbol": "TWLVW",
        "name": "Twelve Seas Investment Company II Warrant",
        "country": "United States"
      },
      {
        "symbol": "TWNK",
        "name": "Hostess Brands Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWOU",
        "name": "2U Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TWST",
        "name": "Twist Bioscience Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TXG",
        "name": "10x Genomics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TXMD",
        "name": "TherapeuticsMD Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TXN",
        "name": "Texas Instruments Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TXRH",
        "name": "Texas Roadhouse Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TYME",
        "name": "Tyme Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TYRA",
        "name": "Tyra Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TZOO",
        "name": "Travelzoo Common Stock",
        "country": "United States"
      },
      {
        "symbol": "TZPS",
        "name": "TZP Strategies Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "TZPSU",
        "name": "TZP Strategies Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "TZPSW",
        "name": "TZP Strategies Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "UAL",
        "name": "United Airlines Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UBCP",
        "name": "United Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UBFO",
        "name": "United Security Bancshares Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UBOH",
        "name": "United Bancshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UBSI",
        "name": "United Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UBX",
        "name": "Unity Biotechnology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UCBI",
        "name": "United Community Banks Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UCBIO",
        "name": "United Community Banks Inc. Depositary Shares each representing 1/1000th interest in a share of Series I Non-CumulativePreferred Stock",
        "country": "United States"
      },
      {
        "symbol": "UCL",
        "name": "uCloudlink Group Inc. American Depositary Shares",
        "country": "Hong Kong"
      },
      {
        "symbol": "UCTT",
        "name": "Ultra Clean Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UDMY",
        "name": "Udemy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UEIC",
        "name": "Universal Electronics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UEPS",
        "name": "Net 1 UEPS Technologies Inc. Common Stock",
        "country": "South Africa"
      },
      {
        "symbol": "UFCS",
        "name": "United Fire Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UFPI",
        "name": "UFP Industries Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UFPT",
        "name": "UFP Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UG",
        "name": "United-Guardian Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UGRO",
        "name": "urban-gro Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UHAL",
        "name": "Amerco Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UIHC",
        "name": "United Insurance Holdings Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UK",
        "name": "Ucommune International Ltd Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "UKOMW",
        "name": "Ucommune International Ltd Warrant expiring 11/17/2025",
        "country": "United States"
      },
      {
        "symbol": "ULBI",
        "name": "Ultralife Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ULCC",
        "name": "Frontier Group Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ULH",
        "name": "Universal Logistics Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ULTA",
        "name": "Ulta Beauty Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UMBF",
        "name": "UMB Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UMPQ",
        "name": "Umpqua Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UNAM",
        "name": "Unico American Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UNB",
        "name": "Union Bankshares Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UNCY",
        "name": "Unicycive Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UNIT",
        "name": "Uniti Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UNTY",
        "name": "Unity Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UONE",
        "name": "Urban One Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UONEK",
        "name": "Urban One Inc. Class D Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UPC",
        "name": "Universe Pharmaceuticals Inc. Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "UPLD",
        "name": "Upland Software Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UPST",
        "name": "Upstart Holdings Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "UPTD",
        "name": "TradeUP Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UPTDU",
        "name": "TradeUP Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "UPWK",
        "name": "Upwork Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "URBN",
        "name": "Urban Outfitters Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "URGN",
        "name": "UroGen Pharma Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "UROY",
        "name": "Uranium Royalty Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "USAK",
        "name": "USA Truck Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USAP",
        "name": "Universal Stainless & Alloy Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USAU",
        "name": "U.S. Gold Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USCB",
        "name": "USCB Financial Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USCT",
        "name": "TKB Critical Technologies 1 Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "USCTU",
        "name": "TKB Critical Technologies 1 Unit",
        "country": "United States"
      },
      {
        "symbol": "USCTW",
        "name": "TKB Critical Technologies 1 Warrant",
        "country": "United States"
      },
      {
        "symbol": "USEG",
        "name": "U.S. Energy Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USIO",
        "name": "Usio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USLM",
        "name": "United States Lime & Minerals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USOI",
        "name": "Credit Suisse AG Credit Suisse X-Links Crude Oil Shares Covered Call ETN",
        "country": "Switzerland"
      },
      {
        "symbol": "USWS",
        "name": "U.S. Well Services Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "USWSW",
        "name": "U.S. Well Services Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "UTAAU",
        "name": "UTA Acquisition Corporation Units",
        "country": "United States"
      },
      {
        "symbol": "UTHR",
        "name": "United Therapeutics Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UTMD",
        "name": "Utah Medical Products Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UTME",
        "name": "UTime Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "UTRS",
        "name": "Minerva Surgical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UTSI",
        "name": "UTStarcom Holdings Corp.",
        "country": "China"
      },
      {
        "symbol": "UVSP",
        "name": "Univest Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "UXIN",
        "name": "Uxin Limited ADS",
        "country": "China"
      },
      {
        "symbol": "VABK",
        "name": "Virginia National Bankshares Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VACC",
        "name": "Vaccitech plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "VALN",
        "name": "Valneva SE American Depositary Shares",
        "country": "France"
      },
      {
        "symbol": "VALU",
        "name": "Value Line Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VAQC",
        "name": "Vector Acquisition Corporation II Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "VAXX",
        "name": "Vaxxinity Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VBFC",
        "name": "Village Bank and Trust Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VBIV",
        "name": "VBI Vaccines Inc. New Common Stock (Canada)",
        "country": "United States"
      },
      {
        "symbol": "VBLT",
        "name": "Vascular Biogenics Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "VBNK",
        "name": "VersaBank Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VBOCU",
        "name": "Viscogliosi Brothers Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "VBTX",
        "name": "Veritex Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VC",
        "name": "Visteon Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VCEL",
        "name": "Vericel Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VCKA",
        "name": "Vickers Vantage Corp. I Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "VCKAU",
        "name": "Vickers Vantage Corp. I Unit",
        "country": "Singapore"
      },
      {
        "symbol": "VCKAW",
        "name": "Vickers Vantage Corp. I Warrant",
        "country": "Singapore"
      },
      {
        "symbol": "VCNX",
        "name": "Vaccinex Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VCSA",
        "name": "Vacasa Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VCTR",
        "name": "Victory Capital Holdings Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VCXA",
        "name": "10X Capital Venture Acquisition Corp. II Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "VCXAU",
        "name": "10X Capital Venture Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "VCXAW",
        "name": "10X Capital Venture Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "VCYT",
        "name": "Veracyte Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VECO",
        "name": "Veeco Instruments Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VECT",
        "name": "VectivBio Holding AG Ordinary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "VEEE",
        "name": "Twin Vee PowerCats Co. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VELO",
        "name": "Velocity Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VELOW",
        "name": "Velocity Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VENA",
        "name": "Venus Acquisition Corporation Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "VENAR",
        "name": "Venus Acquisition Corporation Rights",
        "country": "United States"
      },
      {
        "symbol": "VENAW",
        "name": "Venus Acquisition Corporation Warrant",
        "country": "United States"
      },
      {
        "symbol": "VEON",
        "name": "VEON Ltd. ADS",
        "country": "Netherlands"
      },
      {
        "symbol": "VERA",
        "name": "Vera Therapeutics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERB",
        "name": "Verb Technology Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERBW",
        "name": "Verb Technology Company Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VERI",
        "name": "Veritone Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERO",
        "name": "Venus Concept Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERU",
        "name": "Veru Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERV",
        "name": "Verve Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERX",
        "name": "Vertex Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VERY",
        "name": "Vericity Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VEV",
        "name": "Vicinity Motor Corp. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "VFF",
        "name": "Village Farms International Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VG",
        "name": "Vonage Holdings Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VGFC",
        "name": "The Very Good Food Company Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VIA",
        "name": "Via Renewables Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIAC",
        "name": "ViacomCBS Inc. Class B Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIACA",
        "name": "ViacomCBS Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIACP",
        "name": "ViacomCBS Inc. 5.75% Series A Mandatory Convertible Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "VIASP",
        "name": "Via Renewables Inc. 8.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "VIAV",
        "name": "Viavi Solutions Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VICR",
        "name": "Vicor Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIEW",
        "name": "View Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIEWW",
        "name": "View Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VIGL",
        "name": "Vigil Neuroscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VII",
        "name": "7GC & Co. Holdings Inc. Class A common stock",
        "country": "United States"
      },
      {
        "symbol": "VIIAU",
        "name": "7GC & Co. Holdings Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "VIIAW",
        "name": "7GC & Co. Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VINC",
        "name": "Vincerx Pharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VINO",
        "name": "Gaucho Group Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VINP",
        "name": "Vinci Partners Investments Ltd. Class A Common Shares",
        "country": "Brazil"
      },
      {
        "symbol": "VIOT",
        "name": "Viomi Technology Co. Ltd American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "VIR",
        "name": "Vir Biotechnology Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIRC",
        "name": "Virco Manufacturing Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIRI",
        "name": "Virios Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIRT",
        "name": "Virtu Financial Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIRX",
        "name": "Viracta Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VISL",
        "name": "Vislink Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VITL",
        "name": "Vital Farms Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIVE",
        "name": "Viveve Medical Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VIVO",
        "name": "Meridian Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VJET",
        "name": "voxeljet AG American Depositary Shares",
        "country": "Germany"
      },
      {
        "symbol": "VKTX",
        "name": "Viking Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VLATU",
        "name": "Valor Latitude Acquisition Corp. Unit",
        "country": "Cayman Islands"
      },
      {
        "symbol": "VLATW",
        "name": "Valor Latitude Acquisition Corp. Warrant",
        "country": "Cayman Islands"
      },
      {
        "symbol": "VLCN",
        "name": "Volcon Inc. Common stock",
        "country": "United States"
      },
      {
        "symbol": "VLDR",
        "name": "Velodyne Lidar Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VLDRW",
        "name": "Velodyne Lidar Inc. Warrants ",
        "country": "United States"
      },
      {
        "symbol": "VLGEA",
        "name": "Village Super Market Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VLNS",
        "name": "The Valens Company Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VLON",
        "name": "Vallon Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VLY",
        "name": "Valley National Bancorp Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VLYPO",
        "name": "Valley National Bancorp 5.50% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series B",
        "country": "United States"
      },
      {
        "symbol": "VLYPP",
        "name": "Valley National Bancorp 6.25% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "VMAC",
        "name": "Vistas Media Acquisition Company Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VMACU",
        "name": "Vistas Media Acquisition Company Inc. Unit",
        "country": "United States"
      },
      {
        "symbol": "VMACW",
        "name": "Vistas Media Acquisition Company Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VMAR",
        "name": "Vision Marine Technologies Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VMD",
        "name": "Viemed Healthcare Inc. Common Shares",
        "country": "United States"
      },
      {
        "symbol": "VMEO",
        "name": "Vimeo Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VMGA",
        "name": "VMG Consumer Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VMGAU",
        "name": "VMG Consumer Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "VMGAW",
        "name": "VMG Consumer Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VNDA",
        "name": "Vanda Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VNET",
        "name": "VNET Group Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "VNOM",
        "name": "Viper Energy Partners LP Common Unit",
        "country": "United States"
      },
      {
        "symbol": "VOD",
        "name": "Vodafone Group Plc American Depositary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "VOR",
        "name": "Vor Biopharma Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VORB",
        "name": "Virgin Orbit Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VORBW",
        "name": "Virgin Orbit Holdings Inc. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VOXX",
        "name": "VOXX International Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VPCB",
        "name": "VPC Impact Acquisition Holdings II Class A ordinary shre",
        "country": "United States"
      },
      {
        "symbol": "VPCBU",
        "name": "VPC Impact Acquisition Holdings II Unit",
        "country": "United States"
      },
      {
        "symbol": "VPCBW",
        "name": "VPC Impact Acquisition Holdings II Warrant",
        "country": "United States"
      },
      {
        "symbol": "VQS",
        "name": "VIQ Solutions Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VRA",
        "name": "Vera Bradley Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRAR",
        "name": "The Glimpse Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRAY",
        "name": "ViewRay Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRCA",
        "name": "Verrica Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRDN",
        "name": "Viridian Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VREX",
        "name": "Varex Imaging Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRM",
        "name": "Vroom Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRME",
        "name": "VerifyMe Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRNA",
        "name": "Verona Pharma plc American Depositary Share",
        "country": "United Kingdom"
      },
      {
        "symbol": "VRNS",
        "name": "Varonis Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRNT",
        "name": "Verint Systems Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRPX",
        "name": "Virpax Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRRM",
        "name": "Verra Mobility Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRSK",
        "name": "Verisk Analytics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRSN",
        "name": "VeriSign Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRTS",
        "name": "Virtus Investment Partners Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VRTX",
        "name": "Vertex Pharmaceuticals Incorporated Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VS",
        "name": "Versus Systems Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "VSAC",
        "name": "Vision Sensing Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VSACU",
        "name": "Vision Sensing Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "VSACW",
        "name": "Vision Sensing Acquisition Corp. Warrants",
        "country": "United States"
      },
      {
        "symbol": "VSAT",
        "name": "ViaSat Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VSEC",
        "name": "VSE Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VSSYW",
        "name": "Versus Systems Inc. Class A Warrants",
        "country": "Canada"
      },
      {
        "symbol": "VSTA",
        "name": "Vasta Platform Limited Class A Ordinary Shares",
        "country": "Brazil"
      },
      {
        "symbol": "VSTM",
        "name": "Verastem Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTAQ",
        "name": "Ventoux CCM Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTAQR",
        "name": "Ventoux CCM Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "VTAQU",
        "name": "Ventoux CCM Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "VTAQW",
        "name": "Ventoux CCM Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "VTGN",
        "name": "VistaGen Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTIQ",
        "name": "VectoIQ Acquisition Corp. II Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTIQU",
        "name": "VectoIQ Acquisition Corp. II Unit",
        "country": "United States"
      },
      {
        "symbol": "VTIQW",
        "name": "VectoIQ Acquisition Corp. II Warrant",
        "country": "United States"
      },
      {
        "symbol": "VTNR",
        "name": "Vertex Energy Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTRS",
        "name": "Viatris Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTRU",
        "name": "Vitru Limited Common Shares",
        "country": "Brazil"
      },
      {
        "symbol": "VTSI",
        "name": "VirTra Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTVT",
        "name": "vTv Therapeutics Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VTYX",
        "name": "Ventyx Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VUZI",
        "name": "Vuzix Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VVOS",
        "name": "Vivos Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VVPR",
        "name": "VivoPower International PLC Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "VWE",
        "name": "Vintage Wine Estates Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VWTR",
        "name": "Vidler Water Resources Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VXRT",
        "name": "Vaxart Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VYGR",
        "name": "Voyager Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VYNE",
        "name": "VYNE Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "VYNT",
        "name": "Vyant Bio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WABC",
        "name": "Westamerica Bancorporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WAFD",
        "name": "Washington Federal Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WAFDP",
        "name": "Washington Federal Inc. Depositary Shares",
        "country": "United States"
      },
      {
        "symbol": "WAFU",
        "name": "Wah Fu Education Group Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "WALD",
        "name": "Waldencast Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "WALDU",
        "name": "Waldencast Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "WALDW",
        "name": "Waldencast Acquisition Corp. Warrant ",
        "country": "United States"
      },
      {
        "symbol": "WASH",
        "name": "Washington Trust Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WATT",
        "name": "Energous Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WAVD",
        "name": "WaveDancer Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WAVE",
        "name": "Eco Wave Power Global AB (publ) American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "WB",
        "name": "Weibo Corporation American Depositary Share",
        "country": "China"
      },
      {
        "symbol": "WBA",
        "name": "Walgreens Boots Alliance Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WDAY",
        "name": "Workday Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WDC",
        "name": "Western Digital Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WDFC",
        "name": "WD-40 Company Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WEJO",
        "name": "Wejo Group Limited Common Shares",
        "country": "Bermuda"
      },
      {
        "symbol": "WEJOW",
        "name": "Wejo Group Limited Warrant",
        "country": "Bermuda"
      },
      {
        "symbol": "WEN",
        "name": "Wendy's Company (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WERN",
        "name": "Werner Enterprises Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WETF",
        "name": "WisdomTree Investments Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WEYS",
        "name": "Weyco Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WFCF",
        "name": "Where Food Comes From Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WFRD",
        "name": "Weatherford International plc Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "WHF",
        "name": "WhiteHorse Finance Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WHLM",
        "name": "Wilhelmina International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WHLR",
        "name": "Wheeler Real Estate Investment Trust Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WHLRD",
        "name": "Wheeler Real Estate Investment Trust Inc. Series D Cumulative Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "WHLRL",
        "name": "Wheeler Real Estate Investment Trust Inc. 7.00% Senior Subordinated Convertible Notes Due 2031",
        "country": "United States"
      },
      {
        "symbol": "WHLRP",
        "name": "Wheeler Real Estate Investment Trust Inc. Class B Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "WILC",
        "name": "G. Willi-Food International  Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "WIMI",
        "name": "WiMi Hologram Cloud Inc. American Depositary Share",
        "country": "China"
      },
      {
        "symbol": "WINA",
        "name": "Winmark Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WING",
        "name": "Wingstop Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WINT",
        "name": "Windtree Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WINV",
        "name": "WinVest Acquisition Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WINVR",
        "name": "WinVest Acquisition Corp. Right",
        "country": "United States"
      },
      {
        "symbol": "WINVU",
        "name": "WinVest Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "WINVW",
        "name": "WinVest Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "WIRE",
        "name": "Encore Wire Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WISA",
        "name": "Summit Wireless Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WISH",
        "name": "ContextLogic Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WIX",
        "name": "Wix.com Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "WKEY",
        "name": "WISeKey International Holding AG American Depositary Shares",
        "country": "Switzerland"
      },
      {
        "symbol": "WKHS",
        "name": "Workhorse Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WKME",
        "name": "WalkMe Ltd. Ordinary Shares",
        "country": "Israel"
      },
      {
        "symbol": "WKSP",
        "name": "Worksport Ltd. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "WKSPW",
        "name": "Worksport Ltd. Warrant",
        "country": "Canada"
      },
      {
        "symbol": "WLDN",
        "name": "Willdan Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WLFC",
        "name": "Willis Lease Finance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WMG",
        "name": "Warner Music Group Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WMPN",
        "name": "William Penn Bancorporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WNEB",
        "name": "Western New England Bancorp Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WNW",
        "name": "Meiwu Technology Company Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "WOOF",
        "name": "Petco Health and Wellness Company Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WORX",
        "name": "SCWorx Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WPRT",
        "name": "Westport Fuel Systems Inc Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "WRAP",
        "name": "Wrap Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WRLD",
        "name": "World Acceptance Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WSBC",
        "name": "WesBanco Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WSBCP",
        "name": "WesBanco Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 6.75% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A",
        "country": "United States"
      },
      {
        "symbol": "WSBF",
        "name": "Waterstone Financial Inc. Common Stock (MD)",
        "country": "United States"
      },
      {
        "symbol": "WSC",
        "name": "WillScot Mobile Mini Holdings Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WSFS",
        "name": "WSFS Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WSTG",
        "name": "Wayside Technology Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WTBA",
        "name": "West Bancorporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WTER",
        "name": "The Alkaline Water Company Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WTFC",
        "name": "Wintrust Financial Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WTFCM",
        "name": "Wintrust Financial Corporation Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D",
        "country": "United States"
      },
      {
        "symbol": "WTFCP",
        "name": "Wintrust Financial Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E",
        "country": "United States"
      },
      {
        "symbol": "WTMAU",
        "name": "Welsbach Technology Metals Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "WTRH",
        "name": "Waitr Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WTW",
        "name": "Willis Towers Watson Public Limited Company Ordinary Shares",
        "country": "United Kingdom"
      },
      {
        "symbol": "WULF",
        "name": "TeraWulf Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WVE",
        "name": "Wave Life Sciences Ltd. Ordinary Shares",
        "country": "Singapore"
      },
      {
        "symbol": "WVFC",
        "name": "WVS Financial Corp. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WVVI",
        "name": "Willamette Valley Vineyards Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WVVIP",
        "name": "Willamette Valley Vineyards Inc. Series A Redeemable Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "WW",
        "name": "WW International Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WWAC",
        "name": "Worldwide Webb Acquisition Corp. Class A Ordinary Share",
        "country": "United States"
      },
      {
        "symbol": "WWACU",
        "name": "Worldwide Webb Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "WWACW",
        "name": "Worldwide Webb Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "WWD",
        "name": "Woodward Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "WYNN",
        "name": "Wynn Resorts Limited Common stock",
        "country": "United States"
      },
      {
        "symbol": "XAIR",
        "name": "Beyond Air Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XBIO",
        "name": "Xenetic Biosciences Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XBIT",
        "name": "XBiotech Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XCUR",
        "name": "Exicure Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XEL",
        "name": "Xcel Energy Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XELA",
        "name": "Exela Technologies Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XELB",
        "name": "Xcel Brands Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XENE",
        "name": "Xenon Pharmaceuticals Inc. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "XENT",
        "name": "Intersect ENT Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XERS",
        "name": "Xeris Biopharma Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XFIN",
        "name": "ExcelFin Acquisition Corp Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XFINU",
        "name": "ExcelFin Acquisition Corp Unit",
        "country": "United States"
      },
      {
        "symbol": "XFINW",
        "name": "ExcelFin Acquisition Corp Warrant",
        "country": "United States"
      },
      {
        "symbol": "XFOR",
        "name": "X4 Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XGN",
        "name": "Exagen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XLNX",
        "name": "Xilinx Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XLO",
        "name": "Xilio Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XM",
        "name": "Qualtrics International Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XMTR",
        "name": "Xometry Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XNCR",
        "name": "Xencor Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XNET",
        "name": "Xunlei Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "XOMA",
        "name": "XOMA Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XOMAO",
        "name": "XOMA Corporation Depositary Shares Rep Series B 8.375% Cumulative Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "XOMAP",
        "name": "XOMA Corporation 8.625% Series A Cumulative Perpetual Preferred Stock",
        "country": "United States"
      },
      {
        "symbol": "XOS",
        "name": "Xos Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XOSWW",
        "name": "Xos Inc. Warrants",
        "country": "United States"
      },
      {
        "symbol": "XP",
        "name": "XP Inc. Class A Common Stock",
        "country": "Brazil"
      },
      {
        "symbol": "XPAX",
        "name": "XPAC Acquisition Corp. Class A Ordinary Shares",
        "country": "United States"
      },
      {
        "symbol": "XPAXU",
        "name": "XPAC Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "XPAXW",
        "name": "XPAC Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "XPDBU",
        "name": "Power & Digital Infrastructure Acquisition II Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "XPDI",
        "name": "Power & Digital Infrastructure Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XPDIU",
        "name": "Power & Digital Infrastructure Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "XPDIW",
        "name": "Power & Digital Infrastructure Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "XPEL",
        "name": "XPEL Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XPER",
        "name": "Xperi Holding Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XRAY",
        "name": "DENTSPLY SIRONA Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XRTX",
        "name": "XORTX Therapeutics Inc. Common Stock",
        "country": "Canada"
      },
      {
        "symbol": "XRX",
        "name": "Xerox Holdings Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XSPA",
        "name": "XpresSpa Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "XTLB",
        "name": "XTL Biopharmaceuticals Ltd. American Depositary Shares",
        "country": "Israel"
      },
      {
        "symbol": "XXII",
        "name": "22nd Century Group Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YELL",
        "name": "Yellow Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YGMZ",
        "name": "MingZhu Logistics Holdings Limited Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "YI",
        "name": "111 Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "YJ",
        "name": "Yunji Inc. American Depository Shares",
        "country": "China"
      },
      {
        "symbol": "YMAB",
        "name": "Y-mAbs Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YMTX",
        "name": "Yumanity Therapeutics Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YNDX",
        "name": "Yandex N.V. Class A Ordinary Shares",
        "country": "Netherlands"
      },
      {
        "symbol": "YORW",
        "name": "York Water Company (The) Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YQ",
        "name": "17 Education & Technology Group Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "YTEN",
        "name": "Yield10 Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "YTRA",
        "name": "Yatra Online Inc. Ordinary Shares",
        "country": "India"
      },
      {
        "symbol": "YVR",
        "name": "Liquid Media Group Ltd. Common Shares",
        "country": "Canada"
      },
      {
        "symbol": "YY",
        "name": "JOYY Inc. American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "Z",
        "name": "Zillow Group Inc. Class C Capital Stock",
        "country": "United States"
      },
      {
        "symbol": "ZBRA",
        "name": "Zebra Technologies Corporation Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZCMD",
        "name": "Zhongchao Inc. Class A Ordinary Shares",
        "country": "China"
      },
      {
        "symbol": "ZD",
        "name": "Ziff Davis Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZEAL",
        "name": "Zealand Pharma A/S American Depositary Shares",
        "country": "Denmark"
      },
      {
        "symbol": "ZENV",
        "name": "Zenvia Inc. Class A Common Stock",
        "country": "Brazil"
      },
      {
        "symbol": "ZEST",
        "name": "Ecoark Holdings Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZEUS",
        "name": "Olympic Steel Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZG",
        "name": "Zillow Group Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZGNX",
        "name": "Zogenix Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZI",
        "name": "ZoomInfo Technologies Inc Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZINGU",
        "name": "FTAC Zeus Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ZINGW",
        "name": "FTAC Zeus Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ZION",
        "name": "Zions Bancorporation N.A. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZIONL",
        "name": "Zions Bancorporation 6.95% Fixed-to-Floating Rate Subordinated Notes",
        "country": "United States"
      },
      {
        "symbol": "ZIONO",
        "name": "Zions Bancorporation N.A. Dep Shs Repstg 1/40th Perp Pfd Ser G",
        "country": "United States"
      },
      {
        "symbol": "ZIONP",
        "name": "Zions Bancorporation N.A. Depositary Shares (Each representing 1/40th Interest in a Share of Series A Floating-Rate Non-Cumulative Perpetual Preferred Stock)",
        "country": "United States"
      },
      {
        "symbol": "ZIOP",
        "name": "ZIOPHARM Oncology Inc Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZIVO",
        "name": "Zivo Bioscience Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZKIN",
        "name": "ZK International Group Co. Ltd Ordinary Share",
        "country": "China"
      },
      {
        "symbol": "ZLAB",
        "name": "Zai Lab Limited American Depositary Shares",
        "country": "China"
      },
      {
        "symbol": "ZM",
        "name": "Zoom Video Communications Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZNGA",
        "name": "Zynga Inc. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZNTE",
        "name": "Zanite Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZNTEU",
        "name": "Zanite Acquisition Corp. Unit",
        "country": "United States"
      },
      {
        "symbol": "ZNTEW",
        "name": "Zanite Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ZNTL",
        "name": "Zentalis Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZS",
        "name": "Zscaler Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZSAN",
        "name": "Zosano Pharma Corporation Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZT",
        "name": "Zimmer Energy Transition Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZTAQU",
        "name": "Zimmer Energy Transition Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "ZUMZ",
        "name": "Zumiez Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZVO",
        "name": "Zovio Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZWRK",
        "name": "Z-Work Acquisition Corp. Class A Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZWRKU",
        "name": "Z-Work Acquisition Corp. Units",
        "country": "United States"
      },
      {
        "symbol": "ZWRKW",
        "name": "Z-Work Acquisition Corp. Warrant",
        "country": "United States"
      },
      {
        "symbol": "ZY",
        "name": "Zymergen Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZYNE",
        "name": "Zynerba Pharmaceuticals Inc. Common Stock",
        "country": "United States"
      },
      {
        "symbol": "ZYXI",
        "name": "Zynex Inc. Common Stock",
        "country": "United States"
      }
    ],
      "additional_data": {
        "pagination": {
          "start": 0,
          "limit": 5,
          "more_items_in_collection": true,
          "next_start": 5
        }
      }
    };
    
    var datamap = data.data.map(function(i) {
      return {
        label: i.symbol + ' - ' + i.name.split(' ').slice(0, 2).join(' ') + ' - ' + i.country,
        value: i.symbol,
        desc: i.title
      }
    });
    
    var key = request.term;
    
    datamap = datamap.filter(function(i) {
      return i.label.toLowerCase().indexOf(key.toLowerCase()) >= 0;
    });

    response(datamap);
  },
  minLength: 2,
  delay: 500
});
