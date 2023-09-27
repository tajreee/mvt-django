from django.forms import ModelForm
from django import forms
from main.models import Item

class ItemForm(ModelForm):
    class Meta:
        model = Item
        fields = ["name", "grade", "category", "amount", "description"]
    
class DeleteItemForm(forms.Form):
    item_name = forms.CharField(max_length=255)