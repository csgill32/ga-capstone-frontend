import React, { useState, useEffect } from 'react';

function NewIngredientForm(props) {
    const [inputList, setInputList] = useState([{ name: "", quantity: "", measurement: "" }]);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    useEffect(function () {
        props.updateIngredients(inputList);
    }, [inputList])

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { name: "", quantity: "", measurement: "" }]);
    };


    return (
        <div className="new-ingredient-form">
            {inputList.map((ingredients, i) => {
                return (
                    <div className="ingredient-input">
                        <p>
                            <input type="text"
                                name='name'
                                placeholder='ingredient name'
                                value={ingredients.name}
                                onChange={event => handleInputChange(event, i)}
                            />
                        </p>
                        <p>
                            <input type="text"
                                name='quantity'
                                placeholder='quantity'
                                value={ingredients.quantity}
                                onChange={event => handleInputChange(event, i)}
                            />
                        </p>
                        <p>
                            <input type="text"
                                name='measurement'
                                placeholder='measurement'
                                value={ingredients.measurement}
                                onChange={event => handleInputChange(event, i)}
                            />
                        </p>
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="addIngredient"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add Ingredient</button>}
                        </div>
                    </div>
                )

            })}

        </div>
    )
}

export default NewIngredientForm