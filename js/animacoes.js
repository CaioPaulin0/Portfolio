const div = document.querySelector('.habCont');
const proj = document.querySelector('.projetosCont');    
const sites = document.querySelector('.sitesCont');    
    // Função callback quando a div aparece na tela
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('add')
          // Aqui você pode fazer algo com o valor da div
        }
      });
    };

    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver(callback, {
      root: null, // Use o viewport como root
      threshold: 0.2 // A div deve estar ao menos 10% visível para acionar o callback
    });

    // Observar a div
    observer.observe(div);
    observer.observe(proj);
    observer.observe(sites);
