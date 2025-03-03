import React, { useState, useEffect } from 'react';

export default function PostForm() {
  // PUSHING DATA TO LOCAL STORAGE
  const [formDatas, setFormDatas] = useState([]);

  // BLUEPRINT FOR POST INPUTS
  const [postValue, setPostValue] = useState({
    text: '',
  });

  //
  function handleInputChange(e) {
    const { name, value } = e.target;
    setPostValue((previous) => ({ ...previous, [name]: value }));
  }
  // DELETING
  function deleteItem(id) {
    const updatedFormDatas = formDatas.filter((formData) => formData.id !== id);
    setFormDatas(updatedFormDatas);
  }
  // PREVENTING PAGE RELOAD AND ETC...
  function submit(e) {
    // ASSIGNING UNIQUE ID
    const newPost = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...taskValue,
    };
    // VALIDATING INPUTS
    setFormDatas([...formDatas, newPost]);

    setPostValue({
      text: '',
    });
  }

  //   useEffect(() => {
  //     setItem('formDatas', formDatas);
  //   }, [formDatas]);

  return (
    <>
      <div className='flex bg-white w-[200px] h-[200px]'>

      </div>
    </>
  );
}
