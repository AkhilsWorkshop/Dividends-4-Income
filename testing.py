# import requests


# url = "https://yh-finance.p.rapidapi.com/stock/v2/get-profile"
# querystring = {"symbol":"AAPL","region":"US"}
# headers = {
#     'x-rapidapi-host': "yh-finance.p.rapidapi.com",
#     'x-rapidapi-key': "940dcf091fmsh54503cb692d31e0p16b3e2jsnb6f10c1fb3f4"
#     }
# response = requests.request("GET", url, headers=headers, params=querystring)
# print(response.text)

import pyEX as p
import pandas as pd
c = p.Client(api_token='Tsk_428174f9ed1d476da5b43c7ed363de33', version='stable')


sym='AAPL'
ab = c.companyDF(symbol=sym)
pd.set_option('display.max_columns', None)
data = pd.DataFrame(ab)
#df = data.sort_values(['Date'], ascending=[False])
#df.reset_index(inplace=True)
#df.index = df.index + 1
#df['Dividends'] ='$' + df['Dividends'].astype(str)
html = data.to_json()
print(html)


# sym='AAPL'
# timeframe='5y'
# df = c.dividendsDF(symbol=sym)
# print(df)




