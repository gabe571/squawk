import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID='7d0c60bc-9fb5-4e8d-80d1-e3331b0ebe05'
            userName='gabe571'
            userSecret='1234'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;