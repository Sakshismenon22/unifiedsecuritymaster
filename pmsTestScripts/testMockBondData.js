// import axios from 'axios'

// const createBond = async (bond) => {
//     const res = await axios.post("http://localhost:8081/api/bonds/add-bond",bond);
//     console.log(res);
// }

// // -------------------------------------------------------------------
// // Bonds - Indian NSE, all Corporate -> assetId 17 (Corporation Bond)
// // -------------------------------------------------------------------

// const infosysBond = {
//   assetId:         17,               // Cor poration Bond
//   isin:            "INE009A01241",
//   name:            "Infosys Limited 7.85% 2029",
//   issuerName:      "Infosys Tech Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0785,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2019-05-20",
//   maturityDate:    "2029-05-20",
//   creditRating:    "A-"
// };

// const tcsBond = {
//   assetId:         17,
//   isin:            "INE467B01211",
//   name:            "Tata Consultancy 7.60% 2028",
//   issuerName:      "Tata Consultancy Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0760,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2018-08-10",
//   maturityDate:    "2028-08-10",
//   creditRating:    "A-"
// };

// const wiproBond = {
//   assetId:         17,
//   isin:            "INE075A01332",
//   name:            "Wipro Limited 7.20% 2027",
//   issuerName:      "Wipro Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0720,
//   couponFrequency: "Annual",
//   issueDate:       "2017-03-15",
//   maturityDate:    "2027-03-15",
//   creditRating:    "BBB+"
// };

// const hclTechBond = {
//   assetId:         17,
//   isin:            "INE860A01418",
//   name:            "HCL Technologies 8.10% 2030",
//   issuerName:      "HCL Technologies Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0810,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2020-06-01",
//   maturityDate:    "2030-06-01",
//   creditRating:    "A-"
// };

// const techMahindraBond = {
//   assetId:         17,
//   isin:            "INE669C01325",
//   name:            "Tech Mahindra 7.45% 2026",
//   issuerName:      "Tech Mahindra Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0745,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2016-11-20",
//   maturityDate:    "2026-11-20",
//   creditRating:    "BBB+"
// };

// const ltiMindtreeBond = {
//   assetId:         17,
//   isin:            "INE214T01127",
//   name:            "LTIM Limited 6.95% 2027",
//   issuerName:      "LTIM Limited",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0695,
//   couponFrequency: "Annual",
//   issueDate:       "2017-09-12",
//   maturityDate:    "2027-09-12",
//   creditRating:    "BBB"
// };

// const persistentBond = {
//   assetId:         17,
//   isin:            "INE262H01234",
//   name:            "Persistent Systems 7.30% 2028",
//   issuerName:      "Persistent Systems Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0730,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2018-04-05",
//   maturityDate:    "2028-04-05",
//   creditRating:    "BBB+"
// };

// const coforgeBond = {
//   assetId:         17,
//   isin:            "INE591G01129",
//   name:            "Coforge Limited 8.40% 2031",
//   issuerName:      "Coforge Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0840,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2021-02-18",
//   maturityDate:    "2031-02-18",
//   creditRating:    "A-"
// };

// const mphasisBond = {
//   assetId:         17,
//   isin:            "INE356A01133",
//   name:            "Mphasis Limited 7.55% 2029",
//   issuerName:      "Mphasis Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0755,
//   couponFrequency: "Annual",
//   issueDate:       "2019-07-25",
//   maturityDate:    "2029-07-25",
//   creditRating:    "BBB"
// };

// const oracleFinServBond = {
//   assetId:         17,
//   isin:            "INE881D01231",
//   name:            "Oracle Financial Services 7.05% 2028",
//   issuerName:      "Oracle Financial Services Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0705,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2018-10-30",
//   maturityDate:    "2028-10-30",
//   creditRating:    "A-"
// };

// const ltTechServicesBond = {
//   assetId:         17,
//   isin:            "INE010V01235",
//   name:            "L&T Technology Services 7.75% 2030",
//   issuerName:      "L&T Technology Services Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0775,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2020-01-15",
//   maturityDate:    "2030-01-15",
//   creditRating:    "A-"
// };

// const tataElxsiBond = {
//   assetId:         17,
//   isin:            "INE670A01337",
//   name:            "Tata Elxsi Limited 6.85% 2027",
//   issuerName:      "Tata Elxsi Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0685,
//   couponFrequency: "Annual",
//   issueDate:       "2017-06-10",
//   maturityDate:    "2027-06-10",
//   creditRating:    "BBB+"
// };

// const kpitTechBond = {
//   assetId:         17,
//   isin:            "INE04I401135",
//   name:            "KPIT Technologies 8.25% 2029",
//   issuerName:      "KPIT Technologies Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0825,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2019-12-01",
//   maturityDate:    "2029-12-01",
//   creditRating:    "A-"
// };

// const cyientBond = {
//   assetId:         17,
//   isin:            "INE136B01139",
//   name:            "Cyient Limited 7.40% 2028",
//   issuerName:      "Cyient Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0740,
//   couponFrequency: "Annual",
//   issueDate:       "2018-03-22",
//   maturityDate:    "2028-03-22",
//   creditRating:    "BBB"
// };

// const birlasoftBond = {
//   assetId:         17,
//   isin:            "INE836A01332",
//   name:            "Birlasoft Limited 7.90% 2031",
//   issuerName:      "Birlasoft Ltd",
//   bondType:        "Corporate",
//   exchange:        "NSE",
//   currency:        "INR",
//   faceValue:       1000.00,
//   couponRate:      0.0790,
//   couponFrequency: "SemiAnnual",
//   issueDate:       "2021-05-10",
//   maturityDate:    "2031-05-10",
//   creditRating:    "A-"
// };

// const bonds = [
//   infosysBond, tcsBond, wiproBond, hclTechBond, techMahindraBond,
//   ltiMindtreeBond, persistentBond, coforgeBond, mphasisBond, oracleFinServBond,
//   ltTechServicesBond, tataElxsiBond, kpitTechBond, cyientBond, birlasoftBond
// ];

// for (const bond of bonds) {
//     await createBond(bond);
// }


import axios from 'axios'

const createBond = async (bond) => {
    const res = await axios.post("http://localhost:8081/api/bonds/add-bond", bond);
    console.log(res);
}

// ====================================================================
// NSE - National Stock Exchange (India), INR, assetId 17
// ====================================================================

const infosysBond = {
  assetId: 17, isin: "INE009A01241", name: "Infosys Limited 7.85% 2029",
  issuerName: "Infosys Tech Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0785,
  couponFrequency: "SemiAnnual", issueDate: "2019-05-20",
  maturityDate: "2029-05-20", creditRating: "A-"
};

const tcsBond = {
  assetId: 17, isin: "INE467B01211", name: "Tata Consultancy 7.60% 2028",
  issuerName: "Tata Consultancy Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0760,
  couponFrequency: "SemiAnnual", issueDate: "2018-08-10",
  maturityDate: "2028-08-10", creditRating: "A-"
};

const wiproBond = {
  assetId: 17, isin: "INE075A01332", name: "Wipro Limited 7.20% 2027",
  issuerName: "Wipro Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0720,
  couponFrequency: "Annual", issueDate: "2017-03-15",
  maturityDate: "2027-03-15", creditRating: "BBB+"
};

const hclTechBond = {
  assetId: 17, isin: "INE860A01418", name: "HCL Technologies 8.10% 2030",
  issuerName: "HCL Technologies Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0810,
  couponFrequency: "SemiAnnual", issueDate: "2020-06-01",
  maturityDate: "2030-06-01", creditRating: "A-"
};

const techMahindraBond = {
  assetId: 17, isin: "INE669C01325", name: "Tech Mahindra 7.45% 2026",
  issuerName: "Tech Mahindra Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0745,
  couponFrequency: "SemiAnnual", issueDate: "2016-11-20",
  maturityDate: "2026-11-20", creditRating: "BBB+"
};

const ltiMindtreeBond = {
  assetId: 17, isin: "INE214T01127", name: "LTIM Limited 6.95% 2027",
  issuerName: "LTIM Limited", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0695,
  couponFrequency: "Annual", issueDate: "2017-09-12",
  maturityDate: "2027-09-12", creditRating: "BBB"
};

const persistentBond = {
  assetId: 17, isin: "INE262H01234", name: "Persistent Systems 7.30% 2028",
  issuerName: "Persistent Systems Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0730,
  couponFrequency: "SemiAnnual", issueDate: "2018-04-05",
  maturityDate: "2028-04-05", creditRating: "BBB+"
};

const coforgeBond = {
  assetId: 17, isin: "INE591G01129", name: "Coforge Limited 8.40% 2031",
  issuerName: "Coforge Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0840,
  couponFrequency: "SemiAnnual", issueDate: "2021-02-18",
  maturityDate: "2031-02-18", creditRating: "A-"
};

const mphasisBond = {
  assetId: 17, isin: "INE356A01133", name: "Mphasis Limited 7.55% 2029",
  issuerName: "Mphasis Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0755,
  couponFrequency: "Annual", issueDate: "2019-07-25",
  maturityDate: "2029-07-25", creditRating: "BBB"
};

const oracleFinServBond = {
  assetId: 17, isin: "INE881D01231", name: "Oracle Financial Services 7.05% 2028",
  issuerName: "Oracle Financial Services Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0705,
  couponFrequency: "SemiAnnual", issueDate: "2018-10-30",
  maturityDate: "2028-10-30", creditRating: "A-"
};

const ltTechServicesBond = {
  assetId: 17, isin: "INE010V01235", name: "L&T Technology Services 7.75% 2030",
  issuerName: "L&T Technology Services Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0775,
  couponFrequency: "SemiAnnual", issueDate: "2020-01-15",
  maturityDate: "2030-01-15", creditRating: "A-"
};

const tataElxsiBond = {
  assetId: 17, isin: "INE670A01337", name: "Tata Elxsi Limited 6.85% 2027",
  issuerName: "Tata Elxsi Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0685,
  couponFrequency: "Annual", issueDate: "2017-06-10",
  maturityDate: "2027-06-10", creditRating: "BBB+"
};

const kpitTechBond = {
  assetId: 17, isin: "INE04I401135", name: "KPIT Technologies 8.25% 2029",
  issuerName: "KPIT Technologies Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0825,
  couponFrequency: "SemiAnnual", issueDate: "2019-12-01",
  maturityDate: "2029-12-01", creditRating: "A-"
};

const cyientBond = {
  assetId: 17, isin: "INE136B01139", name: "Cyient Limited 7.40% 2028",
  issuerName: "Cyient Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0740,
  couponFrequency: "Annual", issueDate: "2018-03-22",
  maturityDate: "2028-03-22", creditRating: "BBB"
};

const birlasoftBond = {
  assetId: 17, isin: "INE836A01332", name: "Birlasoft Limited 7.90% 2031",
  issuerName: "Birlasoft Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0790,
  couponFrequency: "SemiAnnual", issueDate: "2021-05-10",
  maturityDate: "2031-05-10", creditRating: "A-"
};

const relainceIndustBond = {
  assetId: 17, isin: "INE002A01245", name: "Relaince Indust 7.95% 2030",
  issuerName: "Relaince Indust Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0795,
  couponFrequency: "SemiAnnual", issueDate: "2020-08-12",
  maturityDate: "2030-08-12", creditRating: "BBB+"
};

const hdfcBankBond = {
  assetId: 17, isin: "INE040A01238", name: "HDFC Bank 7.35% 2029",
  issuerName: "HDFC Bank Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0735,
  couponFrequency: "SemiAnnual", issueDate: "2019-04-18",
  maturityDate: "2029-04-18", creditRating: "A"
};

const temaSteelBond = {
  assetId: 17, isin: "INE081A01326", name: "Tema Steel 8.05% 2028",
  issuerName: "Tema Steel Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0805,
  couponFrequency: "Annual", issueDate: "2018-11-25",
  maturityDate: "2028-11-25", creditRating: "BBB+"
};

const bartiAirtelBond = {
  assetId: 17, isin: "INE397A01342", name: "Barti Airtel 6.75% 2027",
  issuerName: "Barti Airtel Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0675,
  couponFrequency: "SemiAnnual", issueDate: "2017-12-05",
  maturityDate: "2027-12-05", creditRating: "BBB"
};

const mahindraGroupBond = {
  assetId: 17, isin: "INE147A01248", name: "Mahindra Group 7.65% 2032",
  issuerName: "Mahindra Group Ltd", bondType: "Corporate", exchange: "NSE",
  currency: "INR", faceValue: 1000.00, couponRate: 0.0765,
  couponFrequency: "SemiAnnual", issueDate: "2022-01-20",
  maturityDate: "2032-01-20", creditRating: "AA"
};

const nseBonds = [
  infosysBond, tcsBond, wiproBond, hclTechBond, techMahindraBond,
  ltiMindtreeBond, persistentBond, coforgeBond, mphasisBond, oracleFinServBond,
  ltTechServicesBond, tataElxsiBond, kpitTechBond, cyientBond, birlasoftBond,
  relainceIndustBond, hdfcBankBond, temaSteelBond, bartiAirtelBond, mahindraGroupBond
];

// ====================================================================
// LSE - London Stock Exchange (UK), GBP, assetId 17
// ====================================================================

const bpEnergyBond = {
  assetId: 17, isin: "GB00B1XY124", name: "BP Energy 4.10% 2028",
  issuerName: "BP Energy PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0410,
  couponFrequency: "SemiAnnual", issueDate: "2018-11-05",
  maturityDate: "2028-11-05", creditRating: "A-"
};

const vodafoneBond = {
  assetId: 17, isin: "GB00B2PQ873", name: "Vodefone Group 4.85% 2027",
  issuerName: "Vodefone Group PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0485,
  couponFrequency: "SemiAnnual", issueDate: "2017-03-14",
  maturityDate: "2027-03-14", creditRating: "BBB"
};

const astaZenecaBond = {
  assetId: 17, isin: "GB00B3LM560", name: "AstaZeneca 3.75% 2030",
  issuerName: "AstaZeneca PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0375,
  couponFrequency: "SemiAnnual", issueDate: "2020-07-20",
  maturityDate: "2030-07-20", creditRating: "A+"
};

const uniliverBond = {
  assetId: 17, isin: "GB00B4ZR219", name: "Uniliver 3.55% 2029",
  issuerName: "Uniliver PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0355,
  couponFrequency: "SemiAnnual", issueDate: "2019-02-10",
  maturityDate: "2029-02-10", creditRating: "AA-"
};

const glaxoSmithKlineBond = {
  assetId: 17, isin: "GB00B5TW450", name: "GlaxoSmithKline 4.25% 2028",
  issuerName: "GlaxoSmithKline PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0425,
  couponFrequency: "SemiAnnual", issueDate: "2018-06-15",
  maturityDate: "2028-06-15", creditRating: "A"
};

const hsbcHoldingsBond = {
  assetId: 17, isin: "GB00B6KD310", name: "HSBC Holdings 4.60% 2027",
  issuerName: "HSBC Holdings PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0460,
  couponFrequency: "SemiAnnual", issueDate: "2017-09-01",
  maturityDate: "2027-09-01", creditRating: "A+"
};

const barclaiysBond = {
  assetId: 17, isin: "GB00B7NB822", name: "Barclaiys 4.95% 2029",
  issuerName: "Barclaiys PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0495,
  couponFrequency: "SemiAnnual", issueDate: "2019-05-22",
  maturityDate: "2029-05-22", creditRating: "BBB+"
};

const lioydsBankingBond = {
  assetId: 17, isin: "GB00B8CV740", name: "Lioyds Banking 4.45% 2028",
  issuerName: "Lioyds Banking Group", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0445,
  couponFrequency: "SemiAnnual", issueDate: "2018-04-30",
  maturityDate: "2028-04-30", creditRating: "A-"
};

const rollsRoyceBond = {
  assetId: 17, isin: "GB00B9MB155", name: "Rolls-Royce 5.10% 2029",
  issuerName: "Rolls-Royce Holdings", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0510,
  couponFrequency: "SemiAnnual", issueDate: "2019-10-25",
  maturityDate: "2029-10-25", creditRating: "BBB+"
};

const tescoBond = {
  assetId: 17, isin: "GB00C1PQ264", name: "Tesco PLC 4.30% 2027",
  issuerName: "Tesco PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0430,
  couponFrequency: "SemiAnnual", issueDate: "2017-08-18",
  maturityDate: "2027-08-18", creditRating: "A-"
};

const sainsburyBond = {
  assetId: 17, isin: "GB00C2KD381", name: "Sainsbury 4.05% 2028",
  issuerName: "Sainsbury PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0405,
  couponFrequency: "SemiAnnual", issueDate: "2018-03-12",
  maturityDate: "2028-03-12", creditRating: "BBB+"
};

const diageoBond = {
  assetId: 17, isin: "GB00C3NB902", name: "Diageo 3.85% 2030",
  issuerName: "Diageo PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0385,
  couponFrequency: "SemiAnnual", issueDate: "2020-11-15",
  maturityDate: "2030-11-15", creditRating: "A"
};

const nationaGridBond = {
  assetId: 17, isin: "GB00C4CV517", name: "Nationa Grid 4.20% 2031",
  issuerName: "Nationa Grid PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0420,
  couponFrequency: "SemiAnnual", issueDate: "2021-02-05",
  maturityDate: "2031-02-05", creditRating: "A-"
};

const avivaBond = {
  assetId: 17, isin: "GB00C5MB678", name: "Aviva 5.00% 2029",
  issuerName: "Aviva PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0500,
  couponFrequency: "SemiAnnual", issueDate: "2019-09-12",
  maturityDate: "2029-09-12", creditRating: "A-"
};

const prudentialBond = {
  assetId: 17, isin: "GB00C6PQ390", name: "Prudential 4.70% 2028",
  issuerName: "Prudential PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0470,
  couponFrequency: "SemiAnnual", issueDate: "2018-07-08",
  maturityDate: "2028-07-08", creditRating: "A"
};

const reckittBenckiserBond = {
  assetId: 17, isin: "GB00C7KD845", name: "Reckitt Benckiser 4.90% 2030",
  issuerName: "Reckitt Benckiser Group", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0490,
  couponFrequency: "SemiAnnual", issueDate: "2020-05-30",
  maturityDate: "2030-05-30", creditRating: "BBB+"
};

const batsBond = {
  assetId: 17, isin: "GB00C8NB163", name: "BATS PLC 5.25% 2027",
  issuerName: "BATS PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0525,
  couponFrequency: "SemiAnnual", issueDate: "2017-11-01",
  maturityDate: "2027-11-01", creditRating: "BBB"
};

const centricaBond = {
  assetId: 17, isin: "GB00C9CV729", name: "Centrica 4.15% 2028",
  issuerName: "Centrica PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0415,
  couponFrequency: "SemiAnnual", issueDate: "2018-12-20",
  maturityDate: "2028-12-20", creditRating: "BBB+"
};

const seaGroupBond = {
  assetId: 17, isin: "GB00D1MB284", name: "SEA Group 5.40% 2029",
  issuerName: "SEA Group PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0540,
  couponFrequency: "SemiAnnual", issueDate: "2019-06-15",
  maturityDate: "2029-06-15", creditRating: "BBB"
};

const tescobankBond = {
  assetId: 17, isin: "GB00D2PQ501", name: "Tescobank 4.55% 2031",
  issuerName: "Tescobank PLC", bondType: "Corporate", exchange: "LSE",
  currency: "GBP", faceValue: 1000.00, couponRate: 0.0455,
  couponFrequency: "SemiAnnual", issueDate: "2021-08-10",
  maturityDate: "2031-08-10", creditRating: "A-"
};

const lseBonds = [
  bpEnergyBond, vodafoneBond, astaZenecaBond, uniliverBond, glaxoSmithKlineBond,
  hsbcHoldingsBond, barclaiysBond, lioydsBankingBond, rollsRoyceBond, tescoBond,
  sainsburyBond, diageoBond, nationaGridBond, avivaBond, prudentialBond,
  reckittBenckiserBond, batsBond, centricaBond, seaGroupBond, tescobankBond
];

// ====================================================================
// NasdaQ - Nasdaq (USA), USD, assetId 17
// ====================================================================

const apfelBond = {
  assetId: 17, isin: "US037833AA18", name: "Apfel Inc 3.85% 2029",
  issuerName: "Apfel Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0385,
  couponFrequency: "SemiAnnual", issueDate: "2019-08-10",
  maturityDate: "2029-08-10", creditRating: "AA+"
};

const microsaftBond = {
  assetId: 17, isin: "US594918AA54", name: "Microsaft Corp 2.40% 2026",
  issuerName: "Microsaft Corp", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0240,
  couponFrequency: "SemiAnnual", issueDate: "2021-02-12",
  maturityDate: "2026-02-12", creditRating: "AAA"
};

const amzoneBond = {
  assetId: 17, isin: "US023135AB22", name: "Amzone.com 3.10% 2028",
  issuerName: "Amzone.com Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0310,
  couponFrequency: "SemiAnnual", issueDate: "2018-05-20",
  maturityDate: "2028-05-20", creditRating: "AA"
};

const googlaBond = {
  assetId: 17, isin: "US38268RAC91", name: "Googla Inc 2.75% 2027",
  issuerName: "Googla Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0275,
  couponFrequency: "SemiAnnual", issueDate: "2017-09-15",
  maturityDate: "2027-09-15", creditRating: "AA+"
};

const jpMorgamBond = {
  assetId: 17, isin: "US46647BAA37", name: "JPMorgam Chase 3.45% 2029",
  issuerName: "JPMorgam Chase & Co", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0345,
  couponFrequency: "SemiAnnual", issueDate: "2019-03-08",
  maturityDate: "2029-03-08", creditRating: "A+"
};

const metaPlatfomsBond = {
  assetId: 17, isin: "US30303EAC16", name: "Meta Platfoms 3.95% 2030",
  issuerName: "Meta Platfoms Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0395,
  couponFrequency: "SemiAnnual", issueDate: "2020-06-25",
  maturityDate: "2030-06-25", creditRating: "A-"
};

const tesllaBond = {
  assetId: 17, isin: "US88160FAA84", name: "Teslla Inc 4.25% 2028",
  issuerName: "Teslla Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0425,
  couponFrequency: "SemiAnnual", issueDate: "2018-10-12",
  maturityDate: "2028-10-12", creditRating: "BBB"
};

const nividiaBond = {
  assetId: 17, isin: "US67066TAB28", name: "Nividia Corp 2.90% 2031",
  issuerName: "Nividia Corp", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0290,
  couponFrequency: "SemiAnnual", issueDate: "2021-04-18",
  maturityDate: "2031-04-18", creditRating: "AA-"
};

const intelBond = {
  assetId: 17, isin: "US45814NAD53", name: "Intel Corp 3.30% 2027",
  issuerName: "Intel Corp", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0330,
  couponFrequency: "SemiAnnual", issueDate: "2017-07-22",
  maturityDate: "2027-07-22", creditRating: "A+"
};

const ciscoBond = {
  assetId: 17, isin: "US17275EAA66", name: "Cisco Systems 2.65% 2029",
  issuerName: "Cisco Systems Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0265,
  couponFrequency: "SemiAnnual", issueDate: "2019-11-05",
  maturityDate: "2029-11-05", creditRating: "AA-"
};

const orcaleBond = {
  assetId: 17, isin: "US68389LAB25", name: "Orcale Corp 3.20% 2028",
  issuerName: "Orcale Corp", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0320,
  couponFrequency: "SemiAnnual", issueDate: "2018-02-14",
  maturityDate: "2028-02-14", creditRating: "A+"
};

const salasforceBond = {
  assetId: 17, isin: "US79466LAC79", name: "Salasforce Inc 3.60% 2030",
  issuerName: "Salasforce Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0360,
  couponFrequency: "SemiAnnual", issueDate: "2020-09-01",
  maturityDate: "2030-09-01", creditRating: "A-"
};

const adobeeBond = {
  assetId: 17, isin: "US00724FAB13", name: "Adobee Inc 2.85% 2029",
  issuerName: "Adobee Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0285,
  couponFrequency: "SemiAnnual", issueDate: "2019-01-25",
  maturityDate: "2029-01-25", creditRating: "A+"
};

const payPallBond = {
  assetId: 17, isin: "US70450NAD41", name: "PayPall Holdings 3.75% 2031",
  issuerName: "PayPall Holdings", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0375,
  couponFrequency: "SemiAnnual", issueDate: "2021-07-10",
  maturityDate: "2031-07-10", creditRating: "A-"
};

const netflaxBond = {
  assetId: 17, isin: "US64110LAB68", name: "Netflax Inc 4.50% 2027",
  issuerName: "Netflax Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0450,
  couponFrequency: "SemiAnnual", issueDate: "2017-05-18",
  maturityDate: "2027-05-18", creditRating: "BBB+"
};

const cokaColaBond = {
  assetId: 17, isin: "US19121PAB93", name: "Coka-Cola Co 2.55% 2032",
  issuerName: "Coka-Cola Co", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0255,
  couponFrequency: "SemiAnnual", issueDate: "2022-03-30",
  maturityDate: "2032-03-30", creditRating: "A+"
};

const pepseCoBond = {
  assetId: 17, isin: "US71344PAB35", name: "PepseCo Inc 2.70% 2030",
  issuerName: "PepseCo Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0270,
  couponFrequency: "SemiAnnual", issueDate: "2020-11-12",
  maturityDate: "2030-11-12", creditRating: "A+"
};

const johnsonBond = {
  assetId: 17, isin: "US47816TAC82", name: "Johnson & Johnson 2.95% 2028",
  issuerName: "Johnson & Johnson", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0295,
  couponFrequency: "SemiAnnual", issueDate: "2018-08-05",
  maturityDate: "2028-08-05", creditRating: "AAA"
};

const procterGambelBond = {
  assetId: 17, isin: "US74271PAD19", name: "Procter & Gambel 3.15% 2029",
  issuerName: "Procter & Gambel", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0315,
  couponFrequency: "SemiAnnual", issueDate: "2019-04-22",
  maturityDate: "2029-04-22", creditRating: "AA-"
};

const visamBond = {
  assetId: 17, isin: "US92856VAB47", name: "Visam Inc 3.40% 2031",
  issuerName: "Visam Inc", bondType: "Corporate", exchange: "NasdaQ",
  currency: "USD", faceValue: 1000.00, couponRate: 0.0340,
  couponFrequency: "SemiAnnual", issueDate: "2021-09-15",
  maturityDate: "2031-09-15", creditRating: "A+"
};

const nasdaQBonds = [
  apfelBond, microsaftBond, amzoneBond, googlaBond, jpMorgamBond,
  metaPlatfomsBond, tesllaBond, nividiaBond, intelBond, ciscoBond,
  orcaleBond, salasforceBond, adobeeBond, payPallBond, netflaxBond,
  cokaColaBond, pepseCoBond, johnsonBond, procterGambelBond, visamBond
];

// ====================================================================
// Run - NSE, then LSE, then NasdaQ
// ====================================================================

const bonds = [
  ...nseBonds,
  ...lseBonds,
  ...nasdaQBonds
];

for (let bond of bonds) {
    bond = {...bond,country:"IN"}
    await createBond(bond);
}