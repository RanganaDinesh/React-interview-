import React from 'react'

const Day1 = () => {
  return (
      <div>
          <h1 style={{textAlign:'center'}}>REACT  INTERVIEW QUESTIONS DAY 1</h1>
        <div style={{width:'950px', marginLeft:'100px'}}>  <h3>1.What is Virtual DOM</h3>
          <p>Virtual DOM is a lightweight JavaScript object which is an in-memory repsentation of real DOM.
              It is an intermediary step between the render function being called and the displaying of elements on the screen.
              DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets
              created whenever any React application gets loaded on the screen for the first time. Whenever React components
              get mounted on the screen for the first time. Now when any user makes any changes on the screen like button click
              because of which the state variable will get updated so in this case the changes will not directly go to Real DOM ,
              instead in react we have a concept known as Virtual DOM.</p>
          <h3>2.What is SPA</h3>
          <p> Single Page Applications (SPA) are a great way to create a fantastic user experience on mobile devices.
              They consist of a single web page that loads all content using JavaScript. They request the markup and data independently
              and render pages straight to the browser.</p>
          <h3>3.What is difference between class and functional component</h3>
          <p>
              <h3>Class Component</h3>
              1. Syntax <br />

                2. in Class based compo, we are using render method for render the JSX. <br />

                3. we need to extends Component (Parent of Class) from

                react lib. <br />

              4. if we want to access the props in class based compo, we need to use Constructor method and super keyword. <br />
              5. we need to add this keyword as well to accept the 

              props. <br />
              6. Class based component - React Introduce React life <br />
              <h3>functional Component</h3>
                1. Easy syntax <br />

                2. we can pass props as parameter in function based compo <br />

                3. we have Hooks Concept in Func based compo to access all feature of react life cycle. <br />

                4. little bit faster then class based comp. <br />
          </p>
          <h3>4.What does mean by state and its use in react?</h3>
          <p>The state is a built-in React object that is used to contain data or information about the component.
              A component's state can change over time; whenever it changes, the component re-renders.</p>
        <h3>5.What is JSX and why do we use it instead of js?</h3>
        <p>Overall, JSX is a powerful tool for building user interface components in React applications. Its readability, maintainability, and integration capabilities make it a popular choice for developers who want to build high-quality, scalable applications.</p>
          <p>
              -JSX stands for JavaScript XML. <br />
              -JSX allows us to write HTML in React. <br />
              -JSX makes it easier to write and add HTML in React.</p>
          <h3>6.What is package.json</h3>
          <p>
              The package. json file is the heart of any Node project. It records important metadata about a project
              which is required before publishing to NPM, and also defines functional attributes of a project that npm
              uses to install dependencies, run scripts, and identify the entry point to our package.
          </p>
      </div>
    </div>
  )
}

export default Day1
