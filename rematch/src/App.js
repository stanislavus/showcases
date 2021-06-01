import React, { useRef, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

const SHAPE_TYPES = {
  RECT: 'rect',
};

const COLORS = {
  GREEN: 'green',
};

class Renderer {

  constructor(ctx) {
    this.ctx = ctx;
  }

  render(type, data) {
    switch (type) {
      case SHAPE_TYPES.RECT:
        this.renderRect(data);
        break;
    }
  }

  renderRect(data) {
    console.log(data.color, data.x, data.y, data.width, data.height);
    this.ctx.fillStyle = data.color;
    this.ctx.fillRect(data.x, data.y, data.width, data.height);
  }

}

class Capturer {

  constructor(ctx) {
    this.ctx = ctx;
    this.startEvent = null;
    this.endEvent = null;
  }

  start(event) {
    this.startEvent = event;
  }
  end(event) {
    this.endEvent = event;
  }
  
  getData(type, color) {
    switch (type) {
      case SHAPE_TYPES.RECT:
        return this.getRectData(color);
        break;
    }
  }
  getRectData(color) {
    return {
      x: this.startEvent.clientX - this.ctx.canvas.offsetLeft,
      y: this.startEvent.clientY - this.ctx.canvas.offsetTop,
      width: this.endEvent.clientX - this.startEvent.clientX,
      height: this.endEvent.clientY - this.startEvent.clientY,
      color,
    };
  }
}

function App({ shapes, addShape, reset }) {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [capturer, setCapturer] = useState(null);
  const [selectedShape, selectShape] = useState(SHAPE_TYPES.RECT);
  const [selectedColor, selectColor] = useState(COLORS.GREEN);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    setCtx(context);
    setRenderer(new Renderer(context));
    setCapturer(new Capturer(context));
  }, [canvasRef.current]);


  useEffect(() => {
    console.log(shapes, ctx, renderer);
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    shapes.forEach(({type, data}) => {
      console.log(type, data);
      renderer.render(type, data);
    });
  }, [shapes, ctx, renderer]);

  useEffect(() => {
    if (shapes.length === 10) {
      reset();
    }
  }, [shapes])
  
  const handleStartDraw = useCallback(e => capturer.start(e), [capturer]);
  const handleEndDraw = useCallback(e => {
    capturer.end(e);
    addShape({type: selectedShape, data: capturer.getData(selectedShape, selectedColor)});
  }, [capturer]);

  return (
    <div className="App">
      <canvas ref={canvasRef} width={500} height={300} onMouseDown={handleStartDraw} onMouseUp={handleEndDraw} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  shapes: state.main.get('shapes').toArray(),
});

const mapDispatchToProps = ({main: { addShape, reset }}) => ({
  addShape,
  reset,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
