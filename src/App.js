import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import OrderSetter from './Components/orderSetter/orderSetter.js'
import Container from 'react-bootstrap/Container'

const data = [
  {     
      "type": "pdf",     
      "name": "Employee Handbook",     
      "added": "2017-01-06",
      "size" : 48
  },
  {     
      "type": "pdf",     
      "name": "Public Holiday policy",     
      "added": "2016-12-06",
      "size" : 872
  },
  {     
      "type": "folder",     
      "name": "Expenses",     
      "files": 
      [
          {         
              "type": "doc",         
              "name": "Expenses claim form",
              "added": "2017-05-02",
              "size" : 89
          },
          {         
              "type": "doc",
              "name": "Fuel allowances",
              "added": "2017-05-03",
              "size" : 888
          }
      ],
      "size" : 459
  },
  {     
      "type": "csv",
      "name": "Cost centres",     
      "added": "2016-08-12",
      "size" : 873
  },
  {     
      "type": "folder",     
      "name": "Misc",     
      "files": 
      [
          {         
              "type": "doc",         
              "name": "Christmas party",         
              "added": "2017-12-01",
              "size" : 54
          },
          {         
              "type": "mov",         
              "name": "Welcome to the company!",         
              "added": "2018-04-24",
              "size" : 34
          }
      ],
      "size" : 45
  }
]

function App() {
  return (
        <div className="App">
            <Container className="vh-100 bg-secondary d-flex align-items-center justify-content-center" >
                <OrderSetter unsortedData={data}/>
            </Container>
        </div>
  );
}

export default App;
