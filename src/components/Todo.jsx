import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const [user, setUser] = useState([]);
  const [editIndex,setEditIndex] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    if(editIndex !== null){
      const UpdateData = [...user];
      UpdateData[editIndex] = data;
      setUser(UpdateData);
      setEditIndex(null);
    }else{
        setUser([...user, data]);
      
    }
    setData({
        fName: "",
        lName: "",
        email: "",
      });
  };
  const handleRemove = (index) =>{
    const removeData = user.filter((item,idx) => idx !== index);
    setUser(removeData);
  }
  const handleEdit = (index) =>{
  setData(user[index]);
  setEditIndex(index);
  }
  return (
    <>
      <h1>Todo list</h1>
      <div className="text-center">
        <form action="" onSubmit={handleClick}>
          <label htmlFor="fName">FirstName</label>
          <br />
          <input
            name="fName"
            value={data.fName}
            onChange={handleChange}
            type="text"
            id="fName"
          />
          <br />
          <label htmlFor="lName">LastName</label>
          <br />
          <input
            name="lName"
            value={data.lName}
            onChange={handleChange}
            type="text"
            id="lName"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            type="text"
            id="email"
          />
          <br />
          <br />
          <button type="submit">{editIndex !== null ? "UPDATE" : "ADD"}</button>
        </form>
        <div className="" style={{marginTop:'50px'}}>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.fName}</td>
                    <td>{item.lName}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={()=>handleRemove(index)}>remove</button>
                    </td>
                    <td>
                      <button onClick={()=>handleEdit(index)}>Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todo;
