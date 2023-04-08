import React from 'react';
import Styles from '../Question/Question.module.css';

const Question = () => {
    return (
        <div className={Styles.mainContainer}>
            <div>
                <div className={Styles.question}>1. Difference  between props and state?</div>
                <div className={Styles.answer}> Ans:
                    <div> <strong>  Props:</strong> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render.  </div> </div>
                <div> <strong>State: </strong> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component. </div>
            </div>

            <div>
                <div className={Styles.question}>2. How useState works?</div>
                <div className={Styles.answer}>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument </div>
            </div>

            <div>
                <div className={Styles.question}>3. useState can do except load data?</div>
                <div className={Styles.answer}>Ans:
                    In React, useState can store any type of value, whereas the state in a class component is limited to being an object. This includes primitive data types like string, number, and Boolean, as well as complex data types such as array, object, and function. It can even cover custom data types like class instances.
                    Basically, anything that can be stored in a JavaScript variable can be stored in a state managed by useState. </div>
            </div>
            <div>
                <div className={Styles.question}>4. How  does react works?</div>
                <div className={Styles.answer}>Ans: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. </div>
            </div>

        </div>
    )
}

export default Question;