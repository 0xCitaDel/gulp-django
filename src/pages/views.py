from django.shortcuts import render, get_object_or_404
from django.http import Http404

# Это наш каталог услуг
MAIN = {
    '/': {
        'title': 'Клининговая компания в Сочи — уборка квартир, домов, офисов 24/7 | Генеральная, после ремонта, дезинфекция',
        'description': 'Клининг в Сочи для тех, кто ценит порядок и комфорт. Надёжно, точно в срок, без лишних слов и скрытых платежей. Убираем аккуратно — как для себя.',
        'keywords': '',

    }
}
SERVICES = {
    'uborka-kvartir': {
        'title': 'Уборка квартрир',
        'name': '',
        'price': 3000,
        'description': 'Полная уборка квартиры от пола до потолка. Прямо как мама просила.'
    },
    'uborka-ofisov': {
        'title': 'Уборка офисов',
        'name': 'Мытьё окон',
        'price': 1000,
        'description': 'Окна будут такие прозрачные, что соседи начнут здороваться через стекло.'
    },
}

def index(request):
    return render(request, 'pages/index.html', MAIN['/'])

def service_detail(request, slug):
    service = SERVICES.get(slug)
    if not service:
        raise Http404("Услуга не найдена. Возможно, она убежала от уборки.")

    return render(request, f'pages/services/{slug}.html', service)
