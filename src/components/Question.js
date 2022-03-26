import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>How React woork?</h3>
            
            <h2>React is a component base library. the component is main think of react. components are similar in looks, different is data. componemts are connecting parent and child relationship. parent data passing data to child by props. every component connect in a root component. so that call single page application.</h2>
            <hr />
            <h3>props vs state</h3>
            <h2>props: props data never change. props can passing data or properties or function from parent to child componemt.</h2>
            <h2>state: state can change data. state can set and update data. state inside usestate hook</h2>
            <hr />
            <h3>how usestate works?</h3>
            <h2> usestate is a hook .inside usestate has one property and one function.function can set or update the property value. </h2>
        </div>
    );
};

export default Question;