import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Image from "./docs.png";

function App() {
  return (
    <><div style={{height: "50px", display:"flex"}}>    
    <img src={Image} style={{height:"37px", width:"30px",marginTop:"6px" , alignContent:"center"}} alt="docs"/>
    <a href="/" style={{textDecoration:"none" ,color:"blue"}}><h1>Docs</h1></a>
    </div>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App