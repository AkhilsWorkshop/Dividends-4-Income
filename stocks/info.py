import requests

headers = {
    'x-rapidapi-host': "yh-finance.p.rapidapi.com",
    'x-rapidapi-key': "940dcf091fmsh54503cb692d31e0p16b3e2jsnb6f10c1fb3f4"
}

def company_info(ticker):
    url = "https://yh-finance.p.rapidapi.com/stock/v2/get-profile"
    querystring = {"symbol":ticker}
    response = requests.get(url, headers=headers, params=querystring)
    return response.json()

