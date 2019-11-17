//  Use this to Target CSS Pseudo selectors
gsap.registerPlugin(CSSRulePlugin);
const rule = CSSRulePlugin.getRule("span:after");


//gsap.to('.content', { opacity: 0, duration: 1, y: -50 });

// gsap.from('.anim1', { opacity: 0, duration: 1, y: -50, stagger: 0.6, ease: 'Power2.easeInOut' });
// gsap.from('img', { duration: 1, y: 30, opacity: 0, delay: 1.4 });
// gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });
// gsap.from('aside', { duration: 1, delay: 1.1, backgroundPosition: '200px 0px', opacity: 0 });


const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from('.anim1', { y: -50, stagger: .6, opacity: 0 })
    .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, '-=2.2')
    .from('aside', { backgroundPosition: '200px 0px', opacity: 0 }, '-=1.5')
    .from('img', { y: 50, opacity: 0 }, '-=.5')


document.getElementById('cta').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
});