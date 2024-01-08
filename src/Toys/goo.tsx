import React, { useEffect } from 'react';
import { useSpring, animated as anim } from 'react-spring';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const waveConfig = { tension: 80, friction: 20, mass: 5, delay: 100 };

const Goo = () => {
  const [{ pos1 }, set] = useSpring(() => ({ pos1: [0, 0], config: fast }));
  const [{ pos2 }] = useSpring(() => ({ pos2: pos1, config: slow }));
  const [{ pos3 }] = useSpring(() => ({ pos3: pos2, config: slow }));

  const [{ x1 }, setX1] = useSpring(() => ({ x1: 0, config: waveConfig }));
  const [{ x2 }, setX2] = useSpring(() => ({ x2: 0, config: waveConfig }));
  const [{ x3 }, setX3] = useSpring(() => ({ x3: 0, config: waveConfig }));

  useEffect(() => {
    const handler = ({ clientX, clientY }) => {
      set({ pos1: [clientX, clientY] });
      setX1({ x1: clientX / 30 });
      setX2({ x2: clientX / 20 });
      setX3({ x3: clientX / 15 });
    };

    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  }, [set, setX1, setX2, setX3]);

  return (
    <>
      <style>
        {`
          body,
          #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: white;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
              ubuntu, roboto, noto, segoe ui, arial, sans-serif;
            background: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: default;
          }

          .hooks-main {
            width: 100%;
            height: 100%;
            background: lightblue;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .b1,
          .b2,
          .b3 {
            position: absolute;
            will-change: transform;
            border-radius: 50%;
            background: lightyellow;
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
            opacity: 0.6;
          }

          .b1 {
            width: 170px;
            height: 170px;
          }

          .b2 {
            width: 350px;
            height: 350px;
          }

          .b3 {
            width: 200px;
            height: 200px;
          }

          .b1::after,
          .b2::after,
          .b3::after {
            content: '';
            position: absolute;
            top: 50px;
            left: 50px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.8);
          }

          .b2::after {
            top: 70px;
            left: 70px;
            width: 70px;
            height: 70px;
          }

          .b3::after {
            top: 50px;
            left: 50px;
            width: 50px;
            height: 50px;
          }

          .hooks-filter {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: url('#goo');
            overflow: hidden;
          }
        `}
      </style>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <anim.div className="b1" style={{ transform: pos3.interpolate(trans) }} />
          <anim.div className="b2" style={{ transform: pos2.interpolate(trans) }} />
          <anim.div className="b3" style={{ transform: pos1.interpolate(trans) }} />
        </div>
        <animated.div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#EF2D56',
            position: 'absolute',
            transform: x1.interpolate((x) => `translateX(${x}px)`),
          }}
        />
        <animated.div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#EF2D56',
            position: 'absolute',
            transform: x2.interpolate((x) => `translateX(${x}px)`),
          }}
        />
        <animated.div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#EF2D56',
            position: 'absolute',
            transform: x3.interpolate((x) => `translateX(${x}px)`),
          }}
        />
      </div>
    </>
  );
};

export default Goo;
