import MessageForm from './MessageForm'
import UserMessage from './UserMessage'
import SecondaryUserMessage from './SecondaryUserMessage'
const ChatFeed = (props) => {
const { chats, activeChat, userName, messages } = props; //destructering

const chat = chats && chats[activeChat];

console.log(chat, userName, messages)

//to get id's of specific messages
const renderMessages = () => {
    const keys = Object.keys(messages)
    console.log(keys);
    return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        //if any messages find last message
        const isUserMessage = userName === message.sender.username;
        return (
            <div key={`msg_${index}`} style={{ width: '100% '}}>
                <div className='message-block'>
                    {
                        isUserMessage ? 
                        <UserMessage message={message} />
                        : <SecondaryUserMessage message={message} lastMessage={messages[lastMessageKey]} />
                    }
                </div>
                <div className='read-receipts' style={{ marginRight: isUserMessage ? '18px' : '0px', marginLeft: isUserMessage ? '0px' : '68px'}}> </div>
                read-receipts
            </div>
        )
    })
} 
if(!chat) return 'Loading...';
return (
    <div className='chat-feed'> 
        <div className='chat-title-container'>
            <div className='chat-title'>{chat?.title}</div>
            <div className='chat-subtitle'>
            {chat.people.map((person) => `${person.person.username}`)}    
             </div>
        </div>
        {renderMessages()}
        <div style={{ height: '100px' }} />
        <div classname='message-form-container'>
            <MessageForm {...props} chatId={activeChat}/>
        </div>
    </div>
   );
}
export default ChatFeed;