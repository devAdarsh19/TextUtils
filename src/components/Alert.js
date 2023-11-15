import React from 'react'

function Alert(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  if (!props.alert) {
    return null;
  }

  return (
    props.alert && <>
      <div className={`container alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    </>     
  )
}

export default Alert
