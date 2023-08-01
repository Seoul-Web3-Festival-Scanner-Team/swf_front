import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export function TabProvider({ children }) {
    const [position, setPosition] = useState(0);
    const [maxPosition, setMaxPosition] = useState(0);

    const backHandler = ({ backAction }) => {
        if (position > 0) {
            setPosition(position - 1);
        } else {
            console.log("backHandler");
            backAction();
        }
    };

    const forwardHandler = ({ forwardAction }) => {
        console.log("forwardHandler");
        if (position < maxPosition) {
            setPosition(position + 1);
        }
        forwardAction();
    };

    return (
        <TabContext.Provider
            value={{
                position,
                setPosition,
                maxPosition,
                setMaxPosition,
                backHandler,
                forwardHandler,
            }}>
            {children}
        </TabContext.Provider>
    );
}

export function useTabLayout() {
    const {
        position,
        setPosition,
        maxPosition,
        setMaxPosition,
        backHandler,
        forwardHandler,
    } = useContext(TabContext);
    return {
        position,
        setPosition,
        maxPosition,
        setMaxPosition: (maxPosition) => {
            setMaxPosition(maxPosition);
        },
        backHandler: ({ backAction = () => {} }) => {
            backHandler({ backAction });
        },
        forwardHandler: ({ forwardAction = () => {} }) => {
            forwardHandler({ forwardAction });
        },
    };
}