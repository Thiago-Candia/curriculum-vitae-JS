    // boton de scroll para volver al inicio
    const scrollBtn = document.getElementById('scroll-top'); //busco elemento por id 'scroll top'
    // evento cada vez que se haga scroll
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400); // si el scroll es mayor a 400px se agrega la clase 'show' al btn
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }); // si se hace click en el btn se hace scroll hacia arriba


    // reveal de secciones 
    const sections = document.querySelectorAll('section:not(#hero)'); // selecciona todas las secciones excepto el hero
    // intersectionObserver -> API vigila si un elemento se encuentra en el viewport 
    //entries es la lista de elementos que cambiaron.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(s => observer.observe(s));


    // Form de contacto
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault(); 
      const msg = document.getElementById('form-msg');
      msg.style.display = 'block';
      this.reset();
      setTimeout(() => { msg.style.display = 'none'; }, 5000);
    });