import React from 'react';

function Project(props) {
  return (
    <div>
        <div className="bg-blue-100 mb-5 rounded-tl-xl rounded-br-xl pb-3">
            <h1 className="ml-5 font-semibold text-lg pt-4">{ props.name }</h1>
            <p className="ml-5 mt-2 mb-2">{ props.desc }</p>
            <a className="ml-5 mt-2 pb-3 text-blue-500" target="_blank" href={ props.href }>{ props.href }</a>
        </div>
    </div>
  )
}

export default Project;