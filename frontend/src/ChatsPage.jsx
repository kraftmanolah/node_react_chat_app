import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='7d301594-271b-4d2a-8381-1b66f64cf602'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100'}}
      />
    </div>
  );
};

export default ChatsPage;