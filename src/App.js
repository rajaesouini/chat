import { ChatEngine } from "react-chat-engine";
import './App.css'
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="4a2b7b7d-1296-427d-9c58-6ec7325e2cd5"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />  }
        />
    )
}

export default App;