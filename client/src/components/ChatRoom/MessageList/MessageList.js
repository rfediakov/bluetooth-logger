import { useRef, useEffect } from 'react'
// стили
import { ListGroup } from 'react-bootstrap'
// компонент
import { MessageListItem } from './MessageListItem'

// пример встроенных стилей (inline styles)
const listStyles = {
    height: '80vh',
    border: '1px solid rgba(0,0,0,.4)',
    borderRadius: '4px',
    overflow: 'auto'
}

// функция принимает массив сообщений и функцию для удаления сообщений
// функция для удаления сообщений в виде пропа передается компоненту "MessageListItem"
export const MessageList = ({ messages, removeMessage }) => {
    // данный "якорь" нужен для выполнения прокрутки при добавлении в список нового сообщения
    const messagesEndRef = useRef(null)

    // плавная прокрутка, выполняемая при изменении массива сообщений
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])

    return (
        <>
            <ListGroup variant='flush' style={listStyles}>
                {messages.map((msg) => (
                    <MessageListItem
                        key={msg.messageId}
                        msg={msg}
                        removeMessage={removeMessage}
                    />
                ))}
                <span ref={messagesEndRef}></span>
            </ListGroup>
        </>
    )
}

Компонент «App» — главный компонент приложения.В нем определяются маршруты и производится сборка интерфейса.

    src / App.js:

// средства маршрутизации
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// стили
import { Container } from 'react-bootstrap'
// компоненты
import { Home, ChatRoom } from 'components'

// маршруты
const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/:roomId', name: 'ChatRoom', Component: ChatRoom }
]

export const App = () => (
    <Router>
        <Container style={{ maxWidth: '512px' }}>
            <h1 className='mt-2 text-center'>React Chat App</h1>
            <Switch>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} exact>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </Container>
    </Router>
)