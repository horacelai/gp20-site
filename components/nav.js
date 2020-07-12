import { Fragment, useState, useRef } from 'react';
import { useSpring, useChain, useTrail, animated } from 'react-spring';

const navs = [
    {
        location: '/home',
        name: '主頁'
    },
    {
        location: '/yarn',
        name: '關於科大劇社'
    },
    {
        location: '/yarn',
        name: '製作人員'
    },
    {
        location: '/yarn',
        name: '相集'
    },
];

export default function Nav() {
    const assetPath = process.env.ASSET_PREFIX;
    const [opened, setOpen] = useState(false);
    const springRef = useRef();
    const { transform } = useSpring({
        ref: springRef,
        transform: `translateY(${!opened ? -100 : 0}%)`,
        config: { mass: 5, tension: 350, friction: 80 },
        from: { transform: 'translateY(-100%)'}
      });

    const trailRef = useRef();
    const trail = useTrail(navs.length, {
        ref: trailRef,
        config: { mass: 10, tension: 350, friction: 100 },
        opacity: !opened ? 0 : 1,
        transform: `translateY(${!opened ? -10 : 0}px)`,
        from: { opacity: 0, transform: 'translateY(-10px)' },
      })

    useChain(opened ? [springRef, trailRef] : [trailRef, springRef], [0, 0.7]);

    return (
        <Fragment>
             <button className="nav-btn" onClick={()=> setOpen((opened) => !opened)}>
                 <img src={`${assetPath}hamburger.svg`} alt="menu" />
             </button>
             <animated.div className="nav-bar" style={{ transform }}>
                 <div className="nav-logo">
                     <img src={`${assetPath}logo_hor.svg`} alt="她他她的戀愛守則"/>
                 </div>
                 <nav>
                    {
                    trail.map(({ opacity, transform, ...rest }, index) => (
                        <animated.div key={index} className="nav-item" style={{ ...rest, transform, opacity}}>
                            {navs[index].name}
                        </animated.div>
                    ))
                }
                 </nav>
             
             </animated.div>
        </Fragment>
    )
}