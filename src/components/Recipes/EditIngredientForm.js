import React, { useState, useEffect } from 'react';

function EditIngredientForm(props) {
    const [inputList, setInputList] = useState(props.ingredients);

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
        <div className="edit-ingredient-form">
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
                        <div className="addIngredient">
                            {inputList.length !== 1 && <button
                                onClick={() => handleRemoveClick(i)}>-</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>+</button>}
                        </div>
                    </div>
                )

            })}

        </div>
    )
}

export default EditIngredientForm