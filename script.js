document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        })
    },options);

    const partmoveElements = document.querySelectorAll('.partmove, .catchmove');
    partmoveElements.forEach(el => observer.observe(el));

    document.querySelectorAll('#nav a').forEach(a=>{
        a.addEventListener('click',()=>{
            a.classList.add('tapflash');
            setTimeout(()=>a.classList.remove('tapflash'),600);
        });
    });
});