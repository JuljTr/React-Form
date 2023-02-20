import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:""
  })

  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    setFormData(
      {...formData, 
        [name]:value
      })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    setFormData({firstName: "",lastName: "",email:""
    })
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type="text"
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type="text"
            placeholder='Last Name'
            name='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <label htmlFor='email'>Email Account</label>
          <input
            type="email"
            placeholder='Email' 
            name='email'
            onChange={handleChange}
            value={formData.email}
            />
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
