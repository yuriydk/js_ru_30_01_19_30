const dict = {
    ru:{
    'articles': 'статьи',
    'article': 'статья',
    'Select Article': 'Выбери статью',
    'Loading': 'Загрузка',
    'show comments': 'показать комментарии',
    'hide comments': 'скрыть комментарии',
    'Delete me': 'Удали меня',
    'Comments pagination': 'Комментарии постранично',
    'Username':'Имя пользователя',
    'No comments yet':'Еще нет комментариев',
    'comment':'комментарий',
    'comments':'комментарии',
    'user':'пользователь',
    'filters': 'фильтры',
    'counter': 'счетчик',
    'Increment': 'Увеличить'
    }
}

export default ln => term => {
    return (dict[ln] || {})[term] || term
}
