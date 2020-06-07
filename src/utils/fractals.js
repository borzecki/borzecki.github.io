export const lengthReduction = 0.8
export const widthReduction = 0.8

const recurrentFractal = (
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

  recurrentFractal(
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
  recurrentFractal(
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

export default recurrentFractal
