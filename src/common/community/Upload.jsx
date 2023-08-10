import React from 'react';

const Upload = () => {
  const selectFile = (e) => {
    console.log(e, '나는 e');
    console.log(e.target, '나는 e.target');
    console.log(e.target.files, '나는 e.target.files');
  };

  return (
    <div>
      <>
        <input type="file" onChange={selectFile} />
      </>
    </div>
  );
};

export default Upload;
