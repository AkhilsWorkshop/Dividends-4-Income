import requests

headers = {
    'x-rapidapi-host': "twelve-data1.p.rapidapi.com",
    'x-rapidapi-key': "940dcf091fmsh54503cb692d31e0p16b3e2jsnb6f10c1fb3f4"
}

def twelve_data_profile(ticker):
    url = "https://twelve-data1.p.rapidapi.com/profile"
    querystring = {"symbol":ticker}
    response = requests.get(url, headers=headers, params=querystring)
    return response.json()

