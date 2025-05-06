const div = document.querySelector('.habCont');
const proj = document.querySelector('.projetosCont');    
const sites = document.querySelector('.sitesCont');    
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('add')
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.2
    });

    // Observar a div
    observer.observe(div);
    observer.observe(proj);
    observer.observe(sites);
