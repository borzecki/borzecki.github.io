import React, { useRef, useEffect, useState, useLayoutEffect } from "react"
import Layout from "../../components/layout"
import RangeInput from "../../components/input/range"

const lengthReduction = 0.8
const widthReduction = 0.8

const draw = (
  ctx,
  first,
  startX,
  startY,
  len,
  segments,
  angle,
  jitter,
  branchWidth
) => {
  ctx.beginPath()
  ctx.save()

  ctx.translate(startX, startY)
  ctx.rotate(
    first ? 0 : (angle * Math.ceil(Math.random() * jitter) * Math.PI) / 180
  )
  ctx.lineWidth = branchWidth
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -len)
  ctx.stroke()

  if (segments === 0) {
    ctx.restore()
    return
  }

  draw(
    ctx,
    false,
    0,
    -len,
    len * lengthReduction,
    segments - 1,
    -angle,
    jitter,
    branchWidth * widthReduction
  )
  draw(
    ctx,
    false,
    0,
    -len,
    len * lengthReduction,
    segments - 1,
    angle,
    jitter,
    branchWidth * widthReduction
  )

  ctx.restore()
}

const FractalTrees = () => {
  const canvas = useRef()
  const [scale, setScale] = useState(1)

  const baseWidth = 8
  const [width, height] = [900 * scale, 670 * scale]
  const [length, setLength] = useState(120 * scale)
  const [angle, setAngle] = useState(5)
  const [segments, setSegments] = useState(12)
  const [jitter, setJitter] = useState(10)

  const redraw = () => {
    const ctx = canvas.current.getContext("2d")
    canvas.current.style.width = "100%"
    canvas.current.style.height = "100%"
    canvas.current.width = width
    canvas.current.height = height
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    draw(
      ctx,
      true,
      width / 2,
      height - 70 * scale,
      length,
      segments,
      angle,
      jitter,
      baseWidth
    )
  }

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setScale(window.outerWidth > 500 ? 1 : 0.4)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  useEffect(redraw, [length, angle, jitter, segments, scale])

  return (
    <Layout className="noselect">
      <h1>Fractal Trees</h1>

      <canvas onClick={redraw} ref={canvas} />
      <br />

      <RangeInput
        label="length"
        min={40 * scale}
        max={120 * scale}
        step={10 * scale}
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
