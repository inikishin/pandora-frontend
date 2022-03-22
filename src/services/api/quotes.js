import instance from './apiInstance';

export const getMarketsRequest = async () => instance.get('quotes/markets/');
export const getTickersRequest = async () => instance.get('quotes/tickers/');
export const getTimeframesRequest = async () => instance.get('quotes/timeframes/');
export const getQuotesRequest = async (ticker, timeframe) => instance.get(`quotes/quotes/?ticker=${ticker}&timeframe=${timeframe}`);

export const postTickersLoadQuotesRequest = async (tickerId) => instance.post(`quotes/tickers/${tickerId}/load-quotes/`);
export const postTickersProcessingFeaturesRequest = async (tickerId) => instance.post(`quotes/tickers/${tickerId}/processing-features/`);
export const getQuotesSyncConfigRequest = async () => instance.get('quotes/quotes/sync-config/');
export const postQuotesSyncRequest = async (data) => instance.post('quotes/quotes/sync/', data);

export const getFeaturesRequest = async (ticker, timeframe) => instance.get(`daily-analysis/features/?ticker=${ticker}&timeframe=${timeframe}`);
export const getFeatureCodesRequest = async () => instance.get('daily-analysis/features/get-feature-codes/');
