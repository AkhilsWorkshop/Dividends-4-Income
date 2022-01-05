from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from pandas.core.frame import DataFrame
from .forms import TickerForm
from .yfinance import get_meta_data, get_meta_data2, get_meta_data3, get_meta_data4

def index(request):
    if request.method == 'POST':
        form = TickerForm(request.POST)
        if form.is_valid():
            ticker = request.POST['ticker']
            return HttpResponseRedirect(ticker)
    else:
        form = TickerForm()
    return render(request, 'index.html', {'form': form})

def ticker(request, tid):
    context = {}
    context['ticker'] = tid
    context['meta'] = get_meta_data(tid)
    context['price'] = get_meta_data2(tid)
    #context['info'] = get_meta_data3(tid)
    context['yapi'] = get_meta_data4(tid)
    return render(request, 'ticker.html', context)

def ticker2(request, tid):
    context = {}
    context['ticker'] = tid
    context['price'] = get_meta_data2(tid)
    return render(request, 'ticker.html', context)
  

