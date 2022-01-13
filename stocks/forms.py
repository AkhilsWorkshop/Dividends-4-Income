from django import forms

class TickerForm(forms.Form):
    ticker = forms.CharField(label='', max_length=8)