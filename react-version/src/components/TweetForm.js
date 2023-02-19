function TweetForm() {
  const textAreaMessage = "What are you humming about?";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" 
        onSubmit={(Event) =>{
          Event.preventDefault();
        }}
      >
        <textarea className="form__textarea" name="text" placeholder={textAreaMessage}></textarea>
        <input type="submit" value="Tweet" className="form__input" 
          onClick={(Event) => {
            Event.preventDefault();
          }} 
        />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;