import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";

const Dialogs = ({ dialogData, messages }) => {
  const dialogsElements = dialogData.map((d) => {
    return <DialogItem key={d.id} id={d.id} name={d.name} />;
  });

  const messagesElements = messages.map((m) => {
    return <Message key={m.id} text={m.message} />;
  });
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
