import React, { useRef, useEffect, useState } from "react"
import Layout from "../../components/layout"
import RangeInput from "../../components/input/range"

const draw = (ctx, first, startX, startY, len, angle, branchWidth) => {
  ctx.beginPath()
  ctx.save()

  ctx.translate(startX, startY)
  ctx.rotate(first ? 0 : (angle * Math.PI) / 180)
  ctx.lineWidth = branchWidth
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -len)
  ctx.stroke()

  if (len < 8) {
    ctx.restore()
    return
  }

  draw(ctx, false, 0, -len, len * 0.8, -angle, branchWidth * 0.8)
  draw(ctx, false, 0, -len, len * 0.8, angle, branchWidth * 0.8)

  ctx.restore()
}

const Draw = () => {
  const canvas = useRef()
  const width = 900
  const height = 670
  const [length, setLength] = useState(120)
  const [angle, setAngle] = useState(40)

  useEffect(() => {
    const ctx = canvas.current.getContext("2d")
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    draw(ctx, true, width / 2, height - 70, length, angle, 8)
  }, [length, angle])

  return (
    <Layout>
      <h1>Fractal Trees</h1>

      <canvas ref={canvas} width={width} height={height} />
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
        label="angle"
        min={5}
        max={50}
        step={1}
        value={angle}
        onChange={setAngle}
      />
    </Layout>
  )
}

export default Draw
