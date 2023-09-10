from django.shortcuts import render

# Create your views here.
def show_main(request):
    context = {
        'title_store': 'ngothon',
        'class': 'PBP A'
    }

    return render(request, "main.html", context)