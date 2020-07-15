import React, { useState, useEffect } from "react";

const InlineEdit = ({
    text,
    type,
    placeholder,
    children,
    childRef,
    ...props
}) => {
    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);

    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };

    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                    <div
                        className={`InlineEdit-${type}`}
                        onClick={() => setEditing(true)}
                    >
                        <span className={`${text ? "no-edit" : "edit"}`}>
                            {text || placeholder || "Editable content"}
                        </span>
                    </div>
                )}
        </section>
    );
};

export default InlineEdit;