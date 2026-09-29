Name of my project : A small React app where developers can browse the popular technologies and pick their best development stack.

Little Description about my project: Dev Stack shows 12 technologies from Frontend, Backend, Database, Language, Styling and DevOps. You can add any technology to "Your Stack", remove one item, or clear the whole stack. A toast message tells us  what happened.


Technology Used :
- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON (technology data)


3 features about my project :

1) Technology cards:All technologies load from a JSON file and are shown as cards with icon, badge, category, difficulty and rating.
2) Your Stack panel:Add a technology to the stack, and the same one cannot be added twice. The card button changes to "Added".
3) Remove options and alerts: Remove a single item or use "Remove All". A toast message appears when you add a technology.


## React Questions :

1.JSX lets us write HTML inside JavaScript. We use it because it is easy to read and easy to write.

2.Props are data that a parent sends to a child. A child cannot change them. State is data inside a component that can change, and when it changes, the screen updates.

3.useState saves a value that can change. I used it in App.tsx to save the list of selected technologies (selectedStack).

4.useEffect runs some code after the page shows, and people often use it to fetch data. I did not use it in this project. I used React's use hook with Suspense to load the JSON data. 

5.The key helps React know which item is which. So when the list changes, React updates only the changed item.

6.Conditional rendering means showing something only when a condition is true. In Stack.tsx, when no technology is selected, it shows "Your Stack is Empty".

7.A parent sends data to a child with props. A child sends data back by calling a function that the parent passed. App passes addStack to 'Cards', and 'Cards' calls it on click.







