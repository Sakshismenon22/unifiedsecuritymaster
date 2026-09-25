import axios from 'axios'
const createStock = async (stock)=>{
    const res = await axios.post("http://localhost:8081/api/stock-watchlist/add-stock",stock);
    console.log(res);
}

const infosys = {
  symbol:   "INFY",
  name:     "Infosys Limited",
  exchange: "NSE",
  isin:     "INE009A01021",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const tcs = {
  symbol:   "TCS",
  name:     "Tata Consultancy Services Limited",
  exchange: "NSE",
  isin:     "INE467B01029",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const wipro = {
  symbol:   "WIPRO",
  name:     "Wipro Limited",
  exchange: "NSE",
  isin:     "INE075A01022",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const hclTech = {
  symbol:   "HCLTECH",
  name:     "HCL Technologies Limited",
  exchange: "NSE",
  isin:     "INE860A01027",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const techMahindra = {
  symbol:   "TECHM",
  name:     "Tech Mahindra Limited",
  exchange: "NSE",
  isin:     "INE669C01036",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const ltiMindtree = {
  symbol:   "LTIM",
  name:     "LTIMindtree Limited",
  exchange: "NSE",
  isin:     "INE214T01019",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const persistent = {
  symbol:   "PERSISTENT",
  name:     "Persistent Systems Limited",
  exchange: "NSE",
  isin:     "INE262H01021",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const coforge = {
  symbol:   "COFORGE",
  name:     "Coforge Limited",
  exchange: "NSE",
  isin:     "INE591G01017",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const mphasis = {
  symbol:   "MPHASIS",
  name:     "Mphasis Limited",
  exchange: "NSE",
  isin:     "INE356A01018",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const oracleFinServ = {
  symbol:   "OFSS",
  name:     "Oracle Financial Services Software Limited",
  exchange: "NSE",
  isin:     "INE881D01027",
  gics:     "45103010",
  country:  "India",
  industry: "Application Software",
  sector:   "Information Technology"
};

const ltTechServices = {
  symbol:   "LTTS",
  name:     "L&T Technology Services Limited",
  exchange: "NSE",
  isin:     "INE010V01017",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const tataElxsi = {
  symbol:   "TATAELXSI",
  name:     "Tata Elxsi Limited",
  exchange: "NSE",
  isin:     "INE670A01012",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const kpitTech = {
  symbol:   "KPITTECH",
  name:     "KPIT Technologies Limited",
  exchange: "NSE",
  isin:     "INE04I401011",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const cyient = {
  symbol:   "CYIENT",
  name:     "Cyient Limited",
  exchange: "NSE",
  isin:     "INE136B01020",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const birlasoft = {
  symbol:   "BSOFT",
  name:     "Birlasoft Limited",
  exchange: "NSE",
  isin:     "INE836A01035",
  gics:     "45102010",
  country:  "India",
  industry: "IT Consulting & Other Services",
  sector:   "Information Technology"
};

const stocks = [
  infosys, tcs, wipro, hclTech, techMahindra,
  ltiMindtree, persistent, coforge, mphasis, oracleFinServ,
  ltTechServices, tataElxsi, kpitTech, cyient, birlasoft
];

for(const stock of stocks){
    await createStock(stock);
}