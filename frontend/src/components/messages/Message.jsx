function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! what is upp?
      </div>
      <div className={`chat-footer text-xs opacity-50 flex gap-1`}>12:42</div>
    </div>
  );
}

export default Message;
