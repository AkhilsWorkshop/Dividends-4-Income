from requests.models import Response
import yfinance as yf
import pandas as pd


def company_dividend(ticker):
    ticker_name = "{}".format(ticker)
    yf_fn = yf.Ticker(ticker_name)
    yf_data = yf_fn.dividends
    #pd.set_option('display.max_rows', None)
    pd_data = pd.DataFrame(yf_data)
    df = pd_data.sort_values(['Date'], ascending=[False])
    df.reset_index(inplace=True)
    df.index = df.index + 1
    df['Change'] = df['Dividends'].pct_change(-1)
    df['Dividends'] ='$' + df['Dividends'].astype(str)
    df['Change'] = 100 * df['Change']
    df['Change'] = df['Change'].round(2)
    df['Change'] =df['Change'].astype(str) + '%'
    df["Change"].replace({"0.0%": "", "nan%": ""}, inplace=True)
    df.rename(columns={'Date': 'Ex Dividend Date', 'Dividends': 'Cash Amount', 'Change': '% Change'}, inplace=True)
    html = df.to_html(classes = 'display" id = "example')
    return html