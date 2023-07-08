import './App.css';

async function myFunction() {
  const userstring = await users.find();
  document.getElementById("myText").innerHTML = userstring;
}
function App() {
  return (
      <html>
      <body onLoad="myFunction()">
        <div>
          <h1>Hello World!\n</h1>
          <h2><span id="myText"></span></h2>
        </div>
      </body>
      </html>
  );
}

export default App;