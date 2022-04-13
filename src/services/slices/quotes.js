import { createSlice } from '@reduxjs/toolkit';
import {
  getTickersRequest,
  getTimeframesRequest,
  getQuotesRequest,
  getMarketsRequest,
  getQuotesSyncConfigRequest,
  postQuotesSyncRequest,
  postTickersLoadQuotesRequest,
  postTickersProcessingFeaturesRequest,
  getFeaturesRequest,
  getFeatureCodesRequest
} from '../api/quotes';

const initialState = {
  markets: {
    isLoading: false,
    list: [],
    errors: {
      hasError: false,
      message: ''
    },
  },
  tickers: {
    isLoading: false,
    list: [],
    errors: {
      hasError: false,
      message: ''
    },
  },
  timeframes: {
    isLoading: false,
    list: [],
    errors: {
      hasError: false,
      message: ''
    },
  },
  quotes: {
    isLoading: false,
    list: [],
    syncConfig: {},
    errors: {
      hasError: false,
      message: ''
    },
  },
  features: {
    isLoading: false,
    list: [],
    featureCodes: [],
    errors: {
      hasError: false,
      message: ''
    },
  },
};

export const slice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    GET_MARKETS_REQUEST(state) {
      state.markets.isLoading = true;
      state.markets.errors = {
        hasError: false,
        message: ''
      };
    },
    GET_MARKETS_SUCCESS(state, action) {
      state.markets.isLoading = false;
      state.markets.list = action.payload;
    },
    GET_MARKETS_FAILED(state, action) {
      state.markets.isLoading = false;
      state.markets.list = [];
      state.markets.errors = {
        hasError: true,
        message: action.payload
      };
    },
    GET_TICKERS_REQUEST(state) {
      state.tickers.isLoading = true;
      state.tickers.errors = {
        hasError: false,
        message: ''
      };
    },
    GET_TICKERS_SUCCESS(state, action) {
      state.tickers.isLoading = false;
      state.tickers.list = action.payload;
    },
    GET_TICKERS_FAILED(state, action) {
      state.tickers.isLoading = false;
      state.tickers.list = [];
      state.tickers.errors = {
        hasError: true,
        message: action.payload
      };
    },
    GET_TIMEFRAMES_REQUEST(state) {
      state.timeframes.isLoading = true;
      state.timeframes.errors = {
        hasError: false,
        message: ''
      };
    },
    GET_TIMEFRAMES_SUCCESS(state, action) {
      state.timeframes.isLoading = false;
      state.timeframes.list = action.payload;
    },
    GET_TIMEFRAMES_FAILED(state, action) {
      state.timeframes.isLoading = false;
      state.timeframes.list = [];
      state.timeframes.errors = {
        hasError: true,
        message: action.payload
      };
    },
    GET_SYNC_CONFIG_SUCCESS(state, action) {
      state.quotes.syncConfig = action.payload;
    },
    SYNC_REQUEST() {
      console.log('SYNC_REQUEST');
    },
    SYNC_SUCCESS() {
      console.log('SYNC_SUCCESS');
    },
    SYNC_FAILED() {
      console.log('SYNC_FAILED');
    },
    LOAD_QUOTES_REQUEST() {
      console.log('LOAD_QUOTES_REQUEST');
    },
    LOAD_QUOTES_SUCCESS() {
      console.log('LOAD_QUOTES_REQUEST');
    },
    LOAD_QUOTES_FAILED() {
      console.log('LOAD_QUOTES_FAILED');
    },
    PROCESSING_FEATURES_REQUEST() {
      console.log('PROCESSING_FEATURES_REQUEST');
    },
    PROCESSING_FEATURES_SUCCESS() {
      console.log('PROCESSING_FEATURES_SUCCESS');
    },
    PROCESSING_FEATURES_FAILED() {
      console.log('PROCESSING_FEATURES_FAILED');
    },
    GET_QUOTES_REQUEST(state) {
      state.quotes.isLoading = true;
      state.quotes.errors = {
        hasError: false,
        message: ''
      };
    },
    GET_QUOTES_SUCCESS(state, action) {
      state.quotes.isLoading = false;
      state.quotes.list = action.payload;
    },
    GET_QUOTES_FAILED(state, action) {
      state.quotes.isLoading = false;
      state.quotes.list = [];
      state.quotes.errors = {
        hasError: true,
        message: action.payload
      };
    },
    GET_FEATURES_REQUEST(state) {
      state.features.isLoading = true;
      state.features.errors = {
        hasError: false,
        message: ''
      };
    },
    GET_FEATURES_SUCCESS(state, action) {
      state.features.isLoading = false;
      state.features.list = action.payload;
    },
    GET_FEATURES_FAILED(state, action) {
      state.features.isLoading = false;
      state.features.list = [];
      state.features.errors = {
        hasError: true,
        message: action.payload
      };
    },
    GET_FEATURE_CODES_SUCCESS(state, action) {
      state.features.featureCodes = action.payload;
    },
  }
});

export const { reducer } = slice;

export const getMarkets = () => async (dispatch) => {
  dispatch(slice.actions.GET_MARKETS_REQUEST());

  await getMarketsRequest().then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_MARKETS_SUCCESS(data));
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.GET_MARKETS_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getTickers = () => async (dispatch) => {
  dispatch(slice.actions.GET_TICKERS_REQUEST());

  await getTickersRequest().then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_TICKERS_SUCCESS(data));
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.GET_TICKERS_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getTimeframes = () => async (dispatch) => {
  dispatch(slice.actions.GET_TIMEFRAMES_REQUEST());

  await getTimeframesRequest().then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_TIMEFRAMES_SUCCESS(data));
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.GET_TIMEFRAMES_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getSyncConfig = () => async (dispatch) => {
  await getQuotesSyncConfigRequest().then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_SYNC_CONFIG_SUCCESS(data));
    }
  }).catch(
    (error) => {
      console.error(`API ERROR: ${error.message}`);
    }
  );
};

export const postSync = (postData) => async (dispatch) => {
  dispatch(slice.actions.SYNC_REQUEST());

  await postQuotesSyncRequest(postData).then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.SYNC_SUCCESS());
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.SYNC_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const postLoadQuotes = (tickerId) => async (dispatch) => {
  dispatch(slice.actions.LOAD_QUOTES_REQUEST());

  console.log('postLoadQuotes', tickerId);
  await postTickersLoadQuotesRequest(tickerId).then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.LOAD_QUOTES_SUCCESS());
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.LOAD_QUOTES_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const postProcessingFeatures = (tickerId) => async (dispatch) => {
  dispatch(slice.actions.PROCESSING_FEATURES_REQUEST());

  await postTickersProcessingFeaturesRequest(tickerId).then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.PROCESSING_FEATURES_SUCCESS());
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.PROCESSING_FEATURES_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getQuotes = (ticker, timeframe) => async (dispatch) => {
  dispatch(slice.actions.GET_QUOTES_REQUEST());

  await getQuotesRequest(ticker, timeframe).then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_QUOTES_SUCCESS(data));
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.GET_QUOTES_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getFeatures = (ticker, timeframe) => async (dispatch) => {
  dispatch(slice.actions.GET_FEATURES_REQUEST());

  await getFeaturesRequest(ticker, timeframe).then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_FEATURES_SUCCESS(data));
    }
  }).catch(
    (error) => {
      dispatch(slice.actions.GET_FEATURES_FAILED(`API Error: ${error.message}`));
    }
  );
};

export const getFeatureCodes = () => async (dispatch) => {
  await getFeatureCodesRequest().then((res) => {
    if (res && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error(`Request failed with status ${res.status}`));
  }).then((data) => {
    if (!data) {
      throw new Error(`No data in response: ${data}`);
    } else {
      dispatch(slice.actions.GET_FEATURE_CODES_SUCCESS(data));
    }
  }).catch(
    (error) => {
      console.error(`API ERROR: ${error.message}`);
    }
  );
};
