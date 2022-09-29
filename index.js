const Notification = (props) => {
  const { imageUrl, text, textContent, className } = props;

  return (
    <div className={`card-container ${className}`}>
      <img src={imgUrl} alt={text} className="img" />
      <p className="para"> {textContent}</p>);
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Notifications</h1>
    <div>
      <Notification
        text="Information"
        textContent="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="bg-color1"
      />
      <Notification
        text="Success"
        textContent="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="bg-color2"
      />
      <Notification
        text="Warning"
        textContent="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="bg-color3"
      />
      <Notification
        text="Error"
        textContent="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="bg-color4"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

{
  /* <img
  src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
  alt="information"
  className="img"
/>; */
}

// const Button = props => {
//   const {className, buttonText} = props

//   return <button className={`button ${className}`}>{buttonText}</button>
// }

// const element = (
//   <div className="social-buttons-container">
//     <div className="content-container">
//       <h1 className="heading">Social Buttons</h1>
//       <div className="buttons-container">
//         <Button buttonText="Like" className="like-button" />
//         <Button buttonText="Comment" className="comment-button" />
//         <Button buttonText="Share" className="share-button" />
//       </div>
//     </div>
//   </div>
// )

// ReactDOM.render(element, document.getElementById('root'))
