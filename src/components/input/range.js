import React from "react"
import "./style.css"

const RangeInput = ({ label, min, max, step, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseInt(e.target.value))}
      />
    </>
  )
}

export default RangeInput
