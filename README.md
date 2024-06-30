# Capital gains tax calculator
![React](public/react.svg) ![Vite](public/vitejs.svg) [NordTheme](https://www.nordtheme.com/)

*Deprecated in favor of my new All in one [Charitable Trust Calculator](https://github.com/MooseCapital/Charitable-Remainder-Trust)*
![preview](./src/assets/cgainspreview.webp)


This is my first project fully on my own since learning React.

I am taking [Bob Ziroll's React Beginner course](https://scrimba.com/learn/learnreact). 

## Features
- calculate tax on every input
- input custom state tax rate
- pick short or long capital gains
- Localstorage will store tax calculations

## Lessons Learned

In the course, I learned how to pick a specific square out of all squares, and switch its background color. Which is just setting the new state with a different property and
without mutating, since we use the spread operator.
To do this, we mapped over squares data and set an id for each square, then passed in a toggle function with that specific squares id.
```
toggle={() => toggle(square.id)}
```
when clicking a square, we run the toggle function and check each square against the current square clicked.
```
function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
```
If id's match, you get all our squares back the same except the one clicked, which now has its "on" property toggled true/false which sets its style background color.

When remembering this lesson, I had to use the same thing since I want to delete a taxDiv in the list of many taxDivs. 
Unlike the squares that simply changed a property with mapping and kept all the items. I had to learn to filter my array down and reduce the number of taxDivs if the id's match onClick

deleteTaxDiv(id) is my onClick equivalent of toggle() above.
```
function deleteTaxDiv(id) {
        setTaxDivs(prevDivs => {
            return prevDivs.filter(div => div.id !== id)
        })}
```
