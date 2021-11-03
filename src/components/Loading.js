import React from 'react';
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="container">
      <Loader className="text-center"
        type="Circles"
        color="#0d6efd"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    </div>

  )
}

export default Loading
