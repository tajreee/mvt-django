from django.shortcuts import render

# Create your views here.
def show_main(request):
    context = {
        'title_store': 'NgopY',
        'name' : 'Tajri Mintahtihal Anhaar',
        'class': 'PBP F'
    }

    return render(request, "main.html", context)