import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import {Simulate} from "react-dom/test-utils";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (value: string)=> void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    // debugger
    if (name.trim().length === 0) {
        pureOnBlur(name.trim(), setError)
        console.log('Отработал pureAddUser: ошибка на пустое поле')
    } else {
        addUserCallback(name)
        setName('')
        setError('')
        console.log('Отработал pureAddUser: added new User')
    }
}

export const pureOnBlur = (name: string, setError: (value: string) => void) => { // если имя пустое - показать ошибку
    // debugger
    if (name.length === 0) {
        setError('Ошибка! Введите имя!')
    } else {
        console.log('отработал pureOnBlur, ошибки в имени нет')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
        console.log('Отработал PureOnEnter, нажат ENTER')
    } else {
        console.log('Не ENTER')
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const name = setName(e.currentTarget.value) // need to fix
        error && setError('')

        console.log(name)
    }
    const addUser = () => {
        // debugger
        pureAddUser(name, setError, setName, addUserCallback)
        console.log('Отработал addUser')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
        console.log('Отработал OnBlur')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix   OK
    const lastUserName = users.map(el => el.name) // need to fix   IS NOT OK!

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
