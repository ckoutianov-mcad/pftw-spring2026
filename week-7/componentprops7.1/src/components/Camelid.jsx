
function Camelid({ name, trivia, imagePath }) {
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <p>{trivia}</p>
      <img src={imagePath} />
      </div>
      
  );
}
export default Camelid;
