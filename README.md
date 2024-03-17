# Goods4You landing

## Core

- [X] Функциональные компоненты
- [X] TypeScript
- [X] Типизированные пропсы
- [X] Переиспользуемость
- [X] Scss + css.modules
- [ ] Шрифты
- [ ] Данные
- [X] Хуки
- [X] Запуск

## Additional

- [ ] PixelPerfect
- [X] Анимации
- [X] A11y
- [X] Семантика
- [ ] FSD
- [X] Адаптивность
- [ ] Оптимизация загрузки ресурсов

## Запуск CI процессов

Для того чтобы запустить соответствующий процесс нужно в коммите указать что конкретно вы хотите.

Есть 5 типов процессов.

1. `%test%` запустит проверки: **линтер**, **unit**, **интеграционные**.
2. `%build%` запустит сборку проекта.
3. `%pw_test%` запустит e2e тесты.
4. `%pw_update%` запустит обновление snapshots для e2e тестов. После обновления, если snapshots изменятся, произойдет
   **автоматический** коммит со всеми изменениями. Нужно будет сделать `git pull`.
5. `%tg_notify%` пришлет уведомление в мой тг после завершения всех процессов.

### Примеры:

```bash
git commit -m 'Add new FetchButton component | %test%pw_update%tg_notify%'
```

```bash
git commit -m 'Update FetchButton component | %test%pw_update%tg_notify%'
```

```bash
git commit --allow-empty -m 'Init tests | %test%build%pw_test%tg_notify%'
```

```bash
# Никаких процессов не запустится
git commit -m 'Add label for Input'
```

## Commands

```bash
# Запустить проект
npm run dev
```

```bash
# Сбилдить проект
npm run build
```

```bash
# Запустить проект в режиме preview (prodaction)
npm run preview
```

```bash
# Запустить проверку lint-ером
npm run lint
```

```bash
# Запустить проверку unit + интеграционных тестов
npm run test
```

```bash
# Установить playwright с необходимыми для e2e тестов зависимостями
npm run pw:install
```

```bash
# Запустить playwright e2e тесты
npm run test:pw
```

```bash
# Обновить snapshots внутри проекта
npm run test:pw-update
```

## Оно-тебя-сожрет-commands

```bash
# Запустить docker и создать image текущей версии проекта
npm run test:pw-docker:build
```

```bash
# Запустить e2e тесты внутри docker контейнера
npm run test:pw-docker
```

```bash
# Обновить snapshots внутри docker-a
npm run test:pw-docker:update
```

```bash
# Перенести snapshots из docker-а внутрь текущего проекта
# (необходимо в команде указать id контейнера)
npm run test:pw-copy
```

```bash
# Запустить e2e тесты внутри docker контейнера
npm run test:pw-docker
```

```bash
# Запустить e2e тесты с настройками под linux
# (Используется внутри docker-а)
npm run test:pw-linux
```

```bash
# Обновить snapshots внутри проекта с настройками под linux
# (Используется внутри docker-а)
npm run test:pw-update-linux
```

## Notice

### Kaif

- Общие стили через :root для некоторых элементов
- %command% для job-ов

### Bad

- Чистый FSD не кайф. Слишком много времени тратится на принятие решения о том что где должно быть и почему.
    - Лучше делать как делал + fsd
- **TODO** TTD - не понятно как быстро писать тесты на компоненты которых еще нет. Стили. итд.
- composeClassName - прикольно, но как будто лишнее