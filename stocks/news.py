import requests

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Token 897c8abc9e8003dfb13c2dc01f3943cc792f885f'
}

def company_news(ticker):
    url = "https://api.tiingo.com/tiingo/news?tickers={}".format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()

