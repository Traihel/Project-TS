import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff2} from './components/OnOff/OnOff2';
import {Rating} from "./components/Rating/Rating";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import {ItemType, Select} from "./components/Select/Select";
import { v1 } from 'uuid';

function App() {
    const item: ItemType[] = [
        {id: v1(), title: 'Vova'},
        {id: v1(), title: 'Alex'},
        {id: v1(), title: 'Dima'},
        {id: v1(), title: 'Anna'},
    ]

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('Name')

    const onClickCollapsedHandler = () => setCollapsed(!collapsed)

    const onClickItemHandler = (title: string) => {
        setTitle(title)
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <Rating/>
            <Rating/>
            <Rating/>
            <OnOff2/>
            <OnOff2/>
            <Select
                value={title}
                items={item}
                collapsed={collapsed}
                onClickCollapsed={onClickCollapsedHandler}
                onClickItem={onClickItemHandler}
            />
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
};

export default App;