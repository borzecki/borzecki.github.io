import React, { useRef, useEffect, useState } from "react"

import Layout from "../../components/layout"
import RangeInput from "../../components/input/range"
import SEO from "../../components/seo"

import drawFractal from "../../utils/fractals"

// base width of tree
const baseWidth = 8

const FractalTrees = () => {
  const canvas = useRef()

  const [width, height] = [900, 670]
  // initial length
  const [length, setLength] = useState(120)
  // constant angle factor
  const [angle, setAngle] = useState(5)
  // number of recurrent steps
  const [segments, setSegments] = useState(14)
  // randomness factor
  const [jitter, setJitter] = useState(10)

  const redraw = () => {
    const ctx = canvas.current.getContext("2d")
    canvas.current.style.width = "100%"
    canvas.current.style.height = "100%"
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    drawFractal(
      ctx,
      true,
      width / 2,
      height - 70,
      length,
      segments,
      angle,
      jitter,
      baseWidth
    )
  }

  useEffect(redraw, [length, angle, jitter, segments])

  return (
    <Layout className="noselect">
      <SEO
        title="Fractal Trees"
        keywords={[
          `borzeckid`,
          `freelance`,
          `fractals`,
          `procedurally generated`,
          `react`,
          `redux`,
        ]}
      />
      <h1>Fractal Trees</h1>

      <canvas onClick={redraw} ref={canvas} width={width} height={height} />
      <br />

      <RangeInput
        label="length"
        min={40}
        max={120}
        step={10}
        value={length}
        onChange={setLength}
      />
      <RangeInput
        label="segments"
        min={1}
        max={15}
        step={1}
        value={segments}
        onChange={setSegments}
      />
      <RangeInput
        label="angle"
        min={5}
        max={50}
        step={1}
        value={angle}
        onChange={setAngle}
      />
      <RangeInput
        label="jitter"
        min={1}
        max={10}
        step={1}
        value={jitter}
        onChange={setJitter}
      />
    </Layout>
  )
}

export default FractalTrees
