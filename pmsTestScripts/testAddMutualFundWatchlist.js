import axios from 'axios';

const addMutualFund = async (mutualfund) =>{
    try{
        const res = await axios.post("http://localhost:8081/api/mutualfunds-watchlist/add-mutual-fund",mutualfund);
        console.log(res.data)
        return res.data
    }catch(e){
        return e.response;
    }
}

// ════════ INDEX FUNDS — assetId 5 ════════

const uti_nifty50_index = {
  isin:       "INF789F01XA0",
  schemeName: "UTI Nifty 50 Index Fund - Growth Option- Direct",
  assetId:    5
};

const hdfc_nifty50_index = {
  isin:       "INF179K01WM1",
  schemeName: "HDFC Nifty 50 Index Fund - Direct Plan",
  assetId:    5
};

const icici_nifty50_index = {
  isin:       "INF109K012M7",
  schemeName: "ICICI Prudential Nifty 50 Index Fund - Direct Plan Cumulative Option",
  assetId:    5
};

const sbi_nifty_index = {
  isin:       "INF200K01TE8",
  schemeName: "SBI NIFTY INDEX FUND - DIRECT PLAN - GROWTH",
  assetId:    5
};

const nippon_nifty50_index = {
  isin:       "INF204K01II4",
  schemeName: "NIPPON INDIA INDEX FUND - NIFTY 50 PLAN - ANNUAL - IDCW Option",
  assetId:    5
};

// ════════ BOND FUNDS — assetId 4 ════════

const hdfc_corporate_bond = {
  isin:       "INF179K01DC2",
  schemeName: "HDFC Corporate Bond Fund - Growth Option",
  assetId:    4
};

const absl_corporate_bond = {
  isin:       "INF209K01S38",
  schemeName: "Aditya Birla Sun Life Corporate Bond Fund - Growth - Direct Plan",
  assetId:    4
};

const icici_corporate_bond = {
  isin:       "INF109K016B1",
  schemeName: "ICICI Prudential Corporate Bond Fund - Direct Plan - Growth",
  assetId:    4
};

// ════════ BALANCED FUND — assetId 6 ════════

const hdfc_balanced_advantage = {
  isin:       "INF179K01830",
  schemeName: "HDFC Balanced Advantage Fund - Growth Plan",
  assetId:    6
};

// ════════ MONEY MARKET FUND — assetId 7 ════════

const absl_money_manager = {
  isin:       "INF209K01JY8",
  schemeName: "Aditya Birla Sun Life Money Manager Fund - RETAIL - WEEKLY IDCW",
  assetId:    7
};

// ════════ MASTER LIST (10 schemes) ════════

const mutualFunds = [
  uti_nifty50_index,
  hdfc_nifty50_index,
  icici_nifty50_index,
  sbi_nifty_index,
  nippon_nifty50_index,
  hdfc_corporate_bond,
  absl_corporate_bond,
  icici_corporate_bond,
  hdfc_balanced_advantage,
  absl_money_manager
];

for(const mutualfund of mutualFunds){
    await addMutualFund(mutualfund);
}