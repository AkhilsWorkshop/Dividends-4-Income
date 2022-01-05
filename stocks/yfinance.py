import requests
from requests.models import Response
import yfinance as yf
import pandas as pd


headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Token 897c8abc9e8003dfb13c2dc01f3943cc792f885f'
}

def get_meta_data(ticker):
    url = "https://api.tiingo.com/tiingo/daily/{}".format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()

def get_meta_data4(ticker):
    url = "https://yh-finance.p.rapidapi.com/stock/v2/get-summary"
    querystring = {"symbol":"AAPL","region":"US"}
    headers = {
        'x-rapidapi-host': "yh-finance.p.rapidapi.com",
        'x-rapidapi-key': "940dcf091fmsh54503cb692d31e0p16b3e2jsnb6f10c1fb3f4"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.json()


def get_meta_data2(ticker):
    url = "{}".format(ticker)
    company = yf.Ticker(url)
    response = company.dividends
    pd.set_option('display.max_rows', None)
    data = pd.DataFrame(response)
    df = data.sort_values(['Date'], ascending=[False])
    df.reset_index(inplace=True)
    df.index = df.index + 1
    df['Dividends'] ='$' + df['Dividends'].astype(str)
    html = df.to_html(classes="dataframe", header=False) 
    return html

def get_meta_data3(ticker):
    url = "{}".format(ticker)
    company = yf.Ticker(url)
    response = company.info
    return response

    
