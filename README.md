# React Native Starter Pack

### node -v 16.16.0

## Запуск

```shell script
yarn start
yarn run ios
yarn run android
```

## Иерархия директории app

```
📦app
 ┣━ 📂common - Директория для сущностей (константы, компоненты, типы и тд) используемые в более чем 1 месте
 ┃ ┣━ 📂components
 ┃ ┃ ┣━ 📂Spinner
 ┃ ┃ ┃ ┗━ 📜index.tsx
 ┃ ┃ ┗━ 📂WIPSComponent
 ┃ ┃ ┃ ┗━ 📜index.tsx
 ┃ ┣━ 📂constants
 ┃ ┃ ┗━ 📜mockData.ts
 ┃ ┗━ 📂types
 ┃ ┃ ┗━ 📜index.ts
 ┣━ 📂navigation - Директория для сущностей навигации (stack/bottom/top навигаторы) и их типов и сервисов
 ┃ ┣━ 📂constants
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┣━ 📂services
 ┃ ┃ ┗━ 📜StackNavigatorOptionsService.ts - Сервис для создания options для stack навигации
 ┃ ┣━ 📂types
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┗━ 📜RootStackNavigator.tsx
 ┣ 📂screens
 ┃ ┗ 📂exampleScreen
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜ExampleView.tsx
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂services
 ┃ ┗━ 📂example
 ┃ ┃ ┣━ 📜example.ts
 ┃ ┃ ┗━ 📜index.ts
 ┣━ 📂store
 ┃ ┣━ 📂example
 ┃ ┃ ┣━ 📜actions.ts
 ┃ ┃ ┣━ 📜selectors.ts
 ┃ ┃ ┣━ 📜slice.ts
 ┃ ┃ ┗━ 📜types.ts
 ┃ ┣━ 📂types
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┗━ 📜index.ts
 ┗━ 📂ui
 ┃ ┣━ 📂components
 ┃ ┃ ┣━ 📜Button.tsx
 ┃ ┃ ┣━ 📜Container.tsx
 ┃ ┃ ┣━ 📜Input.tsx
 ┃ ┃ ┗━ 📜Text.tsx
 ┃ ┣━ 📂constants
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┗━ 📂types
 ┃ ┃ ┗━ 📜index.ts

```

## Store

### Как работать со **стором**

> #### Структура директории **store**
>
> - Директория **_[feature]_**
>   > - actions.ts
>   > - selectors.ts
>   > - slice.ts
>   > - types.ts
> - Типы
>   > - index.ts
> - Enums
>   > - index.ts

## Navigation

#### В директории `navigation` лежат

📂navigation - Директория для сущностей навигации (stack/bottom/top навигаторы) и их типов и сервисов
┣━ 📂constants - Директория для переменных, используемых в навигации
┣━ 📂services - Директория для сервисов, обслуживающие навигаторы
┣━ 📂types - Директория для типов
┗━ 📜RootStackNavigator.tsx - Главный навигатор, который собирает другие навигаторы

#### Нейминг навигаторов

[**_Feature_**][stack/bottom/top][Navigator].ts

#### Example

> ##### RootStackNavigator.ts
>
> ##### AuthBottomNavigator.ts

`RootStackNavigator.ts` - является главным навигатором, в котором собираются другие навигаторы.

#### В директории `services` > `StackNavigatorOptionsService.ts` файл предназначен для получения `options` к _StackNavigator_

##### Сервис _stackNavigatorOptionsService_ предоставляем нам несколько методов для создания и получения options к навигатору. Сервис позволяет накапливать свойства (options) экрана при вызове его методов.

1. `.addTitle('')` - принимает строку, которая будет заголовком экрана;
2. `addHeaderColor('')` - принимает строку цвета, в который будет покрашен header экрана;
3. `addHeaderLeft(() => <View />)` - принимает _ReactNode_ иконки, которая отобразиться слева;
4. `addHeaderRight(() => <View />)` - принимает _ReactNode_ иконки, которая отобразиться справа;
5. `addHeaderShow(true)` - принимает boolean для отображения или не отображения header на экране. По дефолту true
6. `addHeaderCustom({})` - принимает {}: StackNavigationOptions. Сбрасывает предыдущие настройки header и применяет только те, которые были переданы. Нужен для создания кастомного header'а.
7. Чтобы получить {} options нужно вызвать `.options` в конце цепочки методов

### Старт работ c Redux

Перед началом работы с redux, запускаем скрипт **scripts/createToolkitDir.sh** командой
`sh scripts/createToolkitDir.sh`и указываем имя фичи.
В директории **store** создается папка с указанным именем.

**thunk'и** описываем в `action.ts` директории, а **actions** описываем в `slice.ts` и импортируем в `action.ts` и заново экспортируем. В дальнейшем импорт экшенов делаем именно из `action.ts` директории.

Логику запросов к **апи** из санки выносим в отдельный сервис **app/services/[feature]/[featureName].ts**. После этого подключаем его к классу сервису. **app/services/[feature]/index.ts**
