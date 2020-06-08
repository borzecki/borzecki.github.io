import React, { useRef, useEffect, useState } from "react"
import {
  SwapOutlined,
  CaretRightOutlined,
  PauseOutlined,
} from "@ant-design/icons"

import styled from "@emotion/styled"
import Layout from "../../components/layout"
import RangeInput from "../../components/input/range"
import SEO from "../../components/seo"

import drawFractal from "../../utils/fractals"
import useInterval from "../../hooks/useInterval"

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  user-select: none;
  transition: all 0.3s;

  border: 1px solid transparent;
  border-color: black;
  border-radius: 50%;

  margin: 0 5px;
  min-width: 32px;
  text-align: center;
  padding: 2.4px 0;
  font-size: 16px;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      color: #d9d9d9;
      border-color: #d9d9d9;
    }
  }
`

// random int in range [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

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
  // animation control
  const [play, setPlay] = useState(false)

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

  const randomize = () => {
    setLength(getRandomInt(100, 120))
    setSegments(getRandomInt(5, 15))
    const newAngle = getRandomInt(5, 50)
    setAngle(newAngle)
    setJitter(getRandomInt(1, newAngle > 10 ? 2 : 10))
  }

  useInterval(redraw, play ? 500 : null)
  useEffect(redraw, [length, angle, jitter, segments])

  return (
    <Layout className="noselect">
      <SEO
        title="Fractal Trees"
        keywords={[
          `borzeckid`,
          `freelance`,
          `fractals`,
          `procedural generation`,
          `react`,
        ]}
      />
      <h1>Fractal Trees</h1>

      <Button shape="circle" onClick={() => setPlay(!play)}>
        {play ? <PauseOutlined /> : <CaretRightOutlined />}
      </Button>
      <Button onClick={() => randomize()} shape="circle">
        <SwapOutlined />
      </Button>
      <br />
      <canvas onClick={redraw} ref={canvas} width={width} height={height} />
      <br />
      <br />
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
