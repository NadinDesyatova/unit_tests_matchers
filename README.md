# Домашнее задание к лекции «Unit-тестирование»

## Matchers

[![Build status](https://ci.appveyor.com/api/projects/status/t1dhdvroid9uyih9?svg=true)](https://ci.appveyor.com/project/NadinDesyatova/unit-tests-matchers)


### Описание

Реализована функция, с помощью которой будет отображаться уровень жизни, оставшийся у каждого героя в отсортированном порядке (наверху - самые здоровые). 

Дан массив с информацией о героях, например:
```javascript
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть следующим образом:
```javascript
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```
---