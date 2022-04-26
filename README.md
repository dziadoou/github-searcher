# Github Searcher

## Allegro Summer E-Xperience: zadanie rekrutacyjne nr 2 (Frontend Software Engineer)

Aplikacja pozwala na wyszukiwanie użytkowników serwisu GitHub i wyświetlanie ich publicznych repozytoriów. 

Wykorzystane technologie: React, Typescipt, React Query, React Testing Library, axios, Styled Components.

Inne moduły: react-error-boundary, react-pagiante, github-username-regex.

Wymogi do uruchomienia aplikacji: 
- Node >= 14.0.0 
- npm >= 5.6

Instrukcje do uruchomienia aplikacji:
- Sklonuj repozytorium.
- Wejdź w folder ze sklonowanym repozytorium.
- W konsoli wpisz: ```npm i``` lub ```npm install```
- następnie wpisz: ```npm start```
- aby włączyć testy, wpisz w konsoli: ```npm t``` lub ```npm test```

Aplikację można również zobaczyć [TUTAJ](https://dziadoou.github.io/).


GitHub API posiada swoje ograniczenia. Dla nieuwierzytelnionych użytkowników, limit wynosi 60 zapytań na godzinę (10 przy użyciu Search API). Aplikacja działa domyślnie dla właśnie takich użytkowników, jednak jeśli posiadasz konto na [GitHubie](https://github.com/), po zalogowaniu się możesz wejść w:

Settings -->  Developer Settings --> Personal access tokens --> Generate new token

i wygenerować token. Następnie, możesz utworzyć folder ```.env``` w root'cie aplikacji (folder zawierający ```package.json```) i utworzyć w nim zmienną
```REACT_APP_GITHUB_TOKEN = wygenerowany_token```. 

Robiąc to, zwiększysz limit zapytań do 5000 na sekundę (30 przy użyciu Search API).


### Uwagi do projektu

- Przy użytkownikach posiadających bardzo dużo repozytoriów (>1000) wprowadziłem ograniczenie wyświetlające tylko 1000 repozytoriów o największej liczbie gwiazdek (1000 jest limitem jaki nakłada na nas GitHub Search API)
- Po wykorzystaniu przez użytkownika x-rate-limit'u (limit zapytań na godzinę), w konsoli pokaże nam się błąd o kodzie 403, zostanie wyświetlona tylko karta użytkownika bez jego repozytoriów.
- Przy testowaniu w konsoli wyświetla się komunikat błędu o kodzie 404, wynika to z przeprowadzania jednego z testów.

### Future improvements
- poprawa obsługi błędów,
- dodanie resetu stanu aplikacji, np. poprzez kliknięcie tytułu,
- wykorzystanie React Router'a do nawigacji, aby aplikacja nie była wyłącznie na jednej ścieżce,
- rozdrobnienie komponentów, przerobienie ich w ten sposób, aby były jak najmniej zależne od siebie.
